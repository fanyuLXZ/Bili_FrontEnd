<template>
  <div class="content">
    <div>
      <div class="lt-icon icon-hd"></div>
      <span class="lt-text">免费看高清视频</span>
    </div>
    <div>
      <div class="lt-icon icon-time"></div>
      <span class="lt-text">多端同步播放记录</span>
    </div>
    <div>
      <div class="lt-icon icon-danmaku"></div>
      <span class="lt-text">发表弹幕/评论</span>
    </div>
    <div>
      <div class="lt-icon icon-video"></div>
      <span class="lt-text">热门番剧影视看不停</span>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  & > * {
    width: 162px;
    height: 26px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
  }
  .lt-icon {
    width: 26px;
    height: 26px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    &.icon-video {
      //background-image: url('../../assets/images/video.png');
    }
    &.icon-time {
      //background-image: url('../../assets/images/time.png');
    }
    &.icon-danmaku {
      //background-image: url('../../assets/images/danmaku.png');
    }
    &.icon-hd {
      //background-image: url('../../assets/images/hd.png');
    }
  }
  .lt-text {
    margin-left: 6px;
    font-size: 14px;
    line-height: 14px;
    color: #212121;
  }
}
</style>