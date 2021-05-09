<template>
  <div class="data-card">
    <div class="data-wrp">
      <div class="tab header" style="box-shadow:none;height:0;padding:10px 0;">
        <div class="left-block">
          <div class="navs">
            <a class="data-tab current">视频数据</a>
          </div>
        </div>
        <div class="link">
          <span> 每日中午12点更新昨日数据 <i class="fontvt icon-ic_into"></i></span>
        </div>
      </div>
      <div class="section video clearfix" data-reporter-id="32">
        <div class="section-row bcc-row first" style="margin-left: -8px; margin-right: -8px;">
          <bcc-col :title="'粉丝数'" :type="'eight'" :number="total_fans" />
          <bcc-col :title="'视频播放'" :number="total_click" />
          <bcc-col :title="'评论数'" :number="total_reply" />
        </div>
        <div class="section-row bcc-row" style="margin-left: -8px; margin-right: -8px;">
          <bcc-col :title="'点赞数'" :number="total_like" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BccCol from "@/components/right/home/bcc-col";
  export default {
    name: "data-card",
    components: {BccCol},

    data(){
      return{
        total_fans:92,    //粉丝数
        total_click:1112,   //视频播放
        total_reply:19,   //评论数
        total_like:35,    //点赞数
      }
    }

  }
</script>
