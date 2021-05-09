<template>
  <div class="video-card-box">
    <div class="groom-box-m clearfix">
      <groom-module v-for="item in grooms" :key="item.title" :item="item"/>
    </div>
  </div>
</template>

<script>
import GroomModule from "./groom-module";
export default {
  name: "video-card-box",
  components: {GroomModule},
  data() {
    return {
      grooms: [
        {
          title: "【Akie秋绘】曾生为人 人間だった",   //标题
          author: "Akie秋绘",   //作者
          play: 20000,   //播放数量
          preview: "http://i0.hdslb.com/bfs/archive/67f836d0d5fcef71012e0c4597a711991ca5773c.jpg@160w_100h.webp"    //预览图
        },
        {
          title: "【全程高能】自爆直播经历 网红背后揭秘 团队全部解散 遇到职业危机",   //标题
          author: "Akie秋绘",   //作者
          play: 2000,   //播放数量
          preview: "//i0.hdslb.com/bfs/archive/67f836d0d5fcef71012e0c4597a711991ca5773c.jpg@160w_100h.webp"    //预览图
        },
        {
          title: "《1818美妆眼》第一集",   //标题
          author: "Akie秋绘",   //作者
          play: 2000,   //播放数量
          preview: "//i0.hdslb.com/bfs/archive/67f836d0d5fcef71012e0c4597a711991ca5773c.jpg@160w_100h.webp"    //预览图
        },
        {
          title: "【干货】10大品牌的白T硬核测评！不同价位的白T究竟差在哪？白T的尺寸与版型该如何选择？白T的质量和做工该怎样去判断？",   //标题
          author: "Akie秋绘",   //作者
          play: 2000,   //播放数量
          preview: "//i0.hdslb.com/bfs/archive/67f836d0d5fcef71012e0c4597a711991ca5773c.jpg@160w_100h.webp"    //预览图
        },
      ]
    }
  },
}
</script>

<style>

</style>