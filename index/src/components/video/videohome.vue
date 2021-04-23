<template>
<div class="v-wrap">
  <div class="l-con">
  <viewbox :boxreport="video.boxreport"></viewbox>
  <player></player>
  <viewtoolbar :triplet="video.triplet"></viewtoolbar>
  <viewdesc :subhead="video.subhead"></viewdesc>
  <viewtag  :classify="video.classify"></viewtag>
  </div>

  <div class="r-con">
    <rupinfo :uploader="video.uploader"></rupinfo>
    <reolist :details="video.details"></reolist>
  </div>
</div>
</template>

<script>
import viewbox from './Videocomponent/viewboxreport'
import player from './Player'
import viewtoolbar from './Videocomponent/viewtoolbar'
import viewdesc from './Videocomponent/viewdesc'
import viewtag from './Videocomponent/viewtag'
import reolist from './Videocomponent/reolist'
import rupinfo from './Videocomponent/rupinfo'

export default {
    name:'videohome',
    components:{
    viewbox,
    player,
    viewtoolbar,
    viewdesc,
    viewtag,
    rupinfo,
    reolist
    },
    data() {
      return {
       video:{
         bvid:1,
          boxreport:{
            id:1,//视频id
            titles:'【打泥泥】生命最后的30天，该如何度过?',//标题
            times:'2021-04-21 17:47:07',//发布时间
            play:410000,//播放量
            rank:20//排名
          },
          triplet:{
            Thumbup:23299,//点赞数
            insertcoins:523101,//投币数
            collect:41200//收藏数

          },
          subhead:{
            name:'视频里有两个关于我的彩蛋，你们能找到吗？'//副标题
          },
          classify:
          {
             mainpartition:[
              {name:'互动视频',froms:'dizhi'},
              {name:'科幻',froms:'dizhi'},
              {name:'互动视频',froms:'dizhi'},
              {name:'科幻',froms:'dizhi'},
               ], //主分类
            sortable:[
              {names:'冒险',from:'dizhi'},
              {names:'亲情',from:'dizhi'},
              {names:'原创',from:'dizhi'},
              {names:'互动游戏',from:'dizhi'},
              {names:'单机联机',from:'dizhi'}
              ]
          },
         uploader:{ 
            id:'1',//up主id
            upname:'打泥泥',//up主名字
            manifesto:'目标是做出最棒的互动视频！  wb：打泥泥呀',//个人简历
            Payattention:123135//关注数
          },
         details:[
           {
             bvid:1,
             titles:'【打泥泥】生命最后的30天，该如何度过?',
              upname:'打泥泥',//up主名字
              play:410000,//播放量
              time:'1:10',
              imagefrom:'//i1.hdslb.com/bfs/archive/a0376f8e41c0eab3ee2d31b47271ce80a10bbb2f.jpg@336w_190h.webp'
           }
         ]
       }
      }
    },
    beforeMount(){
      //在这里做播放量的加一
         this.video.boxreport.play++;
         
    }
}
</script>
<style scoped src="@/assets/style/video/stardust-video.css"></style>
<!--下面与主页无关-->
<style scoped src="@/assets/style/video/video_main.css"></style>
<style scoped src="@/assets/style/video/video_pbp.css"></style>
<style scoped src="@/assets/style/video/video_1.css"></style>
<style scoped src="@/assets/style/video/video_2.css"></style>
<style scoped src="@/assets/style/video/video_3.css"></style>
<style scoped src="@/assets/style/video/video_4.css"></style>
<style scoped src="@/assets/style/video/video_5.css"></style>
<style scoped src="@/assets/style/video/video_6.css"></style>
<style scoped src="@/assets/style/video/video_7.css"></style>
<style scoped src="@/assets/style/video/video_8.css"></style>
<style scoped src="@/assets/style/video/video_9.css"></style>
<style scoped src="@/assets/style/video/video_10.css"></style>
<style>

/* 主页样式 */
body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
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
    -webkit-tap-highlight-color: rgba(0,0,0,0);
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