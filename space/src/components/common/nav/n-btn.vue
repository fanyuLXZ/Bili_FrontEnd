<template>
  <router-link :to="{name:to}" class="n-btn" :class="is_active?'active':''+' n-'+name">
    <span :class="'iconfont '+icon_class"></span>
    <span class="n-text">
      <slot></slot><span class="n-num" v-if="num!==undefined">{{ num }}</span>
    </span>
  </router-link>
</template>

<script>
export default {
  name: "n-btn",
  props:["icon_class","is_active","to","name","num"]
}
</script>

<style>

</style>