<template>
  <div class="interact-bill-wrap bcc-row customWidth" style="margin-left: -8px; margin-right: -8px;">
    <div class="interact-wrap bcc-col bcc-col-16" style="padding-left: 8px; padding-right: 8px;">
      <header class="header" style="box-shadow:none;height:0;padding:10px 0;">
        <div class="tabs">
          <ul class="tabs__header">
            <li class="tabs__header-item is-active"><span>评论</span></li>
          </ul>
          <div class="tabs__content"><div></div></div>
        </div>
        <a href="/platform/comment/article" class="link" data-reporter-id="53">
          <span>更多</span> <i class="bcc-iconfont bcc-icon-ic_enter"></i>
        </a>
      </header>
      <div class="content">
        <div class="comment-wrap">
          <comment-item v-for="(item,index) in list" :key="index" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentItem from "@/components/right/home/comment-item";
export default {
  name: "interact-bill-wrap",
  components: {CommentItem},
  data(){
    return {
      list: [
        {
          message: "回复 @冰丿繁羽 :xxxxxxxx",   //回复信息
          floor: 2,    //子评论数量
          bvid: "BV1s7411f7j8",    //视频id
          ctime: "03-21 10:24",    //评论时间
          mid: 6550134,    //uid
          like: 0,   //点赞数
          replier: "请叫我夜瞳",    //姓名
          uface: "2.png",    //头像预览图
          cover: "1.jpg",    //视频预览图
          title: "xxxxx",    //视频标题
          root_info: {
            ctime: "2020-03-21 08:43:57",    //回复评论时间
            like: 0,   //点赞数
            floor: 1,    //子评论数量
            member: {
              mid: 26119890,   //uid
              uname: "xxx",    //姓名
              sex: "男",    //性别
              avatar: "http://i0.hdslb.com/bfs/face/dade3a63ba398ebb24ab9293b0ce0cd2f0998491.jpg",   //头像
              level_info: {
                current_level: 5   //等级
              },
              vip: {
                vipType: 1,   //vip类型
                vipStatus: true    //是否是会员
              }
            },
            content: {
              message: "噢！原来如此"    //回复内容
            }
          }
        },
        {
          message: "回复 @冰丿繁羽 :xxxxxxxx",   //回复信息
          floor: 2,    //子评论数量
          bvid: "BV1s7411f7j8",    //视频id
          ctime: "03-21 10:24",    //评论时间
          mid: 6550134,    //uid
          like: 0,   //点赞数
          replier: "请叫我夜瞳",    //姓名
          uface: "2.png",    //头像预览图
          cover: "1.jpg",    //视频预览图
          title: "xxxxx",    //视频标题
          root_info: {
            ctime: "2020-03-21 08:43:57",    //回复评论时间
            like: 0,   //点赞数
            floor: 1,    //子评论数量
            member: {
              mid: 26119890,   //uid
              uname: "xxx",    //姓名
              sex: "男",    //性别
              avatar: "http://i0.hdslb.com/bfs/face/dade3a63ba398ebb24ab9293b0ce0cd2f0998491.jpg",   //头像
              level_info: {
                current_level: 5   //等级
              },
              vip: {
                vipType: 1,   //vip类型
                vipStatus: true    //是否是会员
              }
            },
            content: {
              message: "噢！原来如此"    //回复内容
            }
          }
        },
        {
          message: "回复 @冰丿繁羽 :xxxxxxxx",   //回复信息
          floor: 2,    //子评论数量
          bvid: "BV1s7411f7j8",    //视频id
          ctime: "03-21 10:24",    //评论时间
          mid: 6550134,    //uid
          like: 0,   //点赞数
          replier: "请叫我夜瞳",    //姓名
          uface: "2.png",    //头像预览图
          cover: "1.jpg",    //视频预览图
          title: "xxxxx",    //视频标题
          root_info: {
            ctime: "2020-03-21 08:43:57",    //回复评论时间
            like: 0,   //点赞数
            floor: 1,    //子评论数量
            member: {
              mid: 26119890,   //uid
              uname: "xxx",    //姓名
              sex: "男",    //性别
              avatar: "http://i0.hdslb.com/bfs/face/dade3a63ba398ebb24ab9293b0ce0cd2f0998491.jpg",   //头像
              level_info: {
                current_level: 5   //等级
              },
              vip: {
                vipType: 1,   //vip类型
                vipStatus: true    //是否是会员
              }
            },
            content: {
              message: "噢！原来如此"    //回复内容
            }
          }
        }
      ]
    }
  }
}
</script>
