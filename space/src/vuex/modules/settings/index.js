import * as types from 'mutations'
import Vue from 'vue'

const actions = {
    /**
     * 获取用户的标签
     * mids (string) 用户id，用逗号分隔
     *
     * @return {Promise}
     */
    fetchPersonalTags: ({commit}, mids) => {  // eslint-disable-line
        return Vue.http
            .get('//api.bilibili.com/x/space/acc/tags', {params: {mid: mids}})
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
     * 设置用户的标签
     * @param {String} tags 用户标签列表，用逗号分隔
     *
     * @return {Promise}
     */
    setPersonalTags: ({commit}, {tags}) => {  // eslint-disable-line
        return Vue.http
            .post('//api.bilibili.com/x/space/acc/tags/set', {tags})
            .then(rs => {
                const {code, message} = rs.data
                if (+code === 0) {
                    return Promise.resolve()
                } else {
                    Vue.$warn(`设置标签失败，${message}`)
                    return Promise.reject()
                }
            }, () => {
                Vue.$warn('设置标签失败，网络错误')
                return Promise.reject()
            })
    },

    /**
     * 设置用户的模块排序
     * index_order (string) 用户模块排序列表，用逗号分隔
     */
    setIndexOrder: ({commit}, index_order) => {  // eslint-disable-line
        Vue.http
            .post('//api.bilibili.com/x/space/index/order/modify', {index_order})
            .then(rs => {
                const {code, message} = rs.data
                if (+code === 0) {
                    commit(types.SETINDEXORDER_SUCCESS, index_order)
                } else {
                    Vue.$warn(`设置模块排序失败，${message}`)
                }
            }, () => {
                Vue.$warn('设置模块排序失败，网络错误')
            })
    },

    /**
     * 设置用户的模块公开性
     * param (object) {user_info: 0}
     */
    setPrivacy: ({commit}, param) => {
        Vue.http
            .post('//api.bilibili.com/x/space/privacy/modify', param)
            .then(rs => {
                const {code, message} = rs.data
                if (+code === 0) {
                    commit(types.SETPRIVACY_SUCCESS, param)
                } else {
                    Vue.$warn(`设置模块公开性失败，${message}`)
                }
            }, () => {
                Vue.$warn('设置模块公开性失败，网络错误')
            })
    },
}

export default {
    actions,
}
