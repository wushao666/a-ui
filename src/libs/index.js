//通用组件的注册
import svgIcon from "./svg-icon/index.vue";

export default {
  install(app) {
    app.component('m-svg-icon', svgIcon)
  }
}