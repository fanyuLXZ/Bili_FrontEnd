<template>
  <div class="comment-list-item">
    <div class="check-box">
      <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>
    </div>
    <a  target="_blank" class="user-avatar" data-reporter-id="139">
      <img src="//i2.hdslb.com/bfs/face/264a633e83c1a3388e101f6244331060e32819cf.jpg@96w_96h">
    </a>
    <div class="article-wrap">
      <a  target="_blank" class="pic" >
        <img src="//i1.hdslb.com/bfs/archive/a39ec5ef0b13b0c932c1987994e2313c6ed51de6.jpg@200w_120h">
      </a>
      <a class="title ellipsis">
        <span class="name">{{ item.title }}</span>
        <span class="show-all">该视频全部评论</span>
      </a>
    </div>
    <div class="ci-title">
      <span class="relation-label" v-if="item.relation===2">粉丝</span>
      <a target="_blank">{{ item.replier }}</a>
      <span class="ci-title-split" v-if="item.parent_info.member.uname !== null">回复</span>
      <a target="_blank" class="parent-user" v-if="item.parent_info.member.uname !== null">{{ item.parent_info.member.uname }}</a>
      <span v-if="item.parent_info.member.uname !== null">的评论</span>
      <span class="show-parent" v-if="item.parent_info.member.uname !== null">
        <span>查看评论</span>
        <span style="display: none;">收起评论</span>
      </span>
    </div>
    <div class="ci-parent-reply" style="display: none;">
      <a href="//space.bilibili.com/26119890" target="_blank" class="cipr-avatar">
        <img src="//i0.hdslb.com/bfs/face/dade3a63ba398ebb24ab9293b0ce0cd2f0998491.jpg@48w_48h">
      </a>
      <div class="cipr-head">
        <a href="//space.bilibili.com/26119890" target="_blank" >
          {{ item.parent_info.member.uname }}
        </a>
      </div>
      <div class="cipr-content">{{ item.parent_info.content.message }}</div>
      <div class="cipr-footer">{{ item.parent_info.ctime }}</div>
    </div>
    <a target="_blank">
      <div class="ci-content">{{ item.message }}</div>
    </a>
    <div class="ci-action">
      <span class="date">2020-03-21 10:24</span>
      <span class="like action">
        <a>
          <i class="bcc-iconfont bcc-icon-icon_action_recommend_line_n_"></i>
        </a>
      </span>
      <span class="reply action">
        <a>回复</a>
      </span>
      <span class="report action">
        <a>举报</a>
      </span>
      <span class="delete action">
        <a>删除</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment-list-item",
  props:{item:Object}
}
</script>
