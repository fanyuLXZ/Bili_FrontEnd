<template>
  <span id="h-gender" :class="'icon gender '+ gender_style"></span>
</template>

<script>
const gender_style_map = {
  "保密":"",
  "男":"male",
  "女":"female",
}
export default {
  name: "h-gender",
  props:["gender"],
  computed:{
    gender_style(){
      let gender_style = gender_style_map[this.gender]
      return gender_style?gender_style:"gender"
    }
  }
}
</script>

<style scoped>

</style>