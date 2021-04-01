export default {
  SET_LOCS_DATA: (state, value) => {
    state.locsData = value || []
  },
  SET_USER_INFO: (state, value) => {
    state.userInfo = value
  },
  SET_RECOMMEND_DATA: (state, value) => {
    state.recommendData = value || []
  }
}
