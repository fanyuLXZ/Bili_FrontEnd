import Vue from 'vue'
import Router from 'vue-router'
import App from '../components/international-index.vue'
import aboutBody from '../components/blackboard/aboutBody.vue'
import contactBody from '../components/blackboard/contactBody.vue'
import friendsBody from '../components/blackboard/friendsBody.vue'
import joinBody from '../components/blackboard/joinBody.vue'
import privacyBody from '../components/blackboard/privacyBody.vue'
import blackRoomFileBody from '../components/blackboard/blackRoomFileBody.vue'
import actListBody from '../components/blackboard/actListBody.vue'

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
    },
    {
      path: '/blackboard/friends',
      name: "friendsBody",
      component: friendsBody
    },
    {
      path: '/blackboard/join',
      name: "joinBody",
      component: joinBody
    },
    {
      path: '/blackboard/privacy',
      name: "privacyBody",
      component: privacyBody
    },
    {
      path: '/blackboard/blackroom',
      name: "blackRoomFileBody",
      component: blackRoomFileBody
    },
    {
      path: '/blackboard/act_list/:num',
      name: "actListBody",
      component: actListBody
    }
  ],
}))

export default createRouter
