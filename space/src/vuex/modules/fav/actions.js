/* eslint-disable */
import * as types from 'mutations'
import Vue from 'vue'

const FOLDER_API = '//api.bilibili.com/x/v2/fav/folder'
const VIDEO_API = '//api.bilibili.com/x/v2/fav/video'
const FAV_VIDEO_API = '//api.bilibili.com/x/space/fav/arc'
const TOPIC_API = '//api.bilibili.com/x/v2/fav/topic'
const PLAYLIST_API = '//api.bilibili.com/x/playlist/fav'
const ARTICLE_API = '//api.bilibili.com/x/article/favorites'
const FARNAVS_API = '//api.bilibili.com/x/space/fav/nav'

/** ********************* 下面是对收藏夹的操作 ***********************/

/**
 * 获取用户收藏夹列表
 *
 * mid (int) 用户id
 */
export const fetchFavList = ({ commit }, { mid, mymid }) => {
  commit(types.GETFAV_START)
  return Vue.http
    .jsonp(FOLDER_API, {
      params: { vmid: mid },
    }).then(rs => {
      const { data = [], code, message } = rs
      const fav = {
        count: data.length,
        list: data.map(item => {
          item.name = item.name.decodeHTML()
          return item
        }),
      }
      if (+code === 0) {
        commit(types.GETFAV_SUCCESS, fav)
        if (mymid === mid) {
          commit(types.GETMYFAV_SUCCESS, fav)
        }
        return Promise.resolve(fav)
      } else {
        commit(types.GETFAV_FAILURE)
        Vue.$warn(`获取用户收藏夹列表失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      commit(types.GETFAV_FAILURE)
      Vue.$warn('获取用户收藏夹列表失败，网络错误')
      return Promise.reject()
    })
}

/**
 * 获取当前登录用户收藏夹列表
 *
 * mid (int) 用户id
 */
export const fetchMyFavList = ({ commit }, mid) => {
  commit(types.GETMYFAV_START)
  return Vue.http
    .jsonp(FOLDER_API, {
      params: { vmid: mid },
    }).then(rs => {
      const { data = [], code, message } = rs
      const fav = {
        count: data.length,
        list: data.map(item => {
          item.name = item.name.decodeHTML()
          return item
        }),
      }
      if (+code === 0) {
        commit(types.GETMYFAV_SUCCESS, fav)
        return Promise.resolve()
      } else {
        commit(types.GETMYFAV_FAILURE)
        Vue.$warn(`获取用户收藏夹列表失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      commit(types.GETMYFAV_FAILURE)
      Vue.$warn('获取用户收藏夹列表失败，网络错误')
      return Promise.reject()
    })
}

/**
 * 删除收藏夹
 *
 * fid (int) 收藏夹id
 */
export const delFavList = ({ commit }, fid) => {
  return Vue.http
    .post(`${FOLDER_API}/del`, {
      fid: fid,
    }).then(rs => {
      const { code, message } = rs.data
      if (+code === 0) {
        commit(types.DELFAVLIST_SUCCESS, fid)
        return Promise.resolve()
      } else {
        Vue.$warn(`删除收藏夹失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('删除收藏夹失败 ∑(っ °Д °;)っ，网络错误')
      return Promise.reject()
    })
}

/**
 * 设置收藏夹的公开性
 *
 * fid (int) 收藏夹id
 * public (int) 0为公开 1为不公开
 */
export const editFavPublic = ({ commit }, { fid, isPublic }) => {
  return Vue.http
    .post(`${FOLDER_API}/public`, {
      fid: fid,
      public: isPublic,
    }).then(rs => {
      const { code, message } = rs.data
      if (+code === 0) {
        commit(types.SETFAVLIST_SUCCESS, fid, isPublic)
        return Promise.resolve()
      } else {
        Vue.$warn(`设置收藏夹公开性失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('设置收藏夹公开性失败 ∑(っ °Д °;)っ，网络错误')
      return Promise.reject()
    })
}

/**
 * 重命名收藏夹
 *
 * fid (int) 收藏夹id
 * name (string) 新名字
 */
export const editFavName = ({ commit }, { fid, name }) => {
  return Vue.http
    .post(`${FOLDER_API}/rename`, {
      fid,
      name,
    }).then(rs => {
      const { code, message } = rs.data
      if ([ 61001, 61002 ].indexOf(+code) > -1) {
        $.getScript('//static.hdslb.com/common/js/identityDialog.js', function() {
          // eslint-disable-next-line no-undef
          IdentityDialog(code, message)
        })
        return Promise.reject()
      } else if (+code === 0) {
        commit(types.RENAMEFAV_SUCCESS, fid, name)
        return Promise.resolve()
      } else {
        Vue.$warn(`重命名收藏夹失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('重命名收藏夹失败 ∑(っ °Д °;)っ，网络错误')
      return Promise.reject()
    })
}

/**
 * 新建收藏夹
 *
 * name (string) 收藏夹名字
 */
export const createFavList = ({ commit }, { name, isPublic }) => {
  return Vue.http
    .post(`${FOLDER_API}/add`, {
      name,
      public: isPublic,
    }).then(rs => {
      const { code, message } = rs.data
      if ([ 61001, 61002 ].indexOf(+code) > -1) {
        $.getScript('//static.hdslb.com/common/js/identityDialog.js', function() {
          // eslint-disable-next-line no-undef
          IdentityDialog(code, message)
        })
        return Promise.reject()
      } else if (+code === 0) {
        return Promise.resolve()
      } else {
        Vue.$warn(`新建收藏夹失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('新建收藏夹失败，网络错误，网络错误')
      return Promise.reject()
    })
}

/**
 * 排序收藏夹
 *
 * fids (string) 收藏夹id，用 , 隔开
 */
export const sortFavList = ({ commit }, fids) => {
  return Vue.http
    .post(`${FOLDER_API}/sort`, {
      fids,
    }).then(({ data }) => {
      if (+data.code === 0) {
        return Promise.resolve()
      } else {
        Vue.$warn(`收藏夹排序失败，${data.data}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('收藏夹排序失败，网络错误')
      return Promise.reject()
    })
}

/**
 * 获取用户收藏夹数量
 *
 * mid (int) 用户id
 */
export const fetchFavNavList = ({ commit }, { mid, mymid }) => {
  commit(types.GETFAVNAV_START)
  return Vue.http
    .jsonp(FARNAVS_API, {
      params: { mid },
    }).then(rs => {
      const { data = [], code, message } = rs
      if (+code === 0) {
        const fav = {
          count: data.archive.length,
          list: data.archive.map(item => {
            item.name = item.name.decodeHTML()
            return item
          }),
          data: data,
        }
        commit(types.GETFAVNAV_SUCCESS, fav)
        if (mymid === mid) {
          commit(types.GETMYFAV_SUCCESS, fav)
        }
        return Promise.resolve(fav)
      } else {
        commit(types.GETFAVNAV_FAILURE)
        Vue.$warn(`获取用户收藏夹列表失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      commit(types.GETFAVNAV_FAILURE)
      Vue.$warn('获取播单收藏夹列表失败，网络错误')
      return Promise.reject()
    })
}
/** *************************** 这里是分割线 下面是收藏夹视频的操作 *****************************/

/**
 * 获取 当前UP主的 收藏夹详情
 * name (string) 收藏夹名字
 */
export const fetchFavDetail = ({ commit }, params) => {
  commit(types.FETCHFAVDETAIL_START)
  return Vue.http
    .jsonp(FAV_VIDEO_API, { params })
    .then(rs => {
      const { data = {}, code, message } = rs
      const { total, pagecount, archives } = data
      const favDetail = {
        count: total,
        pages: pagecount,
        vlist: archives.map(video => {
          video.desc = video.desc.decodeHTML()
          video.title = video.title.decodeHTML()
          return video
        }),
      }
      if (+code === 0) {
        commit(types.FETCHFAVDETAIL_SUCCESS, favDetail)
        return Promise.resolve(favDetail)
      } else if (+code === 11018) {
        commit(types.FETCHFAVDETAIL_FAILURE)
        return Promise.reject(11018)
      } else {
        Vue.$warn(`收藏夹详情获取失败！ ∑(っ °Д °;)っ，${message}`)
        return Promise.reject()
      }
    }, () => {
      commit(types.FETCHFAVDETAIL_FAILURE)
      return Promise.reject()
    })
}

/**
 * 获取收藏夹分区数据
 */
export const fetchFavTlist = ({ commit }, params) => {
  return Vue.http
    .get('//api.bilibili.com/x/v3/fav/resource/partition', { params, withCredentials: true })
    .then(rs => {
      const { data = [], code, message } = rs.data
      if (+code === 0) {
        commit(types.FETCHFAVTLIST_SUCCESS, data)
        return Promise.resolve(data)
      } else {
        console.log(`收藏夹分区获取失败！ ∑(っ °Д °;)っ，${message}`)
        return Promise.reject()
      }
    }, () => {
      console.log('收藏夹分区获取失败！ ∑(っ °Д °;)っ，网络错误')
      return Promise.reject()
    })
}

/**
 * 删除收藏夹的视频
 *
 * fid (number) 收藏夹id
 * aid (string) 待移动的视频的aid，以逗号连接
 */
export const delVideo = ({ commit }, { fid, aid }) => {
  let api = VIDEO_API
  const params = {
    fid,
  }

  if (typeof aid === 'number' || aid.indexOf(',') === -1) {
    api += '/del'
    params.aid = aid
  } else {
    api += '/mdel'
    params.aids = aid
  }
  return Vue.http
    .post(api, params).then(rs => {
      const { code, message } = rs.data
      if (+code === 0) {
        return Promise.resolve()
      } else {
        Vue.$warn(`取消收藏失败了！ ∑(っ °Д °;)っ，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('取消收藏失败了！ ∑(っ °Д °;)っ，网络错误')
      return Promise.reject()
    })
}

/**
 * 移动收藏夹的视频
 *
 * src_media_id (number) 旧的收藏夹id
 * tar_media_id (number) 新的收藏夹id
 * resources (string) 待移动的视频的aid:type，以逗号连接
 */
export const moveVideo = ({ commit }, { src_media_id, tar_media_id, resources }) => {
  return Vue.http
    .post('//api.bilibili.com/x/v3/fav/resource/move', {
      src_media_id,
      tar_media_id,
      resources,
      platform: 'web'
    }).then(rs => {
      const { code, message } = rs.data
      if (+code === 0) {
        // commit(types.MOREVIDEO_SUCCESS, { src_media_id, tar_media_id, resources })
        return Promise.resolve()
      } else {
        Vue.$warn(`移动视频失败了！ ∑(っ °Д °;)っ，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('移动视频失败了！ ∑(っ °Д °;)っ，网络错误')
      return Promise.reject()
    })
}

/**
 * 复制收藏夹的视频
 *
 * src_media_id (number) 旧的收藏夹id
 * tar_media_id (number) 新的收藏夹id
 * mid (number) 原主人的mid
 * resources (string) 待移动的视频的aid，以逗号连接
 */
export const copyVideo = ({ commit }, { src_media_id, tar_media_id, mid, resources }) => {
  return Vue.http
    .post('//api.bilibili.com/x/v3/fav/resource/copy', {
      src_media_id,
      tar_media_id,
      mid,
      resources,
      platform: 'web'
    }).then(rs => {
      const { code, message } = rs.data
      if (+code === 0) {
        // commit(types.COPYVIDEO_SUCCESS, { tar_media_id, resources })
        return Promise.resolve()
      } else {
        Vue.$warn(`复制视频失败了！ ∑(っ °Д °;)っ，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('复制视频失败了！ ∑(っ °Д °;)っ，网络错误')
      return Promise.reject()
    })
}

/** *********************话题收藏********************* */

/**
 * 话题收藏列表
 *
 * pn (int) 页码
 * ps (int) 返回数
 */
export const fetchTopics = ({ commit }, params) => {
  commit(types.GETTOPICS_START)
  return Vue.http
    .jsonp(TOPIC_API, { params })
    .then(rs => {
      const { code, data } = rs
      if (+code === 0) {
        data.list.forEach(item => {
          item.name = item.name.decodeHTML()
        })
        return commit(types.GETTOPICS_SUCCESS, data)
      } else {
        return commit(types.GETTOPICS_FAILURE)
      }
    }, () => commit(types.GETTOPICS_FAILURE))
}

/**
 * 取消收藏话题
 */
export const delTopics = ({ commit }, tid) => {
  return Vue.http
    .post(`${TOPIC_API}/del`, {
      tpid: tid,
    }).then(rs => {
      const { code, message } = rs.data
      if (+code === 0) {
        return Promise.resolve()
      } else {
        Vue.$warn(`取消收藏夹话题失败了！ ∑(っ °Д °;)っ，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn(`取消收藏夹话题失败了！ ∑(っ °Д °;)っ，网络错误`)
      return Promise.reject()
    })
}

/** *********************专栏********************* */

/**
 * 取消收藏专栏
 *
 * id (int) 专栏id
 * fid (int) 收藏夹id 默认为0
 */
export const delArticles = ({ commit }, id) => {
  return Vue.http
    .post(`${ARTICLE_API}/del`, { id })
    .then(rs => {
      const { code, message } = rs.data
      if (code === 0) {
        return Promise.resolve()
      } else {
        Vue.$warn(`取消收藏夹失败了！ ∑(っ °Д °;)っ，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn(`取消收藏夹话题失败了！ ∑(っ °Д °;)っ，网络错误`)
      return Promise.reject()
    })
}
/**
 * 获取用户投稿的专栏所有列表（包括失效专栏）
 * pn (int) 页码
 * ps (int) 每页的个数
 */
export const fetchArticleAllList = ({ commit }, params) => {
  return Vue.http
    .jsonp(`${ARTICLE_API}/list/all`, { params })
    .then(rs => {
      const { code, data, message } = rs
      if (code === 0) {
        data.favorites.forEach(item => {
          item.title = item.title.decodeHTML()
          item.summary = item.summary.decodeHTML()
        })
        commit(types.GETALLARTICLE_SUCCESS, data)
      } else {
        commit(types.GETALLARTICLE_FAILURE)
        Vue.$warn(`获取用户专栏列表失败，${message}`)
      }
    }, () => {
      commit(types.GETALLARTICLE_FAILURE)
      Vue.$warn('获取用户专栏列表失败，网络错误')
    })
}

/**
 * 清除失效视频
 *
 * fid (int) 收藏夹id
 */
export const delInvalidVideo = ({ commit }, fid) => {
  return Vue.http
    .post('//api.bilibili.com/x/v3/fav/resource/clean', { media_id: fid, platform: 'web' })
    .then(rs => {
      const { code, message } = rs.data
      if (+code === 0) {
        return Promise.resolve()
      } else {
        Vue.$warn(`清除失效视频失败了！ ∑(っ °Д °;)っ，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn(`清除失效视频失败了！ ∑(っ °Д °;)っ，网络错误`)
      return Promise.reject()
    })
}

/**
 * 获取收藏夹失效视频清理状态
 *
 * fid (int) 收藏夹id
 */
export const delInvalidVideoState = ({ commit }, fid) => {
  Vue.http
    .jsonp(`${VIDEO_API}/cleaned`, {
      params: { fid },
    }).then(rs => {
      const { code, data } = rs
      commit(types.DELINVALIDVIDEO_SUCCESS, code === 0 ? data.state : 2)
    }, () => {
      commit(types.DELINVALIDVIDEO_SUCCESS, 2)
    })
}

/**
 * 播单收藏夹列表
 * vmid (int) 用户ID 不填为登陆用户
 * pn (int) 页码
 * ps (int) 分页大小
 */
export const fetchFavedPlaylists = ({ commit }, params) => {
  commit(types.GETPLAYLIST_START)
  return Vue.http
    .jsonp(PLAYLIST_API, { params })
    .then(rs => {
      const { code, data, message } = rs
      data.list = data.list.map(pl => {
        pl.name = pl.name.decodeHTML()
        return pl
      })
      if (+code === 0) {
        commit(types.GETPLAYLIST_SUCCESS, data)
      } else {
        commit(types.GETPLAYLIST_FAILURE)
        Vue.$warn(`获取播单收藏夹列表失败，${message}`)
      }
    }, () => {
      commit(types.GETTOPICS_FAILURE)
      Vue.$warn('获取播单收藏夹列表失败，网络错误')
    })
}

/**
 * 取消收藏播单
 *
 * pid (int) 播单ID
 */

export const delFavedPlaylist = ({ commit }, pid) => {
  return Vue.http
    .post(`${PLAYLIST_API}/del`, { pid })
    .then(rs => {
      const { code, message } = rs.data
      if (+code === 0) {
        return Promise.resolve()
      } else {
        Vue.$warn(`取消播单失败了！ ∑(っ °Д °;)っ，
          ${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn(`取消播单失败了！∑(っ °Д °;)っ，网络错误`)
      return Promise.reject()
    })
}

/**
 * 取消收藏夹中相册
 */
export const setFavAlbumNum = ({ commit }, data) => {
  commit(types.SETALBUMNAV_SUCCESS, data)
}

/**
 * 取消收藏夹中影视
 */
export const setFavBangumiNum = ({ commit }, data) => {
  commit(types.SETFAVBANGUMINUM_SUCCESS, data)
}

/**
 * 获取创建的播单
 */
export const fetchCreatedFav = ({ commit }, { up_mid }) => {
  commit(types.FETCHCREATEDLIST_START)
  return Vue.http
    .get('//api.bilibili.com/x/v3/fav/folder/created/list-all', { params: { up_mid }, withCredentials: true })
    .then(rs => {
      const { code, data } = rs.data
      if (+code === 0) {
        commit(types.FETCHCREATEDLIST_SUCCESS, { ...data })
        return Promise.resolve()
      } else {
        commit(types.FETCHCREATEDLIST_FAILURE)
        return Promise.reject()
      }
    })
}

export const fetchHomeCreatedFav = ({ commit }, { up_mid, ps }) => {
  commit(types.FETCHCREATEDLIST_START)
  return Vue.http
    .get('//api.bilibili.com/x/v3/fav/folder/created/list', { params: { pn: 1, ps, up_mid }, withCredentials: true })
    .then(rs => {
      const { code, data } = rs.data
      if (+code === 0) {
        commit(types.FETCHCREATEDLIST_SUCCESS, { ...data })
        return Promise.resolve()
      } else {
        commit(types.FETCHCREATEDLIST_FAILURE)
        return Promise.reject()
      }
    })
}


/**
 * 遍历客态下已登录用户创建的收藏夹
 * @param {*} param0
 * @param {*} param1
 */
export const fetchMyCreatedFav = ({ commit }, { up_mid }) => {
  return Vue.http
    .get('//api.bilibili.com/x/v3/fav/folder/created/list-all', { params: { up_mid }, withCredentials: true })
    .then(rs => {
      const { code, data } = rs.data
      if (+code === 0) {
        commit(types.FETCHMYCREATEDLIST_SUCCESS, { ...data })
        return Promise.resolve()
      } else {
        return Promise.reject()
      }
    })
}

/**
 * 获取收藏的播单
 */
export const fetchCollectedFav = ({ commit }, { pn, ps, up_mid, isReSet }) => {
  return Vue.http
    .get('//api.bilibili.com/x/v3/fav/folder/collected/list', {
      params: {
        pn, ps, up_mid,
        platform: 'web',
      },
      withCredentials: true
    })
    .then(rs => {
      const { code, data = {} } = rs.data
      if (+code === 0) {
        commit(types.FETCHCOLLECTEDLIST_SUCCESS, { ...data, pn, ps, isReSet })
        return Promise.resolve()
      } else {
        return Promise.reject()
      }
    })
}

/**
 * 获取播单列表数据
 */
export const fetchFavDetails = ({ commit }, params) => {
  commit(types.FETCHFAVDETAILS_START)
  if (Vue.prototype.isIE) {
    params.t = Math.random()
  }
  return Vue.http
    .get('//api.bilibili.com/x/v3/fav/resource/list', {
      params: {
        ...params,
        platform: 'web',
      },
      withCredentials: true,
    })
    .then((rs) => {
      const { code, data } = rs.data
      if (+code === 0) {
        commit(types.FETCHFAVDETAILS_SUCCESS, data)
        return Promise.resolve(data)
      } else {
        commit(types.FETCHFAVDETAILS_FAILURE)
        return Promise.reject()
      }
    })
}

/**
 * 获取合集列表数据
 */
export const fetchCollectionDetails = ({ commit }, params) => {
  commit(types.FETCHFAVDETAILS_START)
  return Vue.http
    .get('//api.bilibili.com/x/space/fav/season/list', {
      params,
      withCredentials: true,
    })
    .then(rs => {
      const { code, data } = rs.data
      if (+code === 0) {
        let medias_data = data.medias.slice((params.pn - 1) * params.ps, params.ps * params.pn)
        data.medias = medias_data
        commit(types.FETCHFAVDETAILS_SUCCESS, data)
        return Promise.resolve(data)
      } else {
        commit(types.FETCHFAVDETAILS_FAILURE)
        return Promise.reject()
      }
    })
  
}

/**
 * 播单删除
 * @param {*} param0
 * @param {*} id
 */
export const delFavPlayList = ({ commit }, id) => {
  return Vue.http
    .post('//api.bilibili.com/x/v3/fav/folder/del', {
      media_ids: id,
      platform: 'web'
    }).then(rs => {
      const { code, message } = rs.data
      if (+code === 0) {
        commit(types.DELFAVPLAYLIST_SUCCESS, id)
        return Promise.resolve()
      } else {
        Vue.$warn(`删除收藏夹失败，${message}`)
        return Promise.reject()
      }
    })
}
/**
 * 播单排序
 * @param {*} param0
 * @param {*} ids
 */
export const sortFavPlayLiat = ({ commit }, ids) => {
  return Vue.http
    .post('//api.bilibili.com/x/v3/fav/folder/sort', {
      sort: ids,
    }).then(rs => {
      const { code, message } = rs.data
      if (+code === 0) {
        return Promise.resolve()
      } else {
        Vue.$warn(`收藏夹排序失败，${message}`)
        return Promise.reject()
      }
    })
}

/**
 * 播单点赞
 * @param {*} rid 播单id
 * @param {*} thumb_type  1赞/2取消赞
 * @param {*} type 11播单
 * @param {*} up_mid
 */
export const thumbUpOrDown = ({ commit }, { rid, thumb_type, type, up_mid }) => {
  return Vue.http
    .post('//api.bilibili.com/x/v3/fav/thump/up', {
      rid,
      thumb_type,
      type,
      up_mid,
    }).then(rs => {
      const { data, code, message } = rs.data
      if (+code === 0) {
        commit(types.THUMBUPORDOWN_SUCCESS, data)
        return Promise.resolve()
      } else {
        Vue.$warn(`播单点赞/取消点赞失败，${message}`)
        return Promise.reject()
      }
    })
}

export const collFavAdd = ({ commit }, id) => {
  return Vue.http
    .post('//api.bilibili.com/x/v3/fav/folder/fav', {
      media_id: id,
    }).then(rs => {
      const { code, message } = rs.data
      if (+code === 0) {
        commit(types.COLLFAVADD_SUCCESS)
        return Promise.resolve()
      } else {
        Vue.$warn(`播单收藏失败，${message}`)
        return Promise.reject()
      }
    })
}
/**
 * 删除收藏的播单
 * @param {*} param0
 * @param {*} id
 */
export const collFavDel = ({ commit }, { id, mid, mymid }) => {
  return Vue.http
    .post('//api.bilibili.com/x/v3/fav/folder/unfav', {
      media_id: id,
    }).then(rs => {
      const { code, message } = rs.data
      if (+code === 0) {
        if (+mid === +mymid) {
          commit(types.MYCOLLFAVDEL_SUCCESS, id)
        }
        commit(types.COLLFAVDEL_SUCCESS)
        return Promise.resolve()
      } else {
        Vue.$warn(`播单取消收藏失败，${message}`)
        return Promise.reject()
      }
    })
}
/**
 * 删除我订阅的合集
 * @param {*} param0 
 * @param {*} param1 
 */
export const collectionDel = ({ commit }, { id, mid, mymid }) => {
  return Vue.http
    .post('//api.bilibili.com/x/v3/fav/season/unfav', {
      season_id: id,
      platform: 'web'
    }).then(rs => {
      const { code, message } = rs.data
      if (+code === 0) {
        if (+mid === +mymid) {
          commit(types.MYCOLLFAVDEL_SUCCESS, id)
        }
        return Promise.resolve()
      } else {
        Vue.$warn(`播单取消收藏失败，${message}`)
        return Promise.reject()
      }
    })
}

/**
 * 取消收藏播单中的稿件
 * @param {*} param0
 * @param {*} param1
 */
export const delFavVideo = ({ commit }, { resources, media_id }) => {
  return Vue.http
    .post('//api.bilibili.com/x/v3/fav/resource/batch-del', {
      resources,
      media_id,
      platform: 'web'
    }).then(rs => {
      const { code, message } = rs.data
      if (+code === 0) {
        // commit(types.DELFAVVIDEO_SUCCESS, { resources, media_id })
        return Promise.resolve()
      } else {
        Vue.$warn(`取消播单视频失败，${message}`)
        return Promise.reject()
      }
    })
}

export const sharePlayList = ({ commit }, { rid, r_type, cnt_type }) => {
  return Vue.http
    .post('//api.bilibili.com/x/v3/fav/statistics/count', {
      rid,
      r_type,
      cnt_type,
    }).then(rs => {
      const { code } = rs.data
      if (+code === 0) {
        return Promise.resolve()
      } else {
        console.log('播单分享上报失败')
        return Promise.reject()
      }
    })
}

export const modalAddFav = ({ commit }, { title, privacy = 0, isOwner }) => {
  commit(types.MODALADDFAV_LOAD, true)
  return Vue.http.post('//api.bilibili.com/x/v3/fav/folder/add', {
    title,
    privacy,
  }).then(rs => {
    const { code, data } = rs.data
    commit(types.MODALADDFAV_LOAD, false)
    if (+code === 0) {
      commit(types.MODALADDFAV_SUCCESS, { data, isOwner })
      return Promise.resolve(data)
    } else {
      Vue.$warn('操作失败，请重试')
      return Promise.reject()
    }
  }).catch(err => {
    commit(types.MODALADDFAV_LOAD, false)
    Vue.$warn(`新建收藏夹失败, ${err}`)
    return Promise.reject()
  })
}
