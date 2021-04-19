<template>
  <div class="n-statistics">
    <n-gz :count="relations.following"/>
    <n-fs :count="relations.follower"/>
    <n-bf :count="playNumber.likes" title="视频、动态、专栏累计获赞" text="获赞数"/>
    <n-bf :count="playNumber.archive.view" title="截止昨天，播放数总计为" text="播放数"/>
<!--    <div title="截止昨天，阅读数总计为0" class="n-data n-bf">-->
<!--      <p class="n-data-k">阅读数</p>-->
<!--      <p id="n-bf" class="n-data-v">0</p>-->
<!--    </div>-->
  </div>
</template>

<script>
import NGz from "@/components/common/nav/n-gz";
import NBf from "@/components/common/nav/n-bf";
import NFs from "@/components/common/nav/n-fs";
import {mapGetters} from "vuex"
export default {
  name: "n-statistics",
  components: {NFs, NBf, NGz},
  props:['item'],
  computed:{
    ...mapGetters(["relations","playNumber"])
  }
}
</script>

<style scoped>

</style>