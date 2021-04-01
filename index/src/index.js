import './assets/style/base.less'

import Vue from 'vue'
import Meta from 'vue-meta'
import './modules/@bilibili/van/dist/Popover/style.css'
import App from './App.vue'

import createStore from './vuex'
import createRouter from './router'
import Vuex from 'vuex'

import './public/js/directive'
import adReport from './public/js/plugin/adReport'

import Bfs from './modules/@blink-common/component.bfs-utils'
import { Image, Danmu, Framepreview, Watchlater, Slide, Lazyload, Backtop, Report } from './modules/@bilibili/van'
import './modules/bili-collect'
import './modules/@bilibili/van/dist/style/style.css'

import LiveLazyload from './public/js/plugin/lazyload'


Vue.use(Image)
Vue.use(Danmu)
Vue.use(Framepreview)
Vue.use(Watchlater)
Vue.use(Slide)
Vue.use(Lazyload, { preload: 100 })
Vue.use(Backtop)
Vue.use(Report)
Vue.use(Meta)
Vue.use(Vuex)

Vue.use(LiveLazyload)

Vue.prototype.$bfs = new Bfs()

// if(process.env.VUE_ENV === 'client'){
    // 引入iconfont
    require('./public/style/bili-iconfont/iconfont.css')
    require('./public/style/bili-iconfont/iconfont.js')

    Vue.use(adReport)
// }

export function createApp (ssrContext){
    const store = createStore()
    const router = createRouter()
    const app = new Vue({
        store,
        router,
        ssrContext,
        render: h => h(App)
    })
    return { app, router, store }
}