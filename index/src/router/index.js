import Vue from 'vue'
import Router from 'vue-router'
import App from '../components/international-index.vue'
import aboutBody from '../components/blackboard/aboutUs/aboutBody.vue'
import contactBody from '../components/blackboard/aboutUs/contactBody.vue'

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
      path: '/blackboard/about',
      name: "aboutBody",
      component: aboutBody
    },
    {
      path: '/blackboard/contact',
      name: "contactBody",
      component: contactBody
    }
  ],
}))

export default createRouter
