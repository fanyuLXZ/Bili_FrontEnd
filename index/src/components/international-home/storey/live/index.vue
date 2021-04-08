<template>
  <SpaceBetween v-van-lazyload="getLiveRoomRecommendData">
    <LiveList 
      :info="info" 
      :list="list" 
      :onlineCount="onlineCount" 
      :state="state"
      @exchange="handleExchange" />
      
    <Tabs :rankList="rankList" :bannerList="bannerList" />
  </SpaceBetween>
</template>

<script>
/* eslint-disable */
import SpaceBetween from '../../../../public/components/international/SpaceBetween'
import LiveList from './LiveList'
import Tabs from './Tabs'
import { getLiveRoomRecommend, getLiveRoomgetNewDynamic } from '../../../../public/apis/home'
import axios from '../../../../public/js/axios/caxios'

const MAX_COUNT = 12

export default {
  components: {
    SpaceBetween,
    LiveList,
    Tabs
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
      list: [],
      rankList: [],
      onlineCount: 0,
      bannerList: null,
      state: false,
    }
  },
  methods: {
    async getLiveRoomRecommendData() {
      this.state = false
      try {
        const { data } = await getLiveRoomRecommend()
        if(data.code === 0) {
          this.list = data.data && data.data.recommend_room_list.slice(0, MAX_COUNT)
          this.rankList = (data.data && data.data.ranking_list) || []
          this.onlineCount = data.data && data.data.online_total
          this.bannerList = (data.data && data.data.preview_banner_list) || []
          this.state = true
        }
      } catch(err) {}
    },

    async handleExchange() {
      this.state = false
      try {
        const { data } = await getLiveRoomgetNewDynamic()
        if(data.code === 0) {
          this.list = data.data && data.data.recommend_room_list.slice(0, MAX_COUNT)
          this.state = true
        }
      } catch(err) {}
    }
  },
}
</script>
