import * as types from 'mutations'
import * as actions from './actions'
import * as getters from './getters'
const state = {
  list: [],
  page: {
    num: 1,
    size: 15,
    total: 0,
  },
  pugvList: [],
  pugvPage: {
    num: 1,
    size: 10,
    total: 0,
  },
  isLoading: false,
}

const mutations = {
  [types.GETPUGV_START](state) {
    state.isLoading = !state.isLoading
  },
  [types.GETPUGV_SUCCESS](state, { items, page }) {
    state.list = items
    state.page = page
  },
  [types.GETPUGV_FAILURE](state) {
    state.isLoading = false
  },
  [types.GETPUGVLIST_SUCCESS](state, { items, page }) {
    state.pugvList = items
    state.pugvPage = page
  },
}

export default {
  state,
  actions,
  getters,
  mutations,
}
