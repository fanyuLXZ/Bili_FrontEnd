<template>
  <div class="panel-area" style="position: relative;">
    <div class="bb-comment ">
      <div class="reply-notice"></div>
      <!--  排序  -->
      <sort v-on:sortBtn="sortBtn"></sort>
      <!--  发布评论  -->
      <post-comment :mid="0"></post-comment>
      <!--  评论  -->
      <div class="comment-list has-limit" v-if="comment!==0">
        <original-poster :sortWay="sortWay" :dynamic_id="dynamic_id"></original-poster>
      </div>
      <!--  评论  -->
      <div class="comment-list has-limit" v-else>
        <div class="no-more-reply">看看下面~来发评论吧</div>
      </div>

      <!--  查看更多评论  -->
      <div class="bottom-page paging-box-big center"><a class="more-link" href="/article">查看更多评论</a></div>

    </div>
  </div>
</template>

<script>
import sort from "@/components/Article/Sort";
import postComment from "@/components/Article/PostComment";
import originalPoster from "@/components/Article/OriginalPoster";

export default {
  name: "Comment",

  components:{
    sort,
    postComment,
    originalPoster
  },

  data(){
    return{
      sortWay:1,   //排序方式
      comment:12,
    }
  },

  props:{
    dynamic_id:Number
  },

  methods:{
    sortBtn(data){
      this.sortWay = data
    }
  }
}
</script>
