<template>
  <div class="video-floor-m l-con">
    <!--    分区标题    -->
    <zone-title :itemTitle="itemTitle"/>
    <!--    分区视频    -->
    <div class="storey-box clearfix" style="height:504px;">
      <spread-module :type="item.card_type" v-for="item in archives" :key="item.aid" :item="item"/>
    </div>
  </div>
</template>

<script>
import ZoneTitle from "./zone-title";
import SpreadModule from "./spread-module";
export default {
  name: "video-floor-m",

  components: {SpreadModule, ZoneTitle},

  data() {
    return {
      page:{
        count:178,    //总数
        num:1,    //页码
        size:15   //煤业数据
      },
      archives: [
        {
          aid:98147222,   //视频id
          bvid:"BV1GE411w7N3",    //视频id
          ctime:1584864755,   //视频发布时间
          desc:"视频内容纯属恶搞，请勿过于较真",   //视频文章
          duration:"4:18",   //视频时长
          owner:{
            face:"",    //作者头像
            mid:22894414,    //作者id
            name:"废宅羊",    //作者名称
          },
          pic:"http://i1.hdslb.com/bfs/archive/45e5ddc759e2a8f5305c996b12020df4e25f22f0.jpg",    //预览图
          stat:{
            aid:98147222,    //视频id
            coin:164134,    //投币数
            dislike:0,    //点踩数
            favorite:129590,    //收藏数
            his_rank:0,   //排行
            like:289888,   //点赞数
            reply:8001,    //评论数
            share:71394,    //转发数
            view:3256485,    //观看数
          },
          title:"【误解系】 出 轨 的 下 场",   //标题
          tname:"MAD·AMV",    //视频分区
        },
      ]
    }
  },

  props:{
    itemTitle:String
  }
}
</script>

<style>

</style>