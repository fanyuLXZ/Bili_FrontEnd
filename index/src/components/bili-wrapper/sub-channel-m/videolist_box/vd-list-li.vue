<template>
  <li>
    <div class="l-item">
      <div class="l">
        <div class="spread-module">
          <a :href="'//www.bilibili.org/video/BV'+item.aid" target="_blank">
            <div class="pic">
              <div class="lazy-img">
                <img :alt="item.title" :src="item.pic">
              </div>
              <i class="icon medal "></i>

              <div class="cover-preview-module"><!---->
                <div class="progress-bar"><span style="width: 0%;"></span></div>
              </div>
              <div class="mask-video"></div>
              <div class="danmu-module"></div>
              <span class="dur">{{ item.duration }}</span><!----><!---->
              <div class="watch-later-trigger w-later"></div>
            </div>
            <p :title="item.title" class="t">{{ item.title }}</p>
            <p class="num">
              <span class="play"><i class="icon"></i>{{ item.stat.view }}</span>
            </p>
          </a>
        </div>
      </div>
      <div class="r">
        <a href="//www.bilibili.com/video/BV1zy4y1s75E" target="_blank" :title="item.title" class="title">{{ item.title }}</a>
        <div class="v-desc" v-if="mod!==3">{{ item.desc }}</div>
        <div class="v-info">
          <span class="v-info-i">
            <i title="观看" class="b-icon b-icon-v-play"></i>
            <span>{{ item.stat.view }}</span>
          </span>
          <span class="v-info-i">
            <i title="收藏" class="b-icon b-icon-v-fav"></i>
            <span>{{ item.stat.favorite }}</span>
          </span>
        </div>
        <div class="up-info">
          <a href="//space.bilibili.com/22680908" target="_blank" :title="item.owner.name" class="v-author">
            {{ item.owner.name }}
          </a>
          <span v-if="mod===1" title="日期" class="v-date">{{ item.ctime }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import modBtn from "./modBtn";
export default {
  name: "vd-list-li",

  data(){
    return{
      mod:2   //列表排序样式
    }
  },

  props:{
    item:Object,
  },

  mounted() {
    modBtn.$on("type", (type) => {
      this.mod = type;
    })
  },

}
</script>
