<template>
  <div id="v_desc" class="video-desc report-wrap-module report-scroll-module" scrollshow="true">
    <div class="tip-info"><span class="copyright">
      <i class="van-icon-info_prohibit"></i>未经作者授权，禁止转载</span>
      </div>
      <div class="info open">{{desc}}</div>
      <!----><!----></div>
</template>

<script>
export default {
  props:{
     desc:{
     type:String,
    defaul:()=>[]
    }
  }
}
</script>
<style scoped src="@/assets/style/video/stardust-video.css"></style>

<style>

</style>