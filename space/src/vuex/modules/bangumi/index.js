import Vue from 'vue'

const actions = {
  /**
   * 获取当前用户订阅番剧
   * 这个接口是带翻页的
   *
   * mid (int) 用户id
   * page (number) 页数
   */
  fetchBangumi: ({ commit }, params) => {  // eslint-disable-line
    return Vue.http
      .get('//api.bilibili.com/x/space/bangumi/follow/list', {
        params: {
          vmid: params.mid,
          type: 1,
        },
        withCredentials: true,
      })
      .then(rs => {
        // const { status, data } = rs.data
        const { code, data } = rs.data
        if (code === 0) {
          return Promise.resolve(data)
        }
        console.log(`获取用户订阅番剧失败，${data}`)
        return Promise.reject()
      }, () => {
        Vue.$warn('获取用户订阅番剧失败，网络错误')
        Promise.reject()
      })
  },
}

export default {
  actions,
}
