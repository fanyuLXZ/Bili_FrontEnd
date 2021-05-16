<template>
  <div   id="reco_list" class="recommend-list report-wrap-module report-scroll-module"
       scrollshow="true">
    <div  class="rec-list">
      <p class="rec-title">
        接下来播放</p>
      <div class="video-page-card" v-for="(item,index) in related" :key="index" v-show="index<=fornum">
        <!--video-page-operator-card-->
        <div class="card-box">
          <div class="pic-box">
            <div class="pic">
              <a :href="'http://www.bilibili.org/video/bv'+item.aid" class="">
                <img :src="item.pic" :alt="item.titles" width="168" height="95"></a>
              <span class="mask-video"></span>
              <span class="duration">111</span>
            </div>
            <div class="watch-later-video van-watchlater">
<!--              <span class="wl-tips" style=""></span>-->
            </div>
          </div>
          <div class="info">
            <a :href="'http://www.bilibili.org/video/bv'+item.aid" class="">
              <span :title="item.titles" class="title" style=" padding: 0;">{{ item.title }}</span></a>
            <div class="count up"><a href="#" target="_blank">{{ item.owner.name }}</a></div>
            <div class="count">{{ get_views(item.stat.view) }} 播放</div>
          </div>
        </div>

      </div>


      <div class="rec-footer" :class="[this.fornum===40?'sfou':'']" @click="spblick">展开</div>
      <div class="rec-footer" :class="[this.fornum===20?'sfou':'']" @click="spblicks">收起</div>
    </div>

  </div>
</template>

<script>
import {formatNum} from 'g-public/js/utils'

export default {
  props: ["related"],

  data() {
    return {
      fornum: 20
    }
  },
  methods: {
    spblick() {
      this.fornum = 40
    },
    spblicks() {
      this.fornum = 20
    },
    get_views(a) {
      return formatNum(a)
    }
  },
}
</script>
<style scoped src="@/assets/style/video/stardust-video.css"></style>

<style>
.split-line {

  position: static;

  border-top: 1px solid #e9eaec;
}

.sfou {
  display: none;
}
</style>