import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const createRouter = () => (new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "home",
      component: resolve => require(['../components/international-home'], resolve),
    },
    {
      path: '/blackboard/about',
      name: "aboutBody",
      component: resolve => require(['../components/blackboard/aboutBody.vue'], resolve)
    },
    {
      path: '/blackboard/contact',
      name: "contactBody",
      component: resolve => require(['../components/blackboard/contactBody.vue'], resolve)
    },
    {
      path: '/blackboard/friends',
      name: "friendsBody",
      component: resolve => require(['../components/blackboard/friendsBody.vue'], resolve)
    },
    {
      path: '/blackboard/joinUs',
      name: "joinBody",
      component: resolve => require(['../components/blackboard/joinBody.vue'], resolve)
    },
    {
      path: '/blackboard/privacy',
      name: "privacyBody",
      component: resolve => require(['../components/blackboard/privacyBody.vue'], resolve)
    },
    {
      path: '/blackboard/blackroom',
      name: "blackRoomFileBody",
      component: resolve => require(['../components/blackboard/blackRoomFileBody.vue'], resolve)
    },
    {
      path: '/blackboard/act_list/:num',
      name: "actListBody",
      component: resolve => require(['../components/blackboard/actListBody.vue'], resolve)
    },
    {
      path: '/blackboard/protocolMenu',
      name: "ProtocolMenuBody",
      component: resolve => require(['../components/blackboard/ProtocolMenuBody'], resolve)
    },
    {
      path: '/video/:bvid',
      name: "video",
      component: resolve => require(['../components/video/videohome'], resolve)
    },
    {
      path: '/zone/douga',
      name: "douga",
      component: resolve => require(['../components/Zoning/normalZone'], resolve)
    },
    {
      path: '/account/history',
      name: "history",
      component: resolve => require(['../views/history'], resolve)
    },
  ],
}))

export default createRouter
