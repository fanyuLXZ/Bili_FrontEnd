<template>
  <div :title="title+count" class="n-data n-bf">
    <p class="n-data-k">{{ text }}</p>
    <p id="n-bf" class="n-data-v">{{count}}</p>
  </div>
</template>

<script>
export default {
  name: "n-bf",
  props:["title","count","text"]
}
</script>

<style scoped>

</style>