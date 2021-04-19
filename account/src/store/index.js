import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //我的信息
    isLogin: true,
    uname: "江浙沪子笑",    //昵称
    userid: "bili_34305173340",    //用户名
    birthday: "2003-05-27",    //出生年月
    sex: "保密",    //性别
    face:"http://i1.hdslb.com/bfs/face/31f967d648f65c5754981fe6b4b6a21def194dc2.jpg",   //用户头像
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
