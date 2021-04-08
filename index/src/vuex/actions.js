import {getRecommend, getLocs} from 'g-public/apis/home'

export default {
  fetchRecommendData: ({commit}, { query, context }) => {
    return getRecommend(query, context).then(res => {
      if(res?.data?.code === 0) {
        commit('SET_RECOMMEND_DATA', res.data.data)
      }
      return res?.data
    })
  },
  LOCS_DATA: ({commit}, context = {}) => {
    const ids = '3197,34,29,31,40,42,44,142,3441,3449,3455,1550,3443'
    return getLocs(ids, context).then(res => {
      if(res.data.code === 0) {
        commit('SET_LOCS_DATA', res.data.data)
      }
    })
  }
}