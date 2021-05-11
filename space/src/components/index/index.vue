<template>
  <!--主页-->
  <div id="page-index" class="wrapper clearfix">
    <div class="col-1">
      <section-title/>
    </div>
    <div class="col-2">
      <section-user/>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./left/section-title";//TA的视频
import SectionUser from "../common/section-user";//uid的显示

export default {
  name: "page-index",
  components: {SectionUser, SectionTitle}
}
</script>

<style>

</style>