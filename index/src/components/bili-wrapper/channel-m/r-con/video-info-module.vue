<template>
  <div class="video-info-module" >
    <div class="v-title">{{ item.title }}</div>
    <div class="v-info">
      <span class="name">{{ item.author }}</span>
      <span class="line"></span>
      <span class="time">{{ item.create }}</span>
    </div>
    <div class="v-preview clearfix">
      <div class="lazy-img">
        <img alt="" src="//i2.hdslb.com/bfs/archive/78e645992d7535bf977fbf12843c7e00779041ab.jpg@96w_60h.webp">
      </div>
      <p class="txt">{{ item.description }}</p>
    </div>
    <div class="v-data">
      <span class="play">
        <i class="icon"></i>{{ thousand(item.play) }}
      </span>
      <span class="star">
        <i class="icon"></i>{{ thousand(item.favorites) }}
      </span>
      <span class="coin">
        <i class="icon"></i>{{ thousand(item.coins) }}
      </span>
    </div>
  </div>
</template>

<script>
import {formatNum} from "../../../../assets/js/bili-wrapper/utils"
export default {
  name: "video-info-module",

  props:{
    item:Object
  },

  methods: {
    thousand(a) {
      return formatNum(a);
    },
  },
}
</script>

<style>

</style>