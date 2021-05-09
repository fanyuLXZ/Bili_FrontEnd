<template>
  <div class="groom-module">
    <a href="//www.bilibili.com/video/BV1tQ4y1Z7qA" target="_blank" title="《可露希尔的秘密档案》01话：可露希尔的自我介绍！">
    <div class="lazy-img">
      <img alt="《可露希尔的秘密档案》01话：可露希尔的自我介绍！" src="//hdslb.com/bfs/archive/140e78e9f32b6a353bd78889a2558034dba21c1e.jpg@160w_100h.webp">
    </div><!---->
    <div class="card-mark">
      <p class="title">{{ item.title }}</p>
      <p class="author">up主：{{ item.author }}</p>
      <p class="play">播放：{{ thousand(item.play) }}</p>
    </div>
  </a>
    <div class="watch-later-trigger w-later"></div>
  </div>
</template>

<script>
import {formatNum} from 'g-public/js/utils'

export default {
  name: "groom-module",

  props: {
    item: Object
  },

  methods: {
    thousand(a) {
      return formatNum(a);
    }
  }
}
</script>

<style>

</style>