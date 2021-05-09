<template>
  <a href="/26119890/fans/follow" class="n-data n-gz" :title="count">
    <p class="n-data-k">关注数</p>
    <p id="n-gz" class="n-data-v space-attention">
      {{ count }}
    </p>
  </a>
</template>

<script>
export default {
  name: "n-gz",
  props:["count"]
}
</script>

<style scoped>

</style>