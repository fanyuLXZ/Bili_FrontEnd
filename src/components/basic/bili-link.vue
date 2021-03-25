<template>
  <a :href="href" v-if="to!==''" :class="'bili-link '+ link_icon_position">
    <span :class="link_color" :style="'font-size:' +size_computed+'px;'">
      <slot></slot>
    </span>
    <slot name="icon"></slot>
  </a>
  <router-link v-else :to="to" :class="'bili-link '+ link_icon_position+' '+size_computed">
    <span :class="link_color" :style="'font-size:' +size_computed+'px;'">
      <slot></slot>
    </span>
    <slot name="icon"></slot>
  </router-link>
</template>

<script>
export default {
  name: "bili-link",
  props:["text_color", "to", "href","icon_position","size"],
  computed:{
    link_color(){
      if (this.text_color!==''&&this.text_color!==undefined){
        return 'bili-link-'+this.text_color
      }
      return ''
    },
    link_icon_position(){
      if (this.icon_position!==''&&this.icon_position!==undefined){
        return 'bili-link-icon-'+this.icon_position
      }
      return ''
    },
    size_computed(){
      if (this.size!==''&&this.size!==undefined){
        return this.size*2+10
      }
      return 12
    }
  }
}
</script>

<style >

</style>