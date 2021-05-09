<template>
  <div id="app" class="app_wrap">
    <!--    头部    -->
    <cc-header/>
    <div id="root">
      <!--    侧边栏   -->
      <cc-nav-wrap/>
      <div id="cc-body" class="cc-body  is-layout">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>

import CcHeader from "@/components/header/cc-header";
import CcNavWrap from "@/components/left/cc-nav-wrap";

export default {
  name: "App",
  components: {
    CcNavWrap,
    CcHeader
  },
}
</script>

<style>
@import "assets/css/home/iconfont.css";
@import "assets/css/nav.css";
@import "assets/css/article/videoFrame.css";

@import "assets/css/home/nav.css";
@import "assets/css/home/two.css";
@import "assets/css/home/three.css";
@import "assets/css/home/creativecenter.css";
@import "assets/css/home/one.css";

@import "assets/css/fans/one.css";
</style>

<style type="text/css">
li {
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