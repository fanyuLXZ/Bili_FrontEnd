import * as types from 'mutations'
import Vue from 'vue'

/**
 * 设置置顶视频
 */
export const setTopVideos = ({ commit }, { aid, reason }) => {  // eslint-disable-line
  return Vue.http
    .post('//api.bilibili.com/x/space/top/arc/set', { aid, reason })
    .then(rs => {
      const { message, code } = rs.data
      if (+code === 0) {
        return Promise.resolve()
      } else {
        Vue.$warn(`设置置顶视频失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('设置置顶视频失败，网络错误')
      return Promise.reject()
    })
}

/**
 * 获取用户置顶视频
 * mid (int) 用户id
 */
export const fetchTopVideos = ({ commit }, { mid, isOwner }) => {
  return Vue.http({
    method: 'get',
    url: '//api.bilibili.com/x/space/top/arc',
    params: { vmid: mid },
    withCredentials: !!isOwner, // 预览模式
  }).then(rs => {
    const { data, code } = rs.data
    if (+code === 0) {
      return commit(types.GETTOPVIDEOS_SUCCESS, data)
    } else {
      return commit(types.GETTOPVIDEOS_FAILURE)
    }
  })
}

/**
 * 取消置顶
 */
export const deleteTopVideos = ({ commit }) => {
  Vue.http
    .post('//api.bilibili.com/x/space/top/arc/cancel')
    .then(rs => {
      const { data, code } = rs.data
      if (+code === 0) {
        commit(types.DELETETOPVIDEOS_SUCCESS)
      } else {
        Vue.$warn(`取消置顶视频失败，${data}`)
      }
    }, () => Vue.$warn('取消置顶视频失败，网络错误'))
}

/**
 * 设置代表作
 */
export const setMasterpiece = ({ commit }, { aid, reason }) => {  // eslint-disable-line
  return Vue.http
    .post('//api.bilibili.com/x/space/masterpiece/add', { aid, reason })
    .then(rs => {
      const { message, code } = rs.data
      if (+code === 0) {
        return Promise.resolve()
      } else {
        Vue.$warn(`设置代表作失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('设置代表作失败，网络错误')
      return Promise.reject()
    })
}

/**
 * 获取代表作
 */
export const fetchMasterpiece = ({ commit }, { mid, isOwner }) => {
  Vue.http({
    method: 'get',
    url: '//api.bilibili.com/x/space/masterpiece',
    params: { vmid: mid },
    withCredentials: !!isOwner, // 预览模式
  }).then(rs => {
    const { data, code } = rs.data
    if (+code === 0) {
      commit(types.GETMASTERPIECE_SUCCESS, data)
    } else {
      commit(types.GETMASTERPIECE_FAILURE)
      // return Vue.$warn(`获取代表作失败 ${rs.data.data}`);
      // 没有代表作的时候也会返回错误，暂定不处理
    }
  })
}

/**
 * 取消代表作
 */
export const deleteMasterpiece = ({ commit }, { id }) => {
  return Vue.http
    .post('//api.bilibili.com/x/space/masterpiece/cancel', { aid: id })
    .then(rs => {
      const { code, message } = rs.data
      if (+code === 0) {
        commit(types.DELETEMASTERPIECE_SUCCESS, id)
        return Promise.resolve()
      } else {
        Vue.$warn(`取消代表作失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('取消代表作失败，网络错误')
      return Promise.reject()
    })
}
