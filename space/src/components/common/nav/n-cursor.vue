<template>
  <div class="n-cursor" :style="'width:'+width+'px; left:'+left+'px;'"></div>
</template>

<script>
export default {
  name: "n-cursor",
  props:['left','width']
}
</script>

<style scoped>

</style>