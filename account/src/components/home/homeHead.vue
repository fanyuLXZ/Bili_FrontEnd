<!-- 作者：欧阳苏蓉  首页-头像 -->
<template>
  <div>
    <img class="user-vip-icon" src="//i0.hdslb.com/bfs/vip/icon_Certification_small_member_22_3x.png" v-if="vip.type===0">
    <span class="user-vip-icon user-vip-icon-vip" v-else></span>
    <div class="home-head">
      <img :src="face">
      <a target="_blank" class="gotoSpace">个人空间</a>
    </div>
    <div class="home-right">
      <div class="home-top-msg">
        <span class="home-top-msg-name">江浙沪子笑</span>
        <span class="home-user-spec" style="background-color: rgb(62, 181, 89); color: rgb(255, 255, 255);" v-if="vip.status&vip.type===0">
          小会员
        </span>
        <span class="home-user-spec" v-else-if="vip.status&vip.type===1">
          大会员
        </span>

      </div>
      <div class="home-top-level">
      <span class="home-top-level-all">
        <div class="home-top-progress-wrap">
          <span class="home-top-level-head home-top-level-head-active">LV{{level_info.current_level}}</span>
          <span class="home-top-level-up">
            进度条
            <span class="home-top-level-upgo" style="width: 14.33%;"></span>
          </span>
          <mask_warp></mask_warp>
        </div>
        <span class="home-top-level-number">
          <i class="now-num">{{ level_info.current_exp }}</i>
          <i class="num-icon">/</i>
          <i class="max-num">{{ level_info.next_exp }}</i>
        </span>
        <span class="home-to-update">修改资料</span>
        <a class="home-to-space">
          个人空间
          <i class="m-arrow"></i>
        </a>
      </span>
      </div>
      <div class="home-top-bp">
        <a target="_blank" title="B币" class="curren-b"></a>
        <span class="curren-b-num">{{bcoin_balance}}</span>
        <a class="coin-link"></a>
        <span class="curren-b-num">{{money}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import mask_warp from "./homeTopLevelMaskWarp"
export default {
  name: "home-head",
  components:{
    mask_warp
  },
  data(){
    return{
      uname:"江浙沪子笑",  //用户姓名
      face:"https://i1.hdslb.com/bfs/face/e625b00cc11186a7ed7fed76e7e607407bb1ee44.jpg",  //用户头像
      level_info: {
        current_level: 2,  //用户等级
        current_min: 200,  //用户当前等级最小值
        current_exp: 215,  ////用户当前等级值
        next_exp: 1500  //用户当前等级最大值
      },
      vip:{
        status:true,  //是否是会员
        type:1,  //会员类型
      },
      money:2,  //硬币数
      bcoin_balance:0  //B币
    }
  }
}
</script>

<style>

</style>