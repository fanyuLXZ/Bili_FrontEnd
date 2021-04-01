<template>
  <div class="pgc-no-data">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: '没有数据(-_-#)'
    }
  }
}
</script>

<style lang="less">
.pgc-no-data {
  width: 100%;
  height: 100%;
  background-image: url(//s1.hdslb.com/bfs/static/jinkela/international-home/assets/bgm-nodata.png);
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-top: -120px;
    color: #99a2aa;
  }
}
</style>
