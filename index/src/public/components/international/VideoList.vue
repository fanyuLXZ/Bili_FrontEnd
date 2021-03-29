<template>
  <div class="card-list" v-van-lazyload="getRegionData">
    <StoreyTitle :info="{iconfont: info.type ? `bili-${info.type}` : null, title: info.name, link: info.morelink}">
      <Exchange slot="right" :link="info.morelink" :type="info.name" @on-change="getRegionData(true)" :state="state" />
    </StoreyTitle>
    <div class="zone-list-box">
      <VideoCard :type="item.card_type" v-for="(item, index) in list" :key="`vc-${index}`" :info="item" :showUp="showUp" />
    </div>
  </div>
</template>

<script>
import StoreyTitle from './StoreyTitle'
import VideoCard from './VideoCard'
import Exchange from './Exchange'

import { getRegion, getRegionLatest } from 'g-public/apis/home'

export default {
  components: {
    StoreyTitle,
    VideoCard,
    Exchange
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
    }
  },
  data() {
    return {
      list: [],
      state: false
    }
  },
  methods: {
    async getRegionData(change = false) {
      this.state = false
      this.list = []
      try {
        // 资讯分区楼层初次加载展示最新投稿,
        if (this.info.type === 'information' && !change) {
          const { data } = await getRegionLatest({ps: 12, rid: this.info.tid})
          if(data.code === 0) {
            this.list = data.data && data.data.items && data.data.items.slice(0,12).map((item) => ({
              ...item,
              pic: item.cover,
              owner: item.author,
              aid: item.aid || item.id
            }))
            this.state = true
          }
        } else {
          const { data } = await getRegion({ps: 12, rid: this.info.tid})
          if(data.code === 0) {
            this.list = data.data && data.data.archives
            this.state = true
          }
        }
      } catch(err) {}
    }
  },
  mounted() {
    // this.getRegionData()
  }
}
</script>