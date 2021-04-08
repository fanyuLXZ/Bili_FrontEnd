<!--  作者:欧阳苏蓉 我的信息-出生年月  -->
<template>
  <div>
    <div class="el-form-item user-my-date">
      <label class="el-form-item__label">出生日期:</label>
      <div class="el-form-item__content">
        <div class="el-date-editor el-input el-date-editor--date" id="el-date-pick"><!---->
          <i class="el-input__icon el-icon-date"></i>
          <input autocomplete="off" placeholder="选择日期" readonly="readonly" type="text" rows="2" class="el-input__inner"><!----><!---->
        </div><!---->
      </div>
    </div>
    <!--  日历  -->
    <elPickerPanel v-show="true"></elPickerPanel>
  </div>
</template>

<script>
import elPickerPanel from "@/components/setting/elPickerPanel"

export default {
  name: "userMyDate",
  components:{
    elPickerPanel
  },
  data(){
    return{

    }
  },
  methods:{

  }

}
</script>

<style>

</style>