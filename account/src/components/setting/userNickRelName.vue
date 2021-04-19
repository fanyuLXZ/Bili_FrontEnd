<!--  作者:欧阳苏蓉 我的信息-用户名  -->
<template>
  <div class="el-form-item user-nick-rel-name">
    <label class="el-form-item__label">用户名:</label>
    <div class="el-form-item__content">
      <span class="userinfo-username">{{ $store.state.userid }}</span><!---->
    </div>
  </div>
</template>

<script>
export default {
  name: "userNickRelName"
}
</script>

<style>

</style>