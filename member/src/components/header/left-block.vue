<template>
  <div class="left-block">
    <i class="logo bcc-iconfont bcc-icon-logo"></i>
    <a href="//www.bilibili.com" target="_blank" class="main-site">
      <i class="bcc-iconfont bcc-icon-icon_dingdao_zhuzhan"></i>
      主站
    </a>
  </div>
</template>

<script>
export default {
  name:"left-block",

}
</script>

<style>
.bcc-icon-logo:before {
    content: "\e661";
}

.header .left-block .logo{
    font-size: 26px;
    color: #00a1d6;
    cursor: pointer;
}
a {
text-decoration:none;
 }
 .bcc-iconfont {
  font-family: "bcc-iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header .left-block .logo {
    font-size: 26px;
    color: #00a1d6;
    cursor: pointer;
}
.bcc-iconfont {
    font-family: "bcc-iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>