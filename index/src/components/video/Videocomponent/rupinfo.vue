<template>
  <div id="v_upinfo" class="up-info report-wrap-module report-scroll-module" scrollshow="true">
<!--    <z-toggle trigger="hover" :offset-y="80">-->
<!--      <template v-slot:btn>-->
<!--        -->
<!--      </template>-->
<!--      <meinfo></meinfo>-->
<!--    </z-toggle>-->
    <div class="u-face"><a href="//space.bilibili.com/357229416" target="_blank" report-id="head" class="fa">
      <div class="bili-avatar">
        <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius"
             alt=""
             :src="owner.face+'@96w_96h_1c.webp'">
        <!--            <span class="bili-avatar-icon bili-avatar-icon&#45;&#45;personal"></span>-->
      </div>
    </a></div>
    <div class="up-info_right">

<!--      <div class="name" style="line-height:20px;height:20px;">&lt;!&ndash;&ndash;&gt;-->

<!--        <a href="//space.bilibili.com/357229416" target="_blank" report-id="name" class="username is_vip"-->
<!--           style="color:#FB7299;">-->
<!--          {{ owner.upname }}-->

<!--          <span class="mask"></span></a>-->
<!--        <a href="/message-home" target="_blank" class="message"> <i class="van-icon-videodetails_messag"></i>-->
<!--          发消息-->


<!--        </a></div>-->
      <div class="desc">
        {{ owner.sign }}
      </div>

      <div class="btn-panel">

        <!----><!--default-btn follow-btn btn-transition b-gz following-->
<!--        <div :class="['default-btn', 'follow-btn', 'btn-transition', 'b-gz', gnuflag?'following':'not-follow']" style=""-->
<!--             @click="gnuclick()">-->
<!--        <span class="has-charge">-->
<!--          <i class="van-icon-general_addto_s" v-if="!gnuflag"></i>-->
<!--          {{ gnuflag?"已关注":'关注' }}-->
<!--          <span>{{ views }}</span></span>&lt;!&ndash;&ndash;&gt;</div>-->
      </div>
    </div>
  </div>
</template>

<script>
import {formatNum} from 'g-public/js/utils'
import {getPostLike} from "../../../api/video";
// import meinfo from './MeInfo'
// import ZToggle from 'g-public/components/z-toggle'

export default {
  components: {
    // meinfo,
    // ZToggle
  },
  props: ["owner","aid"],
  computed: {
    views() {
      return formatNum(this.owner.fans)
    }
  },
  data() {
    return {

      gnuflag: false
    }
  },
  methods: {
    gnuclick() {
      getPostLike()
    }
  },
  beforeUpdate() {
    console.log(this.flag)
  },

}
</script>
<style scoped src="@/assets/style/video/stardust-video.css"></style>
<style>

</style>