<!--  作者：欧阳苏蓉 动态--内容  -->
<template>

  <div @scroll="onScroll">
    <div class="loading-content" v-if="cards.length<=0" style="background-color: white">
      <div class="loading-text tc-slate">
        <img src="//s1.hdslb.com/bfs/seed/bplus-common/dynamic-assets/loading.png" class="loading-img">
        <span>loading...</span>
      </div>
    </div>
    <div  class="content "  v-else>
      <div class=" card" style="margin-top: 8px;" v-for="(item,index) in cards" :key="index">
        <dynamicCard :item="item" :isComment="isComment" :index="index" :mid="mid"></dynamicCard>
      </div>
    </div>

    <div class="div-load-more tc-slate" v-if="cards.length>0">
      <div class="load-more"><span>{{status===1?'加载更多':'加载中。。。'}}</span></div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/assets/js/time";
import dynamicCard from "@/components/DynamicCard"
import axios from "axios";
export default {
  name: "Content",
  components:{
    dynamicCard
  },

  props:{
    mid:Number    //当前登录的id
  },

  data() {
    return {
      activeIndex:-1,   //是否显示删除按钮
      confirmDeletion:true,    //是否显示确认删除
      isComment:false,    //展开评论
      offset_dynamic_id:0,
      status:1,
      success:false,
      cards: [
        {
          desc:{
            uid:0,    //发布人id
            type:0,   //动态类型
            comment: 0,   //评论数
            like: 0,   //点赞数
            is_liked:0,    //是否点赞
            timestamp:" ",    //发布时间
            dynamic_id:0,    //动态编号
            user_profile:{    //用户信息
              info:{
                uid: 1,    //用户id
                uname:"",    //用户姓名
                face: " ",   //头像
              },
              vip:{   //用户会员
                status:true,    //是否是会员
                type:1,   //会员类型
                due_date:" "   //会员有效时间
              },
              level_info:{    //等级对象
                current_level:0
              }
            },
          },
          card:" ",    //内容
        }
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
      if (this.getScrollTop()===this.getScrollHeight()-this.getClientHeight()) {
        if (this.status === 1) {
          this.status = 0
          // 调用请求函数
          axios.get("/api/dynamic/dynamic_history",{params:{"offset_dynamic_id":this.offset_dynamic_id}}).then((res)=>{
            //获取返回的json对象
            res.data.data.cards.forEach((v)=>{
              v.desc.timestamp=formatDate(Date.parse(v.desc.timestamp))
              this.cards.push(v)
            })
            this.status=1
            this.offset_dynamic_id = this.cards[this.cards.length-1].desc.dynamic_id
          })
        }
      }
    },
  },
  mounted () {
    this.cards=[]
    //监听滚动事件
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })

    axios.get("/api/dynamic/dynamic_new",).then((res)=>{

      //获取返回的json对象
      res.data.data.cards.forEach((v)=>{
        v.desc.timestamp=formatDate(Date.parse(v.desc.timestamp))
        this.cards.push(v)
      })
      this.offset_dynamic_id = this.cards[this.cards.length-1].desc.dynamic_id
    })
  },
}
</script>
