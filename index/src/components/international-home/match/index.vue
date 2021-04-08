<template>
  <SpaceBetween v-if="show">
    <div class="extension">
      <StoreyTitle :info="{sprite: sprite, title: matchTitle, link: matchLink}" />
        <div class="ext-box">
          <component 
            :is="setCard(item)" 
            v-for="(item, index) in vlist" 
            :info="getCard(item)"
            :showUp="false"
            :key="index">
          </component>
        </div>
    </div>
    <div class="bypb-window ggpos">
      <a :href="adLink" target="_blank" v-if="adPic">
        <!-- <img class="pic" :src="adPic" :alt="adTitle"> -->
        <van-image
          class="pic" 
          :src="adPic" 
          :alt="adTitle"
          :options="{c: 1, q: 100}"
          width="320" 
          height="184">
        </van-image>
      </a>
    </div>
  </SpaceBetween>
</template>

<script>
import SpaceBetween from 'g-public/components/international/SpaceBetween'
import StoreyTitle from 'g-public/components/international/StoreyTitle'
import VideoCard from './VideoCard'
import Card from './Card'
import LiveCard from './LiveCard'
import { trimHttp } from 'g-public/js/utils'

import { mapState } from 'vuex'

export default {
  components: {
    StoreyTitle,
    SpaceBetween,
    Card,
    LiveCard,
    VideoCard
  },
  computed: {
    ...mapState(['locsData']),
    matchTitle() {
      return (this.locsData['3441'] && this.locsData['3441'][0] && this.locsData['3441'][0].name) || this.$HomeLang['28']
    },
    matchLink() {
      return (this.locsData['3441'] && this.locsData['3441'][0] && this.locsData['3441'][0].url) || ''
    },
    adTitle() {
      return (this.locsData['3455'] && this.locsData['3455'][0] && this.locsData['3455'][0].name) || ''
    },
    adLink() {
      return (this.locsData['3455'] && this.locsData['3455'][0] && this.locsData['3455'][0].url) || ''
    },
    adPic() {
      return trimHttp(this.locsData['3455'] && this.locsData['3455'][0] && this.locsData['3455'][0].pic) || ''
    },
    vlist() {
      return (this.locsData['3449'] || []).slice(0, 6)
    },
    sprite() {
      return trimHttp(this.locsData['3443'] && this.locsData['3443'][0] && this.locsData['3443'][0].pic) || ''
    },
    show() {
      return this.vlist.length >= 6 && this.adPic
    }
  },
  methods: {
    setCard(item) {
      if(item.archive) {
        return 'VideoCard'
      }else if(item.room) {
        return 'LiveCard'
      }else {
        return 'Card'
      }
    },
    getCard(item) {
      if(item.archive) {
        if(item.name) {
          item.archive.title = item.name || item.title
        }
        if(item.pic) {
          item.archive.pic = item.pic
        }
        item = item.archive
      }
      console.log(item)
      return item
    }
  }
}
</script>

<style lang="less">
.extension {
  width: 1286px;
  .ext-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
.ggpos {
  padding-top: 52px;
  .pic {
    width: 100%;
    border-radius: 2px;
  }
}
</style>

