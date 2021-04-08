<template>
  <div class="card-list">
    <StoreyTitle :info="{iconfont: info.type ? `bili-${info.type}` : null, title: info.name, link: info.morelink}"
      v-van-lazyload="getCheeseRecommendData"
    >
      <Exchange slot="right"
        :link="info.morelink"
        :type="info.name" 
        @on-change="getCheeseRecommendData" 
        :state="state"
        class="report-wrap-module"
        id="cheese_detail_more"
      />
    </StoreyTitle>
    <div class="zone-list-box cheese report-wrap-module" id="cheese_detail_card">
      <Nodata v-if="state && !list.length" />

      <template v-else>
        <VideoCard v-for="(item, index) in list" :key="`vc-${index}`" :index="index" :info="item" :showUp="showUp" :type="type" />

        <template v-if ="list.length < 12">
           <div class="video-card-common placeholder" v-for="(item, idx) in (12 - list.length)" :key="idx"></div>
        </template>

      </template>
      
    </div>
  </div>
</template>

<script>
import StoreyTitle from './CheeseStoreyTitle'
import VideoCard from './CheeseVideoCard'
import Exchange from './CheeseExchange'
import Nodata from './Nodata'

// import { getRegion, getCheeseRecommend } from 'g-public/apis/home'
import {  getCheeseRecommend } from 'g-public/apis/home'

export default {
  components: {
    StoreyTitle,
    VideoCard,
    Exchange,
    Nodata
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    showUp: {
      type: Boolean,
      default: true
    },
    type: {
      type: String
    },
  },
  data() {
    return {
      list: [],
      state: false
    }
  },
  methods: {
    async getCheeseRecommendData() {
      this.state = false
      this.list = []
      try {
        const { data } = await getCheeseRecommend({
          load_type: 1
        })
        this.state = true
        if(data.code === 0) {
       
          this.list = (data.data && data.data.season) || []
          this.state = true
        }
      } catch(err) {
         this.state = true
      }
    }
  },
  mounted() {
    // this.getRegionData()
  }
}
</script>