import Vue from 'vue'
import Router from 'vue-router'
import App from '../components/international-index.vue'
import aboutBody from '../components/blackboard/aboutUs/aboutBody.vue'

Vue.use(Router)

const createRouter = () => (new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "index",
      component: App
    },
    {
      path: '/about',
      name: "aboutBody",
      component: aboutBody
    }
  ],
}))

export default createRouter
