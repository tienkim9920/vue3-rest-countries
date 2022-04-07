<template>
  <v-app class="wrapper-container">
    <v-main>
      <Header></Header>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'

export default defineComponent({
  name: 'App',

  components: {
    Header
  },

  data () {
    return {
      //
    }
  },
})
</script>

<style lang="scss">

  .wrapper-container {
    background-color: #FAFAFA;
  }
</style>
