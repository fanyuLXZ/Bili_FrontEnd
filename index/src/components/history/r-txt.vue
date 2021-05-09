<!--  作者：欧阳苏蓉 历史记录 视频基本信息  -->
<template>
  <div class="r-txt">
    <a target="_blank" href="https://www.bilibili.com/bangumi/play/ss34053?t=861" class="title">{{ item.title }}</a>
    <p class="subtitle"><span></span></p>
    <div class="w-info">
      <div class="time-wrap">
        <i class="device bilifont bili-PC"></i>
        <span class="pro-txt progress">看到 <span></span> {{ item.progress }} </span>
      </div>
      <span>
        <a href="//space.bilibili.com/304710451">
          <div class="lazy-img userpic">
            <img alt="" src="//i1.hdslb.com/bfs/face/e02104b2dd3cd26f990d15aa5325632750b945b9.jpg@20w_20h_1c.webp">
          </div>
          <span class="username">{{ item.authorName }}</span>
        </a>
        <span class="name">{{ item.tagName }}</span>
      </span>
    </div>
    <i class="history-delete bilifont bili-shanchu"></i></div>
</template>

<script>
export default {
  name: "r-txt",

  props:{
    item:Object
  }
}
</script>

<style>

</style>