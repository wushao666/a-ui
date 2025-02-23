import { PC_DEVICE_WIDTH } from '@/constants'
import { computed, watch } from 'vue'
import { useWindowSize, useDebounceFn } from '@vueuse/core'

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

export const useREM = () => {
  // 配置参数
  const config = {
    maxFontSize: 40,
    minFontSize: 16,
    divideFactor: 10, // 将屏幕宽度分成10等份好算
    debounceDelay: 100 // 防抖延迟时间（毫秒）
  }

  // 计算 fontSize
  const calculateFontSize = (innerWidth) => {
    let fontSize = innerWidth / config.divideFactor
    fontSize = Math.min(Math.max(fontSize, config.minFontSize), config.maxFontSize)
    return fontSize
  }

  // 使用防抖包装 setREM 函数
  const setREM = useDebounceFn(() => {
    const html = document.documentElement
    const fontSize = calculateFontSize(width.value)
    html.style.fontSize = `${fontSize}px`
  }, config.debounceDelay)

  // 监听窗口变化
  watch(width, () => {
    setREM()
  }, { immediate: true })

  // 初始化
  document.addEventListener('DOMContentLoaded', setREM)
}
export const useREMCourse = () => {
  //定义最大的fontSize
  const MAX_FONT_SIZE = 40

  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')

    let fontSize = window.innerWidth / 10
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE :fontSize

    html.style.fontSize = fontSize + 'px'
  })
}