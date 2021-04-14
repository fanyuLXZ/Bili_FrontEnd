import Vue from 'vue'
import VueRouter from 'vue-router'
import messagehome from '../views/messagehome.vue'
Vue.use(VueRouter)

const routes = [
 {
   path:'/message-home',
   name:'messagehome',
   component: messagehome
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
