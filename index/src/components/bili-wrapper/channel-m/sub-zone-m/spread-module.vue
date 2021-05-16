<template>
  <div class="spread-module">
    <a :href="'//www.bilibili.org/video/BV'+item.aid" target="_blank">
    <div class="pic">
      <div class="lazy-img">
        <img :alt="item.title" :src="item.pic">
      </div>

      <i class="icon medal" :class="crown"></i>
<!--      <i class="icon medal golden"></i>-->
      <div class="cover-preview-module">
        <div class="progress-bar"><span style="width: 0%;"></span></div>
      </div>
      <div class="mask-video"></div>
      <div class="danmu-module"></div>
      <span class="dur">{{ item.duration }}</span>
      <div class="watch-later-trigger w-later"></div>
    </div>
    <p :title="item.title" class="t">{{ item.title }}</p>
    <p class="num">
      <span class="play">
        <i class="icon"></i>{{ thousand(item.stat.view) }}
      </span>
      {{crown}}
    </p>
    </a>
  </div>
</template>

<script>
import {formatNum} from "../../../../assets/js/bili-wrapper/utils"
export default {
  name: "spread-module",

  props:{
    item:Object
  },

  methods: {
    thousand(a) {
      return formatNum(a);
    },
  },

  computed:{
    crown() {
      const num = this.item.stat && this.item.stat.coin || 0
      console.log(num)
      if (num >= 2000 && num < 10000) {
        return 'silvery'
      } else if (num >= 10000) {
        return 'golden'
      } else {
        return ''
      }
    },
  }
}
</script>
