<template>
  <div class="video-card-reco">
    <div class="info-box">
      <a
        :href="`//www.bilibili.org/video/${info.bvid}?spm_id_from=${spmId}`"
        target="_blank"
        @click="$emit('click')"
      >
        <van-image 
          :src="info.pic"
          :alt="info.title"
          :options="{c: 1}"
          width="412"
          height="232">
        </van-image>
        <div class="info">
          <p class="title" :title="info.title">{{info.title}}</p>
          <p class="up"><i class="bilifont bili-icon_xinxi_UPzhu"></i>{{info.owner && info.owner.name}}</p>
          <p class="play">{{formatNum(info.stat && info.stat.view)}}{{$HomeLang['27']}}</p>
        </div>
      </a>
    </div>
    <van-watch-later class="watch-later-video" skin="black" :aid="Number(info.id)" :isLogin="isLogin"></van-watch-later>
  </div>
</template>

<script>
import { formatNum } from '../../js/utils'
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
    spmId: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      formatNum
    }
  }
}
</script>

<style lang="less">
.video-card-reco {
  position: relative;
  width: 206px;
  height: 116px;
  .info-box {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    overflow: hidden;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-position: center;
    img {
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
    &::before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      border-radius: 2px;
      opacity: 0;
      transition: opacity .2s;
    }
    .info {
      position: absolute;
      z-index: 2;
      width: 100%;
      top: 64px;
      left: 0;
      transition: top .2s;
      padding: 26px 10px 10px 10px;
      .title {
        font-size: 14px;
        line-height: 18px;
        height: 18px;
        color: #fff;
        margin-bottom: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        // display: -webkit-box;
        // -webkit-line-clamp: 2;
        // display: flex;
        //align-items: flex-end;
        font-weight: 500;
      }
      .up,.play {
        font-size: 12px;
        color: #e0e0e0;
        margin-bottom: 3px;
        .bilifont {
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }
  .watch-later-video{
    transition: opacity .2s;
    opacity: 0;
  }
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=);
    background-repeat: repeat-x;
    border-radius: 0 0 2px 2px;
  }
  &:hover{
    .watch-later-video{
      transition-delay: .2s;
      opacity: 1;
    }
    .info-box {
      &::before {
        opacity: 1;
      }
      .info {
        top: 0;
        .title {
          height: 36px;
          white-space: normal;
        }
      }
    }
  }
}
</style>


