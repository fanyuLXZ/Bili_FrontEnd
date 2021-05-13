import axios from "g-public/js/axios/caxios";

// 注册
export const register = (nickname,password,phone) => {
    const qs = require('qs')
    return axios({
        url: '//api.bilibili.org/safety/register',
        withCredentials: true,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify({
            nickname,
            password,
            phone
        }),
        method: 'post'
    })
}

// 验证昵称
export const checkNickname = (nickName) => {
    return axios({
        url: '//api.bilibili.org/member/check/nickname',
        withCredentials: true,
        method: 'get',
        query:{
            nickName
        }
    })
}