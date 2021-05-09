<!--  作者：欧阳苏蓉 文章详情 评论楼主-->
<template>
  <div>
    <div data-index="1" class="list-item reply-wrap " v-for="(item,index) in replies"
         :key="index">
      <div class="user-face">
        <a href="//space.bilibili.com/397398868" target="_blank">
          <div class="bili-avatar">
            <img width="48" height="48"
                 src="https://i1.hdslb.com/bfs/face/a651f41455167f0dfa6e30d46001274c195ba30a.jpg@96w_96h_1c.webp" alt=""
                 class="bili-avatar-img bili-avatar-face bili-avatar-img-radius">
            <span class="bili-avatar-icon"></span>
          </div>
        </a>
      </div>
      <div class="con ">
        <div class="user">
          <a data-usercard-mid="397398868" href="//space.bilibili.com/397398868" target="_blank" class="name"
             style="color: rgb(34, 34, 34);">{{ item.member.uname }}</a>
          <a href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3"
             target="_blank" class="level-link">
            <i class="level" :class="'l'+item.member.level_info.current_level"></i>
          </a>
        </div>
        <p class="text">{{ item.content.message }}</p>
        <div class="info">
          <span class="time">{{ item.ctime }}</span>
          <span class="like " :class="item.action===1?'liked':' '"><i></i><span v-if="item.like!==0">{{ item.like }}</span></span>
          <span class="hate" :class="item.action===2?'hated':' '"><i></i><span></span></span>
          <span class="reply btn-hover" @click="click(index)">回复</span>
        </div>
        <!--  子评论组件  -->
        <subComments :item="item" :index="index" :rpid="item.rpid"></subComments>
        <div class="paging-box"></div>
        <post-comment v-if="reply===index" :mid="item.member.mid" :name="item.member.uname"></post-comment>
      </div>
    </div>
  </div>
</template>

<script>
import subComments from "../Article/SubComments"
import PostComment from "@/components/Article/PostComment";
import axios from "axios";
import {formatDate} from "@/assets/js/time";

export default {
  name: "OriginalPoster",

  components: {
    PostComment,
    subComments
  },

  props:{
    dynamic_id:Number,
    sort:Number
  },

  data() {
    return {
      reply:-1,
      page:{
        count:0,    // 总评论数(父评论+子评论
        // )
        num:1,    //当前页码
        size:0,    // 每页评论数(固定值)
      },
      replies: [
        {
          action:0,   //状态 0为无状态 1为赞了他 2为踩了他
          rpid:0,   //评论id
          content:{
            message:" "    //评论内容
          },
          count:0,    //子评论数量
          ctime: " ",    //评论时间
          like: 0,   //点赞数
          member:{
            mid:0,    //uid
            sex:" ",    //性别
            uname: " ",   //用户名称
            avatar: " ",   //用户头像
            level_info:{    //等级对象
              current_level:0
            },
            vip:{   //用户会员
              status:true,    //是否是会员
            },
          },
          replies:[   //子评论
            {
              content: {
                message:" "    //回复内容
              },
              ctime:" ",   //回复评论时间
              like: 8,   //点赞数量
              member:{
                mid:1,    //uid
                sex:" ",    //性别
                uname: " ",   //用户名称
                avatar: " ",   //用户头像
                level_info:{    //等级对象
                  current_level:5
                },
                vip:{   //用户会员
                  status:true,    //是否是会员
                },
              }
            }
          ],
        },
      ],
    }
  },

  methods:{
    click(index){
      if(this.reply===index){
        this.reply=-1
      }else {
        this.reply=index
      }
    },

  },

  mounted() {
    axios.get("/api/dynamic/reply",{params:{dynamic_id:this.dynamic_id,sort:this.sort}}).then((res)=>{
      //获取返回的json对象
      console.log(res)
      res.data.data.replies.forEach((a)=>{
        a.ctime = formatDate(Date.parse(a.ctime))
        a.replies.forEach((v)=> {
          v.ctime = formatDate(Date.parse(v.ctime))
        })
      })
      this.replies = res.data.data.replies
    })
  }
}
</script>
<style>.paging-box {
  font-size: 12px;
}

.paging-box .disabled {
  display: none;
}

.paging-box .current,
.paging-box .next,
.paging-box .prev,
.paging-box .tcd-number,
.paging-box .dian {
  color: #222;
  cursor: pointer;
  text-align: center;
  margin: 0 4px;
  text-decoration: none;
  line-height: 26px;
}

.paging-box .current:hover,
.paging-box .next:hover,
.paging-box .prev:hover,
.paging-box .tcd-number:hover,
.paging-box .dian:hover {
  color: #00a1d6;
}

.paging-box .current {
  color: #00a1d6;
  font-weight: bold;
}

.paging-box .dian {
  cursor: default;
}

.paging-box .dian:hover {
  color: #222;
}

.paging-box .result {
  padding-right: 10px;
}

.paging-box-big {
  font-size: 12px;
}

.paging-box-big .disabled {
  display: none;
}

.paging-box-big .current,
.paging-box-big .next,
.paging-box-big .prev,
.paging-box-big .tcd-number,
.paging-box-big .dian {
  color: #222;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  background-color: #fff;
  border: solid 1px #ddd;
  background-image: none;
  transition: 0.2s all;
  font-size: 14px;
  min-width: 15px;
  margin: 0 2px 0 2px;
  padding: 0 10px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  text-decoration: none;
}

.paging-box-big .current:hover,
.paging-box-big .next:hover,
.paging-box-big .prev:hover,
.paging-box-big .tcd-number:hover,
.paging-box-big .dian:hover {
  background: #00a1d6;
  color: #fff;
  border: 1px solid #00a1d6;
}

.paging-box-big .current {
  background: #00a1d6;
  color: #fff;
  border: 1px solid #00a1d6;
}

.paging-box-big .dian {
  cursor: default;
  border-color: #fff;
}

.paging-box-big .dian:hover {
  background: #fff;
  color: #222;
  border: 1px solid #fff;
}

.paging-box-big.small .dian {
  padding: 0;
}

.paging-box-big .prev,
.paging-box-big .next {
  padding: 0 15px;
}

.paging-box-big .page-jump {
  float: right;
  color: #99a2aa;
  line-height: 36px;
}

.paging-box-big .page-jump input {
  margin: 0 5px;
  padding: 0 10px;
  height: 24px;
  line-height: 24px;
  margin-top: 7px;
  font-size: 12px;
  box-shadow: none;
  width: 24px;
  border-radius: 4px;
  border: 1px solid #ddd;
  outline: none;
  text-align: center;
}

.paging-box-big .page-jump input:focus {
  border-color: #00a1d6;
}

.paging-box-big.small .page-jump input {
  padding: 0 3px;
}
</style>