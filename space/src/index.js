import App from './App'
import './public/iconfont/iconfont.css'
import Vue from 'vue'
import router from './router-config'
// import './filters'
// import { getCookie, parseString } from 'utils'
import axios from 'g-public/js/axios/caxios'
import vueMeta from 'vue-meta'
import qs from 'qs'
// import bus from 'bus'
import jsonp from 'promised-jsonp'
import store from './vuex/'
// import installDirectives from './directives'

if (process.env.NODE_ENV === 'production') {
    Vue.config.silent = true
    Vue.config.productionTip = false
}

// Vue.prototype.$bus = bus
// installDirectives(Vue)

Vue.use(vueMeta)

// 给逗号加个全局的keyup
Vue.config.keyCodes.comma = 188

const isIE = function () {
    return !!window.ActiveXObject || "ActiveXObject" in window;
}
Vue.prototype.isIE = isIE()

const apiRE = /^\/\/api.bilibili.com/
const $http = config => {
  // let { method, url, data = {}, params = {}, headers } = config
  let { method, url, data = {}, params = {}, } = config
  method = method.toLowerCase()

  if (apiRE.test(url)) {
    if (method === 'post') {
      data.jsonp = 'jsonp'
    } else {
      params.jsonp = 'jsonp'
    }
  }
  if (method === 'post') {
    // if (Vue.prototype.$isServer) {
    //   data.csrf = parseString(headers.cookie).bili_jct
    // } else {
    //   data.csrf = getCookie('bili_jct')
    // }
    config.withCredentials = true
    // 调整data为string，以支持跨域的post请求
    // https://github.com/axios/axios#using-applicationx-www-form-urlencoded-format
    config.data = qs.stringify(data)
  }
  config.params = params
  return axios(config)
}
$http.get = (url, config = {}) => {
  config.url = url
  config.method = 'get'
  config.withCredentials = true
  return $http(config)
}
$http.post = (url, data = {}) => {
  return $http({
    url,
    data,
    method: 'post',
  })
}
$http.jsonp = jsonp
Vue.http = $http

// export function createApp(ssrContext) {
export function createApp() {
    // if (process.env.VUE_ENV === 'client') {
    //   let currenthash = window.location.hash
    //   if (currenthash.indexOf('/!') > -1) {
    //     window.location.hash = currenthash.replace('/!', '')
    //   }
    // }
    const app = new Vue({
        router,
        store,
        // ssrContext,
        render: h => h(App),
    })
    // return { app, router, store }
    return {app}
}
