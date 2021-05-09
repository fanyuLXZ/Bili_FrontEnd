<template>
  <div class="h-avatar">
    <img id="h-avatar"
         :src="user_face">
    <a :href="$url_config.upload_face" class="avatar-cover"
       target="_blank">
      更换头像
    </a>
    <img class="avatar-icon" :src="vip_info?vip_info.avatar_subscript_url:''"
         title="大会员" v-if="vip_info&&vip_info.status===1">
  </div>
</template>

<script>
export default {
  name: "h-user-avatar",
  data(){
    return{
      user_face:this.face?this.face:"https://static.hdslb.com/images/member/noface.gif"
    }
  },
  props:["vip_info","face"]
}
</script>

<style>

</style>