import * as types from 'mutations'
import Vue from 'vue'
import { fetchNavNum } from '../init/actions'

const CHANNELAPI = '//api.bilibili.com/x/space/channel/'

/**
 * 带若干视频的频道列表
 *
 * @param {Number} mid 当前UP主mid
 * @param {Boolean} guest 是否为客人态
 */
export const getChannelsWithArchives = ({ commit }, { mid, guest = false }) => {
  Vue.http.jsonp(`${CHANNELAPI}index`, {
    params: {
      mid,
      guest,
    },
  }).then(rs => {
    const { code, data, message } = rs
    if (code === 0) {
      commit(types.GETCHANNELWITHARCHIVES_SUCCESS, data)
    } else {
      console.log(`获取频道列表失败，${message}`)
    }
  }, () => {
    Vue.$warn('获取频道列表失败，网络错误')
  })
}

/**
 * 空间频道列表
 *
 * @param {Number} mid 当前UP主mid
 * @param {Boolean} guest 是否为客人态
 */
export const getChannels = ({ commit }, { mid, guest = false }) => {
  Vue.http.jsonp(`${CHANNELAPI}list`, {
    params: {
      mid,
      guest,
    },
  }).then(rs => {
    const { code, data } = rs
    if (code === 0) {
      commit(types.GETCHANNEL_SUCCESS, data)
    }
  })
}

/**
 * 频道信息
 *
 * @param {Number} mid 当前UP主mid
 * @param {Number} cid 当前频道id
 * @param {Number} pn 页码数，默认1
 * @param {Number} ps 每页的个数，默认30个
 * @param {String} order 排序，默认正序
 */
export const getChannel = ({ commit }, params) => {
  Vue.http.jsonp(`${CHANNELAPI}video`, {
    params,
  }).then(rs => {
    const { code, data } = rs
    if (code === 0) {
      commit(types.GETCHANNELINFO_SUCCESS, data.list)
    }
  })
}

/**
 * 新建频道
 *
 * @param {String} name 频道名称
 * @param {String} intro 频道简介
 */
export const addChannel = ({ commit }, { name, intro = '' }) => {
  return Vue.http
    .post(`${CHANNELAPI}add`, { name, intro })
    .then(rs => {
      const { code, message, data } = rs.data
      if (code === 0) {
        fetchNavNum({ commit }, { mid: _bili_space_mid })
        return Promise.resolve(data.cid)
      } else {
        Vue.$warn(`添加频道失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('添加视频失败，网络错误')
      return Promise.reject()
    })
}

/**
 * 删除频道
 *
 * @param {Number} cid 频道id
 */
export const removeChannel = ({ commit }, payload) => {
  return Vue.http
    .post(`${CHANNELAPI}del`, payload)
    .then(rs => {
      const { code, message } = rs.data
      if (code === 0) {
        fetchNavNum({ commit }, { mid: _bili_space_mid })
        return Promise.resolve()
      } else {
        Vue.$warn(`删除频道失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('删除视频失败，网络错误')
      return Promise.reject()
    })
}

/**
 * 编辑频道
 *
 * @param {Number} cid 频道id
 * @param {String} name 频道名称
 * @param {String} intro 频道简介
 */
export const editChannel = ({ commit }, params) => {  // eslint-disable-line
  return Vue.http
    .post(`${CHANNELAPI}edit`, params)
    .then(rs => {
      const { code, message } = rs.data
      if (code === 0) {
        return Promise.resolve()
      } else {
        Vue.$warn(`编辑频道失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('编辑视频失败，网络错误')
      return Promise.reject()
    })
}

/**
 * 给频道添加视频
 *
 * @param {Number} cid 频道id
 * @param {String} aids 视频id，逗号连接
 */
export const addChannelVideos = ({ commit }, params) => {  // eslint-disable-line
  return Vue.http
    .post(`${CHANNELAPI}video/add`, params)
    .then(rs => {
      const { code, data, message } = rs.data
      if (code === 0) {
        const l = data.length
        if (l > 0) {
          Vue.$info(`添加视频完成，共有 ${l} 个视频添加失败`)
        }
        return Promise.resolve()
      } else {
        Vue.$warn(`添加频道视频失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('添加频道视频失败，网络错误')
      return Promise.reject()
    })
}

/**
 * 给频道删除视频
 *
 * @param {Number} cid 频道id
 * @param {String} aid 视频id，逗号连接
 */
export const delChannelVideos = ({ commit }, params) => {  // eslint-disable-line
  return Vue.http
    .post(`${CHANNELAPI}video/del`, params)
    .then(rs => {
      const { code, message } = rs.data
      if (code === 0) {
        return Promise.resolve()
      } else {
        Vue.$warn(`删除频道视频失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('删除频道视频失败，网络错误')
      return Promise.reject()
    })
}

/**
 * 给频道排序视频
 *
 * @param {Number} cid 频道id
 * @param {Number} aid 被移动视频的aid
 * @param {Number} to 最终的位置
 */
export const sortChannelVideos = ({ commit }, params) => {  // eslint-disable-line
  return Vue.http
    .post(`${CHANNELAPI}video/sort`, params)
    .then(rs => {
      const { code, message } = rs.data
      if (code === 0) {
        return Promise.resolve()
      } else {
        Vue.$warn(`排序失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('排序失败，网络错误')
      return Promise.reject()
    })
}

export const checkDisabledVideo = ({ commit }, { cid }) => {  // eslint-disable-line
  return Vue.http
    .jsonp(`${CHANNELAPI}video/check`, { params: { cid } })
    .then(rs => {
      const code = rs.code
      if (code === 0) {
        return Promise.resolve()
      } else if (code === 53005) {
        Vue.$warn('操作视频失败，请先清理频道里的失效视频')
        return Promise.reject()
      } else {
        Vue.$warn('操作视频失败，服务器或网络错误，请稍后重试')
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('操作视频失败，服务器或网络错误，请稍后重试')
      return Promise.reject()
    })
}
