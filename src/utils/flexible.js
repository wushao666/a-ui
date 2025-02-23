import {computed } from 'vue'
import { PC_DEVICE_WIDTH } from '@/constants'
import { useWindowSize } from '@vueuse/core'

//根据ua头
// export const isMobileTerminal = computed(() => {
//   return /Android|webOS|iphone/i.test(
//     navigator.userAgent
//   )
// })
// 优化，根据vueuse库的响应式来做
const { width } = useWindowSize()
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})