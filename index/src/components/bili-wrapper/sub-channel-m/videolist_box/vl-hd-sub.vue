<template>
  <div class="vl-hd-sub">
    <div class="bili-dropdown rank-dropdown">
      <span class="selected">{{ dropdowns[show] }}</span>
      <i class="icon icon-arrow-down"></i>
      <ul class="dropdown-list">
        <li class="dropdown-item" :style="show === index ? 'display: none;':' '" v-for="(item,index) in dropdowns" :key="index" @click="click(index)">{{ item }}</li>
      </ul>
    </div>
    <span class="s-line"></span>
  </div>
</template>

<script>
export default {
  name: "vl-hd-sub",

  data(){
    return{
      show:0,   //显示排序要求
      dropdowns:["播放数","评论数","收藏数","硬币数","弹幕数"]
    }
  },

  methods:{
    click(index){
      this.show = index
    }
  }
}
</script>

<style>

</style>