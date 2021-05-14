<template>
  <div class="bili-wrapper">
    <!--    导航    -->
    <sub-nav/>
    <!--    banner    -->
<!--    <banner />-->
<!--        推荐-->
<!--    <energy-m />-->
    <!--    导航内容一   -->
    <sub-zone-m  v-for="(item,index) in partitionTitle" :key="index" :item="item"/>
    <!--    返回顶部   -->
    <go-top />
  </div>
</template>

<script>

import GoTop from "../components/history/go-top";
import SubZoneM from "../components/bili-wrapper/channel-m/sub-zone-m/sub-zone-m";
// import Banner from "../components/bili-wrapper/channel-m/banner/banner";
// import EnergyM from "../components/bili-wrapper/channel-m/energy-m/energy-m";
import SubNav from "../components/bili-wrapper/subnav";
import {MenuConfig} from "g-public/js/config/menuConfig";

export default {
  name: "channel-m",

  components: {
    SubNav,
    // EnergyM,
    // Banner,
    SubZoneM,
    GoTop,
  },

  data(){
    return{
      partitionTitle:this.gePartitionTitle(this.$route.path.split('/')[2])
    }
  },
  methods:{
    gePartitionTitle(route){
      let partitionTitle = []
      MenuConfig.forEach((v)=>{
        if (v.route===route){
          partitionTitle = v.sub.map((value)=>{
            return {
              title:value.name,
              tid:value.tid
            }
          })
        }
      })
      return partitionTitle
    }
  }

}
</script>
<style>
@import "../assets/style/bili-wrapper/subchannel.css";
</style>