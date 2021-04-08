<template>
  <div class="live-list">
    <StoreyTitle :info="{iconfont: `bili-${info.type}`, title: info.name, link: info.morelink}">
      <div class="text-info" slot="left">
        <!-- 当前共有 xx 个直播 -->
        <span>{{$HomeLang['7']}} {{onlineCount}} {{$HomeLang['8']}}</span>
      </div>
      <Exchange slot="right" :link="info.morelink" :type="`live`" @click.native="rindex ++" @on-change="$emit('exchange')" :state="state" />
    </StoreyTitle>
    <div class="zone-list-box">
      <LiveCard 
        @click.native="handleClickRport(item, index)"
        report
        v-for="(item, index) in list" :key="`lc-${rindex}-${index}`" :info="item" :index="index" :rindex="rindex" />
    </div>
  </div>
</template>

<script>
import StoreyTitle from 'g-public/components/international/StoreyTitle'
import Exchange from 'g-public/components/international/Exchange'
import LiveCard from './LiveCard'
import { customReport } from 'g-public/js/utils'

const LIVE_SOURCE = -99998

export default {
  components: {
    LiveCard,
    StoreyTitle,
    Exchange
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    onlineCount: {
      type: Number,
      default: 0
    },
    state: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      rindex: 0
    }
  },
  methods: {
    handleClickRport(item, index) {
      customReport('live_card_click', {
        position: index + 1,
        room_id: item.roomid,
        up_id: item.uid,
        area_id: item.area_v2_parent_id,
        subarea_id: item.area_v2_id,
        online: item.online,
        session_id: item.session_id,
        special_id: item.special_id,
        refresh: this.rindex,
        query_id: LIVE_SOURCE,
        source: LIVE_SOURCE,
        launch_id: item.group_id,
      })
    }
  },
}
</script>

<style lang="less">
.live-list {
  .text-info span {
    margin-right: 24px;
  }
}
</style>