<template>
<div class="v-wrap">
  <div class="l-con">
  <viewbox :video="videoData.video" :view="videoData.stat.view"> </viewbox>
  <player></player>
   <viewtoolbar :stat="videoData.stat"></viewtoolbar>
  <viewdesc :desc="videoData.video.desc"></viewdesc>

 <viewArticle></viewArticle> 
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
import viewtoolbar from './Videocomponent/viewtoolbar'
import viewdesc from './Videocomponent/viewdesc'

 import reolist from './Videocomponent/reolist'
import rupinfo from './Videocomponent/rupinfo'
 import viewArticle from './Videocomponent/viewArticle'

export default {
    name:'videohome',
    components:{
    viewbox,
    player,
     viewtoolbar,
     viewdesc,
     rupinfo,
     reolist,
     viewArticle
    },
    data() {
      return {
       videoData:{
         aid: 587836792,
          video:{
             id:1,//视频id
             title: "“深房理”事件——国家才是人民幸福生活的保障",//标题
             desc:'深房理不止炒房？ 地产证券化，亏你也敢！',//副标题
             ctime:'2021-04-21 17:47:07',//发布时间
            
            rank:20//排名
          },
          owner: {
            mid: 490265189,//up主id
            upname: "荷包兔时间",//up主名字
           fans: 425594,//关注数
           sign: "直播间请不要刷需要花钱的礼物哈~大家赚钱不易，都先留着。以后的，以后再给：）",//个人简历
            face: "http:\u002F\u002Fi2.hdslb.com\u002Fbfs\u002Fface\u002Fe2518023fc82d92ad53b2ee3305b4bf6fb1fbbf2.jpg"//头像
            },
            
          stat:{
              view: 130674,//播放量
              favorite: 3292,//收藏数
              coin: 7474,//投币数
                like: 13207,//点赞数
              },
              //列表
         related:[
           {
                    aid: 887552099,//视频id
                    pic: "http:\u002F\u002Fi2.hdslb.com\u002Fbfs\u002Farchive\u002Fce26b419c9e737b4f8faad2143b655f9a3d1f676.jpg",//图片
                    title: "那个惊动七大部门的男人，撕开了深圳楼市大内幕",//标题
                    owner: {
                        name: "大猫财经",//up名字
                        mid: 519978853//upid
                    },
                    stat: {
                        view: 183630//播放量
                    },
                
                },
                {
                    aid: 887552099,//视频id
                    pic: "http:\u002F\u002Fi2.hdslb.com\u002Fbfs\u002Farchive\u002Fce26b419c9e737b4f8faad2143b655f9a3d1f676.jpg",//图片
                    title: "那个惊动七大部门的男人，撕开了深圳楼市大内幕",//标题
                    owner: {
                        name: "大猫财经",//up名字
                        mid: 519978853//upid
                    },
                    stat: {
                        view: 183630//播放量
                    },
                
                },  {
                    aid: 887552099,//视频id
                    pic: "http:\u002F\u002Fi2.hdslb.com\u002Fbfs\u002Farchive\u002Fce26b419c9e737b4f8faad2143b655f9a3d1f676.jpg",//图片
                    title: "那个惊动七大部门的男人，撕开了深圳楼市大内幕",//标题
                    owner: {
                        name: "大猫财经",//up名字
                        mid: 519978853//upid
                    },
                    stat: {
                        view: 183630//播放量
                    },
                
                },   
         ]
       
        
       }
      }
    },
    beforeMount(){
      //在这里做播放量的加一
         //this.video.video.play++;
         
    }
}
</script>
<style scoped src="@/assets/style/video/stardust-video.css"></style>
<!--下面与主页无关-->

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