<template>
  <div id="page-dynamic" class="wrapper clearfix">
    <div class="col-1">
      <feed-card/>
    </div>
    <div class="col-2">
      <section-user/>
    </div>
  </div>
</template>

<script>
import FeedCard from "./feed-card";//uid的显示
import SectionUser from "../common/section-user"; //动态显示//欧阳苏蓉
export default {
  name: "dynamic",
  components: {SectionUser, FeedCard},
}
</script>

<style>

</style>