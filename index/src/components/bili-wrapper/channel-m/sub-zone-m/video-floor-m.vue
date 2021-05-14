<template>
  <div class="video-floor-m l-con">
    <!--    分区标题    -->
    <zone-title :itemTitle="itemTitle.title"/>
    <!--    分区视频    -->
    <div class="storey-box clearfix" style="height:504px;">
      <spread-module :type="item.card_type" v-for="item in archives" :key="item.aid" :item="item"/>
    </div>
  </div>
</template>

<script>
import ZoneTitle from "./zone-title";
import SpreadModule from "./spread-module";
import {getSmallDynamicRegionVideo} from "../../../../api/region";
export default {
  name: "video-floor-m",

  components: {SpreadModule, ZoneTitle},

  data() {
    return {
      archives:[]
    }
  },

  props:{
    itemTitle:Object
  },
  mounted() {
    getSmallDynamicRegionVideo(this.itemTitle.tid,15).then((res)=>{
      if (res?.data?.code===0){
        this.archives=res.data.data.archives
      }
    })
  }
}
</script>

<style>

</style>