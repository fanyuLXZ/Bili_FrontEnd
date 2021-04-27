<!--  作者：欧阳苏蓉 文章详情 排序-->
<template>
  <div class="comment-header clearfix">
    <div class="tabs-order">
      <ul class="clearfix">
        <li data-sort="0" class="default-sort" style="display: none;">全部评论</li>

        <li data-sort="2" class="hot-sort" :class="{'on':currentSort==index}" v-for="(item,index) in sort" :key="index" @click="active(index)">{{ item }}</li>
      </ul>
    </div>
    <div class="header-interaction"></div>
  </div>
</template>

<script>
export default {
  name: "Sort",

  data(){
    return{
      currentSort:0,
      sort:["按热度排序","按时间排序"]
    }
  },

  methods: {
    active(index) {
      this.currentSort  =  index;
    }
  },

}
</script>

<style>

</style>