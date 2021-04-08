<!--  作者:欧阳苏蓉 我的信息-性别  -->
<template>
  <div class="el-form-item user-my-sex">
    <label class="el-form-item__label">性别:</label>
    <div class="el-form-item__content">
      <div class="el-radio-group">
        <label class="el-radio-button">
          <input type="radio" class="el-radio-button__orig-radio" value="男">
          <span class="el-radio-button__inner">男</span>
        </label>
        <label class="el-radio-button is-active">
          <input type="radio" class="el-radio-button__orig-radio" value="女">
          <span class="el-radio-button__inner">女</span>
        </label>
        <label class="el-radio-button">
          <input type="radio" class="el-radio-button__orig-radio" value="保密">
          <span class="el-radio-button__inner">保密</span>
        </label>
      </div><!---->
    </div>
  </div>
</template>

<script>
export default {
  name: "userMySex"
}
</script>

<style>

</style>