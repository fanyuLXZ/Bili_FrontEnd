import Vue from 'vue'
import VueRouter from 'vue-router'
import bilibtn from '../views/bili-btn.vue'
import bilihome from '../views/bili-home.vue'
import bilihomes from '../views/bili-homes.vue'
import bililogin from '../views/bili-login.vue'
import register from '../views/bili-register.vue'
import {getCookie} from "g-public/utils/cookie";

Vue.use(VueRouter)

const routes = [
    {
        path: '/bili-btn/:pan/:verify',
        name: 'bili-btn',
        component: bilibtn
    },
    {
        path: '/account/security/setpassword',
        name: 'setpassword',
        component: bilihomes,
        props:{
            mode:"pwd"
        }
    },
    {
        path: '/account/security/bindmail',
        name: 'bindmail',
        component: bilihomes,
        props:{
            mode:"email"
        }
    },
    {
        path: '/account/security/home',
        name: 'bili-home',
        component: bilihome
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/login',
        name: 'login',
        component: bililogin
    },
    {
        path: '*',
        redirect:"/account/security/home"
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

const verify_has_token = ()=>{
    return !!getCookie("token")
}

router.beforeEach((to, from, next) => {
    if (verify_has_token())
        next()
    else
        if (to.name==="login"||to.name==="register") next()
        else next({ name: 'login' })
})

export default router
