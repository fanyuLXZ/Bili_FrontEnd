import * as types from 'mutations'
import * as actions from './actions'
import * as getters from './getters'

const state = {
    submitVideos: {
        pages: 0,
        count: 0,
        tlist: [],
        vlist: [],
        episodic_button: null
    },
    selectVideos: {
        pages: 0,
        count: 0,
        tlist: [],
        vlist: [],
    },
    isSubmitVideosLoad: false, // 接口是否请求成功
}

const mutations = {
    [types.GETSUBMITVIDEOS_SUCCESS](state, data) {
        const {list, page, episodic_button} = data
        state.submitVideos.pages = Math.ceil(page.count / page.ps)
        state.submitVideos.count = page.count
        state.submitVideos.episodic_button = episodic_button
        state.submitVideos.tlist = list.tlist
        state.submitVideos.vlist = list.vlist
        state.isSubmitVideosLoad = true
    },

    [types.GETSUBMITVIDEOS_FAILURE](state) {
        state.isSubmitVideosLoad = true
    },
    [types.FETCHSUBMITVIDEOS_START](state) {
        state.isSubmitVideosLoad = false
    },

    [types.CLEARSELECTVIDEOS](state) {
        state.selectVideos = {
            pages: 0,
            count: 0,
            tlist: [],
            vlist: [],
        }
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
