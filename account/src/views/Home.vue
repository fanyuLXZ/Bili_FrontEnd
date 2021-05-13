<!--  作者:欧阳苏蓉 个人中心-首页  -->
<template>
    <!--内容-->
    <div  class="security-right">
      <div  class="secuity-right-home">
        <div >
          <div class="index-info" style="">
            <!--头像-->
            <img_head></img_head>
          </div>
          <div class="loading-icon-box" style="display: none;">
            <div class="loading-icon"></div>
          </div>
        </div>
        <div>
          <!--每日奖励-->
          <reward></reward>
          <div class="loading-icon-box" style="display: none;">
            <div class="loading-icon"></div>
          </div>
        </div>
        <div>
          <!--账号安全-->
          <security :email="email" :tel="tel"></security>
          <div class="loading-icon-box" style="display: none;">
            <div class="loading-icon"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import reward from "../components/home/homeDialiyExp"  //每日奖励
import security from "../components/home/hContentSafe"  //账号安全
import img_head from "../components/home/homeHead"    //用户头像
export default {
  name: 'Home',

  data(){
    return{
      isLogin: false,   //是否登录
      watch:false,    //是否观看视频
      coins:0,    //今日投币
      share:false,   //是否分享视频
      email: false,    //是否绑定邮箱
      tel: false,    //是否绑定手机号
    }
  },

  components: {
    reward,
    security,
    img_head
  }
}
</script>

<style type="text/css">
@import "../assets/personalcenter/index.css";
</style>
