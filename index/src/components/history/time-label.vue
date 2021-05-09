<!--  作者：欧阳苏蓉 历史记录 视频时间范围  -->
<template>
    <div class="time-label " :class="(isActive?'active':'')+' '+className"
         :style="{
          'position': (is_flex_top||is_flex_bottom?'fixed':'absolute'),
          'top': (is_flex_top?'10px':is_flex_bottom?'inherit':top+'px'),
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
    className:String
  },

  data(){
    return{
      position:'fixed',
    }
  },
}
</script>

<style>

</style>