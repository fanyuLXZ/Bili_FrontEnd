<!--  作者：欧阳苏蓉 动态--我  -->
<template>
  <div class="left-panel">
    <div class="user-wrapper">
      <div class="user-panel f-left">
        <div class="loading-content" style="display: none;">
          <div class="loading-text tc-slate">
            <img src="//s1.hdslb.com/bfs/seed/bplus-common/dynamic-assets/loading.png" class="loading-img">
            <span>loading...</span>
          </div>
        </div>
        <div class="content" style="" >
          <div class="user-pic" style="background-image: url('//i1.hdslb.com/bfs/space/768cc4fd97618cf589d23c2711a1d1a729f42235.png@.webp');"></div>
          <a class="user-name tc-black c-pointer" data-userinfo-popup-inited="true">{{ myself.uname }}</a>
          <div class="bottom">
            <a class="number-part c-pointer f-left">
              <p class="numbers fs-14">{{ myself.attention }}</p>
              <p class="text tc-slate fs-12 ls-0">关注</p>
            </a>
            <a class="number-part c-pointer f-left">
              <p class="numbers fs-14">{{ myself.fans }}</p>
              <p class="text tc-slate fs-12 ls-0">粉丝</p>
            </a>
            <a class="number-part c-pointer f-left">
              <p class="numbers fs-14">{{ myself.dynamic }}</p>
              <p class="text tc-slate fs-12 ls-0">动态</p>
            </a>
          </div>
          <img :src="myself.face" class="user-head c-pointer" data-userinfo-popup-inited="true">
        </div>
      </div>
    </div>
    <meInfo class="meInfo"></meInfo>
    <div class="adaptive-scroll" style="min-height: 0px;">
      <div style="margin-top: 0px;"></div>
      <div class="scroll-content" style="bottom: 0px; position: static;"></div>
    </div>
  </div>
</template>

<script>
import meInfo from "@/components/MeInfo"
  export default {
    name: "me",
    components:{
      meInfo
    },
    data(){
      return{
        myself:{
          userid: "bili_34305173340",    //用户名
          uname: "江浙沪子笑",    //昵称
          face:"//i1.hdslb.com/bfs/face/31f967d648f65c5754981fe6b4b6a21def194dc2.jpg@.webp",    //头像
          attention:0,    //关注数
          fans:0,   //粉丝
          dynamic:0,    //动态
        }
      }
    }
}
</script>

<style>
</style>