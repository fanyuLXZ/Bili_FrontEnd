<template>
  <div id="app">
    <international-header v-if="$store.state.isHeadShow" :nav-type="navType" :disableSticky="!userInfo.isLogin"/>
    <router-view/>
    <international-footer v-if="$store.state.isFootShow"/>
  </div>
</template>


<script>
import InternationalHeader from "./components/international-header";
import InternationalFooter from "g-public/components/international-footer";
import {mapMutations, mapState} from "vuex";
export default {
  name: 'App',
  components: {InternationalHeader,InternationalFooter},
  metaInfo: {
    meta: [
      {name: 'referrer', content: 'no-referrer'},
      {name: 'spm_prefix', content: '333.880'},
      {name: 'renderer', content: 'webkit'}
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
    ...mapState(['userInfo', 'locsData', 'LNG','navType']),
    // 顶导服务端渲染需要的数据
    bannerData() {
      return this.locsData && this.locsData[142]
    }
  },
  methods: {
    ...mapMutations(['SET_USER_INFO','SET_NAV_TYPE']),
  },
  mounted() {
    this.SET_NAV_TYPE(1)
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
<style>
.international-header *,
#international-home *,
.van-popover * {
  box-sizing: border-box;
}
</style>