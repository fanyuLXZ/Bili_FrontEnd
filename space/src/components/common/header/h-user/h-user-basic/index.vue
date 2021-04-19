<template>
  <div class="h-basic">
    <div>
      <h-name :uname="space_info.uname"/>
<!--      <span id="h-ceritification" class="icon"></span>-->
      <h-gender :gender="space_info.sex"/>
      <h-level :level_info="space_info.level_info"/>
      <h-vip-type v-if="space_vip.status===1" :vip="space_vip"/>
      <!--          <a class="h-fans-icon" href="//www.bilibili.com/blackboard/help.html#粉丝勋章"-->
      <!--             target="_blank">-->
      <!--            <span class="h-fans-text">粉</span>-->
      <!--            <div class="fans-hover-tip">-->
      <!--              <span class="tip-inner">已开通专属粉丝勋章</span>-->
      <!--            </div>-->
      <!--          </a>-->
    </div>
    <h-basic-spacing :sign="space_info.sign"/>
    <!---->
  </div>
</template>

<script>
import HName from "@/components/common/header/h-user/h-user-basic/h-name";
import HGender from "@/components/common/header/h-user/h-user-basic/h-gender";
import HLevel from "@/components/common/header/h-user/h-user-basic/h-level";
import HVipType from "@/components/common/header/h-user/h-user-basic/h-vip-type";
import HBasicSpacing from "@/components/common/header/h-user/h-user-basic/h-basic-spacing";
export default {
  name: "h-user-basic",
  components: {HBasicSpacing, HVipType, HLevel, HGender, HName},
  props:["space_info","space_vip"]
}
</script>

<style>

</style>