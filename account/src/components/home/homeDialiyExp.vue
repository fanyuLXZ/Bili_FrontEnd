<!--  作者：欧阳苏蓉  首页-每日奖励  -->
<template>
  <div>
    <div class="home-daily-task-warp" style="">
      <span class="home-dialy-task-title">每日奖励</span>
      <span class="home-dialy-task-tips" style="display: none;">成为正式会员才能获得每日奖励哦</span>
      <div class="home-dialiy-exp">
        <!--  每日登录  -->
        <div class="home-dialy-exp-item" v-if="isLogin">
          <div class="home-dialy-exp-icon position-ok"></div>
          <p class="re-exp-info">每日登录</p>
          <p class="re-exp-getexp">5经验值到手</p>
          <div class="h-line"></div>
        </div>
        <div class="home-dialy-exp-item" v-else >
          <div class="home-dialy-exp-icon position-rest">
            <i class="home-dialiy-exp-i">5</i>
            <i class="home-dialiy-exp-i-2">EXP</i>
          </div>
          <p class="re-exp-info">每日登录</p>
          <p class="re-exp-none">未完成</p>
        </div>

        <!--  每日观看视频  -->
        <div class="home-dialy-exp-item" v-if="watch">
          <div class="home-dialy-exp-icon position-ok"><!----> <!----></div>
          <p class="re-exp-info">每日观看视频</p>
          <p class="re-exp-getexp">5经验值到手</p>
          <div class="h-line"></div>
        </div>
        <div class="home-dialy-exp-item" v-else >
          <div class="home-dialy-exp-icon position-rest">
            <i class="home-dialiy-exp-i">5</i>
            <i class="home-dialiy-exp-i-2">EXP</i>
          </div>
          <p class="re-exp-info">每日观看视频</p>
          <p class="re-exp-none">未完成</p>
        </div>

        <!--  每日投币  -->
        <div class="home-dialy-exp-item" v-if="coins===50">
          <div class="home-dialy-exp-icon position-ok"><!----> <!----></div>
          <p class="re-exp-info">每日投币</p>
          <p class="re-exp-getexp">50经验值到手</p>
          <div class="h-line"></div>
        </div>
        <div class="home-dialy-exp-item" v-else>
          <div class="home-dialy-exp-icon position-rest">
            <i class="home-dialiy-exp-i">50</i>
            <i class="home-dialiy-exp-i-2">EXP</i>
          </div>
          <p class="re-exp-info">每日投币</p>
          <p class="re-exp-none">已获得{{coins}}/50</p>
          <div class="h-line"></div>
        </div>

        <!--  每日分享视频  -->
        <div class="home-dialy-exp-item" v-if="share">
          <div class="home-dialy-exp-icon position-ok"><!----> <!----></div>
          <p class="re-exp-info">每日分享视频(客户端)</p>
          <p class="re-exp-getexp">5经验值到手</p>
          <div class="h-line"></div>
        </div>
        <div class="home-dialy-exp-item" v-else>
          <div class="home-dialy-exp-icon position-rest">
            <i class="home-dialiy-exp-i">5</i>
            <i class="home-dialiy-exp-i-2">EXP</i>
          </div>
          <p class="re-exp-info">每日分享视频(客户端)</p>
          <p class="re-exp-none">未完成</p> <!---->
        </div>
      </div>
    </div>
    <div class="loading-icon-box" style="display: none;">
      <div class="loading-icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-dialy-exp-item",

  props:{
    isLogin: Boolean,
    watch:Boolean,
    coins:Number,
    share:Boolean,
  },
}
</script>

<style>

</style>