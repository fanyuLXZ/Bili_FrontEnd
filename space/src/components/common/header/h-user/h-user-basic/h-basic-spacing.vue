<template>
  <div class="h-basic-spacing">
    <h4 class="h-sign" style="display: none;" title="" ref="sign">
      {{sign_text}}
    </h4>
    <input id="h-sign" class="space_input" maxlength="60" placeholder="编辑个性签名"
           type="text" v-model="sign_text">
  </div>
</template>

<script>
export default {
  name: "h-basic-spacing",
  props:["sign"],
  data(){
    return{
      sign_text:this.sign
    }
  }
}
</script>

<style scoped>

</style>