<!--  作者：欧阳苏蓉 历史记录 视频时间范围  -->
<template>
    <div class="time-label todaylabel " :class="isActive?'active':''"
         :style="{
          'position': (is_flex_top||is_flex_bottom?'fixed':'absolute'),
          'top': (!is_flex_top&&!is_flex_bottom?top+'px':'inherit'),
          'bottom': (is_flex_bottom?flex_bottom+'px':'inherit'),
          }"
         style=" top: 18px; bottom: inherit;"
         v-show="isShow"
    >
      {{ text }}
    </div>
</template>
<script>

export default {
  name: "time-label",

  props:{
    text:String,
    isActive:Boolean,
    is_flex_top:Boolean,
    flex_bottom:Number,
    is_flex_bottom:Boolean,
    top:Number,
    isShow:Boolean,
  },

  data(){
    return{
      position:'fixed',
    }
  },
}
</script>

<style scoped>

</style>