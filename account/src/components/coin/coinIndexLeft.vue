<!--  作者:欧阳苏蓉 我的硬币-硬币余额  -->
<template>
  <div class="coin-index-left">
    <div class="coin-index-title">
      <p class="coin-rest-p">
        硬币余额:
        <i class="coin-num">{{num}}</i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "coinIndexLeft",
  data(){
    return{
      num:7
    }
  }
}
</script>

<style scoped>

</style>