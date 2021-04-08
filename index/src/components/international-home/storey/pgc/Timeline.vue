<template>
  <div class="time-line" v-van-lazyload="getTimelineData">
    <StoreyTitle :info="{iconfont: `bili-${info.type}`, title: info.name, link: info.morelink}">
      <TabSwitch slot="left" :tabs="tabConfig" :selected="selected" @on-change="onChange" v-van-report:ogv-tab="{businesstype: type, ord_id: selected + 1}" />
      <a class="tl-link" :href="moreLike" target="_blank" slot="right" v-van-report:ogv-time="{businesstype: type}">{{$HomeLang['15']}} <i class="bilifont bili-icon_caozuo_qianwang"></i></a>
    </StoreyTitle>
    <div class="zone-list-box">
      <TimelineCard class="item" v-for="(item, index) in timelineList" :key="`tlc-${index}`" :info="item" :type="type" :index="selected + 1" />
      <Nodata :message="message" v-if="!timelineData || !timelineList.length" />
    </div>
  </div>
</template>

<script>
import StoreyTitle from 'g-public/components/international/StoreyTitle'
import TabSwitch from 'g-public/components/international/TabSwitch'
import Nodata from './Nodata'
import TimelineCard from './TimelineCard'

import { getTimeline } from 'g-public/apis/home'

export default {
  components: {
    StoreyTitle,
    TabSwitch,
    TimelineCard,
    Nodata
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    type: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      timelineData: null,
      tabConfig: [
        // 最新 周一 ... 周日
        {name: this.$HomeLang['16'], value: 0},
        {name: this.$HomeLang['17'], value: 1},
        {name: this.$HomeLang['18'], value: 2},
        {name: this.$HomeLang['19'], value: 3},
        {name: this.$HomeLang['20'], value: 4},
        {name: this.$HomeLang['21'], value: 5},
        {name: this.$HomeLang['22'], value: 6},
        {name: this.$HomeLang['23'], value: 7}
      ],
      selected: 0
    }
  },
  computed: {
    timelineList() {
      if(!this.timelineData) return []

      if(this.selected === 0){
        return this.timelineData && this.timelineData.latest && this.timelineData.latest.slice(0, 16)
      }

      const arr = this.timelineData.timeline.filter(item => {
        return item.day_of_week === this.selected
      })
      return (arr[0] && arr[0]['episodes'] || []).sort((a, b) => {
        return a.pub_ts - b.pub_ts
      })
    },
    moreLike(){
      return `//www.bilibili.com/${this.info.type}/timeline/`
    },
    message() {
      return `今天没有${this.info.alias}更新`
    }
  },
  methods: {
    async getTimelineData() {
      try {
        const { data } = await getTimeline({ season_type: this.type })
        if(data.code === 0) {
          this.timelineData = data.result
        }
        /* eslint-disable */
      } catch(err) {}
    },
    onChange(val) {
      this.selected = val
    }
  },
}
</script>

<style lang="less">
.time-line {
  .zone-list-box {
    // width: 1070px;
    // widen-home todo
    width: 1287px;
    height: 376px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    overflow: auto;
    .item {
      margin:0 30px 24px 0;
    }
  }
  .tab-switch {
    display: flex;
    margin-left: 4px;
    .tab-switch-item {
      font-size: 14px;
      line-height: 30px;
      height: 30px;
      margin-right: 24px;
      cursor: pointer;
      &.on {
        border-bottom: 1px solid #00a1d6;
        color: #00a1d6;
      }
    }
  }
  .tl-link {
    width: 112px;
    height: 30px;
    border: 1px solid #00A1D6;
    border-radius: 2px;
    background: #fff;
    text-align: center;
    line-height: 27px;
    padding: 0 0 0 14px;
    font-size: 14px;
    color: #00A1D6;
    display: flex;
    align-items: center;
    transition: all .2s;
    line-height: 16px;
    &:hover{
      color: #fff;
      background: #00A1D6;
    }
  }
}
</style>

