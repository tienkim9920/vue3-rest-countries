import { getAll } from "@/service/api.service";
import { defineStore } from "pinia";

export const useStore = defineStore('country', {
  state: () => {
    return {
      arrCountries: [] as any[]
    }
  },
  actions: {
    async getCountries() {
      const res = await getAll();
      this.arrCountries = res.data;
    }
  }
});
