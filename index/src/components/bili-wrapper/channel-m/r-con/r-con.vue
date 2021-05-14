<!--  作者：欧阳苏蓉 排行榜  -->
<template>
  <div class="r-con">
    <section class="sec-rank">
      <!--    头部    -->
      <rank-head />
      <!--    排行    -->
      <rank-list :tid="itemTitle.tid"/>
      <a href="/v/douga/mad/#/all/click/0/1/?open=hot" target="_blank" class="more-link">查看更多
        <i class="icon icon-arrow-r"></i>
      </a>
    </section>
  </div>
</template>

<script>
import RankHead from "./rank-head";
import RankList from "./rank-list";
export default {
name: "r-con",
  components: {RankList, RankHead},
  props:["itemTitle"],
}
</script>
<style>
.sec-rank {
  overflow: hidden;
}
</style>