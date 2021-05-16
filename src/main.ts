// import { createApp } from 'vue'
// import App from './App.vue'
//
// import router from './router'
// import { store } from "./store"
// // import ElementPlus from 'element-plus'
//
// // 全局引入样式
// import 'element-plus/lib/theme-chalk/index.css'
// createApp(App)
//   .use(router)
//   .use(store)
//   // .use(ElementPlus)
//   .mount('#app')
import { createApp } from 'vue'
import importUiFramework from '@/utils/import-ui-framework'
import router from '@/router/index'
import { key, store } from '@/store'
import App from './App.vue'
import '@/style/basic.styl'

const app = createApp(App)
importUiFramework(app).use(router).use(store, key).mount('#app')
