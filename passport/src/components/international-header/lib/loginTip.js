// pc端引流用登录提示框
import Vue from 'vue'
import LoginTip from '../login-tip/LoginTip'

export default () => {
    const vm = new Vue(LoginTip)
    const el = document.createElement('div')
    document.body.appendChild(el)
    vm.$mount(el)
    return vm
}

