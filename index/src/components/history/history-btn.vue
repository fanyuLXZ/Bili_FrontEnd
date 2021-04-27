<template>
  <div>
    <div class="history-btn"  @click="isDlg=!isDlg">
      <a href="#" class="btn cleanhsbtn">清空历史</a>
    </div>
    <!--  历史记录弹框  -->
    <dlg-contain :isDlg="isDlg" @cancel="isDlg=!isDlg"></dlg-contain>
  </div>
</template>

<script>
import DlgContain from "./dlg-contain";
export default {
  name: "history-btn",
  components: {DlgContain},

  data(){
    return {
      isDlg:false
    }
  },
  watch:{
    isDlg(){
      console.log(this.isDlg)
    }
  }
}
</script>

<style scoped>

</style>