import * as types from 'mutations'
import Vue from 'vue'
import { fetchSettings } from '../init/actions'

/**
 * 获取头图商城可用的头图
 */
export const fetchTopphoto = ({ commit }, mid) => {
  // TODO: API迁移
  return Vue.http
    .get('/ajax/topphoto/getlist', { params: { mid } })
    .then(rs => {
      if (rs.data.status) {
        return commit(types.FETCHTOPPHOTO_SUCCESS, rs.data.data)
      } else {
        return Vue.$warn(`获取头图列表失败，${rs.data.data}`)
      }
    }, () => Vue.$warn('获取头图列表失败'))
}

/**
 * 获取头图商城的可用皮肤
 */
export const fetchSkin = ({ commit }, mid) => {
  // TODO: API迁移
  return Vue.http
    .get('/ajax/skin/getlist', { params: { mid } })
    .then(rs => {
      if (rs.data.status) {
        return commit(types.FETCHSKIN_SUCCESS, rs.data.data)
      } else {
        return Vue.$warn(`获取皮肤列表失败，${rs.data.data}`)
      }
    }, () => Vue.$warn('获取皮肤列表失败'))
}

/**
 * 上传自定义头图
 *
 * topphoto string 头图
 */
export const uploadToutu = ({ commit }, topphoto) => {
  // TODO: API迁移
  return Vue.http
    .post('/ajax/topphoto/uploadTopPhotov2', { topphoto })
    .then(rs => {
      const { code, message } = rs.data
      if ([ 61001, 61002 ].indexOf(+code) > -1) {
        $.getScript('//static.hdslb.com/common/js/identityDialog.js', function() {
          // eslint-disable-next-line
          IdentityDialog(code, message)
        })
        return Promise.reject()
      } else {
        if (+code === 0) {
          fetchSettings({ commit }, { mid: _bili_space_mid })
          commit(types.UPLOADTOUTU_SUCCESS, message)
          return Promise.resolve('上传成功！')
        } else {
          Vue.$warn(`上传自定义头图失败，${message}`)
          return Promise.reject(message)
        }
      }
    }, () => {
      Vue.$warn('上传自定义头图失败')
      return Promise.reject('网络连接错误，请稍后再试')
    })
}

/**
 * 设置主题
 *
 * id 主题id
 */
export const setTheme = ({ commit }, id) => {  // eslint-disable-line
  // TODO: API迁移
  return Vue.http
    .post('/ajax/settings/setTheme', { id })
    .then(rs => {
      const { data, status } = rs.data
      if (status) {
        return Promise.resolve()
      } else {
        Vue.$warn(`设置主题失败，${data}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn(`设置主题失败，网络错误`)
      return Promise.reject()
    })
}

/**
 * 设置免费头图
 *
 * id 免费头图id
 */
export const setVipFreeToutu = ({ commit }, id) => {  // eslint-disable-line
  // TODO: API迁移
  return Vue.http
    .post('/ajax/settings/setVipFreeToutu', { id })
    .then(rs => {
      if (rs.data.status) {
        return Promise.resolve()
      } else {
        return Vue.$warn(`设置免费头图失败 ${rs.data.data}`)
      }
    }, () => Vue.$warn(`设置免费头图失败，网络错误`))
}

/**
 * 设置头图
 *
 * id 头图id
 */
export const setToutu = ({ commit }, id) => {  // eslint-disable-line
  // TODO: API迁移
  return Vue.http
    .post('/ajax/settings/setToutu', { id: id })
    .then(rs => {
      if (rs.data.status) {
        return Promise.resolve()
      } else {
        return Vue.$warn(`设置头图失败 ${rs.data.data}`)
      }
    }, () => Vue.$warn('设置头图失败，网络错误'))
}

/**
 * 获取头图/皮肤的过期时间
 *
 * pid 头图/皮肤的id
 */
export const fetchExpire = ({ commit }, { pid, type }) => {  // eslint-disable-line
  // TODO: API迁移
  return Vue.http
    .get(`/ajax/${type}/getExpire`, { params: { pid } })
    .then(rs => {
      if (rs.data.status) {
        return Promise.resolve(rs.data.data.expire)
      } else {
        return Promise.resolve(rs.data.data.expire)
      }
    }, () => Vue.$warn(`获取过期时间失败，网络错误`))
}

/**
 * 获取用户B币数量
 */
export const fetchBcoin = ({ commit }) => {
  // TODO: API迁移
  return Vue.http
    .get('/ajax/member/getBcoin')
    .then(rs => {
      if (rs.data.status) {
        commit(types.GETBCOIN_SUCCESS, rs.data.data.coin)
        return Promise.resolve(rs.data.data.coin)
      } else {
        return Vue.$warn(`获取B币失败 ${rs.data.data}`)
      }
    }, () => Vue.$warn('获取B币失败，网络错误'))
}

/**
 * 硬币购买头图/皮肤
 *
 * id id
 * month 购买时长
 */
export const buyWithCoin = ({ commit }, { id, month, type }) => {  // eslint-disable-line
  // TODO: API迁移
  return Vue.http
    .post(`/ajax/${type}/buyWithCoins`, { id, month })
    .then(rs => {
      if (rs.data.status) {
        return Promise.resolve(rs.data.data)
      } else {
        return Promise.reject(rs.data.data)
      }
    }, () => Vue.$warn('支付失败，网络错误'))
}

/**
 * B币购买头图/皮肤
 * B币还不够，调用 预充值插件
 *
 * id id
 * month 购买时长
 */
export const buyWithB = ({ commit }, { id, month, type }) => {  // eslint-disable-line
  // TODO: API迁移
  return Vue.http
    .post(`/ajax/${type}/buyWithB`, { id, month })
    .then(rs => {
      if (rs.data.status) {
        return Promise.resolve(rs.data.data)
      } else {
        return Promise.reject(rs.data.data)
      }
    }, () => Vue.$warn('支付失败，网络错误'))
}

/**
 * B币购买头图/皮肤
 * B币已经够了，调用 快捷支付接口
 *
 * id id
 * month 购买时长
 */
export const quickBuyWithB = ({ commit }, { id, month, type }) => {  // eslint-disable-line
  // TODO: API迁移
  return Vue.http
    .post(`/ajax/${type}/quickBuyWithB`, { id, month })
    .then(rs => {
      if (rs.data.status) {
        return Promise.resolve(rs.data.data)
      } else {
        return Promise.reject(rs.data.data)
      }
    }, () => Vue.$warn('支付失败，网络错误'))
}
