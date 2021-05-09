import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from "vue-router";
import Home from "@/views/platform/Home";
import ArticleA from "@/views/platform/upload-manager/Article";
import ArticleB from "@/views/platform/comment/Article";
import Index from "@/views/platform/data-up/Index";
import Fansview from "@/views/platform/fans/Fansview";
import Frame from "@/views/platform/upload/video/Frame";
Vue.use(VueRouter)

const router = new Router({
  mode: 'history',
  routes:[
    {
      path:"/platform/home",
      component:Home
    },
    {
      path:"/platform/upload-manager/article",
      component:ArticleA
    },
    {
      path:"/platform/data-up/index",
      component:Index
    },
    {
      path:"/platform/fans/fansview",
      component:Fansview
    },
    {
      path:"/platform/comment/article",
      component:ArticleB
    },
    {
      path:"/platform/upload/video/frame",
      component:Frame
    },
    {
      path:"*",
      redirect:"/platform/home"
    }
  ]
})

export default router
