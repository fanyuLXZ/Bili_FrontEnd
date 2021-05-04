<!--  作者：欧阳苏蓉 动态--我  -->
<template>
  <div class="left-panel">
    <div class="user-wrapper">
      <div class="user-panel f-left">
        <div class="content" style="">
          <z-toggle trigger="hover">
            <template v-slot:btn>
              <div class="user-pic" style="background-image: url('//i1.hdslb.com/bfs/space/768cc4fd97618cf589d23c2711a1d1a729f42235.png@.webp');"></div>
              <a class="user-name tc-black c-pointer" data-userinfo-popup-inited="true">{{ name }}</a>
              <div class="bottom">
                <a class="number-part c-pointer f-left">
                  <p class="numbers fs-14">{{ friend }}</p>
                  <p class="text tc-slate fs-12 ls-0">关注</p>
                </a>
                <a class="number-part c-pointer f-left">
                  <p class="numbers fs-14">{{ fans }}</p>
                  <p class="text tc-slate fs-12 ls-0">粉丝</p>
                </a>
                <a class="number-part c-pointer f-left">
                  <p class="numbers fs-14">{{ num }}</p>
                  <p class="text tc-slate fs-12 ls-0">动态</p>
                </a>
              </div>
              <img :src="face" class="user-head c-pointer" data-userinfo-popup-inited="true">
            </template>
            <me-info :subMid="mid"/>
          </z-toggle>
        </div>
      </div>
    </div>
    <div class="adaptive-scroll" style="min-height: 0px;">
      <div style="margin-top: 0px;"></div>
      <div class="scroll-content" style="bottom: 0px; position: static;"></div>
    </div>

  </div>

</template>

<script>
import zToggle from "g-public/components/z-toggle"
import MeInfo from "@/components/MeInfo";
export default {
  name: "me",

  components:{
    MeInfo,
    zToggle
  },

  props:{
    mid:Number,
    name:String,
    face:String,
    friend:Number,
    fans:Number,
    num:Number
  },
}
</script>

<style>
</style>