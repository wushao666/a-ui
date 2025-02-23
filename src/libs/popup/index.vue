<template>
  <div class="">
    <teleport to="body">
      <!-- 蒙版/遮罩层 -->
      <transition name="fade">
        <div
          v-if="isOpen"
          class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
          @click="isOpen = false"
        ></div>
      </transition>
      <!-- 内容区 -->
      <transition name="popup-down-up">
        <div
          v-if="isOpen"
          v-bind="$attrs"
          class=" w-screen bg-white z-50 fixed bottom-0"
        >
          <slot/>
        </div>
      </transition> 
    </teleport>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useScrollLock } from "@vueuse/core";
import { useVModel } from "@vueuse/core";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
// const emits = defineEmits(["update:modelValue"]);
// 不需要主动触发了
const isOpen = useVModel(props)
// 滚动锁定
const isLocked = useScrollLock(document.body);
// 监听传入的值，来处理是否锁定
watch(
  // () => props.modelValue,
  // 直接监听isOpen就行
  () => isOpen,
  (val) => {
    isLocked.value = val;
  },
  {
    //立刻监听
    immediate: true,
  }
);
</script>

<style lang="scss" scoped>
// 给transition的name的类名加动画
.fade-enter-active {
  transition: all 0.3s;
}
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter-from,
.fade-enter-to {
  opacity: 0;
}
// popup-down-up 展示动画
.popup-down-up-enter-active {
  transition: all 0.3s;
}
.popup-down-up-leave-active {
  transition: all 0.3s;
}
.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>
