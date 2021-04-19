const nodeList = []
const ctx = '@@clickoutsideContext'

let startClick
let seed = 0

function createDocumentHandler(el, binding, vnode) {
    return function (mouseup = {}, mousedown = {}) {
        if (!vnode ||
            !vnode.context ||
            !mouseup.target ||
            !mousedown.target ||
            el.contains(mouseup.target) ||
            el.contains(mousedown.target) ||
            el === mouseup.target ||
            (vnode.context.popperElm &&
                (vnode.context.popperElm.contains(mouseup.target) ||
                    vnode.context.popperElm.contains(mousedown.target)))) return

        if (binding.expression &&
            el[ctx].methodName &&
            vnode.context[el[ctx].methodName]) {
            vnode.context[el[ctx].methodName]()
        } else {
            el[ctx].bindingFn && el[ctx].bindingFn()
        }
    }
}

export default function (Vue) {
    if (!Vue.prototype.$isServer) {
        document.addEventListener('mousedown', e => (startClick = e), false)
        document.addEventListener('mouseup', e => {
            nodeList.forEach(node => node[ctx].documentHandler(e, startClick))
        }, false)
    }

    Vue.directive('clickoutside', {
        bind(el, binding, vnode) {
            nodeList.push(el)
            const id = seed++
            const re = /\W/ig
            const {expression, value} = binding

            // 传入clickoutside的表达式必须是一个函数名字
            if (re.test(expression) && process.env.NODE_ENV !== 'production') {
                console.warn('[vue-clickoutside]: 表达式 "' + expression + '" 确定是一个函数？')
            }

            el[ctx] = {
                id,
                documentHandler: createDocumentHandler(el, binding, vnode),
                methodName: expression,
                bindingFn: value,
            }
        },

        update(el, binding, vnode) {
            const {expression, value} = binding
            el[ctx].documentHandler = createDocumentHandler(el, binding, vnode)
            el[ctx].methodName = expression
            el[ctx].bindingFn = value
        },

        unbind(el) {
            const len = nodeList.length

            for (let i = 0; i < len; i++) {
                if (nodeList[i][ctx].id === el[ctx].id) {
                    nodeList.splice(i, 1)
                    break
                }
            }
            delete el[ctx]
        },
    })
}
