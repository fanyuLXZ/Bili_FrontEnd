import axios from "g-public/js/axios/caxios";

// 获取账号信息
export const user_info = () => {
    return axios({
        url: '//api.bilibili.org/member/user/info',
        withCredentials: true,
        method: 'get'
    })
}