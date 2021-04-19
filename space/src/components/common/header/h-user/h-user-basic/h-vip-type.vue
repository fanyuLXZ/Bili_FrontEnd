<template>
  <a class="h-vipType"
     :href="vip.avatar_subscript_url" :style="'color:'+vip.label.text_color+'; background-color:'+vip.label.bg_color+';'"
     target="_blank">{{ vip.label.text }}</a>
</template>

<script>
export default {
  name: "h-vip-type",
  props:["vip"]
}
</script>

<style scoped>

</style>