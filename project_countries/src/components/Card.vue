<script setup lang="ts">
    const props = defineProps(['country'])
</script>

<template>
    <div v-for="(item, index) in country" :key="index" class="wrapper-card mt-5">
       <div><img :src=item.flag style="width: 320px; height: 180px;"></div>
        <div class="pt-2 pb-5 pl-8 pr-8">
            <h3>{{ item.name }}</h3>
            <div class="d-flex mt-4" style="white-space: nowrap;">
                <p><b>Population:</b> {{ item.population}}</p>
            </div>
            <div class="d-flex mt-2">
                <b>Region:</b><p> {{ item.region}}</p>
            </div>
            <div class="d-flex mt-2">
                <b>Capital:</b><p> {{ item.capital}}</p>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss">
    .wrapper-card{
        width: 320px;
        background-color: white;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 4px 8px 0 rgba(146, 146, 146, 0.19), 0 6px 20px 0 rgba(146, 146, 146, 0.19);
    }
</style>