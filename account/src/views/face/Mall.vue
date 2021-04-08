<template>
  <div class="security-right">
    <div class="security-right-title">
      <span class="security-right-title-icon"></span>
      <span class="security-right-title-text">我的头像</span> <!---->
    </div>
    <div class="security-right-bottom">
      <div class="face-tool">
        <div class="tool-container">
          <a href="/face/upload" class="">
            <div class="tool-change-face">
              <span>更换头像</span>
            </div>
          </a>
          <div class="tool-face-box" style="">
            <div class="tool-face-box" style="">
              <img alt="" class="tool-user-face" src="https://i1.hdslb.com/bfs/face/e625b00cc11186a7ed7fed76e7e607407bb1ee44.jpg">
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
export default {
name: "face"
}
</script>

<style>

</style>