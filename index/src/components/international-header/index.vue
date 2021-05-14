<template>
  <div
      id="internationalHeader"
      class="international-header report-wrap-module"
      :class="{'fixed-top': navFixed}"
  >
        <MiniHeader
            class="m-header"
            :class="{
            'mini-type': navType === 0 || navFixed,
            'mask-bg': !navFixed && navType === 2,
          }"
            :menuConfig="menuConfig"
            :navType="navType"
            :userInfo="userInfo"
            :locsData="locsData"
            :lang="lang"
        />
    <Banner
        v-if="navType === 1 || navType === 3"
        :bid="bid"
        :bannerData="bannerData"
        :userInfo="userInfo"/>
    <PrimaryMenu
        v-if="navType === 1"
        ref="primaryMenu"
        :menuConfig="menuConfig"
        :tid="Number(tid)" />
  </div>
</template>

<script>
import Vue from 'vue'
import {bannerIdMap} from './config/bid'
// import {cookie, getScript} from 'g-public/js/utils'
import {cookie} from 'g-public/js/utils'
import Banner from "./Banner";
import MiniHeader from './mini-header/index'
import PrimaryMenu from './primary-menu/index'
import CN from './languages/zh-cn'
import TW from './languages/zh-tw'
import * as menuConfig from 'g-public/js/config/menuConfig'
import * as menuConfigTW from 'g-public/js/config/menuConfigTW'
import {getLocs} from './api'
// 引入van
import {Image, Popover, Report} from 'g-public/modules/@bilibili/van'
import commonReport from 'g-public/directive/commonReport'
import Bfs from 'g-public/modules/@blink-common/component.bfs-utils'
import inlineSvgs from './lib/inline-svgs'
// 获取用户状态
import UserState from './lib/UserState'

Vue.use(Popover)
Vue.use(Image)
Vue.use(Report)
Vue.use(commonReport)
Vue.prototype.inlineSvgs = inlineSvgs
Vue.prototype.$bfs = new Bfs()
Vue.prototype.isTouchDevice = false
// if (process.env.VUE_ENV === 'client') {
// 引入iconfong
  require('g-public/style/bili-iconfont/iconfont.css')
  require('g-public/style/bili-iconfont/iconfont.js')

const us = new UserState()
us.getUserState()
Vue.prototype.$userStatus = us
window.UserStatus = us
// // 注册一个全局函数 提供登录后回调
window.onLoginInfoLoaded = function (fn, watch) {
  if (us.userInfo) {
    fn(us.userInfo)
    if (watch) us.onLoginUpdate(fn)
  } else {
    watch ? us.onLoginUpdate(fn) : us.onLoginOnce(fn)
  }
}

  // // 接收播放器登录成功
  // window.loadLoginStatus = function () {
  //   us.getUserState(null, { isLogin: false })
  // }

  // Vue.prototype.isTouchDevice = checkTouchDevice()
// }

export default {
  name: "international-header",
  components: {Banner,MiniHeader, PrimaryMenu},
  props: {
    // 0 -> 迷你导航
    // 1 -> 带banner导航
    // 2 -> 半透明迷你导航
    // 3 -> 带banner不带菜单导航
    navType: {
      type: Number,
      default: 0,
    },
    lang: {
      type: String,
      default: '',
    },
    bannerData: {
      type: Array,
      default: () => {
        return []
      },
    },
    // 是否禁用未登录时的顶导吸顶
    disableSticky: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tid: '',
      userInfo: {
        isLogin: null,
        fallback: false,
        face: '//i0.hdslb.org/bfs/face/member/noface.jpg',
        level_info:{
          current_level:"1",
          current_exp:"1",
          "next_exp":"1",
        },
        money:1
      },
      locsData: null,
      menuConfig: {
        MenuConfig: [],
        LiveMenuConfig: [],
        SideMenuConfig: [],
        ChannelMenuConfig: [],
      },
      navFixed: false,
    }
  },
  computed: {
    bid() {
      return bannerIdMap[this.tid] || 142
    },
  },
  methods: {
    onLoginUpdate(info) {
      this.userInfo = Object.assign(this.userInfo, info)
      const isAccountPage = /(passport|account)\.bilibili\.com$/.test(
          window.location.hostname
      )
      if (!this.userInfo.isLogin && !isAccountPage) {
        this.handleBsource()
      } else {
        if (this.handleScroll) {
          window.removeEventListener('scroll', this.handleScroll)
          this.navFixed = false
        }
      }
    },
    async getLocsData() {
      // 大会员
      const vipIds = '2837,2836,2870'
      // 菜单运营位
      const locMenuIds = ',2953,2954,2955,2956'

      const ids = vipIds + locMenuIds

      try {
        const { data } = await getLocs(ids)
        if (data.code === 0) {
          this.locsData = data.data
        }
        /* eslint-disable */
      } catch (err) {}
    },
    handleBsource() {
      if (this.disableSticky) {
        return
      }
      const scrollEl = document.scrollingElement || document.documentElement
      this.handleScroll = () => {
        if (!this.navFixed && scrollEl.scrollTop > 56) {
          this.navFixed = true
        }
        if (this.navFixed && scrollEl.scrollTop <= 56) {
          this.navFixed = false
        }
      }
      window.addEventListener('scroll', this.handleScroll)
    },
  },
  created() {
    // header组件分两种情况被调用
    // 1. 如果是组件的方式引入 取的是当前页面传入的
    // 2. 如果是script方式引入 先取cookie的lang 如果没有再取系统的language
    let _lang = ''
    if (typeof window !== 'undefined') {
      _lang =
          cookie.get('LNG') ||
          (window.navigator.language === 'zh-TW' ? 'zh-TW' : 'zh-CN')
    }

    const _lang2 = !this.lang ? _lang : this.lang
    if (_lang2 === 'zh-TW') {
      Vue.prototype.$HeadLang = TW
      this.menuConfig = menuConfigTW
    } else {
      Vue.prototype.$HeadLang = CN
      this.menuConfig = menuConfig
    }
  },
  beforeMount() {
    this.tid=1
    this.tid = window.bid || window.tid || window.topid
    if (!this.tid) {
      const path = window.location.pathname
      const name = path.split('/')[2]
      const currentMenu = this.menuConfig.MenuConfig.filter(menu => {
        return menu.route === name && !menu.takeOvered
      })
      this.tid = currentMenu[0] && currentMenu[0].tid
    }

    // 登录后回调
    window.onLoginInfoLoaded(info => {
      // eslint-disable-next-line no-console
      this.onLoginUpdate(info)
    }, true)

    // 获取运营位数据
    this.getLocsData()

    // 暴露手动修改tid方法 场景：手动切换导航高亮
    window.setTid = id => {
      this.tid = id
    }

    //合并log-reporter.js
    // if (!window.reportObserver) {
    //   getScript('//s1.hdslb.com/bfs/seed/log/report/log-reporter.js')
    // }
  },
}
</script>


<style lang="less">
@import './assets/base.less';

.international-header {
  min-width: 999px;
  min-height: 56px;
}

.b-wrap {
  width: 1630px;
  margin: 0 auto;
}

@media screen and (max-width: 1870px) {
  .b-wrap {
    width: 1414px;
    .page-tab .con li {
      width: 58px;
      .channel-name {
        width: 58px !important;
      }
    }
    .friendship-link {
      width: 242px;
    }
  }
}

@media screen and (max-width: 1654px) {
  .b-wrap {
    width: 1198px;
    .page-tab .con li {
      width: 50px !important;
      .channel-name {
        width: 50px !important;
      }
    }
    .tab-line-itnl {
      margin: 0 8px;
      &.none {
        margin: 0 12px 0 0;
      }
    }
    .friendship-link {
      width: 220px;
    }
  }
}

@media screen and (max-width: 1438px) {
  .b-wrap {
    width: 999px;
    .channel-menu-itnl {
      .item {
        &.hide {
          display: none;
        }
      }
    }
    .page-tab .con li {
      width: 50px;
      .channel-name {
        width: 50px !important;
      }
    }
    .tab-line-itnl {
      margin: 0 8px;
    }
  }
}

.international-header.fixed-top {
  .mini-header {
    position: fixed;
    top: 0;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    .bili-icon_dingdao_xiazaiapp,
    .bili-icon_dingdao_zhuzhan {
      color: #00a1d6;
    }
  }
  .mini-type .nav-link .nav-link-ul .nav-link-item .link,
  .mini-type .nav-user-center .user-con .item .name {
    color: #212121;
  }
  .nav-link .nav-link-ul.mini .bili-icon_dingdao_xiazaiapp {
    color: #00a1d6;
  }
}
* {
  margin: 0;
  padding: 0
}

.international-header,.van-popover {
  -webkit-font-smoothing: antialiased;
  font: 14px -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
  position: relative;
  z-index: 1000;
  margin: 0;
  padding: 0
}

.international-header *,.van-popover * {
  box-sizing: border-box
}

.international-header ol,.international-header ul,.van-popover ol,.van-popover ul {
  list-style: none
}

.international-header a,.van-popover a {
  text-decoration: none;
  color: #212121;
  transition: color .3s
}

.international-header a:hover,.van-popover a:hover {
  text-decoration: none;
  color: #00a1d6
}

.international-header :focus,.international-header a:focus,.van-popover :focus,.van-popover a:focus {
  outline: none
}

.international-header .red-point,.van-popover .red-point {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fa5a57;
  color: #fff;
  right: 0;
  top: 0
}

.international-header .mini-type,.van-popover .mini-type {
  position: relative;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.08)
}

.international-header .mini-type .nav-link .nav-link-ul .nav-link-item .link,.van-popover .mini-type .nav-link .nav-link-ul .nav-link-item .link {
  color: #212121;
  text-shadow: none
}

.international-header .mini-type .nav-link .nav-link-ul .nav-link-item .link:hover,.van-popover .mini-type .nav-link .nav-link-ul .nav-link-item .link:hover {
  color: #212121
}

.international-header .mini-type .nav-search #nav_searchform,.van-popover .mini-type .nav-search #nav_searchform {
  background: #f4f4f4;
  border: 1px solid #e7e7e7
}

.international-header .mini-type .nav-user-center .bilifont,.van-popover .mini-type .nav-user-center .bilifont {
  color: #999
}

.international-header .mini-type .user-con.logout .item a,.van-popover .mini-type .user-con.logout .item a {
  color: #212121!important
}

.international-header .mini-type .user-con.logout .item a:hover,.van-popover .mini-type .user-con.logout .item a:hover {
  color: #00a1d6!important
}

@media screen and (max-width: 1280px) {
  .international-header .mini-type .mini-header--login .nav-search-box,.van-popover .mini-type .mini-header--login .nav-search-box {
    display:none
  }

  .international-header .mini-type .mini-header--login .nav-user-center .user-con.search-icon,.van-popover .mini-type .mini-header--login .nav-user-center .user-con.search-icon {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center
  }
}

@media screen and (max-width: 1080px) {
  .international-header .mini-type .mini-header--logout .nav-search-box,.van-popover .mini-type .mini-header--logout .nav-search-box {
    display:none
  }

  .international-header .mini-type .mini-header--logout .nav-user-center .user-con.search-icon,.van-popover .mini-type .mini-header--logout .nav-user-center .user-con.search-icon {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center
  }
}

@media screen and (max-width: 1190px) {
  .international-header .mini-header--login .nav-search-box,.van-popover .mini-header--login .nav-search-box {
    display:none
  }

  .international-header .mini-header--login .nav-user-center .user-con.search-icon,.van-popover .mini-header--login .nav-user-center .user-con.search-icon {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center
  }
}

@media screen and (max-width: 980px) {
  .international-header .mini-header--logout .nav-search-box,.van-popover .mini-header--logout .nav-search-box {
    display:none
  }

  .international-header .mini-header--logout .nav-user-center .user-con.search-icon,.van-popover .mini-header--logout .nav-user-center .user-con.search-icon {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center
  }
}

.international-header .mask-bg,.van-popover .mask-bg {
  position: relative;
  background: linear-gradient(rgba(0,0,0,.3),transparent);
  box-shadow: none
}

.international-header .mask-bg .nav-link .nav-link-ul .nav-link-item .link,.van-popover .mask-bg .nav-link .nav-link-ul .nav-link-item .link {
  color: #fff;
  text-shadow: 0 1px 1px rgba(0,0,0,.3)
}

.international-header .mask-bg .nav-link .nav-link-ul .nav-link-item .link:hover,.van-popover .mask-bg .nav-link .nav-link-ul .nav-link-item .link:hover {
  color: #fff
}

.international-header .mask-bg .bili-avatar .bili-avatar-img,.international-header .mask-bg .nav-search,.van-popover .mask-bg .bili-avatar .bili-avatar-img,.van-popover .mask-bg .nav-search {
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.24)
}

.van-popover {
  padding: 0;
  text-align: inherit
}

.slide-fade-enter-active {
  transition: all .2s ease
}

.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1,.5,.8,1)
}

.slide-fade-enter,.slide-fade-leave-to {
  transform: translateY(-5px);
  opacity: 0
}

.international-header {
  min-width: 999px;
  min-height: 56px
}

.b-wrap {
  width: 1630px;
  margin: 0 auto
}

@media screen and (max-width: 1870px) {
  .b-wrap {
    width:1414px
  }

  .b-wrap .page-tab .con li {
    width: 58px
  }

  .b-wrap .page-tab .con li .channel-name {
    width: 58px!important
  }

  .b-wrap .friendship-link {
    width: 242px
  }
}

@media screen and (max-width: 1654px) {
  .b-wrap {
    width:1198px
  }

  .b-wrap .page-tab .con li,.b-wrap .page-tab .con li .channel-name {
    width: 50px!important
  }

  .b-wrap .tab-line-itnl {
    margin: 0 8px
  }

  .b-wrap .tab-line-itnl.none {
    margin: 0 12px 0 0
  }

  .b-wrap .friendship-link {
    width: 220px
  }
}

@media screen and (max-width: 1438px) {
  .b-wrap {
    width:999px
  }

  .b-wrap .channel-menu-itnl .item.hide {
    display: none
  }

  .b-wrap .page-tab .con li {
    width: 50px
  }

  .b-wrap .page-tab .con li .channel-name {
    width: 50px!important
  }

  .b-wrap .tab-line-itnl {
    margin: 0 8px
  }
}

.international-header.fixed-top .mini-header {
  position: fixed;
  top: 0;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.08)
}

.international-header.fixed-top .mini-header .bili-icon_dingdao_xiazaiapp,.international-header.fixed-top .mini-header .bili-icon_dingdao_zhuzhan {
  color: #00a1d6
}

.international-header.fixed-top .mini-type .nav-link .nav-link-ul .nav-link-item .link,.international-header.fixed-top .mini-type .nav-user-center .user-con .item .name {
  color: #212121
}

.international-header.fixed-top .nav-link .nav-link-ul.mini .bili-icon_dingdao_xiazaiapp {
  color: #00a1d6
}

</style>

