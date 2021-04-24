<template>
  <div id="viewbox_report" class="video-info report-wrap-module report-scroll-module" scrollshow="true">
    <h1 :title="boxreport.titles" class="video-title">
      
      <span class="tit tr-fix">{{boxreport.titles}}99</span></h1>
      <div class="video-data"><span title="总播放数416165" class="view">{{boxreport.play}}播放&nbsp;·&nbsp;</span>
      <span title="历史累计弹幕数9494" class="dm"></span>
      <span>{{boxreport.times}}</span>
      <span title="" class="rank" v-if="boxreport.rank<100">&nbsp;&nbsp;全站排行榜最高第{{boxreport.rank}}名
    </span></div></div>
</template>

<script>
export default {
  props:{
     boxreport:{
     type:Object,
    defaul:()=>[]
    }
  }
}
</script>
<style scoped src="../../../assets/style/video/stardust-video.css"></style>

<style>

</style>