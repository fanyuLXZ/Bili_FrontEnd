import * as types from 'mutations'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  skin: [],
  topphoto: [],
  bcoin: 0,
  isSkinLoad: false,
  isTopphotoLoad: false,
  isUploadSuccess: false,
}

const mutations = {
  [types.FETCHTOPPHOTO_SUCCESS](state, data) {
    state.topphoto = data
    state.isTopphotoLoad = true
  },

  [types.FETCHSKIN_SUCCESS](state, data) {
    state.skin = data
    state.isSkinLoad = true
  },

  [types.UPLOADTOUTU_SUCCESS](state) {
    state.isUploadSuccess = true
  },

  [types.GETBCOIN_SUCCESS](state, data) {
    state.bcoin = data
  },

}

export default {
  state,
  getters,
  actions,
  mutations,
}
