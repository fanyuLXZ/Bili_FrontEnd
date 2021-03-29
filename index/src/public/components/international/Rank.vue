<template>
  <div class="rank-list" v-van-lazyload="getRankData">
    <RankTitle :link="rankLink" :info="info" />
    <RankItem v-for="(item, index) in list" :key="`rankitem-${index}`" :index="index" :info="item" />
  </div>
</template>

<script>
import RankTitle from './RankTitle'
import RankItem from './RankItem'
import { getRank } from 'g-public/apis/home'
import rankMenuConfig from 'g-public/js/config/rankMenuConfig'

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
  computed: {
    rankLink() {
      // 对应tid且不为pgc的slug
      const type = rankMenuConfig.find(v => v.tid === this.info.tid && !v.type) || { slug: 'all' }
      return `//www.bilibili.com/v/popular/rank/${type.slug}`
    },
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    async getRankData() {
      try {
        const { data } = await getRank({rid: this.info.tid, day: 3, original: 0})
        if(data.code === 0) {
          let arr = data.data && data.data || []
          this.list = arr.slice(0, 10)
        }
      } catch(err) {}
    }
  },
  mounted() {
    // this.getRankData()
  }
}
</script>


<style lang="less">
.rank-list {
  width: 320px;
}
</style>

