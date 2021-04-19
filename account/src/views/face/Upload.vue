<template>
  <div class="container">
    <div class="upload-box">
      <div class="cropper-modal">
        <div class="overlay"></div>
        <div class="modal">
          <div class="modal-head">
            <div class="head-wrap">
              <a href="/face/mall">我的头像</a> &gt; 更换头像
            </div>
          </div>
          <div class="modal-content clearfix">
            <div class="img-clip-wrap">
              <div class="container-bg">
                <div class="img-container">
                  <img id="clip_src_img">
                  <div class="shadow-box"></div>
                  <div class="crop-wrap">
                    <div class="shadow-box" style="width: 0px; height: 0px; left: 0px; top: 0px;">
                      <img class="shadow-img" style="width: 0px; height: 0px; top: 0px; left: 0px;">
                    </div>
                    <div class="crop-box" style="width: 0px; height: 0px; left: 0px; top: 0px;">
                      <span class="drag-point point-lt"></span>
                      <span class="drag-point point-lb"></span>
                      <span class="drag-point point-rt"></span>
                      <span class="drag-point point-rb"></span>
                    </div>
                  </div>
                </div>
              </div>
              <label for="file_input" class="first-change-lb">
                <i></i>
                <span>选择图片</span>
              </label>
              <div class="reset-img" style="display: none;">
                <label for="file_input">
                  <i></i>&nbsp;重新选择
                </label>
              </div>
              <input type="file" id="file_input" accept="image/png,image/jpg,image/jpeg">
            </div>
            <div class="border-line"></div>
            <div class="img-preview-wrap">
              <div class="pre-container" :style="{backgroundImage:'url(${store.state.face})'}">
                <img id="clip_res_img" style="display: none;"></div>
              <div class="pre-info">当前头像</div>
            </div>
          </div>
          <p class="descript">请选择图片上传：大小180 * 180像素支持JPG、PNG等格式，图片需小于2M</p>
          <div class="modal-footer"><input type="button" value="更新" class="modal-btn btn-confirm disabled"></div>
        </div> <!---->
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "upload",
}
</script>

<style type="text/css">.container {
  float: left;
  width: 829px;
  border-left: 1px solid #ddd;
  min-height: 850px;
  background: #fff
}

.container .upload-box {
  position: relative
}

.container .go-back {
  font-size: 12px;
  padding: 20px
}

.container .go-back a {
  color: #00a1d6
}</style>
<style type="text/css">.cropper-modal .modal {
  width: 830px;
  text-align: center
}

.modal-head {
  position: relative;
  text-align: center;
  padding: 0 20px;
  border-bottom: 1px solid #e5e9ef
}

.modal-head a {
  color: #6d757a
}

.modal-head a:hover {
  color: #00a1d6
}

.head-wrap {
  position: relative;
  font-size: 14px;
  color: #222;
  height: 50px;
  line-height: 50px;
  text-align: left
}

.modal-content {
  padding: 80px 20px 56px;
  display: inline-block
}

.img-clip-wrap {
  float: left;
  position: relative;
  margin-right: 40px
}

.border-line {
  height: 182px;
  width: 1px;
  background: #e5e9ef;
  float: left
}

.container-bg {
  width: 180px;
  height: 180px;
  background-color: #000;
  border-radius: 4px;
  border: 1px solid #e5e9ef
}

.img-container {
  position: relative;
  height: 0;
  margin: auto
}

.img-container img {
  position: relative;
  width: 100%;
  height: 100%
}

.img-container .shadow-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 1
}

.reset-img {
  position: absolute;
  bottom: -28px;
  left: 50%;
  -webkit-transform: translate(-50%);
  transform: translate(-50%)
}

.reset-img label {
  font-size: 12px;
  color: #6d757a;
  cursor: pointer
}

.reset-img label i {
  display: inline-block;
  width: 18px;
  height: 18px;
  vertical-align: bottom;
  background-image: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png);
  background-position: -23px -1303px;
  cursor: pointer
}

.reset-img label:hover {
  color: #00b5e5
}

.reset-img label:hover i {
  background-position: -87px -1303px
}

#file_input {
  display: none
}

.first-change-lb {
  cursor: pointer;
  background: #f1f2f5;
  width: 180px;
  height: 180px;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  -webkit-transition: all .6s ease;
  transition: all .6s ease
}

.first-change-lb:hover {
  background: #e5e9ef
}

.first-change-lb span {
  display: block;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #6d757a;
  line-height: 20px;
  margin-top: 10px;
  padding: 0 12px;
  letter-spacing: 0
}

.first-change-lb i {
  margin: 52px auto 0;
  width: 54px;
  height: 46px;
  display: block;
  background: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png);
  background-position: -101px -1065px
}

.img-preview-wrap {
  margin-left: 40px;
  margin-top: 30px;
  float: left
}

.pre-container {
  width: 96px;
  height: 96px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #e6eaf0;
  background-size: cover
}

.pre-container img {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 4px
}

.pre-info {
  margin-top: 20px;
  font-size: 12px;
  color: #99a2aa
}

.clearfix:after, .clearfix:before {
  content: " ";
  display: table
}

.clearfix:after {
  clear: both
}

.modal-footer {
  text-align: center;
  margin-top: 40px
}

.modal-btn {
  display: inline-block;
  width: 140px;
  height: 40px;
  font-size: 14px;
  line-height: 32px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none
}

.descript {
  line-height: 16px;
  color: #99a2aa
}

.btn-confirm {
  border: 1px solid #00a1d6;
  color: #fff;
  background-color: #00a1d6
}

.btn-confirm:hover {
  background-color: #00b5e5;
  border-color: #00b5e5
}

.btn-confirm.disabled {
  background: #f4f5f7;
  border-color: #f4f5f7;
  color: #ccd0d7;
  cursor: auto
}</style>
<style type="text/css">.crop-wrap{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  cursor: crosshair
}

.crop-box{
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  cursor: move;
  border: 1px solid #fff;
  z-index: 2;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

.crop-box.show{
  display: block
}

.drag-point{
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 1px solid #fff;
  position: absolute;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

.point-lt{
  top: -10px;
  left: -10px;
  cursor: nw-resize
}

.point-lb{
  left: -10px;
  bottom: -10px;
  cursor: sw-resize
}

.point-rt{
  right: -10px;
  top: -10px;
  cursor: ne-resize
}

.point-rb{
  right: -10px;
  bottom: -10px;
  cursor: se-resize
}

.shadow-box{
  overflow: hidden;
  z-index: 1
}

.shadow-box, .shadow-img{
  position: absolute;
  top: 0;
  left: 0
}

.shadow-box::-moz-selection, .shadow-img::-moz-selection {
  background-color: transparent
}

.shadow-box::selection, .shadow-img::selection {
  background-color: transparent
}</style>
<style type="text/css">/*!
 * @bilibili/userAvatar
 * version: 1.0.3. Powered by main-frontend
 * 用户头像公共组件.
 * author: wuxiuran
 */
.bili-avatar {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(data:image/gif;base64,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);
  background-size: cover;
  border-radius: 50%;
  margin: 0;
  padding: 0;
}
.bili-avatar * {
  margin: 0;
  padding: 0;
}
.bili-avatar-face {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}
.bili-avatar-pendent {
  height: 170%;
  width: 170%;
  position: absolute;
  top: -35%;
  left: -35%;
  overflow: hidden;
}
.bili-avatar-pendent img {
  height: 100%;
  min-width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.bili-avatar-img {
  border: none;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
}
.bili-avatar-img-radius {
  border-radius: 50%;
}
.bili-avatar-img[src=""],
.bili-avatar-img:not([src]) {
  opacity: 0;
}
.bili-avatar-icon {
  width: 33.33333%;
  height: 33.33333%;
  width: -webkit-calc(33.33333333%);
  width: -moz-calc(33.33333333%);
  width: calc(100% * 1 / 3);
  height: -webkit-calc(33.33333333%);
  height: -moz-calc(33.33333333%);
  height: calc(100% * 1 / 3);
  position: absolute;
  right: 0;
  bottom: 0;
  background-size: cover;
  image-rendering: -webkit-optimize-contrast;
}
.bili-avatar-icon--big-vip {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk0Mjk2ODk1Nzc2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ2MTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS4wNzA3OCAwLjA0NjQ2MWE1MTEuMDcwNzggNTExLjA3MDc4IDAgMCAxIDUxMS4wNzA3ODEgNTExLjA3MDc4YzAgMjgyLjI1MDQ1NC0yMjguODIwMzI3IDUxMS4wNzA3OC01MTEuMDcwNzgxIDUxMS4wNzA3ODFzLTUxMS4wNzA3OC0yMjguODIwMzI3LTUxMS4wNzA3OC01MTEuMDcwNzgxIDIyOC44MjAzMjctNTExLjA3MDc4IDUxMS4wNzA3OC01MTEuMDcwNzh6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSI0NjEzIj48L3BhdGg+PHBhdGggZD0iTTUxMS4wNzA3OCA5Mi45Njg0MjFhNDE4LjE0ODgyIDQxOC4xNDg4MiAwIDEgMSAwIDgzNi4yOTc2NDEgNDE4LjE0ODgyIDQxOC4xNDg4MiAwIDAgMSAwLTgzNi4yOTc2NDF6IiBmaWxsPSIjRkI3Mjk5IiBwLWlkPSI0NjE0Ij48L3BhdGg+PHBhdGggZD0iTTQzNi43MzMyMTIgMjQwLjIwMzI2N2M0MC4yODE2NyAwLjkyOTIyIDc3LjM1NzUzMiAyMi40ODcxMTQgOTguNDUwODE3IDU3LjE5MzQ2NiAyMC4zNDk5MDkgNDAuNjk5ODE5IDAgODkuMzQ0NDY1IDUuNjIxNzc5IDk1LjA1OTE2NSA1LjYyMTc3OSA1LjY2ODI0IDUwLjU0OTU0Ni0xNS44NDMxOTQgNjcuNzQwMTA5LTIxLjIzMjY2OGEyMDEuMTI5NTgzIDIwMS4xMjk1ODMgMCAwIDEgMTEwLjM0NDgyNy0xMS44OTQwMSA5Mi4wODU2NjIgOTIuMDg1NjYyIDAgMCAxIDQyLjU1ODI1OCA4OS4yMDUwODFjLTMuOTQ5MTgzIDM4LjI4Mzg0OC0zOC4wNTE1NDMgMzYuNTY0NzkxLTc4LjI0MDI5MSAyOS43MzUwMjdhNDMwLjQ2MDk4IDQzMC40NjA5OCAwIDAgMC0xNDIuNjgxNjY5IDE3LjA5NzY0MWMtMTcuNzAxNjMzIDUuNzE0NzAxLTI5LjkyMDg3MSA5LjE5OTI3NC0zOC4zNzY3NyAyNC4xMTMyNDloMC42NTA0NTRjLTguNTk1MjgxIDE0Ljg2NzUxNC04MC4yODQ1NzQgMTc5LjU3MTY4OC04OS4zNDQ0NjUgMjAyLjU2OTg3My0xNS4zMzIxMjMgMjcuODc2NTg4LTM4LjUxNjE1MiA1MC41NDk1NDYtNjYuNDg1NjYyIDY1LjIzMTIxNmExMDguMzQ3MDA1IDEwOC4zNDcwMDUgMCAwIDEtOTguNDUwODE3LTUuNzE0NzAxYy0yNy44MzAxMjctMjEuODM2NjYxLTM1LjMxMDM0NS0zOC40Njk2OTEtNS4xMTA3MDgtNDguNzg0MDI5IDMwLjE5OTYzNy0xMC4yNjc4NzcgODguNjk0MDExLTg0LjA5NDM3NCAxMDMuNTYxNTI1LTEwNi44NjAyNTQgMTQuODY3NTE0LTIyLjgxMjM0MSA2OC42NjkzMjgtOTkuMDA4MzQ4IDU2Ljc3NTMxOC0xMDcuMDkyNTU5YTI5My44NjU2OTkgMjkzLjg2NTY5OSAwIDAgMC0xMDIuOTU3NTMyIDExLjU2ODc4NGMtMTYuNDAwNzI2IDUuMDY0MjQ3LTI0LjM5MjAxNSAxMy4xNDg0NTctMzguNjU1NTM2LTUuMjUwMDkxYTE1OS43MzI4NDkgMTU5LjczMjg0OSAwIDAgMS0yMy45Mjc0MDQtNzcuMTI1MjI3YzEuODU4NDM5LTkuMTk5Mjc0IDMuNjIzOTU2LTEzLjc1MjQ1IDUuMTU3MTY4LTEzLjc1MjQ1YTk3Ni4zNzc0OTUgOTc2LjM3NzQ5NSAwIDAgMCAxODUuNTY1MTU1LTI1LjE4MTg1MWM3Ljg5ODM2Ny0yNC40Mzg0NzUgOS4zODUxMTgtNTAuNTQ5NTQ2IDQuNDEzNzkzLTc1LjczMTM5N2EzMDEuOTk2MzcgMzAxLjk5NjM3IDAgMCAwLTI5LjU5NTY0NC03Ny4yNjQ2MWMtNC41NTMxNzYtMy40ODQ1NzQgNi4yNzIyMzItMTUuODQzMTk0IDMyLjk4NzI5NS0xNS44NDMxOTR6IG0xNTUuNTUxMzYyIDM0MC4zMjY2NzlhNDEyLjU3MzUwMyA0MTIuNTczNTAzIDAgMCAxIDk1LjAxMjcwNCAyNy43MzcyMDVjMzAuMTUzMTc2IDE1LjA1MzM1OCAxMzIuNDEzNzkzIDUxLjYxODE0OSAxMTEuNzg1MTE4IDExNy44MjUwNDUtMjAuNTgyMjE0IDY2LjA2NzUxNC0yOS42NDIxMDUgNzEuNjQyODMxLTQ5LjIwMjE3OCA1NS41MjA4NzEtMTkuNTEzNjEyLTE2LjEyMTk2LTE4OC42MzE1NzktMTY2LjUxNjE1Mi0xOTMuODgxNjctMTc0Ljg3OTEyOWExNy45MzM5MzggMTcuOTMzOTM4IDAgMCAxIDEuMDY4NjAzLTIyLjMwMTI3YzcuODUxOTA2LTYuNjkwMzgxIDI1LjIyODMxMi00LjM2NzMzMiAzNS4yMTc0MjMtMy45MDI3MjJ6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSI0NjE1Ij48L3BhdGg+PC9zdmc+);
}
.bili-avatar-icon--business {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk0Mjk2OTA0NjU3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ4ODQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA1MTJtLTUxMiAwYTUxMiA1MTIgMCAxIDAgMTAyNCAwIDUxMiA1MTIgMCAxIDAtMTAyNCAwWiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNDg4NSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS00MTguOTA5MDkxIDBhNDE4LjkwOTA5MSA0MTguOTA5MDkxIDAgMSAwIDgzNy44MTgxODIgMCA0MTguOTA5MDkxIDQxOC45MDkwOTEgMCAxIDAtODM3LjgxODE4MiAwWiIgZmlsbD0iIzRBQzdGRiIgcC1pZD0iNDg4NiI+PC9wYXRoPjxwYXRoIGQ9Ik00NzQuMTEyIDc2My45NTA1NDVhMzMuMjggMzMuMjggMCAwIDEtMTQuMDU2NzI3IDQuMDQ5NDU1IDIxLjAzODU0NSAyMS4wMzg1NDUgMCAwIDEtMjEuMzE3ODE4LTIwLjgwNTgxOCAxOS41NDkwOTEgMTkuNTQ5MDkxIDAgMCAxIDEuMjEwMTgxLTUuODY0NzI3bDQwLjQ5NDU0Ni0xODcuNDM4NTQ2LTE2Ny42NTY3MjcgMC4zMjU4MThhMjEuMjI0NzI3IDIxLjIyNDcyNyAwIDAgMS0yMS44NzYzNjQtMjAuODA1ODE4IDIwLjQzMzQ1NSAyMC40MzM0NTUgMCAwIDEgOS40OTUyNzMtMTYuODQ5NDU0bDI1MC4xODE4MTgtMjU1Ljc2NzI3M2M0LjYwOC0yLjc5MjcyNyA5LjU0MTgxOC00Ljc0NzYzNiAxNC42NjE4MTgtNC43OTQxODJhMjEuMTMxNjM2IDIxLjEzMTYzNiAwIDAgMSAyMS4zNjQzNjQgMjAuODUyMzY0IDE5Ljk2OCAxOS45NjggMCAwIDEtMi43OTI3MjggOS43NzQ1NDVsLTQwLjIxNTI3MiAxODQuMzJoMTY3Ljg0MjkwOWEyMS4xNzgxODIgMjEuMTc4MTgyIDAgMCAxIDIxLjY0MzYzNiAyMC44NTIzNjQgMjAuMjkzODE4IDIwLjI5MzgxOCAwIDAgMS05LjQ5NTI3MyAxNi45NDI1NDVsLTI0OS40ODM2MzYgMjU1LjIwODcyN3oiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjQ4ODciPjwvcGF0aD48L3N2Zz4=);
}
.bili-avatar-icon--personal {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk0Mjk2OTAwOTA1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ3NDgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA1MTJtLTUxMiAwYTUxMiA1MTIgMCAxIDAgMTAyNCAwIDUxMiA1MTIgMCAxIDAtMTAyNCAwWiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNDc0OSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS00MTguOTA5MDkxIDBhNDE4LjkwOTA5MSA0MTguOTA5MDkxIDAgMSAwIDgzNy44MTgxODIgMCA0MTguOTA5MDkxIDQxOC45MDkwOTEgMCAxIDAtODM3LjgxODE4MiAwWiIgZmlsbD0iI0ZGQzYyRSIgcC1pZD0iNDc1MCI+PC9wYXRoPjxwYXRoIGQ9Ik00NzQuMTEyIDc2My45NTA1NDVhMzMuMjggMzMuMjggMCAwIDEtMTQuMDU2NzI3IDQuMDQ5NDU1IDIxLjAzODU0NSAyMS4wMzg1NDUgMCAwIDEtMjEuMzE3ODE4LTIwLjgwNTgxOCAxOS41NDkwOTEgMTkuNTQ5MDkxIDAgMCAxIDEuMjEwMTgxLTUuODY0NzI3bDQwLjQ5NDU0Ni0xODcuNDM4NTQ2LTE2Ny42NTY3MjcgMC4zMjU4MThhMjEuMjI0NzI3IDIxLjIyNDcyNyAwIDAgMS0yMS44NzYzNjQtMjAuODA1ODE4IDIwLjQzMzQ1NSAyMC40MzM0NTUgMCAwIDEgOS40OTUyNzMtMTYuODQ5NDU0bDI1MC4xODE4MTgtMjU1Ljc2NzI3M2M0LjYwOC0yLjc5MjcyNyA5LjU0MTgxOC00Ljc0NzYzNiAxNC42NjE4MTgtNC43OTQxODJhMjEuMTMxNjM2IDIxLjEzMTYzNiAwIDAgMSAyMS4zNjQzNjQgMjAuODUyMzY0IDE5Ljk2OCAxOS45NjggMCAwIDEtMi43OTI3MjggOS43NzQ1NDVsLTQwLjIxNTI3MiAxODQuMzJoMTY3Ljg0MjkwOWEyMS4xNzgxODIgMjEuMTc4MTgyIDAgMCAxIDIxLjY0MzYzNiAyMC44NTIzNjQgMjAuMjkzODE4IDIwLjI5MzgxOCAwIDAgMS05LjQ5NTI3MyAxNi45NDI1NDVsLTI0OS40ODM2MzYgMjU1LjIwODcyN3oiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjQ3NTEiPjwvcGF0aD48L3N2Zz4=);
}
.bili-avatar-icon--small-vip {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk0Mjk2ODc5NTM3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0NzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgNTEyLjQ2NTQ1NUMwIDc5NC45OTYzNjQgMjI5LjAwMzYzNiAxMDI0IDUxMS41MzQ1NDUgMTAyNGMyODIuNDg0MzY0IDAgNTExLjQ4OC0yMjkuMDAzNjM2IDUxMS40ODgtNTExLjUzNDU0NSAwLTI4Mi40ODQzNjQtMjI5LjAwMzYzNi01MTEuNDg4LTUxMS41MzQ1NDUtNTExLjQ4OFMwIDIyOS45ODEwOTEgMCA1MTIuNTEyeiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNDQ3NyI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS00MTguOTA5MDkxIDBhNDE4LjkwOTA5MSA0MTguOTA5MDkxIDAgMSAwIDgzNy44MTgxODIgMCA0MTguOTA5MDkxIDQxOC45MDkwOTEgMCAxIDAtODM3LjgxODE4MiAwWiIgZmlsbD0iIzZEQzc4MSIgcC1pZD0iNDQ3OCI+PC9wYXRoPjxwYXRoIGQ9Ik0zMzEuMjY0IDYxOC44MjE4MThhMjQuOTAxODE4IDI0LjkwMTgxOCAwIDAgMC01LjYzMi00Ljg4NzI3M2MtMC44Mzc4MTgtMC4wOTMwOTEgMS42MjkwOTEgMS45NTQ5MDkgNS41ODU0NTUgNC44ODcyNzN6IG0yNDUuMjk0NTQ1LTE4LjgwNDM2M2wyLjgzOTI3My0xMS4wNzc4MTlzLTQuMTg5MDkxLTAuMjc5MjczLTIuNzkyNzI3LTIuNzkyNzI3YzEuMzQ5ODE4LTIuNTYgMi43OTI3MjctMTMuODcwNTQ1IDIuNzkyNzI3LTEzLjg3MDU0NXYtMzMuMzI2NTQ2bC0yLjc5MjcyNy0xMS4xMjQzNjMgMi43OTI3MjctNS41ODU0NTUtMi43OTI3MjctMTEuMDc3ODE4di0zMC41MzM4MThsLTIuODM5MjczLTExLjEyNDM2NCA1LjYzMi01LjUzODkwOVYzNjYuNzc4MTgybC0yLjc5MjcyNy0xMS4wNzc4MTgtNS42Nzg1NDYtOC4zNzgxODItMTQuMTAzMjcyLTEzLjg3MDU0Ni0xNC4wNTY3MjgtMjIuMjAyMTgxLTE5Ljc4MTgxOC0yNC45OTQ5MS0xMS4yNjQtMTEuMDc3ODE4LTUuNjMyLTguMzc4MTgydi0yLjc5MjcyN2wtNS42MzItNS40OTIzNjNoLTIuNzkyNzI3bC0yLjgzOTI3My0yLjc5MjcyOC01LjY3ODU0NSA1LjU4NTQ1NS0yLjc5MjcyNy0yLjc5MjcyNy01LjYzMi0yLjc5MjcyOGgtMi43OTI3MjhsLTguNTE3ODE4IDguMzMxNjM3IDIuNzkyNzI3IDUuNTg1NDU0djE2LjYxNjcyN2wyLjg4NTgxOSA1LjU4NTQ1NXY1LjUzODkwOWwyLjc5MjcyNyAyLjc5MjcyNyAyLjc5MjcyNyAxMS4wNzc4MTkgMi44MzkyNzMgNS41ODU0NTQgMi43OTI3MjcgNS41Mzg5MDl2OC4zMzE2MzdsLTIuNzkyNzI3IDIuNzkyNzI3IDIuNzkyNzI3IDE2LjYxNjcyNy0yLjc5MjcyNyAxMS4xMjQzNjR2Mi43OTI3MjdsLTIuNzkyNzI3IDg4LjgwODcyN3YyMi4yNDg3MjhsMi43OTI3MjcgMTEuMDc3ODE4LTIuNzkyNzI3IDUuNTg1NDU0djIuNzkyNzI4cy0wLjM3MjM2NCAzLjQ0NDM2NCAwIDguMjg1MDljMC4zMjU4MTggNC44NDA3MjcgMCA4LjM3ODE4MiAwIDguMzc4MTgydjguMjg1MDkxbC0yLjc5MjcyOCA1LjU4NTQ1NXYyLjc5MjcyN2wyLjc5MjcyOCA1LjQ5MjM2NHYyLjc5MjcyN3MwLjE4NjE4MiA1My44OTk2MzYtMi43OTI3MjggNjMuODYwMzY0YTI0OC45MjUwOTEgMjQ4LjkyNTA5MSAwIDAgMS01LjY3ODU0NSAxNi42NjMyNzJ2NS41ODU0NTVsLTUuNjMyIDguMjg1MDkxdjUuNTg1NDU0bC0yLjc5MjcyNyA1LjUzODkwOS0yLjgzOTI3MyAyLjc5MjcyOHMtMS44NjE4MTggMC43NDQ3MjctMi44MzkyNzMgMGMtMS4wMjQtMC43NDQ3MjctMi43OTI3MjctMi43OTI3MjctMi43OTI3MjctMi43OTI3MjhsLTExOC41MDQ3MjctNjIuMjMxMjcyLTguMzc4MTgyLTQuNDIxODE5czEyMS43NjI5MDkgNjUuMTYzNjM2IDExOC40MTE2MzYgODAuNTIzNjM3YzAgMC05LjIxNiAxLjAyNC0xNC4xMDMyNzMtMi43OTI3MjctNC45MzM4MTgtMy43NzAxODItMTA3LjE0NzYzNi01OC4yNzQ5MDktMTA3LjE0NzYzNi01OC4yNzQ5MWw1My41MjcyNzMgMzYuMDcyNzI4aC0yLjc5MjcyOGwtNTMuNTczODE4LTI3Ljc0MTA5MSAzNi42Nzc4MTggMjcuNzQxMDkxcy0xOC41MjUwOTEtOC40NzEyNzMtMjguMjA2NTQ1LTEzLjMxMmMxMS42MzYzNjQgNy45MTI3MjcgMzYuNjMxMjczIDI3LjIyOTA5MSAzNi42MzEyNzMgMjcuMjI5MDkxaC0yLjc5MjcyOGwtNzAuNTE2MzYzLTQ3LjE5NzA5MSA0NS4xNDkwOTEgMzMuMjhzNjkuMzUyNzI3IDQ5Ljg5NjcyNyA3MC40Njk4MTggNTguMzIxNDU0bC04LjQ3MTI3MyAxMS4xMjQzNjRIMzkzLjMwOTA5MWwtMi44MzkyNzMgMi43OTI3MjctMi43OTI3MjcgMi43NDYxODIgMi43OTI3MjcgNS41ODU0NTVoLTguNDcxMjczbC01LjU4NTQ1NC0yLjc5MjcyOCAyLjc5MjcyNyA1LjUzODkwOXYyLjc5MjcyOGwtMi43OTI3MjcgMi43OTI3MjctMi44ODU4MTggMi43NDYxODIgMi44MzkyNzIgMi43OTI3MjdoOC40NzEyNzNsLTUuNjMyIDUuNTM4OTA5cy00Ljk4MDM2NCA1LjIxMzA5MSAwIDguMzMxNjM2YzQuOTMzODE4IDMuMTE4NTQ1IDMwLjk5OTI3MyAyNy43NDEwOTEgMzAuOTk5MjczIDI3Ljc0MTA5MWw1LjYzMiAyLjc5MjcyOGgzMS4wNDU4MThsMzAuOTk5MjczLTEzLjg3MDU0NmgxMS4yNjRsOC40NzEyNzMtNS41ODU0NTQgNDcuOTQxODE4LTQxLjYxMTYzNyA1LjYzMi0xMy45MTcwOTEgOC40NzEyNzItMTEuMDc3ODE4IDUuNjMyLTUuNTg1NDU0IDIuNzkyNzI4LTguMjg1MDkxIDguNTE3ODE4LTIyLjI0ODcyOCAyLjc5MjcyNy0xNi42NjMyNzIgMi43OTI3MjctNS41Mzg5MDktMi43OTI3MjctNS41ODU0NTUtMi43OTI3MjctMTkuNDA5NDU0eiBtMjg1Ljg4MjE4MiAzNS44NGMtMTEuNzc2LTQ2LjgyNDcyNy0zOS45MzYtODIuOTkwNTQ1LTg0LjQ4LTEwOC41OTA1NDZsLTM3LjE4OTgxOC0yNi44MTAxODItNTAuNzgxMDkxLTU3LjM5MDU0NS0yLjQ2NjkwOS0xLjc2ODcyN2ExNy40NTQ1NDUgMTcuNDU0NTQ1IDAgMCAwLTE2LjA1ODE4Mi00LjE4OTA5MWwxLjUzNiA5LjYzNDkwOWMxLjI1NjcyNyA0Ljk4MDM2NCA0LjMyODcyNyAxNC41Njg3MjcgOS4zMDkwOTEgMjguNzE4NTQ1IDQuODg3MjczIDE0LjE0OTgxOCA4Ljg0MzYzNiAyNC41Mjk0NTUgMTEuODIyNTQ2IDMxLjE4NTQ1NSAzLjAyNTQ1NSA2LjY1NiA4LjkzNjcyNyAxNy4yMjE4MTggMTcuODI2OTA5IDMxLjc5MDU0NSA4Ljg5MDE4MiAxNC41Njg3MjcgMTUuNDk5NjM2IDI0LjYyMjU0NSAxOS43ODE4MTggMzAuMTYxNDU1bC0xLjIxMDE4MiAxLjUzNi0xNC45NDEwOTEgMi42OTk2MzYtNzcuMTcyMzYzLTEuNzY4NzI3YTIxLjQxMDkwOSAyMS40MTA5MDkgMCAwIDAtMTUuNTkyNzI4LTEuNDg5NDU1bDAuNzkxMjczIDAuNjA1MDkxYTkzLjA5MDkwOSA5My4wOTA5MDkgMCAwIDAgMzYuMzk4NTQ1IDcuOTEyNzI3YzkuMzA5MDkxIDMuNDQ0MzY0IDE4LjE1MjcyNyA4LjE0NTQ1NSAyNi4zOTEyNzMgMTQuMTAzMjczIDMuNTM3NDU1IDAuOTMwOTA5IDUuMzUyNzI3IDMuMDI1NDU1IDUuMzk5MjczIDYuMzMwMTgybDQ0LjY4MzYzNiAxOC43NTc4MThjOC4wOTg5MDkgNS4wMjY5MDkgMTYuMzM3NDU1IDkuMzA5MDkxIDI0Ljc2MjE4MiAxMi44OTMwOTEgNi44ODg3MjcgNi42MDk0NTUgMTMuNDk4MTgyIDEzLjAzMjcyNyAxOS44MjgzNjQgMTkuMjIzMjczIDguODQzNjM2IDYuMzMwMTgyIDIxLjE3ODE4MiAxMi4wMDg3MjcgMzcuMDk2NzI3IDE2Ljk0MjU0NSAxNS45MTg1NDUgNC45MzM4MTggMjguMjUzMDkxIDIuODM5MjczIDM3LjA5NjcyNy02LjI4MzYzNmEzNS4xNDE4MTggMzUuMTQxODE4IDAgMCAwIDcuMTY4LTI0LjIwMzYzNnpNMzcwLjg3NDE4MiA0MjcuOTg1NDU1cy05Mi41Nzg5MDkgNjAuMzY5NDU1LTExMy44NTAxODIgODcuMTMzMDljMCAwLTE1Ljk2NTA5MS0xMS44MjI1NDUtMTYuMjkwOTA5LTMyLjY3NDkwOSAwIDAtMTIuNzA2OTA5LTMuMDcyLTI3LjA4OTQ1NSAyNy4yMjkwOTEtMTQuMzgyNTQ1IDMwLjI1NDU0NS0xNi4yOTA5MDkgMjcuMTgyNTQ1LTE2LjI5MDkwOSAyNy4xODI1NDZsLTE2LjI0NDM2MyA0My41NjY1NDVzLTI3LjA4OTQ1NSA4My4yNjk4MTggMzIuNTM1MjcyIDkyLjUzMjM2NGMwIDAgMzIuMjU2LTIuNjUzMDkxIDQzLjM4MDM2NC0yNy4yMjkwOTEgMTEuMDc3ODE4LTI0LjUyOTQ1NSAxNi4yOTA5MDktMzIuNjI4MzY0IDE2LjI5MDkwOS0zMi42MjgzNjR2LTEwLjg5MTYzNmwtNS40NDU4MTggNS40NDU4MTh2LTEwLjg5MTYzNmw1LjM5OTI3My01LjQ0NTgxOHMtOS4wMjk4MTgtMTkuNDU2IDAtMjcuMjI5MDkxYzkuMDI5ODE4LTcuNzI2NTQ1IDEwLjg0NTA5MS0xMC44OTE2MzYgMTAuODQ1MDkxLTEwLjg5MTYzN2wtNS4zOTkyNzMtNS40NDU4MThzMTEuMTcwOTA5LTE2Ljk4OTA5MSAxOS4xMzAxODItMzMuMDQ3MjczYy0yLjUxMzQ1NSA1LjA3MzQ1NS0wLjYwNTA5MS0zMy4xODY5MDkgNzMuMDI5ODE4LTg2LjcxNDE4MXoiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjQ0NzkiPjwvcGF0aD48L3N2Zz4=);
}
.bili-avatar-img.bili-avatar-img-error {
  display: none;
}
@-webkit-keyframes bili-avatar {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-97.5%, 0, 0);
    transform: translate3d(-97.5%, 0, 0);
  }
}
@-moz-keyframes bili-avatar {
  0% {
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -moz-transform: translate3d(-97.5%, 0, 0);
    transform: translate3d(-97.5%, 0, 0);
  }
}
@keyframes bili-avatar {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-97.5%, 0, 0);
    -moz-transform: translate3d(-97.5%, 0, 0);
    transform: translate3d(-97.5%, 0, 0);
  }
}
</style>