<template>
  <div>
    <van-popover
      placement="bottom" 
      transition="slide-fade"
      width="360"
      v-model="avatarPopoverVisible"
      :trigger="isTouchDevice ? 'click' : 'hover'"
      :visible-arrow="false"
      :open-delay="150"
      @show="popoverViewReport('login_window')"
    >
      <div class="unlogin-popover unlogin-popover-avatar">
        <div class="title">登录后你可以：</div>
        <LoginTipContent class="ltc-content"/>
        <a
          class="login-btn"
          :href="handleHref('https://passport.bilibili.com/login','login_window')"
          target="_blank"
          @click="topBarReport('login_window')"
        >
          立即登录
        </a>
        <div class="register-tip">
          首次使用？
          <a
            :href="handleHref('https://passport.bilibili.com/register/phone.html','login_window')"
            target="_blank"
            @click="topBarReport('login_window','注册')"
          >点我注册</a>
        </div>
      </div>
      <template v-slot:reference>
        <div class="item fall-mini-avatar unlogin">
          <span @click="handleClickTab('https://passport.bilibili.com/login', 'login')">
            <div class="unlogin-avatar">登录</div>
          </span>
        </div>
      </template>
    </van-popover>

    <NavUserCenterVip
      v-van-report:mininav-hover.mouseenter="`大会员`"
      class="item"
      :locsData="locsData"
      :userInfo="userInfo"
    />

    <van-popover
      placement="bottom" 
      transition="slide-fade"
      width="360"
      :trigger="isTouchDevice ? 'click' : 'hover'"
      :visible-arrow="false"
      :open-delay="150"
      @show="popoverViewReport('message_window')"
    >
      <div class="unlogin-popover">
        <div class="content-msg">登录即可查看消息记录</div>
        <a
          class="login-btn"
          :href="handleHref('https://passport.bilibili.com/login','message_window')"
          target="_blank"
          @click="topBarReport('message_window')"
        >
          立即登录
        </a>
      </div>
      <template v-slot:reference>
        <div class="item">
          <span class="name" @click="handleClickTab('//message.bilibili.com/', 'message')">
            消息
          </span>
        </div>
      </template>
    </van-popover>

    <van-popover
      placement="bottom" 
      transition="slide-fade"
      width="360"
      :trigger="isTouchDevice ? 'click' : 'hover'"
      :visible-arrow="false"
      :open-delay="150"
      @show="popoverViewReport('dynamic_window')"
    >
      <div class="unlogin-popover">
        <div class="content-msg">登录即可查看关注动态</div>
        <a
          class="login-btn"
          :href="handleHref('https://passport.bilibili.com/login','dynamic_window')"
          target="_blank"
          @click="topBarReport('dynamic_window')"
        >
          立即登录
        </a>
      </div>
      <template v-slot:reference>
        <div class="item">
          <span class="name" @click="handleClickTab('//t.bilibili.com/', 'dynamic')">
            动态
          </span>
        </div>
      </template>
    </van-popover>

    <van-popover
      placement="bottom" 
      transition="slide-fade"
      width="360"
      :trigger="isTouchDevice ? 'click' : 'hover'"
      :visible-arrow="false"
      :open-delay="150"
      @show="popoverViewReport('favorite_window')"
    >
      <div class="unlogin-popover">
        <div class="content-msg">登录即可查看我的收藏</div>
        <a
          class="login-btn"
          :href="handleHref('https://passport.bilibili.com/login','favorite_window')"
          target="_blank"
          @click="topBarReport('favorite_window')"
        >
          立即登录
        </a>
      </div>
      <template v-slot:reference>
        <div class="item">
          <span class="name" @click="handleClickTab('//space.bilibili.com/', 'favorite')">
            收藏
          </span>
        </div>
      </template>
    </van-popover>


    <van-popover
      placement="bottom" 
      transition="slide-fade"
      width="360"
      :trigger="isTouchDevice ? 'click' : 'hover'"
      :visible-arrow="false"
      :open-delay="150"
      @show="popoverViewReport('history_window')"
    >
      <div class="unlogin-popover">
        <div class="content-msg">登录即可查看历史记录</div>
        <a
          class="login-btn"
          :href="handleHref('https://passport.bilibili.com/login','history_window')"
          target="_blank"
          @click="topBarReport('history_window')"
        >
          立即登录
        </a>
      </div>
      <template v-slot:reference>
        <div class="item unlogin-history" @mouseenter="handleHoverHistory">
          <span class="name"
            @click="handleClickTab(
              'https://passport.bilibili.com/login?goUrl=https%3A%2F%2Fwww.bilibili.com%2Faccount%2Fhistory',
              'history'
            )"
          >历史记录</span>
          <span class="dot" v-if="unloginHistoryDot"></span>
        </div>
      </template>
    </van-popover>

    <div class="item">
      <a  :href="handleHref('//member.bilibili.com/platform/home','creation')" target="_blank" @click="topBarReport('creation')">
        <span class="name">创作中心</span>
      </a>
    </div>

  </div>
</template>
<script>
import NavUserCenterVip from './NavUserCenterVip'
import LoginTipContent from '../login-tip/LoginTipContent'
import loginTip from '../login-tip/LoginTip'
import {  allCustomReport } from 'g-public/js/utils'

export default {
  components: {
    NavUserCenterVip,
    LoginTipContent,
  },
  props: ['locsData', 'userInfo'],
  data() {
    return {
      unloginHistoryDot: false,
      avatarPopoverVisible: false,
      bsource: '',
    }
  },
  beforeMount() {
    this.bsource = window.bsource || ''
    this.unloginHistoryDot = !window.localStorage?.getItem('unloginHistoryDotShown')
  },
  mounted() {
    this.avatarPopoverVisible = true
    const scrollEl = document.scrollingElement || document.documentElement
    this.handleScroll = () => {
      if (scrollEl.scrollTop > 56) {
        this.avatarPopoverVisible = false
        if (!window.localStorage?.getItem('loginTipShown')) {
          this.loginTip = loginTip()
          allCustomReport({
            c:'down_window_login',
            d:'0',
            type:'appear'
          })
        }
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.loginTip?.$el) {
      document.body.removeChild(this.loginTip.$el)
    }
    this.loginTip?.$destroy()
    this.loginTip = null
  },
  methods: {
    handleHref(url,DBlock){
     const spmid =  document.getElementsByTagName('meta').spm_prefix?.content || '0.0'
     return `${url}?from_spm_id=${spmid}.top_bar.${DBlock}`
    },
    topBarReport(DBlock,msgStr){
      allCustomReport({
        CBlock:'top_bar',
        DBlock:DBlock,
        type: 'click'
        },{
          msg:JSON.stringify({
            button:msgStr || '立即登录'
          })
        })
    },
    handleClickTab(url, DBlock) {
      if(this.isTouchDevice) return
      const spmid =  document.getElementsByTagName('meta').spm_prefix?.content || '0.0'
      allCustomReport({
        CBlock:'top_bar',
        DBlock:DBlock,
        type: 'click'
        })
        if(url.indexOf('?') > 0) {
          window.open(`${url}&from_spm_id=${spmid}.top_bar.${DBlock}`, '_blank')
        } else {
          window.open(`${url}?from_spm_id=${spmid}.top_bar.${DBlock}`, '_blank')
        }
      
    },
    popoverViewReport(key = '') {
      allCustomReport({
        CBlock:'top_bar',
        DBlock:key,
        type: 'appear'
        })
    },
    handleHoverHistory() {
      if (!this.unloginHistoryDot) {
        return
      }
      window.localStorage?.setItem('unloginHistoryDotShown', 1)
      this.unloginHistoryDot = false
    }
  }
}
</script>
<style lang="less" scoped>
.unlogin-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  line-height: 36px;
  font-size: 14px;
  color: #00A1D6;
  letter-spacing: 0;
  background: #f6f6f6;
  text-align: center;
  font-weight: 600;
}
.unlogin-history {
  position: relative;
  .dot {
    position: absolute;
    right: -3px;
    top: 3px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #FB7299;
  }
}
.unlogin-popover {
  width: 360px;

  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.20);
  border-radius: 2px;
  position: relative;
  padding: 14px 16px;
  &::before {
    display: block;
    content: " ";
    position: absolute;
    width: 10px;
    height: 10px;
    top: -5px;
    left: 175px;
    background: #FFFFFF;
    transform: rotate(45deg);
  }
  .content-msg {
    height: 40px;
    line-height: 40px;
    margin-bottom: 14px;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    text-align: center;
  }
}
.unlogin-popover-avatar {
  height: 234px;
  .title {
    line-height: 20px;
    font-size: 14px;
    color: #212121;
    letter-spacing: 0;
    margin-left: 4px;
    margin-bottom: 16px;
  }
  .ltc-content {
    margin-bottom: 6px;
  }
  .register-tip {
    margin-top: 16px;
    text-align: center;
    font-size: 14px;
    color: #212121;
    letter-spacing: 0;
    line-height: 20px;
    & > a {
      color: #00A1D6;
      &:hover {
        color: #00b5e5;
      }
    }
  }
}
.login-btn {
  display: block;
  box-sizing: border-box;
  height: 40px;
  padding: 10px 0;
  line-height: 20px;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  background: #00A1D6;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    color: #FFFFFF;
    background: #00b5e5;
  }
}
.name {
  cursor: pointer;
}
</style>
