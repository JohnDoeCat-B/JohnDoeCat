import { createApp } from 'vue'
import router from '@/router'
import { key, store } from '@/store'

import { ElIcon, ElLoading, ElCard, ElButton } from 'element-plus'
import App from './App.vue'

// 全局引入样式
import 'element-plus/lib/theme-chalk/index.css'
import '@/style/basic.styl'

createApp(App)
  .use(router)
  .use(store, key)
  .use(ElButton)
  .use(ElCard)
  .use(ElLoading)
  .use(ElIcon)
  .mount('#app')
