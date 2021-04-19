import Vue from 'vue'
import * as types from 'mutations'

const TAB_LIST = {
    all: {
        name: '全部',
        count: 0,
        pageTotal: 0
    },
    draw: {
        name: '画友',
        count: 0,
        pageTotal: 0
    },
    photo: {
        name: '摄影',
        count: 0,
        pageTotal: 0
    },
    daily: {
        name: '日常',
        count: 0,
        pageTotal: 0
    }
}

const state = {
    albumTabList: JSON.parse(JSON.stringify(TAB_LIST)),
    albumDocList: [],
    isAlbumLoading: true,
    isAlbumError: false,
}

const ABtest = {
    _percent: 100,
    _distinguish(uid) {
        return uid % 100 < this._percent;
    },
    getDocList(uid) {
        if (this._distinguish(uid)) {
            return '//api.bilibili.com/x/dynamic/feed/draw/doc_list'
        }

        return '//api.vc.bilibili.com/link_draw/v1/doc/doc_list';
    },
    getDocCount(uid) {
        if (this._distinguish(uid)) {
            return '//api.bilibili.com/x/dynamic/feed/draw/upload_count'
        }

        return '//api.vc.bilibili.com/link_draw/v1/doc/upload_count';
    }
}

const actions = {
    fetchAlbum: ({commit}, params) => {  // eslint-disable-line
        return Vue.http
            .jsonp('//api.bilibili.com/x/space/album/index', {params})
            .then(rs => {
                const {code, message, data} = rs
                if (code === 0) {
                    return Promise.resolve(data)
                } else {
                    Vue.$warn(`获取用户相簿列表失败，${message}`)
                    return Promise.reject()
                }
            }, () => {
                Vue.$warn('获取用户相簿列表失败，网络错误')
                return Promise.reject()
            })
    },
    // tab 计数
    getDocCount({state, commit}, {uid, pageSize}) {
        Vue.http.get(ABtest.getDocCount(uid), {
            params: {uid},
        })
            .then(rs => {
                const {code, message, data} = rs.data
                if (code === 0) {
                    const tabList = TAB_LIST
                    for (let key in state.albumTabList) {
                        tabList[key].count = data[key + '_count']
                        tabList[key].pageTotal = Math.ceil(data[key + '_count'] / pageSize)
                    }
                    commit(types.GETALBUMCOUNT_SUCCESS, tabList)
                } else {
                    Vue.$warn(`获取相簿tab失败，${message}`)
                }
            })
            // eslint-disable-next-line no-unused-vars
            .catch(err => {
                Vue.$warn(`获取相簿tab失败`)
            })
    },
    // 取列表
    getDocList({commit}, params) {
        Vue.http.get(ABtest.getDocList(params.uid), {
            params,
        })
            .then(rs => {
                const {code, data} = rs.data
                if (code === 0 && data && data.items && data.items[0]) {
                    commit(types.GETALBUMLIST_SUCCESS, data.items.map(item => ({
                        ...item,
                        pictures: typeof item.pictures === 'string' ? JSON.parse(item.pictures) : item.pictures
                    })))
                } else {
                    commit(types.GETALBUMLIST_FAILURE)
                }
            })
            .catch(err => {
                console.log(err)
                commit(types.GETALBUMLIST_FAILURE)
            })
    },
}

const mutations = {
    [types.GETALBUMCOUNT_SUCCESS](state, data) {
        state.albumTabList = data
    },
    [types.GETALBUMLIST_SUCCESS](state, data) {
        state.isAlbumLoading = false
        state.isAlbumError = false
        state.albumDocList = data
    },
    [types.GETALBUMLIST_FAILURE](state) {
        state.isAlbumError = true
        state.isAlbumLoading = false
    },
}

const getters = {
    albumTabList: state => state.albumTabList,
    albumDocList: state => state.albumDocList,
    isAlbumLoading: state => state.isAlbumLoading,
    isAlbumError: state => state.isAlbumError,
}

export default {
    state,
    actions,
    mutations,
    getters,
}
