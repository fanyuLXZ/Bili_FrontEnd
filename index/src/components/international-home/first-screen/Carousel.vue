<template>
  <div class="focus-carousel home-slide" ref="carousel">
    <van-slide class="ggc" ref="ggc" auto :interval="5000" @change="change" @mounted="init" v-if="list.length > 0">
      <template v-for="(item, index) in list">
        <!-- 过滤空帧 null_frame为true则代表这一帧是空帧 -->
        <div v-if="!item.null_frame" class="item" :key="`gg-c-${item.src_id}`" :style="`z-index:${list.length - index};`">
          <a v-adReport="{data: item, locId: locId, noExposure: true}" :data-loc-id="locId" target="_blank">
            <!-- <van-image 
              :src="item.pic"
              :alt="item.name"
              :options="{c: 1, q: 100}"
              width="1100" 
              height="484">
            </van-image> -->

            <!-- 因为要上报第一张图片的加载时间，故if else -->
<!--            <img :src="`${trimHttp(item.pic)}@880w_388h_1c_95q`" :alt="item.name" onload="reportfs()" v-if="index === 0">-->
<!--            <img :src="`${trimHttp(item.pic)}@880w_388h_1c_95q`" :alt="item.name" v-else>-->
            <img :src="`${trimHttp(item.pic)}@880w_388h_1c_95q`" :alt="item.name" >
            <p class="title">
              <i class="bypb-icon" v-if="item.is_ad"></i>
              {{item.name}}
            </p>
          </a>
        </div>
      </template>
    </van-slide>
    <div class="trigger" v-if="list.length > 1">
      <template v-for="(item, index) in list">
        <span
          v-if="!item.null_frame"
          :key="`trig-${index}`"
          @click="go(index)"
          :class="{'on': index === currentIndex}">
        </span>
      </template>
    </div> 
    <a class="more" href="//www.bilibili.com/blackboard/topic_list.html">{{$HomeLang['4']}}<i class="bilifont bili-icon_caozuo_qianwang"></i></a>
  </div>
</template>

<script>
import { trimHttp } from '../../../public/js/utils'
import Bus from '../../../public/js/bus'

export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    locId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      trimHttp: trimHttp,
      currentIndex: 0
    }
  },
  methods: {
    init() {
      this.onReport()
    },
    change(index){
      this.currentIndex = index
      this.onReport()
    },
    go(index) {
      this.$refs.ggc.go(index)
    },
    onReport() {
      Bus.$emit('slide-show', {
        el: this.$refs.carousel,
        data: this.list[this.currentIndex],
        locId: this.locId
      })
    }
  }
}
</script>

<style lang="less">
.focus-carousel {
  position: relative;
  width: 550px;
  height: 242px;
  overflow: hidden;
  border-radius: 2px;
  .ggc{
    width: 100% !important;
    height: 100% !important;
    z-index: 1;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .more {
    position: absolute;
    z-index: 11;
    opacity: 0;
    transition: opacity .3s;
    bottom: 44px;
    right: 12px;
    font-size: 12px;
    padding: 4px 8px;
    background: rgba(0,0,0,.65);
    color: #fff;
    border-radius: 2px;
    i {
      vertical-align: middle;
    }
  }
  &:hover{
    .more {
      opacity: 1;
    }
  }
  .bypb-icon {
    display: inline-block;
    vertical-align: middle;
    width: 38px;
    height: 22px;
    background-size: cover;
    border-radius: 2px;
    margin-right: 3px;
  }
}
</style>
