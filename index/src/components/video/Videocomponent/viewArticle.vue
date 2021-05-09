<template>
    <div class="panel-area" style="position: relative;">
            <div class="bb-comment ">
              <div class="reply-notice"></div>
              <!--  排序  -->
              <sort></sort>
              <!--  发布评论  -->
              <post-comment></post-comment>
              <!--  评论  -->
              <div class="comment-list has-limit" v-if="comment!==0">
                <original-poster></original-poster>
              </div>
              <!--  评论  -->
              <div class="comment-list has-limit" v-else>
                <div class="no-more-reply">看看下面~来发评论吧</div>
              </div>
              <!--  底部评论  -->
              <post-footer></post-footer>
              <div class="loading-state">没有更多评论</div>
              <div class="bottom-page paging-box-big"></div>
            </div>
          </div>
</template>

<script>
import postComment from "../Article/PostComment"
import originalPoster from "../Article/OriginalPoster"
import postFooter from "../Article/PostCommentFooter"
import sort from "../Article/Sort"
export default {
  
components:{
  postComment,
  originalPoster,
  postFooter,
  sort
  },
   data(){
    return{
      comment:14,   //评论数
    }
  },
}
</script>

<style>

</style>