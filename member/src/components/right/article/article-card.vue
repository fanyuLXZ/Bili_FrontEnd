<template>
  <div class="article-card clearfix v2">
    <a target="_blank" href="//www.bilibili.com/video/BV1s7411f7j8/" class="cover-wrp">
      <img src="//i1.hdslb.com/bfs/archive/a39ec5ef0b13b0c932c1987994e2313c6ed51de6.jpg@320w_200h" alt="【重明鸟攻略】全人物+全拼图+超详细文字说明+剧情加速跳过!（已完结）" class="">
      <div class="duration">242:27</div>
      <div class="tag-wrapper"></div>
    </a>
    <div class="meta-wrp">
      <div class="meta-title">
        <a target="_blank" href="//www.bilibili.com/video/BV1s7411f7j8/" class="name ellipsis">【重明鸟攻略】全人物+全拼图+超详细文字说明+剧情加速跳过!（已完结）</a>
      </div>
      <div class="meta-status">
        <div><span class="pubdate is-success">20-03-17 21:13:08</span></div>
      </div>
      <div class="meta-view">
        <a class="bili-btn">
          <i class="bcc-iconfont bcc-icon-Mediumx" style="font-size: 16px; color: rgb(80, 80, 80);"></i>
          编辑
        </a>
        <a href="/platform/upload-manager/article/data/BV1s7411f7j8" class="bili-btn">
          <i class="bcc-iconfont bcc-icon-icon_list_ranking_x1" style="font-size: 16px; color: rgb(80, 80, 80);"></i>
          数据
        </a>
        <a class="more-btn">
          <i class="bcc-iconfont bcc-icon-icon_list_more_x" style="font-size: 16px; color: rgb(80, 80, 80);"></i>
        </a>
      </div>
      <div class="meta-footer clearfix">
        <div title="播放" class="click view-stat">
          <i class="bcc-iconfont bcc-icon-ic_Playbackx" style="font-size: 16px; color: rgb(153, 153, 153);"></i>
          <span class="icon-text click-text">838</span>
        </div>
        <div title="评论" class="comment view-stat">
          <i class="bcc-iconfont bcc-icon-icon_commentx" style="font-size: 16px; color: rgb(153, 153, 153);"></i>
          <span class="icon-text">12</span>
        </div>
        <div title="硬币" class="coin view-stat">
          <i class="bcc-iconfont bcc-icon-icon_action_reward_n_x" style="font-size: 16px; color: rgb(153, 153, 153);"></i>
          <span class="icon-text">26</span>
        </div>
        <div title="收藏" class="favorite view-stat">
          <i class="bcc-iconfont bcc-icon-icon_action_collection_n_x" style="font-size: 16px; color: rgb(153, 153, 153);"></i>
          <span class="icon-text">28</span>
        </div>
        <div title="点赞" class="like view-stat">
          <i class="bcc-iconfont bcc-icon-icon_action_recommend_p_" style="font-size: 16px; color: rgb(153, 153, 153);"></i>
          <span class="icon-text">23</span>
        </div>
      </div>
    </div>
    <select-box />
  </div>
</template>

<script>
import SelectBox from "@/components/right/article/select-box";
export default {
  name: "article-card",
  components: {SelectBox},
  data(){
    return{
      page:{
        pn:1,
        ps:10,
        count:1
      },
      arc_audits:[
        {
          Archive:{
            bvid:"BV1s7411f7j8",    //视频id
            mid:26119890,   //作者id
            title:"xxxxxxxxxxxxxxxxxxxxxx",   //视频标题
            cover:"1.ipg",    //视频预览图
            tag:"解谜,单机,游戏攻略,重明鸟",   //视频分类
            desc:"xxxxxxxxxxxxxxxx",    //视频文章
            ptime:"",   //发表时间
            stat:{
              aid:96585166,    //视频id
              view:838,   //观看数
              reply:12,   //评论
              favorite:28,    //收藏
              coin:26,   //投币
              like:23,    //点赞
            }
          }
        }
      ]
    }
  }

}
</script>
