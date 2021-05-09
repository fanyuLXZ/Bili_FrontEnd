<template>
  <div class="storey-box clearfix">
    <div class="spread-module" v-for="item in spreads" :key="item.id">
      <a href="//www.bilibili.com/video/BV1Hv41177aX" target="_blank">
      <div class="pic">
        <div class="lazy-img">
          <img :alt="item.title" :src="item.preview">
        </div><!---->
        <div class="cover-preview-module"><!---->
          <div class="progress-bar"><span style="width: 0%;"></span></div>
        </div>
        <div class="mask-video"></div>
        <div class="danmu-module"></div>
        <div class="watch-later-trigger w-later"></div>
      </div>
      <p title="【原神】胡桃手办自制，全流程介绍，看完就会" class="t">{{ item.title }}</p><!---->
    </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "storey-box",

  data(){
    return{
      spreads:[
        {
          id:1,    //视频id
          preview:"//i0.hdslb.com/bfs/archive/c061c61d47e5711eaf52f30a55891d4e927bbf50.jpg@160w_100h.webp",   //预览图
          title:"【原神】胡桃手办自制，全流程介绍，看完就会",    //标题
        },
        {
          id:2,    //视频id
          preview:"//i0.hdslb.com/bfs/archive/c061c61d47e5711eaf52f30a55891d4e927bbf50.jpg@160w_100h.webp",   //预览图
          title:"【Jordan定格】进击的巨人｜艾尔文、里维、米卡莎、艾伦照镜子的各种反应",    //标题
        },
        {
          id:3,    //视频id
          preview:"//i0.hdslb.com/bfs/archive/c061c61d47e5711eaf52f30a55891d4e927bbf50.jpg@160w_100h.webp",   //预览图
          title:"【崩3手办自制系列】徒手捏一只小识！",    //标题
        },{
          id:4,    //视频id
          preview:"//i0.hdslb.com/bfs/archive/c061c61d47e5711eaf52f30a55891d4e927bbf50.jpg@160w_100h.webp",   //预览图
          title:"【原神·魈】自制手办",    //标题
        },
      ]
    }
  },
}
</script>

<style>

</style>