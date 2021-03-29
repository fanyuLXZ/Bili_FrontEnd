<template>
  <div class="video-card-reco">
    <div class="info-box">
      <a
        :href="`//www.bilibili.com/video/${info.bvid}?spm_id_from=${spmId}`"
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
import { formatNum } from 'g-public/js/utils'
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
    background-image: url('~g-public/images/icon/img_loading.png');
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
    background-image: url(~g-public/images/linear.png);
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


