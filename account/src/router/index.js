import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from "vue-router";
import Home from '../views/Home.vue'
import Big from  "../views/Big"
import Coin from "../views/Coin"
import Face from "../views/Face"
import Points from "../views/Points"
import Setting from "../views/Setting"
import Upload from "../views/face/Upload"
import Mall from "../views/face/Mall"

Vue.use(VueRouter)


const router = new Router({
  mode: 'history',
  routes:[
    {
      path:"/home",
      component:Home
    },
    {
      path:"/big",
      component:Big
    },
    {
      path:"/coin",
      component:Coin
    },
    {
      path:"/face",
      component:Face,
      children:[
        {
          path:"/face/mall",
          component:Mall
        },
        {
          path:"/face/upload",
          component:Upload
        },
        {
          path:"",
          redirect:"/face/mall"
        }
      ]

    },
    {
      path:"/points",
      component:Points
    },
    {
      path:"/setting",
      component:Setting
    },
    {
      path:"*",
      redirect:"/home"
    }
  ]
})

export default router
