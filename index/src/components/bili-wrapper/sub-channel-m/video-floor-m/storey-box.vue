<template>
  <div class="storey-box clearfix">
    <div class="v-list">
      <spread-module v-for="item in archives" :item="item" :key="item.aid"/>
    </div>
  </div>
</template>

<script>
import SpreadModule from "../../channel-m/sub-zone-m/spread-module";
import {getSmallDynamicRegionVideo} from "../../../../api/region";
export default {
name: "storey-box",
  components: {SpreadModule},

  data(){
    return{
      archives:[
      ]
    }
  },
  props:["tid"],
  mounted() {
    getSmallDynamicRegionVideo(this.tid,5).then((res)=>{
      if (res?.data?.code===0){
        this.archives=res.data.data.archives
      }
    })
  }
}
</script>

<style>

</style>