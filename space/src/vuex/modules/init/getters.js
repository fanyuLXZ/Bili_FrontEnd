/* eslint-disable */
/**
 * 一些基本的全局数据
 *
 * _bili_space_info       当前空间的信息
 * _bili_space_settings   当前空间的设置
 * _bili_login_info       当前访问者的信息
 * _bili_space_state      对于当前空间，当前访问者的身份状态
 * _bili_space_is_login   当前用户是否登录
 * _bili_space_nav        当前up主的导航栏数据
 */
export const _bili_space_mid = state => +state._bili_space_mid
export const _bili_space_mymid = state => +state._bili_login_info.mid
export const _bili_space_info = state => state._bili_space_info
export const _bili_space_notice = state => state._bili_space_notice
export const _bili_space_settings = state => state._bili_space_settings
export const _bili_login_info = state => state._bili_login_info
export const _bili_space_state = state => state._bili_space_state
export const _bili_space_is_login = state => state._bili_space_is_login
export const _bili_space_watch_history = state => state._bili_space_watch_history
export const _bili_space_nav = state => state._bili_space_nav
export const _bili_space_vip = state => state._bili_space_vip
export const playNumber = state => state.playNumber
export const isNavLoad = state => state.nav_load
export const watchlaterAids = state => state.watchlaterAids

/**
 * 返回首页最先申请的两个接口的加载状态
 */
export const isSpaceLoad = state => state._bili_init_state.space_info_success && state._bili_init_state.space_settings_success

/**
 * 在 App.vue 里挂了一个 popup 组件，用来显示全局的消息提示
 * 包括但不限于：
 *  接口请求失败
 */
export const _bili_space_global_message = state => state._bili_space_global_message

/**
 * VIP相关字段定义
 * http://project.bilibili.co/projects/doc/wiki/Wiki_acc_group_vip_web_interface
 *
 * vipType      vip类型 0.非VIP 1.VIP 2.年费VIP
 * vipStatus    vip状态 0.过期 1.未过期 2.冻结 3.封禁
 * * * * * * * * * * * * * * * * * *
 *
 * vip相关的方法
 *
 * isVip            是否是vip
 * isVipFrozen      vip是否被冻结
 * isVipNormal      vip是否正常
 * isVipAnnual      是否年费会员
 * isFoolsDay       是否是愚人节小会员
 */

// !! 这里所有的字段都是当前空间UP主的信息
export const isVip = state => {
    return state._bili_space_vip.type !== 0
}
export const isVipFrozen = state => {
    const vip = state._bili_space_vip
    return vip.type !== 0 && vip.status === 2
}
export const isVipNormal = state => {
    const vip = state._bili_space_vip
    return vip.type !== 0 && vip.status === 1
}
export const isVipAnnual = state => {
    const vip = state._bili_space_vip
    return vip.type === 2 && vip.status === 1
}

export const isFoolsDay = state => {
    const vip = state._bili_space_vip
    return vip.label.label_theme.includes('fool')
}

// !!这里只能是用当前登录用户的信息
export const isVipAboutToEnd = state => {
    const {type, status, expire} = state._bili_login_info.vip
    return status === 1 && type !== 0 && expire < 8
}
