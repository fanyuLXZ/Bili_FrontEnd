<template>
  <label class="bcc-checkbox" :class="checkbox?'bcc-checkbox-checked':''"  @click="checkAll">
    <span class="bcc-checkbox-checkbox">
      <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>
    </span>
    <span class="bcc-checkbox-label">全选</span>
  </label>
</template>

<script>
export default {
  name: "bcc-checkbox",
  data(){
    return{
      checkbox:false
    }
  },
  methods:{
    click(){
      if (this.checkbox){
        this.checkbox=false
      }else{
        this.checkbox=true
      }
      this.$emit('selectAll',this.checkbox)
    }
  }
}
</script>
