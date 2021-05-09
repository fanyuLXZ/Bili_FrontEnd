<template>
  <div class="zone-title">
    <div class="headline clearfix">
      <a href="/v/douga/mad/" class="name">{{ itemTitle }}</a>
      <div class="bili-tab bili-tab">
        <div class="bili-tab-item on">有新动态</div>
        <div class="bili-tab-item">最新投稿</div>
      </div>
      <a href="/v/douga/mad/" target="_blank" class="link-more">
          更多
        <i class="icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "zone-title",

  props:{
    itemTitle:String
  }
}
</script>

<style>

</style>