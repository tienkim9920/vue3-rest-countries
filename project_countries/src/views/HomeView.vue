<template>
  <div class="wrapper-home">
    <div style="width: 1366px; margin: 0 auto;">
      <div class="d-flex justify-space-between mt-5">
        <div class="txt-search">
          <v-text-field
            label="Search for a country..."
            prepend-inner-icon="fa-solid fa-magnifying-glass"
            variant="contained"
          ></v-text-field>
        </div>
        <div style="width: 300px;">
          <v-select
            v-model="store.select"
            :items="store.regions"
            :rules="[(v: any) => !!v || 'Item is required']"
            label="Filter by Region"
            required
          ></v-select>
        </div>
      </div>
      <div class="home-body">
        <div v-for="(item, index) in store.countries" :key="index">
          <Card :country="item" :test="123"></Card>
        </div>
      </div>
      <div class="text-center mt-10">
      <v-pagination
        v-model="store.page"
        :length="15"
        :total-visible="7"
      ></v-pagination>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import Card from '../components/Card.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Card
  },

  setup() {
    const page = ref(1);
    const select = ref('');
    const regions = ref([
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ]);

    const countries = ref([
      {
        id: 1,
        name: 'Viet Nam',
        population: '123',
        region: 'Asia',
        capital: 'Hà Nội'
      },
      {
        id: 2,
        name: 'Viet Nam',
        population: '123',
        region: 'Asia',
        capital: 'Hà Nội'
      },
      {
        id: 3,
        name: 'Viet Nam',
        population: '123',
        region: 'Asia',
        capital: 'Hà Nội'
      },
      {
        id: 4,
        name: 'Viet Nam',
        population: '123',
        region: 'Asia',
        capital: 'Hà Nội'
      },
      {
        id: 5,
        name: 'Viet Nam',
        population: '123',
        region: 'Asia',
        capital: 'Hà Nội'
      },
      {
        id: 6,
        name: 'Viet Nam 6',
        population: '123',
        region: 'Asia',
        capital: 'Hà Nội'
      },
      {
        id: 7,
        name: 'Viet Nam 7',
        population: '123',
        region: 'Asia',
        capital: 'Hà Nội'
      },
      {
        id: 8,
        name: 'Viet Nam 8',
        population: '123',
        region: 'Asia',
        capital: 'Hà Nội'
      },
    ])

    const store = reactive({
      page, select, regions, countries
    })

    const handleGetCountryDetail = (id: string) => {
      console.log(id)
    }

    return {
      store
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
