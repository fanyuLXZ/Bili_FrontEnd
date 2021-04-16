<template>
  <!-- 创作中心插件 -->
  <div class="section i-m"
    v-show="_bili_space_state === 'owner'">
    <div class="i-m-r1">
      <a href="https://member.bilibili.com/platform/home"
        class="i-m-title"
        target="_blank"
        v-rep="'space_creatorButton_click'">
          <span class="icon-i-title"></span>
          <span class="icon-m-ra"></span>
      </a>
    </div>
    <div class="i-m-r2 clearfix">
      <a href="https://member.bilibili.com/platform/upload/video/frame"
        class="i-m-btn i-m-upload"
        target="_blank"
        v-rep="'space_viedoUploadButton_click'">
        <span class="i-m-u-icon icon"></span>
        <span class="i-m-text">视频投稿</span>
      </a>
      <a href="https://member.bilibili.com/platform/upload-manager/article"
        class="i-m-btn i-m-v"
        target="_blank"
        v-rep="'space_videoManageButton_click'">
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
<style lang="less"
  src="./draft.less"></style>
