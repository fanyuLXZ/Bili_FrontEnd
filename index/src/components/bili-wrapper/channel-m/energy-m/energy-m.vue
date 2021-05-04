<template>
  <div id="high_energy"
       class="energy-m clearfix report-wrap-module report-scroll-module report-wrap-module report-scroll-module"
       scrollshow="true">
    <div class="l-con">
      <div class="headline clearfix"><span class="name">前方高能</span></div>
      <!--    前方高能视频    -->
      <storey-box />
    </div>
    <div class="r-con">
      <div class="headline headline-right clearfix"><span class="name">近期热门</span></div>
      <!--    近期热门    -->
      <hot-box />
    </div>
  </div>
</template>

<script>
import StoreyBox from "./storey-box";
import HotBox from "./hot-box";
export default {
  name: "energy-m",
  components: {HotBox, StoreyBox}
}
</script>

<style scoped>

</style>