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
          <security></security>
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
import img_head from "../components/home/homeHead"  //用户头像
export default {
  name: 'Home',
  components: {
    reward,
    security,
    img_head
  }
}
</script>

<style type="text/css">
@import "../assets/personalcenter/index.css";
@import "https://s1.hdslb.com/bfs/static/account-fe/static/css/app.d70533e21fd1ad58c30455ac07bba416.css";

.van-popper.popper__arrow {
  border-width: 6px;
  -webkit-filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
}

.van-popper .popper__arrow::after {
  content: " ";
  border-width: 6px;
}

.van-popper[x-placement^=top] {
  margin-bottom: 12px;
}

.van-popper[x-placement^=top] .popper__arrow {
  bottom: -6px;
  left: 50%;
  margin-right: 3px;
  border-top-color: #ebeef5;
  border-bottom-width: 0;
}

.van-popper[x-placement^=top] .popper__arrow::after {
  bottom: 1px;
  margin-left: -6px;
  border-top-color: #fff;
  border-bottom-width: 0;
}

.van-popper[x-placement^=bottom] {
  margin-top: 12px;
}

.van-popper[x-placement^=bottom] .popper__arrow {
  top: -6px;
  left: 50%;
  margin-right: 3px;
  border-top-width: 0;
  border-bottom-color: #ebeef5;
}

.van-popper[x-placement^=bottom] .popper__arrow::after {
  top: 1px;
  margin-left: -6px;
  border-top-width: 0;
  border-bottom-color: #fff;
}

.van-popper[x-placement^=right] {
  margin-left: 12px;
}

.van-popper[x-placement^=right] .popper__arrow {
  top: 50%;
  left: -6px;
  margin-bottom: 3px;
  border-right-color: #ebeef5;
  border-left-width: 0;
}

.van-popper[x-placement^=right] .popper__arrow::after {
  bottom: -6px;
  left: 1px;
  border-right-color: #fff;
  border-left-width: 0;
}

.van-popper[x-placement^=left] {
  margin-right: 12px;
}

.van-popper[x-placement^=left] .popper__arrow {
  top: 50%;
  right: -6px;
  margin-bottom: 3px;
  border-right-width: 0;
  border-left-color: #ebeef5;
}

.van-popper[x-placement^=left] .popper__arrow::after {
  right: 1px;
  bottom: -6px;
  margin-left: -6px;
  border-right-width: 0;
  border-left-color: #fff;
}

.van-popover {
  position: absolute;
  background: #fff;
  min-width: 150px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  padding: 12px;
  z-index: 2000;
  color: #606266;
  line-height: 1.4;
  text-align: justify;
  font-size: 14px;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.van-popover--plain {
  padding: 18px 20px;
}

.van-popover__title {
  color: #303133;
  font-size: 16px;
  line-height: 1;
  margin-bottom: 12px;
}

.van-popover:focus,
.van-popover:focus:active,
.van-popover__reference:focus:hover,
.van-popover__reference:focus:not(.focusing) {
  outline-width: 0;
}
</style>
<style type="text/css">
.loc-menu-box {
  background: #fff;
  width: 399px;
  padding: 12px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;
}

.loc-menu-box .loc-link {
  display: block;
  position: relative;
}

.loc-menu-box .loc-link img {
  width: 375px;
  height: 110px;
  border-radius: 4px;
}

.loc-menu-box .loc-link span {
  position: absolute;
  color: #fff;
  left: 0;
  bottom: 0;
  width: 375px;
  line-height: 24px;
  padding-left: 10px;
  border-radius: 4px;
  text-align: left;
  box-sizing: border-box;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
}

.loc-menu-box .loc-link:first-child {
  margin-bottom: 12px;
}

.loc-moveclip {
  width: 54px;
  height: 36px;
  overflow: hidden;
}

.loc-mc-box {
  width: 54px;
  height: 108px;
  overflow: hidden;
  position: relative;
  animation: locmoveclipslider 10s infinite ease-out;
  animation-delay: 4.5s;
}

.loc-mc-box .bnj-gif {
  position: absolute;
  left: 0;
  top: 36px;
  width: 54px;
  height: 36px;
  transform: translateZ(0);
}

.loc-mc-box .bnj-txt {
  line-height: 36px;
  text-align: center;
  width: 100%;
}

.loc-mc-box .txt-up {
  position: absolute;
  left: 0;
  top: 0;
}

.loc-mc-box .txt-down {
  position: absolute;
  left: 0;
  top: 72px;
}

@keyframes locmoveclipslider {
  0% {
    transform: translateY(0);
  }
  5% {
    transform: translateY(-36px);
  }
  50% {
    transform: translateY(-36px);
  }
  55% {
    transform: translateY(-72px);
  }
  100% {
    transform: translateY(-72px);
  }
}
</style>
<style type="text/css">.channel-menu-mini {
  padding: 10px 5px;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  width: 670px;
  height: 420px;
  display: flex;
  text-align: left;
}

.channel-menu-mini .box {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.channel-menu-mini .box a {
  display: flex;
  width: 172px;
  height: 24px;
  line-height: 24px;
  padding: 10px 20px !important;
  color: #212121;
  border-radius: 4px;
  transition: all 0.3s;
  font-size: 14px;
  justify-content: space-between;
  box-sizing: content-box;
}

.channel-menu-mini .box a:hover {
  color: #212121;
  background: #f4f4f4;
}

.channel-menu-mini .box .name svg {
  margin-right: 10px;
}

.channel-menu-mini .box .count {
  color: #999;
}

.channel-menu-mini .l-box {
  flex: 2;
}

.channel-menu-mini .r-box {
  flex: 1;
  padding-left: 5px;
  border-left: 1px solid #e7e7e7;
}

.channel-menu-mini .svg-icon {
  width: 1.8em;
  height: 1.8em;
  vertical-align: bottom;
  fill: currentColor;
  overflow: hidden;
}
</style>
<style type="text/css">.nav-link .bili-icon_dingdao_xiazaiapp {
  margin-right: 2px;
  font-size: 18px;
  vertical-align: middle;
}

.nav-link .nav-link-ul {
  height: 36px;
  display: flex;
  align-items: center;
}

.nav-link .nav-link-ul.mini .bili-icon_dingdao_xiazaiapp {
  color: #00a1d6;
}

.nav-link .nav-link-ul .nav-link-item {
  margin-right: 12px;
}

.nav-link .nav-link-ul .nav-link-item .link {
  font-size: 14px;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  line-height: 32px;
  white-space: nowrap;
  display: flex;
}

.nav-link .nav-link-ul .nav-link-item .link .navbar_logo {
  width: 70px;
  height: 32px;
  margin-right: 16px;
}

.nav-link .nav-link-ul .nav-link-item .link .navbar_pullup {
  width: 16px;
  height: 16px;
  align-self: center;
  transform: rotate(180deg);
  transition: transform 0.3s;
}

.nav-link .bili-icon_dingdao_zhuzhan {
  margin-right: 6px;
  font-size: 18px;
  vertical-align: middle;
}

.popover-channe {
  padding: 0;
  width: 670px;
  height: 372px;
  border: none;
  background: transparent;
  box-shadow: none;
}

.popover-game {
  padding: 0;
  width: 680px;
  height: 260px;
  border: none;
  background: transparent;
  box-shadow: none;
}

.popover-live {
  padding: 0;
  width: 528px;
  height: 266px;
  border: none;
  background: transparent;
  box-shadow: none;
}

.popover-manga {
  padding: 0;
  width: 720px;
  height: 266px;
  border: none;
  background: transparent;
  box-shadow: none;
}

.popover-app-download {
  padding: 0;
  width: 280px;
  height: 212px;
  border: none;
  box-shadow: none;
  background: url(//s1.hdslb.com/bfs/seed/jinkela/header-v2/images/app-download.png);
  background-size: cover;
  background-position-y: -3px;
  display: flex;
  align-items: flex-end;
}

.popover-app-download .txt {
  font-size: 14px;
  color: #212121;
  width: 100%;
  text-align: center;
  padding-bottom: 24px;
}

.van-popover.van-popper.popover-channe,
.van-popover.van-popper.popover-game,
.van-popover.van-popper.popover-live,
.van-popover.van-popper.popover-app-download {
  padding: 0;
  top: 45px !important;
}
</style>
<style type="text/css">.lang-change {
  width: 100%;
  border-bottom: 1px solid #F4F4F4;
  padding: 7px 0;
  position: relative;
  font-size: 14px;
}

.lang-change .lang-intro {
  padding: 8px 0;
  top: 0px;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: 279px;
  background: #fff;
  width: 240px;
  font-size: 12px;
  color: #212121;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
  border-radius: 2px;
}

.lang-change .lang-intro-item {
  font-size: 14px;
  padding: 8px 15px;
  line-height: 22px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s;
}

.lang-change .lang-intro-item .bilifont {
  font-size: 22px;
  display: none;
}

.lang-change .lang-intro-item:hover {
  background: #F4F4F4;
}

.lang-change .lang-intro-item.on {
  color: #00A1D6;
}

.lang-change .lang-intro-item.on .bilifont {
  display: block;
}

.lang-change:hover .lang-intro {
  visibility: visible;
  opacity: 1;
}

.lang-change .lang-item {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s ease;
  padding: 8px 23px;
}

.lang-change .lang-item:hover {
  background: #F4F4F4;
}

.lang-change .lang-title {
  font-size: 14px;
  color: #212121;
  display: flex;
  align-items: center;
}

.lang-change .lang-icon {
  font-size: 24px;
  vertical-align: middle;
  color: #979797;
  margin-right: 5px;
}

.lang-change .lang-icon-more {
  font-size: 16px;
  vertical-align: middle;
  color: #979797;
}
</style>
<style type="text/css">.van-popper-login{
  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  width: 360px;
}

.van-popper-login .vp-container{
  width: 100%;
  padding: 16px 20px 12px 20px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #F4F4F4;
}

.van-popper-login .title{
  font-size: 14px;
  color: #212121;
  margin-bottom: 15px;
}

.van-popper-login .img-panel {
  position: relative;
  width: 320px;
  height: 200px;
  overflow: hidden;
  background: url(//static.hdslb.com/images/base/danmu.png) no-repeat center;
  background-color: #eee;
}

.van-popper-login .img-panel img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.van-popper-login .btn-box {
  display: flex;
  justify-content: space-between;
}

.van-popper-login .btn-box .btn {
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
  transition: 0.3s ease;
  border: 1px solid #00A1D6;
}

.van-popper-login .btn-box .btn :hover {
  background-color: #00b5e5;
  color: #FFFFFF;
}

.van-popper-login .btn-box .btn.reg-btn {
  background-color: #fff;
  color: #00b5e5;
}

.mini-login .name {
  font-size: 14px;
  color: #fff;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.mini-login .name img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  border: 1px solid #C0C0C0;
}

.mini-login .name:hover {
  color: #fff;
}
</style>
<style type="text/css">.van-popover.van-popper.van-popper-login {
  padding: 0;
  border: none;
  top: 44px !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px !important;
}

.van-popover.van-popper.van-popper-login .lang-change .lang-intro {
  left: -240px;
}
</style>
<style type="text/css">.mini-avatar  {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: relative;
  margin-right: 10px;
}

.mini-avatar > div  {
  height: 100%;
  transform: translate(0, 0);
  transition: transform 0.2s ease;
}

.mini-avatar .mini-move  {
  transform: translate(2px, 20px);
  width: 40px;
  height: 40px;
}

.van-popper-avatar  {
  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  width: 280px;
  z-index: 1;
}

.van-popper-avatar .vp-container  {
  min-height: 492px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.van-popper-avatar .avatar  {
  cursor: pointer;
  position: absolute;
  top: -36px;
  left: 107px;
  width: 68px;
  height: 68px;
  border-radius: 50%;
}

.van-popper-avatar .has-decorate  {
  top: -30px;
  left: 112px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.van-popper-avatar .nickname  {
  color: #212121;
  font-weight: 600;
  text-align: center;
  font-size: 16px;
}

.van-popper-avatar .nickname--red  {
  color: #FB7299;
}

.van-popper-avatar .nickname--green  {
  color: #62c076;
}

.van-popper-avatar .vip  {
  margin-top: 4px;
  width: 66px;
  text-align: center;
  background-color: #FB7299;
  color: #FFFFFF;
  font-size: 12px;
  border-radius: 2px;
}

.van-popper-avatar .vip--red  {
  background: #FB7299;
}

.van-popper-avatar .vip--green  {
  background: #62c076;
}

.van-popper-avatar .vip :hover {
  color: #FFFFFF;
}

.van-popper-avatar .level-intro  {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  padding: 15px;
  left: 279px;
  background: #fff;
  width: 240px;
  font-size: 14px;
  color: #212121;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
  border-radius: 2px;
}

.van-popper-avatar .level-intro__title  {
  margin-bottom: 12px;
}

.van-popper-avatar .level-intro__content  {
  margin-bottom: 14px;
}

.van-popper-avatar .level-intro__link  {
  color: #00A1D6;
}

.van-popper-avatar .level-intro .svg-icon  {
  width: 13px;
  height: 13px;
  fill: #00A1D6;
  vertical-align: middle;
}

.van-popper-avatar .level-content  {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding: 0 20px;
}

.van-popper-avatar .level-content:hover .level-intro  {
  visibility: visible;
  opacity: 1;
}

.van-popper-avatar .level-info  {
  margin: 20px 0 5px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.van-popper-avatar .level-info .grade  {
  font-size: 14px;
  color: #212121;
}

.van-popper-avatar .level-info .progress  {
  font-size: 12px;
  color: #999999;
}

.van-popper-avatar .level-info .hint  {
  font-size: 12px;
  color: #00A1D6;
}

.van-popper-avatar .level-info .hint :hover {
  text-decoration: underline;
}

.van-popper-avatar .level-link  {
  height: 10px;
  width: 240px;
}

.van-popper-avatar .level-bar  {
  width: 240px;
  height: 2px;
  background-color: #F4F4F4;
  position: relative;
  margin: 4px 0;
}

.van-popper-avatar .level-bar .level-progress  {
  position: absolute;
  background: #F3CB85;
  border-radius: 2px;
  width: 80%;
  height: 2px;
  top: 0;
  left: 0;
}

.van-popper-avatar .logout  {
  cursor: pointer;
  width: 100%;
  font-size: 14px;
  color: #212121;
  display: flex;
  align-items: center;
  padding: 7px 0px;
}

.van-popper-avatar .logout span  {
  width: 100%;
  padding: 8px 23px;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
}

.van-popper-avatar .logout span :hover {
  color: #212121;
  background: #F4F4F4;
}

.van-popper-avatar .logout .svg-icon  {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  vertical-align: middle;
  fill: #757575;
  overflow: hidden;
}

.van-popper-avatar .coins  {
  width: 100%;
  border-bottom: 1px solid #F4F4F4;
  padding: 14px 20px;
  color: #212121;
}

.van-popper-avatar .coins .coins-container  {
  display: flex;
  justify-content: space-between;
}

.van-popper-avatar .coins .coins-icon  {
  width: 20px;
  height: 20px;
}

.van-popper-avatar .coins .info  {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.van-popper-avatar .coins .info .add-one-icon  {
  width: 15px;
  height: 15px;
  left: 3px;
  opacity: 0;
  position: absolute;
}

.van-popper-avatar .coins .info .add-one-icon--show  {
  animation: coin-jump-data-v-7106b610 1s ease-in-out;
}

.van-popper-avatar .coins .info a  {
  display: flex;
  align-items: center;
}

.van-popper-avatar .coins .info .login-award  {
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
}

.van-popper-avatar .coins .info .login-award--show  {
  z-index: 1;
  animation: login-award-show-data-v-7106b610 3s ease-in-out 0s 1 alternate forwards;
}

.van-popper-avatar .coins .info .money  {
  margin: 0px 20px 0 8px;
}

.van-popper-avatar .coins .contact  {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.van-popper-avatar .coins .contact a  {
  display: flex;
  align-items: center;
}

.van-popper-avatar .coins .contact .email ,
.van-popper-avatar .coins .contact .phone  {
  position: relative;
  width: 23px;
}

.van-popper-avatar .coins .contact .email  {
  margin: 0px 4px 0 0;
}

.van-popper-avatar .coins .contact .email-tips  {
  display: none;
  right: 33px;
  top: 0px;
}

.van-popper-avatar .coins .contact .email-tips :after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background: url(//s1.hdslb.com/bfs/seed/jinkela/header-v2/images/arrow4.png);
  right: -8px;
  top: 5px;
}

.van-popper-avatar .coins .contact .email:hover .email-tips  {
  display: block;
}

.van-popper-avatar .coins .contact .phone-tips  {
  display: none;
  left: 28px;
  top: 0px;
}

.van-popper-avatar .coins .contact .phone-tips :after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background: url(//s1.hdslb.com/bfs/seed/jinkela/header-v2/images/arrow4.png);
  left: -8px;
  background-repeat: no-repeat;
  background-position: 0px -31px;
  top: 5px;
}

.van-popper-avatar .coins .contact .phone:hover .phone-tips  {
  display: block;
}

.van-popper-avatar .coins .contact .email-icon  {
  color: #C0C0C0;
  font-size: 20px;
  margin-right: 12px;
}

.van-popper-avatar .coins .contact .phone-icon  {
  color: #C0C0C0;
  font-size: 20px;
}

.van-popper-avatar .coins .contact .email-icon--bind ,
.van-popper-avatar .coins .contact .phone-icon--bind  {
  color: #00A1D6;
}

.van-popper-avatar .coins .contact .email-mark ,
.van-popper-avatar .coins .contact .phone-mark  {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #FA5A57;
  border-radius: 50%;
  left: 15px;
  top: 3px;
}

.van-popper-avatar .coins .contact .contact-tips  {
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

.van-popper-avatar .coins .hint a  {
  margin-top: 8px;
  font-size: 12px;
  color: #00A1D6;
  display: flex;
  justify-content: flex-end;
}

.van-popper-avatar .coins .hint a :hover {
  text-decoration: underline;
}

.van-popper-avatar .counts  {
  height: 58px;
  width: 100%;
  border-bottom: 1px solid #F4F4F4;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.van-popper-avatar .count-item  {
  text-align: center;
  flex: 1;
}

.van-popper-avatar .count-item .item-key  {
  font-size: 12px;
  color: #999;
}

.van-popper-avatar .count-item .item-value  {
  font-size: 16px;
  color: #212121;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  height: 20px;
}

.van-popper-avatar .count-item .item-unit  {
  font-size: 14px;
}

.van-popper-avatar .count-item:hover .item-key ,
.van-popper-avatar .count-item:hover .item-value  {
  color: #00A1D6;
}

.van-popper-avatar .links  {
  width: 100%;
  border-bottom: 1px solid #F4F4F4;
  padding: 7px 0;
}

.van-popper-avatar .links .link-item  {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s ease;
  padding: 8px 23px;
}

.van-popper-avatar .links .link-item :hover {
  background: #F4F4F4;
}

.van-popper-avatar .links .link-title  {
  font-size: 14px;
  color: #212121;
  display: flex;
  align-items: center;
}

.van-popper-avatar .link-icon  {
  font-size: 24px;
  vertical-align: middle;
  color: #979797;
  margin-right: 5px;
}

.van-popper-avatar .link-icon-more  {
  font-size: 16px;
  vertical-align: middle;
  color: #979797;
}

@keyframes login-award-show-data-v-7106b610 {
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

@keyframes coin-jump-data-v-7106b610 {
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
</style>
<style type="text/css">.van-popover.van-popper.van-popper-avatar {
  padding: 0;
  border: none;
  top: 44px !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px !important;
}
</style>
<style type="text/css">li{
  list-style: none;
  color: #222;
}

a {
  text-decoration: none;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
}

.nav-item {
  float: left;
  text-align: center;
  /*line-height: 42px;*/
  /*height: 42px;*/
  position: relative;
  background-color: rgba(255, 255, 255, 0);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.t {
  color: inherit;
  height: 100%;
  display: block;
}

.bp-red-point {
  height: 6px;
  width: 6px;
  border-radius: 100%;
  position: absolute;
  top: -2px;
  right: -5px;
  /*left: 20px;*/
  background-color: #FA5A57;
}

.num {
  min-width: 16px;
  height: 16px;
  padding: 0 3px;
  border-radius: 8px;
  line-height: 16px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  position: absolute;
  top: -7px;
  right: -10px;
  /*left: 20px;*/
  z-index: 30;
  background-color: #FA5A57;
}

.slide-fade-enter-active {
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.slide-fade-leave-active {
  -webkit-transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter ,
.slide-fade-leave-to {
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  opacity: 0;
}

.i-frame {
  position: absolute;
  width: 382px;
  height: 540px;
  top: 100% !important;
  left: 0 !important;
  left: calc(50% - 191px) !important;
  background: transparent;
  /*box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;*/
  border-radius: 2px;
  overflow: hidden;
  text-align: center;
  padding-top: 12px;
}

.i-frame ::before {
  content: '';
  width: 10px;
  height: 10px;
  display: block;
  position: absolute;
  top: 9px;
  left: calc(50% - 5px) !important;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: white;
  -webkit-box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.05);
  z-index: 1;
}

.i-frame iframe {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 528px;
  /*padding: 0 10px 10px;*/
  background: transparent;
}

.bp-dynamic-header-icon {
  display: inline-block;
  width: 28px;
  height: 100%;
}
</style>
<style type="text/css">.video-card-img .default-img{
  flex-shrink: 0;
  width: 108px;
  height: 61px;
  border-radius: 2px;
}

.video-card-img .article-img {
  flex-shrink: 0;
  width: 81px;
  height: 61px;
  border-radius: 2px;
}

.video-card-img .square-img {
  flex-shrink: 0;
  width: 61px;
  height: 61px;
  border-radius: 2px;
}

.audio-card {
  width: 61px;
  height: 61px;
  position: relative;
  margin: 0 auto;
}

.duration-tag {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  bottom: 4px;
  right: 4px;
  font-size: 12px;
  border-radius: 1px;
  padding: 0px 2px;
  color: #fff;
}

.state-tag {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  bottom: 4px;
  right: 4px;
  font-size: 12px;
  border-radius: 2px;
  padding: 0px 2px;
  color: #fff;
}
</style>
<style type="text/css">.header-video-card{
  display: flex;
  flex-shrink: 0;
  padding: 8px 5px 8px 20px;
  height: 77px;
  cursor: pointer;
  transition: 0.3s ease;
}

.header-video-card:hover {
  background-color: #F4F4F4;
}

.header-video-card .video-preview {
  position: relative;
  text-align: center;
}

.header-video-card .multiple-preview {
  width: 108px;
  height: 61px;
}

.header-video-card .badge {
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 0 3px;
  height: 16px;
  line-height: 16px;
  border-radius: 1px;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
}

.header-video-card .badge-red {
  background: #FB7299;
}

.header-video-card .badge-gray {
  background: rgba(0, 0, 0, 0.5);
}

.header-video-card .bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  border-radius: 0 0 2px 2px;
  background: #757575;
}

.header-video-card .progress {
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 100%;
  height: 3px;
  border-radius: 0 0 2px 2px;
  background: #FB7299;
}

.header-video-card .video-info {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  margin-left: 12px;
}

.header-video-card .video-info .line-2 {
  max-width: 210px;
  height: 37px;
  color: #212121;
  font-weight: 500;
  font-size: 14px;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
}

.header-video-card .video-info .bilifont {
  color: #999;
  vertical-align: middle;
}

.header-video-card .video-info .line-1 {
  overflow: hidden;
  margin-right: 15px;
  max-width: 210px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  color: #212121;
}

.header-video-card .video-info .desc {
  overflow: hidden;
  max-width: 210px;
  color: #505050;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
}

.header-video-card .video-info .info {
  display: flex;
  color: #999999;
  font-size: 12px;
}

.header-video-card .video-info .info .history-device {
  margin-right: 2px;
}

.header-video-card .video-info .info--history {
  margin-right: 16px;
}

.header-video-card .video-info .up {
  overflow: hidden;
  margin-right: 15px;
  max-width: 110px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
<style type="text/css">.van-popper-history{
  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  width: 370px;
}

.van-popper-history .vp-container {
  width: 100%;
  height: 518px;
}

.van-popper-history .tab-header {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #F4F4F4;
}

.van-popper-history .tab-item {
  cursor: pointer;
  font-size: 12px;
  margin: 0 7px;
  transition: 0.3s ease;
}

.van-popper-history .tab-item:first-Child {
  margin-left: 20px;
}

.van-popper-history .tab-item :hover {
  color: #00A1D6;
}

.van-popper-history .tab-item--active {
  background-color: #00A1D6;
  color: #FFFFFF;
  border-radius: 12px;
  padding: 4px 10px;
}

.van-popper-history .tab-item--active :hover {
  color: #ffffff;
}

.van-popper-history .panel {
  height: 468px;
  overflow-y: auto;
  overscroll-behavior: none;
}

.van-popper-history .empty-panel {
  height: 468px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999999;
  font-size: 14px;
}

.van-popper-history .date-title {
  font-size: 12px;
  color: #999999;
  padding: 15px 0px 4px 20px;
}

.van-popper-history .view-all {
  display: block;
  cursor: pointer;
  width: 330px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  background: #F4F4F4;
  font-size: 14px;
  color: #212121;
  margin: 16px auto;
  transition: 0.3s ease;
}

.van-popper-history .view-all :hover {
  color: #212121;
  background: #E7E7E7;
}
</style>
<style type="text/css">.van-popover.van-popper.van-popper-history {
  padding: 0;
  border: none;
  top: 44px !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px !important;
}
</style>
<style type="text/css">.van-popper-upload{
  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  width: 380px;
}

.van-popper-upload .vp-container {
  width: 100%;
  height: 78px;
  display: flex;
}

.van-popper-upload .upload-item {
  cursor: pointer;
  width: 76px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease;
}

.van-popper-upload .upload-item:hover {
  background-color: #F4F4F4;
  color: #212121;
}

.van-popper-upload .item-title {
  margin-top: 6px;
}

.bilifont {
  vertical-align: middle;
  color: #757575;
  font-size: 26px;
}

.mini-upload {
  cursor: pointer;
  position: relative;
  color: #fff;
  font-size: 14px;
  display: block;
  width: 100px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: #FB7299;
  border-radius: 2px;
  margin-left: 14px;
}

.mini-upload:hover {
  color: #fff;
}

@media screen and (max-width: 1122px) {
  .mini-upload {
    width: 60px;
  }
}
</style>
<style type="text/css">.van-popover.van-popper.van-popper-upload {
  padding: 0;
  border: none;
  top: 44px !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px !important;
}
</style>
<style type="text/css">.van-popper-favorite {
  width: 520px;
  border-radius: 2px;
  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
}

.van-popper-favorite .vp-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 518px;
}

.van-popper-favorite .tabs-panel {
  overflow-y: auto;
  flex-shrink: 0;
  padding: 12px 0;
  width: 149px;
  height: 100%;
  border-right: 1px solid #E7E7E7;
  overscroll-behavior: none;
}

.van-popper-favorite .tab-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 46px;
  cursor: pointer;
  transition: 0.3s ease;
}

.van-popper-favorite .tab-item .title {
  overflow: hidden;
  width: 85px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.van-popper-favorite .tab-item .num {
  word-break: normal;
  color: #999;
}

.van-popper-favorite .tab-item__all {
  display: block;
  padding: 12px 0;
  width: 100%;
  color: #505050;
  text-align: center;
  font-size: 12px;
  transition: 0.3 ease;
}

.van-popper-favorite .tab-item__all :hover {
  color: #00A1D6;
}

.van-popper-favorite .tab-item--normal {
  color: #212121;
}

.van-popper-favorite .tab-item--normal :hover {
  background-color: #F4F4F4;
}

.van-popper-favorite .tab-item--active {
  background-color: #00A1D6;
  color: #FFFFFF;
}

.van-popper-favorite .tab-item--active .num {
  color: #FFFFFF;
}

.van-popper-favorite .favorite-video-panel {
  padding-top: 12px;
  height: 100%;
}

.van-popper-favorite .favorite-video-list {
  overflow-y: auto;
  width: 370px;
  height: calc(100% - 46px);
  overscroll-behavior: none;
}

.van-popper-favorite .empty-list {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 370px;
  height: calc(100% - 46px);
  color: #999999;
  font-size: 14px;
}

.van-popper-favorite .play-view-all {
  display: flex;
}

.van-popper-favorite .view-all {
  display: block;
  width: 100%;
  background: #fff;
  color: #212121;
  text-align: center;
  font-size: 14px;
  line-height: 46px;
  cursor: pointer;
  transition: 0.3s ease;
}

.van-popper-favorite .view-all :hover {
  background-color: #F4F4F4;
}

.van-popper-favorite .play-all {
  bottom: 0;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #E7E7E7;
  background-color: #fff;
  color: #00A1D6;
  line-height: 45px;
  cursor: pointer;
  transition: 0.3s ease;
}

.van-popper-favorite .play-all :hover {
  background-color: #F4F4F4;
}

.van-popper-favorite .play-all .bilifont {
  margin-right: 10px;
  color: #00A1D6 !important;
  font-size: 14px !important;
}

.van-popper-favorite .play-all.view {
  color: #212121;
}

.favorite-icon {
  z-index: 9999;
  width: 20px;
  height: 20px;
  color: #00A1D6;
  vertical-align: middle;
  font-size: 12px;
  cursor: pointer;
}

.ugc-season-card {
  display: flex;
  flex-shrink: 0;
  padding: 8px 5px 8px 20px;
  height: 77px;
  cursor: not-allowed;
  transition: 0.3s ease;
  position: relative;
}

.ugc-season-card .season-img {
  width: 108px;
  height: 61px;
}

.ugc-season-card .season-icon {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  position: absolute;
  width: 16px;
  height: 16px;
  left: 108px;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ugc-season-card .season-icon > img {
  width: 12px;
  height: 12px;
}

.ugc-season-card .season-info {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  margin-left: 12px;
}

.ugc-season-card .season-info__title {
  max-width: 210px;
  height: 37px;
  color: #212121;
  font-weight: 500;
  font-size: 14px;
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
}

.ugc-season-card .season-info__up {
  overflow: hidden;
  margin-right: 15px;
  max-width: 210px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #999;
}
</style>
<style type="text/css">.van-popover {
  position: absolute;
  left: 300px;
}

.van-popover.van-popper.van-popper-favorite {
  top: 44px !important;
  padding: 0;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px !important;
}
</style>
<style type="text/css">li{
  list-style: none;
  color: #222;
}

ul {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
}

.nav-item {
  float: left;
  text-align: center;
  /*line-height: 42px;*/
  /*height: 42px;*/
  position: relative;
  background-color: rgba(255, 255, 255, 0);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.nav-item * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.t {
  color: inherit;
  height: 100%;
  display: block;
  /*padding: 0 11px;*/
}

.num {
  min-width: 16px;
  height: 16px;
  padding: 0 3px;
  border-radius: 8px;
  line-height: 16px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  position: absolute;
  top: -7px;
  right: -10px;
  /*left: 20px;*/
  z-index: 30;
  background-color: #FA5A57;
}

.red_point {
  height: 6px;
  width: 6px;
  border-radius: 100%;
  position: absolute;
  top: -2px;
  right: -5px;
  /*left: 20px;*/
  background-color: #FA5A57;
}

.notify-float {
  position: absolute;
  width: 260px;
  top: 100% !important;
  left: 0 !important;
  left: calc(50% - 130px) !important;
  padding-top: 7px;
  white-space: nowrap;
  text-align: left;
  font-size: 14px;
  color: #212121;
}

.notify-float::before {
  content: '';
  width: 10px;
  height: 10px;
  display: block;
  position: absolute;
  top: 2px;
  left: calc(50% - 5px) !important;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: white;
  -webkit-box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.05);
  z-index: 1;
}

.notify-float .float_msg {
  background: #FFFFFF;
  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding-left: 12px;
  position: relative;
  line-height: 30px;
}

.notify-float .float_msg > div {
  width: 100%;
  display: inline-block;
}

.notify-float .float_msg > div span {
  cursor: pointer;
  color: #00A1D6;
}

.notify-float .float_msg > i {
  position: absolute;
  top: 0;
  right: 15px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  width: 16px;
  height: 100%;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU4MDYwOTAzODMyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyODAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDQ0NC4xNmwyMDMuNjQ4LTIwMy43MTJhNDggNDggMCAwIDEgNjcuODQgNjcuOTA0TDU3OS45NjggNTEybDIwMy42NDggMjAzLjY0OGE0OCA0OCAwIDAgMS02Ny45MDQgNjcuODRMNTEyIDU3OS45NjhsLTIwMy42NDggMjAzLjY0OGE0OCA0OCAwIDAgMS02Ny44NC02Ny45MDRMNDQ0LjAzMiA1MTIgMjQwLjQ0OCAzMDguMzUyYTQ4IDQ4IDAgMSAxIDY3LjkwNC02Ny44NEw1MTIgNDQ0LjAzMnoiIHAtaWQ9IjIyODEiIGZpbGw9IiM5OTk5OTkiPjwvcGF0aD48L3N2Zz4K) center / contain no-repeat;
}

.notify-float .float_msg > i:hover {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU4MDYwOTAzODMyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyODAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDQ0NC4xNmwyMDMuNjQ4LTIwMy43MTJhNDggNDggMCAwIDEgNjcuODQgNjcuOTA0TDU3OS45NjggNTEybDIwMy42NDggMjAzLjY0OGE0OCA0OCAwIDAgMS02Ny45MDQgNjcuODRMNTEyIDU3OS45NjhsLTIwMy42NDggMjAzLjY0OGE0OCA0OCAwIDAgMS02Ny44NC02Ny45MDRMNDQ0LjAzMiA1MTIgMjQwLjQ0OCAzMDguMzUyYTQ4IDQ4IDAgMSAxIDY3LjkwNC02Ny44NEw1MTIgNDQ0LjAzMnoiIHAtaWQ9IjIyODEiIGZpbGw9IiMwMGExZDYiPjwvcGF0aD48L3N2Zz4K);
}

.slide-fade-enter-active {
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.slide-fade-leave-active {
  -webkit-transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  opacity: 0;
}

.i-frame {
  position: absolute;
  width: 172px;
  height: 205px;
  top: 100% !important;
  left: 0 !important;
  left: calc(50% - 86px) !important;
  padding-top: 12px;
}

.i-frame::before {
  content: '';
  width: 10px;
  height: 10px;
  display: block;
  position: absolute;
  top: 9px;
  left: calc(50% - 5px) !important;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: white;
  -webkit-box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.05);
  z-index: 1;
}

.i-frame iframe {
  background: #FFF;
  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  width: 100%;
  height: 100%;
  height: calc(100% + 7px);
}

.bp-im-header-icon {
  display: inline-block;
  width: 28px;
  height: 100%;
}
</style>
<style type="text/css">/* stylelint-disable */
.vip-m {
  width: 260px;
}

.vip-m .bubble-traditional {
  padding: 14px;
}

.vip-m .bubble-traditional .recommand .title {
  color: #212121;
  font-size: 14px;
  margin: 5px 0 12px;
  font-weight: 900;
}

.vip-m .bubble-traditional .recommand .bubble-col .item {
  display: inline-block;
  margin-bottom: 7px;
}

.vip-m .bubble-traditional .recommand .bubble-col .item .pic {
  display: inline-block;
}

.vip-m .bubble-traditional .recommand .bubble-col .item img {
  border-radius: 2px;
  background: #ccc;
  display: block;
}

.vip-m .bubble-traditional .recommand .bubble-col .item .recommand-link {
  margin-top: 10px;
  font-size: 14px;
  color: #222222;
  text-align: left;
  display: -webkit-box;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  line-height: 18px;
  overflow: hidden;
}

.vip-m .bubble-traditional .recommand .bubble-col .item .recommand-link:hover {
  color: #00a1d6;
}

.vip-m .bubble-traditional .recommand .bubble-col.bubble-col-1 .item {
  width: 100%;
}

.vip-m .bubble-traditional .recommand .bubble-col.bubble-col-1 img {
  width: 230px;
  height: 68px;
}

.vip-m .bubble-traditional .recommand .bubble-col.bubble-col-2 {
  display: flex;
}

.vip-m .bubble-traditional .recommand .bubble-col.bubble-col-2 .item {
  width: 50%;
}

.vip-m .bubble-traditional .recommand .bubble-col.bubble-col-2 .item:nth-child(2) {
  text-align: right;
}

.vip-m .bubble-traditional .recommand .bubble-col.bubble-col-2 .item:nth-child(2) .recommand-link {
  margin-left: 8px;
}

.vip-m .bubble-traditional .recommand .bubble-col.bubble-col-2 img {
  width: 107px;
  height: 143px;
}

.vip-m .bubble-traditional .recommand .bubble-col.bubble-col-3 {
  display: flex;
}

.vip-m .bubble-traditional .recommand .bubble-col.bubble-col-3 .item {
  width: 33%;
}

.vip-m .bubble-traditional .recommand .bubble-col.bubble-col-3 .item:nth-child(2) {
  text-align: center;
}

.vip-m .bubble-traditional .recommand .bubble-col.bubble-col-3 .item:nth-child(2) .recommand-link {
  margin-left: 3px;
}

.vip-m .bubble-traditional .recommand .bubble-col.bubble-col-3 .item:nth-child(3) {
  text-align: right;
}

.vip-m .bubble-traditional .recommand .bubble-col.bubble-col-3 .item:nth-child(3) .recommand-link {
  margin-left: 4px;
}

.vip-m .bubble-traditional .recommand .bubble-col.bubble-col-3 img {
  width: 72px;
  height: 94px;
}

.vip-m .bubble-traditional .notify {
  border-top: 1px solid #f0f0f0;
  padding: 11px 0 4px 0;
}

.vip-m .bubble-traditional .notify .notify-list {
  font-size: 14px;
}

.vip-m .bubble-traditional .notify .notify-list li {
  margin-top: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vip-m .bubble-traditional .notify .notify-list li:first-child {
  margin-top: 0;
}

.vip-m .bubble-traditional .notify .notify-list li a {
  color: #222;
}

.vip-m .bubble-traditional .notify .notify-list li a:hover {
  color: #00a1d6;
}

.vip-m .bubble-traditional .notify .notify-list li .icon {
  color: #fb7299;
  border: 1px solid #fb7299;
  width: 32px;
  height: 16px;
  line-height: 16px;
  border-radius: 3px;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  margin-right: 6px;
}

.vip-m .bubble-traditional .renew-btn {
  margin-top: 20px;
  text-align: center;
  position: relative;
}

.vip-m .bubble-traditional .renew-btn button {
  width: 160px;
  height: 32px;
  background: #00a1d6;
  color: #fff;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
}

.vip-m .bubble-traditional .renew-btn button:hover {
  background: #00b5e5;
}

.vip-m .bubble-traditional .renew-btn .cash {
  position: absolute;
  right: 25px;
  top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 20px;
  font-size: 12px;
  background: #f25d8e;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 10px;
}

/* stylelint-enable */
</style>
<style type="text/css">.van-popper-favorite {
  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  width: 280px;
}

.vip-icon  {
  width: 28px;
  height: 28px;
  vertical-align: middle;
}

.title  {
  font-size: 14px;
  color: #212121;
  margin-bottom: 12px;
}

.recommend  {
  display: flex;
  justify-content: space-between;
}

.recommend-item  {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.recommend-item img  {
  width: 114px;
  height: 153px;
  border-radius: 2px;
}

.recommend-item span  {
  margin-top: 8px;
  width: 114px;
  font-size: 14px;
  flex-wrap: wrap;
  color: #212121;
}

.vip-btn  {
  margin: 0 auto;
  width: 158px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #00A1D6;
  color: #fff;
  margin-top: 20px;
  border-radius: 2px;
  transition: 0.3s ease;
}

.vip-btn :hover,
.vip-btn :focus {
  background-color: #00b5e5;
  color: #fff;
  border-color: #00b5e5;
}

.mini-vip  {
  position: relative;
}
</style>
<style type="text/css">.van-popover.van-popper.van-popper-vip {
  padding: 0;
  border: none;
  top: 44px !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px !important;
}
</style>
<style type="text/css">.content{
  display: flex;
  flex-wrap: wrap;
}

.content > * {
  width: 162px;
  height: 26px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
}

.content .lt-icon {
  width: 26px;
  height: 26px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.content .lt-icon.icon-video {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/header-v2/images/video.png);
}

.content .lt-icon.icon-time {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/header-v2/images/time.png);
}

.content .lt-icon.icon-danmaku {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/header-v2/images/danmaku.png);
}

.content .lt-icon.icon-hd {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/header-v2/images/hd.png);
}

.content .lt-text {
  margin-left: 6px;
  font-size: 14px;
  line-height: 14px;
  color: #212121;
}
</style>
<style type="text/css">.lt-row {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 131;
}

.lt-row .lt-col {
  width: 1630px;
  display: flex;
  justify-content: flex-end;
  height: 1px;
  position: relative;
  bottom: -1px;
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
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 360px;
  height: 200px;
  padding: 18px;
  font-size: 16px;
}

.login-tip .close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 14px;
  height: 14px;
  cursor: pointer;
}

.login-tip .title {
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #00A1D6;
  line-height: 22px;
  margin-left: 2px;
  margin-bottom: 16px;
}

.login-tip .content {
  margin-bottom: 3px;
}

.login-tip .login-btn {
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
}

.login-tip .login-btn:hover {
  color: #FFFFFF;
  background: #00b5e5;
}
</style>
<style type="text/css">.unlogin-avatar{
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
}

.unlogin-history .dot {
  position: absolute;
  right: -3px;
  top: 3px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #FB7299;
}

.unlogin-popover {
  width: 360px;
  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  position: relative;
  padding: 14px 16px;
}

.unlogin-popover::before {
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

.unlogin-popover .content-msg {
  height: 40px;
  line-height: 40px;
  margin-bottom: 14px;
  font-size: 14px;
  color: #999999;
  letter-spacing: 0;
  text-align: center;
}

.unlogin-popover-avatar {
  height: 234px;
}

.unlogin-popover-avatar .title {
  line-height: 20px;
  font-size: 14px;
  color: #212121;
  letter-spacing: 0;
  margin-left: 4px;
  margin-bottom: 16px;
}

.unlogin-popover-avatar .ltc-content {
  margin-bottom: 6px;
}

.unlogin-popover-avatar .register-tip {
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: #212121;
  letter-spacing: 0;
  line-height: 20px;
}

.unlogin-popover-avatar .register-tip > a {
  color: #00A1D6;
}

.unlogin-popover-avatar .register-tip > a:hover {
  color: #00b5e5;
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
}

.login-btn:hover {
  color: #FFFFFF;
  background: #00b5e5;
}

.name {
  cursor: pointer;
}
</style>
<style type="text/css">.nav-user-center {
  display: flex;
  flex-shrink: 0;
}

.nav-user-center .user-con {
  display: flex;
  align-items: center;
}

.nav-user-center .user-con.search-icon {
  display: none;
}

.nav-user-center .user-con.search-icon .bilifont {
  font-size: 20px;
}

.nav-user-center .user-con .item {
  position: relative;
  display: flex;
  margin-left: 12px;
  cursor: pointer;
}

.nav-user-center .user-con .item .txt {
  color: #fff;
  white-space: nowrap;
  font-size: 14px;
  line-height: 32px;
}

.nav-user-center .user-con .item .name {
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
}

.nav-user-center .user-con .item .tips {
  position: absolute;
  top: 38px;
  left: -81px;
  padding: 2px 6px 2px 2px;
  border-radius: 4px;
  background: #00A1D6;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
  white-space: nowrap;
  z-index: 1;
}

.nav-user-center .user-con .item .tips::before {
  position: absolute;
  top: -2px;
  left: 50%;
  margin-left: -4px;
  width: 8px;
  height: 8px;
  background: #00a1d6;
  content: "";
  transform: rotate(45deg);
}

.nav-user-center .user-con .fall-mini-avatar {
  width: 36px;
  height: 36px;
  position: relative;
  margin-right: 10px;
}

.nav-user-center .user-con .fall-mini-avatar.unlogin {
  margin-right: 16px;
}

.nav-user-center .user-con .fall-mini-avatar img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.nav-user-center .user-con .fall-mini-avatar .unlogin-mark {
  position: absolute;
  top: -13px;
  left: -3px;
  display: inline-block;
  width: 80px;
  height: 32px;
  border-radius: 16px;
  line-height: 28px;
  font-size: 20px;
  background: #FB7299;
  color: #FFF;
  text-align: center;
  border: 2px solid #fff;
  transform: scale(0.5);
}

.mini-type .nav-user-center .user-con .item .name {
  color: #212121;
  text-shadow: none;
}
</style>
<style type="text/css">.nav-user-center .bilifont {
  color: #fff;
  vertical-align: middle;
  font-size: 28px;
  cursor: pointer;
}
</style>
<style type="text/css">.bilibili-search-suggest {
  position: absolute;
  width: 100%;
  border: 1px solid #e5e9ef;
  margin-top: 1px;
  background: #fff;
  z-index: 99999;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;
  padding: 10px 0;
  font-size: 14px;
}

.bilibili-search-suggest .suggest-item {
  padding: 0 16px;
  height: 32px;
  line-height: 32px;
  cursor: pointer;
  word-wrap: break-word;
  word-break: break-all;
  display: block;
  color: #222222;
  position: relative;
  transition: 0.2 ease;
}

.bilibili-search-suggest .suggest-item:hover,
.bilibili-search-suggest .suggest-item.focus {
  background-color: #f4f4f4;
}

.bilibili-search-suggest .suggest-item a {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #222222;
  display: block;
}

.bilibili-search-suggest .suggest-item a.link-wrp {
  display: block;
}

.bilibili-search-suggest .suggest-item a:hover {
  color: #222222;
}

.bilibili-search-suggest .suggest-item .suggest_high_light {
  font-style: normal;
  color: #f25d8e;
}
</style>
<style type="text/css">.bilibili-search-history {
  position: absolute;
  width: 100%;
  border: 1px solid #e5e9ef;
  margin-top: 1px;
  background: #fff;
  z-index: 99999;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;
  padding: 10px 0;
  font-size: 14px;
}

.bilibili-search-history .history-item {
  padding: 6px 10px 6px 16px;
  height: 32px;
  line-height: 32px;
  cursor: pointer;
  word-wrap: break-word;
  word-break: break-all;
  color: #222222;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.2s ease;
}

.bilibili-search-history .history-item:hover,
.bilibili-search-history .history-item.focus {
  background-color: #f4f4f4;
}

.bilibili-search-history .history-item a {
  width: 100%;
  color: #222222;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bilibili-search-history .history-item a:hover {
  color: #222222;
}

.bilibili-search-history .history-item a.link-wrp {
  display: block;
}

.bilibili-search-history .cancel-icon {
  color: #999;
}

.bilibili-search-history .cancel-icon:hover {
  color: #00a1d6;
}
</style>
<style type="text/css">.bili-header-m .nav-search-box,
.international-header .nav-search-box {
  margin: 0 10px;
  width: 500px;
  transition: 0.3s width;
}

.bili-header-m .nav-search,
.international-header .nav-search {
  position: relative;
}

.bili-header-m .nav-search #nav_searchform,
.international-header .nav-search #nav_searchform {
  display: block;
  padding: 0 38px 0 16px;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 2px;
  background-color: #fff;
}

.bili-header-m .nav-search .nav-search-keyword,
.international-header .nav-search .nav-search-keyword {
  overflow: hidden;
  width: 100%;
  height: 34px;
  border: none;
  background-color: transparent;
  box-shadow: none;
  color: #999;
  font-size: 14px;
  line-height: 34px;
  transition: all 0.2s;
}

.bili-header-m .nav-search .nav-search-keyword::-ms-clear,
.international-header .nav-search .nav-search-keyword::-ms-clear {
  display: none;
}

.bili-header-m .nav-search .nav-search-keyword:focus,
.international-header .nav-search .nav-search-keyword:focus {
  color: #222222;
}

.bili-header-m .nav-search .nav-search-submit,
.international-header .nav-search .nav-search-submit {
  position: absolute;
  top: 8px;
  right: 16px;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  color: #505050;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.2s;
}

.bili-header-m .nav-search .nav-search-btn,
.international-header .nav-search .nav-search-btn {
  position: absolute;
  top: 0px;
  right: 0;
  margin: 0;
  padding: 0;
  width: 48px;
  height: 36px;
  border: none;
  border-radius: 2px;
  background: #E7E7E7;
  line-height: 26px;
  cursor: pointer;
}

.bili-header-m .nav-search .nav-search-btn:hover .nav-search-submit,
.international-header .nav-search .nav-search-btn:hover .nav-search-submit {
  color: #00a1d6;
}

.bili-header-m .bilibili-suggest,
.international-header .bilibili-suggest {
  position: relative;
  z-index: 10000;
  margin-top: 2px;
  padding-bottom: 5px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;
  font-size: 12px;
}
</style>
<style type="text/css">.mini-header {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 56px;
}

.mini-header__content {
  box-sizing: border-box;
  padding: 10px 24px;
  line-height: 30px;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

@media screen and (max-width: 1122px) {
  .mini-header__content {
    padding: 10px 12px;
  }
}
</style>
<style type="text/css">.animated-banner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
<style type="text/css">.animated-banner > .layer {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<style type="text/css">.bili-banner {
  margin: 0 auto;
  position: relative;
  z-index: 0;
  min-height: 155px;
  height: 9.375vw;
  min-width: 999px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
}

.bili-banner .taper-line {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), transparent);
}

.bili-banner .head-title {
  position: absolute;
  bottom: 25px;
  left: 280px;
  line-height: 20px;
  padding: 6px 10px;
  background-color: rgba(0, 0, 0, 0.68);
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  max-width: 350px;
  opacity: 0;
  transition: all 0.2s;
}

.bili-banner:hover .head-title {
  opacity: 1;
}

.bili-banner .b-logo {
  position: relative;
}

.bili-banner .b-logo .head-logo {
  position: absolute;
  width: 220px;
  height: 50%;
  min-height: 60px;
  bottom: 10px;
  z-index: 1;
}

.bili-banner .b-logo .logo-img {
  height: 100%;
}

.bili-banner .banner-link {
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
</style>
<style type="text/css">.page-tab {
  display: flex;
  align-items: center;
}

.page-tab .con {
  display: flex;
}

.page-tab .con li {
  cursor: pointer;
  width: 66px;
  height: 68px;
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
  border: 1px solid #fff;
  border-radius: 16px;
  transition: all 0.3s;
}

.page-tab .con li:hover a {
  color: #00A1D6;
}

.page-tab .con li.on {
  border-color: #9DD9ED;
  background: #F1FCFF;
}

.page-tab .con li.on a {
  color: #00A1D6;
}

.page-tab .con li .round {
  position: relative;
  width: 36px;
  height: 36px;
  background: #FF5C7C;
  border-radius: 36px;
  line-height: 36px;
  text-align: center;
  margin: 0 auto 4px auto;
}

.page-tab .con li .round.yel {
  background: #fcba2a;
}

.page-tab .con li .round.blue {
  background: #00a1d6;
}

.page-tab .con li .round.orange {
  background: #FF716D;
}

.page-tab .con li .round .dynamic-update {
  position: absolute;
  width: 36px;
  height: 36px;
  left: 0;
  top: 0;
}

.page-tab .con li .round .dynamic-update img {
  position: absolute;
  left: 0;
  top: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.page-tab .con li .round .dynamic-update i {
  position: absolute;
  right: -2px;
  top: -2px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fa5a57;
  border: 2px solid #FFFFFF;
}

.page-tab .con li .round.channel {
  background: #6DC781;
}

.page-tab .con li .bilifont {
  color: #fff;
  font-size: 28px;
}

.page-tab .con .channel-name {
  width: 64px;
  height: 20px;
  display: block;
  overflow: hidden;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 1;
}
</style>
<style type="text/css">.van-popper-channel {
  padding: 5px 10px;
  border-radius: 3px;
  min-width: 0;
}

.van-popper-channel .sub-container {
  display: flex;
}

.van-popper-channel .sub-item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-height: 148px;
}

.van-popper-channel .sub-item .name {
  display: block;
  font-size: 12px;
  padding: 10px 13px;
  height: 37px;
}

.van-popper-channel .popper__arrow {
  margin-left: -45px;
}

.channel-menu-itnl {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 5rem;
  height: 68px;
  flex: 1;
}

.channel-menu-itnl .item {
  cursor: pointer;
  display: flex;
  height: 34px;
}

.channel-menu-itnl .item .name {
  font-size: 14px;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.channel-menu-itnl .item .name em {
  font-style: normal;
  font-size: 12px;
  display: inline-block;
  background: #73C9E5;
  border-radius: 2px;
  color: #fff;
  margin-left: 1px;
  transform: scale(0.85);
  width: 32px;
  text-align: center;
}

.channel-menu-itnl .item .name.on {
  color: #00a1d6;
}

.channel-menu-itnl .item .bili-icon_caozuo_xiangyou-copy {
  margin-left: 5px;
  transition: all 0.3s;
}

.channel-menu-itnl .item.selected .name {
  color: #00a1d6;
}

.channel-menu-itnl .item.selected .bili-icon_caozuo_xiangyou-copy {
  transform: rotate(180deg);
}
</style>
<style type="text/css">.friendship-link {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 68px;
  width: 289px;
}

.friendship-link .item {
  height: 34px;
  display: flex;
}

.friendship-link .item .name {
  font-size: 14px;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.friendship-link .item .name span {
  margin-left: 4px;
}

.friendship-link .svg-icon {
  width: 1.8em;
  height: 1.8em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
<style type="text/css">.primary-menu-itnl {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 100%;
}

.tab-line-itnl {
  display: inline-block;
  height: 46px;
  border-left: 1px solid #E7E7E7;
  margin: 0 20px;
}

.tab-line-itnl.none {
  margin: 0 24px 0 0px;
}
</style>
<style type="text/css">@font-face {
  font-family: "bilifont";
  src: url(//s1.hdslb.com/bfs/seed/jinkela/header-v2/asserts/iconfont.eot);
  /* IE9 */
  src: url(//s1.hdslb.com/bfs/seed/jinkela/header-v2/asserts/iconfont.eot#iefix) format('embedded-opentype'), url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'), url(//s1.hdslb.com/bfs/seed/jinkela/header-v2/asserts/iconfont.woff) format('woff'), url(//s1.hdslb.com/bfs/seed/jinkela/header-v2/asserts/iconfont.ttf) format('truetype'), url(//s1.hdslb.com/bfs/seed/jinkela/header-v2/images/iconfont.svg#bilifont) format('svg');
  /* iOS 4.1- */
}

.bilifont {
  font-family: "bilifont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bili-animal:before {
  content: "\E765";
}

.bili-icon_dingdao_tiezhitougao:before {
  content: "\E764";
}

.bili-remen:before {
  content: "\E763";
}

.bili-food:before {
  content: "\E762";
}

.bili-PC:before {
  content: "\E636";
}

.bili-Mobile:before {
  content: "\E637";
}

.bili-shanchu:before {
  content: "\E638";
}

.bili-iPad:before {
  content: "\E639";
}

.bili-TV:before {
  content: "\E63A";
}

.bili-technology:before {
  content: "\E761";
}

.bili-pindao:before {
  content: "\E760";
}

.bili-information:before {
  content: "\E75F";
}

.bili-zhishi:before {
  content: "\E75E";
}

.bili-ic_gerenzhongxin_xiaohuiyuanhuibiao:before {
  content: "\E75D";
}

.bili-musicplus:before {
  content: "\E6C1";
}

.bili-ic_partition_Comic:before {
  content: "\E75C";
}

.bili-icon_dingdao_cheese:before {
  content: "\E60E";
}

.bili-icon_shipin_danmushu:before {
  content: "\E759";
}

.bili-icon_shipin_shoucangshu:before {
  content: "\E75A";
}

.bili-icon_shipin_yingbishu:before {
  content: "\E75B";
}

.bili-icon_caozuo_xuanzhong:before {
  content: "\E756";
}

.bili-icon_dingdao_yuyanshezhi:before {
  content: "\E757";
}

.bili-ic_gerenzhongxin_gerenrenzhenghuibiao:before {
  content: "\E754";
}

.bili-ic_gerenzhongxin_qiyerenzhenghuibiao:before {
  content: "\E755";
}

.bili-ic_gerenzhongxin_dahuiyuanhuibiao:before {
  content: "\E753";
}

.bili-icon_weibo:before {
  content: "\E71C";
}

.bili-icon_wechat:before {
  content: "\E751";
}

.bili-icon_download:before {
  content: "\E752";
}

.bili-tebietuijian:before {
  content: "\E750";
}

.bili-match:before {
  content: "\E600";
}

.bili-icon_youdaohang_paixu:before {
  content: "\E74D";
}

.bili-icon_youdaohang_huidaodingbu:before {
  content: "\E74E";
}

.bili-icon_youdaohang_xiaodianshitianxian:before {
  content: "\E74F";
}

.bili-yingbi:before {
  content: "\E74C";
}

.bili-teleplay:before {
  content: "\E6D4";
}

.bili-documentary:before {
  content: "\E6CC";
}

.bili-movie:before {
  content: "\E67F";
}

.bili-tuiguang:before {
  content: "\E61C";
}

.bili-icon_dingdao_dianpu:before {
  content: "\E74B";
}

.bili-music:before {
  content: "\E601";
}

.bili-game:before {
  content: "\E603";
}

.bili-dance:before {
  content: "\E605";
}

.bili-live:before {
  content: "\E606";
}

.bili-ent:before {
  content: "\E607";
}

.bili-life:before {
  content: "\E608";
}

.bili-kichiku:before {
  content: "\E609";
}

.bili-guochuang:before {
  content: "\E60A";
}

.bili-fashion:before {
  content: "\E60B";
}

.bili-ad:before {
  content: "\E60C";
}

.bili-anime:before {
  content: "\E60D";
}

.bili-guochandonghuatuijian:before {
  content: "\E612";
}

.bili-_technology:before {
  content: "\E6AD";
}

.bili-general_pullup_s:before {
  content: "\E6EC";
}

.bili-Navbar_mobile:before {
  content: "\E724";
}

.bili-Navbar_logo:before {
  content: "\E725";
}

.bili-bilibili-tv:before {
  content: "\E668";
}

.bili-icon_caozuo_xiangyou-copy:before {
  content: "\E758";
}

.bili-general_upload:before {
  content: "\E634";
}

.bili-general_search:before {
  content: "\E635";
}

.bili-activit:before {
  content: "\E63B";
}

.bili-blackroom:before {
  content: "\E63F";
}

.bili-read:before {
  content: "\E640";
}

.bili-ic_partition_broadca:before {
  content: "\E641";
}

.bili-cinephile:before {
  content: "\E642";
}

.bili-cinema:before {
  content: "\E643";
}

.bili-topic:before {
  content: "\E644";
}

.bili-douga:before {
  content: "\E645";
}

.bili-digital:before {
  content: "\E64E";
}

.bili-yinpin:before {
  content: "\E656";
}

.bili-icon_dingdao_dingdanzhongxin:before {
  content: "\E71E";
}

.bili-icon_dingdao_qianbao:before {
  content: "\E71F";
}

.bili-icon_dingdao_zhibozhongxin:before {
  content: "\E720";
}

.bili-icon_dingdao_dengchu:before {
  content: "\E721";
}

.bili-icon_dingdao_gerenzhongxin:before {
  content: "\E722";
}

.bili-icon_dingdao_tougaoguanli:before {
  content: "\E723";
}

.bili-icon_dingdao_shipintougao:before {
  content: "\E726";
}

.bili-icon_dingdao_wenzhangtougao:before {
  content: "\E727";
}

.bili-icon_dingdao_chuangzuozhongxin:before {
  content: "\E728";
}

.bili-icon_dingdao_yinpintougao:before {
  content: "\E729";
}

.bili-icon_dingdao_tougaoguanli1:before {
  content: "\E72A";
}

.bili-icon_dingdao_zhuzhan:before {
  content: "\E72B";
}

.bili-icon_dingdao_sousuo:before {
  content: "\E72C";
}

.bili-icon_dingdao_xiazaiapp:before {
  content: "\E72D";
}

.bili-icon_dingdao_dahuiyuan:before {
  content: "\E72E";
}

.bili-icon_dingdao_lishijilu:before {
  content: "\E72F";
}

.bili-icon_dingdao_shoucangjia:before {
  content: "\E730";
}

.bili-icon_dingdao_xiaoxi:before {
  content: "\E731";
}

.bili-icon_dingdao_dongtai:before {
  content: "\E732";
}

.bili-icon_dingdao_bangdingshouji:before {
  content: "\E733";
}

.bili-icon_dingdao_yingbi:before {
  content: "\E734";
}

.bili-icon_dingdao_youxiang:before {
  content: "\E735";
}

.bili-icon_dingdao_Bbi:before {
  content: "\E736";
}

.bili-icon_dingdao_bofang:before {
  content: "\E737";
}

.bili-icon_fenqudaohang_shouye:before {
  content: "\E738";
}

.bili-icon_fenqudaohang_paihangbang:before {
  content: "\E739";
}

.bili-icon_banner_xuanzhong:before {
  content: "\E73A";
}

.bili-icon_caozuo_qianwang:before {
  content: "\E73B";
}

.bili-icon_caozuo_huanyihuan:before {
  content: "\E73C";
}

.bili-icon_xinxi_pinglunshu:before {
  content: "\E73D";
}

.bili-icon_shipin_bofangshu:before {
  content: "\E73E";
}

.bili-icon_xinxi_renqi:before {
  content: "\E73F";
}

.bili-icon_shipin_dianzanshu:before {
  content: "\E740";
}

.bili-icon_xinxi_UPzhu:before {
  content: "\E741";
}

.bili-icon_xinxi_yuedushu:before {
  content: "\E742";
}

.bili-icon_xinxi_huo:before {
  content: "\E743";
}

.bili-icon_caozuo_xiangyou:before {
  content: "\E744";
}

.bili-icon_caozuo_xiangzuo:before {
  content: "\E745";
}

.bili-icon_foot_weixin:before {
  content: "\E746";
}

.bili-icon_foot_kehuduanxiazai:before {
  content: "\E747";
}

.bili-icon_foot_weibo:before {
  content: "\E748";
}

.bili-icon_caozuo_yitianjia:before {
  content: "\E749";
}

.bili-icon_sousuo_yichu:before {
  content: "\E74A";
}
</style>
<style type="text/css">* {
  margin: 0;
  padding: 0;
}

.international-header,
.van-popover {
  -webkit-font-smoothing: antialiased;
  font: 14px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  position: relative;
  z-index: 1000;
  margin: 0;
  padding: 0;
}

.international-header *,
.van-popover * {
  box-sizing: border-box;
}

.international-header ol,
.van-popover ol,
.international-header ul,
.van-popover ul {
  list-style: none;
}

.international-header a,
.van-popover a {
  text-decoration: none;
  color: #212121;
  transition: color 0.3s;
}

.international-header a:hover,
.van-popover a:hover {
  text-decoration: none;
  color: #00A1D6;
}

.international-header a:focus,
.van-popover a:focus,
.international-header *:focus,
.van-popover *:focus {
  outline: none;
}

.international-header .red-point,
.van-popover .red-point {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fa5a57;
  color: #fff;
  right: 0;
  top: 0px;
}

.international-header .mini-type,
.van-popover .mini-type {
  position: relative;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}

.international-header .mini-type .nav-link .nav-link-ul .nav-link-item .link,
.van-popover .mini-type .nav-link .nav-link-ul .nav-link-item .link {
  color: #212121;
  text-shadow: none;
}

.international-header .mini-type .nav-link .nav-link-ul .nav-link-item .link:hover,
.van-popover .mini-type .nav-link .nav-link-ul .nav-link-item .link:hover {
  color: #212121;
}

.international-header .mini-type .nav-search #nav_searchform,
.van-popover .mini-type .nav-search #nav_searchform {
  background: #F4F4F4;
  border: 1px solid #E7E7E7;
}

.international-header .mini-type .nav-user-center .bilifont,
.van-popover .mini-type .nav-user-center .bilifont {
  color: #999;
}

.international-header .mini-type .user-con.logout .item a,
.van-popover .mini-type .user-con.logout .item a {
  color: #212121 !important;
}

.international-header .mini-type .user-con.logout .item a:hover,
.van-popover .mini-type .user-con.logout .item a:hover {
  color: #00A1D6 !important;
}

@media screen and (max-width: 1280px) {
  .international-header .mini-type .mini-header--login .nav-search-box,
  .van-popover .mini-type .mini-header--login .nav-search-box {
    display: none;
  }

  .international-header .mini-type .mini-header--login .nav-user-center .user-con.search-icon,
  .van-popover .mini-type .mini-header--login .nav-user-center .user-con.search-icon {
    display: flex;
    align-items: center;
  }
}

@media screen and (max-width: 1080px) {
  .international-header .mini-type .mini-header--logout .nav-search-box,
  .van-popover .mini-type .mini-header--logout .nav-search-box {
    display: none;
  }

  .international-header .mini-type .mini-header--logout .nav-user-center .user-con.search-icon,
  .van-popover .mini-type .mini-header--logout .nav-user-center .user-con.search-icon {
    display: flex;
    align-items: center;
  }
}

@media screen and (max-width: 1190px) {
  .international-header .mini-header--login .nav-search-box,
  .van-popover .mini-header--login .nav-search-box {
    display: none;
  }

  .international-header .mini-header--login .nav-user-center .user-con.search-icon,
  .van-popover .mini-header--login .nav-user-center .user-con.search-icon {
    display: flex;
    align-items: center;
  }
}

@media screen and (max-width: 980px) {
  .international-header .mini-header--logout .nav-search-box,
  .van-popover .mini-header--logout .nav-search-box {
    display: none;
  }

  .international-header .mini-header--logout .nav-user-center .user-con.search-icon,
  .van-popover .mini-header--logout .nav-user-center .user-con.search-icon {
    display: flex;
    align-items: center;
  }
}

.international-header .mask-bg,
.van-popover .mask-bg {
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
  box-shadow: none;
}

.international-header .mask-bg .nav-link .nav-link-ul .nav-link-item .link,
.van-popover .mask-bg .nav-link .nav-link-ul .nav-link-item .link {
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}

.international-header .mask-bg .nav-link .nav-link-ul .nav-link-item .link:hover,
.van-popover .mask-bg .nav-link .nav-link-ul .nav-link-item .link:hover {
  color: #fff;
}

.international-header .mask-bg .bili-avatar .bili-avatar-img,
.van-popover .mask-bg .bili-avatar .bili-avatar-img {
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24);
}

.international-header .mask-bg .nav-search,
.van-popover .mask-bg .nav-search {
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24);
}

.van-popover {
  padding: 0px;
  text-align: inherit;
}

.slide-fade-enter-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}

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
  }

  .b-wrap .page-tab .con li {
    width: 58px;
  }

  .b-wrap .page-tab .con li .channel-name {
    width: 58px !important;
  }

  .b-wrap .friendship-link {
    width: 242px;
  }
}

@media screen and (max-width: 1654px) {
  .b-wrap {
    width: 1198px;
  }

  .b-wrap .page-tab .con li {
    width: 50px !important;
  }

  .b-wrap .page-tab .con li .channel-name {
    width: 50px !important;
  }

  .b-wrap .tab-line-itnl {
    margin: 0 8px;
  }

  .b-wrap .tab-line-itnl.none {
    margin: 0 12px 0 0;
  }

  .b-wrap .friendship-link {
    width: 220px;
  }
}

@media screen and (max-width: 1438px) {
  .b-wrap {
    width: 999px;
  }

  .b-wrap .channel-menu-itnl .item.hide {
    display: none;
  }

  .b-wrap .page-tab .con li {
    width: 50px;
  }

  .b-wrap .page-tab .con li .channel-name {
    width: 50px !important;
  }

  .b-wrap .tab-line-itnl {
    margin: 0 8px;
  }
}

.international-header.fixed-top .mini-header {
  position: fixed;
  top: 0;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}

.international-header.fixed-top .mini-header .bili-icon_dingdao_xiazaiapp,
.international-header.fixed-top .mini-header .bili-icon_dingdao_zhuzhan {
  color: #00a1d6;
}

.international-header.fixed-top .mini-type .nav-link .nav-link-ul .nav-link-item .link,
.international-header.fixed-top .mini-type .nav-user-center .user-con .item .name {
  color: #212121;
}

.international-header.fixed-top .nav-link .nav-link-ul.mini .bili-icon_dingdao_xiazaiapp {
  color: #00a1d6;
}
</style>
<style type="text/css">.identity-dialog-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999999;
}

.identity-dialog-wrap .identity-dialog-window {
  position: absolute;
  top: 50%;
  width: 300px;
  background: #fff;
  left: 50%;
  margin-left: -150px;
  border-radius: 4px;
}

.identity-dialog-wrap .identity-dialog-window .title {
  padding: 0 30px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #222;
  border-bottom: 1px solid #e5e9ef;
}

.identity-dialog-wrap .identity-dialog-window .title .close {
  float: right;
  line-height: 50px;
  color: #99a2aa;
  font-size: 18px;
  cursor: pointer;
}

.identity-dialog-wrap .identity-dialog-window .content {
  padding: 30px;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
}

.identity-dialog-wrap .identity-dialog-window .content i {
  color: #f25d8e;
  font-style: normal;
}

.identity-dialog-wrap .identity-dialog-window .content .button {
  margin-top: 30px;
  text-align: center;
}

.identity-dialog-wrap .identity-dialog-window .content .button a {
  display: inline-block;
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #0097d0;
  border: none;
  border-radius: 4px;
  color: #fff;
}

.identity-dialog-wrap .identity-dialog-window .content .tips {
  margin-top: 20px;
}

.identity-dialog-wrap .identity-dialog-window .content .tips a {
  color: #99a2aa;
  font-size: 12px;
}

.identity-dialog-wrap .identity-dialog-window-mobile {
  position: absolute;
  top: 50%;
  width: 90%;
  padding: 0 40px 40px 40px;
  background: #fff;
  left: 50%;
  margin-left: -45%;
  border-radius: 4px;
  box-sizing: border-box;
}

.identity-dialog-wrap .identity-dialog-window-mobile .img {
  text-align: center;
  margin-top: -42px;
}

.identity-dialog-wrap .identity-dialog-window-mobile .img img {
  width: 190px;
  height: 135px;
}

.identity-dialog-wrap .identity-dialog-window-mobile .title {
  margin-top: 18px;
  font-size: 16px;
  color: #212121;
  text-align: center;
}

.identity-dialog-wrap .identity-dialog-window-mobile .content {
  margin-top: 9px;
  font-size: 13px;
  color: #757575;
}

.identity-dialog-wrap .identity-dialog-window-mobile .content i {
  color: #fb7299;
  font-style: normal;
}

.identity-dialog-wrap .identity-dialog-window-mobile .content .button {
  margin-top: 12px;
}

.identity-dialog-wrap .identity-dialog-window-mobile .content .button button, .identity-dialog-wrap .identity-dialog-window-mobile .content .button a {
  width: 45%;
  height: 44px;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid #fb7299;
  display: inline-block;
  text-align: center;
}

.identity-dialog-wrap .identity-dialog-window-mobile .content .button .close {
  color: #999;
  background: #fff;
}

.identity-dialog-wrap .identity-dialog-window-mobile .content .button a {
  line-height: 44px;
  float: right;
  background: #fb7299;
  color: #fff;
}

.identity-dialog-wrap .identity-dialog-window-mobile .content .tips {
  text-align: center;
  margin-top: 18px;
}

.identity-dialog-wrap .identity-dialog-window-mobile .content .tips a {
  color: #757575;
  font-size: 12px;
}
</style>
<style type="text/css">@font-face {
  font-family: "bili-footer-font";
  src: url(data:application/vnd.ms-fontobject;base64,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);
  /* IE9 */
  src: url(data:application/vnd.ms-fontobject;base64,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#iefix) format('embedded-opentype'), url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAATAAAsAAAAACdQAAAR0AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDFAqGLIUiATYCJAMQCwoABCAFhU0HUht2CMgusG3YkxoBF/gbrP0AFlIgFwueh2P5flwmZtKB3S2qdJTio8ThTGcDOhxIDeWmd+BJ66GiVxObeGBiKUlohqQLmThMnTI1QeZf/5kSEKd+Js3zGIYgnVSttuHSZssA6VgNEDAAt0T+D46lfmIKnH26ZZVFgkcBFciiWzRIp7ZleHVxXcDZEBBVkgk2zT0GABUHGwmQDWeggCqm4SUkEZYHc/aMgRwJCIfz9B4APLq/Lz+QnwqgAhGALTfXTTSofdVv+0lt/zZwaiPg9mcCuP3AwADAIW2u5ZjUFw1cSTSPUWYEEORi7cv1PxSqL0eVBWcqVvzPkxSAJI6xY7HtFdckQzDry8JWZv2wBsNoXz8MsgA/yBJhffuwEMuCQkN91JjahwhQw1V9wgIoz1PrfencD9J1H74gEto/i1eutDk0+PaPMOf22js94dwaseca4XKR7kHnnar3FDu9pN2JQ49Hi82vdp3rbgQctwXOkd4hbrNrgGuM3+IlT171eFyX6jsXOIiV9Le67M5Gx+7Vu+bvWbt3vBDrnXR4N3u6+gHr3WUDdMdxfM3VWW9schX3QC5IIdkFu22NpJhXYt9LORy2lfP7k2uxa5LrPkBjdVniedJOHId266QLngCx2xsxYOX8EG1XF2NbifnMf4b5SN/k//3zGCEZJj1HSBB+YUivAKUyHqCf9T97gxVmBarOLiLYPZGQrHqf7XneUUmfjOyBmk4VW+LGZTTPqliVmKjuvsYXSqTmMbrRdHcoxf5rLiVKynvoZWpp+3HZPaGpLF9Kt/aU95CaKuqZv9jge4ddfs31sf2IXf4t9TGZo+UGjYTsQ+MtZYdApAoPVIHJPW3cQdg6miJhkF/9tIFDoB7OuZb08c/tcZpoHpTGpWkcdWxKSq0c1psG9oGEabthPWwId0v6VStou19gZFxEHha42BPGmZGJ6ze9CiFp48Cmf8gnegqAZhu5csVtUtV3uWp1mC7furQdv299o1+jtc2cgGpPyKLcE05U7Q5ZiiQApEKvobvP4wj/yq8q/EIOfdmn/3U3/O9kwDogTFtwfx9uzTZX+aD1WBaYHM3rHgwaUhAlfvgHjqw3fcgKtXNBpGlCUCFNMGmZSMdWQkDMKgSl6SCqz7B/TM5yRmI1gJ7tCETFQ1BJ32Aq/iIcVzQEFKuCoEr9IWo/sB4xptVtrEFgKJGhUfsExOl5C2vsIGLtnInLYnleZISsxKz9GMMYEyVkVZV+UssIVo63oLzs3Ox4C2NhhDG2sY415Isii1iBN6Nm/XyMycSjToEfxejF7A5R7CzPyWHzXilbz5sBZkLAoIgYNKTdBAhHj2fB2iYRhkkckyQrLeHryoQYuzS1H4bBGL43ilCzoTKJVhVZVTZeHpInW24LZIvEkq66lvtYjWWQTyRiISwBzwxpbmdimEiEh3TmrzYKQ0+UraNFqFO5HKobW1eSvUsy8xMRgeuAlTyQQCmUQTmIXoXcEeMYrp3Hg4i+gxJ92RVofpzFxFM0AA==') format('woff2'), url(data:font/woff;base64,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) format('woff'), url(data:font/ttf;base64,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) format('truetype'), url(//s1.hdslb.com/bfs/seed/jinkela/footer-v2/images/iconfont.svg#bili-footer-font) format('svg');
  /* iOS 4.1- */
}

.bili-footer-font {
  font-family: "bili-footer-font" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bili-footer-icon_weibo:before {
  content: "\E71C";
}

.bili-footer-icon_wechat:before {
  content: "\E751";
}

.bili-footer-icon_download:before {
  content: "\E752";
}
</style>
<style type="text/css">body {
  margin: 0;
  padding: 0;
}

.international-footer {
  font: 12px "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
  position: relative;
  margin: 0;
  padding: 0;
  background-color: #f6f9fa;
  padding: 30px 0;
  min-width: 999px;
}

.international-footer ol,
.international-footer ul {
  list-style: none;
}

.international-footer a {
  color: #212121;
  transition: color 0.3s;
}

.international-footer a:hover {
  text-decoration: none;
  color: #00a1d6;
}

.international-footer a {
  text-decoration: none;
}

.international-footer a:focus,
.international-footer *:focus {
  outline: none;
}

.international-footer * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.international-footer .b-footer-wrap {
  max-width: 1630px;
  min-width: 999px;
  margin: 0 auto;
}

.international-footer .link-box {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}

.international-footer .link-box .footer_left {
  flex: 4;
  display: flex;
  justify-content: space-between;
}

.international-footer .link-box .footer_right {
  flex: 1;
  display: flex;
  align-items: center;
}

.international-footer .link-box .link-item {
  flex: 2;
  padding-right: 40px;
  margin-right: 40px;
  border-right: 1px solid #eee;
}

.international-footer .link-box .link-item .bt {
  font-size: 16px;
  color: #999;
  display: block;
  height: 20px;
  margin-bottom: 20px;
}

.international-footer .link-box .link-item ul {
  height: 110px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.international-footer .link-box .link-item ul a {
  display: inline-block;
  margin-bottom: 10px;
  width: 50%;
  height: 20px;
  cursor: pointer;
}

.international-footer .link-box .link-item ul a:nth-child(4n) {
  margin-bottom: 0;
}

.international-footer .link-box .link-item.link-b {
  flex: 3;
}

.international-footer .link-box .link-item.link-b ul {
  height: 110px;
}

.international-footer .link-box .link-item.link-b ul a {
  width: 33.3333%;
}

.international-footer .link-box .link-item.link-c {
  padding-right: 0;
  border-right: none;
  margin-right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.international-footer .link-box .link-item.link-c .a-wraper {
  flex: 1;
  display: flex;
  min-width: 70px;
  justify-content: center;
  align-items: center;
}

.international-footer .link-box .link-item.link-c a {
  position: relative;
  display: inline-block;
  text-align: center;
  color: #212121;
}

.international-footer .link-box .link-item.link-c a:hover p {
  color: #00a1d6;
}

.international-footer .link-box .link-item.link-c a:hover .qrcode {
  display: block;
}

.international-footer .link-box .link-item.link-c a .qrcode {
  display: none;
  position: absolute;
  top: -125px;
  left: -25px;
  width: 117px;
  height: 117px;
  background: #fff;
  border: 1px solid #eee;
  padding: 10px;
  background-repeat: no-repeat;
  background-position: center;
}

.international-footer .link-box .link-item.link-c a.biliapp .qrcode {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/footer-v2/images/biliapp_qrcode.png);
}

.international-footer .link-box .link-item.link-c a.weibo .qrcode {
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/footer-v2/images/weibo_qrcode.png);
}

.international-footer .link-box .link-item.link-c a.weixin .qrcode {
  width: 241px;
  left: -185px;
  height: 143px;
  top: -151px;
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/footer-v2/images/weixin_qrcode.gif);
}

.international-footer .link-box .link-item.link-c a.weixin:hover p {
  color: #212121;
}

.international-footer .link-box .link-item.link-c p {
  margin-top: 10px;
  color: #212121;
  height: 20px;
  transition: color 0.2s;
}

.international-footer .link-box .link-item.link-c .bili-footer-font {
  font-size: 50px;
}

.international-footer .link-box .link-item.link-c .biliapp {
  color: #585f69;
}

.international-footer .link-box .link-item.link-c .weibo {
  color: #fe596c;
}

.international-footer .link-box .link-item.link-c .weixin {
  color: #42c86b;
}

.international-footer .partner {
  display: flex;
  padding-top: 30px;
  color: #999;
}

.international-footer .partner .pic-box {
  width: 100px;
  margin-right: 20px;
}

.international-footer .partner .pic {
  width: 96px;
  height: 75px;
}

.international-footer .partner .pic962110 {
  margin: 5px 0;
}

.international-footer .partner p {
  line-height: 24px;
}

.international-footer .partner a {
  color: #999;
}

.international-footer .partner a:hover {
  color: #00a1d6;
}

.international-footer .partner .text-con {
  width: calc(100% - 120px);
}

.international-footer .partner .text-con span {
  margin-right: 15px;
  display: inline-block;
}

.international-footer .partner .sprite {
  display: inline-block;
  background-image: url(//s1.hdslb.com/bfs/seed/jinkela/footer-v2/images/hz_icon.png);
  background-repeat: no-repeat;
  vertical-align: middle;
  margin-right: 3px;
}

.international-footer .partner .sprite.bg1 {
  width: 16px;
  height: 16px;
  background-position: 0 -2px;
}

.international-footer .partner .sprite.bg2 {
  width: 18px;
  height: 20px;
  background-position: -41px 0px;
}

.international-footer .partner .sprite.bg3 {
  width: 16px;
  height: 16px;
  background-position: -18px -3px;
}
</style>
<style type="text/css">/*!
 * @bilibili/userAvatar
 * version: 0.0.11. Powered by main-frontend
 * 用户头像公共组件.
 * author: wuxiuran
 */
.bili-avatar {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(data:image/gif;base64,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);
  background-size: cover;
  border-radius: 50%;
}

.bili-avatar-face {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}

.bili-avatar-pendent {
  height: 170%;
  width: 170%;
  position: absolute;
  top: -35%;
  left: -35%;
  overflow: hidden;
}

.bili-avatar-pendent img {
  height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.bili-avatar-img {
  border: none;
  display: block;
  -o-object-fit: contain;
  object-fit: contain;
}

.bili-avatar-img-radius {
  border-radius: 50%;
}

.bili-avatar-img[src=""],
.bili-avatar-img:not([src]) {
  opacity: 0;
}

.bili-avatar-icon {
  width: 33.33333%;
  height: 33.33333%;
  width: -webkit-calc(33.33333333%);
  width: -moz-calc(33.33333333%);
  width: calc(100% * 1 / 3);
  height: -webkit-calc(33.33333333%);
  height: -moz-calc(33.33333333%);
  height: calc(100% * 1 / 3);
  position: absolute;
  right: 0;
  bottom: 0;
  background-size: cover;
}

.bili-avatar-icon--big-vip {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk0Mjk2ODk1Nzc2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ2MTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS4wNzA3OCAwLjA0NjQ2MWE1MTEuMDcwNzggNTExLjA3MDc4IDAgMCAxIDUxMS4wNzA3ODEgNTExLjA3MDc4YzAgMjgyLjI1MDQ1NC0yMjguODIwMzI3IDUxMS4wNzA3OC01MTEuMDcwNzgxIDUxMS4wNzA3ODFzLTUxMS4wNzA3OC0yMjguODIwMzI3LTUxMS4wNzA3OC01MTEuMDcwNzgxIDIyOC44MjAzMjctNTExLjA3MDc4IDUxMS4wNzA3OC01MTEuMDcwNzh6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSI0NjEzIj48L3BhdGg+PHBhdGggZD0iTTUxMS4wNzA3OCA5Mi45Njg0MjFhNDE4LjE0ODgyIDQxOC4xNDg4MiAwIDEgMSAwIDgzNi4yOTc2NDEgNDE4LjE0ODgyIDQxOC4xNDg4MiAwIDAgMSAwLTgzNi4yOTc2NDF6IiBmaWxsPSIjRkI3Mjk5IiBwLWlkPSI0NjE0Ij48L3BhdGg+PHBhdGggZD0iTTQzNi43MzMyMTIgMjQwLjIwMzI2N2M0MC4yODE2NyAwLjkyOTIyIDc3LjM1NzUzMiAyMi40ODcxMTQgOTguNDUwODE3IDU3LjE5MzQ2NiAyMC4zNDk5MDkgNDAuNjk5ODE5IDAgODkuMzQ0NDY1IDUuNjIxNzc5IDk1LjA1OTE2NSA1LjYyMTc3OSA1LjY2ODI0IDUwLjU0OTU0Ni0xNS44NDMxOTQgNjcuNzQwMTA5LTIxLjIzMjY2OGEyMDEuMTI5NTgzIDIwMS4xMjk1ODMgMCAwIDEgMTEwLjM0NDgyNy0xMS44OTQwMSA5Mi4wODU2NjIgOTIuMDg1NjYyIDAgMCAxIDQyLjU1ODI1OCA4OS4yMDUwODFjLTMuOTQ5MTgzIDM4LjI4Mzg0OC0zOC4wNTE1NDMgMzYuNTY0NzkxLTc4LjI0MDI5MSAyOS43MzUwMjdhNDMwLjQ2MDk4IDQzMC40NjA5OCAwIDAgMC0xNDIuNjgxNjY5IDE3LjA5NzY0MWMtMTcuNzAxNjMzIDUuNzE0NzAxLTI5LjkyMDg3MSA5LjE5OTI3NC0zOC4zNzY3NyAyNC4xMTMyNDloMC42NTA0NTRjLTguNTk1MjgxIDE0Ljg2NzUxNC04MC4yODQ1NzQgMTc5LjU3MTY4OC04OS4zNDQ0NjUgMjAyLjU2OTg3My0xNS4zMzIxMjMgMjcuODc2NTg4LTM4LjUxNjE1MiA1MC41NDk1NDYtNjYuNDg1NjYyIDY1LjIzMTIxNmExMDguMzQ3MDA1IDEwOC4zNDcwMDUgMCAwIDEtOTguNDUwODE3LTUuNzE0NzAxYy0yNy44MzAxMjctMjEuODM2NjYxLTM1LjMxMDM0NS0zOC40Njk2OTEtNS4xMTA3MDgtNDguNzg0MDI5IDMwLjE5OTYzNy0xMC4yNjc4NzcgODguNjk0MDExLTg0LjA5NDM3NCAxMDMuNTYxNTI1LTEwNi44NjAyNTQgMTQuODY3NTE0LTIyLjgxMjM0MSA2OC42NjkzMjgtOTkuMDA4MzQ4IDU2Ljc3NTMxOC0xMDcuMDkyNTU5YTI5My44NjU2OTkgMjkzLjg2NTY5OSAwIDAgMC0xMDIuOTU3NTMyIDExLjU2ODc4NGMtMTYuNDAwNzI2IDUuMDY0MjQ3LTI0LjM5MjAxNSAxMy4xNDg0NTctMzguNjU1NTM2LTUuMjUwMDkxYTE1OS43MzI4NDkgMTU5LjczMjg0OSAwIDAgMS0yMy45Mjc0MDQtNzcuMTI1MjI3YzEuODU4NDM5LTkuMTk5Mjc0IDMuNjIzOTU2LTEzLjc1MjQ1IDUuMTU3MTY4LTEzLjc1MjQ1YTk3Ni4zNzc0OTUgOTc2LjM3NzQ5NSAwIDAgMCAxODUuNTY1MTU1LTI1LjE4MTg1MWM3Ljg5ODM2Ny0yNC40Mzg0NzUgOS4zODUxMTgtNTAuNTQ5NTQ2IDQuNDEzNzkzLTc1LjczMTM5N2EzMDEuOTk2MzcgMzAxLjk5NjM3IDAgMCAwLTI5LjU5NTY0NC03Ny4yNjQ2MWMtNC41NTMxNzYtMy40ODQ1NzQgNi4yNzIyMzItMTUuODQzMTk0IDMyLjk4NzI5NS0xNS44NDMxOTR6IG0xNTUuNTUxMzYyIDM0MC4zMjY2NzlhNDEyLjU3MzUwMyA0MTIuNTczNTAzIDAgMCAxIDk1LjAxMjcwNCAyNy43MzcyMDVjMzAuMTUzMTc2IDE1LjA1MzM1OCAxMzIuNDEzNzkzIDUxLjYxODE0OSAxMTEuNzg1MTE4IDExNy44MjUwNDUtMjAuNTgyMjE0IDY2LjA2NzUxNC0yOS42NDIxMDUgNzEuNjQyODMxLTQ5LjIwMjE3OCA1NS41MjA4NzEtMTkuNTEzNjEyLTE2LjEyMTk2LTE4OC42MzE1NzktMTY2LjUxNjE1Mi0xOTMuODgxNjctMTc0Ljg3OTEyOWExNy45MzM5MzggMTcuOTMzOTM4IDAgMCAxIDEuMDY4NjAzLTIyLjMwMTI3YzcuODUxOTA2LTYuNjkwMzgxIDI1LjIyODMxMi00LjM2NzMzMiAzNS4yMTc0MjMtMy45MDI3MjJ6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSI0NjE1Ij48L3BhdGg+PC9zdmc+);
}

.bili-avatar-icon--business {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk0Mjk2OTA0NjU3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ4ODQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA1MTJtLTUxMiAwYTUxMiA1MTIgMCAxIDAgMTAyNCAwIDUxMiA1MTIgMCAxIDAtMTAyNCAwWiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNDg4NSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS00MTguOTA5MDkxIDBhNDE4LjkwOTA5MSA0MTguOTA5MDkxIDAgMSAwIDgzNy44MTgxODIgMCA0MTguOTA5MDkxIDQxOC45MDkwOTEgMCAxIDAtODM3LjgxODE4MiAwWiIgZmlsbD0iIzRBQzdGRiIgcC1pZD0iNDg4NiI+PC9wYXRoPjxwYXRoIGQ9Ik00NzQuMTEyIDc2My45NTA1NDVhMzMuMjggMzMuMjggMCAwIDEtMTQuMDU2NzI3IDQuMDQ5NDU1IDIxLjAzODU0NSAyMS4wMzg1NDUgMCAwIDEtMjEuMzE3ODE4LTIwLjgwNTgxOCAxOS41NDkwOTEgMTkuNTQ5MDkxIDAgMCAxIDEuMjEwMTgxLTUuODY0NzI3bDQwLjQ5NDU0Ni0xODcuNDM4NTQ2LTE2Ny42NTY3MjcgMC4zMjU4MThhMjEuMjI0NzI3IDIxLjIyNDcyNyAwIDAgMS0yMS44NzYzNjQtMjAuODA1ODE4IDIwLjQzMzQ1NSAyMC40MzM0NTUgMCAwIDEgOS40OTUyNzMtMTYuODQ5NDU0bDI1MC4xODE4MTgtMjU1Ljc2NzI3M2M0LjYwOC0yLjc5MjcyNyA5LjU0MTgxOC00Ljc0NzYzNiAxNC42NjE4MTgtNC43OTQxODJhMjEuMTMxNjM2IDIxLjEzMTYzNiAwIDAgMSAyMS4zNjQzNjQgMjAuODUyMzY0IDE5Ljk2OCAxOS45NjggMCAwIDEtMi43OTI3MjggOS43NzQ1NDVsLTQwLjIxNTI3MiAxODQuMzJoMTY3Ljg0MjkwOWEyMS4xNzgxODIgMjEuMTc4MTgyIDAgMCAxIDIxLjY0MzYzNiAyMC44NTIzNjQgMjAuMjkzODE4IDIwLjI5MzgxOCAwIDAgMS05LjQ5NTI3MyAxNi45NDI1NDVsLTI0OS40ODM2MzYgMjU1LjIwODcyN3oiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjQ4ODciPjwvcGF0aD48L3N2Zz4=);
}

.bili-avatar-icon--personal {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk0Mjk2OTAwOTA1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ3NDgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA1MTJtLTUxMiAwYTUxMiA1MTIgMCAxIDAgMTAyNCAwIDUxMiA1MTIgMCAxIDAtMTAyNCAwWiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNDc0OSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS00MTguOTA5MDkxIDBhNDE4LjkwOTA5MSA0MTguOTA5MDkxIDAgMSAwIDgzNy44MTgxODIgMCA0MTguOTA5MDkxIDQxOC45MDkwOTEgMCAxIDAtODM3LjgxODE4MiAwWiIgZmlsbD0iI0ZGQzYyRSIgcC1pZD0iNDc1MCI+PC9wYXRoPjxwYXRoIGQ9Ik00NzQuMTEyIDc2My45NTA1NDVhMzMuMjggMzMuMjggMCAwIDEtMTQuMDU2NzI3IDQuMDQ5NDU1IDIxLjAzODU0NSAyMS4wMzg1NDUgMCAwIDEtMjEuMzE3ODE4LTIwLjgwNTgxOCAxOS41NDkwOTEgMTkuNTQ5MDkxIDAgMCAxIDEuMjEwMTgxLTUuODY0NzI3bDQwLjQ5NDU0Ni0xODcuNDM4NTQ2LTE2Ny42NTY3MjcgMC4zMjU4MThhMjEuMjI0NzI3IDIxLjIyNDcyNyAwIDAgMS0yMS44NzYzNjQtMjAuODA1ODE4IDIwLjQzMzQ1NSAyMC40MzM0NTUgMCAwIDEgOS40OTUyNzMtMTYuODQ5NDU0bDI1MC4xODE4MTgtMjU1Ljc2NzI3M2M0LjYwOC0yLjc5MjcyNyA5LjU0MTgxOC00Ljc0NzYzNiAxNC42NjE4MTgtNC43OTQxODJhMjEuMTMxNjM2IDIxLjEzMTYzNiAwIDAgMSAyMS4zNjQzNjQgMjAuODUyMzY0IDE5Ljk2OCAxOS45NjggMCAwIDEtMi43OTI3MjggOS43NzQ1NDVsLTQwLjIxNTI3MiAxODQuMzJoMTY3Ljg0MjkwOWEyMS4xNzgxODIgMjEuMTc4MTgyIDAgMCAxIDIxLjY0MzYzNiAyMC44NTIzNjQgMjAuMjkzODE4IDIwLjI5MzgxOCAwIDAgMS05LjQ5NTI3MyAxNi45NDI1NDVsLTI0OS40ODM2MzYgMjU1LjIwODcyN3oiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjQ3NTEiPjwvcGF0aD48L3N2Zz4=);
}

.bili-avatar-icon--small-vip {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk0Mjk2ODc5NTM3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0NzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgNTEyLjQ2NTQ1NUMwIDc5NC45OTYzNjQgMjI5LjAwMzYzNiAxMDI0IDUxMS41MzQ1NDUgMTAyNGMyODIuNDg0MzY0IDAgNTExLjQ4OC0yMjkuMDAzNjM2IDUxMS40ODgtNTExLjUzNDU0NSAwLTI4Mi40ODQzNjQtMjI5LjAwMzYzNi01MTEuNDg4LTUxMS41MzQ1NDUtNTExLjQ4OFMwIDIyOS45ODEwOTEgMCA1MTIuNTEyeiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNDQ3NyI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS00MTguOTA5MDkxIDBhNDE4LjkwOTA5MSA0MTguOTA5MDkxIDAgMSAwIDgzNy44MTgxODIgMCA0MTguOTA5MDkxIDQxOC45MDkwOTEgMCAxIDAtODM3LjgxODE4MiAwWiIgZmlsbD0iIzZEQzc4MSIgcC1pZD0iNDQ3OCI+PC9wYXRoPjxwYXRoIGQ9Ik0zMzEuMjY0IDYxOC44MjE4MThhMjQuOTAxODE4IDI0LjkwMTgxOCAwIDAgMC01LjYzMi00Ljg4NzI3M2MtMC44Mzc4MTgtMC4wOTMwOTEgMS42MjkwOTEgMS45NTQ5MDkgNS41ODU0NTUgNC44ODcyNzN6IG0yNDUuMjk0NTQ1LTE4LjgwNDM2M2wyLjgzOTI3My0xMS4wNzc4MTlzLTQuMTg5MDkxLTAuMjc5MjczLTIuNzkyNzI3LTIuNzkyNzI3YzEuMzQ5ODE4LTIuNTYgMi43OTI3MjctMTMuODcwNTQ1IDIuNzkyNzI3LTEzLjg3MDU0NXYtMzMuMzI2NTQ2bC0yLjc5MjcyNy0xMS4xMjQzNjMgMi43OTI3MjctNS41ODU0NTUtMi43OTI3MjctMTEuMDc3ODE4di0zMC41MzM4MThsLTIuODM5MjczLTExLjEyNDM2NCA1LjYzMi01LjUzODkwOVYzNjYuNzc4MTgybC0yLjc5MjcyNy0xMS4wNzc4MTgtNS42Nzg1NDYtOC4zNzgxODItMTQuMTAzMjcyLTEzLjg3MDU0Ni0xNC4wNTY3MjgtMjIuMjAyMTgxLTE5Ljc4MTgxOC0yNC45OTQ5MS0xMS4yNjQtMTEuMDc3ODE4LTUuNjMyLTguMzc4MTgydi0yLjc5MjcyN2wtNS42MzItNS40OTIzNjNoLTIuNzkyNzI3bC0yLjgzOTI3My0yLjc5MjcyOC01LjY3ODU0NSA1LjU4NTQ1NS0yLjc5MjcyNy0yLjc5MjcyNy01LjYzMi0yLjc5MjcyOGgtMi43OTI3MjhsLTguNTE3ODE4IDguMzMxNjM3IDIuNzkyNzI3IDUuNTg1NDU0djE2LjYxNjcyN2wyLjg4NTgxOSA1LjU4NTQ1NXY1LjUzODkwOWwyLjc5MjcyNyAyLjc5MjcyNyAyLjc5MjcyNyAxMS4wNzc4MTkgMi44MzkyNzMgNS41ODU0NTQgMi43OTI3MjcgNS41Mzg5MDl2OC4zMzE2MzdsLTIuNzkyNzI3IDIuNzkyNzI3IDIuNzkyNzI3IDE2LjYxNjcyNy0yLjc5MjcyNyAxMS4xMjQzNjR2Mi43OTI3MjdsLTIuNzkyNzI3IDg4LjgwODcyN3YyMi4yNDg3MjhsMi43OTI3MjcgMTEuMDc3ODE4LTIuNzkyNzI3IDUuNTg1NDU0djIuNzkyNzI4cy0wLjM3MjM2NCAzLjQ0NDM2NCAwIDguMjg1MDljMC4zMjU4MTggNC44NDA3MjcgMCA4LjM3ODE4MiAwIDguMzc4MTgydjguMjg1MDkxbC0yLjc5MjcyOCA1LjU4NTQ1NXYyLjc5MjcyN2wyLjc5MjcyOCA1LjQ5MjM2NHYyLjc5MjcyN3MwLjE4NjE4MiA1My44OTk2MzYtMi43OTI3MjggNjMuODYwMzY0YTI0OC45MjUwOTEgMjQ4LjkyNTA5MSAwIDAgMS01LjY3ODU0NSAxNi42NjMyNzJ2NS41ODU0NTVsLTUuNjMyIDguMjg1MDkxdjUuNTg1NDU0bC0yLjc5MjcyNyA1LjUzODkwOS0yLjgzOTI3MyAyLjc5MjcyOHMtMS44NjE4MTggMC43NDQ3MjctMi44MzkyNzMgMGMtMS4wMjQtMC43NDQ3MjctMi43OTI3MjctMi43OTI3MjctMi43OTI3MjctMi43OTI3MjhsLTExOC41MDQ3MjctNjIuMjMxMjcyLTguMzc4MTgyLTQuNDIxODE5czEyMS43NjI5MDkgNjUuMTYzNjM2IDExOC40MTE2MzYgODAuNTIzNjM3YzAgMC05LjIxNiAxLjAyNC0xNC4xMDMyNzMtMi43OTI3MjctNC45MzM4MTgtMy43NzAxODItMTA3LjE0NzYzNi01OC4yNzQ5MDktMTA3LjE0NzYzNi01OC4yNzQ5MWw1My41MjcyNzMgMzYuMDcyNzI4aC0yLjc5MjcyOGwtNTMuNTczODE4LTI3Ljc0MTA5MSAzNi42Nzc4MTggMjcuNzQxMDkxcy0xOC41MjUwOTEtOC40NzEyNzMtMjguMjA2NTQ1LTEzLjMxMmMxMS42MzYzNjQgNy45MTI3MjcgMzYuNjMxMjczIDI3LjIyOTA5MSAzNi42MzEyNzMgMjcuMjI5MDkxaC0yLjc5MjcyOGwtNzAuNTE2MzYzLTQ3LjE5NzA5MSA0NS4xNDkwOTEgMzMuMjhzNjkuMzUyNzI3IDQ5Ljg5NjcyNyA3MC40Njk4MTggNTguMzIxNDU0bC04LjQ3MTI3MyAxMS4xMjQzNjRIMzkzLjMwOTA5MWwtMi44MzkyNzMgMi43OTI3MjctMi43OTI3MjcgMi43NDYxODIgMi43OTI3MjcgNS41ODU0NTVoLTguNDcxMjczbC01LjU4NTQ1NC0yLjc5MjcyOCAyLjc5MjcyNyA1LjUzODkwOXYyLjc5MjcyOGwtMi43OTI3MjcgMi43OTI3MjctMi44ODU4MTggMi43NDYxODIgMi44MzkyNzIgMi43OTI3MjdoOC40NzEyNzNsLTUuNjMyIDUuNTM4OTA5cy00Ljk4MDM2NCA1LjIxMzA5MSAwIDguMzMxNjM2YzQuOTMzODE4IDMuMTE4NTQ1IDMwLjk5OTI3MyAyNy43NDEwOTEgMzAuOTk5MjczIDI3Ljc0MTA5MWw1LjYzMiAyLjc5MjcyOGgzMS4wNDU4MThsMzAuOTk5MjczLTEzLjg3MDU0NmgxMS4yNjRsOC40NzEyNzMtNS41ODU0NTQgNDcuOTQxODE4LTQxLjYxMTYzNyA1LjYzMi0xMy45MTcwOTEgOC40NzEyNzItMTEuMDc3ODE4IDUuNjMyLTUuNTg1NDU0IDIuNzkyNzI4LTguMjg1MDkxIDguNTE3ODE4LTIyLjI0ODcyOCAyLjc5MjcyNy0xNi42NjMyNzIgMi43OTI3MjctNS41Mzg5MDktMi43OTI3MjctNS41ODU0NTUtMi43OTI3MjctMTkuNDA5NDU0eiBtMjg1Ljg4MjE4MiAzNS44NGMtMTEuNzc2LTQ2LjgyNDcyNy0zOS45MzYtODIuOTkwNTQ1LTg0LjQ4LTEwOC41OTA1NDZsLTM3LjE4OTgxOC0yNi44MTAxODItNTAuNzgxMDkxLTU3LjM5MDU0NS0yLjQ2NjkwOS0xLjc2ODcyN2ExNy40NTQ1NDUgMTcuNDU0NTQ1IDAgMCAwLTE2LjA1ODE4Mi00LjE4OTA5MWwxLjUzNiA5LjYzNDkwOWMxLjI1NjcyNyA0Ljk4MDM2NCA0LjMyODcyNyAxNC41Njg3MjcgOS4zMDkwOTEgMjguNzE4NTQ1IDQuODg3MjczIDE0LjE0OTgxOCA4Ljg0MzYzNiAyNC41Mjk0NTUgMTEuODIyNTQ2IDMxLjE4NTQ1NSAzLjAyNTQ1NSA2LjY1NiA4LjkzNjcyNyAxNy4yMjE4MTggMTcuODI2OTA5IDMxLjc5MDU0NSA4Ljg5MDE4MiAxNC41Njg3MjcgMTUuNDk5NjM2IDI0LjYyMjU0NSAxOS43ODE4MTggMzAuMTYxNDU1bC0xLjIxMDE4MiAxLjUzNi0xNC45NDEwOTEgMi42OTk2MzYtNzcuMTcyMzYzLTEuNzY4NzI3YTIxLjQxMDkwOSAyMS40MTA5MDkgMCAwIDAtMTUuNTkyNzI4LTEuNDg5NDU1bDAuNzkxMjczIDAuNjA1MDkxYTkzLjA5MDkwOSA5My4wOTA5MDkgMCAwIDAgMzYuMzk4NTQ1IDcuOTEyNzI3YzkuMzA5MDkxIDMuNDQ0MzY0IDE4LjE1MjcyNyA4LjE0NTQ1NSAyNi4zOTEyNzMgMTQuMTAzMjczIDMuNTM3NDU1IDAuOTMwOTA5IDUuMzUyNzI3IDMuMDI1NDU1IDUuMzk5MjczIDYuMzMwMTgybDQ0LjY4MzYzNiAxOC43NTc4MThjOC4wOTg5MDkgNS4wMjY5MDkgMTYuMzM3NDU1IDkuMzA5MDkxIDI0Ljc2MjE4MiAxMi44OTMwOTEgNi44ODg3MjcgNi42MDk0NTUgMTMuNDk4MTgyIDEzLjAzMjcyNyAxOS44MjgzNjQgMTkuMjIzMjczIDguODQzNjM2IDYuMzMwMTgyIDIxLjE3ODE4MiAxMi4wMDg3MjcgMzcuMDk2NzI3IDE2Ljk0MjU0NSAxNS45MTg1NDUgNC45MzM4MTggMjguMjUzMDkxIDIuODM5MjczIDM3LjA5NjcyNy02LjI4MzYzNmEzNS4xNDE4MTggMzUuMTQxODE4IDAgMCAwIDcuMTY4LTI0LjIwMzYzNnpNMzcwLjg3NDE4MiA0MjcuOTg1NDU1cy05Mi41Nzg5MDkgNjAuMzY5NDU1LTExMy44NTAxODIgODcuMTMzMDljMCAwLTE1Ljk2NTA5MS0xMS44MjI1NDUtMTYuMjkwOTA5LTMyLjY3NDkwOSAwIDAtMTIuNzA2OTA5LTMuMDcyLTI3LjA4OTQ1NSAyNy4yMjkwOTEtMTQuMzgyNTQ1IDMwLjI1NDU0NS0xNi4yOTA5MDkgMjcuMTgyNTQ1LTE2LjI5MDkwOSAyNy4xODI1NDZsLTE2LjI0NDM2MyA0My41NjY1NDVzLTI3LjA4OTQ1NSA4My4yNjk4MTggMzIuNTM1MjcyIDkyLjUzMjM2NGMwIDAgMzIuMjU2LTIuNjUzMDkxIDQzLjM4MDM2NC0yNy4yMjkwOTEgMTEuMDc3ODE4LTI0LjUyOTQ1NSAxNi4yOTA5MDktMzIuNjI4MzY0IDE2LjI5MDkwOS0zMi42MjgzNjR2LTEwLjg5MTYzNmwtNS40NDU4MTggNS40NDU4MTh2LTEwLjg5MTYzNmw1LjM5OTI3My01LjQ0NTgxOHMtOS4wMjk4MTgtMTkuNDU2IDAtMjcuMjI5MDkxYzkuMDI5ODE4LTcuNzI2NTQ1IDEwLjg0NTA5MS0xMC44OTE2MzYgMTAuODQ1MDkxLTEwLjg5MTYzN2wtNS4zOTkyNzMtNS40NDU4MThzMTEuMTcwOTA5LTE2Ljk4OTA5MSAxOS4xMzAxODItMzMuMDQ3MjczYy0yLjUxMzQ1NSA1LjA3MzQ1NS0wLjYwNTA5MS0zMy4xODY5MDkgNzMuMDI5ODE4LTg2LjcxNDE4MXoiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjQ0NzkiPjwvcGF0aD48L3N2Zz4=);
}

.bili-avatar-img.bili-avatar-img-error {
  display: none;
}

@-webkit-keyframes bili-avatar {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-97.5%, 0, 0);
    transform: translate3d(-97.5%, 0, 0);
  }
}

@-moz-keyframes bili-avatar {
  0% {
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -moz-transform: translate3d(-97.5%, 0, 0);
    transform: translate3d(-97.5%, 0, 0);
  }
}

@keyframes bili-avatar {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-97.5%, 0, 0);
    -moz-transform: translate3d(-97.5%, 0, 0);
    transform: translate3d(-97.5%, 0, 0);
  }
}

* {
  margin: 0;
  padding: 0;
}
</style>
<style type="text/css">.secuity-right-home{
  padding: 50px 20px 0;
  width: 789px
}</style>
<style type="text/css">.top-header{
  width: 100%;
  height: 106px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAABWCAYAAADlqUfFAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAbSURBVCiRY2RYcOM/AwMDAxMDFIwyRhkjjQEAc4gDI5wD87YAAAAASUVORK5CYII=) repeat-x;
  z-index: 10
}

.top-img {
  width: 980px;
  height: 106px;
  margin: 0 auto;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/rl_top.35edfde.png) no-repeat
}</style>
<style type="text/css">
.security-left{
  float: left;
  width: 150px;
  height: 100%;
  overflow: hidden
}

.security-title {
  display: block;
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  color: #99a2aa;
  cursor: default;
  border-bottom: 1px solid #e1e2e5
}

.security-ul {
  border-bottom: 1px solid #e1e2e5
}

.security-list{
  width: 150px;
  height: 48px;
  line-height: 48px
}

.security-list:hover {
  background: #e1e4ea;
  cursor: pointer
}

.security-icon {
  vertical-align: middle;
  display: inline-block;
  width: 18px;
  height: 36px;
  margin-left: 32px;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png)
}

.security-left .on {
  background-color: #00a1d7 !important
}

.security-left .on .security-nav-name {
  color: #fff
}

.security-nav-name {
  margin-left: 12px;
  font-size: 14px;
  color: #222
}

.security-list-link {
  display: block;
  height: 100%
}

.security-list-link-jump {
  display: block;
  height: 100%;
  color: #222;
  font-size: 16px;
  text-align: center;
  line-height: 43px
}

.icon-0 {
  background-position: -23px -15px
}

.icon-1 {
  background-position: -23px -975px
}

.icon-2 {
  background-position: -23px -1231px
}

.icon-3 {
  background-position: -23px -80px
}

.icon-4 {
  background-position: -23px -144px
}

.icon-5 {
  background-position: -23px -207px
}

.icon-6 {
  background-position: -23px -272px
}

.icon-7 {
  background-position: -727px -237px
}

.icon-8 {
  background-position: -23px -335px
}

.icon-9 {
  background-position: -23px -398px
}

.icon-10 {
  background-position: -23px -463px
}

.icon-11 {
  background-position: -23px -592px
}

.security-left .on .icon-0 {
  background-position: -87px -15px !important
}

.security-left .on .icon-1 {
  background-position: -87px -975px !important
}

.security-left .on .icon-2 {
  background-position: -87px -1231px !important
}

.security-left .on .icon-3 {
  background-position: -87px -80px !important
}

.security-left .on .icon-4 {
  background-position: -87px -144px !important
}

.security-left .on .icon-5 {
  background-position: -87px -207px !important
}

.security-left .on .icon-6 {
  background-position: -87px -272px !important
}

.security-left .on .icon-7 {
  background-position: -792px -237px !important
}

.security-left .on .icon-8 {
  background-position: -87px -335px !important
}

.security-left .on .icon-9 {
  background-position: -87px -398px !important
}

.security-left .on .icon-10 {
  background-position: -87px -463px !important
}

.security-left .on .icon-11 {
  background-position: -87px -592px !important
}

.security-list-jump {
  width: 150px;
  height: 43px;
  border-bottom: 1px solid #e1e2e5;
  position: relative
}

.security-list-jump :hover {
  background: #e1e4ea;
  cursor: pointer
}

.security-list-jump-icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png);
  background-position: -26px -731px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 14px
}
</style>
<style type="text/css">.index-info  {
  border-bottom: 1px solid #e5e9ef;
  padding-bottom: 40px;
  position: relative
}

.home-head  {
  display: inline-block;
  vertical-align: top;
  position: relative;
  cursor: pointer;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden
}

.home-head:hover .gotoSpace  {
  display: block
}

.home-head img  {
  width: 100%;
  height: 100%
}

.user-vip-icon  {
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat
}

.user-vip-icon-little , .user-vip-icon  {
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  z-index: 100;
  top: 45px;
  left: 45px
}

.user-vip-icon-little  {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAy9JREFUOBGlVUtIVGEUPndmdEadGccRCScdzSc6RpFhD7CQoAhKzUW1SKIHrVyU0QNbB0G0axFBbdoUtCgL2kcEtYiKnLDygVpa5qjjW0dv33e7/2XGSaU68M35/3PP+e655z//GU1WEF3XvXhUb6ISOtd0/QbdAbQDTzRNmzDtqysQOoELQARYS0bg0AqkLmfV4g1wYFaPgBraP0V75M1Ih3RF+2RsPkqT+FK9UuwNypbskJR5Nxg2/LwEmpD9d2WwiE3SV3iQPzwbkfvdT+VztFf5/VGXegvlaNEByXH5+bwX2K7IDWKQOmF8DtR0T/TJ7c4HMh2bwXZtSXekyZnyI1LkCdKZmdeBfN5mhp6FrmGmK5F6UjJM10TFBBjDWMhOoIULG7L1QV/mhp+/UqbHihtkf95uuiUJYxhryhVwephxA+DjQa1W05+zY7Jvfa2UeAoUQYJmLDkgLPhBRWycfoLnso3Tnio2zSb5btXOyxywZQeZUk/iEDdsqXjRRBO3I90ypdgc1poLZu7Q7Am2OI4QiY0UVJ+yddhGteu2ymRs2grURTfW6gwW9SU5XtokdnyFEsWBfYBWq5fp0FSwV1oqmpPqrbJz2tmZIj2T/eLC+lzopGSmeAxb/A+JefeNG2XDOyp9pTI0MyyDALNRb1WZ4cSNEmzyV0ia3SVBd0Baq04ZNt5KUwZZuDBQxms6MjsqaG6jJ1nj6uwq8Tkz5QtOvMCdZ8TweUxflHeRj/J1akgO4Qs3+sulBOXzuzJNXglryOAEdnfZKjfD92Szv1I6x7tkZnHOcKoP7pG63B1G9gtLMbn2/pa6DIpECvFSfuXp8sNqfjSzFBw6UQ4UHtrbSNgiZSRtLMMSDuthz7MkUvr0Tg5IfkauIh2FqV3NijZsrvJa3vhwJ+H2ZaFuOa5s1PyHTCxMkSdJOC/Oo87mMLqIcl1XxC54vwCq/3MIvQbHLhDPqUMX1Jqnw7EZ+Mex2Y/YbSAdhLa6iWtFzppXc/8Xg56ZNipSxiYJMncBbcA4sJaMwuES8PvWxLFZpYizGUs4Z2HRCPAPlX+mAYD3mp/KafOYQJZj0EnyCw7inGAQwdwsAAAAAElFTkSuQmCC) no-repeat
}

.user-vip-icon-vip  {
  background-position: -150px -982px
}

.user-vip-icon-enterprise  {
  background-position: -150px -598px
}

.user-vip-icon-personal  {
  background-position: -150px -663px
}

.gotoSpace  {
  position: absolute;
  text-align: center;
  width: 64px;
  height: 64px;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .66);
  font-size: 12px;
  color: #fff;
  border-radius: 64px;
  line-height: 64px;
  cursor: pointer;
  display: none
}

.home-right  {
  display: inline-block;
  margin-left: 16px;
  width: 684px
}

.home-top-msg-name  {
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin-right: 8px;
  cursor: default
}

.home-top-msg-name-color  {
  color: #fb7299
}

.home-top-msg-name-color-little  {
  color: #6dc781 !important
}

.home-user-spec  {
  border: 1px solid #fb7299;
  background-color: #fb7299;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 2px 4px;
  cursor: pointer
}

.home-user-spec-little  {
  border: 1px solid #6dc781 !important;
  background-color: #6dc781 !important
}

.home-userstatus  {
  border: 1px solid #99a2aa;
  margin: 0 8px;
  color: #99a2aa;
  border-radius: 4px;
  font-size: 12px;
  cursor: default;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 2px 4px
}

.home-icon  {
  position: relative;
  display: inline-block;
  top: -5px;
  vertical-align: top;
  cursor: pointer
}

.home-icon img  {
  height: 36px
}

.home-top-bp  {
  margin-top: 15px
}

.curren-b  {
  display: inline-block;
  width: 20px;
  margin-right: 8px;
  height: 20px;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
  background-position: -150px -534px
}

.curren-b-num  {
  margin-right: 12px;
  display: inline-block;
  line-height: 20px;
  font-size: 14px;
  color: #222;
  cursor: default;
  vertical-align: top;
  height: 20px
}

.coin-link  {
  display: inline-block;
  width: 20px;
  margin-right: 8px;
  height: 20px;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
  background-position: -150px -470px
}

.loading-icon-box  {
  width: 789px;
  height: 150px;
  position: relative
}

.hide  {
  display: none
}</style>
<style type="text/css">.home-top-level  {
  position: relative
}

.home-top-level-all  {
  display: inline-block;
  width: 684px;
  margin-top: 10px
}

.home-top-progress-wrap  {
  display: inline-block;
  position: relative
}

.home-top-progress-wrap:hover .home-top-level-mask-warp  {
  display: block !important
}

.home-top-level-head  {
  width: 48px;
  height: 24px;
  font-weight: 700;
  color: #fff;
  padding-left: 10px;
  font-size: 12px;
  line-height: 24px;
  cursor: default;
  display: inline-block;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat
}

.home-top-level-head-active  {
  background-position: -264px -852px
}

.home-top-level-head-no-active  {
  background-position: -264px -917px
}

.home-top-level-up  {
  width: 280px;
  height: 24px;
  line-height: 24px;
  background-color: #e5e9ef;
  margin-left: -15px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  display: inline-block;
  position: relative;
  text-indent: -9999px;
  text-align: center
}

.home-top-level-upgo  {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ff905a;
  width: 0;
  height: 24px;
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
  -webkit-transition-delay: .3s;
  transition-delay: .3s;
  border-radius: 0 4px 4px 0
}

.home-level-mask-top  {
  display: inline-block;
  width: 326px;
  height: 10px;
  position: absolute;
  top: -10px;
  left: 15px;
  background: transparent
}

.home-top-level-number  {
  height: 24px;
  color: #99a2aa;
  margin-left: 8px;
  font-size: 12px;
  line-height: 24px;
  cursor: default
}

.now-num  {
  color: #222
}

.num-icon  {
  margin: 0 2px
}

.home-to-update  {
  right: 90px;
  line-height: 20px;
  font-size: 12px
}

.home-to-space , .home-to-update  {
  position: absolute;
  top: 8px;
  width: 70px;
  height: 22px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #ced3db;
  color: #6d757a;
  text-align: center;
  cursor: pointer;
  line-height: 24px
}

.home-to-space  {
  right: 0;
  padding-right: 10px
}

.home-to-space :hover, .home-to-update :hover {
  border: 1px solid #00a1d6;
  color: #00a1d6
}

.m-arrow  {
  position: absolute;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) -26px -726px no-repeat;
  width: 18px;
  height: 22px;
  top: 2px;
  right: 0
}

.home-to-space:hover .m-arrow  {
  background-position: -90px -726px
}

.home-top-level-mask-warp  {
  position: absolute;
  width: 260px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 20px;
  top: 33px;
  left: -15px;
  z-index: 999;
  background-color: #fff;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  font-size: 12px;
  color: #6d757a;
  line-height: 24px;
  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, .14);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .14);
  display: none
}

.home-level-mask-icon  {
  position: absolute;
  width: 20px;
  height: 20px;
  top: -19px;
  left: 24px;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) -23px -850px no-repeat;
  z-index: 10
}

.home-level-tips  {
  font-size: 18px;
  color: #222
}

.home-top-level-mask-warp a  {
  font-size: 12px;
  color: #00a1d6;
  float: right
}

.lv_0 {
  font-size: 12px;
  color: #6d757a
}</style>
<style type="text/css">.index-invition-box {
  width: 789px;
  height: 120px;
  margin-top: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 27px 160px;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/inv-bg.8902ade.png) no-repeat;
  background-size: 100% 100%;
  position: relative
}

.invition-txt {
  font-size: 14px;
  color: #222;
  text-align: center
}

.invition-box-index {
  margin-top: 15px;
  height: 32px
}

.goanswer {
  background: #f25d8e
}

.goanswer, .goanswering {
  cursor: pointer;
  position: relative;
  float: left;
  display: block;
  width: 220px;
  height: 32px;
  border-radius: 4px;
  overflow: hidden
}

.goanswer .answer-txt {
  width: 100%
}

.goanswer .answer-txt, .goanswering .answer-txt {
  float: left;
  text-align: center;
  line-height: 32px;
  font-size: 12px;
  color: #fff
}

.goanswering .answer-txt {
  width: 191px;
  background: #f25d8e;
  border-radius: 4px;
  z-index: 3
}

.goanswering .answer-ing-icon {
  display: block;
  width: 32px;
  height: 32px;
  background: #f25d8e;
  opacity: .2;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2
}

.invition-box-mid-txt {
  float: left;
  display: block;
  font-size: 12px;
  color: #99a2aa;
  line-height: 32px;
  margin: 0 5px
}

.invition-input {
  float: left;
  display: block;
  width: 150px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #fff;
  border: 1px solid #ccd0d7;
  border-radius: 4px 0 0 4px
}

.btn-disable {
  right: 165px;
  bottom: 25.5px;
  background: #ccd0d7;
  color: #6d757a
}

.btn-disable, .btn-ok {
  position: absolute;
  display: block;
  width: 70px;
  height: 32px;
  border-radius: 0 4px 4px 0;
  line-height: 32px;
  text-align: center;
  z-index: 10
}

.btn-ok {
  right: 160px;
  bottom: 25px;
  background: #22a1d6;
  color: #fff;
  cursor: pointer
}

.btn-ok:hover {
  background-color: #00b5e5
}</style>
<style type="text/css">.loading-icon {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/loadTV.99606e2.gif) no-repeat;
  background-size: 100% 100%
}</style>
<style type="text/css">.home-daily-task-warp {
  padding: 36px 0;
  border-bottom: 1px solid #e5e9ef;
  position: relative
}

.home-daily-task-icon {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
  background-position: -145px -18px;
  margin-right: 6px;
  margin-left: 10px
}

.home-dialy-task-title {
  font-size: 20px;
  color: #222;
  margin-right: 6px;
  vertical-align: top
}

.home-dialy-task-tips {
  display: block;
  font-size: 12px;
  color: #99a2aa;
  margin-right: 6px;
  position: absolute;
  top: 42px;
  left: 140px
}

.home-dialy-exp-item {
  display: inline-block;
  width: 186px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 22px 0 0;
  position: relative
}

.home-dialy-exp-icon {
  width: 72px;
  height: 72px;
  border-radius: 72px;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
  text-align: center;
  line-height: 72px;
  color: #fff;
  margin: 0 auto
}

.position-ok {
  background-position: -252px -508px
}

.position-rest {
  background-position: -252px -636px
}

.re-exp-info {
  font-size: 14px;
  color: #222;
  margin-top: 16px;
  width: 100%;
  text-align: center
}

.re-exp-getexp {
  width: 80px;
  height: 20px;
  border-radius: 4px;
  background-color: #8a95a8;
  color: #fff;
  text-align: center;
  line-height: 19px;
  margin: 15px auto 0
}

.home-dialiy-exp-i {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  font-style: normal
}

.home-dialiy-exp-i-2 {
  color: #fff;
  font-size: 12px
}

.re-exp-none {
  font-size: 12px;
  color: #99a2aa;
  margin-top: 16px;
  width: 100%;
  text-align: center
}

.h-line {
  display: inline-block;
  position: absolute;
  top: 54px;
  right: 0;
  width: 1px;
  height: 74px;
  border-left: 1px solid #e5e9ef
}

.loading-icon-box {
  width: 789px;
  height: 270px;
  position: relative
}</style>
<style type="text/css">

.h-reward-info  {
  font-size: 20px;
  color: #222;
  margin-right: 6px;
  vertical-align: top
}

.h-mp-space .m-arrow  {
  top: 0;
  vertical-align: middle;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
  background-position: -26px -726px;
  width: 18px;
  margin-left: 19px;
  right: 0;
  height: 22px;
  display: inline-block;
  position: absolute
}

.h-mp-space :hover {
  border: 1px solid #00a1d6;
  color: #00a1d6
}

.h-mp-space:hover .m-arrow  {
  background-position: -90px -726px
}

.h-content-list  {
  width: 100%;
  margin-top: 10px;
  overflow: hidden;
  padding-bottom: 4px
}

.h-mp-none  {
  width: 228px;
  margin: 15px auto 0
}

.h-none-icon  {
  display: inline-block;
  width: 90px;
  height: 48px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAAvCAYAAACIcGZzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEzODc0RkYwRjdFNTExRTU4NkQ1RTk5NjYxQzcyMkQ5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEzODc0RkYxRjdFNTExRTU4NkQ1RTk5NjYxQzcyMkQ5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTM4NzRGRUVGN0U1MTFFNTg2RDVFOTk2NjFDNzIyRDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTM4NzRGRUZGN0U1MTFFNTg2RDVFOTk2NjFDNzIyRDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4tju+pAAASq0lEQVR42tRb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) no-repeat
}

.h-none-info  {
  font-size: 12px;
  color: #99a2aa;
  display: inline-block;
  vertical-align: top
}

.h-none-msg  {
  font-size: 12px;
  color: #99a2aa
}

.h-none-btn  {
  cursor: pointer;
  border-radius: 4px;
  width: 102px;
  height: 24px;
  line-height: 24px;
  background-color: #22a1d6;
  color: #fff;
  margin: 8px 0 0 8px;
  display: inline-block;
  text-align: center;
  text-decoration: none
}

.h-none-btn :hover {
  background-color: #00b5e5;
  color: #fff
}

.h-list-item  {
  width: 380px;
  height: 92px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  margin-right: 14px;
  border-radius: 4px;
  float: left;
  cursor: pointer;
  border: 1px solid #fff;
  margin-bottom: 10px
}

.h-list-item :hover {
  border: 1px solid #e5e9ef;
  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, .14);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .14)
}

.h-list-icon  {
  width: 68px;
  height: 68px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  float: left;
  border-color: #e5e9ef
}

.h-list-item:hover .h-list-icon  {
  border-color: #fff
}

.h-list-icon img  {
  max-width: 100%;
  margin: 0 auto;
  vertical-align: middle
}

.h-list-info  {
  width: 250px;
  margin-left: 20px;
  overflow: hidden;
  float: left;
  vertical-align: top
}

.h-list-name  {
  font-size: 16px;
  color: #222;
  margin: 0 10px 13px 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.h-list-item:hover .h-list-name  {
  color: #00a1d6
}

.h-list-desc  {
  line-height: 12px;
  font-size: 12px;
  color: #99a2aa;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.h-list-level  {
  margin-top: 11px
}

.loading-icon-box  {
  width: 789px;
  height: 300px;
  position: relative
}

.h-list-name-active  {
  color: #00a1d6
}</style>
<style type="text/css">.home-safe  {
  padding: 36px 0 34px;
  display: inline-block;
  position: relative
}

.h-reward-icon  {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
  background-position: -145px -146px;
  margin-right: 6px;
  margin-left: 10px
}

.go-secuirty  {
  position: absolute;
  top: 38px;
  width: 102px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid #ced3db;
  color: #6d757a;
  right: 0;
  height: 22px;
  display: inline-block;
  line-height: 20px;
  font-size: 12px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer
}

.go-secuirty .m-arrow  {
  top: 0;
  vertical-align: middle;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
  background-position: -26px -726px;
  width: 18px;
  margin-left: 19px;
  right: 0;
  height: 22px;
  display: inline-block;
  position: absolute
}

.go-secuirty :hover {
  border: 1px solid #00a1d6;
  color: #00a1d6
}

.go-secuirty:hover .m-arrow  {
  background-position: -90px -726px
}

.h-content-safe  {
  width: 100%;
  overflow: hidden
}

.h-safe-list  {
  width: 360px;
  float: left;
  margin: 24px 22px 10px 0
}

.h-safe-icon  {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) no-repeat;
  display: inline-block
}

.position-0  {
  background-position: -386px -2px
}

.position-0-no  {
  background-position: -258px -2px
}

.position-1  {
  background-position: -386px -130px
}

.position-1-no  {
  background-position: -257px -130px
}

.position-2  {
  background-position: -386px -258px
}

.position-2-no  {
  background-position: -258px -258px
}

.position-3  {
  background-position: -386px -386px
}

.position-3-no  {
  background-position: -257px -386px
}

.h-safe-msg  {
  margin-left: 16px;
  display: inline-block;
  vertical-align: top
}

.h-safe-title  {
  font-size: 16px;
  color: #222;
  margin-bottom: 8px
}

.h-safe-desc  {
  font-size: 12px;
  color: #99a2aa;
  margin-bottom: 8px
}

.h-safe-btn  {
  cursor: pointer;
  background-color: #22a1d6;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  display: inline-block;
  width: 70px;
  height: 24px;
  line-height: 24px
}

.h-safe-btn :hover {
  background-color: #00b5e5;
  color: #fff
}

.h-safe-nobtn  {
  cursor: default;
  background-color: #e5e9ef;
  color: #abb4c1;
  border-radius: 4px;
  text-align: center;
  display: inline-block;
  width: 70px;
  height: 24px;
  line-height: 24px
}

.h-safe-a  {
  display: inline-block;
  height: 24px;
  line-height: 24px;
  color: #00a1d6;
  margin-left: 10px
}

.h-safe-a :hover {
  color: #00b5e5;
  cursor: pointer
}

.loading-icon-box  {
  width: 789px;
  height: 300px;
  position: relative
}</style>
<style type="text/css">.common-dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .6);
  z-index: 10
}

.common-dialog-fade-enter-active {
  -webkit-animation: dialog-fadein .3s;
  animation: dialog-fadein .3s
}

.common-dialog-box {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1000
}

.common-dialog-content {
  position: relative;
  width: 400px;
  height: 390px;
  background: #fff;
  -webkit-box-shadow: 0 3px 26px rgba(0, 0, 0, .9);
  box-shadow: 0 3px 26px rgba(0, 0, 0, .9);
  padding-top: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  -webkit-animation: dialog-warp .3s;
  animation: dialog-warp .3s
}

.dialog-close-icon {
  cursor: pointer;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAANhJREFUOBHNkzESwiAQRSGpPIytrSewpdDW8U46lmpB6wlsvZAVos+Zz0QS0NEmNBvY/x+7QIwZ7dge/HR/9LNvC0SLR/pGH601k3C3593Jz7VWimjQ4pEmgdYrd7VtdDFYX4ORQ4MWj0BWH4pd4WbpLlon1nI9UMlQg+AZBOUw5monr5IcowgiqSpewueZlCDk02Ez+WcUK1I13A4b/NRaF6J2hta6HfQqqhlquTdQTajdS5oE4t/h2XMmakfmPArWNnGh151uLURzI/EJAhQNWjz5JuOZPwDXF66M8ZXOvwAAAABJRU5ErkJggg==) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  right: 20px;
  top: 20px
}

.common-title {
  font-size: 24px;
  color: #222;
  text-align: center;
  margin-bottom: 10px
}

.common-subtitle {
  padding: 0 30px;
  font-size: 14px;
  color: #6d757a;
  text-align: center
}

.success-img {
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/success.94f7e27.png) no-repeat;
  background-size: 100% 100%
}

.fail-img, .success-img {
  width: 180px;
  height: 180px;
  margin: 0 auto
}

.fail-img {
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/fail.b625aac.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 20px
}

.wait-img {
  width: 220px;
  height: 180px;
  margin: 0 auto;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/img_wating.f7b7713.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 30px
}

.close-btn {
  width: 140px;
  height: 40px;
  background: #00a1d6;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  margin: 0 auto
}

.btn-top {
  margin-top: 30px
}

.btn-bottom {
  margin-top: 10px
}

.close-btn:hover {
  background-color: #00b5e5
}</style>
<style type="text/css">.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1
}

.swiper-container-no-flexbox .swiper-slide {
  float: left
}

.swiper-container-vertical > .swiper-wrapper {
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;
  -ms-transition-property: -ms-transform;
  transition-property: transform;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box
}

.swiper-container-android .swiper-slide, .swiper-wrapper {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -o-transform: translate(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0)
}

.swiper-container-multirow > .swiper-wrapper {
  -webkit-box-lines: multiple;
  -moz-box-lines: multiple;
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap
}

.swiper-container-free-mode > .swiper-wrapper {
  -webkit-transition-timing-function: ease-out;
  -moz-transition-timing-function: ease-out;
  -ms-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  margin: 0 auto
}

.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex: 0 0 auto;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative
}

.swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
  height: auto
}

.swiper-container-autoheight .swiper-wrapper {
  -webkit-box-align: start;
  -ms-flex-align: start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  -webkit-transition-property: -webkit-transform, height;
  -moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;
  -ms-transition-property: -ms-transform;
  transition-property: transform, height
}

.swiper-container .swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000
}

.swiper-wp8-horizontal {
  -ms-touch-action: pan-y;
  touch-action: pan-y
}

.swiper-wp8-vertical {
  -ms-touch-action: pan-x;
  touch-action: pan-x
}

.swiper-button-next, .swiper-button-prev {
  position: absolute;
  top: 50%;
  width: 27px;
  height: 44px;
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
  -moz-background-size: 27px 44px;
  -webkit-background-size: 27px 44px;
  background-size: 27px 44px;
  background-position: 50%;
  background-repeat: no-repeat
}

.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
  opacity: .35;
  cursor: auto;
  pointer-events: none
}

.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E");
  left: 10px;
  right: auto
}

.swiper-button-prev.swiper-button-black, .swiper-container-rtl .swiper-button-next.swiper-button-black {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z'/%3E%3C/svg%3E")
}

.swiper-button-prev.swiper-button-white, .swiper-container-rtl .swiper-button-next.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E")
}

.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E");
  right: 10px;
  left: auto
}

.swiper-button-next.swiper-button-black, .swiper-container-rtl .swiper-button-prev.swiper-button-black {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z'/%3E%3C/svg%3E")
}

.swiper-button-next.swiper-button-white, .swiper-container-rtl .swiper-button-prev.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E")
}

.swiper-pagination {
  position: absolute;
  text-align: center;
  -webkit-transition: .3s;
  -moz-transition: .3s;
  -o-transition: .3s;
  transition: .3s;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  z-index: 10
}

.swiper-pagination.swiper-pagination-hidden {
  opacity: 0
}

.swiper-container-horizontal > .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
  bottom: 10px;
  left: 0;
  width: 100%
}

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: .2
}

button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -webkit-appearance: none;
  appearance: none
}

.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer
}

.swiper-pagination-white .swiper-pagination-bullet {
  background: #fff
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background: #007aff
}

.swiper-pagination-white .swiper-pagination-bullet-active {
  background: #fff
}

.swiper-pagination-black .swiper-pagination-bullet-active {
  background: #000
}

.swiper-container-vertical > .swiper-pagination-bullets {
  right: 10px;
  top: 50%;
  -webkit-transform: translate3d(0, -50%, 0);
  -moz-transform: translate3d(0, -50%, 0);
  -o-transform: translateY(-50%);
  -ms-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0)
}

.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 5px 0;
  display: block
}

.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 5px
}

.swiper-pagination-progress {
  background: rgba(0, 0, 0, .25);
  position: absolute
}

.swiper-pagination-progress .swiper-pagination-progressbar {
  background: #007aff;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
  -webkit-transform-origin: left top;
  -moz-transform-origin: left top;
  -ms-transform-origin: left top;
  -o-transform-origin: left top;
  transform-origin: left top
}

.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar {
  -webkit-transform-origin: right top;
  -moz-transform-origin: right top;
  -ms-transform-origin: right top;
  -o-transform-origin: right top;
  transform-origin: right top
}

.swiper-container-horizontal > .swiper-pagination-progress {
  width: 100%;
  height: 4px;
  left: 0;
  top: 0
}

.swiper-container-vertical > .swiper-pagination-progress {
  width: 4px;
  height: 100%;
  left: 0;
  top: 0
}

.swiper-pagination-progress.swiper-pagination-white {
  background: hsla(0, 0%, 100%, .5)
}

.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar {
  background: #fff
}

.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar {
  background: #000
}

.swiper-container-3d {
  -webkit-perspective: 1200px;
  -moz-perspective: 1200px;
  -o-perspective: 1200px;
  perspective: 1200px
}

.swiper-container-3d .swiper-cube-shadow, .swiper-container-3d .swiper-slide, .swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top, .swiper-container-3d .swiper-wrapper {
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d
}

.swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10
}

.swiper-container-3d .swiper-slide-shadow-left {
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(transparent));
  background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, .5), transparent);
  background-image: -moz-linear-gradient(right, rgba(0, 0, 0, .5), transparent);
  background-image: -o-linear-gradient(right, rgba(0, 0, 0, .5), transparent);
  background-image: linear-gradient(270deg, rgba(0, 0, 0, .5), transparent)
}

.swiper-container-3d .swiper-slide-shadow-right {
  background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, .5)), to(transparent));
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5), transparent);
  background-image: -moz-linear-gradient(left, rgba(0, 0, 0, .5), transparent);
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, .5), transparent);
  background-image: linear-gradient(90deg, rgba(0, 0, 0, .5), transparent)
}

.swiper-container-3d .swiper-slide-shadow-top {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .5)), to(transparent));
  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
  background-image: -moz-linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
  background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, .5), transparent)
}

.swiper-container-3d .swiper-slide-shadow-bottom {
  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, .5)), to(transparent));
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, .5), transparent);
  background-image: -moz-linear-gradient(top, rgba(0, 0, 0, .5), transparent);
  background-image: -o-linear-gradient(top, rgba(0, 0, 0, .5), transparent);
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .5), transparent)
}

.swiper-container-coverflow .swiper-wrapper, .swiper-container-flip .swiper-wrapper {
  -ms-perspective: 1200px
}

.swiper-container-cube, .swiper-container-flip {
  overflow: visible
}

.swiper-container-cube .swiper-slide, .swiper-container-flip .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1
}

.swiper-container-cube .swiper-slide .swiper-slide, .swiper-container-flip .swiper-slide .swiper-slide {
  pointer-events: none
}

.swiper-container-cube .swiper-slide-active, .swiper-container-cube .swiper-slide-active .swiper-slide-active, .swiper-container-flip .swiper-slide-active, .swiper-container-flip .swiper-slide-active .swiper-slide-active {
  pointer-events: auto
}

.swiper-container-cube .swiper-slide-shadow-bottom, .swiper-container-cube .swiper-slide-shadow-left, .swiper-container-cube .swiper-slide-shadow-right, .swiper-container-cube .swiper-slide-shadow-top, .swiper-container-flip .swiper-slide-shadow-bottom, .swiper-container-flip .swiper-slide-shadow-left, .swiper-container-flip .swiper-slide-shadow-right, .swiper-container-flip .swiper-slide-shadow-top {
  z-index: 0;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden
}

.swiper-container-cube .swiper-slide {
  visibility: hidden;
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  width: 100%;
  height: 100%
}

.swiper-container-cube.swiper-container-rtl .swiper-slide {
  -webkit-transform-origin: 100% 0;
  -moz-transform-origin: 100% 0;
  -ms-transform-origin: 100% 0;
  transform-origin: 100% 0
}

.swiper-container-cube .swiper-slide-active, .swiper-container-cube .swiper-slide-next, .swiper-container-cube .swiper-slide-next + .swiper-slide, .swiper-container-cube .swiper-slide-prev {
  pointer-events: auto;
  visibility: visible
}

.swiper-container-cube .swiper-cube-shadow {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: .6;
  -webkit-filter: blur(50px);
  filter: blur(50px);
  z-index: 0
}

.swiper-container-fade.swiper-container-free-mode .swiper-slide {
  -webkit-transition-timing-function: ease-out;
  -moz-transition-timing-function: ease-out;
  -ms-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out
}

.swiper-container-fade .swiper-slide {
  pointer-events: none;
  -webkit-transition-property: opacity;
  -moz-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity
}

.swiper-container-fade .swiper-slide .swiper-slide {
  pointer-events: none
}

.swiper-container-fade .swiper-slide-active, .swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto
}

.swiper-zoom-container {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  text-align: center
}

.swiper-zoom-container > canvas, .swiper-zoom-container > img, .swiper-zoom-container > svg {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain
}

.swiper-scrollbar {
  border-radius: 10px;
  position: relative;
  -ms-touch-action: none;
  background: rgba(0, 0, 0, .1)
}

.swiper-container-horizontal > .swiper-scrollbar {
  position: absolute;
  left: 1%;
  bottom: 3px;
  z-index: 50;
  height: 5px;
  width: 98%
}

.swiper-container-vertical > .swiper-scrollbar {
  position: absolute;
  right: 3px;
  top: 1%;
  z-index: 50;
  width: 5px;
  height: 98%
}

.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, .5);
  border-radius: 10px;
  left: 0;
  top: 0
}

.swiper-scrollbar-cursor-drag {
  cursor: move
}

.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  -webkit-transform-origin: 50%;
  -moz-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-animation: swiper-preloader-spin 1s steps(12) infinite;
  -moz-animation: swiper-preloader-spin 1s steps(12) infinite;
  animation: swiper-preloader-spin 1s steps(12) infinite
}

.swiper-lazy-preloader:after {
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E");
  background-position: 50%;
  -webkit-background-size: 100%;
  background-size: 100%;
  background-repeat: no-repeat
}

.swiper-lazy-preloader-white:after {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E")
}

@-webkit-keyframes swiper-preloader-spin {
  to {
    -webkit-transform: rotate(1turn)
  }
}

@keyframes swiper-preloader-spin {
  to {
    transform: rotate(1turn)
  }
}</style>
<style type="text/css">.security-right-title {
  height: 50px;
  padding-left: 30px;
  border-bottom: 1px solid #ddd
}

.security-right-title-icon  {
  float: left;
  width: 4px;
  height: 16px;
  margin-top: 18px;
  background-color: #00a1d6;
  border-radius: 4px
}

.security-right-title-text  {
  float: left;
  margin: 15px 0 0 5px;
  color: #00a1d6;
  font-size: 14px;
  cursor: default
}

.secuirty-rught-title-sub  {
  float: left;
  font-size: 12px;
  line-height: 50px;
  margin-left: 10px;
  color: #878787
}</style>

<style type="text/css">.continuity-dialog-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .6);
  z-index: 10000
}

.continuity-fade-enter-active {
  -webkit-animation: dialog-fadein .3s;
  animation: dialog-fadein .3s
}

.continuity-box {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1000
}

.continuity-header {
  height: 50px;
  border-bottom: 1px solid #e5e9ef;
  position: relative;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #222;
  text-align: center;
  line-height: 50px
}

.continuity-content {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  width: 400px;
  min-height: 361px;
  -webkit-animation: dialog-warp .3s;
  animation: dialog-warp .3s;
  border-radius: 4px;
  background: #fff
}

.continuity-user-image {
  margin-bottom: 20px;
  height: 36px
}

.continuity-avatar {
  width: 36px;
  border-radius: 50%
}

.continuity-avatar, .continuity-name {
  float: left;
  display: block;
  height: 36px
}

.continuity-name {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #222;
  line-height: 36px;
  margin-left: 14px
}

.continuity-title-static {
  height: 100%;
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #212121;
  margin-bottom: 16px
}

.continuity-close {
  display: block;
  width: 14px;
  height: 14px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAANhJREFUOBHNkzESwiAQRSGpPIytrSewpdDW8U46lmpB6wlsvZAVos+Zz0QS0NEmNBvY/x+7QIwZ7dge/HR/9LNvC0SLR/pGH601k3C3593Jz7VWimjQ4pEmgdYrd7VtdDFYX4ORQ4MWj0BWH4pd4WbpLlon1nI9UMlQg+AZBOUw5monr5IcowgiqSpewueZlCDk02Ez+WcUK1I13A4b/NRaF6J2hta6HfQqqhlquTdQTajdS5oE4t/h2XMmakfmPArWNnGh151uLURzI/EJAhQNWjz5JuOZPwDXF66M8ZXOvwAAAABJRU5ErkJggg==) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer
}

.continuity-bottom {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 15px 30px;
  height: 430px;
  overflow: hidden;
  overflow-y: scroll
}</style>
<style type="text/css">.tabs-wrapper {
  width: 100%
}

.tab-normal-item, .tabs-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

.tab-normal-item {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer
}

.tabs-normal-txt {
  text-align: center;
  font-size: 14px;
  color: #6d757a;
  padding: 0 10px 8px;
  border-bottom: 1px solid #fff
}

.active .tabs-normal-txt {
  color: #00a1d6;
  border-color: #00a1d6
}

.tab-disable {
  cursor: not-allowed
}

.tab-disable .tabs-normal-txt {
  color: #e5e9ef
}</style>
<style type="text/css">.big-continuity-card-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7
}

.big-continuity-card-name {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #212121;
  margin-bottom: 10px
}

.big-continuity-card-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 6px
}

.big-continuity-card-txt {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999
}

.big-continuity-card-btn-wrapper {
  margin-top: 10px;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end
}

.big-continuity-card-btn {
  width: 55px;
  height: 24px;
  border: 1px solid #00a1d6;
  border-radius: 4px;
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #00a1d6;
  text-align: center;
  line-height: 24px
}</style>
<style type="text/css">.common-noimg-warpper {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .6);
  z-index: 10
}

.common-dialog-fade-enter-active {
  -webkit-animation: dialog-fadein .3s;
  animation: dialog-fadein .3s
}

.common-noimg-box {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1000
}

.common-noimg-content {
  position: relative;
  width: 400px;
  min-height: 200px;
  background: #fff;
  -webkit-box-shadow: 0 3px 26px rgba(0, 0, 0, .9);
  box-shadow: 0 3px 26px rgba(0, 0, 0, .9);
  padding: 0 0 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  -webkit-animation: dialog-warp .3s;
  animation: dialog-warp .3s
}

.common-no-img-title {
  height: 49px;
  border-bottom: 1px solid #e5e9ef;
  position: relative;
  font-size: 16px;
  color: #222;
  line-height: 49px
}

.common-no-img-title, .common-noimg-txt {
  font-family: MicrosoftYaHei;
  text-align: center
}

.common-noimg-txt {
  margin-top: 30px;
  font-size: 14px;
  color: #757575;
  padding: 0 40px
}

.no-img-btn {
  width: 124px;
  height: 40px;
  margin: 0 auto;
  margin-top: 30px;
  background: #00a1d6;
  border-radius: 4px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  cursor: pointer
}

.dialog-close-icon {
  cursor: pointer;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAANhJREFUOBHNkzESwiAQRSGpPIytrSewpdDW8U46lmpB6wlsvZAVos+Zz0QS0NEmNBvY/x+7QIwZ7dge/HR/9LNvC0SLR/pGH601k3C3593Jz7VWimjQ4pEmgdYrd7VtdDFYX4ORQ4MWj0BWH4pd4WbpLlon1nI9UMlQg+AZBOUw5monr5IcowgiqSpewueZlCDk02Ez+WcUK1I13A4b/NRaF6J2hta6HfQqqhlquTdQTajdS5oE4t/h2XMmakfmPArWNnGh151uLURzI/EJAhQNWjz5JuOZPwDXF66M8ZXOvwAAAABJRU5ErkJggg==) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  right: 20px;
  top: 14px
}</style>
<style type="text/css">.pay-dialog-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .6);
  z-index: 10
}

.pay-fade-enter-active {
  -webkit-animation: dialog-fadein .3s;
  animation: dialog-fadein .3s
}

.pay-dialog-box {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1000
}

.pay-dialog-content {
  position: relative;
  width: 400px;
  height: 428px;
  background: #fff;
  -webkit-box-shadow: 0 3px 26px rgba(0, 0, 0, .9);
  box-shadow: 0 3px 26px rgba(0, 0, 0, .9);
  padding-top: 38px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  -webkit-animation: dialog-warp .3s;
  animation: dialog-warp .3s
}

.pay-dialog-close-icon {
  cursor: pointer;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAANhJREFUOBHNkzESwiAQRSGpPIytrSewpdDW8U46lmpB6wlsvZAVos+Zz0QS0NEmNBvY/x+7QIwZ7dge/HR/9LNvC0SLR/pGH601k3C3593Jz7VWimjQ4pEmgdYrd7VtdDFYX4ORQ4MWj0BWH4pd4WbpLlon1nI9UMlQg+AZBOUw5monr5IcowgiqSpewueZlCDk02Ez+WcUK1I13A4b/NRaF6J2hta6HfQqqhlquTdQTajdS5oE4t/h2XMmakfmPArWNnGh151uLURzI/EJAhQNWjz5JuOZPwDXF66M8ZXOvwAAAABJRU5ErkJggg==) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  right: 20px;
  top: 20px
}

.pay-dialog-title {
  font-size: 20px;
  color: #222;
  text-align: center;
  margin-bottom: 10px
}

.pay-dialog-subtitle {
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #6d757a;
  text-align: center;
  line-height: 20px
}

.pay-dialog-protocol {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 8px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

.pay-dialog-protocol-icon {
  cursor: pointer;
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTYgMTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE2IDE2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwQTFENjt9Cjwvc3R5bGU+Cjx0aXRsZT5jaGVja2JveF9zZWxlY3RlZDwvdGl0bGU+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8ZyBpZD0iUGFnZS0xIj4KCTxnIGlkPSLmlK/ku5jmiJDlip8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01OTQuMDAwMDAwLCAtMjkxLjAwMDAwMCkiPgoJCTxnIGlkPSLmiJDlip8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5NS4wMDAwMDAsIDE3My4wMDAwMDApIj4KCQkJPGcgaWQ9IuWkmumAiSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTkuMDAwMDAwLCAxMTguMDAwMDAwKSI+CgkJCQk8ZyBpZD0iR3JvdXAtNCI+CgkJCQkJPGcgaWQ9ImNoZWNrYm94X3NlbGN0ZWQiPgoJCQkJCQk8cGF0aCBpZD0iY2hlY2tib3hfc2VsZWN0ZWQiIGNsYXNzPSJzdDAiIGQ9Ik02LDkuNUw0LjgsOC4zYy0wLjQtMC40LTEuMS0wLjQtMS41LDBjLTAuNCwwLjQtMC40LDEsMCwxLjVsMS45LDEuOQoJCQkJCQkJQzUuNCwxMS45LDUuNywxMiw2LDEyYzAuMywwLDAuNi0wLjEsMC44LTAuM2w1LjktNS45YzAuNC0wLjQsMC40LTEuMSwwLTEuNWMtMC40LTAuNC0xLjEtMC40LTEuNSwwTDYsOS41eiBNMiwwaDEyCgkJCQkJCQljMS4xLDAsMiwwLjksMiwydjEyYzAsMS4xLTAuOSwyLTIsMkgyYy0xLjEsMC0yLTAuOS0yLTJWMkMwLDAuOSwwLjksMCwyLDB6Ii8+CgkJCQkJPC9nPgoJCQkJPC9nPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=);
  margin-right: 6px
}

.pay-dialog-protocol-icon-disable {
  cursor: pointer;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTYgMTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE2IDE2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0NDRDBENzt9Cjwvc3R5bGU+Cjx0aXRsZT5jaGVja2JveDwvdGl0bGU+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8ZyBpZD0iUGFnZS0xIj4KCTxnIGlkPSLmlK/ku5jmiJDlip8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01OTQuMDAwMDAwLCAtMjkxLjAwMDAwMCkiPgoJCTxnIGlkPSLmiJDlip8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5NS4wMDAwMDAsIDE3My4wMDAwMDApIj4KCQkJPGcgaWQ9IuWkmumAiSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTkuMDAwMDAwLCAxMTguMDAwMDAwKSI+CgkJCQk8ZyBpZD0iR3JvdXAtMiI+CgkJCQkJPHBhdGggaWQ9ImNoZWNrYm94IiBjbGFzcz0ic3QwIiBkPSJNMi41LDAuNWgxMWMxLjEsMCwyLDAuOSwyLDJ2MTFjMCwxLjEtMC45LDItMiwyaC0xMWMtMS4xLDAtMi0wLjktMi0ydi0xMQoJCQkJCQlDMC41LDEuNCwxLjQsMC41LDIuNSwwLjV6Ii8+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==)
}

.pay-dialog-protocol-txt {
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #99a2aa
}

.success-img {
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/success.94f7e27.png) no-repeat;
  background-size: 100% 100%
}

.fail-img, .success-img {
  width: 180px;
  height: 180px;
  margin: 0 auto;
  margin-top: 14px
}

.fail-img {
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/fail.b625aac.png) no-repeat;
  background-size: 100% 100%
}

.pay-bottom-btn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 20px
}

.pay-left-btn {
  background: #00a1d6;
  border-radius: 4px;
  color: #fff;
  margin-right: 10px
}

.pay-left-btn, .pay-right-btn {
  cursor: pointer;
  width: 124px;
  height: 40px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  text-align: center;
  line-height: 40px
}

.pay-right-btn {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #cbd0d8;
  border-radius: 4px;
  color: #6d757a;
  margin-left: 10px
}

.pay-left-btn-alone {
  margin-right: 0 !important
}</style>
<style type="text/css">.big-banner-warp {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 20px 20px 0;
  width: 789px;
  height: 233px;
  border-radius: 4px;
  overflow: hidden
}

.sipwer-link, .swiper-container {
  width: 100%;
  height: 100%
}

.sipwer-link {
  display: inline-block
}

.sipwer-link img {
  width: 100%;
  height: 100%
}

.big-banner-warp .swiper-pagination {
  text-align: right !important
}

.big-banner-warp .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: #fff !important;
  opacity: 1
}

.big-banner-warp .swiper-pagination-bullets {
  left: -24px
}

.big-banner-warp .swiper-pagination-bullet-active {
  width: 18px;
  height: 18px;
  background-color: transparent;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAALGPC/xhBQAAAeNJREFUOBGtVE1LAlEUvTNqo2ZfQuGmFhXuahO0iVZK0KJF1C+IxPoB/Yq2fYkt2wTtWgRRtKg2QZuknQW2KSosJz8aHZ3ueTqDkzkEdUHfe/eec2bm3Pce0Q9hGEZE1/UNHjP8MyPTyEV+oNhT2Wx2rFAoXpjMdiMwwDazJXPBpAhVykfk6fB8lDRaS+Uo8c7l51wdMtBD8V6D1sd6qMunEGMrjJ2VJOkUACEE9b5A5zVEdp/yFDt/ItLMR7SOyWiIlkMBIfaWL0wEg8GUDJiieLctkRNnEeBjjMEDwRFczsn4JL/fN3X3WRMAABHxcDepC4NirGfs/xADB1xoyNVqdR6Q9ZtXG3JnckB4AU/axdl7UZSgIbtcrjmshLFNjJWrZzJNb0rXp2x8enHY8knXa7cSWoyqtJduwbckuFnJ6YbRXOQ32VRVNQGz3Y02elpI3xLwzGo90QOXl9xut2g9oDI7/yg4/LpOkciotJ+rWBBNq4StBU9g9iES2GyOwfsKnZKOX9D6IUXxbLErOELiyMAjTE7QytGDe0ctW5G/wJjpN1NRGVu8WCxdjnhlwo79bSTHfQIKLjTEzta0z1WYjm3/G7HmIyK4LPlvh9b2JX+5RmxC5gINsF1sZa2MDjldbF+7aGZAKpT2hAAAAABJRU5ErkJggg==) no-repeat !important;
  background-size: 100% 100%;
  vertical-align: text-bottom
}</style>
<style type="text/css">.big-privilege-warp {
  position: relative;
  margin: 0 20px;
  padding: 20px 0;
  border-bottom: 1px solid #e5e9ef
}

.big-privilege-title {
  position: relative;
  font-size: 20px;
  color: #222;
  vertical-align: top;
  margin-bottom: 18px
}

.right-more-btn {
  display: inline-block;
  position: absolute;
  top: 3px;
  right: 0;
  height: 22px;
  width: 40px;
  padding-right: 10px;
  border: 1px solid #ced3db;
  text-align: center;
  border-radius: 4px;
  line-height: 23px;
  color: #6d757a;
  cursor: pointer;
  font-size: 12px
}

.right-more-btn:hover {
  border: 1px solid #00a1d6;
  color: #00a1d6
}

.m-arrow {
  position: absolute;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) -26px -726px no-repeat;
  width: 18px;
  height: 22px;
  top: 1px;
  right: 0
}

.right-more-btn:hover .m-arrow {
  background-position: -90px -726px
}

.big-privilege-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around
}

.big-privilege-item {
  display: inline-block;
  width: 85px
}

.privilege {
  display: inline-block;
  margin-left: 4.5px;
  width: 76px;
  height: 76px;
  position: relative
}

.privilege img {
  width: 100%;
  height: 100%
}

.privilege-text {
  text-align: center;
  font-size: 14px;
  color: #222;
  line-height: 14px
}

.year-icon {
  display: inline-block;
  width: 20px;
  height: 14px;
  background: url(data:image/png;base64,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) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 5px;
  right: 0
}</style>
<style type="text/css">.big-watch-wrapper {
  position: relative;
  margin: 0 20px;
  padding: 20px 0;
  border-bottom: 1px solid #e5e9ef
}

.big-watch-title {
  position: relative;
  font-size: 20px;
  color: #222;
  vertical-align: top;
  margin-bottom: 18px
}</style>
<style type="text/css">.member-list-item img[lazy=loading] {
  display: inline-block
}

.member-list-item img[lazy=error], .member-list-item img[lazy=loading] {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%)
}

.member-list-flex-warp {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: left;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start
}

.member-list-item {
  display: inline-block;
  width: 142px;
  margin-right: 20px
}

.member-list-img {
  display: inline-block;
  position: relative;
  width: 142px;
  height: 190px;
  background: #e5e9ef;
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden
}

.member-list-item-text {
  font-size: 14px;
  color: #222;
  line-height: 16px;
  text-align: left
}

.member-list-item-subtext {
  text-align: left;
  margin-top: 8px;
  font-size: 12px;
  color: #99a2aa;
  line-height: 12px
}

.member-list-video-num {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, .4)));
  background-image: linear-gradient(-180deg, transparent, rgba(0, 0, 0, .4));
  border-radius: 0 0 4px 4px;
  width: 100%;
  height: 44px;
  line-height: 44px;
  left: 0;
  padding: 0 9px;
  bottom: 0
}

.member-list-exclusive-icon, .member-list-video-num {
  display: block;
  font-size: 12px;
  color: #fff;
  position: absolute
}

.member-list-exclusive-icon {
  background: #fb7299;
  border-radius: 2px;
  text-align: center;
  padding: 1px 4px;
  top: 4px;
  right: 4px
}</style>
<style type="text/css">.big-watch-wrapper {
  position: relative;
  margin: 0 20px;
  padding: 20px 0;
  border-bottom: 1px solid #e5e9ef
}

.big-watch-title {
  position: relative;
  font-size: 20px;
  color: #222;
  vertical-align: top;
  margin-bottom: 18px
}</style>
<style type="text/css">.big-game-gift-warp img[lazy=loading] {
  display: inline-block
}

.big-game-gift-warp img[lazy=error], .big-game-gift-warp img[lazy=loading] {
  width: 71px;
  height: 71px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%)
}

.big-game-gift-warp {
  position: relative;
  margin: 0 20px;
  padding: 20px 0;
  border-bottom: 1px solid #e5e9ef
}

.big-watch-title {
  position: relative;
  font-size: 20px;
  color: #222;
  vertical-align: top;
  margin-bottom: 18px
}

.right-more-btn {
  display: inline-block;
  position: absolute;
  top: 3px;
  right: 0;
  height: 22px;
  width: 40px;
  padding-right: 10px;
  border: 1px solid #ced3db;
  text-align: center;
  border-radius: 4px;
  line-height: 23px;
  color: #6d757a;
  cursor: pointer;
  font-size: 12px
}

.right-more-btn:hover {
  border: 1px solid #00a1d6;
  color: #00a1d6
}

.m-arrow {
  position: absolute;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) -26px -726px no-repeat;
  width: 18px;
  height: 22px;
  top: 1px;
  right: 0
}

.right-more-btn:hover .m-arrow {
  background-position: -90px -726px
}

.big-game-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start
}

.big-game-link {
  margin-right: 20px
}

.big-game-img, .big-game-link {
  display: inline-block;
  width: 142px
}

.big-game-img {
  position: relative;
  height: 71px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: #e5e9ef;
  overflow: hidden
}

.big-game-gift-text {
  text-align: left;
  font-size: 14px;
  color: #222;
  line-height: 18px;
  margin-bottom: 8px
}

.big-game-gift-subtext {
  text-align: left;
  font-size: 12px;
  color: #f25d8e;
  line-height: 14px;
  margin-bottom: 8px
}

.big-game-gift-money {
  text-align: left;
  font-size: 12px;
  color: #99a2aa;
  line-height: 12px;
  text-decoration: line-through
}</style>
<style type="text/css">.big-pendant-warp {
  position: relative;
  margin: 0 20px;
  padding: 20px 0;
  border-bottom: 1px solid #e5e9ef
}

.big-watch-title {
  position: relative;
  font-size: 20px;
  color: #222;
  vertical-align: top;
  margin-bottom: 18px
}

.right-more-btn {
  display: inline-block;
  position: absolute;
  top: 3px;
  right: 0;
  height: 22px;
  width: 40px;
  padding-right: 10px;
  border: 1px solid #ced3db;
  text-align: center;
  border-radius: 4px;
  line-height: 23px;
  color: #6d757a;
  cursor: pointer;
  font-size: 12px
}

.right-more-btn:hover {
  border: 1px solid #00a1d6;
  color: #00a1d6
}

.m-arrow {
  position: absolute;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png) -26px -726px no-repeat;
  width: 18px;
  height: 22px;
  top: 1px;
  right: 0
}

.right-more-btn:hover .m-arrow {
  background-position: -90px -726px
}

.big-pendant-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  -ms-flex-pack: distribute;
  justify-content: space-around
}

.big-pendant-link {
  display: inline-block;
  width: 100px;
  position: relative
}

.big-user-avatar {
  border-radius: 24px;
  display: block;
  width: 48px;
  height: 48px;
  margin-top: 25px;
  margin-bottom: 30px;
  margin-left: 26px
}

.big-user-pendant {
  position: absolute;
  width: 88px;
  height: 96px;
  left: 50%;
  top: 0;
  -webkit-transform: translate(-50%);
  transform: translate(-50%)
}

.big-pendant-test {
  font-size: 14px;
  color: #222;
  line-height: 14px
}</style>
<style type="text/css">.bottom-help {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 10px 12px;
  font-size: 12px
}

.bottom-help a {
  display: block;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #00a1d6
}

.bottom-help a:hover {
  color: #f25d8e
}

.array-bottom {
  margin-left: 22px
}</style>
<style type="text/css">.big-gift-dialog img[src=""] {
  opacity: 0
}

.big-gift-dialog {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .6);
  z-index: 1000
}

.gift-fade-enter-active {
  -webkit-animation: dialog-fadein .3s;
  animation: dialog-fadein .3s
}

.big-gift-box {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1000
}

.big-gift-content {
  position: relative;
  width: 375px;
  height: 317px;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/gift-bg.5fb1e76.png);
  background-size: 100% 100%;
  padding-top: 180px;
  padding-left: 34.5px;
  -webkit-animation: dialog-warp .3s;
  animation: dialog-warp .3s
}

.big-gift-content, .big-gift-title {
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

.big-gift-title {
  height: 36px;
  padding: 0 84px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 8px
}

.big-gift-img {
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/loadTV.99606e2.gif) no-repeat;
  background-size: 100% 100%;
  overflow: hidden
}

.big-gift-name {
  width: 126px;
  margin-left: 10px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #000;
  line-height: 14px
}

.big-txt {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #6d757a;
  line-height: 12px;
  text-align: center
}

.big-txt i {
  color: #fb7299;
  padding: 0 5px
}

.big-gift-btn {
  width: 100px;
  height: 32px;
  margin: 0 auto;
  background: #f25d8e;
  text-align: center;
  line-height: 32px;
  margin-top: 16px;
  color: #fff;
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  cursor: pointer
}
</style>

<style type="text/css">
.tabs-nav{
  height: 50px;
  border-bottom: 1px solid #ddd;
  line-height: 50px
}

.tabs-nav-item {
  float: left;
  font-size: 14px;
  text-align: center;
  margin-left: 38px !important;
  min-width: 56px;
  color: #222;
  cursor: pointer
}

.tabs-nav .active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowY2YzZmZkNy05MWYxLWJjNDktYTMzNy0xZWE1ZDlmOTRlNzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjNDQkVEOURCNUVCMTFFNUIyRkNBMTcwQUQzNUMxRTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjNDQkVEOUNCNUVCMTFFNUIyRkNBMTcwQUQzNUMxRTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5NDM5MzQ4LTU3MGYtZDI0NC1hOThiLTlkNjJjYmFkZTJlNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowY2YzZmZkNy05MWYxLWJjNDktYTMzNy0xZWE1ZDlmOTRlNzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6k9jasAAAAMElEQVR42mJkWHiNAQhEgXgREMcB8WsmIMEFxJuB2ANKc4EElwOxOQMEgOjlAAEGAPtdBvsKf21nAAAAAElFTkSuQmCC) bottom no-repeat;
  border-bottom: 1px solid #00a1d6;
  color: #00a1d6
}
</style>
<style type="text/css">
.points-header-warp {
  margin-top: 40px;
  padding: 0 20px;
  height: 145px;
  width: 789px;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/score.2ea6462.png) no-repeat;
  position: relative;
  text-align: center
}

.points-header-box {
  padding-top: 30px
}

.points-header-box span {
  font-size: 30px;
  color: #222
}

.points-header-box .points-num {
  margin-left: 15px;
  color: #00a1d6
}
</style>
<style type="text/css">
.points-exchange-warp {
  padding: 0 20px;
  margin-top: 30px
}

.points-exchange-title {
  font-size: 20px;
  color: #222
}

.points-exchange-box {
  margin-top: 20px;
  width: 789px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.points-box {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 380px;
  height: 140px;
  border-radius: 4px;
  border: 1px solid #d1d1d1;
  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, .16);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .16);
  display: inline-block;
  padding: 40px 30px 40px 50px
}

.points-info {
  float: left;
  width: 178px
}

.points-info p {
  width: 100%;
  font-size: 24px;
  color: #222
}

.points-num {
  display: inline-block;
  color: #00a1d6;
  font-size: 18px
}

.points-text {
  display: inline-block;
  font-size: 14px;
  color: #99a2aa
}

.points-btn {
  cursor: pointer;
  float: left;
  width: 118px;
  height: 54px;
  line-height: 54px;
  text-align: center;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid #00a1d6;
  background-color: #00a1d6;
  color: #fff
}

.points-btn:hover {
  background-color: #00b5e5
}
</style>
<style type="text/css">
.points-pendant-warp {
  padding-bottom: 30px;
  margin: 0 20px 30px;
  border-bottom: 1px solid #e5e9ef
}

.points-pendant-title {
  margin: 20px 0
}

.points-pendant-title p {
  font-size: 20px;
  color: #222
}

.points-pendant-content {
  margin-top: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.points-pendant-item {
  display: block;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  cursor: pointer;
  width: 158px;
  text-align: center;
  position: relative
}

.points-pendant-item:hover {
  border-color: #00a1d6
}

.user-avatar {
  border-radius: 24px;
  display: block;
  width: 48px;
  height: 48px;
  margin: 30px auto
}

.user-pendant {
  position: absolute;
  width: 84px;
  height: 84px;
  left: 37px;
  top: 12px
}

.pendant-name {
  color: #222;
  font-size: 14px;
  line-height: 2em;
  margin: -7px auto 5px;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis
}
</style>

<style type="text/css">
.points-record-warp {
  border-bottom: 1px solid #e5e9ef;
  padding: 20px 0 40px;
  margin: 0 20px
}

.points-record-title {
  font-size: 20px;
  color: #222
}

.points-record-title span {
  font-size: 12px;
  color: #aaa;
  font-weight: 400;
  margin-left: 14px
}

.viptable {
  margin: 16px 0 20px;
  font-size: 12px;
  color: #222;
  border-collapse: collapse;
  border-width: 1px;
  border-color: #e5e9ef;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

.viptable tr th {
  height: 42px;
  line-height: 42px;
  background-color: #f2f4f6
}

.viptable tr th, table.viptable td {
  border: 1px solid #e5e9ef;
  text-align: center
}

table.viptable td {
  height: 38px;
  line-height: 38px
}

.viptable tr:nth-child(odd) td {
  background-color: #fff
}

.viptable tr:nth-child(2n) td {
  background-color: #fbfbfb
}

table.viptable td:first-child {
  width: 160px
}

table.viptable td:nth-child(4) {
  width: 200px
}

.points-no-data {
  font-size: 14px;
  text-align: center
}

.points-record-warp .el-pagination span {
  float: right !important
}
</style>
<style type="text/css">
.security-right-bottom{
  padding: 0 20px
}

.face-container {
  padding-top: 10px
}
</style>
<style type="text/css">
.pos-center{
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%)
}

.face-tool {
  padding: 20px 0
}

.tool-container {
  width: 200px;
  height: 200px;
  border: 1px solid #e5e9ef;
  border-radius: 50%;
  position: relative;
  margin: 0 auto
}

.tool-face-box {
  width: 168px;
  height: 168px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%)
}

.tool-change-face {
  background: #00a1d6;
  border: 1px solid #00a1d6;
  position: absolute;
  left: -27px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%)
}

.tool-change-face span {
  color: #fff
}

.tool-uninstall-pendant {
  cursor: pointer;
  background: #fff;
  border: 1px solid #ccd0d7;
  position: absolute;
  right: -27px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%)
}

.tool-uninstall-pendant span {
  color: #6d757a
}

.tool-uninstall-pendant.disable {
  cursor: not-allowed
}

.tool-uninstall-pendant.disable span {
  color: #eee
}

.tool-change-face, .tool-uninstall-pendant {
  width: 54px;
  height: 54px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 50%
}

.tool-change-face span , .tool-uninstall-pendant span {
  width: 2em;
  font-size: 14px;
  line-height: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%)
}
</style>
<style type="text/css">
.pos-center {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%)
}

.tool-face-box {
  width: 168px;
  height: 168px;
  position: relative
}

.tool-user-face {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%)
}

.tool-pendant {
  width: 168px;
  height: 168px;
  display: block;
  position: relative;
  z-index: 1
}
</style>
<style type="text/css">
.face-nav{
  margin: 0 auto;
  border-bottom: 1px solid #e5e9ef
}

.face-nav > div {
  padding: 6px 0;
  float: left;
  margin-right: 25px;
  line-height: 20px
}

.face-nav > div a {
  color: #000;
  font-size: 14px
}

.face-nav > div :last-child {
  margin-right: 0
}

.face-nav > .active {
  padding: 6px 0 5px;
  border-bottom: 1px solid #00a1d6;
  position: relative
}

.face-nav > .active a {
  color: #00a1d6
}

.face-nav > .active :after {
  width: 5px;
  height: 3px;
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowY2YzZmZkNy05MWYxLWJjNDktYTMzNy0xZWE1ZDlmOTRlNzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjNDQkVEOURCNUVCMTFFNUIyRkNBMTcwQUQzNUMxRTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjNDQkVEOUNCNUVCMTFFNUIyRkNBMTcwQUQzNUMxRTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5NDM5MzQ4LTU3MGYtZDI0NC1hOThiLTlkNjJjYmFkZTJlNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowY2YzZmZkNy05MWYxLWJjNDktYTMzNy0xZWE1ZDlmOTRlNzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6k9jasAAAAMElEQVR42mJkWHiNAQhEgXgREMcB8WsmIMEFxJuB2ANKc4EElwOxOQMEgOjlAAEGAPtdBvsKf21nAAAAAElFTkSuQmCC)
}
</style>
<style type="text/css">
.pendant-mail-margin{
  margin-top: 30px
}

.pendant-mail-margin h3{
  font-size: 14px;
  color: #000;
  line-height: 20px;
  font-weight: 700;
  margin-bottom: 20px
}
</style>
<style type="text/css">
.pendant-nav li{
  float: left;
  margin-right: 15px
}

.pendant-nav li div {
  font-size: 12px;
  line-height: 20px;
  padding: 0 5px;
  border-radius: 100px;
  color: #000;
  cursor: pointer
}

.pendant-nav li div.active {
  background: #00a1d6;
  color: #fff
}

.pendant-nav li :last-child {
  margin-right: 0
}
</style>
<style type="text/css">
.pendant-list li {
  width: 158px;
  height: 158px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  float: left;
  margin-right: 52px;
  margin-bottom: 30px;
  cursor: pointer
}

.pendant-list li .pendant-box {
  width: 84px;
  height: 84px;
  position: relative;
  margin: 12px auto 0
}

.pendant-list li .pendant-box img[data=face] {
  border-radius: 50%;
  width: 48px;
  height: 48px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -24px 0 0 -24px
}

.pendant-list li .pendant-box img[data=pendant] {
  width: 84px;
  height: 84px;
  position: relative;
  z-index: 1
}

.pendant-list li .pendant-name {
  font-size: 14px;
  color: #000;
  line-height: 20px;
  padding: 0 12px;
  text-align: center;
  margin-top: 8px
}

.pendant-list li :last-child, .pendant-list li :nth-child(4n) {
  margin-right: 0
}

.pendant-list li :hover {
  border: 1px solid #00a1d6
}
</style>
<style type="text/css">
.user-setting-warp .padding-dom {
  width: 789px;
  height: 39px;
  border-bottom: 1px solid #e5e9ef;
  margin-bottom: 40px
}

.el-form-item__content {
  line-height: 30px
}

.user-local, .user-my-aim, .user-my-btn, .user-my-date, .user-my-love, .user-my-sex, .user-my-sign, .user-nick-name, .user-nick-rel-name {
  float: left;
  width: 789px
}

.user-setting-warp {
  padding: 20px 20px 0;
  position: relative
}

.el-form-item__label {
  width: 95px;
  text-align: right;
  margin-right: 20px;
  float: left;
  line-height: 30px;
  padding: 0
}

.user-nick-name .el-input, .user-nick-name .el-input__inner {
  float: left;
  width: 225px;
  height: 30px;
  margin-right: 40px
}

.nick-name-not {
  color: #aaa
}

.user-my-sign .el-textarea, .user-my-sign .el-textarea .el-textarea__inner {
  float: left;
  width: 618px;
  height: 88px;
  resize: none
}

.user-my-sex .el-radio-button__inner {
  margin-right: 20px;
  padding: 5px 8px;
  border: 1px solid #bfcbd9;
  border-radius: 5px !important;
  background: #f4f4f4;
  color: #717171
}

.user-my-date .el-input__inner {
  height: 30px;
  color: #b7b7b7
}

.user-local .el-select {
  margin-right: 30px
}

.el-select-dropdown {
  width: 210px !important
}

.user-local .el-input__inner, .user-love .el-input__inner, .user-my-aim .el-input__inner, .user-my-love .el-input__inner {
  color: #99a2aa
}

.user-my-btn-warp {
  float: left;
  width: 789px;
  height: 36px;
  position: relative
}

.user-my-btn .el-button--primary {
  width: 110px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: #00a1d6 !important
}

.user-my-btn .el-button--primary:hover {
  background-color: #00b5e5 !important
}

.setting-no-data {
  width: 800px;
  height: 500px;
  position: relative
}

.loading-icon {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/loadTV.99606e2.gif) no-repeat;
  background-size: 100% 100%
}

.userinfo-username {
  font-size: 14px;
  color: #898989
}

.user-setting-warp .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background-color: #22a1d6 !important;
  border-color: #22a1d6 !important
}
</style>
<style type="text/css">
.dialog-wrap{
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .6);
  z-index: 1000
}

.dialog-fade-enter-active {
  -webkit-animation: dialog-fadein .3s;
  animation: dialog-fadein .3s
}

.dialog-wrap-box {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1000
}

.dialog-contnent {
  width: 400px;
  height: 335px;
  background: #fff;
  -webkit-box-shadow: 0 3px 26px rgba(0, 0, 0, .9);
  box-shadow: 0 3px 26px rgba(0, 0, 0, .9);
  border-radius: 4px;
  -webkit-animation: dialog-warp .3s;
  animation: dialog-warp .3s
}

.dialog-title {
  width: 360px;
  height: 50px;
  border-bottom: 1px solid #e5e9ef;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 20px
}

.dialog-title-txt {
  font-size: 16px;
  color: #222
}

.dialog-title-icon {
  cursor: pointer;
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAANhJREFUOBHNkzESwiAQRSGpPIytrSewpdDW8U46lmpB6wlsvZAVos+Zz0QS0NEmNBvY/x+7QIwZ7dge/HR/9LNvC0SLR/pGH601k3C3593Jz7VWimjQ4pEmgdYrd7VtdDFYX4ORQ4MWj0BWH4pd4WbpLlon1nI9UMlQg+AZBOUw5monr5IcowgiqSpewueZlCDk02Ez+WcUK1I13A4b/NRaF6J2hta6HfQqqhlquTdQTajdS5oE4t/h2XMmakfmPArWNnGh151uLURzI/EJAhQNWjz5JuOZPwDXF66M8ZXOvwAAAABJRU5ErkJggg==) no-repeat
}

.dialog-content {
  width: 360px;
  height: 270px;
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px
}

.fail-btn {
  margin-top: 20px !important
}

.dialog-success-img {
  width: 118px;
  height: 124px;
  margin: 0 auto;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/success.000f491.png) no-repeat
}

.dialog-fail-img {
  width: 155px;
  height: 118px;
  margin: 0 auto;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/fail.2b4ac36.png) no-repeat
}

.dialog-success-explain {
  margin-top: 32px;
  text-align: center;
  font-size: 14px;
  color: #212121
}

.dialog-fail-explain {
  margin-top: 18px;
  text-align: center;
  font-size: 14px;
  color: #212121
}

</style>