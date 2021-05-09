/**
 * VIP相关字段定义
 * http://project.bilibili.co/projects/doc/wiki/Wiki_acc_group_vip_web_interface
 * 此处记录于2016.12.15
 * 具体请实时查阅文档
 * 刘成按
 *
 * vipType      vip类型 0.非VIP 1.VIP 2.年费VIP
 * vipStatus    vip状态 0.过期 1.未过期 2.冻结 3.封禁
 */

import * as types from 'mutations'
import Vue from 'vue'
import axios from 'g-public/js/axios/caxios'
import $ from "jquery"

const isServer = Vue.prototype.$isServer
const urlPrefix = 'http://space.bilibili.com'
// const debug = require('biliDebug')('app:space.vuex.init')

// for server side render
export const fetchMergeInfo = ({commit}, {mid}) => {
    const config = {
        method: 'get',
        url: 'http://api.bilibili.co/x/space/web/index',
        query: {mid},
        encode: true,
    }
    return axios(config).then(rs => {
        const {code, data, message = ''} = rs.data
        // debug('setting', setting)
        // debug('archive', archive.archives)
        if (code === 0) {
            const {account, setting, archive} = data
            // debug('account', account)
            // fucking start
            account.sign = account.sign.decodeHTML()
            account.regtime = account.jointime
            const role = account.official.role
            let type = 0
            if (role === 0) {
                type = -1
            }
            if (role > 2) {
                type = 1
            }
            account.official_verify = {
                type,
                desc: account.official.title,
                suffix: account.official.desc,
            }
            account.level_info = {current_level: account.level}
            account.vip = {vipType: account.vip.type, vipStatus: account.vip.status}
            setting.theme = 'default'
            setting.toutu = {l_img: account.top_photo, s_img: account.top_photo}
            const archives = archive.archives.map(a => {
                return {
                    ...a,
                    created: a.pubdate,
                    play: a.stat ? a.stat.view : 0,
                }
            })
            // fucking end
            commit(types.GETINFO_SUCCESS, {data: account, mid})
            commit(types.GETSETTINGS_SUCCESS, setting)
            commit(types.GETSUBMITVIDEOS_SUCCESS, {
                count: archive.page.count,
                vlist: archives.slice(0, 10),
            })
            return ''
        }
        const e = new Error(message || '404 Not Found')
        e.status = 404
        throw e
    })
}

/**
 * 获取当前页用户的信息
 *
 * mid
 */
export const fetchInfo = ({commit}, {mid, cookie}) => {
    const config = {
        method: 'get',
        url: '//api.bilibili.com/x/space/acc/info',
        params: {mid},
        withCredentials: true,
    }
    if (isServer) {
        config.url = urlPrefix + config.url
        config.headers = {
            cookie,
            // host: 'space.bilibili.com'
        }
    }
    return Vue.http(config).then(rs => {
        const {code, data} = rs.data
        if (+code === 0) {
            data.sign = data.sign.decodeHTML()
            commit(types.GETINFO_SUCCESS, {data, mid})
            return Promise.resolve()
        }
        console.warn('getinfo failed', data)
        return Promise.reject({message: data})
    }, err => {
        !isServer && console.warn('getinfo failed', err.stack)
        return Promise.reject(err)
    })
}

/**
 * 获取空间设置
 *
 * mid
 */
export const fetchSettings = ({commit}, {mid, cookie}) => {
    // TODO: API迁移
    const config = {
        method: 'get',
        url: '/ajax/settings/getSettings',
        // url: 'http://pre-space.bilibili.com/ajax/settings/getSettings',
        params: {mid},
    }
    if (isServer) {
        config.url = urlPrefix + config.url
        config.headers = {
            cookie,
            host: 'space.bilibili.com',
        }
    }
    return Vue.http(config).then(rs => {
        const {status, data} = rs.data
        if (status) {
            commit(types.GETSETTINGS_SUCCESS, data)
            return Promise.resolve()
        }
        console.warn('getSettings failed', data)
        return Promise.reject({message: data})
    }, err => {
        !isServer && console.warn('getSettings failed', err.stack)
        return Promise.reject(err)
    })
}

/**
 * 获取当前登录用户的信息
 */
export const fetchMyInfo = ({commit}, {mid, cookie}) => {
    let request
    if (isServer) {
        // 服务端走get
        request = Vue.http({
            method: 'get',
            url: 'http://api.bilibili.com/x/space/myinfo',
            headers: {
                referer: 'http://space.bilibili.com',
                cookie,
            },
        }).then(rs => rs.data)
    } else {
        // 客户端得走jsonp，因为必须得带上cookie
        request = Vue.http.jsonp('//api.bilibili.com/x/space/myinfo')
    }
    return request.then(rs => {
        const {code, data} = rs
        if (code === 0) {
            commit(types.GETMYINFO_SUCCESS, data)
            commit(types.UPADTE_USER_STATE, data.mid === mid ? 'owner' : 'visitor')
            return Promise.resolve()
        }
        commit(types.GETMYINFO_FAILURE)
        return Promise.resolve()
    }, err => {
        !isServer && console.warn('myinfo failed, network error', err.stack)
        return Promise.reject(err)
    })
}

/**
 * 播单白名单
 */
export const fetchPlaylistAuth = ({commit}, {vmid}) => {
    const params = {
        vmid,
        jsonp: 'jsonp',
    }
    const config = {
        method: 'get',
        url: '//api.bilibili.com/x/playlist/whitelist',
        params,
    }
    if (isServer) {
        config.url = 'http:' + config.url
    }
    let request
    if (isServer) {
        request = Vue.http(config).then(rs => rs.data)
    } else {
        request = Vue.http.jsonp('//api.bilibili.com/x/playlist/whitelist', {
            params,
        })
    }

    return request.then(rs => {
        const {code, data} = rs
        if (code === 0) {
            commit(types.GETPLAYLISTAUTH, {
                auth: data.power,
            })
            return Promise.resolve()
        }
        commit(types.GETPLAYLISTAUTH, {
            auth: false,
        })
        return Promise.resolve()
    }, err => {
        commit(types.GETPLAYLISTAUTH, {
            auth: false,
        })
        return Promise.reject(err)
    })
}

/**
 * 获取用户的观看记录
 */
export const fetchWatchHistory = ({commit}, {mid}) => {
    const history = sessionStorage.getItem(`${mid}_watch_history`)
    // 如果没有本地记录
    // TODO: API迁移
    if (history === null) {
        Vue.http.get('/ajax/viewhistory/gethistory')
            .then(rs => {
                const {status, data} = rs.data
                if (status) {
                    if (Object.prototype.toString.call(data) !== '[object Array]') {
                        commit(types.GETWATCHHISTORY_SUCCESS, [])
                    } else {
                        commit(types.GETWATCHHISTORY_SUCCESS, data.map(item => item.aid))
                    }
                }
            })
    } else {
        commit(types.GETWATCHHISTORY_SUCCESS, JSON.parse(history))
    }
}

/**
 * 获取当前阿婆主的导航栏数据
 *
 * @param {number} mid
 */
export const fetchNavNum = ({commit}, payload) => {
    return Vue.http
        .jsonp('//api.bilibili.com/x/space/navnum', {params: payload})
        .then(rs => {
            const {code, message, data} = rs
            if (code === 0) {
                commit(types.FETCHNAVNUM_SUCCESS, data)
                return Promise.resolve(data)
            }
            console.log(`请求导航栏数据出错，${message}`)
            commit(types.FETCHNAVNUM_FAILURE)
            return Promise.reject()
        }, () => {
            console.log('请求导航栏数据出错，网络错误')
            commit(types.FETCHNAVNUM_FAILURE)
            return Promise.reject()
        })
}

/**
 * 观看视频
 *
 * mid 当前用户mid，未登录则为0
 * aid 视频aid
 */
export const watchVideo = ({commit}, aid) => {
    commit(types.WATCH_VIDEO, aid)
}

/**
 * 设置签名
 * user_sign (string) 新的签名
 */
export const setSign = ({commit}, {user_sign}) => {  // eslint-disable-line
    Vue.http.post('//api.bilibili.com/x/member/web/sign/update', {user_sign})
        .then(rs => {
            const {code, message} = rs.data
            if ([61001, 61002].indexOf(+code) > -1) {
                $.getScript('//static.hdslb.com/common/js/identityDialog.js', function () {
                    // eslint-disable-next-line
                    IdentityDialog(code, message)
                })
            } else {
                if (code === 0) {
                    commit(types.SETSIGN_SUCCESS, user_sign)
                } else {
                    Vue.$warn(`设置签名失败，${message}`)
                }
            }
        }, () => Vue.$warn('设置签名失败'))
}

/**
 * 举报当前UP主
 */
export const reportUper = ({commit}, payload) => {  // eslint-disable-line
    // TODO: API迁移
    return Vue.http
        .post('/ajax/report/add', payload)
        .then(rs => {
            const {status, data} = rs.data
            if (status) {
                return Promise.resolve()
            }
            Vue.$warn(`举报失败，${data}`)
            return Promise.reject()
        }, () => {
            Vue.$warn('举报失败，网络错误')
            return Promise.reject()
        })
}

/**
 * 获取空间的阅读数跟播放数及获赞数，值为-1就代表未登陆不显示
 */
export const getUpStat = ({commit}, mid) => {
    Vue.http.get('//api.bilibili.com/x/space/upstat', {
        params: {mid},
    }).then(rs => {
        const {code, data} = rs.data
        if (code === 0) {
            if (data.article || data.archive || data.likes) {
                commit(types.GETUPSTAT_SUCCESS, data)
            } else {
                commit(types.GETUPSTAT_SUCCESS, {
                    article: {
                        view: -1,
                    },
                    archive: {
                        view: -1,
                    },
                    likes: -1,
                })
            }
        }
    })
}

/**
 * 改变 _bili_guest_mode
 */
export const toggleSpaceState = ({commit}, mode) => {
    // eslint-disable-next-line no-undef
    fetchNavNum({commit}, {mid: _bili_space_mid})
    commit(types.TOGGLESPACESTATE, mode)
}

/**
 * 更新稍后再看列表
 */
export const updateWatchlater = ({commit}, {aids}) => {
    commit(types.UPDATE_WATCHLATER, aids)
}
