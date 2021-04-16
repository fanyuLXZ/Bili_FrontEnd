import * as types from 'mutations'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  top: {},
  masterpiece: [],
  isLoad: { top: false, masterpiece: false }, // 接口是否请求失败
  isSet: { top: false, masterpiece: false }, // 是否设置成功
}

const mutations = {
  // 获取置顶视频
  [types.GETTOPVIDEOS_SUCCESS](state, data) {
    state.top = data
    state.isLoad.top = true
  },
  // 获取代表作
  [types.GETMASTERPIECE_SUCCESS](state, data) {
    state.masterpiece = data
    state.isLoad.masterpiece = true
  },
  // 获取置顶视频
  [types.GETTOPVIDEOS_FAILURE](state) {
    state.top = {}
    state.isLoad.top = true
  },
  // 获取代表作
  [types.GETMASTERPIECE_FAILURE](state) {
    state.isLoad.masterpiece = true
  },
  [types.DELETEMASTERPIECE_SUCCESS](state, data) {
    const list = state.masterpiece
    const newList = []
    list.forEach(item => {
      if (item.aid !== data) {
        newList.push(item)
      }
    })
    state.masterpiece = newList
  },
  [types.DELETETOPVIDEOS_SUCCESS](state) {
    state.top = {}
  },

}

export default {
  state,
  getters,
  actions,
  mutations,
}
