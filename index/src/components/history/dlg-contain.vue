<!--  作者：欧阳苏蓉 历史记录 弹框  -->
<template>
  <div class="dlg-contain" v-show="isDlg">
    <div class="hsmask"></div>
    <div class="history-dlg"><p class="dlg-txt">清空之后就什么都没有了哦~</p>
      <div class="hsbtn clearfix"><a href="#" class="sure">确定清空</a> <a href="#" class="cancel" @click="$emit('cancel')">取消</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dlg-contain",

  props:{
    isDlg:Boolean
  },

}
</script>

<style scoped>

</style>