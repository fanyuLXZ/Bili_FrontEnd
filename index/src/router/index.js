import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/international-home'
import aboutBody from '../components/blackboard/aboutBody.vue'
import contactBody from '../components/blackboard/contactBody.vue'
import friendsBody from '../components/blackboard/friendsBody.vue'
import joinBody from '../components/blackboard/joinBody.vue'
import privacyBody from '../components/blackboard/privacyBody.vue'
import blackRoomFileBody from '../components/blackboard/blackRoomFileBody.vue'
import actListBody from '../components/blackboard/actListBody.vue'
import protocolMenuBody from "../components/blackboard/ProtocolMenuBody";
import player from "../components/video/Player";
import douga from "../components/Zoning/normalZone";
import videohome from "../components/video/videohome";
import history from "../views/history";
Vue.use(Router)

const createRouter = () => (new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "home",
      component: home
    },
    {
      path: '/videohome',
      name: "videohome",
      component: videohome
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
      path: '/blackboard/joinUs',
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
    },
    {
      path: '/blackboard/protocolMenu',
      name: "ProtocolMenuBody",
      component: protocolMenuBody
    },
    {
      path: '/video',
      name: "Player",
      component: player
    },
    {
      path: '/zone/douga',
      name: "douga",
      component: douga
    },
    {
      path: '/account/history',
      name: "history",
      component: history
    },
  ],
}))

export default createRouter
