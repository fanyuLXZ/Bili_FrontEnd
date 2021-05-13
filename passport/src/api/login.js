import axios from "g-public/js/axios/caxios";

// 账号密码登陆
export const login_by_up = (username,password) => {
    const qs = require('qs')
    return axios({
        url: '//api.bilibili.org/safety/login',
        withCredentials: true,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify({
            username,
            password
        }),
        method: 'post'
    })
}

// 是否登陆
export const is_login = () => {
    return axios({
        url: '//api.bilibili.org/safety/qrcode/isLogin',
        withCredentials: true,
        method: 'get'
    })
}