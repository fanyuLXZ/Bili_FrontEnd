<template>
  <div class="h-inner" :style="img?'background-image: url('+img+';':''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "h-inner",
  props:["img"]
}
</script>

<style>

</style>