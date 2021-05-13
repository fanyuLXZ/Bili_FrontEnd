<template>
  <div role="tooltip" id="el-popover-5762" aria-hidden="false" class="el-popover el-popper header-popover header-popover-avatar" tabindex="0" style="width: 144px; transform-origin: center top; z-index: 2037; position: fixed; top: 45px; left: 860px;" x-placement="bottom">
    <div class="content">
      <a href="//account.bilibili.com/account/home" target="_blank" class="link">
        <i class="bcc-iconfont bcc-icon-ic_Personalcenter"></i>
        <span class="title">个人中心</span>
      </a>
      <a href="//member.bilibili.com/platform/upload-manager/article" target="_blank" class="link">
        <i class="bcc-iconfont bcc-icon-ic_management"></i>
        <span class="title">投稿管理</span>
      </a>
      <a href="//pay.bilibili.com/paywallet-fe/bb_balance.html" target="_blank" class="link">
        <i class="bcc-iconfont bcc-icon-ic_moneypocket"></i>
        <span class="title">B币钱包</span>
      </a>
      <a href="//show.bilibili.com/orderlist" target="_blank" class="link">
        <i class="bcc-iconfont bcc-icon-ic_ordercenter"></i>
        <span class="title">订单中心</span>
      </a>
      <a href="//link.bilibili.com/p/center/index#/user-center/my-info/operation" target="_blank" class="link">
        <i class="bcc-iconfont bcc-icon-ic_Livecenter"></i>
        <span class="title">直播中心</span>
      </a>
    </div>
    <div class="logout">
      <div class="line"></div>
      <a class="link">
        <i class="bcc-iconfont bcc-icon-ic_exit"></i>
        <span class="title">退出登录</span>
      </a>
    </div>
    <div class="popper__arrow" style="left: 64.5px;"></div>
  </div>
</template>

<script>
export default {
  name: "el-popover"
}
</script>
