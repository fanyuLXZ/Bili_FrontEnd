<!--  作者:欧阳苏蓉 我的信息-出生年月  -->
<template>
  <div>
    <div class="el-form-item user-my-date">
      <label class="el-form-item__label">出生日期:</label>
      <div class="el-form-item__content">
        <el-date-editor v-model="date"/>
      </div>
    </div>
  </div>
</template>

<script>

import ElDateEditor from "./el-date-editor";
export default {
  name: "userMyDate",
  components: {ElDateEditor},
  model:{
    prop:"birthday",
    event:"change",
  },
  props:['birthday'],
  data(){
    return{
      date:this.birthday
    }
  },
  watch:{
    date(){
      this.$emit("change",this.date)
    }
  }
}
</script>

<style>

</style>