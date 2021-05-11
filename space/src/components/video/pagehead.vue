<template>
  <div class="row page-head clearfix"><div class="breadcrumb"><p class="item cur video-title">TA的视频/我的视频
</p></div>
  <div class="v-filter-line clearfix">
    <div class="be-tab">
     <ul class="be-tab-inner clearfix">
      <li :class="['be-tab-item',this.tex==0?'is-active':'']">
        <input type="radio" name="be-tab-1" class="be-tab-input" value="pubdate" @click="translate(0)"><span>最新发布</span></li>
      <li :class="['be-tab-item',this.tex==76?'is-active':'']">
        <input type="radio" name="be-tab-1" class="be-tab-input" value="click" @click="translate(76)"><span>最多播放</span></li>
      <li :class="['be-tab-item',this.tex==152?'is-active':'']">
          <input type="radio" name="be-tab-1" class="be-tab-input" value="stow" @click="translate(152)"><span>最多收藏</span></li>
      </ul>
   <div class="be-tab-cursor" :style="{transform:'translateX('+this.tex+'px)',width:'56px'}"></div>
      </div>
      <div class="item style">
        <span data-style="cube" :class="['icon','cube',this.iocnumber==1?'active':'']" @click="icontext(1)"></span>
        <span data-style="list" :class="['icon','list',this.iocnumber==2?'active':'' ]" @click="icontext(2)"></span></div>
        </div></div>
</template>

<script>
export default {
  data() {
    return {
      tex:0,
      iocnumber:1,
    }
  },
methods: {
  translate(a){
    this.tex=a
  },
  icontext(b){
    this.iocnumber=b
    this.$emit("iocns",this.iocnumber)
  }
},
}
</script>

<style>

</style>