import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from "@/views/dynamic/Article";
import Dynamic from "@/views/Dynamic";
import Index from "@/views/dynamic/Index"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path:"/",
      component:Dynamic,
      children:[
        {
          path:"/dynamic",
          component:Index
        },
        {
          name:'Article',
          path:"/article/:dynamic_id",
          component:Article
        },
        {
          path:"",
          redirect:"/index"
        }
      ]
    },
    {
      path:"*",
      redirect:"/dynamic"
    }
  ]
})

export default router
