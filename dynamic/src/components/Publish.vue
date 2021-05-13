<!--  作者：欧阳苏蓉 动态--发布动态  -->
<template>
  <div class="section-block">
    <div>
      <div class="publish-panel">
        <z-editor v-model="text"/>
      </div><!---->
    </div>
  </div>
</template>

<script>
import ZEditor from "./z-editor";
export default {
name: "Publish",
  components: {ZEditor},
  data(){
    return{
      text:""
    }
  }
}
</script>

<style>

</style>