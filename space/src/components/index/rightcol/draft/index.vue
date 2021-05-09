<template>
  <!-- 创作中心插件 -->
  <div v-show="_bili_space_state === 'owner'"
       class="section i-m">
    <div class="i-m-r1">
      <a v-rep="'space_creatorButton_click'"
         class="i-m-title"
         href="https://member.bilibili.com/platform/home"
         target="_blank">
        <span class="icon-i-title"></span>
        <span class="icon-m-ra"></span>
      </a>
    </div>
    <div class="i-m-r2 clearfix">
      <a v-rep="'space_viedoUploadButton_click'"
         class="i-m-btn i-m-upload"
         href="https://member.bilibili.com/platform/upload/video/frame"
         target="_blank">
        <span class="i-m-u-icon icon"></span>
        <span class="i-m-text">视频投稿</span>
      </a>
      <a v-rep="'space_videoManageButton_click'"
         class="i-m-btn i-m-v"
         href="https://member.bilibili.com/platform/upload-manager/article"
         target="_blank">
        <span class="i-m-v-icon icon"></span>
        <span class="i-m-text">内容管理</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'draft',
  computed: {
    _bili_space_state() {
      return this.$store.getters._bili_space_state
    },
  },
}
</script>
<style lang="less"></style>
