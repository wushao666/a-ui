//通用组件的注册
// import svgIcon from "./svg-icon/index.vue";
// import popup from "./popup/index.vue";

// export default {
//   install(app) {
//     app.component('m-svg-icon', svgIcon)
//     app.component('m-popup', popup)
//   }
// }
// 使用vite的自动注册，替换上面手写
import { defineAsyncComponent } from "vue";

export default {
  install(app) {
    //获取当前路径任意文件夹下的index.vue文件
    const components = import.meta.glob('./*/index.vue')
    // 遍历获取到的组件模块
    for(const [key, value] of Object.entries(components)) {
      //按照规则拼接组件注册的name
      console.log('import.meta.glob key is: ', key);
      
      const componentName = 'm-' + key.replace('./', '').split('/')[0]
      // 使用defineAsyncComponent异步导入指定路径下的组件
      app.component(componentName, defineAsyncComponent(value))
    }
  }
}