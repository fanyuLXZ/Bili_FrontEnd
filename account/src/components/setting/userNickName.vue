<!--  作者:欧阳苏蓉 我的信息-昵称  -->
<template>
  <div class="el-form-item user-nick-name">
    <label class="el-form-item__label">昵称:</label>
    <div class="el-form-item__content">
      <div class="el-input"><!----><!---->
        <input autocomplete="off" placeholder="你的昵称" v-model=uname type="text" rows="2" maxlength="16" validateevent="true" class="el-input__inner"><!---->
      </div>
      <span class="nick-name-not">注：修改一次昵称需要消耗6个硬币</span><!---->
    </div>
  </div>
</template>

<script>
export default {
  name: "userNickName",

  props:{
    uname:String
  }
}
</script>

<style>

</style>