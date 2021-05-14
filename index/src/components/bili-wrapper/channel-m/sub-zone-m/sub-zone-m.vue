<template>
  <div id="douga_mad" class="sub-zone-m clearfix report-wrap-module report-scroll-module" scrollshow="true">
    <div class="clearfix">
      <!--    分区内容    -->
      <video-floor-m :itemTitle="item"/>
      <!--    排行榜   -->
      <r-con :itemTitle="item"/>
    </div>
  </div>
</template>

<script>
import VideoFloorM from "./video-floor-m";
import RCon from "../r-con/r-con";
export default {
  name: "sub-zone-m",

  components: {RCon, VideoFloorM},

  props:{
    item:Object
  }
}
</script>

<style>

</style>