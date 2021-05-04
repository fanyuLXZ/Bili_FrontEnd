<template>
    <ul class="rank-list">
        <z-toggle tag="li" trigger="hover" :offset-x="-50" :offset-y="-200" class="rank-item" :class="index>2?'loser':'show-detail first highlight'" v-for="(item,index) in ranks" :key="index">
            <template v-slot:btn>
                <i class="ri-num">{{ index + 1 }}</i>
                <a href="//www.bilibili.com/video/BV1Dv41177Ee" target="_blank" :title="item.title+' 播放时间：'+item.create"
                     class="ri-info-wrap clearfix">
                    <div class="lazy-img ri-preview" v-if="index<=2">
                      <img alt="守 护 与 告 白 之 拳 ！火影微电影《告白》" :src="item.pic">
                    </div>
                    <div class="ri-detail">
                      <p class="ri-title">{{ item.title }}</p>
                      <p class="ri-point" v-if="index<=2">综合评分：{{ thousand(item.pts) }}</p>
                    </div>
                    <div class="watch-later-trigger w-later" v-if="index<=2"></div>
                </a>
            </template>
            <video-info-module :item="item" />
        </z-toggle>
    </ul>
</template>

<script>
import {formatNum} from 'g-public/js/utils'
import zToggle from "g-public/components/z-toggle"
import VideoInfoModule from "./video-info-module";

export default {
  name: "rank-list",
  components: {VideoInfoModule,zToggle},
  data() {
    return {
      ranks: [
        {
          aid:"205242492",    //视频id
          author: "动画魂-Anitama",   //作者
          bvid:"BV1sh411S767",    //视频id
          coins:62132,    //投币数
          create:"2021-04-24 10:00",    //发表时间
          description:"\"UP主：某科学的未来预测\\n视频制作：某科学的超万雌王",    //视频文章
          duration:"5:12",    //视频时长
          favorites:47601,    //收藏数
          mid:293556783,    //作者id
          pic:"//i2.hdslb.com/bfs/archive/7dd91d94f5c36570463ce8cbe65c8dfc3d301c05.jpg@80w_50h.webp",   //预览图
          play:765881,    //观看数
          pts:1204429,    //评分
          title: "守 护 与 告 白 之 拳 ！火影微电影《告白》",   //标题
          typename: "MAD·AMV",   //视频分区
        },
        {
          aid:"205242492",    //视频id
          author: "动画魂-Anitama",   //作者
          bvid:"BV1sh411S767",    //视频id
          coins:62132,    //投币数
          create:"2021-04-24 10:00",    //发表时间
          description:"\"UP主：某科学的未来预测\\n视频制作：某科学的超万雌王",    //视频文章
          duration:"5:12",    //视频时长
          favorites:47601,    //收藏数
          mid:293556783,    //作者id
          pic:"//i2.hdslb.com/bfs/archive/7dd91d94f5c36570463ce8cbe65c8dfc3d301c05.jpg@80w_50h.webp",   //预览图
          play:765881,    //点赞数
          pts:1204429,    //评分
          title: "守 护 与 告 白 之 拳 ！火影微电影《告白》",   //标题
          typename: "MAD·AMV",   //视频分区
        },
        {
          aid:"205242492",    //视频id
          author: "动画魂-Anitama",   //作者
          bvid:"BV1sh411S767",    //视频id
          coins:62132,    //投币数
          create:"2021-04-24 10:00",    //发表时间
          description:"\"UP主：某科学的未来预测\\n视频制作：某科学的超万雌王",    //视频文章
          duration:"5:12",    //视频时长
          favorites:47601,    //收藏数
          mid:293556783,    //作者id
          pic:"//i2.hdslb.com/bfs/archive/7dd91d94f5c36570463ce8cbe65c8dfc3d301c05.jpg@80w_50h.webp",   //预览图
          play:765881,    //点赞数
          pts:1204429,    //评分
          title: "守 护 与 告 白 之 拳 ！火影微电影《告白》",   //标题
          typename: "MAD·AMV",   //视频分区
        },
        {
          aid:"205242492",    //视频id
          author: "动画魂-Anitama",   //作者
          bvid:"BV1sh411S767",    //视频id
          coins:62132,    //投币数
          create:"2021-04-24 10:00",    //发表时间
          description:"\"UP主：某科学的未来预测\\n视频制作：某科学的超万雌王",    //视频文章
          duration:"5:12",    //视频时长
          favorites:47601,    //收藏数
          mid:293556783,    //作者id
          pic:"//i2.hdslb.com/bfs/archive/7dd91d94f5c36570463ce8cbe65c8dfc3d301c05.jpg@80w_50h.webp",   //预览图
          play:765881,    //点赞数
          pts:1204429,    //评分
          title: "守 护 与 告 白 之 拳 ！火影微电影《告白》",   //标题
          typename: "MAD·AMV",   //视频分区
        },
      ],
    }
  },

  methods: {
    thousand(a) {
      return formatNum(a);
    },
  }

}
</script>
