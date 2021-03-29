import Vue from 'vue'
import { customReport } from './utils'

/**
 * @description 鼠标交互动画
 * @param step 间隔
 * @param max 最大帧数
 * @param point 重复播放点
 * @param target dom元素目标 如果不指定就是当前绑定元素
 * @param direction 图片排列方式 (纵向y、横向x)
 * @param speed 播放速度
 */
Vue.directive('mouse-movieclip', {
  bind(el, binding) {
    const d = binding.value
    let pos = 0
    let c = 0
    let isOver = false
    const target = d.target ? $(el).find(d.target) : $(el)
    const dir = d.direction ? d.direction : 'x'
    const speed = d.speed ? d.speed : 80
    el.addEventListener('mouseenter', ()=>{
      isOver = true
      c = 0
      clearInterval(el.timer)
      let obj = {}
      el.timer = setInterval(()=>{
        pos = -c * d.step
        if (dir === 'x') {
          obj = { 'background-position-x': pos }
        }
        if (dir === 'y') {
          obj = { 'background-position-y': pos }
        }
        $(target).css(obj)
        if (isOver) {
          c ++
          if (c > d.max-1) c = d.point
        } else {
          c --
          if (c<0) {
            clearInterval(el.timer)
          }
        }
      }, speed)
    })
    el.addEventListener('mouseleave', ()=>{
      isOver = false
    })
  },
})

Vue.directive('longClick', {
  bind: (el, binding) => {
    el.addEventListener('mousedown', function() {
      el.isPressing = true
      const method = binding.value
      el.timer = setTimeout(() => {
        if (el.isPressing) {
          method()
        }
      }, binding.arg)
    })
  },
})

Vue.directive('longClickLeave', {
  bind: (el, binding) => {
    el.addEventListener('mouseup', function() {
      if (el.isPressing) {
        clearTimeout(el.timer)
        el.isPressing = false
        binding.value()
      }
    })
    el.addEventListener('mouseleave', function() {
      if (el.isPressing) {
        clearTimeout(el.timer)
        el.isPressing = false
        binding.value()
      }
    })
  },
})


function report(param) {
  if (typeof param === 'string') {
    customReport(param)
  } else {
    customReport(param.name, param.ops)
  }
}

/**
 * 埋点上报指令
 * v-report:click="'test'"
 * v-report:click="{name: 'test', ops: '123'}"
 * v-report:mouseover="123'"
 */
Vue.directive('report', {
  bind: function(el, binding) {
    el.addEventListener(binding.arg, function() {
      const value = binding.value
      if (value instanceof Array) {
        value.forEach(i => report(i))
      } else {
        report(value)
      }
      if (binding.modifiers.self) {
        window.reportObserver.forceCommit()
      }
    })
  },
})

Vue.directive('focus', {
  inserted: function(el) {
    el.focus()
  },
})
