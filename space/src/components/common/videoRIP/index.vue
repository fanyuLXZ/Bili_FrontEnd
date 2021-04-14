<template>
  <a :href="activeVideoStates.indexOf(state) > -1 ? link : 'javascript:;'"
    class="cover"
    :class="[
      'cover-' + size,
      {
        'disabled': this.favState ? this.favState === 1 : this.activeVideoStates.indexOf(this.state) === -1
      }
    ]"
    :target="blankVideo() ? '' : '_blank'">
    <slot name="content"></slot>
    <div class="disabled-cover"
      :class="{'animate': isHover}">
      <div class="candle"
        ref="candle"></div>
      <p>{{ favType === 2 ? '视频' : '音频'}}已失效</p>
      <div v-if="favDelete === 1" class="delete-from">已被UP主删除</div>
    </div>
  </a>
</template>
<script>
import { activeVideoStates } from '@/constants'
export default {
  name: 'videoRip',
  data() {
    return {
      activeVideoStates,
      timer1: null,
      timer2: null,
      timer3: null,

      isHover: false,
      disabledFrames: 0, // 失效视频帧数
    }
  },
  props: {
    // 当前视频的链接
    link: {
      type: String,
      default: 'javascript:;',
      required: true,
    },
    // 当前视频的状态
    state: {
      type: Number,
      default: 0, // 0 1 -6 是唯三个能看的视频，其他的都死啦死啦
      required: true,
    },
    // 当前视频的状态
    favState: {
      type: Number,
      default: 0, // 0 是唯一个能看的视频，其他的都死啦死啦
      required: false,
    },
    size: {
      type: String,
      default: 'normal', // big normal 分别对应置顶视频、视频item
      validator: value => [ 'big', 'normal' ].indexOf(value) > -1,
      required: false,
    },
    favType: {
      type: Number,
      default: 2,
      required: false,
    },
    favDelete: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  methods: {
    hoverVideo() {
      const candle = this.$refs.candle
      if (!candle) return
      const _state = this.favState ? this.favState === 1 : this.activeVideoStates.indexOf(this.state) === -1
      if (_state) {
        this.timer1 = setTimeout(() => {
          this.isHover = true
          this.timer2 = setInterval(() => {
            const frame = this.disabledFrames
            if (frame === 0) {
              candle.style.visibility = 'visible'
            }
            candle.style.backgroundPositionX = `${-50 * frame}px`
            this.disabledFrames++
            if (frame === 4) {
              clearInterval(this.timer2)
            }
          }, 80)
          this.timer3 = setInterval(() => {
            const frame = this.disabledFrames
            if (frame === 9) {
              this.disabledFrames = 5
            }
            candle.style.backgroundPositionX = `${-50 * frame}px`
            this.disabledFrames++
          }, 100)
        }, 200)
      }
    },
    leaveVideo() {
      clearTimeout(this.timer1)
      clearInterval(this.timer2)
      clearInterval(this.timer3)

      const candle = this.$refs.candle
      candle.style.backgroundPositionX = '0px'
      candle.style.visibility = 'hidden'
      this.disabledFrames = 0
      this.isHover = false
    },
    blankVideo() {
      if (this.favState) {
        return this.favState === 1
      } else {
        return this.activeVideoStates.indexOf(this.state) === -1
      }
    },
  },
}
</script>
<style lang="less"
  scoped>
/*还有一部分样式代码在 public/less/common.less 里面*/

@import '../../../public/less/basic.less';
.cover {
  &.cover-big {
    .candle {
      top: 15%;
    }
  }
  &.cover-normal {
    .candle {
      top: 0;
    }
  }
}
.disabled-cover {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  text-align: center;
  font-size: 14px;
  cursor: default;
  background: #e5e9ef;
  color: #99a2aa !important;
  .candle {
    position: absolute;
    left: 50%;
    width: 50px;
    height: 55px;
    margin-left: -25px;
    .bgimg('disabled-candle-1.png');
    background-position: 0 0;
    visibility: hidden;
  }
  p {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 20px;
    line-height: 20px;
    margin-top: -10px;
  }
  .delete-from{
    background: rgba(0,0,0,.5);
    border-radius: 5px 0 0 0;
    color: #fff;
    line-height: 20px;
    transition: top .2s ease;
    padding: 0 6px;
    position: absolute;
    right: 0;
    bottom: 0;
    font-family: HYQiHei-EZS;
    font-size: 12px;
    color: #FFFFFF;
    &::before{
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      background: url('../../../public/img/video-delete.svg') no-repeat;
      margin-right: 3px;
      position: relative;
      top: 1px;
    }
  }
}

</style>
