<template>
  <div id="app">
    <div class="history-wrap">
      <div class="newlist_info">
        <div class="b-head clearfix">

          <div class="b-head-c">
            <i class="b-icon b-icon-history"></i>
            <span class="b-head-t">历史记录</span>
          </div>
          <!--  搜索栏  -->
          <head-search></head-search>
          <!--  历史记录  -->
          <history-btn></history-btn>
        </div>
      </div>
      <div style="display: none;">
        <div class="warn">
          <p class="txt">历史功能暂停中，就算看不可描述的视频也不会被记录下来了</p>
          <a href="#" class="btn">继续记录历史</a>
        </div>
      </div>
      <div class="list-contain" style="position:relative">
        <!--    时间范围轴   -->
        <label-contain :history_list="list"></label-contain>
        <ul class="history-list" id="history_list">
          <li class="history-record todayitem" v-for="item in list" :key="item.kid">
            <!--    视频时间    -->
            <l-info :viewAt="item.viewAt"></l-info>
            <div class="r-info clearfix">
              <!--    视频预览图   -->
              <cover-contain></cover-contain>
              <!--    视频信息    -->
              <r-txt :item="item"></r-txt>
            </div>
          </li>
          <!--  历史记录尽头  -->
          <li><img src="//s1.hdslb.com/bfs/static/history-record/./img/historyend.png" alt="" class="endpic"></li>
        </ul>
        <!--  历史记录空空如也  -->
        <div class="nodata-contain" style="display: none;">
          <img src="//s1.hdslb.com/bfs/static/history-record/./img/nodata.png" alt="" class="nodata">
          <div class="txt"><p></p></div>
        </div>
      </div>
      <!--  返回顶部  -->
      <go-top></go-top>
    </div>
  </div>
</template>


<script>

import HeadSearch from "../components/history/head-search";
import HistoryBtn from "../components/history/history-btn";
import CoverContain from "../components/history/cover-contain";
import RTxt from "../components/history/r-txt";
import LInfo from "../components/history/l-info";
import GoTop from "../components/history/go-top";
import LabelContain from "../components/history/label-contain";

export default {
  name: 'history',

  components: {
    LabelContain,
    LInfo,
    RTxt,
    CoverContain,
    HistoryBtn,
    HeadSearch,
    GoTop
  },

  data(){
    return{
      list:[
        {
          kid:34053,    //视频id
          author_mid:304710451,   //用户id
          authorName:"法老是保安呀",   //视频发布人姓名
          cover:"http://i1.hdslb.com/bfs/archive/c7a5ef971a680a7ae2fafec116a4202af11df20a.jpg",   //视频预览图
          title:"相声厂牌活死人雷迪被绑架八贼法老在线解救！！#我粪了",    //视频标题
          tagName:"搞笑",    //视频分类
          viewAt:"2021-04-28",   //观看时间
          progress:"13",    //观看时长 -1为看完
        },
        {
          kid:34052,    //视频id
          author_mid:304710451,   //用户id
          authorName:"法老是保安呀",   //视频发布人姓名
          cover:"http://i1.hdslb.com/bfs/archive/c7a5ef971a680a7ae2fafec116a4202af11df20a.jpg",   //视频预览图
          title:"相声厂牌活死人雷迪被绑架八贼法老在线解救！！#我粪了",    //视频标题
          tagName:"搞笑",    //视频分类
          viewAt:"2021-04-27",   //观看时间
          progress:"13",    //观看时长 -1为看完
        },{
          kid:34052,    //视频id
          author_mid:304710451,   //用户id
          authorName:"法老是保安呀",   //视频发布人姓名
          cover:"http://i1.hdslb.com/bfs/archive/c7a5ef971a680a7ae2fafec116a4202af11df20a.jpg",   //视频预览图
          title:"相声厂牌活死人雷迪被绑架八贼法老在线解救！！#我粪了",    //视频标题
          tagName:"搞笑",    //视频分类
          viewAt:"2021-04-25",   //观看时间
          progress:"13",    //观看时长 -1为看完
        },{
          kid:34052,    //视频id
          author_mid:304710451,   //用户id
          authorName:"法老是保安呀",   //视频发布人姓名
          cover:"http://i1.hdslb.com/bfs/archive/c7a5ef971a680a7ae2fafec116a4202af11df20a.jpg",   //视频预览图
          title:"相声厂牌活死人雷迪被绑架八贼法老在线解救！！#我粪了",    //视频标题
          tagName:"搞笑",    //视频分类
          viewAt:"2021-04-18",   //观看时间
          progress:"13",    //观看时长 -1为看完
        },{
          kid:34052,    //视频id
          author_mid:304710451,   //用户id
          authorName:"法老是保安呀",   //视频发布人姓名
          cover:"http://i1.hdslb.com/bfs/archive/c7a5ef971a680a7ae2fafec116a4202af11df20a.jpg",   //视频预览图
          title:"相声厂牌活死人雷迪被绑架八贼法老在线解救！！#我粪了",    //视频标题
          tagName:"搞笑",    //视频分类
          viewAt:"2021-04-17",   //观看时间
          progress:"13",    //观看时长 -1为看完
        },{
          kid:34052,    //视频id
          author_mid:304710451,   //用户id
          authorName:"法老是保安呀",   //视频发布人姓名
          cover:"http://i1.hdslb.com/bfs/archive/c7a5ef971a680a7ae2fafec116a4202af11df20a.jpg",   //视频预览图
          title:"相声厂牌活死人雷迪被绑架八贼法老在线解救！！#我粪了",    //视频标题
          tagName:"搞笑",    //视频分类
          viewAt:"2021-04-16",   //观看时间
          progress:"13",    //观看时长 -1为看完
        },{
          kid:34052,    //视频id
          author_mid:304710451,   //用户id
          authorName:"法老是保安呀",   //视频发布人姓名
          cover:"http://i1.hdslb.com/bfs/archive/c7a5ef971a680a7ae2fafec116a4202af11df20a.jpg",   //视频预览图
          title:"相声厂牌活死人雷迪被绑架八贼法老在线解救！！#我粪了",    //视频标题
          tagName:"搞笑",    //视频分类
          viewAt:"2021-04-15",   //观看时间
          progress:"13",    //观看时长 -1为看完
        },{
          kid:34052,    //视频id
          author_mid:304710451,   //用户id
          authorName:"法老是保安呀",   //视频发布人姓名
          cover:"http://i1.hdslb.com/bfs/archive/c7a5ef971a680a7ae2fafec116a4202af11df20a.jpg",   //视频预览图
          title:"相声厂牌活死人雷迪被绑架八贼法老在线解救！！#我粪了",    //视频标题
          tagName:"搞笑",    //视频分类
          viewAt:"2021-04-14",   //观看时间
          progress:"13",    //观看时长 -1为看完
        },{
          kid:34052,    //视频id
          author_mid:304710451,   //用户id
          authorName:"法老是保安呀",   //视频发布人姓名
          cover:"http://i1.hdslb.com/bfs/archive/c7a5ef971a680a7ae2fafec116a4202af11df20a.jpg",   //视频预览图
          title:"相声厂牌活死人雷迪被绑架八贼法老在线解救！！#我粪了",    //视频标题
          tagName:"搞笑",    //视频分类
          viewAt:"2021-04-13",   //观看时间
          progress:"13",    //观看时长 -1为看完
        },{
          kid:34052,    //视频id
          author_mid:304710451,   //用户id
          authorName:"法老是保安呀",   //视频发布人姓名
          cover:"http://i1.hdslb.com/bfs/archive/c7a5ef971a680a7ae2fafec116a4202af11df20a.jpg",   //视频预览图
          title:"相声厂牌活死人雷迪被绑架八贼法老在线解救！！#我粪了",    //视频标题
          tagName:"搞笑",    //视频分类
          viewAt:"2021-04-12",   //观看时间
          progress:"13",    //观看时长 -1为看完
        },{
          kid:34052,    //视频id
          author_mid:304710451,   //用户id
          authorName:"法老是保安呀",   //视频发布人姓名
          cover:"http://i1.hdslb.com/bfs/archive/c7a5ef971a680a7ae2fafec116a4202af11df20a.jpg",   //视频预览图
          title:"相声厂牌活死人雷迪被绑架八贼法老在线解救！！#我粪了",    //视频标题
          tagName:"搞笑",    //视频分类
          viewAt:"2021-04-11",   //观看时间
          progress:"13",    //观看时长 -1为看完
        },{
          kid:34052,    //视频id
          author_mid:304710451,   //用户id
          authorName:"法老是保安呀",   //视频发布人姓名
          cover:"http://i1.hdslb.com/bfs/archive/c7a5ef971a680a7ae2fafec116a4202af11df20a.jpg",   //视频预览图
          title:"相声厂牌活死人雷迪被绑架八贼法老在线解救！！#我粪了",    //视频标题
          tagName:"搞笑",    //视频分类
          viewAt:"2021-04-10",   //观看时间
          progress:"13",    //观看时长 -1为看完
        },{
          kid:34052,    //视频id
          author_mid:304710451,   //用户id
          authorName:"法老是保安呀",   //视频发布人姓名
          cover:"http://i1.hdslb.com/bfs/archive/c7a5ef971a680a7ae2fafec116a4202af11df20a.jpg",   //视频预览图
          title:"相声厂牌活死人雷迪被绑架八贼法老在线解救！！#我粪了",    //视频标题
          tagName:"搞笑",    //视频分类
          viewAt:"2021-04-9",   //观看时间
          progress:"13",    //观看时长 -1为看完
        },{
          kid:34052,    //视频id
          author_mid:304710451,   //用户id
          authorName:"法老是保安呀",   //视频发布人姓名
          cover:"http://i1.hdslb.com/bfs/archive/c7a5ef971a680a7ae2fafec116a4202af11df20a.jpg",   //视频预览图
          title:"相声厂牌活死人雷迪被绑架八贼法老在线解救！！#我粪了",    //视频标题
          tagName:"搞笑",    //视频分类
          viewAt:"2021-04-8",   //观看时间
          progress:"13",    //观看时长 -1为看完
        },{
          kid:34052,    //视频id
          author_mid:304710451,   //用户id
          authorName:"法老是保安呀",   //视频发布人姓名
          cover:"http://i1.hdslb.com/bfs/archive/c7a5ef971a680a7ae2fafec116a4202af11df20a.jpg",   //视频预览图
          title:"相声厂牌活死人雷迪被绑架八贼法老在线解救！！#我粪了",    //视频标题
          tagName:"搞笑",    //视频分类
          viewAt:"2021-02-7",   //观看时间
          progress:"13",    //观看时长 -1为看完
        },
      ]
    }
  }
}

</script>

<style type="text/css">
.newlist_info {
  position: relative
}

.b-head {
  height: 30px
}

.b-head-search {
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  padding: 0 5px;
  width: 188px;
  height: 30px;
  border: 1px solid #ccd0d7;
  right: 212px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border-radius: 15px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.b-head-search.input-active {
  border: 1px solid #00a1d6
}

.b-head-search .search-icon {
  display: inline-block;
  width: 24px;
  height: 24px
}

.b-head-search .search-icon > img {
  width: 100%;
  height: 100%
}

.b-head-search .search-icon.cursor {
  cursor: pointer
}

.b-head-search .b-head-search_input {
  width: 120px;
  height: 17px;
  line-height: 17px;
  border: none;
  outline: none;
  font-size: 12px
}

.b-head-search .b-head-search_input::-webkit-input-placeholder {
  color: #999
}

.b-head-search .b-head-search_input:-moz-placeholder, .b-head-search .b-head-search_input::-moz-placeholder {
  color: #999
}

.b-head-search .b-head-search_input:-ms-input-placeholder {
  color: #999
}

.b-head-search .search-cancel {
  display: inline-block;
  width: 24px;
  height: 24px;
  opacity: 0
}

.b-head-search .search-cancel > img {
  width: 100%;
  height: 100%
}

.b-head-search .search-cancel.show-icon {
  opacity: 1;
  cursor: pointer
}
</style>
<style type="text/css">
article, aside, blockquote, body, button, code, dd, details, div, dl, dt, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, input, legend, li, menu, nav, ol, p, pre, section, td, textarea, th, ul {
  margin: 0;
  padding: 0
}

address, caption, cite, code, dfn, em, i, th, var {
  font-style: normal;
  font-weight: 400
}

body {
  font: 12px Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif
}

.history-wrap {
  min-height: 460px;
  padding: 30px 0 0;
  margin: 0 auto;
  font-size: 12px
}

.history-wrap, .history-wrap .b-head {
  position: relative
}

.history-wrap .b-head .b-head-t {
  vertical-align: middle;
  display: inline-block;
  font-size: 18px;
  line-height: 24px;
  color: #222
}

.history-wrap a.btn {
  outline: 0;
  color: #00a1d6;
  text-decoration: none;
  cursor: pointer
}

.history-wrap p {
  margin: 0;
  padding: 0
}

.history-wrap .b-icon-history {
  background: url(//s1.hdslb.com/bfs/static/history-record/./img/icons.png) -83px -850px no-repeat;
  width: 28px;
  height: 28px;
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle
}

.history-wrap .load-contain {
  width: 107px;
  margin: 15px auto 0;
  font-size: 12px;
  color: #99a2aa
}

.history-wrap .load-contain .loadtv {
  width: 24px;
  height: 24px;
  margin-right: 12px;
  background: url("//static.hdslb.com/images/base/loading.gif");
  margin-top: -4px;
  float: left
}

.history-wrap .nodata-contain {
  width: 256px;
  margin: 0 auto;
  min-height: 300px
}

.history-wrap .nodata-contain .nodata {
  width: 256px;
  height: 256px
}

.history-wrap .nodata-contain .txt {
  line-height: 30px;
  font-size: 16px;
  color: #99a2aa;
  margin-top: -20px;
  margin-bottom: 40px;
  text-align: center
}

.history-wrap .warn {
  width: 600px;
  margin: 70px auto 54px;
  text-align: center
}

.history-wrap .warn .btn {
  font-size: 14px;
  display: inline-block;
  border-radius: 4px;
  color: #fff;
  background-color: #00a1d6;
  text-align: center;
  padding: 6.5px 11px;
}

.history-wrap .warn .btn:hover {
  background-color: #00b5e5
}

.history-wrap .warn .txt {
  color: #222;
  font-size: 16px;
  margin-bottom: 20px
}

.history-wrap .history-btn {
  float: right;
  width: 188px
}

.history-wrap .history-btn .btn {
  border: 1px solid;
  display: inline-block;
  text-align: center;
  padding: 5px 8px;
  border-radius: 5px;
  margin-right: 20px;
  height: 18px;
  line-height: 18px;
  box-sizing: content-box;
}

.history-wrap .history-btn .btn:hover {
  background-color: #00b5e5;
  color: #fff
}

.history-wrap .history-btn .cleanhsbtn {
  margin-right: 0
}

.history-wrap .history-btn .cleanright {
  margin-left: 120px
}

.history-wrap .operatetopset .openhsbtn {
  background-color: #00a1d6;
  color: #fff
}

.history-wrap .operatetopset .openhsbtn:hover {
  background-color: #00b5e5
}

.history-wrap .time-label {
  font-size: 14px;
  text-align: center;
  height: 34px;
  line-height: 36px;
  color: #ff74a5;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 0 8px;
  margin-right: 20px;
  position: fixed;
  border: 1px solid #ff74a5;
  cursor: pointer;
  z-index: 998
}

.history-wrap .time-label:after {
  right: -8px;
  border-left: 8px solid #ff74a5;
  z-index: 1
}

.history-wrap .time-label:after, .history-wrap .time-label:before {
  position: absolute;
  top: 13px;
  content: "";
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent
}

.history-wrap .time-label:before {
  right: -6px;
  border-left: 8px solid #fff;
  z-index: 2
}

.history-wrap .todaylabel {
  top: 18px;
  position: absolute;
  margin-left: 8px
}

.history-wrap .lastdaylabel {
  margin-left: 8px
}

.history-wrap .lastthreemonthlabel {
  margin-left: -13px
}

.history-wrap .lastthreemonthlabel.active {
  margin-left: -14px
}

.history-wrap .active {
  background-color: #ff74a5;
  color: #fff
}

.history-wrap .active:before {
  border-left: 8px solid #ff74a5
}

.history-wrap .hs-filter {
  float: left;
  margin-left: 90px
}

.history-wrap .hs-filter .label {
  font-size: 12px;
  color: #6d757a;
  margin-right: 60px
}

.history-wrap .hs-filter .label input {
  margin: 0 14px 0 0
}

.history-wrap .b-head-c {
  float: left
}

.history-wrap .settop {
  position: fixed;
  top: 10px;
  left: 13px
}

.history-wrap .endpic {
  width: 450px;
  height: 200px;
  margin: 76px auto;
  display: block
}

.history-wrap .clearfix {
  overflow: hidden
}

.history-dlg {
  width: 310px;
  height: 190px;
  border-radius: 4px;
  border: 1px solid #e5e9ef;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -95px;
  margin-left: -155px;
  z-index: 10001;
  background-color: #fff
}

.history-dlg a {
  outline: 0;
  color: #00a1d6;
  text-decoration: none;
  cursor: pointer
}

.history-dlg .dlg-txt {
  font-size: 14px;
  color: #222;
  text-align: center;
  margin: 60px auto 52px
}

.history-dlg .hsbtn {
  width: 220px;
  margin: 0 auto
}

.history-dlg .hsbtn a {
  width: 100px;
  height: 32px;
  font-size: 14px;
  border-radius: 4px;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
  float: left
}

.history-dlg .hsbtn .sure {
  background-color: #00a1d6;
  color: #fff;
  margin-right: 20px
}

.history-dlg .hsbtn .sure:hover {
  background-color: #00b5e5
}

.history-dlg .hsbtn .cancel {
  border: 1px solid #ccd0d7;
  color: #6d757a;
  width: 98px;
  height: 30px
}

.history-dlg .hsbtn .cancel:hover {
  border-color: #00b5e5;
  color: #00b5e5
}

.hsmask {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #000;
  opacity: .5;
  z-index: 10000
}

.history-list {
  padding: 8px 0 10px;
  margin-top: 17px
}

.history-list, .history-list .history-record {
  display: block;
  position: relative
}

.history-list .l-info {
  width: 66px;
  position: absolute;
  top: 10px;
  left: 0;
  border-right: 1px solid #e5e9ef;
  overflow: visible;
  height: 143px
}

.history-list .l-info .lastplay-time {
  overflow: visible;
  height: 120px;
  font-size: 14px
}

.history-list .l-info .lastplay-time .history-red-round {
  position: absolute;
  right: -5px;
  top: 48px;
  border: 5px dashed #e5e9ef;
  border-right-width: 0;
  border-left-style: solid;
  border-top-color: transparent;
  border-bottom-color: transparent
}

.history-list .l-info .lastplay-time .lastplay-d {
  color: #333;
  margin-top: -6px;
  display: block;
  float: left
}

.history-list .l-info .lastplay-time .lastplay-t {
  color: #99a2aa;
  position: absolute;
  top: 43px;
  left: 87px;
  width: 80px;
  font-size: 14px
}

.history-list .r-info {
  border: 1px solid transparent;
  margin-left: 197px;
  background: #fff;
  padding: 10px 0;
  margin-right: 5px;
  position: relative
}

.history-list .r-info .r-txt {
  height: 100px;
  border-bottom: 1px solid #e5e9ef;
  float: left
}

.history-list .r-info .r-txt a {
  text-decoration: none
}

.history-list .r-info .preview {
  cursor: pointer;
  overflow: hidden;
  display: block;
  text-align: center;
  float: left;
  width: 160px;
  height: 100px;
  position: relative;
  border-radius: 5px
}

.history-list .r-info .preview .lasting-time {
  width: 12px;
  height: 16px;
  vertical-align: top;
  margin-top: 7px;
  background: url(//s1.hdslb.com/bfs/static/history-record/./img/icons.png) -342px -1047px no-repeat;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1px 5px;
  color: #fff;
  background: #000;
  background: rgba(0, 0, 0, .5);
  display: none
}

.history-list .r-info .preview img {
  margin: 0 auto;
  display: block;
  height: 100px;
  max-width: 160px
}

.history-list .r-info .history-delete {
  vertical-align: top;
  margin-top: 7px;
  color: #99a2aa;
  position: absolute;
  padding-left: 16px;
  right: 0;
  top: 44px;
  cursor: pointer
}

.history-list .r-info .typename {
  margin-top: 4px;
  float: left;
  color: #222;
  font-size: 14px
}

.history-list .r-info .typename:hover {
  color: #00a1d6
}

.history-list .r-info .title {
  cursor: pointer;
  padding-top: 5.5px;
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
  color: #222;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.history-list .r-info .title:hover {
  color: #00a1d6
}

.history-list .r-info .subtitle {
  font-size: 12px;
  color: #6d757a;
  margin-bottom: 18px;
  height: 16px;
  padding-left: 3px
}

.history-list .r-info .w-info {
  font-family: microsoft yahei, simhei;
  float: left;
  line-height: 20px
}

.history-list .r-info .w-info .time-wrap {
  float: left;
  min-width: 300px
}

.history-list .r-info .w-info .userpic {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  float: left;
  margin-right: 10px;
  background-size: 100% 100%;
  cursor: pointer
}

.history-list .r-info .w-info .userpic.lazy-img img {
  border-radius: 100%
}

.history-list .r-info .w-info .name {
  color: #99a2aa;
  font-size: 12px;
  float: left;
  padding-left: 10px;
  border-left: 1px solid #e5e9ef
}

.history-list .r-info .w-info .device {
  font-size: 18px;
  color: #99a2aa;
  float: left
}

.history-list .r-info .w-info .pro-txt {
  color: #99a2aa;
  font-size: 12px;
  float: left;
  margin-left: 10px
}

.history-list .r-info .w-info .pro-txt.progress {
  margin-left: 6px;
  max-width: 177px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.history-list .r-info .w-info .verline {
  float: left;
  margin-right: 10px;
  line-height: 18px
}

.history-list .r-info .w-info .username {
  float: left;
  color: #6d757a;
  padding-right: 10px;
  height: 12px;
  margin-top: 5px;
  line-height: 11px;
  font-size: 12px;
  cursor: pointer
}

.history-list .r-info .w-info .username:hover {
  color: #00a1d6
}

.history-list .r-info .device-i.pc {
  background-position: -1367px -406px
}

.history-list .r-info .device-i.phone {
  background-position: -1367px -466px
}

.history-list .r-info .device-i.pad {
  background-position: -1367px -526px
}

.history-list .r-info .device-i.unknown {
  background-position: -1430px -407px
}

.history-list .r-info .device-i.tv {
  background-position: -1430px -471px
}

.history-list .r-info .history-mark {
  position: absolute;
  right: 34px;
  top: 50px;
  color: #99a2aa;
  font-size: 12px;
  padding-right: 20px;
  border-right: 1px solid #e5e9ef
}

.history-list .cover-contain {
  float: left;
  position: relative;
  margin: 0 30px 0 0
}

.history-list .cover-contain .pages-pic {
  position: absolute;
  left: 4px;
  top: -6px;
  background: url(//s1.hdslb.com/bfs/static/history-record/./img/pages-pic.png);
  width: 152px;
  height: 6px
}

.history-list .cover-contain .info {
  position: absolute;
  left: 0;
  bottom: 0;
  background: url(//s1.hdslb.com/bfs/static/history-record/./img/video-mask.png);
  width: 160px;
  height: 39px;
  cursor: pointer
}

.history-list .cover-contain .progress-c {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 160px;
  height: 6px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #000
}

.history-list .cover-contain .progress {
  width: 80px;
  height: 6px;
  background-color: #ff74a5;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 4px
}

.history-list .cover-contain .radius-set {
  border-top-right-radius: 0
}

.history-list .cover-contain .label {
  position: absolute;
  right: 8px;
  top: 5.5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  border-radius: 2px;
  background-color: #ff74a5;
  padding: 0 3px;
  height: 16px;
  line-height: 16px;
  z-index: 4;
  cursor: pointer
}

.history-list .cover-contain .label.disable {
  background: rgba(0, 0, 0, .5)
}

.history-list .history-record.articleMode .r-info .preview, .history-list .history-record.articleMode .r-info .preview img, .history-list .history-record.articleMode .r-txt {
  height: 120px
}

.history-list .history-record.articleMode .r-txt .subtitle {
  margin-bottom: 38px
}

.history-list .history-record.articleMode .r-txt .history-delete {
  margin-top: 17px
}

@media screen and (min-width: 1415px) {
  .history-wrap {
    width: 1160px
  }

  .history-wrap .history-list .r-info .title {
    width: 580px
  }

  .history-wrap .history-list .r-info .r-txt {
    width: 765px
  }
}

@media screen and (max-width: 1414px) {
  .history-wrap {
    width: 980px
  }

  .history-wrap .history-list .r-info .title {
    width: 400px
  }

  .history-wrap .history-list .r-info .r-txt {
    width: 585px
  }
}

.index-nav {
  display: none;
  position: fixed;
  width: 48px;
  z-index: 90;
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.index-nav .border {
  position: absolute;
  height: 100%;
  width: 100%;
  top: -3px;
  border: 3px solid #fafafa;
  left: -3px;
  border-radius: 4px;
  display: none
}

.index-nav .n-i {
  cursor: pointer
}

.index-nav .n-i:first-child {
  border-top: 0
}

.index-nav .n-i.gotop {
  border: 0;
  position: relative;
  z-index: 50
}

.index-nav .n-i.gotop .s-line {
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  height: 9px;
  width: 30px;
  margin: 0 auto
}

.index-nav .n-i.gotop.sub .s-line {
  display: none
}

.index-nav .n-i.gotop .btn_gotop {
  height: 48px;
  background: #f6f9fa url(//s1.hdslb.com/bfs/static/history-record/./img/icons.png) -648px -72px no-repeat;
  border: 1px solid #e5e9ef;
  overflow: hidden;
  border-radius: 4px
}

.index-nav .n-i.gotop .btn_gotop:hover {
  background-color: #00a1d6;
  background-position: -714px -72px;
  border-color: #00a1d6
}
</style>
<style type="text/css">
.newlist_info {
  position: relative
}

.b-head {
  height: 30px
}

.b-head-search {
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  padding: 0 5px;
  width: 188px;
  height: 30px;
  border: 1px solid #ccd0d7;
  right: 212px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border-radius: 15px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.b-head-search.input-active {
  border: 1px solid #00a1d6
}

.b-head-search .search-icon {
  display: inline-block;
  width: 24px;
  height: 24px
}

.b-head-search .search-icon > img {
  width: 100%;
  height: 100%
}

.b-head-search .search-icon.cursor {
  cursor: pointer
}

.b-head-search .b-head-search_input {
  width: 120px;
  height: 17px;
  line-height: 17px;
  border: none;
  outline: none;
  font-size: 12px
}

.b-head-search .b-head-search_input::-webkit-input-placeholder {
  color: #999
}

.b-head-search .b-head-search_input:-moz-placeholder, .b-head-search .b-head-search_input::-moz-placeholder {
  color: #999
}

.b-head-search .b-head-search_input:-ms-input-placeholder {
  color: #999
}

.b-head-search .search-cancel {
  display: inline-block;
  width: 24px;
  height: 24px;
  opacity: 0
}

.b-head-search .search-cancel > img {
  width: 100%;
  height: 100%
}

.b-head-search .search-cancel.show-icon {
  opacity: 1;
  cursor: pointer
}
</style>
<style type="text/css">.go-top-m{
  bottom: 50px;
  width: 48px;
  position: fixed;
  left: 50%;
  margin-left: 590px;
  transition: top .3s
}

@media screen and (max-width: 1400px) {
  .go-top-m{
    margin-left: 500px
  }
}

.go-top-m .go-top{
  cursor: pointer;
  width: 46px;
  height: 48px;
  background-color: #f6f9fa;
  background-position: -648px -72px;
  background-repeat: no-repeat;
  border: 1px solid #e5e9ef;
  overflow: hidden;
  border-radius: 4px
}

.go-top-m .go-top:hover {
  background-color: #00a1d6;
  background-position: -714px -72px;
  border-color: #00a1d6
}

.icon{
  display: inline-block;
  background-image: url("//static.hdslb.com/images/base/icons.png")
}</style>