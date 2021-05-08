<template>
  <div class="home-wrap cc-content-body">
    <!--    视频数据    -->
    <data-card />
    <div class="interact-bill-wrap bcc-row" style="margin-left: -8px; margin-right: -8px;"></div>
    <!--    评论    -->
    <interact-bill-wrap />
  </div>
</template>

<script>
import DataCard from "@/components/right/home/data-card";
import InteractBillWrap from "@/components/right/home/interact-bill-wrap";
export default {
  name: "Home",
  components: {InteractBillWrap, DataCard}
}
</script>
<style>
</style>