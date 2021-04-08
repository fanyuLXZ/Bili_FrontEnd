<template>
  <div class="video-card-common ex-card-common" :data-loc-id="locId">
    <div class="card-pic">
      <a v-adReport="{data: adData, locId: locId, noReport: hide }" :href="`//www.bilibili.com/video/${bvid}`" target="_blank" v-van-danmu="aid" v-van-framepreview="aid">
        <img :src="pic" width="206" height="116">
        <div class="count">
          <div class="left"></div>
          <div class="right">
            <span v-if="isClient">{{ duration }}</span>
          </div>
        </div>
        <p class="ex-title" :title="title">
          <span class="gg-icon" v-if="info.is_ad && isClient">{{$HomeLang['1']}}</span>
          <span>{{ title }}</span>
        </p>
      </a>
      <van-watch-later v-if="info.aid && isClient" class="watch-later-video" skin="black" :aid="info.aid" :isLogin="isLogin"></van-watch-later>
    </div>
    <a :href="`//space.bilibili.com/${info.owner && info.owner.mid}/`" target="_blank" class="ex-up" v-if="info.aid && isClient">
      <i class="bilifont bili-icon_xinxi_UPzhu"></i>{{ info.owner && info.owner.name }}
    </a>
    <!-- 广告分为站内和站外广告，站内广告是会显示up主名字的 -->
    <p v-if="!info.owner && info.is_ad && isClient" class="adver_name">{{ info.adver_name }}</p>
  </div>
</template>

<script>
import {formatDuration, formatNum, trimHttp} from 'g-public/js/utils'
// import { addClass } from '../../public/js/utils';

export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    adData: {
      type: Object,
      default: () => {
        return {}
      }
    },
    locId: {
      type: Number,
      default: 0
    },
    isLogin: {
      type: Boolean,
      default: false
    },
    index:{
      default:0
    }
  },
  data() {
    return {
      trimHttp: trimHttp,
      aid:0,
      bvid:0,
      pic:"",
      title:"",
      isClient: false,
      hide: false
    }
  },
  created(){
    this.aid = this.info.aid
    this.bvid = this.info.bvid
    this.pic = trimHttp(`${this.info.pic}@412w_232h_1c`)
    this.title = this.info.title
},
  computed: {
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
      return formatNum(this.info.stat && this.info.stat.view, true)
    },
    like() {
      return formatNum(this.info.stat && this.info.stat.like, true)
    },
    duration() {
      return this.info.duration ? formatDuration(this.info.duration) : ''
    }
  },
  beforeMount(){
    // 广告位 窄屏显示4个 超过不上报
    if(document.documentElement.clientWidth <= 1654 && this.index > 3) {
      this.hide = true
    }
  },
  mounted(){
    this.isClient = true
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
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=);
      background-repeat: no-repeat;
      background-position: center;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 48px;
        bottom: 0;
        left: 0;
        border-radius: 2px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=);
        background-repeat: repeat-x;
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
          background-image:url(//s1.hdslb.com/bfs/static/jinkela/international-home/assets/icon_gold.png);
        }
        &.silver {
          background-image: url(//s1.hdslb.com/bfs/static/jinkela/international-home/assets/icon_silver.png);
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
  .ex-title {
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
  }
  .ex-up {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #999;
    line-height: 16px;
    margin-top: 60px;
    &:hover{
      color: #00A1D6;
    }
  }
  .adver_name {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #999;
    line-height: 16px;
    margin-top: 60px;
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
  }
}
</style>
