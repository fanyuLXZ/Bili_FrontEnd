<template>
  <span ref="toggle" v-if="display==='inline'" class="z-toggle">
    <span ref="btn">
      <slot name="btn"/>
    </span>
    <div v-show="isShow" class="z-toggle-content" :style="'left: '+offsetX+';right: '+offsetY+';'">
      <slot name="default"/>
    </div>
  </span>
  <div v-else-if="display==='block'" class="z-toggle">
    <div ref="btn">
      <slot name="btn"/>
    </div>
    <div v-show="isShow" class="z-toggle-content" :style="'left: '+offsetX+';right: '+offsetY+';'">
      <slot name="default"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "z-toggle",
  data(){
    return{
      isShow:false,
    }
  },
  props: {
    "trigger":{
      default:function (){
        return "click"
      }
    },
    "display":{
      default:function (){
        return "inline"
      }
    },
    "offsetX":{
      type:Number,
      default:function (){
        return 0
      }
    },
    "offsetY":{
      type:Number,
      default:function (){
        return 0
      }
    }
  },
  mounted() {
    if (this.trigger==="click"){
      // 绑定点击事件
      this.$refs.toggle.addEventListener("click",this.click)
    }else if(this.trigger==="hover"){
      // 绑定点击事件
      this.$refs.toggle.addEventListener("mouseenter",this.show)
      this.$refs.toggle.addEventListener("mouseleave",this.hide)
    }
  },
  methods:{
    click(e){
      e.stopPropagation()
      if (this.isShow){
        this.hide(e)
      }else {
        this.show(e)
      }
    },
    show(){
      if (this.trigger==="click") {
        this.isShow = true
        window.addEventListener("click", this.hide)
      }else if(this.trigger==="hover"){
        this.isShow=true
      }
    },
    hide(e){
      if (this.trigger==="click"){
        if (!this.$refs.toggle.contains(e.target)||this.$refs.btn.contains(e.target)){
          this.isShow=false
          window.removeEventListener("click",this.hide)
        }
      }else if(this.trigger==="hover"){
        this.isShow=false
      }
    }
  }
}
</script>

<style lang="less">
  .z-toggle{
    position: relative;
    .z-toggle-content{
      position: absolute;
    }
  }
</style>