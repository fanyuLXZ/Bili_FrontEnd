<template>
  <div id="viewbox_report" class="video-info report-wrap-module report-scroll-module" scrollshow="true">
    <h1 :title="video.title" class="video-title">
      
      <span class="tit tr-fix" style="padding-left: 10px;">{{video.title}}</span></h1>
      <div class="video-data"><span title="" class="view">{{viewt}}播放&nbsp;·&nbsp;</span>
<!--      <span title="历史累计弹幕数9494" class="dm"></span>-->
      <span>{{video.ctime}}</span>
      <span title="" class="rank" v-if="video.rank!==0&&video.rank<100">&nbsp;&nbsp;全站排行榜最高第{{video.rank}}名
    </span></div></div>
</template>

<script>
import {formatNum} from 'g-public/js/utils'
export default {
  props:{
     video:{
     type:Object,
    defaul:()=>[]
    },
    view:{
      type:Number,
    defaul:()=>[]
    }
  },
 
  computed:{
    viewt() {
      return formatNum(this.view)
    }
  }
}
</script>
<style src="../../../assets/style/video/stardust-video.css"></style>

<style>

</style>