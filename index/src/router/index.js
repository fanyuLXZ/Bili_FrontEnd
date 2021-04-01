
import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'

Vue.use(Router)

const createRouter = () =>(new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: App
  }],
}))

export default createRouter