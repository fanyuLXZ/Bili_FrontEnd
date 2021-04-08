<template>
  <div class="live-tabs">
    <TabSwitch :tabs="tabConfig" :selected="selected" v-van-report:liveTabs.click="{
      value: selected,
      position: selected + 1,
      tab_name: tabConfigForReport[selected]
    }" @on-change="onChange"  />

    <!-- 改成 v-show 避免tab切换的卡片曝光重复计算 -->

    <!-- 直播排行 -->
    <LiveUpList v-show="selected === 0" name="rank" :list="rankList" />
    <!-- 关注的主播 -->
    <LiveUpList v-show="selected === 1" name="follow" :list="followList" :showNumber="false"  />
    <!-- 为你推荐 -->
    <RecommendActivity v-show="selected === 2" :bannerList="bannerList || []" />

  </div>
</template>

<script>
/* eslint-disable */
import TabSwitch from 'g-public/components/international/TabSwitch'
import LiveUpList from './LiveUpList'
import RecommendActivity from './RecommendActivity'
import { customReport } from 'g-public/js/utils'

import { getFollowUp } from 'g-public/apis/home'

export default {
  components: {
    TabSwitch,
    LiveUpList,
    RecommendActivity
  },
  props: {
    rankList: {
      type: Array,
      default: () => {
        return []
      }
    },
    bannerList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      tabConfig: [
        {name: this.$HomeLang['9'], value: 0},
        {name: this.$HomeLang['10'], value: 1},
        {name: this.$HomeLang['11'], value: 2}
      ],
      selected: null,
      followList: [],
      tabConfigForReport: {
        0: '直播排行',
        1: '关注的主播',
        2: '为你推荐',
      },
      rankShowed: false,
      followShowed: false,
    }
  },
  watch: {
    // 如果有直播活动 tab默认切换到 为你推荐
    bannerList(val) {
      if(val.length > 0) {
        this.selected = 2
        return
      }
      this.selected = 0
    },
    selected(val) {
      if(val === 1) {
        this.getFollowUpData()
      }
      if(!this.rankShowed && val === 0) {
        this.reportRankListShow()
      }
    },
  },
  methods: {
    onChange(val) {
      this.selected = val

      // 直播排行 展现上报
      if(this.selected === 0 && !this.rankShowed) {
        this.reportRankListShow()
      }
    },
    async getFollowUpData() {
      if(this.followList.length > 0) return
      try {
        const { data } = await getFollowUp({pagesize: 6, page: 1})
        if(data.code === 0) {
          this.followList = data.data && data.data.list

          if(this.followShowed) return

          // 关注的主播 展现上报
          customReport('live_tabcard_show', {
            tab_name: '关注的主播 ',
            list: this.followList.map((item, index) => {
              return {
                position: index + 1,
                room_id: item.roomid,
                online: item.online,
                up_id: item.uid,
                area_id: item.parent_area_id,
                subarea_id: item.area_id,
              }
            }),
          })
          this.followShowed = true
        }
      } catch(err) {}
    },
    reportRankListShow() {
      customReport('live_tabcard_show', {
        tab_name: '直播排行',
        list: this.rankList.map((item, index) => {
          return {
            position: index + 1,
            room_id: item.roomid,
            online: item.online,
            up_id: item.uid,
            area_id: item.parent_area_id,
            subarea_id: item.area_id,
          }
        }),
      })
      this.rankShowed = true
    }
  }
}
</script>

<style lang="less">
.live-tabs {
  width: 320px;
  .tab-switch {
    display: flex;
    height: 36px;
    margin-right: 16px;
    margin-bottom: 16px;
    align-items: center;
    .tab-switch-item {
      font-size: 12px;
      line-height: 18px;
      height: 22px;
      margin-right: 12px;
      cursor: pointer;
      &.on {
        border-bottom: 1px solid #00a1d6;
        color: #00a1d6;
      }
    }
  }
}
</style>

