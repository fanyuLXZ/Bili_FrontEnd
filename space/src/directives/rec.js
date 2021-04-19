export default function (Vue) {
    // 数据上报的 directive
    Vue.directive('rec', {
        bind(el, binding) {
            if (!Vue.prototype.$isServer) {
                el.addEventListener('click', function () {
                    rec(binding.value)
                }, false)
            }
        },
    })
}
