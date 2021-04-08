<template>
  <div class="time-line-card">
    <a class="pic" :href="`//www.bilibili.com/bangumi/play/ss${info.season_id}/`" target="_blank" :title="info.title" 
    v-van-report:ogv-post="{season_id: info.season_id, businesstype: type, ord_id: index, title: info.title, url: `//www.bilibili.com/bangumi/play/ss${info.season_id}/`}">
      <van-image 
        :src="info.square_cover"
        :alt="info.title"
        :options="{c: 1, q: 100}"
        width="70" 
        height="70">
      </van-image>
    </a>
    <div class="txt">
      <a class="ss" :href="`//www.bilibili.com/bangumi/play/ss${info.season_id}/`" target="_blank" :title="info.title" 
      v-van-report:ogv-title="{season_id: info.season_id, businesstype: type, ord_id: index, title: info.title, url: `//www.bilibili.com/bangumi/play/ss${info.season_id}/`}">{{info.title}}</a>
      <p class="update">
				<a v-if="info.delay === 1" :href="`//www.bilibili.com/bangumi/play/ss${info.season_id}/`" target="_blank">{{info.delay_reason}}</a>
				<a v-else :class="{'published': info.published === 1}" :href="`//www.bilibili.com/bangumi/play/${info.published === 1 ? 'ep' + info.episode_id : 'ss' + info.season_id}/`" target="_blank"
        v-van-report:ogv-ep="{season_id: info.season_id, businesstype: type, ep_id: info.episode_id, ord_id: index, title: info.title, url: `//www.bilibili.com/bangumi/play/${info.published === 1 ? 'ep' + info.episode_id : 'ss' + info.season_id}/`}">{{info.pub_index}}</a>
			</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    type: {
      type: Number,
      default: 1
    },
    index: {
      type: Number
    }
  },
}
</script>

<style lang="less">
.time-line-card {
  width: 227px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  .pic {
    margin-right: 12px;
    img {
      width: 70px;
      height: 70px;
      border-radius: 2px;
    }
  }
  .txt {
    width: 152px;
    font-weight: 500;
    .ss {
      display: inline-block;
      font-size: 14px;
      height: 37px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      /*! autoprefixer: ignore next */
      -webkit-box-orient: vertical;
      margin: 2px 0 12px 0;
    }
    .update{
      a{
        width: 100%;
        color: #999;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: normal;
      }
      .published{
        color: #00a1d6;
      }
    }
  }
}
</style>


