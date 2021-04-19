import Vue from 'vue'
import {createApp} from "./index"
//绑定url配置
import urlConfig from "./config/url-config"

Vue.config.productionTip = false

Vue.prototype.$url_config = urlConfig

Vue.directive(
    "clickoutside",{
        // 初始化指令
        bind(el, binding,) {
            function clickHandler(e) {
                // 这里判断点击的元素是否是本身，是本身，则返回
                if (el.contains(e.target)) {
                    return false;
                }
                // 判断指令中是否绑定了函数
                if (binding.expression) {
                    // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
                    binding.value(e);
                }
            }
            // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
            el.__vueClickOutside__ = clickHandler;
            document.addEventListener('click', clickHandler);
        },
        update() {},
        unbind(el,) {
            // 解除事件监听
            document.removeEventListener('click', el.__vueClickOutside__);
            delete el.__vueClickOutside__;
        }
    }
)
createApp().app.$mount('#app')
