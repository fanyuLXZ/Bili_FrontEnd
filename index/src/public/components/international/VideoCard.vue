<template>
  <div class="video-card-common">
    <div class="card-pic" :class="isArchive && 'card-pic-hover'">
      <a :href="outlink" target="_blank" v-van-danmu="isArchive ? +info.aid : info.aid" v-van-framepreview="isArchive ? +info.aid : info.aid">
        <van-image 
          :src="info.pic"
          :options="{c: 1, q: 100}"
          width="206" 
          height="116">
        </van-image>
        <div class="count">
          <div class="left">
            <span><i class="bilifont" :class="isArchive ? 'bili-icon_shipin_bofangshu' : 'bili-icon_xinxi_yuedushu'"></i>{{ view }}</span>
            <span><i class="bilifont bili-icon_shipin_dianzanshu"></i>{{ like }}</span>
          </div>
          <div v-if="isArchive" class="right">
            <span>{{ duration }}</span>
          </div>
        </div>
        <i v-if="isArchive" class="crown" :class="crown"></i>
      </a>
      <van-watch-later v-if="isArchive" v-show="info.aid" class="watch-later-video" skin="black" :aid="+info.aid" :isLogin="isLogin"></van-watch-later>
    </div>
    <a :href="outlink" target="_blank" class="title" :title="info.title">
      <span v-if="!isArchive">{{ typeTitle }}</span>
      {{ info.title }}
    </a>
    <a :href="`//space.bilibili.com/${info.owner && info.owner.mid}/`" target="_blank" class="up" v-if="showUp">
      <i class="bilifont bili-icon_xinxi_UPzhu"></i>{{ info.owner && info.owner.name }}
    </a>
  </div>
</template>

<script>
import {formatDuration, formatNum} from 'g-public/js/utils'

export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    isLogin: {
      type: Boolean,
      default: false
    },
    showUp: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    isArchive () {
      return (this.type !== 'article' && this.type !== 'dynamic')
    },
    typeTitle () {
      if (this.type === 'article') {
        return '专栏'
      } else if (this.type === 'dynamic') {
        return '动态'
      }
    },
    crown() {
      const num = this.info.stat && this.info.stat.coin || 0
      if (num >= 2000 && num < 10000) {
        return 'silver'
      } else if (num >= 10000) {
        return 'gold'
      } else {
        return ''
      }
    },
    view() {
      return formatNum(this.info.stat && this.info.stat.view)
    },
    like() {
      return formatNum(this.info.stat && this.info.stat.like)
    },
    duration() {
      return formatDuration(this.info.duration)
    },
    outlink () {
      if (this.type === 'article') {
        return '//www.bilibili.com/read/cv' + this.info.id
      } else if (this.type === 'dynamic') {
        return '//t.bilibili.com/' + this.info.id
      }
      return `//www.bilibili.com/video/${this.info.bvid}`
    }
  }
}
</script>

<style lang="less">
.video-card-common {
  width: 206px;
  // height: 186px;
  cursor: pointer;
  .card-pic {
    position: relative;
    width: 100%;
    height: 116px;
    a {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      background-image: url('~g-public/images/icon/img_loading.png');
      background-repeat: no-repeat;
      background-position: center;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 48px;
        background-image: url(~g-public/images/linear.png);
        background-repeat: repeat-x;
        bottom: 0;
        left: 0;
        border-radius: 2px;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 2px;
      }
      .count {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 6px 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        line-height: 16px;
        // text-shadow: 0 1px 1px rgba(0,0,0,0.24);
        .left {
          display: flex;
          align-items: center;
          span {
            vertical-align: middle;
            display: flex;
            align-items: center;
            &:first-child{
              margin-right: 10px;
            }
          }
        }
      }
      .crown {
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 24px;
        background-size: contain;
        &.gold {
          background-image: url('~g-public/images/icon_gold.png');
        }
        &.silver {
          background-image: url('~g-public/images/icon_silver.png');
        }
      }
    }
    
    .watch-later-video{
      transition: opacity .3s;
      opacity: 0;
    }
    &:hover{
      .watch-later-video{
        transition-delay: .2s;
        opacity: 1;
      }
    }
  }
  .title {
    display: block;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0 8px 0;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /*! autoprefixer: ignore next */
    -webkit-box-orient: vertical;
    font-weight: 500;
    padding-right: 12px;
    & > span {
      width: 32px;
      text-align: center;
      line-height: 16px;
      background: #fb7299;
      border-radius: 2px;
      display: inline-block;
      color: #fff;
      font-size: 12px;
    }
  }
  .up {
    display: flex;
    // align-items: center;
    font-size: 12px;
    color: #999;
    line-height: 16px;
    &:hover{
      color: #00A1D6;
    }
  }
  .bilifont {
    margin-right: 4px;
    vertical-align: middle;
  }
  .gg-icon {
    display: inline-block;
    font-size: 12px;
    border-radius: 2px;
    margin-right: 8px;
    width: 30px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border:1px solid #b2b2b2;
    color: #b2b2b2;
    font-weight: normal;
  }
}
</style>


