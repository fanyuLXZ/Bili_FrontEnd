import Vue from 'vue'
import VueRouter from 'vue-router'
import bilibtn from '../views/bili-btn.vue'
import bilihome from '../views/bili-home.vue'
import bilihomes from '../views/bili-homes.vue'
import bililogin from '../views/bili-login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/bili-btn/:pan/:verify',
    name: 'bili-btn',
    component: bilibtn
  },
  {
    path: '/bili-homes/:identify',
    name: 'bili-homes',
    component: bilihomes
  },
  {
    path: '/bili-home',
    name: 'bili-home',
    component: bilihome
  },
  {
  path:'/bili-login',
  name:'bili-login',
  component: bililogin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
