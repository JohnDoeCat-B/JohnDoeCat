import { createApp } from 'vue'

const app = createApp({})
// 注册一个名为bar-component的组件
app.component('bar-component', {
  props: {}
})
app.mount('#app')
