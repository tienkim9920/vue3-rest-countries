import { SELECT } from "@/global.ts/global.const";
import { getAll } from "@/service/api.service";
import { defineStore } from "pinia";

export const useStore = defineStore('country', {
  state: () => {
    return {
      arrCountries: [] as any[],
      page: 1 as number,
      totalPage: 0 as number,
      arrCountriesBackup: [] as any[],
      regions: [] as any[],
    }
  },
  getters: {
    limitCountries: (state) => {
      let start: number = (state.page - 1) * 8;
      let end: number = (state.page) * 8;
      
      return state.arrCountries.slice(start, end);
    }
  },
  actions: {
    async getCountries() {
      const res = await getAll();
      this.arrCountries = res.data;
      this.arrCountriesBackup = res.data;
      this.totalPage = Math.floor(this.arrCountries.length / 8);
      
      this.regions = [...new Set(this.arrCountries.map(x => x.region))];
      this.regions = [SELECT, ...this.regions];
    },

    changePage(currentPage: number) {
      this.page = currentPage;
    },

    callCountries(keywordSearch: string, keywordFilter: string) {

      const checkFilter = keywordFilter === SELECT ? true : false;

      if (checkFilter){
        this.arrCountries = this.arrCountriesBackup.filter((element: any) => {
          return element.name.toUpperCase().indexOf(keywordSearch.toUpperCase()) !== -1
        })
      }else {
        this.arrCountries = this.arrCountriesBackup.filter((element: any) => {
          return element.name.toUpperCase().indexOf(keywordSearch.toUpperCase()) !== -1 && element.region == keywordFilter
        })
      }

      if (checkFilter && this.arrCountries.length === 0){
        this.arrCountries = this.arrCountriesBackup;
        console.log("54");
      }else if (!checkFilter && this.arrCountries.length === 0 && !keywordSearch) {
        this.arrCountries = this.arrCountriesBackup.filter((element: any) => {
          return element.region == keywordFilter
        })
      }

      this.totalPage = Math.floor(this.arrCountries.length / 8);
      if (this.totalPage === 0){
        this.totalPage = 1;
      }
    }
  }
});
