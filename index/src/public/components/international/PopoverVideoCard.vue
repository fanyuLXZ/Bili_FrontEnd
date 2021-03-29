<template>
  <div class="popover-video-card">
    <div class="content">
      <van-image
        :src="info.pic"
        :options="{c: 1, q: 100}"
        width="112"
        height="63">
      </van-image>
      <div class="info">
        <p class="f-title">{{info.title}}</p>
        <p class="subtitle">
          <span class="name">{{info.author}}</span>
          <span class="point">·</span>
          <span class="time">{{time}}</span>
        </p>
      </div>
    </div>
    <div class="count">
      <ul>
        <li>
          <i class="bilifont bili-icon_shipin_bofangshu"></i>
          <span>{{formatNum(info.play)}}</span>
        </li>
        <li>
          <i class="bilifont bili-icon_shipin_danmushu"></i>
          <span>{{formatNum(info.video_review)}}</span>
        </li>
        <li>
          <i class="bilifont bili-icon_shipin_shoucangshu"></i>
          <span>{{formatNum(info.favorites)}}</span>
        </li>
        <li>
          <i class="bilifont bili-icon_shipin_yingbishu"></i>
          <span>{{formatNum(info.coins)}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {formatNum} from 'g-public/js/utils'

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
      formatNum
    }
  },
  computed: {
    // 取年月日
    time() {
      const t = (this.info && this.info.create) || ''
      return t.split(' ')[0]
    }
  },
}
</script>

<style lang="less">
.popover-video-card {
  position: absolute;
  padding: 12px;
  width: 320px;
  background: #FFFFFF;
  box-shadow: 0 1px 6px 0 rgba(0,0,0,0.20);
  border-radius: 2px;
  border-radius: 2px;
  .content {
    display: flex;
    img {
      width: 112px;
      height: 63px;
      border-radius: 2px;
    }
    .info {
      padding-left: 10px;
      .f-title {
        max-height: 40px;
        color: #212121;
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        /*! autoprefixer: ignore next */
        -webkit-box-orient: vertical;
        word-break: break-word !important;
        word-break: break-all;
      }
      .subtitle {
        display: flex;
        color: #999;
        font-size: 12px;
        line-height: 16px;
        span {
          display: inline-block;
        }
        .point {
          margin: 0 5px;
        }
        .name {
          max-width: 86px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .time {
          max-width: 72px;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
  }
  .count {
    padding-top: 12px;
    margin-top: 12px;
    border-top: 1px solid #e7e7e7;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        font-size: 12px;
        color: #999;
        display: flex;
        align-items: center;
        i {
          margin-right: 3px;
        }
      }
    }
  }
}
</style>
