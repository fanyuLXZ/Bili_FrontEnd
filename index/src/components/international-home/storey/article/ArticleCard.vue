<template>
  <div class="article-card">
    <a class="pic" :href="`//www.bilibili.com/read/cv${info.id}/?from=homepage_0`" target="_blank">
      <van-image 
        :src="info.image_urls && info.image_urls[0]"
        :options="{c: 1, q: 100}"
        width="120" 
        height="90">
      </van-image>
    </a>
    <div class="r-con">
      <a :href="`//www.bilibili.com/read/cv${info.id}/?from=homepage_0`" class="title" :title="info.title">{{info.title}}</a>
      <a :href="`//space.bilibili.com/${info.author && info.author.mid}`" class="up"><i class="bilifont bili-icon_xinxi_UPzhu"></i>{{info.author && info.author.name}}</a>
      <p class="count">
        <span><i class="bilifont bili-icon_xinxi_yuedushu"></i>{{formatNum(info.stats && info.stats.view)}}</span>
        <span><i class="bilifont bili-icon_xinxi_pinglunshu"></i>{{formatNum(info.stats && info.stats.reply)}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { formatNum, trimHttp} from 'g-public/js/utils'

export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      formatNum,
      trimHttp
    }
  }
}
</script>

<style lang="less">
.article-card {
  display: flex;
  width: 623px;
  height: 90px;
  .pic {
    display: block;
    width: 120px;
    height: 90px;
    margin-right: 16px;
    img{
      width: 120px;
      height: 90px;
      border-radius: 2px;
    }
  }
  .r-con {
    .title {
      display: block;
      font-size: 14px;
      line-height: 20px;
      margin: 0 0 8px 0;
      height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      /*! autoprefixer: ignore next */
      -webkit-box-orient: vertical;
      font-weight: 500;
    }
    .up {
      color: #999;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      &:hover {
        color: #00a1d6;
      }
    }
    .count {
      color: #999;
      display: flex;
      span{
        display: flex;
        width: 80px;
        align-items: center;
      }
    }
    .bilifont {
      margin-right: 4px;
    }
  }
}
</style>

