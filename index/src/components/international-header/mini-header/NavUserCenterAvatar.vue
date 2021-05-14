<template>
  <div>
<!--    <van-popover-->
<!--      popper-class="van-popper-nav van-popper-avatar"-->
<!--      placement="bottom" -->
<!--      :trigger="isTouchDevice ? 'click' : 'hover'"-->
<!--      transition="slide-fade"-->
<!--      :visible-arrow="false"-->
<!--      @show="popoverVisible = true"-->
<!--      @hide="popoverVisible = false"-->
<!--      width="280"-->
<!--      :open-delay="150">-->
    <van-popover
        popper-class="van-popper-nav van-popper-avatar"
        placement="bottom"
        :trigger="'hover'"
        transition="slide-fade"
        :visible-arrow="false"
        @show="popoverVisible = true"
        @hide="popoverVisible = false"
        width="280"
        :open-delay="150">
      <div class="vp-container">

        <!-- 大头像 -->
        <a
          ref="big-avatar"
          class="avatar"
          href="//space.bilibili.org"
          v-van-report:mininav-click.click="`头像`"
          v-van-report:top_bar_click.click="{ module:'头像'}"
          :class="{ 'has-decorate': userInfo.pendant && userInfo.pendant.image }"
          target="_blank"
        >

        </a>

        <!-- 昵称 -->
        <p class="nickname"
           :style="{ 'padding-top': (userInfo.pendant && userInfo.pendant.image) ? '52px' : '42px',
                     'color': userInfo.vip_nickname_color || '#212121'}"
            v-text="userInfo.uname"></p>

        <!-- （年度）大会员/小会员/ -->
        <a v-if="isVip"
           class="vip"
            :class="`vip--${labelColor}`"
           v-text="userInfo.vip_label.text"
           href="//account.bilibili.org/account/big"
           target="_blank"></a>

        <!-- 等级 -->
        <div class="level-content">
          <div class="level-info">
            <span class="grade">{{$HeadLang['22']}} {{ userInfo.level_info.current_level }}</span>
            <span v-if="userInfo.level_info.current_level" class="progress">
              {{userInfo.level_info.current_exp}} / {{userInfo.level_info.next_exp}}
            </span>
            <a v-else href="http://www.bilibili.org/v/newbie/entry?re_src=17" target="_blank" class="hint">{{$HeadLang['23']}}Lv 1</a>
          </div>

          <a class="level-link" href="http://account.bilibili.org/account/record?type=exp" target="_blank">
            <div class="level-bar">
              <div class="level-progress" :style=" {'width': progressWidth} "></div>
            </div>
          </a>

          <div class="level-intro">
            <!-- 作为LV(1-6) ，你可以： -->
            <!-- 作为LV0, 你无法享受特权 -->
            <p class="level-intro__title">{{$HeadLang['24']}}LV{{userInfo.level_info.current_level}}
              {{(userInfo.level_info.current_level === 0 ? `，${$HeadLang['74']}` : `，${$HeadLang['53']}：`)}}
              </p>
            <div class="level-intro__content" v-html="levelTxtArray"></div>
            <a class="level-intro__link"
               href="//www.bilibili.org/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3?id=7251c4ab69d44a8ebbbd276dea46d790"
               target="_blank">{{$HeadLang['25']}}
              <svg class="svg-icon" aria-hidden="true">
                <use :xlink:href="'#bili-icon_caozuo_xiangyou'"></use>
              </svg>
            </a>
          </div>

        </div>

        <!-- 硬币等 -->
        <div class="coins">
          <div class="coins-container">
            <div class="info">
              <svg class="add-one-icon" :class="{ 'add-one-icon--show': isFirstLoginAni && popoverVisible }" aria-hidden="true">
                <use :xlink:href="`#bili-yingbi`"></use>
              </svg>
              <a href="http://account.bilibili.org/site/coin" target="_blank" class="jump" :title="$HeadLang['75']">
                <svg class="coins-icon" aria-hidden="true">
                  <use :xlink:href="'#bili-icon_dingdao_yingbi'"></use>
                </svg>
                <span class="money">{{ (userInfo.money).toFixed(1) }}</span>
              </a>
              <span class="login-award" :class="{ 'login-award--show': isFirstLoginAni && popoverVisible }">{{$HeadLang['26']}}</span>
              <a href="http://pay.bilibili.org/paywallet-fe/bb_balance.html" target="_blank" :title="$HeadLang['76']">
                <svg class="coins-icon" aria-hidden="true">
                  <use :xlink:href="'#bili-icon_dingdao_Bbi'"></use>
                </svg>
                <span class="money" v-text="bcoin"></span>
              </a>
            </div>
            <div class="contact">
              <a class="email" href="http://passport.bilibili.org/account/security#/bindmail" target="_blank">
                <i class="bilifont email-icon" :class="{ 'email-icon--bind': userInfo.email_verified }">&#xe735;</i>
                <span v-if="!userInfo.email_verified" class="email-mark"></span>
                <span class="contact-tips email-tips" v-text="userInfo.email_verified ? $HeadLang['77'] : $HeadLang['78']"></span>
              </a>

              <a class="phone" href="http://passport.bilibili.org/account/security#/bindphone" target="_blank">
                <i class="bilifont phone-icon" :class="{ 'phone-icon--bind': userInfo.mobile_verified }">&#xe733;</i>
                <span v-if="!userInfo.mobile_verified" class="phone-mark"></span>
                <span class="contact-tips phone-tips" v-text="userInfo.mobile_verified ? $HeadLang['77'] : $HeadLang['79']"></span>
              </a>
            </div>
          </div>
          <div v-if="userInfo.mobile_verified === 0" class="hint">
            <a href="http://passport.bilibili.org/account/security#/bindphone" target="_blank">{{$HeadLang['27']}}</a>
          </div>
        </div>

        <!-- 关注 / 粉丝 / 动态 / 投稿 -->
        <div class="counts">
          <a class="count-item" :href="`//space.bilibili.org/${userInfo.mid}/fans/follow`" target="_blank">
            <div class="item-key">{{$HeadLang['28']}}</div>
            <div class="item-value">
              <span class="item-num">{{ formatNumForAvatar(countConfig.following).num }}</span>
              <span class="item-unit">{{ formatNumForAvatar(countConfig.following).unit }}</span>
            </div>
          </a>
          <a class="count-item" :href="`//space.bilibili.org/${userInfo.mid}/fans/fans`" target="_blank">
            <div class="item-key">{{$HeadLang['29']}}</div>
            <div class="item-value">
              <span class="item-num">{{ formatNumForAvatar(countConfig.follower).num }}</span>
              <span class="item-unit">{{ formatNumForAvatar(countConfig.follower).unit }}</span>
            </div>
          </a>
          <a class="count-item" :href="`//space.bilibili.org/${userInfo.mid}/dynamic`" target="_blank">
            <div class="item-key">{{$HeadLang['30']}}</div>
            <div class="item-value">
              <span class="item-num">{{ formatNumForAvatar(countConfig.dynamic_count).num }}</span>
              <span class="item-unit">{{ formatNumForAvatar(countConfig.dynamic_count).unit }}</span>
            </div>
          </a>
        </div>

        <!-- 各种链接 -->
        <div class="links">
          <a :href="config.link"
             class="link-item"
             target="_blank"
             v-for="(config, index) in linkConfig"
             @click="linkClick(config)"
             :key="index">
            <div class="link-title">
              <i :class="`link-icon bilifont bili-icon_dingdao_${config.icon}`"></i>
              {{ config.title }}
            </div>
            
          </a>
        </div>

        <!-- 语言切换 -->
        <LangChange :lang="lang" v-if="isShowLang" />
        
        <!-- 退出登录 -->
        <div class="logout">
          <span @click="logout">
            <i class="link-icon bilifont bili-icon_dingdao_dengchu"></i>
            {{$HeadLang['31']}}
          </span>
        </div>
      </div>

      <!-- 外部小头像 -->
      <div
        slot="reference"
        class="mini-avatar"
      >
        <div
          ref="small-avatar"
          :class="{ 'mini-move': popoverVisible }"
          @click="goSpace"
        ></div>
      </div>
    </van-popover>
  </div>
</template>

<script>
import LangChange from './LangChange'
import { cookie, localStorage, trimHttp, formatImg, customReport, webp } from 'g-public/js/utils'
import { format } from 'date-fns'
import { getAvatarNav } from '../api'

export default {
  name: 'NavUserCenterAvatar',

  components: {
    LangChange,
  },

  props: {
    userInfo: {
      type: Object,
      default: null,
    },
    lang: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      isFirstLoginAni: false,
      popoverVisible: false,
      show: true,
      loadCount: false,
      countConfig: {
        following: null,
        follower: null,
        dynamic_count: null,
      },
      linkConfig: [{
        title: this.$HeadLang['33'],
        icon: 'gerenzhongxin',
        link: 'http://account.bilibili.org/account/home',
      }, {
        title: this.$HeadLang['41'],
        icon: 'tougaoguanli',
        link: 'http://member.bilibili.org/v2#/upload-manager/article',
      }, {
        title: this.$HeadLang['34'],
        icon: 'qianbao',
        link: 'http://pay.bilibili.org/',
      }, {
        title: this.$HeadLang['35'],
        icon: 'dingdanzhongxin',
        link: 'http://show.bilibili.org/orderlist',
      },{
        title: this.$HeadLang['36'],
        icon: 'dianpu',
        link: trimHttp(this.userInfo.shop_url) ,
      },{
        title: this.$HeadLang['42'],
        icon: 'zhibozhongxin',
        link: 'http://link.bilibili.org/p/center/index',
      }, {
        title: this.$HeadLang['72'],
        icon: 'cheese',
        link: 'http://www.bilibili.org/cheese/mine/list',
        report: 'mine_pugvcenter_click',
      }],
      levelArray: [],
      isShowLang: false,
      avatarObj: null
    }
  },

  created() {
    this.linkConfig = this.userInfo.has_shop ? this.linkConfig : this.linkConfig.filter(item => item.icon !== 'dianpu')
    this.levelArray = this.$HeadLang['32']
  },

  mounted() {
    const UserAvatar = require('g-public/modules/@bilibili/userAvatar').default
    require('g-public/modules/@bilibili/userAvatar/dist/user-avatar.css')
    this.avatarObj = new UserAvatar()
    this.avatarObj.append({
      avatar: this.userInfo.face,
      avatarHeight: 36,
      avatarWidth: 36,
      radius: true
    }, this.$refs['small-avatar'])
    let bigParams = {
      avatar: this.userInfo.face,
      iconType: this.iconType,
      radius: true
    }
    if (this.userInfo.pendant && (this.userInfo.pendant.image_enhance || this.userInfo.pendant.image)) {
      bigParams.avatarHeight = 60
      bigParams.avatarWidth = 60
      bigParams.pendentHeight = 102
      if (webp) {
        bigParams = Object.assign(bigParams, {
          pendent: this.userInfo.pendant.image_enhance || this.userInfo.pendant.image,
          pendentWidth: 102,
        })
      } else {
        bigParams = Object.assign(bigParams, {
          pendent: this.userInfo.pendant.image_enhance_frame || this.userInfo.pendant.image,
          pendentWidth: this.userInfo.pendant.image_enhance_frame ? 4080 : 102,
          stepWidth: 102,
          isAnimate: this.userInfo.pendant.image_enhance_frame ? true : false,
          duration: 2
        })
      }
    } else {
      bigParams = Object.assign(bigParams, {
        avatarHeight: 70,
        avatarWidth: 70,
      })
    }
    this.avatarObj.append(bigParams, this.$refs['big-avatar'])
  },

  beforeMount() {
    // 只有在首页才显示语言切换模块
    if(location.hostname === 'www.bilibili.org' && location.pathname === '/') {
      this.isShowLang = true
    }
  },

  computed: {
    iconType() {
      if (this.verify === 'organization') {
        return 'business'
      } else if (this.verify === 'person') {
        return 'personal'
      } else if (this.isVip && this.userInfo.vip_avatar_subscript === 2) {
        return 'small-vip'
      } else if (this.isVip && this.userInfo.vip_avatar_subscript === 1) {
        return 'big-vip'
      }
      return ''
    },
    labelColor() {
      const { vip_label } = this.userInfo
      const theme = vip_label.label_theme || ''
      if(theme.indexOf('fool') > -1) {
        return 'green'
      }
      return 'red'
    },
    isVip(){
      // vipStatus 1 未过期
      const { vipType, vipStatus } = this.userInfo
      return (vipType == 1 || vipType == 2) && vipStatus == 1
    },
    levelTxtArray(){
      return this.levelArray[this.userInfo.level_info.current_level]
    },
    progressWidth() {
      const { level_info } = this.userInfo
      return level_info ? (level_info.current_level === 6 ? '100%' : ((level_info.current_exp) / (level_info.next_exp) * 100 >> 0) + '%') : '0'
    },
    bcoin(){
      const { wallet } = this.userInfo
      return wallet && (wallet.bcoin_balance || wallet.bcoin_balance == 0) ? wallet.bcoin_balance : '--'
    },
    verify(){
      if (this.userInfo && this.userInfo.official) {
        const { role } = this.userInfo.official
        if (role === 1 || role === 2 || role === 7) {
          return 'person'
        } else if (role === 3 || role === 4 || role === 5 || role === 6) {
          return 'organization'
        }
      }
      return ''
    },
  },
  methods: {
    formatImg,
    trimHttp,
    async getNavCount() {
      const { data } = await getAvatarNav()
      if(data && data.data) {
        this.countConfig = data.data
        this.loadCount = true
      }
    },
    // 当日首次登录动画
    checkTracker() {
      if (!window.localStorage) return

      let uid = cookie.get('DedeUserID')
      let timeTrackerValue = JSON.parse(localStorage.getItem('time_tracker')) || {}
      const TODAY = format(new Date(), 'YYYYMMDD') // eg: 20190520

      if (timeTrackerValue[uid] !== TODAY) {
        timeTrackerValue[uid] = TODAY;
        localStorage.setItem('time_tracker', JSON.stringify(timeTrackerValue))
        this.isFirstLoginAni = true
        return
      }

      this.isFirstLoginAni = false
    },
    linkClick(config) {
      if(config.report) {
        customReport(config.report)
      }
    },
    goSpace() {
      if(this.isTouchDevice) return
      window.open('//space.bilibili.org', '_blank')
    },
    formatNumForAvatar(initNum) {
      if(!initNum) return {
        num: '--',
      }
      if (initNum <= 0) return {
        num: 0,
      }
      let number = Number(initNum)
      if (number > 99999999) {
        return {
          num: Math.round(number / 10000000) / 10,
          unit: '亿',
        }
      } else if (number > 9999) {
        return {
          num: Math.round(number / 1000) / 10,
          unit: '万',
        }
      } else {
        return {
          num: number,
        }
      }
    },
    async logout() {
      try {
        this.$userStatus.logout((data) => {
          if (data && data.code === 0 && data.data.redirectUrl) {
            window.location = data.data.redirectUrl
          }
        })
      } catch (_) {
        console.log(_)
      }
    }
  },

  watch: {
    popoverVisible(nv) {
      if (nv) {
        if (!this.loadCount) {
          this.getNavCount()
        }
        this.checkTracker()
      }
    },
  },
}
</script>

<style lang="less" scoped>
// 外层头像
.mini-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: relative;
  margin-right: 10px;

  & > div {
    height: 100%;
    transform: translate(0, 0);
    transition: transform .2s ease;
  }

  .mini-move {
    transform: translate(2px, 20px);
    width: 40px;
    height: 40px;
  }
}

// hover panel
.van-popper-avatar {
  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.20);
  border-radius: 2px;
  width: 280px;
  z-index: 1;
  .vp-container {
    min-height: 492px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .avatar {
    cursor: pointer;
    position: absolute;
    top: -36px;
    left: 107px;
    width: 68px;
    height: 68px;
    border-radius: 50%;

    // .avatar-decorate {
    //   position: absolute;
    //   width: 102px;
    //   top: -21px;
    //   left: -19px;
    // }
    // .avatar-decorate-empty {
    //   position: absolute;
    //   width: 80px;
    //   height: 80px;
    //   top: -7px;
    //   left: -6px;
    // }

    // .avatar-img {
    //   width: 100%;
    //   height: 100%;
    //   border-radius: 50%;
    // }

    // .vip-icon {
    //   position: absolute;
    //   right: 0;
    //   bottom: 0;
    //   width: 20px;
    //   height: 20px;
    // }

  }

  .has-decorate {
    top: -30px;
    left: 112px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .nickname {
    color: #212121;
    font-weight: 600;
    text-align: center;
    font-size: 16px;

    &--red {
      color: #FB7299;
    }

    &--green {
      color: #62c076;
    }
  }

  .vip {
    margin-top: 4px;
    width: 66px;
    text-align: center;
    background-color: #FB7299;
    color: #FFFFFF;
    font-size: 12px;
    border-radius: 2px;

    &--red {
      background: #FB7299;
    }

    &--green {
      background: #62c076;
    }

    &:hover {
      color: #FFFFFF;
    }
  }
  .level-intro {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    padding: 15px;
    left: 279px;
    background: #fff;
    width: 240px;
    font-size: 14px;
    color: #212121;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.20);
    transition: .3s ease;
    border-radius: 2px;

    &__title {
      margin-bottom: 12px;
    }

    &__content {
      margin-bottom: 14px;
    }

    &__link {
      color: #00A1D6;
    }

    .svg-icon {
      width: 13px;
      height: 13px;
      fill: #00A1D6;
      vertical-align: middle;
    }
  }
  .level-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    padding: 0 20px;

    &:hover {
      .level-intro {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  .level-info {
    margin: 20px 0 5px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .grade {
      font-size: 14px;
      color: #212121;
    }

    .progress {
      font-size: 12px;
      color: #999999;
    }

    .hint {
      font-size: 12px;
      color: #00A1D6;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .level-link {
    height: 10px;
    width: 240px;
  }

  .level-bar {
    width: 240px;
    height: 2px;
    background-color: #F4F4F4;
    position: relative;
    margin: 4px 0;

    .level-progress {
      position: absolute;
      background: #F3CB85;
      border-radius: 2px;
      width: 80%;
      height: 2px;
      top: 0;
      left: 0;
    }
  }

  
  .logout {
    cursor: pointer;
    width: 100%;
    font-size: 14px;
    color: #212121;
    display: flex;
    align-items: center;
    padding: 7px 0px;

    span {
      width: 100%;
      padding: 8px 23px;
      transition: .3s ease;
      display: flex;
      align-items: center;

      &:hover {
        color: #212121;
        background: #F4F4F4;
      }
    }

    .svg-icon {
      width: 20px;
      height: 20px;
      margin-right: 8px;
      vertical-align: middle;
      fill: #757575;
      overflow: hidden;
    }
  }
  .coins {
    width: 100%;
    border-bottom: 1px solid #F4F4F4;
    padding: 14px 20px;
    color: #212121;

    .coins-container {
      display: flex;
      justify-content: space-between;
    }

    .coins-icon {
      width: 20px;
      height: 20px;
    }

    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;

      .add-one-icon {
        width: 15px;
        height: 15px;
        left: 3px;
        opacity: 0;
        position: absolute;

        &--show {
          animation: coin-jump 1s ease-in-out;
        }
      }

      a {
        display: flex;
        align-items: center;
      }

      .login-award {
        color: #2CC06F;
        position: absolute;
        transition: 0.3s;
        font-size: 12px;
        opacity: 0;
        top: -12px;
        background: #fff;
        padding: 4px 5px;
        width: 82px;
        z-index: -1;
        &--show {
          z-index: 1;
          animation: login-award-show 3s ease-in-out 0s 1 alternate forwards;
        }
      }

      .money {
        margin: 0px 20px 0 8px;
      }
    }

    .contact {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        display: flex;
        align-items: center;
      }

      .email,
      .phone {
        position: relative;
        width: 23px;
      }

      .email {
        margin: 0px 4px 0 0;
      }
      .email-tips {
        display: none;
        right: 33px;
        top: 0px;
        &:after{
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background:  url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAA2BAMAAAAIUcVlAAAALVBMVEUAAADQ0NDOzs7MzMzMzMzMzMzMzMzMzMzMzMzMzMz////09PTt7e3m5ube3t7aN2g1AAAACnRSTlMA/PLhbEktF8nGEiCq/wAAAGtJREFUGNNjeFnAwMCw1gxIrDoUACRWi4AJMBcq8aKAgXjwatWqdQy9q1bdZCg+tcacgU17UwIDQ6AoUIbFgYFUwN4HJJJvMTCw6qxiYHDcBSHAXLAESMk8UgyEOAPsILDTII6cu2rVDbDDAfAAJuuGgkdmAAAAAElFTkSuQmCC);
          right: -8px;
          top: 5px;
        }
      }
      .email:hover {
        .email-tips {
          display: block;
        }
      }
      .phone-tips {
        display: none;
        left: 28px;
        top: 0px;
        &:after{
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAA2BAMAAAAIUcVlAAAALVBMVEUAAADQ0NDOzs7MzMzMzMzMzMzMzMzMzMzMzMzMzMz////09PTt7e3m5ube3t7aN2g1AAAACnRSTlMA/PLhbEktF8nGEiCq/wAAAGtJREFUGNNjeFnAwMCw1gxIrDoUACRWi4AJMBcq8aKAgXjwatWqdQy9q1bdZCg+tcacgU17UwIDQ6AoUIbFgYFUwN4HJJJvMTCw6qxiYHDcBSHAXLAESMk8UgyEOAPsILDTII6cu2rVDbDDAfAAJuuGgkdmAAAAAElFTkSuQmCC);
          left: -8px;
          background-repeat: no-repeat;
          background-position: 0px -31px;
          top: 5px;
        }
      }
      .phone:hover {
        .phone-tips {
          display: block;
        }
      }

      .email-icon {
        color: #C0C0C0;
        font-size: 20px;
        margin-right: 12px;
      }

      .phone-icon {
        color: #C0C0C0;
        font-size: 20px;
      }

      .email-icon--bind,
      .phone-icon--bind {
        color: #00A1D6;
      }

      .email-mark,
      .phone-mark {
        position: absolute;
        width: 6px;
        height: 6px;
        background: #FA5A57;
        border-radius: 50%;
        left: 15px;
        top: 3px;
      }

      .contact-tips {
        font-size: 12px;
        padding: 0 6px;
        height: 20px;
        line-height: 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
        position: absolute;
        white-space: nowrap;
        background-color: #fff;
        color: #222;
        z-index: 10;
      }
    }

    .hint a {
      margin-top: 8px;
      font-size: 12px;
      color: #00A1D6;
      display: flex;
      justify-content: flex-end;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .counts {
    height: 58px;
    width: 100%;
    border-bottom: 1px solid #F4F4F4;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .count-item {
    text-align: center;
    flex: 1;
    .item-key {
      font-size: 12px;
      color: #999;
    }

    .item-value {
      font-size: 16px;
      color: #212121;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      height: 20px;
    }
    .item-unit {
      font-size: 14px;
    }
    &:hover {
      .item-key, .item-value{
        color: #00A1D6;
      }
    }
  }

  .links {
    width: 100%;
    border-bottom: 1px solid #F4F4F4;
    padding: 7px 0;

    .link-item {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: .3s ease;
      padding: 8px 23px;

      &:hover {
        background: #F4F4F4;
      }
    }

    .link-title {
      font-size: 14px;
      color: #212121;
      display: flex;
      align-items: center;
    }
  }
  .link-icon {
    font-size: 24px;
    vertical-align: middle;
    color: #979797;
    margin-right: 5px;
  }
  .link-icon-more {
    font-size: 16px;
    vertical-align: middle;
    color: #979797;
  }


  @keyframes login-award-show {
    0% {
      top: -12px;
      opacity: 0;
    }

    20% {
      top: 0px;
      opacity: 1;
    }

    50% {
      top: 0px;
      opacity: 1;
    }

    100% {
      top: 0px;
      opacity: 0;
      z-index: -1;
    }
  }

  @keyframes coin-jump {
    0% {
      transform: translateY(0px) rotate(0deg);
      opacity: 0;
    }

    50% {
      transform: translateY(-50px) rotateY(-360deg);
      opacity: 1;
    }

    100% {
      transform: translateY(0px) rotateY(0deg);
      opacity: 0;
    }
  }
}



</style>

<style lang="less">
// reset van style
.van-popover.van-popper.van-popper-avatar {
  padding: 0;
  border: none;
  top: 44px !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px !important;
}
</style>

