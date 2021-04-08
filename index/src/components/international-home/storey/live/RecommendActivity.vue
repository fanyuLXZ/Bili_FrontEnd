<template>
  <div v-show="bannerList" class="recommend-activity home-slide" v-livelazyload="handleShow" ref="liveBanner">
    <div class="carousel">
      <van-slide ref="liveAct" auto :interval="5000" @change="change" v-if="bannerList.length > 0">
        <div class="item" v-for="(item, index) in bannerList" :key="`ra-${index}`" @click="handleClick(item, index)">
          <a :href="trimHttp(item.link)" target="_blank">
            <van-image 
              :src="item.pic"
              :options="{c: 1, q: 100}"
              width="320" 
              height="330">
            </van-image>
            <p class="title">{{ item.title }}</p>
          </a>
        </div>
      </van-slide>
      <div class="trigger" v-if="bannerList.length > 1">
        <span 
          v-for="(item, index) in bannerList" 
          :key="`trig-${index}`"
          @click="go(index)"
          :class="{'on': index === currentIndex}">
        </span>
      </div> 
    </div>
    <!-- <div class="anchor">
      <a target="_blank" href="//h.bilibili.com">
        <img src="~g-public/images/live-pic.png">
      </a>
      <a target="_blank" href="//vc.bilibili.com">
        <img src="~g-public/images/live-video.png">
      </a>
    </div> -->
  </div>
</template>

<script>
import { trimHttp, customReport } from 'g-public/js/utils'

export default {
  props: {
    bannerList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      trimHttp: trimHttp,
      currentIndex: 0,
      list: []
    }
  },
  watch: {
    bannerList(nv) {
      this.list = nv
    }
  },
  methods: {
    change(index){
      this.currentIndex = index

      // 每张卡片仅上报一次
      if(this.list[index].isShowReport) return

      // 且触发变更的时候正在视口中
      const clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      var rectObj = this.getRect(this.$refs.liveBanner)
      if (rectObj.top > 0 && rectObj.top < clientHeight && rectObj.bottom > 0 && rectObj.bottom < clientHeight) {
        this.handleShow()
      }
    },
    go(index) {
      this.$refs.liveAct.go(index)
    },
    getRect (element) {
      const rect = element.getBoundingClientRect()
      const top = document.documentElement.clientTop ? document.documentElement.clientTop : 0
      const left = document.documentElement.clientLeft ? document.documentElement.clientLeft : 0
      return {
        top: rect.top - top,
        bottom: rect.bottom - top,
        left: rect.left - left,
        right: rect.right - left
      }
    },
    handleShow() {
      const item = this.bannerList.length && this.bannerList[this.currentIndex]
      customReport('live_banner_show', {
        tab_name: '为你推荐',
        position: this.currentIndex + 1,
        banner_id: item.id,
        title: item.title,
        url: item.link,
      })
      this.list[this.currentIndex].isShowReport = true
    },
    handleClick(item, index) {
      customReport('live_banner_click', {
        tab_name: '为你推荐',
        position: index + 1,
        banner_id: item.id,
        title: item.title,
        url: item.link,
      })
    }
  },
}
</script>

<style lang="less">
.recommend-activity {
  position: relative;
  height: 330px;
  .carousel, .van-slide {
    position: relative;
    width: 100% !important;
    height: 100% !important;
    img {
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
  }
  .anchor {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    img {
      width: 150px;
    }
  }
}
</style>