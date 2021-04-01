<template>
  <div id="app">
    <international-header :navType="1" :bannerData="bannerData" :lang="LNG" />
    <FirstScreen />
    <Storey :config="storeyConfig" />
    <!-- 电视人 -->
    <!-- <Mascot /> -->
    <!-- 试用反馈 -->
    <!-- <a href="//www.bilibili.com/blackboard/activity-QX-bpEsD.html" target="_blank" class="try-feedback">{{$HomeLang['37']}}</a> -->
    <!-- 联系客服 -->
    <a href="//www.bilibili.com/v/customer-service"
       target="_blank"
       class="contact-help"
       v-van-report:customer-service-entry.click>{{$HomeLang['38']}}</a>
    <international-footer></international-footer>
  </div>
</template>

<style lang="less">

</style>
<script>
import InternationalHeader from "./components/international-header/international-header";
import InternationalFooter from "./components/international-footer";
import FirstScreen from "./components/international-home/first-screen"
import Storey from "./components/international-home/storey"

import Vue from 'vue'

import * as storeyConfig from './config/storeyConfig'
import * as storeyConfigTW from './config/storeyConfigTW'

import CN from './assets/international-home/languages/zh-cn'
import TW from './assets/international-home/languages/zh-tw'

import { mapMutations, mapState } from 'vuex'

export default {
  components: { InternationalHeader , FirstScreen, Storey ,InternationalFooter},
  data() {
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
  created() {
    if(this.LNG === 'zh-TW') {
      Vue.prototype.$HomeLang = TW
      this.storeyConfig = storeyConfigTW
    }else {
      Vue.prototype.$HomeLang = CN
      this.storeyConfig = storeyConfig
    }
  },
  mounted() {
    // 登录后回调
    window.onLoginInfoLoaded(info => {
      this.SET_USER_INFO(info)
    }, true)
  },
  //服务端渲染首屏数据
  asyncData({ dispatch }, context = {}) {
    context.appname = ["web.interface","main.web-svr.web-show"]; //注册 所有接口所需服务
    return Promise.all([
      dispatch("fetchRecommendData", {
        query: { fresh_type: 0 },
        context,
      }),
      dispatch("LOCS_DATA", context)
    ])
  }
}
</script>

<style lang="less">
.try-feedback {
  position: fixed;
  z-index: 101;
  left: 0;
  top: 50%;
  margin-top: -36px;
  width: 28px;
  height: 72px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: #fb7299;
  transition: all .3s;
  font-size: 12px;
  color: #fff;
  box-shadow: 0 6px 10px 0 rgba(251,114,153,.4);
  padding: 8px 7px;
  line-height: 14px;
  &:hover{
    background-color: #ff85ad;
    color: #fff;
  }
}

.contact-help {
  position: fixed;
  z-index: 101;
  left: 0;
  top: calc(50% - 30px);
  margin-top: -36px;
  width: 28px;
  height: 72px;
  transition: all .3s;
  font-size: 12px;
  color: #505050;
  background: #FFFFFF;
  border: 1px solid #E7E7E7;
  box-shadow: 0 6px 10px 0 #E7E7E7;
  border-radius: 0 2px 2px 0;
  padding: 8px 7px;
  line-height: 14px;
  &:hover{
    background: #f4f4f4;
    color: #505050;
  }
}
</style>