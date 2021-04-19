<template>
  <div :class="styleClass"
       class="btn-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'be-button-group',
  props: {
    align: {
      type: String,
      default: 'center', // left right center
    },
  },
  computed: {
    styleClass() {
      return 'btn-' + this.align
    },
  },
}
</script>
<style lang="less"
       scoped>
.btn-container {
  font-size: 0;
  white-space: nowrap;

  &.btn-center {
    text-align: center;
  }

  &.btn-left {
    text-align: left;
  }

  &.btn-right {
    text-align: right;
  }

  .btn:last-of-type {
    margin-right: 0;
  }
}
</style>
