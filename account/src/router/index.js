import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from "vue-router";

Vue.use(VueRouter)


const router = new Router({
  mode: 'history',
  routes:[
      {
        path:"/account/home",
        name:"home",
        component:resolve => require(['../views/Home'], resolve)
      },
      {
        path:"/account/big",
        name:"big",
        component:resolve => require(['../views/Big'], resolve)
      },
      {
        path:"/account/coin",
        name:"coin",
        component:resolve => require(['../views/Coin'], resolve)
      },
      {
        path:"/account/face",
        name:"face",
        component:resolve => require(['../views/Face'], resolve),
        children:[
          {
            path:"/account/face/mall",
            name:"mall",
            component:resolve => require(['../views/face/Mall'], resolve)
          },
          {
            path:"/account/face/upload",
            name:"upload",
            component:resolve => require(['../views/face/Upload'], resolve)
          },
          {
            path:"/",
            name:"mall",
            component:resolve => require(['../views/face/Mall'], resolve)
          }
        ]
      },
      {
        path:"/account/points",
        name:"points",
        component:resolve => require(['../views/Points.vue'], resolve)
      },
      {
        path:"/account/setting",
        name:"setting",
        component:resolve => require(['../views/Setting.vue'], resolve)
      },
    {
      path: '*',
      redirect:"/account/home"
    }
  ]
})

export default router
