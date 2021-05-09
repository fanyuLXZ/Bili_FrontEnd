export default {
  SET_LOCS_DATA: (state, value) => {
    state.locsData = value || []
  },
  SET_USER_INFO: (state, value) => {
    state.userInfo = value
  },
  SET_RECOMMEND_DATA: (state, value) => {
    state.recommendData = value || []
  },
  SET_NAV_TYPE: (state, value) => {
    state.navType = value || 0
  },
  SET_IS_FOOT_SHOW: (state, value) => {
    state.isFootShow = value
  }
}
