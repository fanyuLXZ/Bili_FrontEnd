<template>
  <div class="rank-wrap" @mouseenter="onEnter" @mouseleave="onLeave">
    <span class="number" :class="{'on': index < 3}">{{index+1}}</span>
    <div class="preview" v-if="index === 0">
      <div class="pic">
        <a class="link" :href="`//www.bilibili.com/video/${info.bvid}`" target="_blank">
          <van-image
            :src="info.pic"
            :alt="info.title"
            :options="{c: 1, q: 100}"
            width="112"
            height="63"
          ></van-image>
        </a>
        <van-watch-later class="watch-later-video" skin="black" :aid="Number(info.aid)"></van-watch-later>
      </div>
      <div class="txt">
        <a class="link" :href="`//www.bilibili.com/video/${info.bvid}`" target="_blank">
          <p :title="info.title">{{info.title}}</p>
        </a>
        <span>{{$HomeLang['6']}}：{{formatNum(info.pts)}}</span>
      </div>
    </div>
    <a class="link" :href="`//www.bilibili.com/video/${info.bvid}`" target="_blank" v-else>
      <p class="title" :title="info.title">{{info.title}}</p>
    </a>
    <transition name="pvc-fade">
      <PopoverVideoCard class="pvc" v-show="show" :info="info" />
    </transition>
  </div>
</template>

<script>
import {formatNum} from 'g-public/js/utils'
import PopoverVideoCard from 'g-public/components/international/PopoverVideoCard'

export default {
  components: {
    PopoverVideoCard
  },
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
      show: false,
      timeout: null
    }
  },
  methods: {
    onEnter() {
      this.clear()
      this.timeout = setTimeout(() => {
        this.show = true
        this.clear()
      }, 300)
    },
    onLeave() {
      this.show = false
      this.clear()
    },
    clear() {
      if(this.timeout) {
        clearTimeout(this.timeout)
      }
    }
  }
}
</script>

<style lang="less">
.rank-wrap {
  position: relative;
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
    font-weight: 500;
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
        word-break: break-all;
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
      }
      span {
        color: #999;
        white-space: nowrap;
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
    font-weight: 500;
  }
  .pvc {
    top: -138px;
    z-index: 200;
  }
}

.pvc-fade-enter-active {
  transition: all .2s ease;
}
.pvc-fade-leave-active {
  transition: all .2s ease;
}
.pvc-fade-enter, .pvc-fade-leave-to{
  transform: translateY(5px);
  opacity: 0;
}
</style>
