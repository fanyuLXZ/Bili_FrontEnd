<!--  作者：欧阳苏蓉 历史记录 视频观看时间-->
<template>
  <div class="l-info">
    <div class="lastplay-time">
      <i class="history-red-round"></i>
      <span class="lastplay-t">{{ formatTime(viewAt) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "l-info",

  props:{
    viewAt:String
  },

  methods:{
    formatTime(viewAt){
      let  H, i, sresult;
      let time = new Date(viewAt);
      H = time.getHours(),
      i = time.getMinutes();
      if (H < 10) {
        H = '0' + H;
      }
      if (i < 10) {
        i = '0' + i;
      }
      sresult = H + ':' + i
      // console.log(sresult);
      return sresult;
    }
  }
}
</script>

<style>

</style>