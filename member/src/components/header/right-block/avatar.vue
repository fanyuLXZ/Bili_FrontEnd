<template>
  <span>
    <a v-if="is_login" href="//space.bilibili.org" target="_blank" class="avatar el-popover__reference"
       aria-describedby="el-popover-7498" tabindex="0">
      <img :src="head_img">
    </a>
    <a v-else class="avatar el-popover__reference" href="//passport.bilibili.org">
      <span><div class="unlogin-avatar">登录</div></span>
    </a>
  </span>
</template>

<script>
export default {
  name: "avatar",
  props: ["head_img", "is_login"]
}
</script>

<style>
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
</style>