import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import { useREM } from './utils/flexible'
import mLibs from "./libs"
import 'virtual:svg-icons-register' // Register SVG icons

useREM()

const app = createApp(App)
app.use(router)
app.use(mLibs)
app.mount('#app')
