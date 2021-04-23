<template>
  <div class="home-page f-clear">
    <div class="fixed-bg"></div>
    <div class="home-container">
      <div class="home-content">
        <div class="left-panel">
          <div class="user-wrapper">
            <div class="user-panel f-left">
              <div class="loading-content" style="display: none;">
                <div class="loading-text tc-slate">
                  <img src="//s1.hdslb.com/bfs/seed/bplus-common/dynamic-assets/loading.png" class="loading-img">
                  <span>loading...</span>
                </div>
              </div>
              <!--  我的信息  -->
              <me></me>
            </div>
          </div>
          <div class="adaptive-scroll" style="min-height: 635px;">
            <div style="margin-top: 0px;"></div>
            <div class="scroll-content" style="position: sticky; top: 0px;"><!----></div>
          </div>
        </div>
        <div class="center-panel">
          <!--  发布动态  -->
          <publish></publish>
          <div class="card-list">
            <div class="feed-card">
              <div class="content">
                <!--  动态文章  -->
                <content-list></content-list>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="back-top" style="right: 0px; display: none;"></div><!----><!---->
  </div>
</template>

<script>
import me from "@/components/Me";
import publish from "@/components/Publish";
import contentList from "@/components/Content";

export default {
  name: "Index",

  components: {
    me,
    publish,
    contentList,
  }
}
</script>

<style>
@import "../../assets/css/bp-svg-icon.css";
@import "../../assets/css/bp-icon-font.css";
@import "../../assets/css/index.css";
@import "../../assets/css/vendors_517db8eb.0.d9d3f225.css";
</style>