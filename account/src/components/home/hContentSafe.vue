<!-- 作者：欧阳苏蓉 首页-账号安全 -->
<template>
  <div class="h-content-safe">

    <!--  邮箱  -->
    <div class="h-safe-list" v-if="email">
      <div class="h-safe-icon position-0"></div>
      <div class="h-safe-msg">
        <p  class="h-safe-title">我的邮箱</p>
        <p class="h-safe-desc">绑定邮箱后即可使用邮箱登录</p> <!---->
        <span class="h-safe-nobtn">已绑定</span>
        <span class="h-safe-a">更改邮箱&gt;</span></div>
    </div>
    <div class="h-safe-list" v-else>
      <div class="h-safe-icon position-0-no"></div>
      <div class="h-safe-msg">
        <p class="h-safe-title">首次绑定邮箱，获得20经验值</p>
        <p class="h-safe-desc">绑定邮箱后即可使用邮箱登录</p>
        <span class="h-safe-btn">去绑定</span> <!----> <!---->
      </div>
    </div>

    <!--  手机  -->
    <div class="h-safe-list" v-if="tel">
      <div class="h-safe-icon position-1"></div>
      <div class="h-safe-msg"><p class="h-safe-title">我的手机</p>
        <p class="h-safe-desc">绑定手机后即可使用手机号登录</p>
        <span class="h-safe-nobtn">已绑定</span>
        <span class="h-safe-a">更改手机&gt;</span>
      </div>
    </div>
    <div class="h-safe-list" v-else>
      <div class="h-safe-icon position-1-no"></div>
      <div class="h-safe-msg">
        <p class="h-safe-title">首次绑定手机，获得20经验值</p>
        <p class="h-safe-desc">绑定手机后即可使用手机号登录</p>
        <span class="h-safe-btn">去绑定</span> <!----> <!---->
      </div>
    </div>

    <!--  密保  -->
    <div class="h-safe-list" v-if="safe_question">
      <div class="h-safe-icon position-2"></div>
      <div class="h-safe-msg"><p class="h-safe-title">我的密保</p>
        <p class="h-safe-desc">设置密保，账号更安全</p>
        <span class="h-safe-nobtn">已设置</span>
        <span class="h-safe-a">查看并设置&gt;</span>
      </div>
    </div>
    <div class="h-safe-list" v-else>
      <div class="h-safe-icon position-2-no"></div>
      <div class="h-safe-msg">
        <p class="h-safe-title">首次设置密保，获得30经验值</p>
        <p class="h-safe-desc">设置密保，账号更安全</p>
        <span class="h-safe-btn">去设置</span>
        <!----> <!---->
      </div>
    </div>

    <!--  实名认证  -->
    <div class="h-safe-list" v-if="identify_card">
      <div class="h-safe-icon position-3"></div>
      <div class="h-safe-msg"><p class="h-safe-title">我的实名认证</p>
        <p class="h-safe-desc">实名认证成功后，可享受开通直播间等服务</p>
        <span class="h-safe-nobtn">已设置</span>
        <span class="h-safe-a">查看并设置&gt;</span>
      </div>
    </div>
    <div class="h-safe-list" v-else>
      <div class="h-safe-icon position-3-no"></div>
      <div class="h-safe-msg">
        <p class="h-safe-title">首次实名认证，获得50经验值</p>
        <p class="h-safe-desc">实名认证成功后，可享受开通直播间等服务</p>
        <span class="h-safe-btn">去认证</span>
        <!----> <!---->
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "h-content-safe",
  data() {
    return {
      email: true,
      tel: true,
      safe_question: false,
      identify_card: false
    }
  }

}
</script>

<style>

</style>