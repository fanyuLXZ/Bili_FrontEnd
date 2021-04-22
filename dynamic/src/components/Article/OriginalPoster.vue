<!--  作者：欧阳苏蓉 文章详情 评论楼主-->
<template>
  <div>
    <div data-id="4443545546" data-index="1" class="list-item reply-wrap " v-for="(item,index) in commentList"
         :key="index">
      <div class="user-face">
        <a href="//space.bilibili.com/397398868" target="_blank" data-usercard-mid="397398868">
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
             style="color: rgb(34, 34, 34);">{{ item.uname }}</a>
          <a href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3"
             target="_blank" class="level-link">
            <i class="level" :class="'l'+item.current_level"></i>
          </a>
        </div>
        <p class="text">{{ item.text }}</p>
        <div class="info">
          <span class="time">2021-04-20 22:53</span>
          <span class="like "><i></i><span v-if="item.like!==0">{{ item.like }}</span></span>
          <span class="hate"><i></i><span v-if="item.dislike!==0">{{ item.dislike }}</span></span>
          <span class="reply btn-hover">回复</span>
        </div>
        <!--  子评论组件  -->
        <subComments :item="item" :index="index"></subComments>
      </div>
    </div>
  </div>
</template>

<script>
import subComments from "../Article/SubComments"

export default {
  name: "OriginalPoster",

  components: {
    subComments
  },

  data() {
    return {
      commentList: [
        {
          mid:1,    //uid
          uname: "我有林静恒你没有",   //用户名称
          face: "//i0.hdslb.com/bfs/face/aa9a2adb15baae90b95304cb9515482fb80c5804.jpg@52w_52h.webp",   //用户头像
          text: "？怎么了",    //评论内容
          date: "2021-04-20 21:50",    //评论时间
          current_level: 8,    //用户等级
          like: 10,   //赞同
          dislike: 0,    //不赞同
          page: {
            count:267,    //总评论数
            current: 8,    //页码
            size: 10,    //每页数据
          },
          SubCommentsList: [
            {
              mid:2,    //uid
              uname: "我有林静恒你没123有",   //用户名称
              face: "//i0.hdslb.com/bfs/face/aa9a2adb15baae90b95304cb9515482fb80c5804.jpg@52w_52h.webp",   //用户头像
              text: "？怎么了",    //评论内容
              date: "2021-04-20 21:50",    //评论时间
              current_level: 4,    //用户等级
              like: 8,   //赞同
              dislike: 4,    //不赞同
            },
            {
              mid:3,    //uid
              uname: "我有林456静恒你没有",   //用户名称
              face: "//i0.hdslb.com/bfs/face/aa9a2adb15baae90b95304cb9515482fb80c5804.jpg@52w_52h.webp",   //用户头像
              text: "？怎么了",    //评论内容
              date: "2021-04-20 21:50",    //评论时间
              current_level: 5,    //用户等级
              like: 0,   //赞同
              dislike: 4,    //不赞同
            },
            {
              mid:4,    //uid
              uname: "我有林静恒你123没有",   //用户名称
              face: "//i0.hdslb.com/bfs/face/aa9a2adb15baae90b95304cb9515482fb80c5804.jpg@52w_52h.webp",   //用户头像
              text: "？怎么了",    //评论内容
              date: "2021-04-20 21:50",    //评论时间
              current_level: 5,    //用户等级
              like: 1,   //赞同
              dislike: 4,    //不赞同
            },
          ]
        },
        {
          mid:5,    //uid
          uname: "我有852林静恒你没有",   //用户名称
          face: "//i0.hdslb.com/bfs/face/aa9a2adb15baae90b95304cb9515482fb80c5804.jpg@52w_52h.webp",   //用户头像
          text: "？怎么了",    //评论内容
          date: "2021-04-20 21:50",    //评论时间
          current_level: 8,    //用户等级
          like: 10,   //赞同
          dislike: 1,    //不赞同
          page: {
            count:58,    //总评论数
            current: 6,    //页码
            size: 10,    //每页数据
          },
          SubCommentsList: [
            {
              mid:6,    //uid
              uname: "我有林963静恒你没有",   //用户名称
              face: "//i0.hdslb.com/bfs/face/aa9a2adb15baae90b95304cb9515482fb80c5804.jpg@52w_52h.webp",   //用户头像
              text: "？怎么了",    //评论内容
              date: "2021-04-20 21:50",    //评论时间
              current_level: 5,    //用户等级
              like: 1,   //赞
            }
          ]
        }
      ],

    }
  },



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