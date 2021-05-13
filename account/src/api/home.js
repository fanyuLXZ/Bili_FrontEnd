import axios from "g-public/js/axios/caxios";

// 获取用户信息
export const all_info = () => {
    return axios({
        url: '//api.bilibili.org/member/all-info',
        withCredentials: true,
        method: 'get'
    })
}

// 获取用户每日奖励完成情况
export const exp_reward = () => {
    return axios({
        url: '//api.bilibili.org/member/exp/reward',
        withCredentials: true,
        method: 'get'
    })
}

// 获取用户大会员信息
export const vip_info = () => {
    return axios({
        url: '//api.bilibili.org/member/vip/info',
        withCredentials: true,
        method: 'get'
    })
}

// 获取用户积分
export const vip_point = () => {
    return axios({
        url: '//api.bilibili.org/member/vip/point',
        withCredentials: true,
        method: 'get'
    })
}

// 获取用户基本信息
export const account_info = () => {
    return axios({
        url: '//api.bilibili.org/member/account/info',
        withCredentials: true,
        method: 'get'
    })
}