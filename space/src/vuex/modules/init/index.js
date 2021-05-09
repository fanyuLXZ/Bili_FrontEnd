import * as types from 'mutations'
import * as actions from './actions'
import * as getters from './getters'

const defaultData = {
    _bili_space_info: {
        level_info: {
            current_level:0
        },
        official: {},
        theme: {},
        toutu: {},
        silence: 0,
        fans_badge: false,
        uname: '哔哩哔哩',
        sign: '非常努力地加载页面 (。・`ω´・)',
    },
    _bili_space_settings: {
        privacy: {
            bangumi: 0,
            article: 0,
            tags: 0,
            fav_video: 0,
            coins_video: 0,
            groups: 0,
            played_game: 0,
            channel: 0,
            submited_video: 0,
            user_info: 0,
        },
        index_order_01: [{
            id: 0,
            name: '',
        }],
        index_order_02: [{
            id: 0,
            name: '',
        }],
        theme: 'default',
        theme_preview_img_path: '',
        toutu: {
            sid: 0,
            s_img: '',
            l_img: '',
            thumbnail_img: '',
            android_img: '',
            iphone_img: '',
            ipad_img: '',
            platform: 1,
        },
    },
    _bili_login_info: {
        birthday: '1900-00-00',
        coins: 0,
        face: '',
        identification: 0,
        jointime: '1465189421',
        level: 0,
        maxstow: 0,
        mid: 0,
        mobile_verified: 0,
        official_verify: {
            type: 0,
            desc: '1',
        },
        rank: 0,
        s_face: '',
        scores: 0,
        security_level: 1,
        sex: 1,
        sign: '非常努力地加载页面 (。・`ω´・)',
        spacesta: 2,
        telephone: '',
        name: '哔哩哔哩',
        vip: {},
    },
}

const state = {
    _bili_guest_mode: false,
    _bili_space_state: 'loading', // 当前访问者的身份：owner 拥有者/ fans 粉丝/ visitor 游客
    _bili_space_is_login: false, // 是否已经登录，根据MyInfo接口返回的status来判断
    _bili_space_info: defaultData._bili_space_info, // 当前空间拥有者的信息
    _bili_space_vip: {},
    _bili_space_notice: {
        id: 0,
        content: '',
        url: '',
    },
    _bili_space_mid: 0,
    _bili_space_settings: defaultData._bili_space_settings,
    // 当前登录用户的信息
    _bili_login_info: defaultData._bili_login_info, // 访问用户的信息
    _bili_init_state: {
        space_info_success: false,
        space_settings_success: false,
    },
    _bili_space_watch_history: [],
    _bili_space_nav: {
        bangumi: 0,
        channel: {master: 0, guest: 0},
        favourite: {master: 0, guest: 0},
        tag: 0,
        video: 0,
        article: 0,
        playlist: 0,
    },
    nav_load: false,
    playNumber: {
        article: {
            view: 0,
        },
        archive: {
            view: 0,
        },
        likes: 0,
    },
    watchlaterAids: [],
}

const mutations = {
    // 获取空间所有者的信息
    [types.GETINFO_SUCCESS](state, {data, mid}) {
        // up主被封禁/禁言状态下，不显示个性签名
        if (data.silence === 1) {
            data.sign = ''
        }
        state._bili_space_mid = mid
        state._bili_space_info = data
        state._bili_space_vip = data.vip
        state._bili_space_notice = data.sys_notice
        state._bili_init_state.space_info_success = true
        state.nav_load = true
    },

    /* eslint-disable */
    // 获取空间设置
    [types.GETSETTINGS_SUCCESS](state, data) {
        const order_01 = []
        const order_02 = []

        data.index_order.forEach(function (item) {
            if (+item.id > 20) {
                order_02.push(item)
            } else if (+item.id !== 6) {
                order_01.push(item)
            }
        })
        state._bili_space_settings = data
        state._bili_space_settings.index_order_01 = order_01
        state._bili_space_settings.index_order_02 = order_02
        state._bili_init_state.space_settings_success = true
    },
    /* eslint-enable */
    // 获取当前登录用户的信息（没有登录则为空）
    [types.GETMYINFO_SUCCESS](state, data) {
        data.vip.expire = Math.floor((data.vip.due_date - Date.now()) / 1000 / 3600 / 24)
        state._bili_login_info = data
        state._bili_space_is_login = true
    },
    [types.GETMYINFO_FAILURE](state) {
        state._bili_login_info = defaultData._bili_login_info
        state._bili_space_is_login = false
        state._bili_space_state = 'visitor'
    },

    [types.UPADTE_USER_STATE](state, relation) {
        state._bili_space_state = relation
    },

    [types.FETCHNAVNUM_SUCCESS](state, data) {
        state._bili_space_nav = data
        state.nav_load = true
    },

    [types.FETCHNAVNUM_FAILURE](state) {
        state.nav_load = true
    },

    // 获取用户观看记录
    [types.GETWATCHHISTORY_SUCCESS](state, data) {
        sessionStorage.setItem(
            `${state._bili_login_info.mid}_watch_history`,
            JSON.stringify(data)
        )
        state._bili_space_watch_history = data
    },

    // 用户观看添加本地记录
    [types.WATCH_VIDEO](state, aid) {
        state._bili_space_watch_history.push(aid)
        sessionStorage.setItem(
            `${state._bili_login_info.mid}_watch_history`,
            JSON.stringify(state._bili_space_watch_history)
        )
    },

    // 改变guest_mode
    [types.TOGGLESPACESTATE](state, data) {
        state._bili_space_state = data
    },

    /**
     * 关注某人之后手动更新本地 store
     *
     * 主人态：
     *   关注任意用户
     * 客人态：
     *   关注当前用户
     *   关注其他用户
     */
    [types.ADDATTENTION](state, data) {
        if (data === +state._bili_space_info.mid) {
            // 客人态，关注当前用户
            state._bili_space_state = 'fans'
        }
    },

    /**
     * 取关某人之后手动更新本地 store
     *
     * 主人态：
     *   取关任意用户
     * 客人态：
     *   取关当前用户
     *   取关其他用户
     */
    [types.REMOVEATTENTION](state, data) {
        if (data === +state._bili_space_info.mid) {
            // 客人态，取关当前用户
            state._bili_space_state = 'visitor'
        }
    },

    // !!!警告，此处有坑
    // 空间目前为止只有header模块里能取消拉黑
    // 但是没有什么方法通过接口刷新页面状态
    // 所以直接修改了 _bili_space_state
    // 如果以后增加了别的拉黑的地方，请另行处理
    [types.MOVEFROMBAN_SUCCESS](state) {
        state._bili_space_state = 'visitor'
    },

    // 设置签名成功
    [types.SETSIGN_SUCCESS](state, sign) {
        state._bili_space_info.sign = sign
    },

    /* eslint-disable */
    // 设置模块顺序成功
    [types.SETINDEXORDER_SUCCESS](state, data) {
        const orderStartWithId = state._bili_space_settings.index_order.toObject('id')
        const _order_01 = []
        const _order_02 = []
        const _order = data.split(',').map(item => orderStartWithId[item])

        _order.forEach(function (item) {
            console.log(item.id)
            if (+item.id > 20) {
                _order_02.push(item)
            } else if (+item.id !== 6) {
                _order_01.push(item)
            }
        })

        state._bili_space_settings.order = _order
        state._bili_space_settings.index_order_01 = _order_01
        state._bili_space_settings.index_order_02 = _order_02
    },
    /* eslint-enable */

    // 设置用户模块隐私成功
    [types.SETPRIVACY_SUCCESS](state, data) {
        const key = data.field
        state._bili_space_settings.privacy[key] = data.value
    },

    [types.GETUPSTAT_SUCCESS](state, data) {
        state.playNumber = data
    },

    [types.UPDATE_WATCHLATER](state, aids) {
        state.watchlaterAids = aids
    },
}

export default {
    actions,
    getters,
    state,
    mutations,
}
