<template>
  <div class="panel-area" style="position: relative;">
    <div class="bb-comment">
      <div class="reply-notice"></div>
      <!--  排序  -->
      <sort v-model="mode"></sort>
      <!--  发布评论  -->
      <post-comment :aid="aid" :userInfo="userInfo" @addMessage="addMessage"></post-comment>
      <!--  评论  -->
      <div class="comment-list has-limit" v-if="comment!==0">
        <original-poster :comment-list="commentList" :user-info="userInfo"></original-poster>
      </div>
      <!--  评论  -->
      <div class="comment-list has-limit" v-else>
        <div class="no-more-reply">看看下面~来发评论吧</div>
      </div>
      <!--  底部评论  -->
      <!--              <post-footer></post-footer>-->
      <div class="loading-state">{{ getState === 1 ? '加载中' : '没有更多评论' }}</div>
      <div class="bottom-page paging-box-big"></div>
    </div>
  </div>
</template>

<script>
import postComment from "../Article/PostComment"
import originalPoster from "../Article/OriginalPoster"
// import postFooter from "../Article/PostCommentFooter"
import sort from "../Article/Sort"
import {getVideoReply} from "../../../api/video";

export default {

  components: {
    postComment,
    originalPoster,
    // postFooter,
    sort
  },
  data() {
    return {
      comment: 14,   //评论数
      mode: 3,
      commentList: [],
      cursor: {
        next: 1,
        prev: 1,
        _begin: true,
        _end: false
      },
      getState: 0
    }
  },
  props: ["aid", "userInfo"],
  methods: {
    updateCommentList() {
      if (!this.cursor._end && this.getState === 0) {
        this.getState = 1
        getVideoReply(this.cursor.next, this.mode, this.aid).then((res) => {
          if (res?.data?.code === 0) {
            this.commentList.push(...res.data.data.replies)
            this.cursor = res.data.data.cursor
            this.getState = 0
          }
        })
      }
    },
    addMessage(data) {
      if (this.cursor._end&&this.mode===3) {
        this.commentList.push(data)
      }else if (this.cursor._begin&&this.mode===2){
        this.commentList=[data].concat(this.commentList)
      }
    },
    scroll() {
      if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + document.body.scrollTop) - document.documentElement.clientHeight < 1) {
        this.updateCommentList()
      }
    }
  },
  mounted() {
    this.updateCommentList()
    window.onscroll = this.scroll
  },
  watch: {
    mode() {
      this.commentList = []
      this.cursor = {
        next: 1,
        prev: 1,
        _begin: false,
        _end: false
      }
      this.updateCommentList()
    }
  }
}
</script>

<style>

</style>