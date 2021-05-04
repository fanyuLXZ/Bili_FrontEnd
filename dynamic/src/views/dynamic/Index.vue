<template>
  <div class="home-page f-clear">
    <div class="fixed-bg"></div>
    <div class="home-container">
      <div class="home-content">
        <div class="left-panel">
          <div class="user-wrapper">
            <div class="user-panel f-left">
              <div class="loading-content" v-if="mid===0">
                <div class="loading-text tc-slate">
                  <img src="//s1.hdslb.com/bfs/seed/bplus-common/dynamic-assets/loading.png" class="loading-img">
                  <span>loading...</span>
                </div>
              </div>
              <!--  我的信息  -->
              <me v-else :mid="mid" :name="name" :face="face" :friend="friend" :fans="fans" :num="num"></me>
            </div>
          </div>
          <div class="adaptive-scroll" style="min-height: 635px;">
            <div style="margin-top: 0px;"></div>
            <div class="scroll-content" style="position: sticky; top: 0px;"><!----></div>
          </div>
        </div>
        <div class="center-panel">
          <!--  发布动态  -->
          <publish></publish>
          <div class="card-list">
            <div class="feed-card">
              <div class="content">
                <!--  动态文章  -->
                <content-list :mid="mid"></content-list>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="back-top" style="right: 0px; display: none;"></div>
  </div>
</template>

<script>
import me from "@/components/Me";
import publish from "@/components/Publish";
import contentList from "@/components/Content";
import axios from "axios";
import qs from 'qs'
export default {
  name: "Index",

  components: {
    me,
    publish,
    contentList,
  },

  data(){
    return{
      mid:0,    //用户名
      name: " ",    //昵称
      face:" ",    //头像
      friend:0,    //关注数
      fans:0,   //粉丝
      num:0,    //动态
    }
  },

  mounted() {

    axios.get("/api/member/card/info").then((res)=>{
      //获取返回的json对象
      this.mid = res.data.data.mid
      this.name = res.data.data.name
      this.face = res.data.data.face
      this.fans = res.data.data.fans
      this.friend = res.data.data.friend
      this.tel = res.data.data.tel
      axios.get("/api/dynamic/dynamic_num",{
        params: {
          uids: [this.mid]
        },
        paramsSerializer: params => {
          return qs.stringify(params, { indices: false })
        }
      }).then((res)=>{
        console.log(res)
        //获取返回的json对象
        this.num = res.data.data.items[0].num

      })
    })
  }
}
</script>

<style>
@import "../../assets/css/bp-svg-icon.css";
@import "../../assets/css/bp-icon-font.css";
@import "../../assets/css/index.css";
@import "../../assets/css/vendors_517db8eb.0.d9d3f225.css";
</style>