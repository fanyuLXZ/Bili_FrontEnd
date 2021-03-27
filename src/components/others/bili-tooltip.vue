<!--作者:李信志-->
<template>
  <div class="bili-tooltip" v-show="true">
    <div :class="'bili-tooltip-container '+ shadow_class">
      <slot name="container"></slot>
    </div>
    <div :class="'bili-tooltip-arrow '+arrow_position"></div>
  </div>
</template>

<script>
export default {
  name: "bili-tooltip",
  props: ["position", "is_show", "shadow"],
  computed: {
    arrow_position(){
      if (this.position!==''&&this.position!==undefined){
        return 'bili-tooltip-arrow-'+this.position
      }
      return ''
    },
    shadow_class(){
      let shadow_class_dic={
        basic:"box-shadow-basic",
        shallow:"box-shadow-shallow"
      }
      let shadow_class_value = shadow_class_dic[this.shadow]
      return shadow_class_value!==undefined?shadow_class_value:"box-shadow-basic"
    }
  }
}
</script>
