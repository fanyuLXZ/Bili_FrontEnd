<template>
  <div class="rank-wrap">
    <span class="number" :class="{'on': index < 3}">{{index+1}}</span>
    <div class="preview" v-if="index === 0">
      <div class="pic">
        <a class="link" :href="`//www.bilibili.com/read/cv${info.id}/?from=homepage_1`" target="_blank">
          <van-image
            :src="trimHttp(info.image_urls && info.image_urls[0])"
            :options="{c: 1, q: 100}"
            width="112"
            height="63"
          ></van-image>
        </a>
      </div>
      <div class="txt">
        <a class="link" :href="`//www.bilibili.com/read/cv${info.id}/?from=homepage_1`" target="_blank">
          <p :title="info.title">{{info.title}}</p>
        </a>
        <span>{{$HomeLang['6']}}：{{formatNum(info.score)}}</span>
      </div>
    </div>
    <a class="link" :href="`//www.bilibili.com/read/cv${info.id}/?from=homepage_1`" target="_blank" v-else>
      <p class="title" :title="info.title">{{info.title}}</p>
    </a>
  </div>
</template>

<script>
import { formatNum, trimHttp} from 'g-public/js/utils'

export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      formatNum,
      trimHttp
    }
  }
};
</script>

<style lang="less">
.rank-wrap {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  &:last-child {
    margin-bottom: 0;
  }
  .number {
    font-size: 14px;
    color: #999;
    width: 18px;
    height: 18px;
    text-align: center;
    line-height: 18px;
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    &.on {
      color: #fff;
      background: #00a1d6;
    }
  }
  .link {
    display: inline-block;
  }
  .preview {
    position: relative;
    display: flex;
    width: 290px;
    .pic {
      position: relative;
      .watch-later-video {
        transition: opacity 0.3s;
        opacity: 0;
      }
      &:hover {
        .watch-later-video {
          transition-delay: 0.2s;
          opacity: 1;
        }
      }
    }
    img {
      width: 112px;
      height: 63px;
      border-radius: 2px;
    }
    .txt {
      margin-left: 12px;
      p {
        font-size: 14px;
        height: 40px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        /*! autoprefixer: ignore next */
        -webkit-box-orient: vertical;
        margin-bottom: 5px;
        word-break: break-word !important;
        word-break: break-all;
      }
      span {
        color: #999;
      }
    }
  }

  .title {
    width: 290px;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-word !important;
    word-break: break-all;
  }
}
</style>
