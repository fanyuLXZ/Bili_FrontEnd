<template>
  <div class="v-wrap">
    <div class="l-con">
      <viewbox :video="videoData.video" :view="videoData.stat.view"></viewbox>
      <player :video="videoData.video"></player>
<!--      <viewtoolbar :stat="videoData.stat"></viewtoolbar>-->
      <viewtag :mainpartition="videoData.mainpartition" :deputydivision="videoData.deputydivision"></viewtag>
      <viewdesc :desc="videoData.video.desc"></viewdesc>

      <viewArticle :userInfo="userInfo" :aid="this.$route.params.bvid.substr(2)"></viewArticle>
    </div>

    <div class="r-con">
      <rupinfo :owner=" videoData.owner"></rupinfo>

      <reolist :related="videoData.related"></reolist>
    </div>

  </div>
</template>

<script>

import viewbox from './Videocomponent/viewboxreport'
import player from './Player'
// import viewtoolbar from './Videocomponent/viewtoolbar'
import viewdesc from './Videocomponent/viewdesc'
import viewtag from './Videocomponent/viewtwg'
import reolist from './Videocomponent/reolist'
import rupinfo from './Videocomponent/rupinfo'
import viewArticle from './Videocomponent/viewArticle'
import {getVideoInfo} from "../../api/video"
import {mapState} from "vuex";

export default {
  name: 'videohome',
  components: {
    viewtag,
    viewbox,
    player,
    // viewtoolbar,
    viewdesc,
    rupinfo,
    reolist,
    viewArticle
  },
  data() {
    return {
      videoData: {
        aid: 587836792,
        video: {
          id: 1,//视频id
          title: "这是个标题",//标题
          desc: '什么都没有哦~',//副标题
          ctime: '---',//发布时间
          rank: 0//排名
        },
        owner: {
          attention: true, //是否关注
          mid: 490265189,//up主id
          upname: "这是个名字",//up主名字
          fans: 0,//关注数
          sign: "这个人很懒什么都没有说~",//个人简历
          face: "//i0.hdslb.com/bfs/face/member/noface.jpg"//头像
        },
        stat: {
          view: 0,//播放量
          favorite: 0,//收藏数
          coin: 0,//投币数
          like: 0,//点赞数
        },
        //列表
        related: [

        ],
        mainpartition: ["111", "13"],//主分区
        deputydivision: ["!2313", "!231"],//副分区

      }
    }
  },
  computed:{
    ...mapState(['userInfo']),
  },
  beforeMount() {
    // 获取视频数据
    // 获取bv号
    const bvNo = this.$route.params.bvid
    if (bvNo){
      // 获取 bvid
      let bvid = bvNo.toLocaleLowerCase().replaceAll("bv","")
      this.loadVideoInfo(bvid)
    }

    //在这里做播放量的加一
    //this.video.video.play++;
  },
  methods:{
    async loadVideoInfo(bvNo){
      const { data } = await getVideoInfo(bvNo)
      if (data?.code===0){
        this.videoData=data.data.videoData
      }
    }
  }
}
</script>
<style src="@/assets/style/video/stardust-video.css"></style>
<!--下面与主页无关-->

<style>

/* 主页样式 */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #222;
  background-color: #fff;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

::selection {
  background: #1890ff;
  color: #fff;
}

.v-wrap {
  max-width: 1984px;
  min-width: 988px;
  margin: 0 auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}

.v-wrap {
  width: 988px;
  padding: 0 68px;
}

a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  font-style: normal;
}

</style>