// 新的数据上报的 directive
export default function (Vue) {
    Vue.directive('rep', {
        bind: function (el, binding) {
            if (!Vue.prototype.$isServer) {
                el.addEventListener('click', function () {
                    window.spaceReport[binding.value] = ''
                    window.reportObserver.forceCommit()
                }, false)
            }
        },
    })
}
