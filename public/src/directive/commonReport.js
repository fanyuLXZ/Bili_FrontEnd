import { allCustomReport } from '../js/utils'

export default {
  install(Vue) {
    Vue.directive('commonReport', {
      bind(el, binding) {
        // 上报的事件
        el.event = Object.keys(binding.modifiers)[0] || 'click'
        // 上报的字段
        el.field = binding.arg
        // 上报的内容
        el.valueData = binding.value || ''
        
        if(el.field) {
          el.addEventListener(el.event, () => {
            allCustomReport(el.field, el.valueData)
          })
        }
      },
      update(el, binding) {
        el.event = Object.keys(binding.modifiers)[0] || 'click'
        el.field = binding.arg
        el.valueData = binding.value || ''
      }
    })
  }
}