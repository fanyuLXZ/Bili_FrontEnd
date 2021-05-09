<!--  作者:欧阳苏蓉 会员积分-积分余额  -->
<template>
  <div class="points-header-warp">
    <div class="points-header-box">
      <span>会员积分余额</span>
      <span class="points-num">{{vPoint}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "points-header-warp",

  props:{
    vPoint:Number
  }
}
</script>

<style>

</style>