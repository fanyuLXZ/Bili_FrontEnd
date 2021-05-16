<template>
  <div class="rank-list-wrap">
    <ul class="rank-list">
      <li class="rank-item" :class="index>2?'loser':'show-detail first highlight'" v-for="(item,index) in ranks"
          :key="index">
        <i class="ri-num">{{ index + 1 }}</i>
        <a :href="'//www.bilibili.org/video/BV'+item.aid" target="_blank" :title="item.title+' 播放时间：'+item.create"
           class="ri-info-wrap clearfix">
          <div class="lazy-img ri-preview" v-if="index<=2">
            <img :alt="item.title" :src="item.pic">
          </div>
          <div class="ri-detail">
            <p class="ri-title">{{ item.title }}</p>
            <p class="ri-point" v-if="index<=2">综合评分：{{ thousand(item.pts) }}</p>
          </div>
          <div class="watch-later-trigger w-later" v-if="index<=2"></div>
        </a>
      </li>
      <!--        <z-toggle tag="li" trigger="hover" :offset-x="-50" :offset-y="-200" class="rank-item" :class="index>2?'loser':'show-detail first highlight'" v-for="(item,index) in ranks" :key="index">-->
      <!--            <template v-slot:btn>-->
      <!--              <i class="ri-num">{{ index + 1 }}</i>-->
      <!--              <a href="//www.bilibili.com/video/BV1Dv41177Ee" target="_blank" :title="item.title+' 播放时间：'+item.create"-->
      <!--                 class="ri-info-wrap clearfix">-->
      <!--                <div class="lazy-img ri-preview" v-if="index<=2">-->
      <!--                  <img alt="守 护 与 告 白 之 拳 ！火影微电影《告白》" :src="item.pic">-->
      <!--                </div>-->
      <!--                <div class="ri-detail">-->
      <!--                  <p class="ri-title">{{ item.title }}</p>-->
      <!--                  <p class="ri-point" v-if="index<=2">综合评分：{{ thousand(item.pts) }}</p>-->
      <!--                </div>-->
      <!--                <div class="watch-later-trigger w-later" v-if="index<=2"></div>-->
      <!--              </a>-->
      <!--            </template>-->
      <!--            <video-info-module :item="item" />-->
      <!--        </z-toggle>-->
    </ul>
  </div>
</template>

<script>
import {formatNum} from 'g-public/js/utils'
// import zToggle from "g-public/components/z-toggle"
// import VideoInfoModule from "./video-info-module";
import {getSmallRankingRegionVideo} from "../../../../api/region";

export default {
  name: "rank-list",
  // components: {VideoInfoModule,zToggle},
  data() {
    return {
      ranks: [],
    }
  },
  props: ["tid"],
  methods: {
    thousand(a) {
      return formatNum(a);
    },
  },
  mounted() {
    getSmallRankingRegionVideo(this.tid).then((res) => {
      if (res?.data?.code === 0) {
        this.ranks = res.data.data
      }
    })
  }

}
</script>
