<!--  作者：欧阳苏蓉 文章详情 发表评论  -->
<template>
  <div class="comment-send">
    <div class="user-face">
      <img :src="userInfo?userInfo.face+'@52w_52h.webp':''">
    </div>
    <div class="textarea-container">
      <i class="ipt-arrow"></i>
      <textarea v-model="message" cols="80" name="msg" rows="5" placeholder="发一条友善的评论" class="ipt-txt"></textarea>
      <button type="submit" class="comment-submit" @click="postMessage">发表评论</button>
    </div>
  </div>
</template>

<script>
import {getReplyAdd, getVideoReplyAdd} from "../../../api/video";

export default {
  name: "PostComment",
  props:["userInfo","aid","rid"],
  data(){
    return{
      message:""
    }
  },
  methods:{
    postMessage(){
      if(this.message&&this.message!==""){
        if (this.aid){
          getVideoReplyAdd(this.aid,this.message).then(res=>{
            if (res?.data?.code===0){
              this.$emit("addMessage",res?.data.data)
            }
          })
        }else if(this.rid){
          getReplyAdd(this.rid,this.message).then(res=>{
            if (res?.data?.code===0){
              this.$emit("addMessage",res?.data.data)
            }
          })
        }
      }
    }
  }
}
</script>

<style>/*Icon图标*/
body.preventScroll {
  height: 100%;
  overflow: hidden;
}

@font-face {
  font-family: 'fanscard';
  src: url('//s1.hdslb.com/bfs/static/jinkela/mall-h5/asserts/fansCard.ttf');
}

.bb-comment,
.comment-bilibili-fold {
  font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
  font-size: 0;
  zoom: 1;
  min-height: 100px;
  background: #fff;
  /*vip红名*/
  /*置顶*/
  /*热门评论分割线*/
  /*勋章*/
}

.bb-comment *,
.comment-bilibili-fold * {
  box-sizing: content-box;
}

.bb-comment button,
.comment-bilibili-fold button {
  box-sizing: border-box;
}

.bb-comment p,
.comment-bilibili-fold p {
  margin: 0;
  padding: 0;
}

.bb-comment ul,
.comment-bilibili-fold ul,
.bb-comment li,
.comment-bilibili-fold li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.bb-comment *.clearfix,
.comment-bilibili-fold *.clearfix {
  zoom: 1;
}

.bb-comment .clearfix:after,
.comment-bilibili-fold .clearfix:after {
  content: "";
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
  font-size: 0;
}

.bb-comment img,
.comment-bilibili-fold img {
  border: none;
  vertical-align: middle;
  border-radius: 50%;
}

.bb-comment a,
.comment-bilibili-fold a {
  outline: none;
  color: #00a1d6;
  text-decoration: none;
  cursor: pointer;
}

.bb-comment a:hover,
.comment-bilibili-fold a:hover {
  color: #f25d8e;
}

.bb-comment a:focus,
.comment-bilibili-fold a:focus {
  -moz-outline-style: none;
}

.bb-comment textarea,
.comment-bilibili-fold textarea {
  outline: none;
  resize: none;
}

.bb-comment .comment-header,
.comment-bilibili-fold .comment-header {
  margin: 0 0 24px 0;
  border-bottom: 1px solid #e5e9ef;
}

.bb-comment .comment-header .tabs-order,
.comment-bilibili-fold .comment-header .tabs-order {
  float: left;
  margin-bottom: -1px;
}

.bb-comment .comment-header .tabs-order li,
.comment-bilibili-fold .comment-header .tabs-order li {
  background-color: transparent;
  border-radius: 0;
  border: 0;
  padding: 8px 0;
  margin-right: 16px;
  border-bottom: 1px solid transparent;
  position: relative;
  float: left;
  cursor: pointer;
  line-height: 20px;
  height: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #222;
}

.bb-comment .comment-header .tabs-order li.new-sort,
.comment-bilibili-fold .comment-header .tabs-order li.new-sort,
.bb-comment .comment-header .tabs-order li.default-sort,
.comment-bilibili-fold .comment-header .tabs-order li.default-sort {
  display: none;
}

.bb-comment .comment-header .tabs-order li:last-child,
.comment-bilibili-fold .comment-header .tabs-order li:last-child {
  margin: 0 16px;
}

.bb-comment .comment-header .tabs-order li:hover,
.comment-bilibili-fold .comment-header .tabs-order li:hover {
  color: #00a1d6;
}

.bb-comment .comment-header .tabs-order li.on,
.comment-bilibili-fold .comment-header .tabs-order li.on {
  border-bottom: 1px solid #00a1d6;
  color: #00a1d6;
}

.bb-comment .comment-header .tabs-order li.on:after,
.comment-bilibili-fold .comment-header .tabs-order li.on:after {
  content: '';
  width: 6px;
  height: 3px;
  background: transparent url(data:image/png;base64,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) -669px -31px no-repeat;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  visibility: visible;
}

.bb-comment .comment-header .header-interaction,
.comment-bilibili-fold .comment-header .header-interaction {
  float: right;
  line-height: 36px;
}

.bb-comment .comment-send,
.comment-bilibili-fold .comment-send,
.bb-comment .comment-send-lite,
.comment-bilibili-fold .comment-send-lite {
  padding-top: 15px;
}

.bb-comment .comment-send.comment-send,
.comment-bilibili-fold .comment-send.comment-send,
.bb-comment .comment-send-lite.comment-send,
.comment-bilibili-fold .comment-send-lite.comment-send {
  margin: 10px 0;
}

.bb-comment .comment-send.comment-send-lite,
.comment-bilibili-fold .comment-send.comment-send-lite,
.bb-comment .comment-send-lite.comment-send-lite,
.comment-bilibili-fold .comment-send-lite.comment-send-lite {
  position: fixed;
  bottom: 0;
  padding-bottom: 15px;
  background: #fff;
  width: 100%;
  padding-left: 97px;
  margin-left: -12px;
  z-index: 2;
  display: none;
  box-sizing: border-box;
}

.bb-comment .comment-send.comment-send-lite .textarea-container,
.comment-bilibili-fold .comment-send.comment-send-lite .textarea-container,
.bb-comment .comment-send-lite.comment-send-lite .textarea-container,
.comment-bilibili-fold .comment-send-lite.comment-send-lite .textarea-container {
  margin-left: 0;
  margin-right: 0;
}

.bb-comment .comment-send.comment-send-lite .textarea-container .ipt-txt,
.comment-bilibili-fold .comment-send.comment-send-lite .textarea-container .ipt-txt,
.bb-comment .comment-send-lite.comment-send-lite .textarea-container .ipt-txt,
.comment-bilibili-fold .comment-send-lite.comment-send-lite .textarea-container .ipt-txt {
  height: 36px;
  padding-top: 10px;
  width: calc(100% - 90px);
}

.bb-comment .comment-send.comment-send-lite .textarea-container .baffle-wrap .baffle,
.comment-bilibili-fold .comment-send.comment-send-lite .textarea-container .baffle-wrap .baffle,
.bb-comment .comment-send-lite.comment-send-lite .textarea-container .baffle-wrap .baffle,
.comment-bilibili-fold .comment-send-lite.comment-send-lite .textarea-container .baffle-wrap .baffle {
  height: 36px;
  line-height: 36px;
  width: calc(100% - 90px);
}

.bb-comment .comment-send.comment-send-lite .comment-submit,
.comment-bilibili-fold .comment-send.comment-send-lite .comment-submit,
.bb-comment .comment-send-lite.comment-send-lite .comment-submit,
.comment-bilibili-fold .comment-send-lite.comment-send-lite .comment-submit {
  height: 36px;
  padding: 0;
  margin-left: 15px;
  position: initial;
}

.bb-comment .comment-send.comment-send-lite .comment-emoji,
.comment-bilibili-fold .comment-send.comment-send-lite .comment-emoji,
.bb-comment .comment-send-lite.comment-send-lite .comment-emoji,
.comment-bilibili-fold .comment-send-lite.comment-send-lite .comment-emoji {
  margin-left: 0;
}

.bb-comment .comment-send.comment-send-lite.two-line .textarea-container .ipt-txt,
.comment-bilibili-fold .comment-send.comment-send-lite.two-line .textarea-container .ipt-txt,
.bb-comment .comment-send-lite.comment-send-lite.two-line .textarea-container .ipt-txt,
.comment-bilibili-fold .comment-send-lite.comment-send-lite.two-line .textarea-container .ipt-txt {
  height: 72px;
}

.bb-comment .comment-send.comment-send-lite.two-line .textarea-container .baffle-wrap .baffle,
.comment-bilibili-fold .comment-send.comment-send-lite.two-line .textarea-container .baffle-wrap .baffle,
.bb-comment .comment-send-lite.comment-send-lite.two-line .textarea-container .baffle-wrap .baffle,
.comment-bilibili-fold .comment-send-lite.comment-send-lite.two-line .textarea-container .baffle-wrap .baffle {
  height: 72px;
  line-height: 72px;
}

.bb-comment .comment-send.comment-send-lite.two-line .comment-submit,
.comment-bilibili-fold .comment-send.comment-send-lite.two-line .comment-submit,
.bb-comment .comment-send-lite.comment-send-lite.two-line .comment-submit,
.comment-bilibili-fold .comment-send-lite.comment-send-lite.two-line .comment-submit {
  height: 72px;
  padding: 0 20px;
}

.bb-comment .comment-send .user-face,
.comment-bilibili-fold .comment-send .user-face,
.bb-comment .comment-send-lite .user-face,
.comment-bilibili-fold .comment-send-lite .user-face {
  float: left;
  margin: 7px 0 0 5px;
  position: relative;
}

.bb-comment .comment-send .user-face .user-head,
.comment-bilibili-fold .comment-send .user-face .user-head,
.bb-comment .comment-send-lite .user-face .user-head,
.comment-bilibili-fold .comment-send-lite .user-face .user-head {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.bb-comment .comment-send .user-face .pendant,
.comment-bilibili-fold .comment-send .user-face .pendant,
.bb-comment .comment-send-lite .user-face .pendant,
.comment-bilibili-fold .comment-send-lite .user-face .pendant {
  width: 86px;
  height: 86px;
  border-radius: 0;
  position: absolute;
  top: -19px;
  left: -19px;
}

.bb-comment .comment-send .textarea-container,
.comment-bilibili-fold .comment-send .textarea-container,
.bb-comment .comment-send-lite .textarea-container,
.comment-bilibili-fold .comment-send-lite .textarea-container {
  position: relative;
  margin-left: 85px;
  margin-right: 80px;
}

.bb-comment .comment-send .textarea-container .ipt-txt,
.comment-bilibili-fold .comment-send .textarea-container .ipt-txt,
.bb-comment .comment-send-lite .textarea-container .ipt-txt,
.comment-bilibili-fold .comment-send-lite .textarea-container .ipt-txt {
  font-size: 12px;
  display: inline-block;
  box-sizing: border-box;
  background-color: #f4f5f7;
  border: 1px solid #e5e9ef;
  overflow: auto;
  border-radius: 4px;
  color: #555;
  width: 100%;
  height: 65px;
  transition: 0s;
  padding: 5px 10px;
  line-height: normal;
  outline: none;
}

.bb-comment .comment-send .textarea-container .ipt-arrow,
.comment-bilibili-fold .comment-send .textarea-container .ipt-arrow,
.bb-comment .comment-send-lite .textarea-container .ipt-arrow,
.comment-bilibili-fold .comment-send-lite .textarea-container .ipt-arrow {
  position: absolute;
  left: -12px;
  top: 22px;
  background: url(data:image/png;base64,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) -395px -340px no-repeat;
  width: 13px;
  height: 20px;
  display: inline-block;
  z-index: 2;
}

.bb-comment .comment-send .textarea-container:hover textarea,
.comment-bilibili-fold .comment-send .textarea-container:hover textarea,
.bb-comment .comment-send-lite .textarea-container:hover textarea,
.comment-bilibili-fold .comment-send-lite .textarea-container:hover textarea,
.bb-comment .comment-send .textarea-container.focus textarea,
.comment-bilibili-fold .comment-send .textarea-container.focus textarea,
.bb-comment .comment-send-lite .textarea-container.focus textarea,
.comment-bilibili-fold .comment-send-lite .textarea-container.focus textarea {
  background-color: #fff;
  border-color: #00a1d6;
}

.bb-comment .comment-send .textarea-container:hover .ipt-arrow,
.comment-bilibili-fold .comment-send .textarea-container:hover .ipt-arrow,
.bb-comment .comment-send-lite .textarea-container:hover .ipt-arrow,
.comment-bilibili-fold .comment-send-lite .textarea-container:hover .ipt-arrow,
.bb-comment .comment-send .textarea-container.focus .ipt-arrow,
.comment-bilibili-fold .comment-send .textarea-container.focus .ipt-arrow,
.bb-comment .comment-send-lite .textarea-container.focus .ipt-arrow,
.comment-bilibili-fold .comment-send-lite .textarea-container.focus .ipt-arrow {
  background-position: -395px -404px;
}

.bb-comment .comment-send .textarea-container.error textarea,
.comment-bilibili-fold .comment-send .textarea-container.error textarea,
.bb-comment .comment-send-lite .textarea-container.error textarea,
.comment-bilibili-fold .comment-send-lite .textarea-container.error textarea {
  background-color: #fff;
  border-color: #e40c0c;
}

.bb-comment .comment-send .textarea-container.error .ipt-arrow,
.comment-bilibili-fold .comment-send .textarea-container.error .ipt-arrow,
.bb-comment .comment-send-lite .textarea-container.error .ipt-arrow,
.comment-bilibili-fold .comment-send-lite .textarea-container.error .ipt-arrow {
  background-position: -395px -474px;
}

.bb-comment .comment-send .comment-submit,
.comment-bilibili-fold .comment-send .comment-submit,
.bb-comment .comment-send-lite .comment-submit,
.comment-bilibili-fold .comment-send-lite .comment-submit {
  width: 70px;
  height: 64px;
  position: absolute;
  right: -80px;
  top: 0;
  padding: 4px 15px;
  font-size: 14px;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  min-width: 60px;
  vertical-align: top;
  cursor: pointer;
  background-color: #00a1d6;
  border: 1px solid #00a1d6;
  transition: 0.1s;
  user-select: none;
  outline: none;
}

.bb-comment .comment-send .comment-submit:hover,
.comment-bilibili-fold .comment-send .comment-submit:hover,
.bb-comment .comment-send-lite .comment-submit:hover,
.comment-bilibili-fold .comment-send-lite .comment-submit:hover {
  background-color: #00b5e5;
  border-color: #00b5e5;
}

.bb-comment .comment-send .comment-submit.disabled,
.comment-bilibili-fold .comment-send .comment-submit.disabled,
.bb-comment .comment-send-lite .comment-submit.disabled,
.comment-bilibili-fold .comment-send-lite .comment-submit.disabled {
  color: #b8c0cc;
  background-color: #e5e9ef;
  border-color: #e5e9ef;
  padding: 4px 10px;
}

.bb-comment .comment-send .comment-emoji,
.comment-bilibili-fold .comment-send .comment-emoji,
.bb-comment .comment-send-lite .comment-emoji,
.comment-bilibili-fold .comment-send-lite .comment-emoji {
  padding: 0;
  width: 66px;
  height: 24px;
  color: #99a2aa;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  position: relative;
  font-size: 12px;
  text-align: center;
  line-height: 23px;
  margin-left: 86px;
  margin-top: 3px;
  cursor: pointer;
  display: inline-block;
  box-shadow: 0px 1px 10px 0 rgba(106, 115, 133, 0.25);
}

.bb-comment .comment-send .comment-emoji .face,
.comment-bilibili-fold .comment-send .comment-emoji .face,
.bb-comment .comment-send-lite .comment-emoji .face,
.comment-bilibili-fold .comment-send-lite .comment-emoji .face {
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  width: 16px;
  height: 16px;
  margin-right: 5px;
  background: url(data:image/png;base64,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) no-repeat -408px -24px;
}

.bb-comment .comment-send .comment-emoji .text,
.comment-bilibili-fold .comment-send .comment-emoji .text,
.bb-comment .comment-send-lite .comment-emoji .text,
.comment-bilibili-fold .comment-send-lite .comment-emoji .text {
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  font-size: 12px !important;
}

.bb-comment .comment-send .comment-emoji:hover,
.comment-bilibili-fold .comment-send .comment-emoji:hover,
.bb-comment .comment-send-lite .comment-emoji:hover,
.comment-bilibili-fold .comment-send-lite .comment-emoji:hover,
.bb-comment .comment-send .comment-emoji.open,
.comment-bilibili-fold .comment-send .comment-emoji.open,
.bb-comment .comment-send-lite .comment-emoji.open,
.comment-bilibili-fold .comment-send-lite .comment-emoji.open {
  color: #6d757a;
}

.bb-comment .comment-send .comment-emoji:hover .face,
.comment-bilibili-fold .comment-send .comment-emoji:hover .face,
.bb-comment .comment-send-lite .comment-emoji:hover .face,
.comment-bilibili-fold .comment-send-lite .comment-emoji:hover .face,
.bb-comment .comment-send .comment-emoji.open .face,
.comment-bilibili-fold .comment-send .comment-emoji.open .face,
.bb-comment .comment-send-lite .comment-emoji.open .face,
.comment-bilibili-fold .comment-send-lite .comment-emoji.open .face {
  background-position: -472px -24px;
}

.bb-comment .comment-send .dynamic-repost,
.comment-bilibili-fold .comment-send .dynamic-repost,
.bb-comment .comment-send-lite .dynamic-repost,
.comment-bilibili-fold .comment-send-lite .dynamic-repost {
  display: inline-block;
  font-size: 12px;
  margin-left: 15px;
  color: #99a2aa;
}

.bb-comment .comment-send .dynamic-repost .dynamic-repost-checkbox,
.comment-bilibili-fold .comment-send .dynamic-repost .dynamic-repost-checkbox,
.bb-comment .comment-send-lite .dynamic-repost .dynamic-repost-checkbox,
.comment-bilibili-fold .comment-send-lite .dynamic-repost .dynamic-repost-checkbox {
  vertical-align: middle;
  appearance: checkbox;
}

.bb-comment .comment-send .dynamic-repost span,
.comment-bilibili-fold .comment-send .dynamic-repost span,
.bb-comment .comment-send-lite .dynamic-repost span,
.comment-bilibili-fold .comment-send-lite .dynamic-repost span {
  margin-left: 3px;
  vertical-align: middle;
}

.bb-comment .comment-send .baffle,
.comment-bilibili-fold .comment-send .baffle,
.bb-comment .comment-send-lite .baffle,
.comment-bilibili-fold .comment-send-lite .baffle {
  display: none;
}

.bb-comment .no-login,
.comment-bilibili-fold .no-login {
  position: relative;
}

.bb-comment .no-login ::-webkit-input-placeholder,
.comment-bilibili-fold .no-login ::-webkit-input-placeholder {
  color: #e5e9ef;
}

.bb-comment .no-login .textarea-container textarea,
.comment-bilibili-fold .no-login .textarea-container textarea {
  background-color: #e5e9ef;
}

.bb-comment .no-login .textarea-container .ipt-arrow,
.comment-bilibili-fold .no-login .textarea-container .ipt-arrow {
  background-position: -395px -538px;
}

.bb-comment .no-login .textarea-container:hover textarea,
.comment-bilibili-fold .no-login .textarea-container:hover textarea,
.bb-comment .no-login .textarea-container.focus textarea,
.comment-bilibili-fold .no-login .textarea-container.focus textarea {
  background-color: #e5e9ef;
  border-color: #e5e9ef;
}

.bb-comment .no-login .textarea-container:hover .ipt-arrow,
.comment-bilibili-fold .no-login .textarea-container:hover .ipt-arrow,
.bb-comment .no-login .textarea-container.focus .ipt-arrow,
.comment-bilibili-fold .no-login .textarea-container.focus .ipt-arrow {
  background-position: -395px -538px;
}

.bb-comment .no-login .comment-submit,
.comment-bilibili-fold .no-login .comment-submit {
  cursor: default;
  background-color: #e5e9ef !important;
  border-color: #e5e9ef !important;
  color: #b8c0cc !important;
}

.bb-comment .no-login .comment-emoji,
.comment-bilibili-fold .no-login .comment-emoji {
  background-color: #e5e9ef;
}

.bb-comment .no-login .baffle,
.comment-bilibili-fold .no-login .baffle {
  display: block;
  position: absolute;
  width: 100%;
  top: 0;
  line-height: 64px;
  font-size: 12px;
  border-radius: 4px;
  text-align: center;
  color: #777;
  background-color: #e5e9ef;
  overflow: hidden;
}

.bb-comment .no-login .baffle .b-btn,
.comment-bilibili-fold .no-login .baffle .b-btn {
  padding: 4px 9px;
  margin: 0 3px;
  color: #fff;
  background-color: #00a1d6;
  border-radius: 4px;
}

.bb-comment .no-login .baffle .b-btn:hover,
.comment-bilibili-fold .no-login .baffle .b-btn:hover {
  background-color: #00b5e5;
}

.bb-comment .operation,
.comment-bilibili-fold .operation {
  position: relative;
  width: 18px;
  float: right;
  margin-top: 5px;
  margin-right: 0;
}

.bb-comment .operation .spot,
.comment-bilibili-fold .operation .spot {
  width: 18px;
  height: 18px;
  cursor: pointer;
  background: url(data:image/png;base64,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) no-repeat;
  background-position: -151px -280px;
}

.bb-comment .operation .spot:hover,
.comment-bilibili-fold .operation .spot:hover {
  background-position: -216px -280px;
}

.bb-comment .operation .opera-list,
.comment-bilibili-fold .operation .opera-list {
  display: none;
  position: absolute;
  width: 120px;
  right: 0;
  top: 20px;
  z-index: 10;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: #222;
  font-size: 14px;
  padding: 10px 0;
  z-index: 999;
}

.bb-comment .operation .opera-list li,
.comment-bilibili-fold .operation .opera-list li {
  padding: 0px 15px;
  cursor: pointer;
  height: 36px;
  line-height: 36px;
  transition: all 0.3s;
}

.bb-comment .operation .opera-list li:hover,
.comment-bilibili-fold .operation .opera-list li:hover {
  background: #e5e9ef;
  color: #00a1d6;
}

.bb-comment .operation.btn-hover,
.comment-bilibili-fold .operation.btn-hover {
  padding: 0;
  border-radius: 0;
  margin-right: 0;
  display: block;
}

.bb-comment .operation.btn-hover:hover,
.comment-bilibili-fold .operation.btn-hover:hover {
  color: none;
  background: none;
}

.bb-comment .comment-list,
.comment-bilibili-fold .comment-list {
  padding-top: 20px;
}

.bb-comment .comment-list .quote,
.comment-bilibili-fold .comment-list .quote {
  margin: 16px auto;
  background: #f4f5f7;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  padding: 10px;
  overflow: auto;
}

.bb-comment .comment-list .list-item .user-face,
.comment-bilibili-fold .comment-list .list-item .user-face {
  float: left;
  margin: 24px 0 0 5px;
  position: relative;
}

.bb-comment .comment-list .list-item .user-face .blacklist-face,
.comment-bilibili-fold .comment-list .list-item .user-face .blacklist-face {
  width: 48px;
  height: 48px;
  border-radius: 24px;
}

.bb-comment .comment-list .list-item .user-face .bili-avatar,
.comment-bilibili-fold .comment-list .list-item .user-face .bili-avatar {
  width: 48px;
  height: 48px;
}

.bb-comment .comment-list .list-item .user-face .hot-follow,
.comment-bilibili-fold .comment-list .list-item .user-face .hot-follow {
  text-align: center;
  position: relative;
  top: 18px;
}

.bb-comment .comment-list .list-item .user-face .hot-follow .follow-btn,
.comment-bilibili-fold .comment-list .list-item .user-face .hot-follow .follow-btn {
  width: 48px;
  height: 24px;
  padding: 0;
  color: #fff;
  font-size: 12px;
  background-color: #00a1d6;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
}

.bb-comment .comment-list .list-item .user-face .hot-follow .follow-btn:hover,
.comment-bilibili-fold .comment-list .list-item .user-face .hot-follow .follow-btn:hover {
  background-color: #00b5e5;
}

.bb-comment .comment-list .list-item .user-face .hot-follow .follow-btn.followed,
.comment-bilibili-fold .comment-list .list-item .user-face .hot-follow .follow-btn.followed {
  background: #e5e9ef;
  color: #6d757a;
}

.bb-comment .comment-list .list-item .comment-send .user-face,
.comment-bilibili-fold .comment-list .list-item .comment-send .user-face {
  margin: 7px 0 0 5px;
}

.bb-comment .comment-list .list-item .con,
.comment-bilibili-fold .comment-list .list-item .con {
  position: relative;
  margin-left: 85px;
  padding: 22px 0 14px 0;
  border-top: 1px solid #e5e9ef;
}

.bb-comment .comment-list .list-item .con .hidden-reply-toggle,
.comment-bilibili-fold .comment-list .list-item .con .hidden-reply-toggle {
  font-size: 14px;
}

.bb-comment .comment-list .list-item .con .quote,
.comment-bilibili-fold .comment-list .list-item .con .quote {
  font-size: 14px;
}

.bb-comment .comment-list .list-item .con .vote-container,
.comment-bilibili-fold .comment-list .list-item .con .vote-container {
  margin: 10px 0;
  width: 520px;
  height: 80px;
  border-top: 1px solid #e5e9ef;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  cursor: pointer;
}

.bb-comment .comment-list .list-item .con .vote-container .image-area,
.comment-bilibili-fold .comment-list .list-item .con .vote-container .image-area {
  width: 80px;
  height: 80px;
  float: left;
}

.bb-comment .comment-list .list-item .con .vote-container .image-area .share-img,
.comment-bilibili-fold .comment-list .list-item .con .vote-container .image-area .share-img {
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjggMjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cjx0aXRsZT5Hcm91cCAyPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CjxnIGlkPSJQYWdlLTEiIHN0eWxlPSJmaWxsOiMwMEExRDYiPgoJPGcgaWQ9IuWwgemdoiI+CgkJPGcgaWQ9Ikdyb3VwLTIiPgoJCQk8ZyBpZD0iUmVjdGFuZ2xlLTUiPgoJCQkJPHBhdGggZD0iTTMuMywyOC4zQzEuNSwyOC4zLDAsMjYuOSwwLDI1VjEwLjFjMC0xLjgsMS41LTMuMywzLjMtMy4zczMuMywxLjUsMy4zLDMuM1YyNUM2LjcsMjYuOSw1LjIsMjguMywzLjMsMjguM3ogTTMuMyw4CgkJCQkJYy0xLjIsMC0yLjEsMS0yLjEsMi4xVjI1YzAsMS4yLDEsMi4xLDIuMSwyLjFzMi4xLTEsMi4xLTIuMVYxMC4xQzUuNSw4LjksNC41LDgsMy4zLDh6Ii8+CgkJCTwvZz4KCQkJPGcgaWQ9IlJlY3RhbmdsZS01XzFfIj4KCQkJCTxwYXRoIGQ9Ik0xNCwyOC40Yy0xLjgsMC0zLjMtMS41LTMuMy0zLjNWMy4zQzEwLjcsMS41LDEyLjIsMCwxNCwwczMuMywxLjUsMy4zLDMuM1YyNUMxNy4zLDI2LjksMTUuOCwyOC40LDE0LDI4LjR6IE0xNCwxLjIKCQkJCQljLTEuMiwwLTIuMSwxLTIuMSwyLjFWMjVjMCwxLjIsMSwyLjEsMi4xLDIuMWMxLjIsMCwyLjEtMSwyLjEtMi4xVjMuM0MxNi4xLDIuMiwxNS4yLDEuMiwxNCwxLjJ6Ii8+CgkJCTwvZz4KCQkJPGcgaWQ9IlJlY3RhbmdsZS01XzJfIj4KCQkJCTxwYXRoIGQ9Ik0yNC43LDI4LjRjLTEuOCwwLTMuMy0xLjUtMy4zLTMuM3YtNi44YzAtMS44LDEuNS0zLjMsMy4zLTMuM3MzLjMsMS41LDMuMywzLjNWMjVDMjgsMjYuOSwyNi41LDI4LjQsMjQuNywyOC40egoJCQkJCSBNMjQuNywxNi4xYy0xLjIsMC0yLjEsMS0yLjEsMi4xVjI1YzAsMS4yLDEsMi4xLDIuMSwyLjFzMi4xLTEsMi4xLTIuMXYtNi44QzI2LjgsMTcsMjUuOCwxNi4xLDI0LjcsMTYuMXoiLz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K") center center / 28px no-repeat #dff7ff;
}

.bb-comment .comment-list .list-item .con .vote-container .text-area,
.comment-bilibili-fold .comment-list .list-item .con .vote-container .text-area {
  width: 335px;
  height: 80px;
  padding: 0 90px 0 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
}

.bb-comment .comment-list .list-item .con .vote-container .text-area .text-content,
.comment-bilibili-fold .comment-list .list-item .con .vote-container .text-area .text-content {
  color: #222;
  font-size: 14px;
}

.bb-comment .comment-list .list-item .con .vote-container .text-area .text-desc,
.comment-bilibili-fold .comment-list .list-item .con .vote-container .text-area .text-desc {
  padding-top: 10px;
  color: #99a2aa;
  font-size: 12px;
}

.bb-comment .comment-list .list-item .con .vote-container .text-area .vote-btn-box,
.comment-bilibili-fold .comment-list .list-item .con .vote-container .text-area .vote-btn-box {
  width: 90px;
  height: 80px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.bb-comment .comment-list .list-item .con .vote-container .text-area .vote-btn-box .vote-btn,
.comment-bilibili-fold .comment-list .list-item .con .vote-container .text-area .vote-btn-box .vote-btn {
  width: 54px;
  display: inline-block;
  color: #fff;
  background-color: #00a1d6;
  border-radius: 4px;
  font-size: 13px;
  line-height: 28px;
}

.bb-comment .comment-list .list-item .con .vote-container:hover .text-area,
.comment-bilibili-fold .comment-list .list-item .con .vote-container:hover .text-area {
  box-shadow: 0 3px 10px 0 rgba(213, 216, 219, 0.44);
}

.bb-comment .comment-list .list-item .con .lottery-container,
.comment-bilibili-fold .comment-list .list-item .con .lottery-container {
  margin: 10px 0;
  width: 520px;
  height: 80px;
  border-top: 1px solid #e5e9ef;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  cursor: pointer;
}

.bb-comment .comment-list .list-item .con .lottery-container .image-area,
.comment-bilibili-fold .comment-list .list-item .con .lottery-container .image-area {
  width: 80px;
  height: 80px;
  float: left;
}

.bb-comment .comment-list .list-item .con .lottery-container .image-area .share-img,
.comment-bilibili-fold .comment-list .list-item .con .lottery-container .image-area .share-img {
  width: 100%;
  height: 100%;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABSNJREFUaAXtWW9oW1UUv+e9l6wd1tlZlQ4myloR/LPaRMWBbE6miFWbutR2ggyHuDmX1q+DYUHED0PXLOroQCaIThtiC/ObykSEyZa0dt2sIP7Z0E07aJmZTdq+d4/nvvQlMbsvyUtahvPdD7nnnXv+/c659757Xxhzm5uB/3cGYDHgB96euJ4Zc42aF6ejO1p+t7P5/Hs/1CX/nlmtemDm9u0tZ/sAuJ1sufyqAGwOj64zGO9HxHsth2TwZwC259Me/0cWL/hOoknXWYQx3ITIVMEHBpMMcJ/W6Nsb7QTDknXaVwygI5zoo2D2IENF6hQg1nJ3a9fY+MgzBPAgQ7ZcJkdgj2ugtEVDrRdk46V4FQEI9CfaKPAjwjgF8Bulc68K6kmD81sJ1EuUab/pGJQIMP4C8WroOamQHIByjCNrIJlnCVhbRg5iwz2+zSbt8McxgODgaa9+LvUrMtZI02BCq8UHoi/6L1p++46iNnZyZJCCCxA8muOoEMiLCMw3HPL/ZMmJPrA/8Tpy3C1oVYEnYyGfmRTxXG6Tl7+INp6ffVAEL0RQwd784AWv7yHQmVfbTuDM4AUPkL1WGLzgr72r9VWq3llBU1U6Re+0OQagM1xjOgHAG5exb2QOh3asnUTAM7kx9escnaNMsAjHFjhNuZHyKccAACBtmkeEab32WltXwC5ZY1wxpixa0l8neDTlMnYlAsVYjgFowEctg4Y+G7ToSvquyMgqCn2d0KV1MlKJDccAorv84+TsqHDGEd9o3x9/pBLH3f3jN6U5fky6dWQvrXk8ByuxU3QXCg6iWj+dWFZoOMnYzek0nKCyX7MwRmsBviNjqaws4DbaPleaz4AfACp/LNBA74Q1CLCB5k294NH2uruhhoXN8byfOW+SH9q6YZamLe0b8iYFEByIr5hPs3cBocv2RSW3t+hcCv4CAd051OuPyoxLp5CeYgcoS1uudPAiYKryDbTVHg6ET9wpA6AVMsW0mT8/0kWatLBgUFHxLdrwHZ9V6CXgR4MfEPYB1HZFQdtDXmEM1jPNm1Wc4/sEop7e4E8R/5Q1ZvWXARBzfpJiFwII6puxl1uOW8JO+kAkkd1iEYxTsV3/fguXaysQTnxOQDopC6tlOtIplBVEw3Hms7qLRSCaMVAVpOtVBmA+6xvgMTvFrMwSEt0D8QaaC/cJF6Ao0tOqFFV7f/xb0rnfVATIARKMMhttAGK7NKcoraXKbJh3h8xxXVWUTbFQ6xeF7i9bA0IANO05ZuhHaB3fRhXwFCo5fa7KBr0DKBP7ZMGbsdoFs/XQLzXJS1PrOWcRCqCZFpE42/xpJy/h19JORkcFagBn6Fc36VI/iOLGdosphiwMXhgY2umbsFOTTqF8YdoFviIA60nwML1MtuSPFaNpF9qIBn5pyiisSXaclul3DMQbeYqdE2N0JH9iqNf3mUzO4skWsTX2n+hdAFe6TG4F3ApUmQF3ClWZwKrV3QpUncIqDbgVqDKBVatf/RWg+2jmGAwgPpEveVPnPDk/UPoILr3Q5EcJiKcJxMN0w3qU/hd4BdTMUTdfRkZzhndYfDqKP94RSZS8SyAH0A2929LTGH5v0XZ9yfvA0+HRZo7GGIGotTOyNHz4ZLjX11XKdsk1EOu550dQYCN9vxSfV8q7VZXyWmScMjpFN5lI3UptWxGx7FDJCmQliRD/zrDpVFmVmDG8ioZp89spLPckPXMGFbF4886uwA9DzX8Vl3JH3Qy4GbiqMvAPcV29qtEhK+0AAAAASUVORK5CYII=") center center / 28px no-repeat #dff7ff;
}

.bb-comment .comment-list .list-item .con .lottery-container .text-area,
.comment-bilibili-fold .comment-list .list-item .con .lottery-container .text-area {
  width: 335px;
  height: 80px;
  padding: 0 90px 0 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
}

.bb-comment .comment-list .list-item .con .lottery-container .text-area .text-content,
.comment-bilibili-fold .comment-list .list-item .con .lottery-container .text-area .text-content {
  color: #222;
  font-size: 14px;
}

.bb-comment .comment-list .list-item .con .lottery-container .text-area .text-desc,
.comment-bilibili-fold .comment-list .list-item .con .lottery-container .text-area .text-desc {
  padding-top: 10px;
  color: #99a2aa;
  font-size: 12px;
}

.bb-comment .comment-list .list-item .con .lottery-container .text-area .lottery-btn-box,
.comment-bilibili-fold .comment-list .list-item .con .lottery-container .text-area .lottery-btn-box {
  width: 90px;
  height: 80px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.bb-comment .comment-list .list-item .con .lottery-container .text-area .lottery-btn-box .lottery-btn,
.comment-bilibili-fold .comment-list .list-item .con .lottery-container .text-area .lottery-btn-box .lottery-btn {
  width: 70px;
  display: inline-block;
  color: #fff;
  background-color: #00a1d6;
  border-radius: 4px;
  font-size: 13px;
  line-height: 28px;
}

.bb-comment .comment-list .list-item .con .lottery-container:hover .text-area,
.comment-bilibili-fold .comment-list .list-item .con .lottery-container:hover .text-area {
  box-shadow: 0 3px 10px 0 rgba(213, 216, 219, 0.44);
}

.bb-comment .comment-list .list-item:last-child .con,
.comment-bilibili-fold .comment-list .list-item:last-child .con {
  border-bottom: 1px solid #e5e9ef;
}

.bb-comment .comment-list .list-item .no-border,
.comment-bilibili-fold .comment-list .list-item .no-border {
  border-top: none;
}

.bb-comment .comment-list .list-item .user,
.comment-bilibili-fold .comment-list .list-item .user {
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
  padding-bottom: 4px;
  display: block;
  word-wrap: break-word;
  position: relative;
}

.bb-comment .comment-list .list-item .user .level,
.comment-bilibili-fold .comment-list .list-item .user .level {
  display: inline-block;
  width: 19px;
  height: 9px;
  vertical-align: middle;
  margin: 0 8px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoCAMAAAB6fSTWAAAA51BMVEUAAACYoKhwd3yboqni5emDjJL7+/yZoqoAodbnix8AodYAodaZoqoAodYAodaln5jnix8Aodbnix8AodaZoqoAodbnix8Aodbnix/yXY6ZoqoAodYAodYAodaZoqoAodaZoqryXY7yXY4AodbyXY6ZoqryXY6ZoqoAodaZoqoAodaZoqryXY7nix8AodYAodbnix+ZoqqZoqrnix8AodYAodbnix+Zoqr////19vfM0NcAoda/v7/l6e9MyP//u1PlL+z/s3yS0eWV3bL/bAAVFRX/AACEHPnnix+M2fn/1pbyXY4iIiIkv4BgAAAAOHRSTlMA9fUreZKu4eI+EfDtgtwP7AkexYcv2WfIsP3refnX0mcmGUPyxsScjXkXF++zoZpMMyn+Ppl8Q6/LsKoAAA3QSURBVHja7NvdbtowGIfxP7UsaEqbfkGj0bWVpqofiK0f2nZALyD3f0V7E4KsbULCjpRA9fykQDjw4SOb2BEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG2cF4X64vzAeJc+/sDYeGDH3Q0e1MrV1x9q4eW0LNUTP2j4xPEHDS9gp70O50O1MRk9j5Tu13tZhX4+LdS5ejJvpnUlqCfzZloXsMPym99qFfrZ7Telh54vyop1Xk7VNevbqeas+KT5fD2eOR3b+FhR1/L84dJaz42SZNnPR2UnWZadKV7+Mi1rss7P1THXdB7u47iq83DP/3RsijtQpevQ78bjL/fS29CMHxTvana0vDjT5MTMviuSVb6movvO5Qe+Wr2vLvsRP6H7avW+ujxTOjaErrrw+mq+1K1hrqHWxoo3yjTS2kyRTssQeh9sEg+hO/uIZJN4CN3xLx07G7pC6G/3KaErhD65UKQyUGEfhbplaYfQlRK6Quja29CPj4W/febQn55ahn59vY+hO9VcWuhh/P6GfrxcUvq/PnHo965l6BcTRZruwNLdexnv05buYfzeLt2tc0qPkBi6qb77D31+o3ahP58o1mERQl8U/TyMc3bZjUt9GOfsshvHwzhsDt00jdf3fYZ+d9ky9KtHxcsPe99ec746NJO+veZ8dWiG7TVs9PGfzkOfr0PPb16TQn9eh57dTtoemCm0NQ7MAHH76OOVJylxH/2oNrtufQR2oa1xBBbYN/ZSy7ui8VILsF94TRUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAH3buoMVNIAzA8BxESA5ldyHkUui1p/Y6YrJ71v//g/rFmFoKaaMBdZPngTWzh+/4MqKTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwIMqyirnqizungfWqihzryzum5c6rFVkWrUfoa0i1Unzx+Y9NMfTPKzZvv6ZnlJ02n702ih1wnzz3muUzrrt6rpOS3kbFrMrzp0PpRdj57vOh9LdvbNer/WCob+9bFJn8zJ/6eWl87Y9l16OnW/6xpvuakvnvw5naW7bbX2y3W5f0xI2UXr/MbciV33nffBVLsbNH/vO++CPtnSuxT3o/k/z2td/+JGWEIkv0vmwobf596KcsqE3ORa2dK46nNLuLsNiXpF3/F2kRUTkC3QeqnzpPBadXI2bv3Qei07Mg9CvlR6dLyDnc+ehqqou9Dxu/tJ5zB+70HOCtYf+Nd3sgUKvcqedGno/3widTxL6Lt3skW7do+/ofPKtezh17tadf4YeTp8rCP1Lup2HcR7GMSL00BfeNb5o6N/TzR7r9Vobnd/zeq2Jzr1e47rD35YM/dsujfMwB2bauE4/MNMdl7Ghs2r7+o5HcY7AOgILn4AvtcAz8DVVeAZ+eAKegp+SAgAAAAAAAAAAAAAAAAAAAH6xczctbQRxAIf/RmHDGgyiQWisCkV8gxaF0nZDTjkF+v0/T4dNrIFe6g5JnOR5srksDHP6wTCzDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlKhZdXRY3HjgPzS/Vkybd5fW/FyRxmfOr3RorS/0ZHqUEXqSxufODyRrDD1pckJPmuz5gQihQxc3g8GnwcJDdHAxPp4ct8aXUR6hsx+qp6iiNbx6jvfrP0Y/WvX1KIojdDZtthCbVbVP6+a8S+jt07q4j+IsQjvIDH2eGfpU6Dtutioi2WLoT1d5oT+eRHEWof0+yAt9Ms8LvZkKfbfNoi28/be2GXrcHmaFHmflrd2XoafSs0KfzPNCb6ZC32kfK/SHh7zQL8vbjluGnkrPC30yzwu9mQp9l62Evv2le7zc5oU+OovS/A29J3Q66BT6Vjbjhm+hx6BD6PVb6DGO0ryG3rN0Z41e406/jNBzz9FvI16qZHDX7Rz97DRGJ8n4a5RmGXrPZhzr1Gb92vjyzaYNh3fnMbwaJtFFXX+/j/qkruvTKM4itJ7jNdZq9q/YuFT5j6iiu9PrL9GPIvlghj3yXD1VkWHUfxS60Pnwbg7uIsfF529RJKHDHhA67AEXT8AecJUU7IHG5ZAAAAAAAAAAAAAAAMAfdu6etUEgDuDwNcnkUMgQshS6dmrXeOKSLdDv/3kqlxeELCVXk9T/84Aogtz0w+OUAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAmVqu8ti/ex74RWe5b8dueH43Vj0+8PdWfVsV2mrofOyG8YUOU8ttXWh5Vxd6boUOV4QOt9h2F28pHqETwxD4cBTvmxSO0Lm3/VGqUBd695HCuYT2Uhn6oTL0Xuhzth8rdx4Z+msKJ587/64L/dDVhd5noc/ZPpXCy1E8LPQi3tw9nzuvC/3Q1YXeZ6HP2pOFHm85Lp86rwv90NWF3mehz9so9CeYug+X0Rz7WgidKzN+o0cN3dSdaZ36LufHhL7tRj5TNLk9WliMY0Il69J3xap7paYpkTdNs07h5PZk4fMa09lfS/e3Djlr98MM0WyELnQC2HZfKSShQwBChwBsPAEB2EoKIljaHBIAAAAAAAAAAPhhzw5WGwSiMIzekCGbkF1Wgb5HhzIL3/+lClaCEixCCMl4zwER3H/8OgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADtX2gYlgJ617w1aAD0TOiQgdEhA6JCA0CEBoUMCQocEhA4JCB0SEDokIHRIQOiQgNBJ6nq4xlMu50t0Q+gkdbsd4ilfP+fohtB5o+FPbGTRhU4vhrkYr+CB0OnbEPfChb5O6PTtU0L36i505l4Z+vRkI4dxQqcXi9AHi75C6PRt6nu6+0ZfIXT6NmY99i30/widrg0z/qOvEjo4jBM6WHShQ0ZChwSEDgkIHRIQOiQgdEhA6JDAQ+i1tSp02Je2rLy2cjyWVqvQYUfaYsxPJUbl1KrQYTfaYszjbpx1of+yZ8c4DINAFAW3QJwpFO64/5kiMAUU6eP1jGS5oH76loEcajvGfDlnvdUAnqxc7dOuY8yPWZ/HJYBHK3WN+e9jnQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPyNfgsgmb6LQeiQTo9Z+P2ERYeUhA4vsIXu0x2y2kOfhA75rL7HW+iQ1cx69O2vO+TVN+7RAQAAAAAAAAAAvuzZwQnAIBBE0a1u+i8pqBch15wm74FawWdFAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvpFjgDK5zSJ0qJPZhZ81JjpUEjr8wBW6qzu0ek10oUOfTJZ1Ch1aZW/JeHWHXrn4RwcAAAAAAHjYs2MbgIEQCIKURv9VWY8dfAGOjhkJUcFGBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8I9+FRCmb3UIHeJ0TeFzQ+iQR+iwgNBhAaHDAl/f5wsdUk3W07fQIVZf7OgAAAAPe3ZQA0AIQ1Gw7r5/Rxu6lwrgVGYSqIIXCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANyRXwHLZKpD6LBOqgvv1UPosI/Q4QEjdFd32MqJDg9I5ThT6LBVekvKqzvslcE/+sduHZ0AAIIAFHQ5918pMggH6MvuQJzgoQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/kEcAw2cUmdBgnowqvqSV0mEfo8IEWutcdprqh17joiz07tgEQhgEgmBoEUuQaZZDU3n8lCBUbIFl3hT3BNzaUlC2XtYUOVeU7MpurO9SVH/7oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL+L+YgGVBZzaUBp2xA6FNaP8zqPmEPoUFaPueyxCf1mz45NIIaBIAAqdCKBcOTAgZBDh86uhO+/n9fzTZhjJtgOloNbSKtGm322qGX3jIOsWjwrn2gFSOuMvrLHWYC0WkwXHbKrsc0+t6gFSKvv8bP3AuT139H1HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4OXGcV3HKEBi4/4st6Z/2bODG4BhEAaArJFnoyjLeP99WnUMuHuwgQXC0NnK2vsbBfR1sqt2TgF9CToM4HSHATzjYIJnJeo16O3mdwvoS9BhhqSA7q51DgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAve3AgAAAAAADk/9oIqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqrCHhwIAAAAAAD5vzaCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqwBwcCAAAAAED+r42gqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqirtwQEJAAAAgKD/r9sRqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8BfEgGFMI1IvvAAAAABJRU5ErkJggg==) no-repeat;
}

.bb-comment .comment-list .list-item .user .level.l0,
.comment-bilibili-fold .comment-list .list-item .user .level.l0 {
  background-position: -23px -28px;
}

.bb-comment .comment-list .list-item .user .level.l1,
.comment-bilibili-fold .comment-list .list-item .user .level.l1 {
  background-position: -23px -92px;
}

.bb-comment .comment-list .list-item .user .level.l2,
.comment-bilibili-fold .comment-list .list-item .user .level.l2 {
  background-position: -23px -156px;
}

.bb-comment .comment-list .list-item .user .level.l3,
.comment-bilibili-fold .comment-list .list-item .user .level.l3 {
  background-position: -23px -220px;
}

.bb-comment .comment-list .list-item .user .level.l4,
.comment-bilibili-fold .comment-list .list-item .user .level.l4 {
  background-position: -23px -284px;
}

.bb-comment .comment-list .list-item .user .level.l5,
.comment-bilibili-fold .comment-list .list-item .user .level.l5 {
  background-position: -23px -348px;
}

.bb-comment .comment-list .list-item .user .level.l6,
.comment-bilibili-fold .comment-list .list-item .user .level.l6 {
  background-position: -23px -412px;
}

.bb-comment .comment-list .list-item .user .level.l7,
.comment-bilibili-fold .comment-list .list-item .user .level.l7 {
  background-position: -23px -476px;
}

.bb-comment .comment-list .list-item .user .level.l8,
.comment-bilibili-fold .comment-list .list-item .user .level.l8 {
  background-position: -23px -540px;
}

.bb-comment .comment-list .list-item .user .level.l9,
.comment-bilibili-fold .comment-list .list-item .user .level.l9 {
  background-position: -23px -604px;
}

.bb-comment .comment-list .list-item .user > a,
.comment-bilibili-fold .comment-list .list-item .user > a {
  vertical-align: middle;
}

.bb-comment .comment-list .list-item .user .name,
.comment-bilibili-fold .comment-list .list-item .user .name {
  color: #6d757a;
}

.bb-comment .comment-list .list-item .user .name:hover,
.comment-bilibili-fold .comment-list .list-item .user .name:hover {
  color: #00a1d6;
}

.bb-comment .comment-list .list-item .user .text-con,
.comment-bilibili-fold .comment-list .list-item .user .text-con {
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-wrap;
}

.bb-comment .comment-list .list-item .identity,
.comment-bilibili-fold .comment-list .list-item .identity {
  display: inline-block;
  width: 34px;
  height: 18px;
  background: #fb7299;
  border-radius: 2px;
  text-align: center;
  line-height: 18px;
  font-style: normal;
  color: #fff;
  margin-right: 5px;
  font-weight: 400;
}

.bb-comment .comment-list .list-item .identity.true-love,
.comment-bilibili-fold .comment-list .list-item .identity.true-love {
  background: #f25d8e;
}

.bb-comment .comment-list .list-item .text,
.comment-bilibili-fold .comment-list .list-item .text {
  line-height: 20px;
  padding: 2px 0;
  font-size: 14px;
  text-shadow: none;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
}

.bb-comment .comment-list .list-item .text img,
.comment-bilibili-fold .comment-list .list-item .text img,
.bb-comment .comment-list .list-item .text-con img,
.comment-bilibili-fold .comment-list .list-item .text-con img {
  vertical-align: text-bottom;
  padding: 0 1px;
  width: 50px;
  height: 50px;
}

.bb-comment .comment-list .list-item .text img.small,
.comment-bilibili-fold .comment-list .list-item .text img.small,
.bb-comment .comment-list .list-item .text-con img.small,
.comment-bilibili-fold .comment-list .list-item .text-con img.small {
  width: 20px;
  height: 20px;
}

.bb-comment .comment-list .list-item .text .jump-img,
.comment-bilibili-fold .comment-list .list-item .text .jump-img,
.bb-comment .comment-list .list-item .text-con .jump-img,
.comment-bilibili-fold .comment-list .list-item .text-con .jump-img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.bb-comment .comment-list .list-item .text .vote-link,
.comment-bilibili-fold .comment-list .list-item .text .vote-link,
.bb-comment .comment-list .list-item .text-con .vote-link,
.comment-bilibili-fold .comment-list .list-item .text-con .vote-link,
.bb-comment .comment-list .list-item .text .lottery-link,
.comment-bilibili-fold .comment-list .list-item .text .lottery-link,
.bb-comment .comment-list .list-item .text-con .lottery-link,
.comment-bilibili-fold .comment-list .list-item .text-con .lottery-link,
.bb-comment .comment-list .list-item .text .comment-jump-url,
.comment-bilibili-fold .comment-list .list-item .text .comment-jump-url,
.bb-comment .comment-list .list-item .text-con .comment-jump-url,
.comment-bilibili-fold .comment-list .list-item .text-con .comment-jump-url {
  color: #00a1d6;
  margin: 0 3px;
}

.bb-comment .comment-list .list-item .text .vote-link.comment-jump-url,
.comment-bilibili-fold .comment-list .list-item .text .vote-link.comment-jump-url,
.bb-comment .comment-list .list-item .text-con .vote-link.comment-jump-url,
.comment-bilibili-fold .comment-list .list-item .text-con .vote-link.comment-jump-url,
.bb-comment .comment-list .list-item .text .lottery-link.comment-jump-url,
.comment-bilibili-fold .comment-list .list-item .text .lottery-link.comment-jump-url,
.bb-comment .comment-list .list-item .text-con .lottery-link.comment-jump-url,
.comment-bilibili-fold .comment-list .list-item .text-con .lottery-link.comment-jump-url,
.bb-comment .comment-list .list-item .text .comment-jump-url.comment-jump-url,
.comment-bilibili-fold .comment-list .list-item .text .comment-jump-url.comment-jump-url,
.bb-comment .comment-list .list-item .text-con .comment-jump-url.comment-jump-url,
.comment-bilibili-fold .comment-list .list-item .text-con .comment-jump-url.comment-jump-url {
  vertical-align: middle;
  margin-left: 0;
}

.bb-comment .comment-list .list-item .text .vote-link img,
.comment-bilibili-fold .comment-list .list-item .text .vote-link img,
.bb-comment .comment-list .list-item .text-con .vote-link img,
.comment-bilibili-fold .comment-list .list-item .text-con .vote-link img,
.bb-comment .comment-list .list-item .text .lottery-link img,
.comment-bilibili-fold .comment-list .list-item .text .lottery-link img,
.bb-comment .comment-list .list-item .text-con .lottery-link img,
.comment-bilibili-fold .comment-list .list-item .text-con .lottery-link img,
.bb-comment .comment-list .list-item .text .comment-jump-url img,
.comment-bilibili-fold .comment-list .list-item .text .comment-jump-url img,
.bb-comment .comment-list .list-item .text-con .comment-jump-url img,
.comment-bilibili-fold .comment-list .list-item .text-con .comment-jump-url img {
  width: 16px;
  height: 16px;
  margin-right: 3px;
  vertical-align: text-top;
}

.bb-comment .comment-list .list-item .text .vote-link:hover,
.comment-bilibili-fold .comment-list .list-item .text .vote-link:hover,
.bb-comment .comment-list .list-item .text-con .vote-link:hover,
.comment-bilibili-fold .comment-list .list-item .text-con .vote-link:hover,
.bb-comment .comment-list .list-item .text .lottery-link:hover,
.comment-bilibili-fold .comment-list .list-item .text .lottery-link:hover,
.bb-comment .comment-list .list-item .text-con .lottery-link:hover,
.comment-bilibili-fold .comment-list .list-item .text-con .lottery-link:hover,
.bb-comment .comment-list .list-item .text .comment-jump-url:hover,
.comment-bilibili-fold .comment-list .list-item .text .comment-jump-url:hover,
.bb-comment .comment-list .list-item .text-con .comment-jump-url:hover,
.comment-bilibili-fold .comment-list .list-item .text-con .comment-jump-url:hover {
  color: #f25d8e;
}

.bb-comment .comment-list .list-item .info,
.comment-bilibili-fold .comment-list .list-item .info {
  color: #99a2aa;
  line-height: 26px;
  font-size: 12px;
}

.bb-comment .comment-list .list-item .info > span,
.comment-bilibili-fold .comment-list .list-item .info > span {
  margin-right: 20px;
}

.bb-comment .comment-list .list-item .info .btn-hover,
.comment-bilibili-fold .comment-list .list-item .info .btn-hover {
  padding: 0 5px;
  border-radius: 4px;
  margin-right: 15px;
  cursor: pointer;
  display: inline-block;
}

.bb-comment .comment-list .list-item .info .btn-hover:hover,
.comment-bilibili-fold .comment-list .list-item .info .btn-hover:hover {
  color: #00a1d6;
  background: #e5e9ef;
}

.bb-comment .comment-list .list-item .info .btn-hide,
.comment-bilibili-fold .comment-list .list-item .info .btn-hide {
  visibility: hidden;
}

.bb-comment .comment-list .list-item .info .btn-hide-re,
.comment-bilibili-fold .comment-list .list-item .info .btn-hide-re {
  visibility: hidden;
}

.bb-comment .comment-list .list-item .info .plad a,
.comment-bilibili-fold .comment-list .list-item .info .plad a {
  color: #99a2aa;
}

.bb-comment .comment-list .list-item .info .plad a:hover,
.comment-bilibili-fold .comment-list .list-item .info .plad a:hover {
  color: #00a1d6;
}

.bb-comment .comment-list .list-item .info .like,
.comment-bilibili-fold .comment-list .list-item .info .like {
  cursor: pointer;
}

.bb-comment .comment-list .list-item .info .like i,
.comment-bilibili-fold .comment-list .list-item .info .like i {
  display: inline-block;
  width: 14px;
  height: 14px;
  vertical-align: text-top;
  margin-right: 5px;
  background: url(data:image/png;base64,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) no-repeat;
  background-position: -153px -25px;
}

.bb-comment .comment-list .list-item .info .like:hover i,
.comment-bilibili-fold .comment-list .list-item .info .like:hover i {
  background-position: -218px -25px;
}

.bb-comment .comment-list .list-item .info .like.liked i,
.comment-bilibili-fold .comment-list .list-item .info .like.liked i {
  background-position: -154px -89px;
}

.bb-comment .comment-list .list-item .info .like.liked:hover i,
.comment-bilibili-fold .comment-list .list-item .info .like.liked:hover i {
  background-position: -154px -89px;
}

.bb-comment .comment-list .list-item .info .hate,
.comment-bilibili-fold .comment-list .list-item .info .hate {
  cursor: pointer;
  margin-right: 15px;
}

.bb-comment .comment-list .list-item .info .hate i,
.comment-bilibili-fold .comment-list .list-item .info .hate i {
  display: inline-block;
  width: 14px;
  height: 14px;
  vertical-align: text-top;
  margin-right: 5px;
  background: url(data:image/png;base64,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) no-repeat;
  background-position: -153px -153px;
}

.bb-comment .comment-list .list-item .info .hate:hover i,
.comment-bilibili-fold .comment-list .list-item .info .hate:hover i {
  background-position: -217px -153px;
}

.bb-comment .comment-list .list-item .info .hate.hated i,
.comment-bilibili-fold .comment-list .list-item .info .hate.hated i {
  background-position: -154px -217px;
}

.bb-comment .comment-list .list-item .info .hate.hated:hover i,
.comment-bilibili-fold .comment-list .list-item .info .hate.hated:hover i {
  background-position: -154px -217px;
}

.bb-comment .comment-list .list-item .info .reply-tags,
.comment-bilibili-fold .comment-list .list-item .info .reply-tags {
  margin-top: 6px;
  font-size: 0;
}

.bb-comment .comment-list .list-item .info .reply-tags span,
.comment-bilibili-fold .comment-list .list-item .info .reply-tags span {
  display: inline-block;
  margin-right: 12px;
  padding: 0 6px;
  height: 24px;
  line-height: 24px;
  background: #F4F5F7;
  border-radius: 2px;
  font-size: 12px;
  color: #6d757a;
}

.bb-comment .comment-list .list-item .blacklist-font-color,
.comment-bilibili-fold .comment-list .list-item .blacklist-font-color {
  color: #6d757a;
  margin-right: 10px;
}

.bb-comment .comment-list .list-item .reply-box .reply-item,
.comment-bilibili-fold .comment-list .list-item .reply-box .reply-item {
  padding: 10px 0;
}

.bb-comment .comment-list .list-item .reply-box .reply-item .hidden-reply-toggle,
.comment-bilibili-fold .comment-list .list-item .reply-box .reply-item .hidden-reply-toggle {
  color: #6d757a;
}

.bb-comment .comment-list .list-item .reply-box .reply-item .quote,
.comment-bilibili-fold .comment-list .list-item .reply-box .reply-item .quote {
  font-weight: normal;
}

.bb-comment .comment-list .list-item .reply-box .reply-item .reply-face,
.comment-bilibili-fold .comment-list .list-item .reply-box .reply-item .reply-face {
  display: inline-block;
  position: relative;
  margin-right: 10px;
  vertical-align: top;
}

.bb-comment .comment-list .list-item .reply-box .reply-item .reply-face img,
.comment-bilibili-fold .comment-list .list-item .reply-box .reply-item .reply-face img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.bb-comment .comment-list .list-item .reply-box .reply-item .info,
.comment-bilibili-fold .comment-list .list-item .reply-box .reply-item .info {
  margin-left: 34px;
}

.bb-comment .comment-list .list-item .reply-box .reply-item .reply-con,
.comment-bilibili-fold .comment-list .list-item .reply-box .reply-item .reply-con {
  display: inline-block;
  width: calc(100% - 34px);
}

.bb-comment .comment-list .list-item .reply-box .reply-item .reply-con .user .name,
.comment-bilibili-fold .comment-list .list-item .reply-box .reply-item .reply-con .user .name {
  position: relative;
  top: -1px;
}

.bb-comment .comment-list .list-item .reply-box .reply-item .reply-con .user > a,
.comment-bilibili-fold .comment-list .list-item .reply-box .reply-item .reply-con .user > a {
  position: relative;
  top: -2px;
}

.bb-comment .comment-list .list-item .reply-box .reply-item:hover .btn-hide-re,
.comment-bilibili-fold .comment-list .list-item .reply-box .reply-item:hover .btn-hide-re {
  visibility: visible;
}

.bb-comment .comment-list .list-item .reply-box .reply-item .level,
.comment-bilibili-fold .comment-list .list-item .reply-box .reply-item .level {
  margin: 0 15px 0 8px;
}

.bb-comment .comment-list .list-item .reply-box .view-more,
.comment-bilibili-fold .comment-list .list-item .reply-box .view-more {
  font-size: 12px;
  color: #6d757a;
}

.bb-comment .comment-list .list-item .reply-box .view-more .btn-more,
.comment-bilibili-fold .comment-list .list-item .reply-box .view-more .btn-more {
  padding: 2px 3px;
  border-radius: 4px;
}

.bb-comment .comment-list .list-item .reply-box .view-more .btn-more:hover,
.comment-bilibili-fold .comment-list .list-item .reply-box .view-more .btn-more:hover {
  background: #e5e9ef;
  color: #00a1d6;
}

.bb-comment .comment-list .list-item:hover .btn-hide,
.comment-bilibili-fold .comment-list .list-item:hover .btn-hide {
  visibility: visible;
}

.bb-comment .comment-list.has-limit .list-item:last-child > .con,
.comment-bilibili-fold .comment-list.has-limit .list-item:last-child > .con {
  padding-bottom: 22px;
}

.bb-comment .loading-state,
.comment-bilibili-fold .loading-state {
  height: 64px;
  line-height: 64px;
  font-size: 12px;
  color: #99A2AA;
  text-align: center;
  margin-bottom: 80px;
}

.bb-comment .reply-fold-tip,
.comment-bilibili-fold .reply-fold-tip {
  padding-top: 20px;
  margin-left: 85px;
  border-top: 1px solid #e5e9ef;
}

.bb-comment .reply-fold-tip a,
.comment-bilibili-fold .reply-fold-tip a {
  font-size: 12px;
  color: #999;
}

.bb-comment .reply-fold-tip a:hover,
.comment-bilibili-fold .reply-fold-tip a:hover {
  color: #00a1d6;
}

.bb-comment .sub-reply-fold-tip,
.comment-bilibili-fold .sub-reply-fold-tip {
  margin-bottom: 20px;
}

.bb-comment .sub-reply-fold-tip a,
.comment-bilibili-fold .sub-reply-fold-tip a {
  font-size: 12px;
  color: #999;
}

.bb-comment .sub-reply-fold-tip a:hover,
.comment-bilibili-fold .sub-reply-fold-tip a:hover {
  color: #00a1d6;
}

.bb-comment .bottom-page,
.comment-bilibili-fold .bottom-page {
  margin: 20px 0;
}

.bb-comment .bottom-page.center,
.comment-bilibili-fold .bottom-page.center {
  text-align: center;
  font-size: 14px;
  color: #99a2aa;
}

.bb-comment .vip-red-name,
.comment-bilibili-fold .vip-red-name {
  color: #fb7299 !important;
}

.bb-comment .vip-green-name,
.comment-bilibili-fold .vip-green-name {
  color: #62c076 !important;
}

.bb-comment .stick,
.comment-bilibili-fold .stick {
  border: 1px solid #ff81aa;
  min-width: 30px;
  display: inline-block;
  height: 18px;
  line-height: 18px;
  text-align: center;
  font-size: 12px;
  color: #ff81aa;
  border-radius: 3px;
  margin-right: 5px;
  vertical-align: middle;
  font-weight: normal;
}

.bb-comment .stick:after,
.comment-bilibili-fold .stick:after {
  content: '';
}

.bb-comment .stick.true-love,
.comment-bilibili-fold .stick.true-love {
  color: #f25d8e;
  border-color: #f25d8e;
  padding: 0 2px 0 4px;
}

.bb-comment .stick.true-love .medal-level,
.comment-bilibili-fold .stick.true-love .medal-level {
  margin-left: 4px;
  display: inline-block;
  padding: 0 3px 0 5px;
  border-left: 1px solid #f25d8e;
}

.bb-comment .stick.assist,
.comment-bilibili-fold .stick.assist {
  color: #fb7299;
  border-color: #fb7299;
}

.bb-comment .hot-line,
.comment-bilibili-fold .hot-line {
  text-align: center;
  border-bottom: 1px solid #e5e9ef;
  position: relative;
  margin: 20px 0 20px 85px;
  font-size: 12px;
}

.bb-comment .hot-line span,
.comment-bilibili-fold .hot-line span {
  position: absolute;
  top: -7px;
  margin-left: -115px;
  padding: 0 20px;
  background: #fff;
}

.bb-comment .hot-line a,
.comment-bilibili-fold .hot-line a {
  padding: 5px 6px;
  border-radius: 4px;
}

.bb-comment .hot-line a:hover,
.comment-bilibili-fold .hot-line a:hover {
  background: #e5e9ef;
  color: #00a1d6;
}

.bb-comment .comment-loading,
.comment-bilibili-fold .comment-loading {
  text-align: center;
  height: 20px;
  color: #99a2aa;
  padding-bottom: 40px;
  font-size: 12px;
}

.bb-comment .reply-notice,
.comment-bilibili-fold .reply-notice {
  margin-bottom: 10px;
}

.bb-comment .reply-notice .notice-item,
.comment-bilibili-fold .reply-notice .notice-item {
  background-color: #FFF1D3;
  border: 1px solid #F8DFAA;
  color: #E78B1F;
  padding: 10px 30px 10px 40px;
  line-height: 20px;
  font-size: 14px;
  border-radius: 4px;
  position: relative;
}

.bb-comment .reply-notice .notice-item a,
.comment-bilibili-fold .reply-notice .notice-item a {
  color: #E78B1F;
  vertical-align: top;
  word-wrap: break-word;
  word-break: break-all;
}

.bb-comment .reply-notice .notice-item .icon-notice,
.comment-bilibili-fold .reply-notice .notice-item .icon-notice {
  background: url(data:image/png;base64,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);
  background-position: -280px -24px;
  display: inline-block;
  width: 17px;
  height: 17px;
  position: absolute;
  top: 11px;
  left: 10px;
}

.bb-comment .reply-notice .notice-item .icon-close-notice,
.comment-bilibili-fold .reply-notice .notice-item .icon-close-notice {
  position: absolute;
  right: 10px;
  top: 10px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(data:image/png;base64,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);
  background-position: -278px -86px;
  cursor: pointer;
}

.bb-comment .no-more-reply,
.comment-bilibili-fold .no-more-reply {
  color: #99a2aa;
  text-align: center;
  padding: 30px 0;
  font-size: 12px;
}

.bb-comment .nameplate,
.comment-bilibili-fold .nameplate {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 5px;
  z-index: 1;
}

.bb-comment .nameplate .nameplate-icon,
.comment-bilibili-fold .nameplate .nameplate-icon {
  display: inline-block;
  width: 40px;
}

.bb-comment .nameplate .nameplate-icon img,
.comment-bilibili-fold .nameplate .nameplate-icon img {
  width: 32px;
}

.bb-comment .nameplate:hover .nameplate-card,
.comment-bilibili-fold .nameplate:hover .nameplate-card {
  display: block;
}

.bb-comment .nameplate .nameplate-card,
.comment-bilibili-fold .nameplate .nameplate-card {
  display: none;
  position: absolute;
  left: 42px;
  top: 1px;
  width: 322px;
  padding: 22px 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
  border: 1px solid #e5e9ef;
  border-radius: 4px;
}

.bb-comment .nameplate .nameplate-card .nameplate-pic,
.comment-bilibili-fold .nameplate .nameplate-card .nameplate-pic {
  width: 62px;
  height: 62px;
  overflow: hidden;
  float: left;
}

.bb-comment .nameplate .nameplate-card .nameplate-text,
.comment-bilibili-fold .nameplate .nameplate-card .nameplate-text {
  float: left;
  width: 219px;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #e5e9ef;
  font-weight: normal;
}

.bb-comment .nameplate .nameplate-card .nameplate-text p,
.comment-bilibili-fold .nameplate .nameplate-card .nameplate-text p {
  margin: 3px 0;
}

.bb-comment .nameplate .nameplate-card .nameplate-text .n-name,
.comment-bilibili-fold .nameplate .nameplate-card .nameplate-text .n-name {
  font-weight: bold;
  font-size: 14px;
}

.bb-comment .nameplate .nameplate-card .nameplate-text .n-title,
.comment-bilibili-fold .nameplate .nameplate-card .nameplate-text .n-title {
  overflow: hidden;
  text-overflow: ellipsis;
}

.bb-comment .nameplate .nameplate-card .nameplate-text .n-type,
.comment-bilibili-fold .nameplate .nameplate-card .nameplate-text .n-type {
  color: #99a2aa;
}

.bb-comment .nameplate .nameplate-card .nameplate-text .n-type a,
.comment-bilibili-fold .nameplate .nameplate-card .nameplate-text .n-type a {
  float: right;
  color: #00a1d6;
}

.bb-comment .nameplate .nameplate-card .nameplate-text .n-type a:hover,
.comment-bilibili-fold .nameplate .nameplate-card .nameplate-text .n-type a:hover {
  color: #00a1d6;
}

.bb-comment .nameplate .nameplate-card .nameplate-arrow,
.comment-bilibili-fold .nameplate .nameplate-card .nameplate-arrow {
  position: absolute;
  width: 7px;
  height: 13px;
  left: -7px;
  top: 10px;
  background: url('//static.hdslb.com/images/v2images/info_arrows.png');
}

.bb-comment .sailing,
.comment-bilibili-fold .sailing {
  position: absolute;
  right: -1px;
  top: 50%;
  margin-top: -25px;
  user-select: none;
}

.bb-comment .sailing .sailing-img,
.comment-bilibili-fold .sailing .sailing-img {
  height: 48px;
}

.bb-comment .sailing .sailing-info,
.comment-bilibili-fold .sailing .sailing-info {
  font-family: fanscard;
  display: inline-block;
  position: absolute;
  left: 238px;
  top: 12px;
  line-height: 16px;
  font-size: 12px;
  transform: scale(0.7);
  transform-origin: left top;
  word-break: keep-all;
}

.bb-comment .legalize,
.comment-bilibili-fold .legalize {
  height: 20px;
  width: 20px;
  display: inline-block;
  position: absolute;
  top: 30px;
  left: 30px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0YxRkI0OUY5NzQ0MTFFNjk3MzZEMTU2NTgxQUVGMzMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0YxRkI0OUU5NzQ0MTFFNjk3MzZEMTU2NTgxQUVGMzMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJEQTkzMUVGNkRCMTExRTY5NjA3QjE4RUU4RjRBMDk1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJEQTkzMUYwNkRCMTExRTY5NjA3QjE4RUU4RjRBMDk1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+T+6qbAAAE0dJREFUeNrsXXl0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);
  background-repeat: no-repeat;
}

.bb-comment .p-auth,
.comment-bilibili-fold .p-auth {
  background-position: -38px -53px;
}

.bb-comment .o-auth,
.comment-bilibili-fold .o-auth {
  background-position: -4px -53px;
}

.bb-comment .comment-captcha,
.comment-bilibili-fold .comment-captcha {
  line-height: 50px;
  font-size: 12px;
}

.bb-comment .comment-captcha input,
.comment-bilibili-fold .comment-captcha input {
  border-radius: 4px;
  border: 1px solid #ccd0d7;
  background-color: #fff;
  color: #45484b;
  height: 22px;
  line-height: 22px;
  margin: 0 5px;
  padding: 0 2px;
  vertical-align: middle;
}

.bb-comment-h5 .no-login .baffle-wrap,
.comment-bilibili-fold-h5 .no-login .baffle-wrap {
  height: 64px;
  position: absolute;
  width: 100%;
  background: #e5e9ef;
}

.bb-comment-h5 .no-login .baffle-wrap .baffle,
.comment-bilibili-fold-h5 .no-login .baffle-wrap .baffle {
  top: 50%;
  line-height: 20px;
  transform: translatey(-50%);
}

.bb-comment-h5 .comment-send .user-face,
.comment-bilibili-fold-h5 .comment-send .user-face {
  display: none;
}

.bb-comment-h5 .comment-send .textarea-container,
.comment-bilibili-fold-h5 .comment-send .textarea-container {
  margin-left: 0;
}

.bb-comment-h5 .comment-send .comment-emoji,
.comment-bilibili-fold-h5 .comment-send .comment-emoji {
  display: none;
}

.bb-comment-h5 .comment-list .list-item,
.comment-bilibili-fold-h5 .comment-list .list-item {
  border-top: 1px solid #e5e9ef;
}

.bb-comment-h5 .comment-list .list-item .user-face,
.comment-bilibili-fold-h5 .comment-list .list-item .user-face {
  margin-top: 15px;
}

.bb-comment-h5 .comment-list .list-item .user-face .legalize,
.comment-bilibili-fold-h5 .comment-list .list-item .user-face .legalize {
  top: 20px;
  left: 20px;
}

.bb-comment-h5 .comment-list .list-item .user-face img,
.comment-bilibili-fold-h5 .comment-list .list-item .user-face img {
  width: 48px;
  height: 48px;
}

.bb-comment-h5 .comment-list .list-item .user-face .bili-avatar-pendent,
.comment-bilibili-fold-h5 .comment-list .list-item .user-face .bili-avatar-pendent {
  display: none;
}

.bb-comment-h5 .comment-list .list-item .user-face .pendant,
.comment-bilibili-fold-h5 .comment-list .list-item .user-face .pendant {
  width: 54px;
  height: 54px;
  top: -13px;
  left: -13px;
}

.bb-comment-h5 .comment-list .list-item .user-face .pendant img,
.comment-bilibili-fold-h5 .comment-list .list-item .user-face .pendant img {
  width: 54px;
  height: 54px;
}

.bb-comment-h5 .comment-list .list-item .user-face .legalize,
.comment-bilibili-fold-h5 .comment-list .list-item .user-face .legalize {
  top: 17px;
  left: 17px;
  transform: scale(0.8);
}

.bb-comment-h5 .comment-list .list-item .user-face .hot-follow,
.comment-bilibili-fold-h5 .comment-list .list-item .user-face .hot-follow {
  margin-left: -10px;
  font-size: 12px;
}

.bb-comment-h5 .comment-list .list-item .user-face .hot-follow .follow-btn,
.comment-bilibili-fold-h5 .comment-list .list-item .user-face .hot-follow .follow-btn {
  padding: 0;
}

.bb-comment-h5 .comment-list .list-item .nameplate .nameplate-icon img,
.comment-bilibili-fold-h5 .comment-list .list-item .nameplate .nameplate-icon img {
  width: 24px;
  height: 24px;
}

.bb-comment-h5 .comment-list .list-item .con,
.comment-bilibili-fold-h5 .comment-list .list-item .con {
  padding-top: 15px;
  padding-bottom: 14px;
  margin-left: 55px;
  border-top: none;
}

.bb-comment-h5 .comment-list .list-item .con .user a,
.comment-bilibili-fold-h5 .comment-list .list-item .con .user a {
  font-size: 13px;
}

.bb-comment-h5 .comment-list .list-item .con .vote-container,
.comment-bilibili-fold-h5 .comment-list .list-item .con .vote-container {
  width: 100%;
}

.bb-comment-h5 .comment-list .list-item .con .vote-container .text-area,
.comment-bilibili-fold-h5 .comment-list .list-item .con .vote-container .text-area {
  width: auto;
}

.bb-comment-h5 .comment-list .list-item .con .vote-container .text-area .vote-btn-box .vote-btn,
.comment-bilibili-fold-h5 .comment-list .list-item .con .vote-container .text-area .vote-btn-box .vote-btn {
  background-color: #fb7299;
}

.bb-comment-h5 .comment-list .list-item .con .info .reply,
.comment-bilibili-fold-h5 .comment-list .list-item .con .info .reply {
  margin-right: 0;
}

.bb-comment-h5 .comment-list .list-item .con .reply-con .right,
.comment-bilibili-fold-h5 .comment-list .list-item .con .reply-con .right {
  float: right;
}

.bb-comment-h5 .comment-list .list-item .con .reply-con .right span,
.comment-bilibili-fold-h5 .comment-list .list-item .con .reply-con .right span {
  font-weight: normal;
  color: #99a2aa;
  font-size: 12px;
}

.bb-comment-h5 .comment-list .list-item .con .reply-con .text-con,
.comment-bilibili-fold-h5 .comment-list .list-item .con .reply-con .text-con {
  display: block;
}

.bb-comment-h5 .comment-list .list-item .reply-item,
.comment-bilibili-fold-h5 .comment-list .list-item .reply-item {
  border-top: 1px solid #e5e9ef;
}

.bb-comment-h5 .comment-list .list-item .reply-box .reply-item .reply-con,
.comment-bilibili-fold-h5 .comment-list .list-item .reply-box .reply-item .reply-con {
  margin-left: 0;
  width: 100%;
}

.bb-comment-h5 .comment-list .list-item .reply-box .reply-item:first-child,
.comment-bilibili-fold-h5 .comment-list .list-item .reply-box .reply-item:first-child {
  margin-top: 14px;
}

.bb-comment-h5 .comment-list .list-item .reply-box .reply-item:last-child,
.comment-bilibili-fold-h5 .comment-list .list-item .reply-box .reply-item:last-child {
  padding-bottom: 0;
}

.bb-comment-h5 .comment-list .list-item .reply-box .reply-item .info,
.comment-bilibili-fold-h5 .comment-list .list-item .reply-box .reply-item .info {
  margin-left: 0;
}

.bb-comment-h5 .comment-list .list-item .reply-box .reply-item .info .reply,
.comment-bilibili-fold-h5 .comment-list .list-item .reply-box .reply-item .info .reply {
  margin-right: 0;
}

.bb-comment-h5 .comment-list .list-item .reply-box .reply-item .info .btn-hide,
.comment-bilibili-fold-h5 .comment-list .list-item .reply-box .reply-item .info .btn-hide {
  display: none;
}

.bb-comment-h5 .comment-list .list-item .reply-box .info .btn-hide-re,
.comment-bilibili-fold-h5 .comment-list .list-item .reply-box .info .btn-hide-re {
  visibility: visible;
}

.bb-comment-h5 .comment-list .list-item .right,
.comment-bilibili-fold-h5 .comment-list .list-item .right {
  float: right;
}

.bb-comment-h5 .comment-list .list-item .right span,
.comment-bilibili-fold-h5 .comment-list .list-item .right span {
  font-weight: normal;
  color: #99a2aa;
  font-size: 12px;
}

.bb-comment-h5 .comment-list .list-item .right span.time,
.comment-bilibili-fold-h5 .comment-list .list-item .right span.time {
  margin-left: 8px;
}

.bb-comment-h5 .bottom-page,
.comment-bilibili-fold-h5 .bottom-page {
  margin: 20px 0;
  text-align: right;
}

.comment-msg {
  position: fixed;
  top: 200px;
  height: 1px;
  z-index: 9999;
  text-align: center;
  width: 100%;
}

.comment-msg span {
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  padding: 10px 20px;
}

.comment-bilibili-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10000;
}

.comment-bilibili-con {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -245px;
  margin-top: -300px;
  background: #fff;
  width: 490px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .comment-bilibili-con {
    width: 90%;
    margin-left: 0;
    position: fixed;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0;
  }
}

.comment-bilibili-con .vote-iframe iframe {
  width: 100%;
  height: 500px;
}

.comment-bilibili-con .t {
  text-align: center;
  font-size: 18px;
  color: #222;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.comment-bilibili-con .t.no-title {
  padding: 0;
  border-bottom: none;
}

.comment-bilibili-con .t .btn-close {
  position: absolute;
  width: 12px;
  height: 12px;
  right: 20px;
  top: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
}

.comment-bilibili-con .t .btn-close:before {
  content: '';
  position: absolute;
  height: 1px;
  width: 100%;
  top: 50%;
  left: 0;
  margin-top: -1px;
  background: #aaa;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
}

.comment-bilibili-con .t .btn-close:after {
  content: '';
  position: absolute;
  height: 1px;
  width: 100%;
  top: 50%;
  left: 0;
  margin-top: -1px;
  background: #aaa;
  transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
}

.comment-bilibili-con .t .btn-close:hover:before,
.comment-bilibili-con .t .btn-close:hover:after {
  background: #666;
}

.comment-bilibili-con .con {
  padding: 20px;
}

.comment-bilibili-con .con input[type='radio'] {
  display: none;
  position: absolute;
}

.comment-bilibili-con .con input[type='radio']:checked + label:after {
  opacity: 1;
}

.comment-bilibili-con .con input[type='radio']:checked + label:before {
  border-color: #00a1d6;
}

.comment-bilibili-con .con .text {
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  padding: 20px 0;
}

.comment-bilibili-con .con label {
  position: relative;
  display: block;
  padding-left: 22px;
  cursor: pointer;
  vertical-align: middle;
}

.comment-bilibili-con .con label:before {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 14px;
  height: 14px;
  content: '';
  border-radius: 50%;
  border: 1px solid #bec3cc;
  transition: all 0.3s;
}

.comment-bilibili-con .con label:after {
  position: absolute;
  opacity: 0;
  content: '';
  top: 4px;
  left: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00a1d6;
  transition: all 0.3s;
}

.comment-bilibili-con .reason-box {
  font-size: 12px;
}

.comment-bilibili-con .reason-box dl {
  margin-bottom: 15px;
}

.comment-bilibili-con .reason-box dl dt {
  color: #99a2aa;
  margin-bottom: 15px;
}

.comment-bilibili-con .reason-box dl dd {
  color: #222;
  display: inline-block;
  width: 100px;
  margin: 0 10px 16px 0;
  white-space: nowrap;
}

.comment-bilibili-con .reason-box dl dd input {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid #bec3cc;
}

.comment-bilibili-con .other {
  font-size: 12px;
}

.comment-bilibili-con .other p {
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  margin-bottom: 8px;
}

.comment-bilibili-con .other .ta {
  display: none;
}

.comment-bilibili-con .other .ta textarea {
  width: 96%;
  border-width: 1px;
  border-style: solid;
  border-color: #ccd0d7;
  border-radius: 4px;
  resize: none;
  outline: none;
  transition: all 0.3s;
  padding: 8px;
  height: 52px;
}

.comment-bilibili-con .other .ta textarea:hover {
  border-color: #99a2aa;
}

.comment-bilibili-con .other .ta textarea:focus {
  border-color: #00a1d6;
}

.comment-bilibili-con .btn {
  text-align: center;
}

.comment-bilibili-con .btn .btn-submit {
  text-decoration: none;
  display: inline-block;
  width: 120px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 14px;
  background: #00a1d6;
  border: 1px solid #00a1d6;
  border-radius: 4px;
  margin: 30px 0 10px 0;
  cursor: pointer;
  transition: all 0.3s;
}

.comment-bilibili-con .btn .btn-submit:hover {
  background: #00b5e5;
  border-color: #00b5e5;
}

.comment-bilibili-con .btn .btn-cancel {
  display: inline-block;
  width: 120px;
  height: 40px;
  line-height: 40px;
  color: #222;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ccd0d7;
  border-radius: 4px;
  margin: 30px 0 10px 0;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 20px;
}

.comment-bilibili-con .btn .btn-cancel:hover {
  background: #eee;
}

.comment-bilibili-con.comment-vote-bilibili {
  width: 600px;
  margin-left: -300px;
}

.comment-bilibili-con.comment-rename-bilibili {
  margin-top: -150px;
  width: 380px;
  margin-left: -190px;
}

.comment-bilibili-con.comment-rename-bilibili .con {
  width: 280px;
  margin: 20px auto;
}

.comment-bilibili-con.comment-rename-bilibili .text {
  padding: 10px 0 30px 0;
  font-size: 16px;
  text-align: left;
}

.comment-bilibili-con.comment-rename-bilibili .rename-input {
  width: 100%;
  height: 40px;
  border: 1px solid #CCD0D7;
  border-radius: 4px;
  padding: 0 10px;
  box-sizing: border-box;
}

.comment-bilibili-con.comment-rename-bilibili .rename-input.err {
  border-color: #E40C0C;
}

.comment-bilibili-con.comment-rename-bilibili .rename-input:focus {
  border-color: #00a1d6;
}

.comment-bilibili-con.comment-rename-bilibili .err-info {
  margin-top: 4px;
  font-size: 12px;
  color: #E40C0C;
}

.comment-bilibili-con.comment-rename-bilibili .err-info svg {
  width: 15px;
  height: 15px;
  margin-right: 5px;
  vertical-align: middle;
  display: none;
}

.comment-bilibili-con.comment-rename-bilibili .btn-submit {
  margin-top: 23px;
}

.comment-bilibili-con.comment-rename-bilibili .btn-cancel {
  margin-top: 23px;
  margin-right: 32px;
}

.comment-bilibili-con.comment-fold-bilibili,
.comment-bilibili-con.comment-sub-fold-bilibili {
  width: 594px;
  margin-left: -297px;
}

.comment-bilibili-con.comment-fold-bilibili .comment-emoji,
.comment-bilibili-con.comment-sub-fold-bilibili .comment-emoji {
  display: none;
}

.comment-bilibili-con.comment-fold-bilibili .t,
.comment-bilibili-con.comment-sub-fold-bilibili .t {
  padding: 12px 0;
}

.comment-bilibili-con.comment-fold-bilibili .comment-area,
.comment-bilibili-con.comment-sub-fold-bilibili .comment-area {
  height: 509px;
  overflow: auto;
}

.comment-bilibili-con.comment-fold-bilibili .comment-area .comment-list,
.comment-bilibili-con.comment-sub-fold-bilibili .comment-area .comment-list {
  padding-top: 0;
}

.comment-bilibili-con.comment-fold-bilibili .comment-area .sub-fold-tip,
.comment-bilibili-con.comment-sub-fold-bilibili .comment-area .sub-fold-tip {
  font-size: 14px;
  color: #212121;
  margin: 12px 20px 2px;
}

.comment-bilibili-con.comment-fold-bilibili .comment-area .sub-fold-item:first-child > .con,
.comment-bilibili-con.comment-sub-fold-bilibili .comment-area .sub-fold-item:first-child > .con {
  border-top: none;
}

.comment-bilibili-con.comment-fold-bilibili .comment-area .list-item,
.comment-bilibili-con.comment-sub-fold-bilibili .comment-area .list-item {
  padding: 0 16px 0 35px;
}

.comment-bilibili-con.comment-fold-bilibili .comment-area .list-item:first-child > .con,
.comment-bilibili-con.comment-sub-fold-bilibili .comment-area .list-item:first-child > .con,
.comment-bilibili-con.comment-fold-bilibili .comment-area .list-item.no-border > .con,
.comment-bilibili-con.comment-sub-fold-bilibili .comment-area .list-item.no-border > .con {
  border-top: none;
}

.comment-bilibili-con.comment-fold-bilibili .comment-area .list-item > .con .text,
.comment-bilibili-con.comment-sub-fold-bilibili .comment-area .list-item > .con .text {
  text-align: left;
}

.comment-bilibili-con.comment-fold-bilibili .comment-area .list-item.top-fold-reply,
.comment-bilibili-con.comment-sub-fold-bilibili .comment-area .list-item.top-fold-reply {
  border-bottom: 10px solid #f4f4f4;
}

.comment-bilibili-con.comment-fold-bilibili .comment-area .list-item .nameplate:hover .nameplate-card,
.comment-bilibili-con.comment-sub-fold-bilibili .comment-area .list-item .nameplate:hover .nameplate-card {
  display: none;
}
</style>