<!--  作者：欧阳苏蓉 动态--我自己  -->
<template>
  <div :class="mid===433899970?'userinfo-wrapper':'user-card'" style="top:60px; left:10px;" v-if="true">
    <div class="userinfo-content">
      <div class="bg"
           style="background-image: url('//i1.hdslb.com/bfs/space/768cc4fd97618cf589d23c2711a1d1a729f42235.png@120h.webp');"></div>
      <a href="//space.bilibili.com/433899970/dynamic" target="_blank" class="face">
        <img :src="face">
        <div class="verify-box type--1 type-big"></div>
      </a>
      <div class="info">
        <p class="user">
          <a target="_blank" href="//space.bilibili.com/433899970/dynamic" class="name vip">{{ uname }}</a>
          <i class="sex women"></i>
          <a target="_blank" href="//www.bilibili.com/html/help.html#k_5">
            <i class="level" :class="'l'+level_info.current_level"></i>
          </a>
        </p>
        <p class="social">
          <a href="//space.bilibili.com/433899970/fans/follow" target="_blank">关注：
            <span class="like">{{ friend }}</span>
          </a>
          <a href="//space.bilibili.com/433899970/fans/fans" target="_blank">粉丝：
            <span class="fans">{{ fans }}</span>
          </a>
        </p><!---->
      </div>
      <div class="btn-box">
        <a class="like liked" v-if="following&&mid!==433899970">
          <span class="default-text">已关注</span>
          <span class="hover-text" >取消关注</span>
        </a>
        <a class="like" v-else>
          <span>+关注</span>
        </a>
        <a href="//message.bilibili.com/#whisper/mid433899970" target="_blank" class="message">发消息</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeInfo",
  data() {
    return {
      mid: 433899970,    //uid
      uname: "江浙沪",    //名称
      face: "//i1.hdslb.com/bfs/face/31f967d648f65c5754981fe6b4b6a21def194dc2.jpg@50w_50h_1c.webp",    //头像
      sex: "保密",    //性别
      fans: 0,    //粉丝数
      friend: 1,    //关注
      level_info: {
        current_level: 2,    //等级
      },
      vip: {
        type: 1,    //会员类型 1大会员  0小会员
        status: 1,    //是否是会员
      },
      following: false,    //是否关注他
    }
  }
}
</script>
<style scoped>

@import "../../../assets/css/datail.css";
.user-card {
  font-size: 12px;
  position: absolute;
  z-index: 10002;
  padding: 15px 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 2px 4px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  width: 335px;
  background: #fff;
  z-index: 2;
}

.user-card a {
  text-decoration: none;
}

.user-card p {
  margin: 0;
}

.user-card .bg {
  position: absolute;
  width: 375px;
  height: 120px;
  top: 0;
  left: 0;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.user-card .face {
  left: 20px;
  top: 100px;
  position: absolute;
  border: 2px solid #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.user-card .face img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.user-card .face .auth {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 0;
  top: 34px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0YxRkI0OUY5NzQ0MTFFNjk3MzZEMTU2NTgxQUVGMzMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0YxRkI0OUU5NzQ0MTFFNjk3MzZEMTU2NTgxQUVGMzMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJEQTkzMUVGNkRCMTExRTY5NjA3QjE4RUU4RjRBMDk1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJEQTkzMUYwNkRCMTExRTY5NjA3QjE4RUU4RjRBMDk1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+T+6qbAAAE0dJREFUeNrsXXl0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);
  background-repeat: no-repeat;
}

.user-card .face .p-auth {
  background-position: -38px -53px;
}

.user-card .face .o-auth {
  background-position: -4px -53px;
}

.user-card .info {
  padding: 105px 0 19px 65px;
}

.user-card .info p {
  margin: 0;
  color: #222;
}

.user-card .info .sign {
  line-height: 16px;
  margin-top: 11px;
  color: #99a2aa;
  word-break: break-all;
  word-wrap: break-word;
}

.user-card .info .social a {
  color: #222;
}

.user-card .info .user {
  font-size: 14px;
  font-weight: bold;
  margin: 12px 0;
}

.user-card .info .user .name {
  color: #222;
}

.user-card .info .user .sex {
  background: url(data:image/png;base64,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) no-repeat;
  margin-left: 6px;
  width: 15px;
  height: 13px;
  display: inline-block;
  position: relative;
  top: 1px;
}

.user-card .info .user .sex.men {
  background-position: -25px -665px;
}

.user-card .info .user .sex.women {
  background-position: -25px -729px;
}

.user-card .info .like {
  margin-right: 20px;
}

.user-card .info .level {
  display: inline-block;
  width: 19px;
  height: 9px;
  vertical-align: middle;
  margin-left: 8px;
  background: url(data:image/png;base64,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) no-repeat;
}

.user-card .info .level.l0 {
  background-position: -23px -28px;
}

.user-card .info .level.l1 {
  background-position: -23px -92px;
}

.user-card .info .level.l2 {
  background-position: -23px -156px;
}

.user-card .info .level.l3 {
  background-position: -23px -220px;
}

.user-card .info .level.l4 {
  background-position: -23px -284px;
}

.user-card .info .level.l5 {
  background-position: -23px -348px;
}

.user-card .info .level.l6 {
  background-position: -23px -412px;
}

.user-card .info .level.l7 {
  background-position: -23px -476px;
}

.user-card .info .level.l8 {
  background-position: -23px -540px;
}

.user-card .info .level.l9 {
  background-position: -23px -604px;
}

.user-card .btn-box {
  padding: 0 0 0 65px;
}

.user-card .btn-box a {
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  width: 80px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border: 1px solid #ccd0d7;
  margin-right: 20px;
  border-radius: 3px;
  color: #6d757a;
  transition: all 0.3s;
  background-color: #e5e9ef;
}

.user-card .btn-box a:hover {
  border-color: #00b5e5;
  color: #00a1d6;
}

.user-card .btn-box .like {
  color: #fff;
  font-weight: normal;
  border-color: #00a1d6;
  background-color: #00a1d6;
}

.user-card .btn-box .like:hover {
  border-color: #00b5e5;
  background-color: #00b5e5;
  color: #fff;
}

.user-card .btn-box .hover-text {
  display: none;
}

.user-card .btn-box .liked {
  background-color: #e5e9ef;
  border-color: #e5e9ef;
  color: #6d757a;
}

.user-card .btn-box .like.liked:hover {
  background-color: #e5e9ef;
  border-color: #e5e9ef;
  color: #6d757a;
}

.user-card .btn-box .like.liked:hover .default-text {
  display: none;
}

.user-card .btn-box .like.liked:hover .hover-text {
  display: inline-block;
}

.user-card .btn-box .message {
  background-color: #fff;
}

.user-card .vip-red-name {
  color: #fb7299 !important;
}

.user-card .vip-green-name {
  color: #62c076 !important;
}
</style>