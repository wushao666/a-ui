<template>
  <mobile-navigation-vue v-if="isMobileTerminal" :data="categoryData">

  </mobile-navigation-vue>
</template>

<script setup>
import { isMobileTerminal } from "@/utils/flexible";
import mobileNavigationVue from './mobile/index.vue'
import { getCategory } from "@/api/category";
import { ref } from "vue";

const categoryData = ref([])
const getCategoryData = async () => {
  const {categorys: categories} = await getCategory()
  console.log('categories is: ', categories);
  categoryData.value = categories
}
getCategoryData()
</script>

<style lang="scss" scoped>

</style>