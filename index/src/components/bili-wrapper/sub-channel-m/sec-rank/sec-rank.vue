<template>
  <section class="sec-rank">
    <!--    标题    -->
    <rank-head/>
    <!--    排行榜   -->
    <div class="r-con">
      <section class="sec-rank">
        <rank-list :tid="tid"/>
      </section>
    </div>
  </section>
</template>

<script>
import RankHead from "../../sub-channel-m/sec-rank/rank-head";
import RankList from "../../channel-m/r-con/rank-list";

export default {
  name: "sec-rank",
  components: {RankList, RankHead},
  props: ["tid"]
}
</script>

<style>
.sec-rank {
  overflow: hidden;
}
</style>