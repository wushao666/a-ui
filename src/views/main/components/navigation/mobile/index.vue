<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul 
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
      ref="ulTarget"
    >
      <!-- 面包屑 svg图标 -->
      <li 
        class="z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white shadow-l-white"
        @click="isOpenPopup = !isOpenPopup"
      >
        <m-svg-icon class=" w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>
      <!-- slider滑块，文字的背景板 -->
      <li 
        ref="sliderTarget" 
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
        :style="sliderStyle"
      >

      </li>
      <!-- 目录各个项 -->
      <li
        :ref="setItemRef"
        @click="onItemClick(index)"
        v-for="(item, index) in data"
        :key="item.id"
        class=" shrink-0 px-1.5 z-10 duration-200 last:mr-4"
        :class="{
          'text-zinc-100': currentCategoryIndex === index
        }"
      >
        {{ item.name }}
      </li>
      
    </ul>
    <m-popup v-model="isOpenPopup">
      <div>测试弹窗内容</div>
    </m-popup>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeUpdate } from "vue";
import { useScroll } from "@vueuse/core";

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
//滑块的style
const sliderStyle = ref({
  transform: 'translateX(0px) translateY(-3px)',
  width: '52px'
})
// 选中的item的下标
const currentCategoryIndex = ref(0)
// 获取填充的所有item元素
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}
// 下次更新时清空
onBeforeUpdate(() => {
  itemRefs = []
})
// 获取当前的ul元素
const ulTarget = ref(null)
// 获取当前ul容器的滚动位置
const { x: ulScrollLeft } = useScroll(ulTarget)

// 监听当前选中的下标，更新样式
watch(currentCategoryIndex, (currentIndex) => {
  const val = itemRefs[currentIndex]
  const {width, left} = val.getBoundingClientRect()
  sliderStyle.value = {
    transform: `translateX(${ulScrollLeft.value + left - 10}px) translateY(-3px)`,
    width: `${width}px`
  }
})
const onItemClick = (index) => {
  console.log('index is ', index)
  currentCategoryIndex.value = index
}

// 控制popup
const isOpenPopup = ref(false)
</script>

<style lang="scss" scoped>

</style>