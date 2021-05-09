<template>
  <div class="storey-box clearfix">
    <div class="v-list">
      <spread-module v-for="item in archives" :item="item" :key="item.aid"/>
    </div>
  </div>
</template>

<script>
import SpreadModule from "../../channel-m/sub-zone-m/spread-module";
export default {
name: "storey-box",
  components: {SpreadModule},

  data(){
    return{
      archives:[
        {
          aid:460089905,   //视频id
          bvid:"BV135411c7d4",    //视频id
          ctime:1618025514,   //视频发布时间
          desc:"不要白嫖，不要白嫖，不要白嫖，不要白嫖",   //视频文章
          duration:"2:40",   //视频时长
          owner:{
            face:"",    //作者头像
            mid:1,    //作者id
            name:"坑坑不是受啊",    //作者名称
          },
          pic:"//i0.hdslb.com/bfs/archive/cbf5f9709b070cde982d41a227da8d07184b94a7.jpg@160w_100h.webp",    //预览图
          stat:{
            aid:460089905,    //视频id
            coin:4304,    //投币数
            dislike:0,    //点踩数
            favorite:8365,    //收藏数
            his_rank:0,   //排行
            like:11905,   //点赞数
            reply:382,    //评论数
            share:1150,    //转发数
            view:107484,    //观看数
          },
          title:"鼬先生，你在临死前是否也看清了自己呢？",   //标题
          tname:"MAD·AMV",    //视频分区
        },
        {
          aid:587600591,   //视频id
          bvid:"BV1gB4y1A7sn",    //视频id
          ctime:1618148256,   //视频发布时间
          desc:"BGM: Lilianna Wilde - White Rabbit (Jawster Remix)\\n如果你喜欢我这个视频，请一键三联吧，三连吧哥哥哟～",   //视频文章
          duration:"01:12",   //视频时长
          owner:{
            face:"",    //作者头像
            mid:2,    //作者id
            name:"Tokiwa绿酱",    //作者名称
          },
          pic:"http://i2.hdslb.com/bfs/archive/6ab64e7d5d265544553a209770fd1b6b297f21a6.jpg",    //预览图
          stat:{
            aid:587600591,    //视频id
            coin:266,    //投币数
            dislike:0,    //点踩数
            favorite:514,    //收藏数
            his_rank:0,   //排行
            like:1118,   //点赞数
            reply:79,    //评论数
            share:18,    //转发数
            view:7228,    //观看数
          },
          title:"我已经怒不可遏了！！！",   //标题
          tname:"MAD·AMV",    //视频分区
        },
        {
          aid:629711606,   //视频id
          bvid:"BV1sb4y1Q7xX",    //视频id
          ctime:1616211410,   //视频发布时间
          desc:"虎杖悠仁生贺视频\\nbgm： マインドブランド (Mind Brand)——足首",   //视频文章
          duration:"03:34",   //视频时长
          owner:{
            face:"",    //作者头像
            mid:3,    //作者id
            name:"鱼说辣椒酱下饭",    //作者名称
          },
          pic:"http://i1.hdslb.com/bfs/archive/3fe696436c999c16a4e7934a2500611c6eb8871f.jpg",    //预览图
          stat:{
            aid:629711606,    //视频id
            coin:2004,    //投币数
            dislike:0,    //点踩数
            favorite:7508,    //收藏数
            his_rank:0,   //排行
            like:16131,   //点赞数
            reply:343,    //评论数
            share:334,    //转发数
            view:91516,    //观看数
          },
          title:"虎杖悠仁  区区妄想型",   //标题
          tname:"MAD·AMV",    //视频分区
        },
        {
          aid:80444181,   //视频id
          bvid:"BV1jJ411x7bh",    //视频id
          ctime:1577156761,   //视频发布时间
          desc:"BGM：Lock me up（有改动）\n大家圣诞节快乐！",   //视频文章
          duration:"03:34",   //视频时长
          owner:{
            face:"",    //作者头像
            mid:4,    //作者id
            name:"维C永不加班",    //作者名称
          },
          pic:"http://i0.hdslb.com/bfs/archive/5747ef1530e40db912d3f837bce9ec8a7ef258b3.jpg",    //预览图
          stat:{
            aid:80444181,    //视频id
            coin:117559,    //投币数
            dislike:0,    //点踩数
            favorite:115844,    //收藏数
            his_rank:0,   //排行
            like:152880,   //点赞数
            reply:1111,    //评论数
            share:15538,    //转发数
            view:2117423,    //观看数
          },
          title:"【全员踩点】High到不行",   //标题
          tname:"MAD·AMV",    //视频分区
        },
      ]
    }
  }
}
</script>

<style>

</style>