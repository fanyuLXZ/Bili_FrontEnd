<template>
  <!-- 登录 -->
  <div>
    <van-popover
      popper-class="van-popper-login"
      placement="bottom" 
      :trigger="isTouchDevice ? 'click' : 'hover'"
      transition="slide-fade"
      width="360"
      @show="showAndHide(true)"
      @hide="showAndHide(false)"
      :open-delay="300">
      <div class="vp-container">
        <p class="title">{{$HeadLang[20]}}：</p>
        <div class="img-panel">
          <img src="//static.hdslb.com/images/danmu.png" :style="{ left: `${imgLeft}px `}">
          <img src="//static.hdslb.com/images/danmu.png" :style="{ left: `${imgRight}px `}">
        </div>
        
        <div class="btn-box">
          <!-- 注册 -->
          <a
            class="btn reg-btn"
            href="//passport.bilibili.com/register/phone.html"
            @click="customReport('top_window_click', { module: '注册'})"
          >
            {{$HeadLang[18]}}
          </a>
          <!-- 登录 -->
          <a href="//passport.bilibili.com/login" class="btn" @click="customReport('top_window_click', { module: '登录' })">
            {{$HeadLang[19]}}
          </a>
        </div>
      </div>

      <!-- 语言切换 -->
      <LangChange :lang="lang" />

      <!-- login -->
      <div slot="reference" class="mini-login">
        <span @click="goLogin" class="name">
          <img class="logout-face" src="//static.hdslb.com/images/akari.jpg">
          {{$HeadLang[19]}}
        </span>
      </div>

    </van-popover>
  </div>
</template>

<script>
import LangChange from './LangChange'
import { customReport } from 'g-public/js/utils'

export default {
  name: 'NavUserCenterLogin',
  components: {
    LangChange,
  },
  props: {
    lang: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      imgLeft: 0,
      imgRight: 320,
      timer: 0,
      bsource: ''
    }
  },
  beforeMount() {
    this.bsource = window.bsource || ''
  },
  methods: {
    customReport,
    move() {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.imgLeft -= 3
        this.imgRight -= 3
        if(this.imgLeft < -320) {
          this.imgLeft = 320
        }
        if(this.imgRight < -320) {
          this.imgRight = 320
        }
      }, 50)
    },
    showAndHide(boo) {
      if(boo) {
        customReport('top_window_view', {
          module: '登录',
        })
        this.move()
      }else {
        clearInterval(this.timer)
      }
    },
    goLogin() {
      if(this.isTouchDevice) return
      customReport('top_bar_click', { module: '登录' })
      window.open('//passport.bilibili.com/login', '_blank')
    },
  },
}
</script>

<style lang="less" scoped>
// hover panel
.van-popper-login {
  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.20);
  border-radius: 2px;
  width: 360px;


  .vp-container {
    width: 100%;
    padding: 16px 20px 12px 20px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #F4F4F4;
  }

  .title {
    font-size: 14px;
    color: #212121;
    margin-bottom: 15px;
  }

  .img-panel {
    position: relative;
    width: 320px;
    height: 200px;
    overflow: hidden;
    background: url(//static.hdslb.com/images/base/danmu.png) no-repeat center;
    background-color: #eee;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .btn-box {
    display: flex;
    justify-content: space-between;
    .btn {
      display: inline-block;
      cursor: pointer;
      width: 48%;
      height: 38px;
      line-height: 38px;
      text-align: center;
      background-color: #00A1D6;
      color: #FFFFFF;
      font-size: 14px;
      border-radius: 2px;
      margin-top: 16px;
      transition: .3s ease;
      border: 1px solid #00A1D6;
      &:hover {
        background-color: #00b5e5;
        color: #FFFFFF;
      }
      &.reg-btn{
        background-color: #fff;
        color: #00b5e5;
      }
    }
  }
}

.mini-login .name{
  font-size: 14px;
  color: #fff;
  white-space: nowrap;
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    border: 1px solid #C0C0C0;
  }
  &:hover {
    color: #fff;
  }
}

</style>

<style lang="less">
// reset van style
.van-popover.van-popper.van-popper-login {
  padding: 0;
  border: none;
  top: 44px !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px !important;

  .lang-change {
    .lang-intro {
      left: -240px;
    }
  }
}
</style>