import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { join } from 'path'
import path from 'path'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      //指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      //指定symbolId的格式
      symbolId: 'icon-[name]'
    })
  ],
  resolve: {
    alias: {
      // '@': join(__dirname, '/src'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  //开启代理
  server: {
    proxy: {
      '/api': {
        //代理请求后的请求地址
        target: 'https://api.imooc-front.lgdsunday.club/',
        changeOrigin: true
      }
    }
  }
})
