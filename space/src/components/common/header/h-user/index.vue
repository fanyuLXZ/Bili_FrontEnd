<template>
  <div class="h-user">
    <div class="h-info clearfix">
      <h-avatar :vip_info="vip_info"/>
      <h-user-basic :space_info="space_info" :space_vip="vip_info"/>
    </div>
  </div>
</template>

<script>
import HAvatar from "@/components/common/header/h-user/h-avatar";
import HUserBasic from "@/components/common/header/h-user/h-user-basic";
export default {
  name: "h-user",
  components: {HUserBasic, HAvatar},
  props:["vip_info","space_info"]
}
</script>

<style>

</style>