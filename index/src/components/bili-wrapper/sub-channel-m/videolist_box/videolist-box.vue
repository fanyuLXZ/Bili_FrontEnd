<template>
  <div id="videolist_box" class="video-list list-c">
    <!--    标题    -->
    <vl-hd />
    <!--    视频    -->
    <vd-list-cnt :tid="tid" />
  </div>
</template>

<script>
import VlHd from "./vl-hd";
import VdListCnt from "./vd-list-cnt";
export default {
name: "videolist-box",
  components: {VdListCnt, VlHd},
  props:["tid"],
}
</script>
