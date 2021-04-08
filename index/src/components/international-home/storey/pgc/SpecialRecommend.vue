<template>
  <div class="special-recommend home-slide" v-van-lazyload="getSpecialRecommendData">
    <slot name="header" />
    <div class="carousel">
      <van-slide ref="special" auto :interval="5000" @change="change" v-if="list.length > 0">
        <div class="item" v-for="(item, index) in list" :key="`sr-${index}`">
          <a :href="trimHttp(item.link)" target="_blank">
            <van-image 
              :src="item.img"
              :options="{c: 1, q: 100}"
              :width="`${width}`" 
              :height="`${height}`">
            </van-image>
            <p class="title">{{ item.title }}</p>
          </a>
        </div>
      </van-slide>
      <div class="trigger" v-if="list.length > 1">
        <span 
          v-for="(item, index) in list" 
          :key="`trig-${index}`"
          @click="go(index)"
          :class="{'on': index === currentIndex}">
        </span>
      </div> 
    </div>
  </div>
</template>

<script>
import { trimHttp } from '../../../../public/js/utils'
import { getSpecialRecommend } from '../../../../public/apis/home'
/* eslint-disable */
export default {
  props: {
    width: 0,
    height: 0,
    position_id: 0
  },
  data() {
    return {
      trimHttp: trimHttp,
      list: [],
      currentIndex: 0
    }
  },
  methods: {
    change(index){
      this.currentIndex = index
    },
    go(index) {
      this.$refs.special.go(index)
    },
    async getSpecialRecommendData() {
      try {
        const { data } = await getSpecialRecommend({position_id: this.position_id})
        if(data.code === 0) {
          this.list = data.result
        }
      } catch(err) {}
    }
  },
  mounted() {
    // this.getSpecialRecommendData()
  }
}
</script>


<style lang="less">
.special-recommend {
  width: 320px;
  header {
    height: 36px;
    margin-bottom: 16px;
    font-size: 20px;
    color: #212121;
    line-height: 36px;
  }
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
}
</style>
