
import { checkInViewV2, getScrollParent } from '../utils'
import { throttle } from '../utils'

export default {
  install(Vue, config = {}) {
    if (Vue.prototype.$isServer) {
      return
    }

    const opts = {
      preload: 0,
      ...config,
    }

    const list = []
    const useObserve = typeof window.IntersectionObserver === 'function'
    const observer =
      window.IntersectionObserver &&
      new window.IntersectionObserver((entries) => {
        entries.forEach(({ intersectionRatio, target }) => {
          if (intersectionRatio <= 0 || !target) {
            return
          }
          target.__lazy_handler__ && target.__lazy_handler__()
          delete target.__lazy_handler__
          observer.unobserve(target)
        })
      })
    const actionLazy = (el) => {
      if (useObserve || !checkInViewV2(el, opts.preload)) {
        return
      }
      el.__lazy_handler__ && el.__lazy_handler__()
      removeList(el)
    }

    const batchHandler = throttle(200, () => {
      list.map(actionLazy)
    })

    const appendList = (el) => {
      if (useObserve) {
        observer.observe(el)
        return
      }

      list.push(el)
      const parent = getScrollParent(el)
      parent.addEventListener('resize', batchHandler)
    }

    const removeList = (el) => {
      if (useObserve) {
        observer.unobserve(el)
        return
      }

      for (let i = 0, len = list.length; i < len; i++) {
        if (list[i] === el) {
          list.splice(i, 1)
          delete el.__lazy_handler__
          break
        }
      }
    }

    Vue.directive('livelazyload', {
      bind(el, binding) {
        el.__lazy_handler__ = binding.value
        appendList(el)
      },
      inserted(el) {
        actionLazy(el)
      },
      unbind(el) {
        removeList(el)
      },
    })
  },
}
