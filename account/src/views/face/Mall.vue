<template>
  <div class="security-right">
    <div class="security-right-title">
      <span class="security-right-title-icon"></span>
      <span class="security-right-title-text">我的头像</span> <!---->
    </div>
    <div class="security-right-bottom">
      <div class="face-tool">
        <div class="tool-container">
          <router-link to="upload" class="">
            <div class="tool-change-face">
              <span>更换头像</span>
            </div>
          </router-link>
          <div class="tool-face-box" style="">
            <div class="tool-face-box" style="">
              <img alt="" class="tool-user-face" :src="$store.state.face">
            </div>
          </div>
          <div class="disable tool-uninstall-pendant">
            <span>卸下挂件</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {all_info} from "../../api/home";

export default {
  name: "face",
  mounted() {
    if (this.$store.state.face === "") {
      all_info().then(
          (res) => {
            //获取返回的json对象
            this.$store.state.isLogin = res.data.data.isLogin
            this.$store.state.uname = res.data.data.uname
            this.$store.state.face = res.data.data.face
          }
      )
    }
  }
}
</script>

<style>

</style>