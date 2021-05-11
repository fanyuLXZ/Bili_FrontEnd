<template>
  <div class="single-button c-pointer" @mouseover="isSelected=true" @mouseout="isSelected=false" @click="click">
    <span class="text-bar" :class="isSelectedComputed||isClick?'selected':''">
      <i :class="icon_style"></i>
      <span class="text-offset"> {{ num }} </span>
    </span>
  </div>
</template>

<script>
export default {
name: "single-button",
  data(){
    return {
      isSelected:false,
      isClick:false
    }
  },
  props:{
    "icon_style":Array,
    "num":Number,
    "hover_style":String,
    "click_style":{
      type:String,
      default(){
        return this.hover_style
      }
    },
    "disable_click":{
      type:Boolean,
      default() {
        return false;
      }
    },
    "selected":Boolean
  },

  computed:{
    isSelectedComputed() {
      if (this.selected){
        return this.selected
      }else {
        return this.isSelected
      }
    }
  },

  methods:{
    click(){
      if (!this.disable_click){
        this.isClick=!this.isClick
        if (this.icon_style.indexOf(this.click_style)!==-1){
          delete this.icon_style[this.icon_style.indexOf(this.click_style)]
        }else {
          this.icon_style.push(this.click_style)
        }
      }
      this.$emit("buttonClick")
    }
  },

  watch:{
    isSelected(val){
      if (val){
        if (this.icon_style.indexOf(this.hover_style)===-1){
          this.icon_style.push(this.hover_style)
        }
      }else{
        if (this.icon_style.indexOf(this.hover_style)!==-1&&!this.isClick) {
          delete this.icon_style[this.icon_style.indexOf(this.hover_style)]
        }
      }
    }
  }
}
</script>

<style scoped>

</style>