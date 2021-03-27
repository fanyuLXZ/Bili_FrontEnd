import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/bili_less/index.less"
//CSS 重置样式库
import "./assets/normalize.css"

createApp(App).use(store).use(router).mount('#app')
