<!--  作者:李信志 切换控件  -->
<template>
  <span ref="toggle" v-if="tag==='span'" class="z-toggle">
    <span ref="btn">
      <slot name="btn"/>
    </span>
    <transition :name="transition_name">
    <div v-show="isShow" class="z-toggle-content" :style="'left: '+String(offsetX)+'px;top: '+String(offsetY)+'px;'">
        <slot name="default"/>
      </div>
    </transition>
  </span>
  <div ref="toggle" v-else-if="tag==='div'" class="z-toggle">
    <div ref="btn">
      <slot name="btn"/>
    </div>
    <transition :name="transition_name">
    <div v-show="isShow" class="z-toggle-content" :style="'left: '+String(offsetX)+'px;top: '+String(offsetY)+'px;'">
      <slot name="default"/>
    </div>
    </transition>
  </div>
  <li ref="toggle" v-else-if="tag==='li'" class="z-toggle">
    <div ref="btn">
      <slot name="btn"/>
    </div>
    <transition :name="transition_name">
    <div v-show="isShow" class="z-toggle-content" :style="'left: '+String(offsetX)+'px;top: '+String(offsetY)+'px;'">
      <slot name="default"/>
    </div>
    </transition>
  </li>
</template>

<script>
export default {
  name: "z-toggle",
  data(){
    return {
      isShow:this.is_show
    }
  },
  props: {
    "trigger":{
      default:function (){
        return "click"
      }
    },
    "tag":{
      default:function (){
        return "div"
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
    },
    "is_show":{
      type:Boolean,
      default:function (){
        return false
      }
    },
    "transition_name":{
      type:String,
      default:function (){
        return ""
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
  },
  watch:{
    isShow(){
      this.$emit("display_update",this.isShow)
    },
    is_show(){
      this.isShow=this.is_show
    }
  }
}
</script>

<style lang="less">
  .z-toggle{
    position: relative;
    .z-toggle-content{
      position: absolute;
      z-index: 9999;
    }
  }
</style>