<template>
  <h3 class="section-title ">
    <a href="/161775300/video" class="t">TA的视频</a>
    <span class="count">102</span>
    <a href="/161775300/video" class="more">更多</a>
    <div class="be-tab">
      <ul class="be-tab-inner clearfix">
      <li :class="['be-tab-item',this.tex==0?'is-active':'']">
        <input type="radio" name="be-tab-1" class="be-tab-input" value="pubdate" @click="translate(0)"><span>最新发布</span></li>
      <li :class="['be-tab-item',this.tex==63?'is-active':'']">
        <input type="radio" name="be-tab-1" class="be-tab-input" value="click" @click="translate(63)"><span>最多播放</span></li>
      <li :class="['be-tab-item',this.tex==126?'is-active':'']">
          <input type="radio" name="be-tab-1" class="be-tab-input" value="stow" @click="translate(126)"><span>最多收藏</span></li>
      </ul>
      <div class="be-tab-cursor" :style="{transform:'translateX('+this.tex+'px)',width:'48px'}"></div></div><!----></h3>
</template>

<script>
export default {
  data() {
    return {
      tex:0
    }
  },
methods: {
  translate(a){
this.tex=a
  }
},
}
</script>

<style>
.section-title .t {
    display: inline-block;
    vertical-align: middle;
}
a {
    text-decoration: none;
}
a {
    color: inherit;
    text-decoration: none;
    transition: color .2s ease,background-color .2s ease;
}
</style>