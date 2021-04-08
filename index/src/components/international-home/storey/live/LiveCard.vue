<template>
  <div class="live-card" @click="reportClick" v-livelazyload="handleShow">
    <a :href="`//live.bilibili.com${info.link}`" target="_blank">
      <div class="pic" @mouseenter="showCover = true" @mouseleave="showCover = false">
        <van-image 
          :src="info.cover"
          :options="{c: 1, q: 100}"
          width="206" 
          height="116">
        </van-image>
        <p class="count"><i class="bilifont bili-icon_xinxi_renqi"></i>{{ formatNum(info.online) }}</p>
        <transition name="slide-fade">
          <div class="mask" :style="`background-image: url(${trimHttp(info.keyframe)})`" v-if="showCover"></div>
        </transition>
      </div>
      <div class="up">
        <div class="up-cover">
          <van-image 
            class="face"
            :src="info.face"
            :options="{c: 1, q: 100}"
            width="36" 
            height="36">
          </van-image>
          <svg class="svg-icon vip-icon" aria-hidden="true" v-if="info.verify && info.verify.type !== -1">
            <use v-if="info.verify.type === 1" :xlink:href="'#bili-ic_gerenzhongxin_qiyerenzhenghuibiao'" ></use>
            <use v-if="info.verify.type === 0" :xlink:href="'#bili-ic_gerenzhongxin_gerenrenzhenghuibiao'"></use>
          </svg>
        </div>
        <div class="txt">
          <p class="name">{{info.uname}}</p>
          <p class="desc" :title="info.title">{{info.title}}</p>
          <p class="tag">{{info.area_v2_name}}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { trimHttp, formatNum, customReport } from 'g-public/js/utils'
import axios from 'g-public/js/axios/caxios'

const LIVE_SOURCE = -99998

export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    report: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 0
    },
    rindex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      formatNum,
      trimHttp,
      showCover: false
    }
  },
  methods: {
    handleShow() {
      // 上报到数据平台
      customReport('live_card_show', {
        position: this.index + 1,
        room_id: this.info.roomid,
        up_id: this.info.uid,
        area_id: this.info.area_v2_parent_id,
        subarea_id: this.info.area_v2_id,
        online: this.info.online,
        session_id: this.info.session_id,
        source: LIVE_SOURCE,
        launch_id: this.info.group_id,
        special_id: this.info.special_id,
        query_id: LIVE_SOURCE,
        refresh: this.rindex,
      })
      window.reportObserver && window.reportObserver.forceCommit && window.reportObserver.forceCommit()

      // 接口曝光侧上报
      if(!this.report) return
      if(this.info.show_callback) {
        try {
          axios({url: this.info.show_callback})
          /* eslint-disable */
        } catch (error) {
        }
      }
    },
    // 接口点击侧上报
    reportClick() {
      if(this.info.click_callback) {
        try {
          axios({url: this.info.click_callback})
          /* eslint-disable */
        } catch (error) {
        }
      }
      
    }
  },
}
</script>

<style lang="less">
.live-card {
  width: 206px;
  .pic {
    position: relative;
    display: block;
    cursor: pointer;
    margin-bottom: 10px;
    width: 100%;
    height: 116px;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 48px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=);
      background-repeat: repeat-x;
      bottom: 0;
      left: 0;
      border-radius: 2px;
    }

    img{
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
    .count {
      position: absolute;
      bottom: 0;
      left: 0;
      color: #fff;
      font-size: 12px;
      padding: 6px 8px;
      height: 28px;
      display: flex;
      align-items: center;
      line-height: 16px;
      .bilifont {
        margin-right: 4px;
      }
    }
    .mask{
      // opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 2px;
      transition: opacity .3s;
      background-repeat: no-repeat;
      background-color: #000;
      background-position: center;
      background-size: contain;
    }
  }
  .up {
    display: block;
    display: flex;
    justify-content: space-between;
    line-height: 16px;
    .up-cover {
      position: relative;

      .face {
        width: 36px;
        height: 36px;
        display: inline-block;
        border-radius: 50%;
        background: #f7f7f7;
      }

      .vip-icon {
        position: absolute;
        right: -4px;
        top: 23px;
        width: 15px;
        height: 15px;
      }
    }
    .txt {
      width: 158px;
      p{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height:20px;
        // margin-bottom: 2px;
        
      }
      .name {
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
      }
      .desc {
        font-size: 12px;
        color: #505050;
        line-height: 18px;
        margin-top: 2px;
      }
      .tag {
        font-size: 12px;
        line-height: 16px;
        color: #999;
        margin-top: 8px;
      }
    }
  }

  .slide-fade-enter-active, .slide-fade-leave-active{
    transition: all .3s;
  }
  .slide-fade-enter, .slide-fade-leave-to{
    opacity: 0;
  }
}
</style>


