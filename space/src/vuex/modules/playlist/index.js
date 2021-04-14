import * as types from 'mutations'
import * as actions from './actions'
import * as getters from './getters'
const state = {
  playList: {
    page: {
      num: 0, // 页码
      size: 0, // 每页数量
      total: 0, // 总数
    },
    list: [],
  },
  playlistInfo: {
    name: '',
    cover: '',
    description: '',
    owner: {
      name: '',
    },
    stat: {
      view: 0,
    },
  },
  isPlaylistLoad: false,
  isPlaylistInfoLoad: false,
  isPlaylistAuthed: false, // 播单是否被授权
}

const mutations = {
  [types.GETPLAYLIST_SUCCESS](state, data) {
    if (data.list === null) {
      state.playList = {
        page: data.page,
        list: [],
      }
    } else {
      state.playList = data
    }
    state.isPlaylistLoad = true
  },
  [types.GETPLAYLIST_START](state) {
    state.isPlaylistLoad = false
  },
  [types.GETPLAYLIST_FAILURE](state) {
    state.isPlaylistLoad = true
  },
  [types.GETPLAYLISTINFO_SUCCESS](state, data) {
    state.playlistInfo = data
    state.isPlaylistInfoLoad = true
  },
  [types.GETPLAYLISTINFO_START](state) {
    state.isPlaylistInfoLoad = false
  },
  [types.GETPLAYLISTINFO_FAILURE](state) {
    state.isPlaylistInfoLoad = true
  },
  [types.GETPLAYLISTAUTH](state) {
    // state.isPlaylistAuthed = data.auth
    state.isPlaylistAuthed = false
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
