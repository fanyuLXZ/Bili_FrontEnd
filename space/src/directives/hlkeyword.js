import { unhtml } from 'g-public/js/utils'

export default function(Vue) {
  const isServer = Vue.prototype.$isServer

  Vue.directive('hlkeyword', (el, binding) => {
    let text = unhtml(binding.value)
    if (isServer) {
      el.innerHTML = text
    } else {
      if (window._search_keyword === undefined) {
        el.innerHTML = text
        return
      }
      if (window._search_keyword !== '') {
        text = text.replace(
            new RegExp('(' + window._search_keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'),
            '<span class="search-keyword-highlight">$1</span>'
        )
      }
      el.innerHTML = text
    }
  })
}
