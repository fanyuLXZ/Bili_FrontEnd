<template>
  <div class="cc-header">
    <div class="header">
      <!--    loggo   -->
      <left-block />
      <!--    me    -->
      <right-block />
    </div>
  </div>
</template>

<script>
import LeftBlock from "@/components/header/left-block";
import RightBlock from "@/components/header/right-block";
export default {
  name:"cc-header",
  components:{
    RightBlock,
    LeftBlock

  }
}
</script>

<style>
@import "../../assets/css/home/creativecenterTwo.css";
</style>