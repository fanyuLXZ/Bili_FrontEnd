import rec from './rec'
import rep from './rep'
import watchlater from './watchlater'
import clickoutside from './clickoutside'
import sort from './sort'
import hlkeyword from './hlkeyword'

export default function (Vue) {
    rec(Vue)
    rep(Vue)
    watchlater(Vue)
    clickoutside(Vue)
    sort(Vue)
    hlkeyword(Vue)
}
