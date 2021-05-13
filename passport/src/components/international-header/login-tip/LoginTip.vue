<template>
  <div class="lt-row" v-show="visible">
    <div class="lt-col">
      <div class="login-tip">
        <div class="close" @click="close">
          <svg viewBox="0 0 100 100">
            <path d="M2 2 L98 98 M 98 2 L2 98Z" stroke-width="10px" stroke="#212121" stroke-linecap="round"></path>
          </svg>
        </div>
        <div class="title">
          登录bilibili，享受更多权益！
        </div>
        <LoginTipContent />
        <a
          class="login-btn"
          :href="handleHref('https://passport.bilibili.com/login')"
          target="_blank"
          @click="handleReport"
        >
          立即登录
        </a>
      </div>
    </div>
  </div>
  
</template>
<script>
import LoginTipContent from './LoginTipContent'
import { allCustomReport } from 'g-public/js/utils'

export default {
  components: {
    LoginTipContent,
  },
  data() {
    return {
      visible: true,
    }
  },
  methods: {
    handleHref(url){
     const spmid =  document.getElementsByTagName('meta').spm_prefix?.content || '0.0'
     return `${url}?from_spm_id=${spmid}.down_window_login.login`
    },
    handleReport() {
      allCustomReport({
        c:'down_window_login',
        d:'login',
        type:'click'
      })
    },
    close() {
      this.visible = false
      window.localStorage?.setItem('loginTipShown', 1)
      // close
    }
  }
}
</script>
<style lang="less" scoped>
.lt-row {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 131;
  .lt-col {
    width: 1630px;
    display: flex;
    justify-content: flex-end;
    height: 1px;
    position: relative;
    bottom: -1px;
  }
}
@media screen and (max-width: 1870px) {
  .lt-row > .lt-col {
    width: 1414px;
  }
}
@media screen and (max-width: 1654px) {
  .lt-row > .lt-col {
    width: 1198px;
  }
}
@media screen and (max-width: 1438px) {
  .lt-row > .lt-col {
    width: 999px;
  }
}
.login-tip {
  box-sizing: border-box;
  position: relative;
  top: -224px;
  background: #FFFFFF;
  box-shadow: 0 3px 12px 0 rgba(0,0,0,0.20);
  border-radius: 10px;
  width: 360px;
  height: 200px;
  padding: 18px;
  font-size: 16px;
  .close {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 14px;
    height: 14px;
    cursor: pointer;
  }
  .title {
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #00A1D6;
    line-height: 22px;
    margin-left: 2px;
    margin-bottom: 16px;
  }
  .content {
    margin-bottom: 3px;
  }
  .login-btn {
    display: block;
    box-sizing: border-box;
    margin: 0 2px;
    height: 40px;
    padding: 10px 0;
    line-height: 20px;
    background: #00A1D6;
    border-radius: 2px;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    &:hover {
      color: #FFFFFF;
      background: #00b5e5;
    }
  }
}
</style>