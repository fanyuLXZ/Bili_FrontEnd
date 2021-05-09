<template>
  <div class="bili-wrapper">
    <!--    导航    -->
    <sub-nav />
    <!--    banner    -->
    <banner />
    <!--    推荐    -->
    <energy-m />
    <!--    导航内容一   -->
    <sub-zone-m  v-for="(item,index) in partitionTitle" :key="index" :item="item"/>
    <!--    返回顶部   -->
    <go-top />
  </div>
</template>

<script>

import GoTop from "../../components/history/go-top";
import SubZoneM from "../../components/bili-wrapper/channel-m/sub-zone-m/sub-zone-m";
import Banner from "../../components/bili-wrapper/channel-m/banner/banner";
import EnergyM from "../../components/bili-wrapper/channel-m/energy-m/energy-m";
import SubNav from "../../components/bili-wrapper/subnav";

export default {
  name: "channel-m",

  components: {
    SubNav,
    EnergyM,
    Banner,
    SubZoneM,
    GoTop,
  },

  data(){
    return{
      partitionTitle:["MAD·AMV","MMD·3D","短片·手书·配音","手办·模玩","特摄"]
    }
  }

}
</script>
<style>
@import "../../assets/style/bili-wrapper/subchannel.css";
</style>