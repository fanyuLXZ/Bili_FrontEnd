<template>
    <!-- international manga rank list  -->
     <!-- v-van-report:pgc.click="{tab: selected, type: info.type}" -->
    <div class="manga-rank-list">
      <div v-if="state === 'loaded' && rankData && rankData.length">
        <MangaRankItem
          v-for="(item, index) in rankData"
          :key="`rankitem-${index}`"
          :index="index"
          :info="item" />
      </div>
      <div v-else class="manga-rank-state">
        <span v-if="state === 'loaded' && rankData.length === 0">没有数据(-_-#)</span>
        <span v-if="state === 'error'">加载失败，<a @click="$emit('reloadRank')">点击重试</a></span>
      </div>
    </div>
</template>

<script>
import MangaRankItem from './MangaRankItem'

export default {
  name: 'MangaRankList',
  components: {
    MangaRankItem,
  },
  props: {
    list: {
      type: Array,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    state: {
      type: String,
      default: null
    }
  },
  computed: {
    rankData() {
      return (this.max > 0 && this.list) ? this.list.slice(0, this.max) : this.list
    }
  }
}
</script>

<style lang="less" scoped>
.manga-rank-list {
  width: 320px;

  .tab-switch {
    display: flex;
    flex: 1;
    margin-left: 20px;

    .tab-switch-item {
      margin-right: 12px;
      height: 21px;
      font-size: 12px;
      line-height: 16px;
      cursor: pointer;

      &.on {
        border-bottom: 1px solid #00a1d6;
        color: #00a1d6;
      }

    }
  }

}
.manga-rank-state {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
