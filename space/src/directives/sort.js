import Sortable from 'sortablejs'

export default function (Vue) {
    Vue.directive('sortable', {
        bind(el, binding) {
            /* eslint-disable no-new */
            new Sortable(el, binding.value)
        },
    })
}
