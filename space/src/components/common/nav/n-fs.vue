<template>
  <a href="/26119890/fans/fans" class="n-data n-fs" :title="count">
    <p class="n-data-k">粉丝数</p>
    <p id="n-fs" class="n-data-v space-fans">
      {{ count }}
    </p>
  </a>
</template>

<script>
export default {
  name: "n-fs",
  props:["count"]
}
</script>

<style scoped>

</style>