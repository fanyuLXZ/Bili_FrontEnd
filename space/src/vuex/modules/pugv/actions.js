import Vue from 'vue'
import * as types from 'mutations'

export const fetchPugv = ({ commit }, params) => {
  commit(types.GETPUGV_START)
  Vue.http.get('//api.bilibili.com/pugv/app/web/season/page', { params })
    .then(rs => {
      const { code, data: { items, page } } = rs.data
      if (+code === 0) {
        commit(types.GETPUGV_START)
        commit(types.GETPUGV_SUCCESS, { items, page })
      } else {
        commit(types.GETPUGV_FAILURE)
      }
    }).catch(() => {
      commit(types.GETPUGV_FAILURE)
    })
}

export const fetchPugvList = ({ commit }, params) => {
  Vue.http.get('//api.bilibili.com/pugv/app/web/favorite/page', { params })
    .then(rs => {
      const { code, data: { items, page } } = rs.data
      if (+code === 0) {
        commit(types.GETPUGVLIST_SUCCESS, { items, page })
      }
    })
}

export const delPugv = ({ commit }, { season_id }) => {  // eslint-disable-line
  return Vue.http.post('//api.bilibili.com/pugv/app/web/favorite/del', { season_id })
    .then(rs => {
      return Promise.resolve(rs.data)
    }).catch(() => {
      console.log('请求取消课程收藏失败，网络错误')
      return Promise.reject()
    })
}
