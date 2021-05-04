<template>
  <div class="channel-m">
    <div class="nominate-m clearfix report-wrap-module report-scroll-module" scrollshow="true">
      <!--    banner    -->
      <carousel-box />
      <!--    视频推荐    -->
      <video-card-box />
    </div>
  </div>
</template>

<script>
import CarouselBox from "./carousel-box";
import VideoCardBox from "./video-card-box";
export default {
  name: "banner",
  components: {VideoCardBox, CarouselBox}
}
</script>

<style>

</style>