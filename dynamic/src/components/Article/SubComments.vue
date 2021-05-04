<!--  作者：欧阳苏蓉 子评论组件-->
<template>
  <div>
    <div class="reply-box">
      <secondFloor :SubCommentsList="isPage?replies:item.replies"></secondFloor>
      <div class="view-more" v-if="item.count>3&!isPage">共
        <b>{{ item.count }}</b>条回复,
        <a class="btn-more" @click="isPage = true">点击查看</a>
      </div>
    </div>
    <!--  分页  -->
    <pagination :page="page" v-show="isPage" @tab-page="tab"></pagination>
  </div>
</template>

<script>
import secondFloor from "../Article/SecondFloor"
import pagination from "../Article/Pagination"
import {formatDate} from "@/assets/js/time";
import axios from "axios";
export default {
  name: "SubComments",

  components:{
    secondFloor,
    pagination
  },

  data() {
    return {
      isPage: false,  //是否显示分页
      page:{
        count:0,    // 总评论数
        num:1,    //当前页码
        size:0,    // 每页评论数(固定值)
      },
      replies:[
        {
          rpid:123,   //评论id
          member:{
            mid:0,    //uid
            uname:" ",    //姓名
            sex:"男",    //性别
            face:" ",   //头像
            level_info:{
              current_level:0,    //当前等级
            },
            vip:{
              status:false    //是否是会员
            }
          },
          like:0,   //评论点赞数
          dislike:0,    //评论点踩数
          ctime:"",     //评论时间
          content:{
            message:" "   //评论内容
          }
        }
      ]
    }
  },

  props:{
    item:Object,
    index:Number,
    rpid:Number
  },

  methods: {

    tab(id){
      console.log(id)
    },

  },

  mounted() {
    axios.get("/api/comment/reply",{params:{rpid:this.rpid,pn:1,ps:10}}).then((res)=>{
      console.log(res)
      //获取返回的json对象
      res.data.data.replies.forEach((v)=>{
        v.ctime=formatDate(Date.parse(v.ctime))
      })
      this.replies = res.data.data.replies
    })
  }
}
</script>

<style>

</style>