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
      path: '/account/history',
      name: "history",
      component: resolve => require(['../views/history'], resolve)
    },
    // 分区路由
    ...getRegionRouter(),
    {
      path: '*',
      redirect:"/"
    },
  ],
}))

import {MenuConfig} from "g-public/js/config/menuConfig";

let getRegionRouter=()=>{
  let routerConfig = []
  MenuConfig.forEach((v)=>{
    if (v.tid===""){
      return
    }
    // 解析是否有子分区
    let smallRegionRouterConfigs = v.sub?v.sub:undefined
    routerConfig.push({
      path:"/v/"+v.route,
      name:v.route,
      component:resolve => require(['../views/channel-m'], resolve),
    })
    routerConfig.push(...smallRegionRouterConfigs?.map((val)=>{
      if (val?.route){
        return {
          path:"/v/"+v.route+"/"+val.route,
          name:v.route+"-"+val.route,
          component:resolve => require(['../views/sub-channel-m'], resolve),
        }
      }
    }))
  })
  routerConfig=routerConfig.filter((v)=>{
    return v!==undefined
  })
  return routerConfig
}
export default createRouter
