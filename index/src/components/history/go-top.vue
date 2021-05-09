<template>
  <!-- 返回顶部 start -->
  <div class="go-top-m" @click="fly">
    <div class="go-top icon" title="返回顶部"></div>
  </div>
  <!-- 返回顶部 end -->
</template>
<script>
let interval = null
import $ from "jquery";

export default {

  name: 'go-top',
  data() {
    return {
      keyframes: 0,
      isVisible: false,
      isClick: false,
      lastTrace: 0, // 上一次记录的位置
    }
  },
  mounted() {
    const winH = $(window).height()
    const toTop = $('.go-top-m')
    const self = this

    $(window)
        .off('scroll.toTop')
        .on('scroll.toTop', function () {
          const top = $(window).scrollTop()
          const lastTrace = self.lastTrace

          if (top - lastTrace > 0) {
            // 向下滑
            // 清除各种定时器
            if (self.isClick) {
              toTop.removeClass('transition')
              self.$nextTick(() => {
                toTop.removeClass('fly')
              })
              clearInterval(interval)
            }

            // 如果达到了一半的时候，就把小飞机展示出来
            if (top >= winH / 2) {
              !self.isVisible && toTop.stop().fadeIn(100)
              self.isVisible = true
              self.keyframes = 0
              toTop.css('background-position-x', -40 + 'px')
            }
            self.isClick = false
          } else {
            // 向上滑
            if (top < winH / 2) {
              self.isVisible && toTop.stop().fadeOut(100)
              self.isVisible = false
            }
          }

          self.lastTrace = top
        })
  },
  methods: {
    fly() {
      if (this.isClick) return
      const self = this
      const toTop = $('.go-top-m')

      this.isClick = true

      interval = setInterval(() => {
        self.keyframes++
        toTop.css({
          'background-position-x': -(self.keyframes * 143 + 40) + 'px',
        })
        if (self.keyframes === 5) {
          toTop.addClass('transition')
          self.$nextTick(() => {
            toTop.addClass('fly')
          })
        }
        if (self.keyframes === 6) {
          self.keyframes = 0
          clearInterval(interval)
          $('html, body').stop().animate({
            scrollTop: 0,
          }, 'fast')
        }
      }, 50)
    },
  },
}
</script>
<style lang="less">
//@import '../../../public/less/basic.less';
.go-top-m {
  position: fixed;
  display: none;
  bottom: 100px;
  right: 20px;
  transform: translateY(0);
  width: 62px;
  height: 85px;
  margin-left: 602px;
  cursor: pointer;
  background-position: -40px -44px;

  &.transition {
    transition: transform ease-in .3s;
  }

  &.fly {
    transform: translateY(-1000px);
  }
}

@media ( min-width: 1420px) {
  .to-top {
    margin-left: 712px;
  }
}
</style>
