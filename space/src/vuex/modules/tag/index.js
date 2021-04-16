import Vue from 'vue'
import { fetchNavNum } from '../init/actions'

const actions = {
  /**
   * 获取用户订阅的标签
   * @param {Number} vmid 用户mid
   *
   * @return {Promise}
   */
  fetchTags: ({ commit }, vmid) => {  // eslint-disable-line
    return Vue.http
      .get('//api.bilibili.com/x/space/tag/sub/list', { params: { vmid } })
      .then(rs => {
        const { code, data } = rs.data
        if (+code === 0) {
          return Promise.resolve(data)
        } else {
          console.error(`获取订阅标签失败，${data}`)
          return Promise.reject()
        }
      }, () => {
        console.error('获取订阅标签失败，网络错误')
        return Promise.reject()
      })
  },

  /**
   * 取消订阅标签
   * @param {Number} mid 用户mid
   *
   * @return {Promise}
   */
  unSubTag: ({ commit }, id) => {
    return Vue.http
      .post('//api.bilibili.com/x/space/tag/sub/cancel', { tag_id: id })
      .then(rs => {
        const { code, message } = rs.data
        if (+code === 0) {
          return Promise.resolve()
        } else {
          Vue.$warn(`取消订阅标签失败，${message}`)
          return Promise.reject()
        }
      }, () => {
        Vue.$warn('取消订阅标签失败，网络错误')
        return Promise.reject()
      })
  },
}

export default {
  actions,
}
