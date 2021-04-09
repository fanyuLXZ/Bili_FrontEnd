<template>
  <div class="banner">
    <a href="//jobs.bilibili.com/social/">
      <div class="enter_button" style="bottom: 15%;left:59%; height: auto;"><img
          alt=""
          src="//i0.hdslb.com/bfs/activity-plat/static/20170901/33e614fab6762576e23d0564d216ca0d/images/59j14l47wx.png">
      </div>
    </a>
    <a href="//jobs.bilibili.com/campus/">
      <div class="enter_button" style="bottom: 15%;left:21%; height: auto;"><img
          alt=""
          src="//i0.hdslb.com/bfs/activity-plat/static/20170901/33e614fab6762576e23d0564d216ca0d/images/79l54n483j.png">
      </div>
    </a>
    <div class="banner_logo"><img alt="" src="//static.hdslb.com/activity/jobs/img/index-logo.png"></div>
    <div class="activity topic-preview-wrapper">
      <ul class="topic-preview clearfix" style="width: 100%; height: 100%; margin-left: 0%;">
        <li preview="preview" style="position: relative;">
          <img
              src="//i0.hdslb.com/bfs/activity-plat/static/20170901/33e614fab6762576e23d0564d216ca0d/images/491y848zk0.png"
              style="width: 100%; height: auto; position: absolute; left: 0; top: 50%; transform: translateY(-50%); ">
        </li>
      </ul>
      <div class="page_next"></div>
      <div class="page_prev"></div>
    </div>
  </div>
</template>

<style scoped src="../../assets/style/blackboard/Join_style.css"></style>
<style scoped>

</style>

<script>
export default {
  name: "joinBody",
  metaInfo: {
    title: "生产快乐的地方~"
  },
  beforeMount() {
    this.$store.state.isHeadShow = false
    this.$store.state.isFootShow = false
  }
}
</script>

