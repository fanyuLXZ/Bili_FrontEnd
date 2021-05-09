<template>
  <a :href="href" class="n-btn" :class="is_active?'active':''+' n-'+name">
    <span :class="'iconfont '+icon_class"></span>
    <span class="n-text">
      <slot></slot><span class="n-num" v-if="num!==undefined">{{ num }}</span>
    </span>
  </a>
</template>

<script>
export default {
  name: "n-btn",
  props:["icon_class","is_active","href","name","num"]
}
</script>

<style scoped>

</style>