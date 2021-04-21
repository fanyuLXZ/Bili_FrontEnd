<!--  作者：欧阳苏蓉 动态--内容  -->
<template>

  <div class="content">
    <div class="content" @scroll="onScroll">

      <div class="" v-for="(item,index) in dynamicList" :key="index">
        <div data-did="513359857300617358" class="card" style="margin-top: 8px;">
          <a target="_blank" id="dynamicId_513359857300617358" class="user-head c-pointer avatar-comp" href="//space.bilibili.com/433899970/dynamic">
            <div class="bili-avatar">
              <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius"
                   data-src="https://i1.hdslb.com/bfs/face/31f967d648f65c5754981fe6b4b6a21def194dc2.jpg@96w_96h_1c.webp"
                   :src="item.face">
              <span v-if="item.vip===1" class="bili-avatar-icon" style="background-image: url('https://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png@32w_32h_1c.webp')"></span>
            </div>
          </a>
          <div class="main-content" style="padding-bottom: 0px;">
            <div class="user-name fs-16 ls-0 d-i-block">
              <a href="//space.bilibili.com/433899970/dynamic" target="_blank" class="c-pointer">{{ item.name }}</a>
            </div>
            <div class="time fs-12 ls-0 tc-slate">
              <a href="//t.bilibili.com/513359857300617358?tab=2" target="_blank" class="detail-link tc-slate">{{ item.date }}</a>
              <span></span>
            </div>
            <div class="card-content">
              <div data-ori-did="0" class="post-content">
                <div class="original-card-content">
                  <div class="text p-rel description">
                    <div class="content"><!---->
                      <div class="content-full">{{ item.text }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div class="button-bar tc-slate">
              <div class="single-button c-pointer">
                <span class="text-bar">
                  <i class="bp-svg-icon single-icon transmit"></i>
                  <span class="text-offset"> {{ item.repost }} </span>
                </span>
              </div>
              <div class="single-button c-pointer">
                <span class="text-bar">
                  <i class="bp-svg-icon single-icon comment"></i>
                  <span class="text-offset"> {{ item.comment }} </span>
                </span>
              </div>
              <div class="single-button c-pointer p-rel">
                <span class="text-bar">
                  <i class="custom-like-icon zan"></i>
                  <span class="text-offset">{{ item.like }}</span>
                </span>
              </div>
            </div>
            <!--  操作  -->
            <operating></operating>
          </div>
        </div>
      </div>
    </div>
    <div class="div-load-more tc-slate">
      <div class="load-more"><span>{{status===1?'加载更多':'加载中。。。'}}</span></div>
    </div>

  </div>
</template>

<script>
import {formatDate} from "@/assets/js/time";
import operating from "@/components/Operating"
export default {
  name: "Content",
  components:{
    operating,
  },
  data() {
    return {
      activeIndex:-1,   //是否显示删除按钮
      confirmDeletion:true,    //是否显示确认删除
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
        },{
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