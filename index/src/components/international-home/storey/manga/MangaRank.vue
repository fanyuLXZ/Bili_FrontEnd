<template>
  <!-- 国际版 漫画排行榜 -->
     <!-- v-van-report:pgc.click="{tab: selected, type: info.type}" -->
  <div class="manga-rank" v-van-lazyload="getMangaRank">
    <RankTitle link="//manga.bilibili.com?from=bili_main_rank_more">
      <TabSwitch slot="center" :tabs="tabConfig" :selected="selected" @on-change="onTabChange" />
    </RankTitle>
    <div class="manga-rank-wrap" :class="`show-${tabValueMap[selected]}`">
      <MangaRankList class="manga-list" :list="hotList" :max="14" :state="hotState" @reloadRank="getMangaRank" />
      <MangaRankList class="manga-list" :list="fansList" :max="14" :state="fansState" @reloadRank="getMangaRank" />
      <MangaRankList class="manga-list" :list="freeList" :max="14" :state="freeState" @reloadRank="getMangaRank" />
    </div>

  </div>
</template>

<script>
import RankTitle from 'g-public/components/international/RankTitle'
import MangaRankList from './MangaRankList'
import TabSwitch from 'g-public/components/international/TabSwitch'
import { customReport } from 'g-public/js/utils'

import { getMangaRank } from 'g-public/apis/home'

export default {
  components: {
    RankTitle,
    MangaRankList,
    TabSwitch
  },
  data() {
    return {
      selected: 0,
      tabConfig: [
        // 人气
        { name: this.$HomeLang['34'], value: 0 },
        // 应援
        { name: this.$HomeLang['35'], value: 1 },
        // 免费
        { name: this.$HomeLang['36'], value: 2 }
      ],
      tabValueMap: {
        0: 'hot', // 月票
        1: 'fans', // 应援
        2: 'free', // 飙升
      },
      hotList: null,
      fansList: null,
      freeList: null,
      // state
      hotState: 'loading',
      fansState: 'loading',
      freeState: 'loading'
    }
  },
  computed: {
    currentType() {
      return this.tabValueMap[this.selected]
    }
  },
  methods: {
    onTabChange(value) {
      customReport('home_manga_rank_tab_switch', this.tabValueMap[value])
      this.selected = value
      this.getMangaRank()
    },
    async getMangaRank() {
      let paramsMap = {
        0: {
          url: 'HomeFans',
          data: {
            // 月票月榜
            type: 1,
            // 月票榜，月偏移值，获取前n个月的数据，例: 获取当前月的排行，该值传0，获取上月的排行，该值传1
            last_month_offset: 0,
          }
        },
        1: {
          url: 'HomeFans',
          data: { last_week_offset: 0 }
        },
        2: {
          url: 'HomeHot',
          data: { type: 2 }
        }
      }
      let paramURL = paramsMap[this.selected]['url']
      let paramDATA = JSON.stringify(paramsMap[this.selected]['data']);

      try {
        this.setState('loading')
        const { data } = await getMangaRank(paramURL, paramDATA)
        if(data.code === 0) {
          this.setState('loaded')

          // 免费榜 - 数组
          if(data.data instanceof Array) {
            this[`${this.currentType}List`] = data.data
          } else {
            // 月票 + 应援榜 对象
            this[`${this.currentType}List`] = (data.data && data.data.comics) || []
          }
          return
        }
        this.setState('error')
      } catch (error) {
        this.setState('error')
      }
    },
    setState(state) {
      this[this.currentType + 'State'] = state
    },
  }
}
</script>

<style lang="less">
.manga-rank {
  overflow: hidden;
  width: 320px;

  .tab-switch {
    display: flex;
    flex: 1;
    margin-left: 20px;
    margin-top: 2px;

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

  .manga-rank-wrap {
    display: flex;
    width: 300%;
    transition: all .2s ease-in-out;
    zoom: 1;

    .manga-list {
      flex-shrink: 0;
    }

    &.show-fans {
      margin-left: -100%;
    }

    &.show-free {
      margin-left: -200%;
    }
  }
}
</style>
