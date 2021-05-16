<!--  作者：欧阳苏蓉 动态文章详情 二级评论  -->
<template>
  <div  data-id="4443188417" data-index="2" class="reply-item reply-wrap" >

    <div v-for="item in SubCommentsList" :key="item.uname">
      <a href="//space.bilibili.com/442257063" data-usercard-mid="442257063" target="_blank" class="reply-face" style="top: 0px;">
        <img :src="item.member.face+'52w_52h.webp'" alt="">
      </a>
      <div class="reply-con">
        <div class="user">
          <a href="//space.bilibili.com/442257063" target="_blank" data-usercard-mid="442257063" class="name">{{ item.uname }}</a>
          <a href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank" class="level-link">
            <i class="level" :class="'l'+(item.member.level_info?item.member.level_info.current_level:1)"></i>
          </a>
          <span class="text-con">{{ item.content.message }}</span>
        </div>
      </div>
      <div class="info">
        <span class="time">{{ item.ctime }}</span>
        <span class="like "><i></i><span v-if="item.like!==0">{{ item.like }}</span></span>
        <span class="hate "><i></i><span v-if="item.dislike!==0">{{ item.dislike }}</span></span>
      </div>
    </div>

  </div>
</template>

<script>
export default {

  name: "SecondFloor",

  props:{
    SubCommentsList:Array,
  },

}
</script>

<style>

</style>