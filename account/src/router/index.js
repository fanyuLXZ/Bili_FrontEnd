import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from "vue-router";

Vue.use(VueRouter)


const router = new Router({
  mode: 'history',
  routes:[
    {
      path:"/home",
      component:resolve => require(['../views/Home.vue'], resolve)
    },
    {
      path:"/big",
      component:resolve => require(['../views/Big'], resolve)
    },
    {
      path:"/coin",
      component:resolve => require(['../views/Coin'], resolve)
    },
    {
      path:"/face",
      component:resolve => require(['../views/Face'], resolve),
      children:[
        {
          path:"/face/mall",
          component:resolve => require(['../views/face/Mall'], resolve)
        },
        {
          path:"/face/article",
          component:resolve => require(['../views/face/Upload'], resolve)
        },
        {
          path:"",
          redirect:"/face/mall"
        }
      ]

    },
    {
      path:"/points",
      component:resolve => require(['../views/Points.vue'], resolve)
    },
    {
      path:"/setting",
      component:resolve => require(['../views/Setting.vue'], resolve)
    },
    {
      path:"*",
      redirect:"/home"
    }
  ]
})

export default router
