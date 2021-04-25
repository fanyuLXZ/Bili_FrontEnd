<template>
  <div id="arc_toolbar_report" class="video-toolbar report-wrap-module report-scroll-module" scrollshow="true" style="height:40px" >
    <div class="ops"  >
      <span :title="triplet.Thumbup" class="like">
        <!----><!----><!----><!--no--><i class="van-icon-videodetails_like" style="color:;"></i>{{thumbup}}
        <div class="svga-container svga-top" style="text-align: left; left: 177.8px; top: 536px;">
          <canvas width="360" height="360" style="background-color: transparent; transform: matrix(0.333333, 0, 0, 0.333333, -120, -120);"></canvas></div>
    </span>
    <span title="投硬币枚数" class="coin">
      <canvas width="34" height="34" class="ring-progress" style="width:34px;height:34px;left:-3px;top:-3px;"></canvas>
      <!----><i class="van-icon-videodetails_throw" style="color:;"></i>
     {{insertcoins}}
    </span>
    <span title="收藏人数" class="collect">
      <canvas width="34" height="34" class="ring-progress" style="width:34px;height:34px;left:-3px;top:-3px;"></canvas>
      <!----><i class="van-icon-videodetails_collec" style="color:;"></i>{{collect}}
    </span>
    
      
    </div>

    </div>
</template>

<script>
import {formatNum} from 'g-public/js/utils'
export default {
 props:{
   triplet:{
       type:Object,
    defaul:()=>[]
   }
 },
 computed:{
    thumbup() {
      return formatNum(this.triplet.Thumbup)
    },
     insertcoins() {
      return formatNum(this.triplet.insertcoins)
    },
     collect() {
      return formatNum(this.triplet.collect)
    }
  },
}

</script>
<style scoped src="@/assets/style/video/stardust-video.css"></style>
<style scoped src="@/assets/style/video/video_main.css"></style>
<style scoped src="@/assets/style/video/video_pbp.css"></style>
<style scoped src="@/assets/style/video/video_1.css"></style>
<style scoped src="@/assets/style/video/video_2.css"></style>
<style>
.video-toolbar {
    line-height: 30px;
    height: 28px;
    font-size: 14px;
    color: #505050;
    border-bottom: 1px solid #e5e9f0;
    padding-bottom: 12px;
}
.v-wrap .video-toolbar {
    position: relative;
    margin-top: 16px;
}
.video-toolbar .ops {
    float: left;
    height: 24px;
    -ms-user-select: none;
    user-select: none;
}

</style>