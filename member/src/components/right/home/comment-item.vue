<template>
  <div class="comment-item">
    <div class="left-block">
      <a href="//space.bilibili.com/6550134" target="_blank" data-reporter-id="55">
        <img :src="item.uface">
      </a>
    </div>
    <div class="right-block">
      <div class="replier-time">
        <a href="//space.bilibili.com/6550134" target="_blank" class="replier" data-reporter-id="56">
          {{ item.replier }}
        </a>
        <span class="pointer"></span>
        <p class="time">{{ item.ctime }}</p>
      </div>
      <div class="reply-content">{{ item.message }}</div>
      <div class="like-reply">
        <div class="like" data-reporter-id="57">
          <i class="bcc-iconfont bcc-icon-icon_action_recommend_line_n_"></i>
          {{ item.like }}
        </div>
        <div class="reply" data-reporter-id="58">
          <i class="bcc-iconfont bcc-icon-icon_control_comment_"></i>
          回复
        </div>
      </div>
      <div class="origin">
        <p class="comment-origin">来源：
          <a href="//www.bilibili.com/video/BV1s7411f7j8" target="_blank" data-reporter-id="59">{{ item.title }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment-item",

  props:{
    item:Object
  }
}
</script>