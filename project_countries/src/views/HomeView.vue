<template>
  <div class="wrapper-home">
    <div style="width: 1366px; margin: 0 auto;">
      <div class="d-flex justify-space-between mt-5">
        <div class="txt-search">
          <v-text-field
            v-model="store.search"
            @update:modelValue="handleSearch"
            label="Search for a country..."
            prepend-inner-icon="fa-solid fa-magnifying-glass"
            variant="contained"
          ></v-text-field>
        </div>
        <div style="width: 300px;">
          <v-select
            v-model="store.select"
            :items="country.regions"
            :rules="[(v: any) => !!v || 'Item is required']"
            label="Filter by Region"
            required
            @update:modelValue="handleChangeRegion($event)"
          ></v-select>
        </div>
      </div>
      <div class="home-body">
          <Card :country="arrCountries"></Card>
      </div>
      <div class="text-center mt-10">
      <v-pagination
        v-model="country.page"
        :length="country.totalPage"
        :total-visible="7"
        @click="handleChangePage"
      ></v-pagination>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/stores/contries.pinia';
import { computed } from '@vue/reactivity';
import { defineComponent, onMounted, reactive, ref } from 'vue';
import Card from '../components/Card.vue';
import { SELECT } from "@/global.ts/global.const";

export default defineComponent({
  name: 'HomeView',

  components: {
    Card
  },

  setup() {
    const search = ref('');
    const select = ref(SELECT);
    const regions = ref([
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ]);

    const country = useStore();

    const store = reactive({
      select, regions, search
    })

    onMounted(async () => {
      country.getCountries();
    })

    const handleChangePage = () => {
      country.changePage(country.page);
    }

    const handleGetCountry = () => {
      
    }

    const handleChangeRegion = (event: any) => {
      country.changePage(1);
      country.callCountries(search.value.toString(), event);
    }

    const handleSearch = (event: any) => {
      country.callCountries(event, select.value.toString());
    }

    return {
      store,
      country,
      arrCountries: computed(() => country.limitCountries),
      page: computed(() => country.page),
      handleChangePage,
      handleSearch,
      handleChangeRegion
    }
  }
});
</script>

<style>
.txt-search {
  width: 600px;
}

.home-body {
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));

}
</style>
