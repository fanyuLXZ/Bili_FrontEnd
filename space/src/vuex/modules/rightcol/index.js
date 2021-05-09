import Vue from 'vue'
import {getLocalCache, setLocalCache} from '@/store'
import axios from 'g-public/js/axios/caxios'
import $ from "jquery"

const GETLASTPLAY_API = '//api.bilibili.com/x/space/lastplaygame'
const actions = {
    /**
     * 获取公告
     * mid (int) 用户id
     */
    getNotice: ({commit}, mid) => {  // eslint-disable-line
        return Vue.http
            .get('//api.bilibili.com/x/space/notice', {params: {mid}})
            .then(rs => {
                const {code, data} = rs.data
                if (+code === 0) {
                    return Promise.resolve(data)
                } else {
                    return Promise.reject()
                }
            }, () => Promise.reject())
    },

    /**
     * 修改公告
     * notice (string) 新公告
     */
    setNotice: ({commit}, notice) => {  // eslint-disable-line
        return Vue.http
            .post('//api.bilibili.com/x/space/notice/set', {
                notice,
            }).then(rs => {
                const {code, message} = rs.data
                if ([61001, 61002].indexOf(+code) > -1) {
                    $.getScript('//static.hdslb.com/common/js/identityDialog.js', function () {
                        // eslint-disable-next-line
                        IdentityDialog(code, message)
                    })
                } else {
                    if (+code === 0) {
                        return Promise.resolve(code)
                    } else {
                        Vue.$warn(`修改公告失败，${message}`)
                        return Promise.reject()
                    }
                }
            }, () => {
                Vue.$warn('修改公告失败，网络错误')
                return Promise.reject()
            })
    },

    /**
     * 获取最近玩过的游戏
     * @param {Number} mid 用户mid
     *
     * @return {Promise}
     */
    getLastPlay: ({commit}, mid) => {  // eslint-disable-line
        const config = {
            method: 'get',
            url: GETLASTPLAY_API,
            params: {mid},
            withCredentials: true,
        }
        // eslint-disable-next-line no-undef
        return getLocalCache(GETLASTPLAY_API, {mid}, _bili_space_mid)
            .then(cache => {
                return Promise.resolve(cache)
            }, () => {
                return Vue.http(config)
                    .then(rs => {
                        const {code, data} = rs.data
                        if (+code === 0) {
                            // eslint-disable-next-line no-undef
                            setLocalCache(GETLASTPLAY_API, {mid}, data, _bili_space_mid)
                            return Promise.resolve(data)
                        } else {
                            return Promise.reject()
                        }
                    }, () => Promise.reject())
            })
    },

    /**
     * 获取充电
     * @param {Number} mid 用户mid
     *
     * @return {Promise}
     */
    getElecInfo: ({commit}, up_mid) => {  // eslint-disable-line
        return axios({
            method: 'get',
            url: '//api.bilibili.com/x/ugcpay-rank/elec/month/up',
            params: {
                up_mid
            }
        }).then(rs => {
            const {code, data} = rs?.data
            if (code === 0) {
                return Promise.resolve(data)
            } else {
                return Promise.reject()
            }
        }, () => Promise.reject())
    },

    /**
     * 获取UP店铺信息
     */
    getShop: ({commit}) => {  // eslint-disable-line
        return Vue.http
            .jsonp('//api.bilibili.com/x/space/shop')
            .then(rs => {
                const {code, data} = rs
                if (code === 0) {
                    return Promise.resolve(data)
                } else {
                    return Promise.reject()
                }
            }, () => Promise.reject())
    },
}

export default {
    actions,
}
