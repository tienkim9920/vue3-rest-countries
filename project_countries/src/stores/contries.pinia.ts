import { getAll } from "@/service/api.service";
import { defineStore } from "pinia";

export const useStore = defineStore('country', {
  state: () => {
    return {
      arrCountries: [] as any[],
      page: 0 as number,
      totalPage: 0 as number,
      arrCountriesBackup: [] as any[],
      regions: [] as any[]
    }
  },
  getters: {
    limitCountries: (state) => {
      let start: number = state.page * 8;
      let end: number = (state.page + 1) * 8;
      
      return state.arrCountries.slice(start, end);
    }
  },
  actions: {
    async getCountries() {
      const res = await getAll();
      this.arrCountries = res.data;
      this.arrCountriesBackup = res.data;
      this.totalPage = Math.ceil(this.arrCountries.length / 8);
      
      this.regions = [...new Set(this.arrCountries.map(x => x.region))];
    },
    changePage(currentPage: number) {
      this.page = currentPage;
    },
    searchCountries(keyword: string) {
      if (!keyword){
        this.arrCountries = this.arrCountriesBackup;
        this.totalPage = Math.ceil(this.arrCountries.length / 8);
        return;
      }

      const contriesFilter = this.arrCountriesBackup.filter((element: any) => {
        return element.name.toUpperCase().indexOf(keyword.toUpperCase()) != -1
      })

      this.totalPage = Math.ceil(contriesFilter.length / 8);

      this.arrCountries = contriesFilter;
    }
  }
});
