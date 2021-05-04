<!--  作者：欧阳苏蓉 动态详情--内容  -->
<template>

  <div class="content">
    <div class="content" >
      <div class="" >
        <div class="card" style="margin-top: 8px;">
          <a target="_blank" id="dynamicId_513359857300617358" class="user-head c-pointer avatar-comp" href="//space.bilibili.com/433899970/dynamic">
            <div class="bili-avatar">
              <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius"
                   data-src="https://i1.hdslb.com/bfs/face/31f967d648f65c5754981fe6b4b6a21def194dc2.jpg@96w_96h_1c.webp"
                   :src="card.desc.user_profile.info.face">
              <span v-if="card.desc.user_profile.vip.status" class="bili-avatar-icon" style="background-image: url('https://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png@32w_32h_1c.webp')"></span>
            </div>
          </a>
          <div class="main-content" style="padding-bottom: 0px;">
            <div class="user-name fs-16 ls-0 d-i-block">
              <a href="//space.bilibili.com/433899970/dynamic" target="_blank" class="c-pointer">{{ card.desc.user_profile.info.uname }}</a>
            </div>
            <div class="time fs-12 ls-0 tc-slate">
              <a href="//t.bilibili.com/513359857300617358?tab=2" target="_blank" class="detail-link tc-slate">{{ card.desc.timestamp }}</a>
              <span></span>
            </div>
            <div class="card-content">
              <div data-ori-did="0" class="post-content">
                <div class="original-card-content">
                  <div class="text p-rel description">
                    <div class="content">
                      <a class=""> <div class="content-full">{{ card.card }}</div> </a>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div class="button-bar tc-slate">
              <single-button :icon_style="['bp-svg-icon','single-icon','comment','comment-hover']" :num="card.desc.comment" :disable_click="true" :selected="true"/>
              <single-button :icon_style="['custom-like-icon','zan']" :num="card.desc.like" :click_style="'zan-hover'" :hover_style="'zan-a-hover'"/>
            </div>
            <!--  操作  -->
            <operating :dynamic_id="dynamic_id" :mid="1"></operating>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import operating from "@/components/Article/Operating";
import singleButton from "@/components/single-button"
import axios from "axios";

export default {
  name: "Content",

  components:{
    operating,
    singleButton
  },

  data() {
    return {
      activeIndex:-1,   //是否显示删除按钮
      confirmDeletion:true,    //是否显示确认删除
      deliverParams: {page:1},
      status:1,
      success:false,
      page:{
        acount:0,   //总评论（父评论+子评论）
        count:0,    // 评论数
        num:0,    //当前页码
        size:20,    // 每页评论数(固定值)
      },
      card: {
        desc:{
          uid: 1,    //用户id
          type:2,   //动态类型 int 1为直播 2为文本 3为番剧 暂时返回2
          comment: 0,   //评论数
          like: 0,   //点赞数
          is_liked:0,   //是否点赞 int 0否 1是
          timestamp:" ",    //发表时间
          dynamic_id:0,    //动态编号
          user_profile:{
            info:{
              uid: 1,    //用户id
              uname:" ",   //用户名字
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
          card:" ",    //内容
        },
      }
    }
  },
  methods:{

  },

  props:{
    dynamic_id:String,
    mid:Number
  },

  mounted () {
    //监听滚动事件
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
    axios.get("/api/dynamic/dynamic_detail",{params:{dynamic_id:this.dynamic_id}}).then((res)=>{
      //获取返回的json对象
      console.log(res)
      this.card = res.data.data.card
    })
  },
}
</script>

<style>

</style>