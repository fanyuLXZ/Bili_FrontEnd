<template>
  <SpaceBetween class="s-rec b-wrap" v-van-lazyload="getSRecommendData">
    <div class="card-list">
      <StoreyTitle :info="{iconfont: 'bili-tebietuijian', title: $HomeLang['12'], link: '//www.bilibili.com/list/recommend/1.html'}" />
      <div class="zone-list-box">
        <VideoCard v-for="(item, index) in list" :key="`vc-${index}`" :info="item" />
      </div>
    </div>
    <OperateCard class="gg" :info="adData" v-if="adData" :locId="31" />
  </SpaceBetween>
</template>

<script>
import SpaceBetween from 'g-public/components/international/SpaceBetween'
import StoreyTitle from 'g-public/components/international/StoreyTitle'
import VideoCard from 'g-public/components/international/VideoCard'
import OperateCard from '../ad/OperateCard'

import { mapState } from 'vuex'
import { getSRecommend } from 'g-public/apis/home'

export default {
  components: {
    SpaceBetween,
    StoreyTitle,
    VideoCard,
    OperateCard
  },
  data() {
    return {
      list: []
    }
  },
  computed: {
    ...mapState(['locsData']),
    adData() {
      return (this.locsData && this.locsData[31] && this.locsData[31][0]) || null
    }
  },
  methods: {
    async getSRecommendData() {
      try {
        const { data } = await getSRecommend()
        const result = data.list
        let newArr = []
        for(let i = 0; i < result.length; i++) {
          const item = result[i]
          newArr.push({
            aid: item.aid,
            bvid: item.bvid,
            pic: item.pic,
            duration: item.duration,
            title: item.title,
            stat: {
              view: item.play,
              like: item.like,
              coin: item.coins
            },
            owner: {
              mid: item.mid,
              name: item.author
            }
          })
        }
        this.list = newArr.slice(0, 6)
        /* eslint-disable */
      } catch(err) {}
    }
  }
}
</script>

<style lang="less">
.s-rec {
  height: 252px;
  overflow: hidden;
  .gg {
    width: 320px;
    margin-top: 52px;
  }
}
</style>