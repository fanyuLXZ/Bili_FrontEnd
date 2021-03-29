
<template>
  <!-- for 番剧 / 国创 / 电影 / 电视剧 / 纪录片 -->
  <div class="pgc-rank" v-van-lazyload="getPGCRankData">
    <RankTitle :link="moreLinkMap[type]" />
    <PgcRankItem v-for="(item, index) in list" :key="`rankitem-${index}`" :index="index" :info="item" :pgc-type="info.type" />
  </div>

</template>

<script>
import RankTitle from 'g-public/components/international/RankTitle'
import PgcRankItem from 'g-public/components/international/PgcRankItem'

import { getPGCRank } from 'g-public/apis/home'

export default {
  components: {
    RankTitle,
    PgcRankItem
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // pgc类型
    type: {
      type: Number,
      default: 1
    },
    // 排行榜个数
    count: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      list: [],
      moreLinkMap: {
        // 1 番剧，2 电影，3 纪录片，4 国创，5 电视剧
        1: '//www.bilibili.com/v/popular/rank/bangumi',
        2: '//www.bilibili.com/v/popular/rank/movie',
        3: '//www.bilibili.com/v/popular/rank/documentary',
        4: '//www.bilibili.com/v/popular/rank/guochan',
        5: '//www.bilibili.com/v/popular/rank/tv',
      }
    }
  },
  methods: {
    async getPGCRankData() {
      try {
        const { data } = await getPGCRank({season_type: this.type, day: 3})
        if(data && data.code === 0) {
          const field = [2,3,4,5].indexOf(this.type) !== -1 ? 'data' : 'result'
          let arr = data[field] && data[field].list || []
          this.list = arr.slice(0, this.count)
        }
      } catch(err) {}
    }
  }
}
</script>

<style lang="less">
.pgc-rank {
  width: 320px;
}
</style>
