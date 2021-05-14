<template>
  <div class="bili-wrapper">
    <!--    导航    -->
    <sub-nav />
    <div class="channel-m">
      <!--    左侧内容    -->
      <div class="l-con">
        <!--    最新动态    -->
        <video-floor-m :tid="smallRegion.tid"/>
        <!--    视频排序    -->
        <videolist-box :tid="smallRegion.tid"/>
      </div>
      <!--    右侧内容    -->
      <div class="r-con">
        <!--    排行榜   -->
        <sec-rank :tid="smallRegion.tid"/>
      </div>
      <div class="clearfix"></div>
    </div>
    <!--    返回顶部   -->
    <go-top />
  </div>
</template>

<script>

import SubNav from "../components/bili-wrapper/subnav";
import GoTop from "../components/history/go-top";
import VideoFloorM from "../components/bili-wrapper/sub-channel-m/video-floor-m/video-floor-m";
import VideolistBox from "../components/bili-wrapper/sub-channel-m/videolist_box/videolist-box";
import SecRank from "../components/bili-wrapper/sub-channel-m/sec-rank/sec-rank";
import {MenuConfig} from "g-public/js/config/menuConfig";
export default {
  name: "sub-channel-m",

  components: {
    SecRank,
    VideolistBox,
    VideoFloorM,
    GoTop,
    SubNav,

  },
  data(){
    return{
      smallRegion:this.getSmallRegion()
    }
  },
  methods:{
    getSmallRegion(){
      let getSmallRegion = {}
      MenuConfig.forEach((v)=>{
        if (v.route===this.$route.path.split('/')[2]){
          v.sub.forEach((value)=>{
            if (value.route===this.$route.path.split('/')[3]){
              getSmallRegion=value
            }
          })
        }
      })
      return getSmallRegion
    }
  }


}
</script>
<style>
@import "../assets/style/bili-wrapper/subchannelTwo.css";

</style>