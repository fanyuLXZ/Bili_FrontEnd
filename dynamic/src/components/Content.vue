<!--  作者：欧阳苏蓉 动态--内容  -->
<template>

  <div >
    <div  class="content "  @scroll="onScroll">
      <div class=" card" style="margin-top: 8px;" v-for="(item,index) in dynamicList" :key="index">
        <dynamicCard :item="item" :isComment="isComment" :index="index"></dynamicCard>
      </div>
    </div>

    <div class="div-load-more tc-slate">
      <div class="load-more"><span>{{status===1?'加载更多':'加载中。。。'}}</span></div>
    </div>
    <meInfo class="meInfo"></meInfo>
  </div>
</template>

<script>
import {formatDate} from "@/assets/js/time";
import meInfo from "@/components/MeInfo";
import dynamicCard from "@/components/DynamicCard"
export default {
  name: "Content",
  components:{
    meInfo,
    dynamicCard
  },
  data() {
    return {
      activeIndex:-1,   //是否显示删除按钮
      confirmDeletion:true,    //是否显示确认删除
      isComment:false,    //展开评论
      deliverParams: {page:1},
      status:1,
      success:false,
      dynamicList: [
        {
          uid: 1,    //用户id
          face: "https://i1.hdslb.com/bfs/face/31f967d648f65c5754981fe6b4b6a21def194dc2.jpg@96w_96h_1c.webp",   //头像
          dynamic_id:1111111,    //动态编号
          vip:1,   //是否是大会员
          name: "堀与宫村",    //用户名字
          text: "第13话 至少，将这天空。",    //内容
          date:formatDate(Date.parse("2021-04-16T10:00:00.100")),
          repost: 2401,   //转发数
          comment: 9658,   //评论数
          like: 216000,   //点赞数
        },
        {
          uid: 2,    //用户id
          face: "https://i1.hdslb.com/bfs/face/31f967d648f65c5754981fe6b4b6a21def194dc2.jpg@96w_96h_1c.webp",   //头像
          dynamic_id:1111111,    //动态编号
          vip:1,   //是否是大会员
          name: "堀与宫村",    //用户名字
          text: "第13话 至少，将这天空。",    //内容
          date:formatDate(Date.parse("2021-04-16T10:00:00.100")),
          repost: 2401,   //转发数
          comment: 9658,   //评论数
          like: 216000,   //点赞数
        },
        {
          uid: 2,    //用户id
          face: "https://i1.hdslb.com/bfs/face/31f967d648f65c5754981fe6b4b6a21def194dc2.jpg@96w_96h_1c.webp",   //头像
          dynamic_id:1111111,    //动态编号
          vip:1,   //是否是大会员
          name: "堀与宫村",    //用户名字
          text: "第13话 至少，将这天空。",    //内容
          date:formatDate(Date.parse("2021-04-16T10:00:00.100")),
          repost: 2401,   //转发数
          comment: 9658,   //评论数
          like: 216000,   //点赞数
        },
      ]
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
      if (this.getScrollHeight() - this.getClientHeight() - this.getScrollTop() <= 0) {
        if (this.status === 1) {
          this.status = 0
          // 页码，分页用，默认第一页
          this.deliverParams.page += 1
          // 调用请求函数
          console.log('触发！！！')
        }
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

<style>

</style>