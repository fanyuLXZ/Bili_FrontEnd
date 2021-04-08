<template>
  <div class="rank-list" v-van-lazyload="getArticleRankData">
    <RankTitle link="//www.bilibili.com/read/ranking#type=3" />
    <RankItem v-for="(item, index) in list" :key="`rankitem-${index}`" :index="index" :info="item" />
  </div>
</template>

<script>
import RankTitle from 'g-public/components/international/RankTitle'
import RankItem from './RankItem'

import { getArticleRank } from 'g-public/apis/home'

export default {
  components: {
    RankTitle,
    RankItem
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    async getArticleRankData() {
      try {
        const { data } = await getArticleRank({cid: 3})
        if(data.code === 0) {
          this.list = data.data && data.data.slice(0, 10)
        }
        /* eslint-disable */
      } catch(err) {}
    }
  },
  mounted() {
    // this.getArticleRankData()
  }
}
</script>


<style lang="less">
.rank-list {
  width: 320px;
}
</style>

