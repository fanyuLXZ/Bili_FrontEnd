import * as types from 'mutations'
import * as actions from './actions'
import * as getters from './getters'

const state = {
    favList: {
        count: 0,
        list: [{
            cover: [],
        }],
    },
    myFavList: {
        count: 0,
        list: [{
            cover: [],
        }],
    },
    favDetail: {
        pages: 0,
        count: 0,
        vlist: [],
        tlist: [],
    },
    topics: {
        page: 0,
        total: 0,
        pagesize: 0,
        list: [],
    },
    articles: {
        favorites: [{
            stats: {},
            image_urls: [],
        }],
        page: {
            pn: 1,
            ps: 16,
            total: 0,
        },
    },
    playlists: {
        page: {},
        list: [],
    },
    favNavList: {
        defaultFav: {},
        fav: [],
        archive: [],
        visitor: [],
        playlist: 0,
        topic: 0,
        article: 0,
        album: 0,
        movie: 0,
        pugv: 0,
        arc: 0,
        note: 0,
    },
    createdList: {
        list: [],
        pn: 1,
        ps: 16,
        count: 0,
    },
    collectedList: {
        list: [],
        pn: 1,
        ps: 16,
        count: 0,
    },
    myCreatedList: {
        list: [],
        pn: 1,
        ps: 20,
        count: 0,
    },
    modalAddFavList: [],
    favListDetails: {
        info: {
            cnt_info: {},
            upper: {},
        },
        medias: [],
    },
    tlist: [],
    idPlaylistListLoad: false,
    isFavDetailLoad: false,
    isFavListLoad: false, // 接口是否请求成功
    isMyFavListLoad: false, // 接口是否请求成功
    isArticleListLoad: false, // 接口是否请求失败
    isFarNavListLoad: false, // 接口是否请求失败
    isTopicLoad: false,
    delInvalidVideoStateNum: 2, // 0:允许清理;1:清理中;2:清理操作冷却中(有效期10d);
    isShowFavShare: false,
    isCreatedFavLoad: false, //  创建播单列表接口成功
    isAddFavLoad: false, // 新建收藏夹
}

const mutations = {
    [types.GETALLARTICLE_START](state) {
        state.isArticleListLoad = false
    },
    [types.GETALLARTICLE_SUCCESS](state, data) {
        state.articles = data
        state.isArticleListLoad = true
    },
    [types.GETALLARTICLE_FAILURE](state) {
        state.isArticleListLoad = true
    },
    [types.GETFAV_START](state) {
        state.isFavListLoad = false
    },
    [types.GETFAV_SUCCESS](state, data) {
        state.favList = data
        state.isFavListLoad = true
    },
    [types.GETFAV_FAILURE](state) {
        state.isFavListLoad = true
    },
    [types.GETPLAYLIST_START](state) {
        state.idPlaylistListLoad = false
    },
    [types.GETPLAYLIST_SUCCESS](state, data) {
        state.playlists.page = data.page
        state.playlists.list = data.list
        state.idPlaylistListLoad = true
    },
    [types.GETPLAYLIST_FAILURE](state) {
        state.idPlaylistListLoad = true
    },
    [types.DELINVALIDVIDEO_SUCCESS](state, data) {
        state.delInvalidVideoStateNum = data
    },

    [types.GETMYFAV_START](state) {
        state.isMyFavListLoad = false
    },
    [types.GETMYFAV_SUCCESS](state, data) {
        state.myFavList = data
        state.isMyFavListLoad = true
    },
    [types.GETMYFAV_FAILURE](state) {
        state.isMyFavListLoad = true
    },
    [types.GETTOPICS_START](state) {
        state.isTopicLoad = false
    },
    [types.GETTOPICS_SUCCESS](state, data) {
        state.topics = data
        state.isTopicLoad = true
    },
    [types.GETTOPICS_FAILURE](state) {
        state.isTopicLoad = false
    },
    [types.FETCHFAVDETAIL_START](state) {
        state.isFavDetailLoad = false
    },
    [types.FETCHFAVDETAIL_SUCCESS](state, data) {
        state.favDetail = data
        state.isFavDetailLoad = true
    },
    [types.FETCHFAVDETAIL_FAILURE](state) {
        state.favDetail = {
            pages: 0,
            count: 0,
            vlist: [],
            tlist: [],
        }
        state.isFavDetailLoad = true
    },
    [types.DELFAVLIST_SUCCESS](state, id) {
        const list = state.favList.list
        const count = state.favList.count
        const index = list.findIndex(item => item.fid === id)

        if (index !== undefined) {
            state.favList.list = [
                ...list.slice(0, index),
                ...list.slice(index + 1),
            ]
            state.favList.count = count - 1
        }
    },
    [types.SETFAVLIST_SUCCESS](state, fid, _public) {
        state.favList.list.forEach((item, index) => {
            if (item.fid === fid) {
                state.favList.list[index].state = _public === 0 ? 2 : 3
            }
        })
    },
    /* eslint-disable */
    [types.RENAMEFAV_SUCCESS](state, fid, new_name) {
        state.favList.list.forEach((item, index) => {
            if (item.fid === fid) {
                state.favList.list[index].name = new_name
            }
        })
    },
    [types.DELVIDEO_SUCCESS](state, data) {
        const aids = data.split(',')
        const newList = []
        const vlist = state.favDetail.vlist
        vlist.forEach((item, index) => {
            if (aids.indexOf(String(item.aid)) === -1) {
                newList.push(item)
            }
        })
        state.favDetail.count -= aids.length
        state.favDetail.vlist = newList
    },
    [types.COPYVIDEO_SUCCESS](state, {tar_media_id, resources}) {
        const list = state.createdList.list
        const count = resources.split(',').length
        list.map(item => {
            if (item.id === tar_media_id) {
                item.media_count = item.media_count + count
            }
        })
        state.createdList.list = list
    },
    [types.MOREVIDEO_SUCCESS](state, {src_media_id, tar_media_id, resources}) {
        const list = state.createdList.list
        const count = resources.split(',').length
        list.map(item => {
            if (item.id === src_media_id) {
                item.media_count = item.media_count - count
            }
            if (item.id === tar_media_id) {
                item.media_count = item.media_count + count
            }
        })
        state.createdList.list = list
    },
    [types.DELFAVVIDEO_SUCCESS](state, {resources, media_id}) {
        const list = state.createdList.list
        const count = resources.split(',').length
        list.map(item => {
            if (item.id === media_id) {
                item.media_count = item.media_count - count
            }
        })
        state.createdList.list = list
    },
    /* eslint-enable */
    [types.GETFAVNAV_START](state) {
        state.isFarNavListLoad = false
    },
    [types.GETFAVNAV_SUCCESS](state, data) {
        const {album, archive, article, playlist, topic, movie, pugv, arc, note} = data.data
        // state.favNavList.defaultFav = archive.find((fav) => fav.state < 2)
        // state.favNavList.fav = archive.filter((item) => item.state >= 2)
        // state.favNavList.visitor = archive.filter((item) => item.state === 2 || item.state === 0)
        state.favNavList.archive = archive
        state.favNavList.playlist = playlist
        state.favNavList.topic = topic
        state.favNavList.article = article
        state.favNavList.album = album
        state.favNavList.movie = movie
        state.favNavList.pugv = pugv
        state.favNavList.arc = arc
        state.favNavList.note = note
        state.isFarNavListLoad = true
    },
    [types.GETFAVNAV_FAILURE](state) {
        state.isFarNavListLoad = true
    },
    [types.UPDATEPUGVNUM_SUCCESS](state, num) {
        state.favNavList.pugv = num
    },
    [types.SETALBUMNAV_SUCCESS](state, num) {
        state.favNavList.album = num
    },
    [types.SETFAVBANGUMINUM_SUCCESS](state, num) {
        state.favNavList.movie = num
    },
    [types.FETCHFAVTLIST_SUCCESS](state, data) {
        state.tlist = data
    },
    [types.FETCHCREATEDLIST_START](state) {
        state.isCreatedFavLoad = false
    },
    [types.FETCHCREATEDLIST_SUCCESS](state, data) {
        const {list = [], pn, ps, count} = data
        state.createdList.list = list || []
        state.createdList.pn = pn
        state.createdList.ps = ps
        state.createdList.count = count
        state.isCreatedFavLoad = true
        state.modalAddFavList = [...list]
    },
    [types.FETCHCREATEDLIST_FAILURE](state) {
        state.isCreatedFavLoad = true
    },
    [types.FETCHCOLLECTEDLIST_SUCCESS](state, data) {
        const {list = [], pn, ps, count, isReSet = false} = data
        state.collectedList.list = list && !isReSet ? [...state.collectedList.list, ...data.list] : [...list]
        state.collectedList.pn = pn
        state.collectedList.ps = ps
        state.collectedList.count = count
    },
    [types.FETCHFAVDETAILS_START](state) {
        state.isFavDetailLoad = false
    },
    [types.FETCHFAVDETAILS_SUCCESS](state, data) {
        state.favListDetails.info = data.info,
            state.favListDetails.medias = data.medias ? data.medias : []
        state.isFavDetailLoad = true
    },
    [types.FETCHFAVDETAILS_FAILURE](state) {
        state.isFavDetailLoad = true
    },
    [types.DELFAVPLAYLIST_SUCCESS](state, id) {
        const list = state.createdList.list
        const count = state.createdList.count
        const index = list.findIndex(item => item.id === id)

        if (index !== undefined) {
            state.createdList.list = [
                ...list.slice(0, index),
                ...list.slice(index + 1),
            ]
            state.createdList.count = count - 1
            state.modalAddFavList = [
                ...list.slice(0, index),
                ...list.slice(index + 1),
            ]
        }
    },
    [types.THUMBUPORDOWN_SUCCESS](state, data) {
        state.favListDetails.info.cnt_info.thumb_up = data.likes
        state.favListDetails.info.like_state = data.like_state
    },
    [types.COLLFAVADD_SUCCESS](state) {
        const collect = state.favListDetails.info.cnt_info.collect
        state.favListDetails.info.cnt_info.collect = collect + 1
        state.favListDetails.info.fav_state = 1
    },
    [types.COLLFAVDEL_SUCCESS](state) {
        const collect = state.favListDetails.info.cnt_info.collect
        state.favListDetails.info.cnt_info.collect = collect - 1
        state.favListDetails.info.fav_state = 0
    },
    [types.MYCOLLFAVDEL_SUCCESS](state, id) {
        const list = state.collectedList.list
        const count = state.collectedList.count
        const index = list.findIndex(item => item.id === id)

        if (index !== undefined) {
            state.collectedList.list = [
                ...list.slice(0, index),
                ...list.slice(index + 1),
            ]
            state.collectedList.count = count - 1
        }
    },
    [types.SHOWFAVSHARE_SUCCESS](state, isShow) {
        state.isShowFavShare = isShow
    },
    [types.FETCHMYCREATEDLIST_SUCCESS](state, data) {
        const {list = [], pn, ps, count} = data
        state.myCreatedList.list = list
        state.myCreatedList.pn = pn
        state.myCreatedList.ps = ps
        state.myCreatedList.count = count
    },
    [types.SHAREPLAYLIST_SUCCESS](state) {
        const share = state.favListDetails.info.cnt_info.share
        state.favListDetails.info.cnt_info.share = share + 1
    },
    [types.MODALADDFAV_LOAD](state, isLoad) {
        state.isAddFavLoad = isLoad
    },
    [types.MODALADDFAV_SUCCESS](state, payload) {
        const sideFavList = state.createdList.list
        const modalFavList = state.modalAddFavList
        const _myCreatedList = state.myCreatedList.list
        if (payload.isOwner) {
            sideFavList.splice(1, 0, payload.data)
            modalFavList.push(payload.data)
            state.createdList.list = sideFavList
            state.modalAddFavList = modalFavList
        } else {
            _myCreatedList.push(payload.data)
            state.myCreatedList.list = _myCreatedList
        }
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
