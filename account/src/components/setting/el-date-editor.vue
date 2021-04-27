<template>
  <z-toggle :is_show="isShow" @display_update="display_update" :transition_name="'el-zoom-in-top'">
    <template v-slot:btn>
      <div class="el-date-editor el-input el-date-editor--date" id="el-date-pick"><!---->
        <i class="el-input__icon el-icon-date"></i>
        <input autocomplete="off" placeholder="选择日期"  v-model=date readonly="readonly" type="text" rows="2" class="el-input__inner"><!----><!---->
      </div>
    </template>
    <el-picker-panel v-model=date @onChange="onChange"/>
  </z-toggle>
</template>

<script>
import elPickerPanel from "g-public/components/el-picker-panel"
import zToggle from "g-public/components/z-toggle"
export default {
  name: "el-date-editor",
  model:{
    prop:"birthday",
    event:"change",
  },
  props:["birthday"],
  data(){
    return{
      "isShow":false,
      "date":this.birthday,
    }
  },
  components:{
    elPickerPanel,
    zToggle
  },
  methods:{
    display_update(isShow){
      this.isShow=isShow
    },
    onChange(){
      this.isShow=false
      this.$emit('change',this.date)
    }
  }
}
</script>

<style>

</style>