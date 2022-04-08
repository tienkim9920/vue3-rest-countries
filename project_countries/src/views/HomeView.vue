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
          <Card :country="store.countries"></Card>
      </div>
      <div class="text-center mt-10">
      <v-pagination
        v-model="store.page"
        :length="15"
        :total-visible="7"
      ></v-pagination>
      {{ arrCountries }}
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/stores/contries.pinia';
import { computed } from '@vue/reactivity';
import { defineComponent, onMounted, reactive, ref } from 'vue';
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

    const country = useStore();

    const store = reactive({
      page, select, regions, countries
    })

    onMounted(async () => {
      country.getCountries();
    })

    return {
      store,
      arrCountries: computed(() => country.arrCountries),
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
