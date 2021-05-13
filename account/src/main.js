import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/personalcenter/global.css";
import "./assets/personalcenter/app.d70533e21fd1ad58c30455ac07bba416.css";
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
