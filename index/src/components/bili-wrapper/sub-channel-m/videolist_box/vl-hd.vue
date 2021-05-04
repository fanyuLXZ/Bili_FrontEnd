<template>
  <div class="vl-hd clearfix">
    <div class="left">
      <ul class="tab-list order-tab">
        <a href="#/all/default" v-for="(text,index) in all" :key="index" @click="allSort(index)">
          <li :class="hot===index?'on':' '">{{ text }}</li>
        </a>
      </ul>
    </div>
    <div class="right">
      <ul class="tab-list display-tab">
        <li :class="(type === i)?'on mod-'+i:'mod-'+i" v-for="(i,index) in [1,2,3]" :key="index" @click="mod(i)"></li>
      </ul>
    </div>
    <vl-hd-sub v-if="hot===1" />
  </div>
</template>

<script>
import modBtn from "./modBtn";
import VlHdSub from "./vl-hd-sub";

export default {
  name: "vl-hd",
  components: {VlHdSub},
  data() {
    return {
      type: 2,    //视频列表排序样式
      hot: 0,   //0为投稿时间排序1为视频热度排序 当为1时重新拉取数据
      all: [
        "投稿时间排序", "视频热度排序"
      ]
    }
  },

  methods: {
    mod(i) {
      this.type = i
      modBtn.$emit('type', this.type)
      console.log(this.type)
    },
    allSort(index) {
      this.hot = index
    }
  },

  mounted() {

  }
}
</script>

<style>

</style>