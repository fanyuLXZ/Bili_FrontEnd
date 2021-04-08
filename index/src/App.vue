<template>
  <div id="app">
    <international-header :nav-type="1"/>
    <router-view/>
    <international-footer/>
  </div>
</template>


<script>
import InternationalHeader from "./components/international-header";
import InternationalFooter from "../../public/src/components/international-footer";
import {mapMutations, mapState} from "vuex";
export default {
  name: 'App',
  components: {InternationalHeader,InternationalFooter},
  metaInfo: {
    meta: [
      {name: 'referrer', content: 'no-referrer'}
    ]
  },data() {
    return {
      // 1: 新版
      // 0: 老版
      INTVER: "1",
      storeyConfig: {}
    }
  },
  computed: {
    ...mapState(['userInfo', 'locsData', 'LNG']),
    // 顶导服务端渲染需要的数据
    bannerData() {
      return this.locsData && this.locsData[142]
    }
  },
  methods: {
    ...mapMutations(['SET_USER_INFO']),
  },
  mounted() {
    // 登录后回调
    window.onLoginInfoLoaded(info => {
      this.SET_USER_INFO(info)
    }, true)
  },
  //服务端渲染首屏数据
  asyncData({dispatch}, context = {}) {
    context.appname = ["web.interface", "main.web-svr.web-show"]; //注册 所有接口所需服务
    return Promise.all([
      dispatch("fetchRecommendData", {
        query: {fresh_type: 0},
        context,
      }),
      dispatch("LOCS_DATA", context)
    ])
  },
}

</script>