import * as types from 'mutations'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  // 这个是带封面但是不带稿件的
  channels: {
    count: 0,
    list: [],
  },
  // 这个是带稿件的
  channelsWithArchives: [],
  cid: '',
  channel: {
    archives: [],
    cid: 0,
    name: '频道',
    intro: '',
    mtime: 1481268141,
    count: 0,
  },
  isChannelsLoad: false,
  isChannelLoad: false,
  isMoreChannelVideoLoad: true,
  isUploading: false,
}

const mutations = {
  [types.GETCHANNEL_SUCCESS](state, channels) {
    state.channels = channels
    state.isChannelsLoad = true
  },
  [types.GETCHANNELWITHARCHIVES_SUCCESS](state, channels) {
    state.channelsWithArchives = channels
    state.isChannelsLoad = true
  },
  [types.GETCHANNELINFO_SUCCESS](state, channel) {
    state.channel = channel
    state.isChannelLoad = true
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
