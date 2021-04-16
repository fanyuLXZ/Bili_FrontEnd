<template>
  <div class="empty-state">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: '没有数据(-_-#)'
    }
  }
}
</script>

<style lang="less">
.empty-state {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    color: #999;
    font-size: 30px;
    span {
      font-size: 12px;
      vertical-align: middle;
      margin-left: 5px;
    }
  }
}
</style>


