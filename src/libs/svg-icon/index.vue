<template>
  <svg aria-hidden="true">
    <use :class="fillClass" :xlink-href="symbolId" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  // svg名字
  name: {
    type: String,
    required: true,
  },
  // 直接指定svg的图标颜色
  color: {
    type: String,
  },
  // 通过tailwind 指定svg的颜色类名
  fillClass: {
    type: String,
  },
});
const symbolId = computed(() => `#icon-${props.name}`);
</script>

<style lang="scss" scoped></style>
