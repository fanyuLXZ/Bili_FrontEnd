<template>
  <div class="video-floor-m" style="">
    <!--    title   -->
    <dynamic-title />
    <!--    最新动态视频    -->
    <storey-box />
  </div>
</template>

<script>
import DynamicTitle from "./dynamic-title";
import StoreyBox from "../../sub-channel-m/video-floor-m/storey-box";
export default {
  name: "video-floor-m",
  components: {StoreyBox, DynamicTitle}
}
</script>
