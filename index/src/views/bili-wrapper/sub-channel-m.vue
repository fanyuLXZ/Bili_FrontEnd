<template>
  <div class="bili-wrapper">
    <!--    导航    -->
    <sub-nav />
    <!--    左侧内容    -->
    <div class="l-con">
      <!--    最新动态    -->
      <video-floor-m />
      <!--    视频排序    -->
      <videolist-box />
    </div>
    <!--    右侧内容    -->
    <div class="r-con">
      <!--    排行榜   -->
      <sec-rank />
    </div>
    <!--    返回顶部   -->
    <go-top />
  </div>
</template>

<script>

import SubNav from "../../components/bili-wrapper/subnav";
import GoTop from "../../components/history/go-top";
import VideoFloorM from "../../components/bili-wrapper/sub-channel-m/video-floor-m/video-floor-m";
import VideolistBox from "../../components/bili-wrapper/sub-channel-m/videolist_box/videolist-box";
import SecRank from "../../components/bili-wrapper/sub-channel-m/sec-rank/sec-rank";
export default {
  name: "sub-channel-m",

  components: {
    SecRank,
    VideolistBox,
    VideoFloorM,
    GoTop,
    SubNav,

  },


}
</script>
<style>
@import "../../assets/style/bili-wrapper/subchannelTwo.css";

</style>