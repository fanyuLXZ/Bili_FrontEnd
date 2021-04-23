<!--  作者：欧阳苏蓉 文章详情 底部发表评论-->
<template>
    <div class="comment-send-lite " :style="'width: 597px;'" ref="comment_send_lite">
      <div class="textarea-container">
        <textarea class="ipt-txt" placeholder="发一条友善的评论"></textarea>
        <button type="submit" class="comment-submit">发表评论</button>
      </div>
    </div>
</template>

<script>
import $ from "jquery"
export default {
  name: "PostCommentFooter",

  data(){
    return{
      isShow:false,
    }
  },

  methods:{

    // 获取滚动条当前的位置
    getScrollTop () {
      let scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      return scrollTop
    },

    // 获取当前可视范围的高度
    getClientHeight () {
      let clientHeight = 0;
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
      } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
      }
      return clientHeight
    },

    // 获取文档完整的高度
    getScrollHeight () {
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    },

    // 滚动事件触发下拉加载
    onScroll () {
      if (this.getScrollHeight() - this.getClientHeight() - this.getScrollTop() < 500) {
        $(this.$refs.comment_send_lite).fadeIn(500)
      }else {
        $(this.$refs.comment_send_lite).fadeOut(500)
      }
    },
  },

  mounted () {
    //监听滚动事件
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  },
}
</script>