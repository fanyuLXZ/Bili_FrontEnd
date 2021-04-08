<template>
  <div class="live-rank" v-if="list.length > 0">
    <a class="live-rank-item"
       v-for="(item, index) in list"
       :key="`live-rankitem-${index}`"
       :href="item.link"
       target="_blank"
       @click="handelClickReport(item, index)">
      <div class="rank-face">
        <span v-if="showNumber" class="number" :class="{'on': index < 3}">{{index + 1}}</span>
        <van-image
          :src="item.face"
          :options="{c: 1, q: 100}"
          width="44"
          height="44"
        ></van-image>
        <div class="txt">
          <p>{{item.uname}}</p>
          <p class="p2">{{item.title}}</p>
        </div>
      </div>
      <div class="count"><i class="bilifont bili-icon_xinxi_renqi"></i>{{formatNum(item.online)}}</div>
    </a>
  </div>
  <EmptyState v-else />
</template>

<script>
import { trimHttp, formatNum, customReport } from 'g-public/js/utils'
import EmptyState from 'g-public/components/international/EmptyState'

export default {
  components: {
    EmptyState
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    showNumber : {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      trimHttp,
      formatNum
    }
  },
  methods: {
    handelClickReport(item, index) {
      customReport('live_tabcard_click', {
        tab_name: this.name === 'rank' ? '直播排行' : '关注的主播',
        position: index + 1,
        room_id: item.roomid,
        up_id: item.uid,
        area_id: item.parent_area_id,
        subarea_id: item.area_id,
        online: item.online,
      })
    }
  },
}
</script>

<style lang="less">
.live-rank {
  .live-rank-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
    .rank-face{
      display: flex;
      align-items: center;
    }
    .number {
      font-size: 14px;
      color: #999;
      width: 18px;
      height: 18px;
      text-align: center;
      line-height: 18px;
      background: #fff;
      border-radius: 2px;
      display: inline-block;
      margin-right: 12px;
      &.on {
        color: #fff;
        background: #00a1d6;
      }
    }
    img {
      width: 44px;
      height: 44px;
      border-radius: 44px;
      margin-right: 12px;
    }
    .txt {
      display: inline-block;
      margin-right: 10px;
      width: 158px;
      vertical-align: middle;
      p{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:first-child{
          font-size: 14px;
          font-weight: 500;
        }
        &.p2 {
          color: #505050;
          line-height: 18px;
          margin-top: 2px;
        }
      }
    }
    .count {
      color: #999;
      font-size: 12px;
      display: flex;
      white-space: nowrap;
      padding-top: 4px;
      .bilifont {
        margin-right: 4px;
      }
    }
  }
}
</style>
