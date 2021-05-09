/* eslint-disable */
import * as types from 'mutations'
import Vue from 'vue'

const PLAYLIST_API = '//api.bilibili.com/x/playlist'

/**
 * 播单列表
 *
 * vmid (int) 用户ID 不填为登陆用户
 * pn (int) 页码
 * ps (int) 分页大小
 */
export const fetchPlaylists = ({commit}, params) => {
    commit(types.GETPLAYLIST_START)
    Vue.http
        .jsonp(PLAYLIST_API, {params})
        .then(rs => {
            const {code, data, message} = rs
            if (+code === 0) {
                data.list.forEach(pl => {
                    pl.name = pl.name.decodeHTML()
                    pl.description = pl.description.decodeHTML()
                })
                commit(types.GETPLAYLIST_SUCCESS, data)
            } else {
                commit(types.GETPLAYLIST_FAILURE)
                Vue.$warn(`请求播单列表失败，${message}`)
            }
        }, () => {
            commit(types.GETPLAYLIST_FAILURE)
            Vue.$warn('请求播单列表失败，网络错误')
        })
}

/**
 * 播单信息
 *
 * pid (int) 播单ID
 * vmid (int) 用户ID 不填为登陆用户
 */
export const getPlaylistInfo = ({commit}, params) => {
    commit(types.GETPLAYLISTINFO_START)
    return Vue.http
        .jsonp(`${PLAYLIST_API}/info`, {params})
        .then(rs => {
            const {code, data, message} = rs
            if (+code === 0) {
                data.name = data.name.decodeHTML()
                data.description = data.description.decodeHTML()
                commit(types.GETPLAYLISTINFO_SUCCESS, data)
                return Promise.resolve(data)
            } else {
                commit(types.GETPLAYLISTINFO_FAILURE)
                Vue.$warn(`请求播单信息失败，${message}`)
                return Promise.reject()
            }
        }, () => {
            commit(types.GETPLAYLISTINFO_FAILURE)
            Vue.$warn('请求播单信息失败，网络错误')
            return Promise.reject()
        })
}

/**
 * 播单视频列表
 *
 * pid (int) 播单ID
 * pn (int) 页码
 * ps (int) 分页大小
 */
export const getPlaylistVideo = ({commit}, params) => {
    return Vue.http
        .jsonp(`${PLAYLIST_API}/video`, {params})
        .then(rs => {
            const {code, data, message} = rs
            if (+code === 0) {
                data.list = data.list.map(video => {
                    video.desc = video.desc.decodeHTML()
                    video.title = video.title.decodeHTML()
                    video.play_desc = video.play_desc.decodeHTML()

                    return video
                })
                return Promise.resolve(data.list)
            } else {
                Vue.$warn(`请求播单视频列表失败，${message}`)
                return Promise.resolve([])
            }
        }, () => {
            Vue.$warn('请求播单视频列表失败，网络错误')
            return Promise.resolve([])
        })
}

/**
 * 播单视频排序
 *
 * pid (int) 播单ID
 * aid (int) 视频ID
 * sort (int) 排序数，置顶传1，置底传播单稿件数
 */
export const editPlaylistSort = ({commit}, {pid, aid, sort}) => {
    return Vue.http
        .post(`${PLAYLIST_API}/video/sort`, {
            pid,
            aid,
            sort,
        }).then(rs => {
            const {code, message} = rs.data
            if (+code === 0) {
                return Promise.resolve()
            } else {
                Vue.$message(`更改视频排序失败，请刷新后重试（${message}）`, '更改视频排序失败', {
                    cancelButton: {
                        show: false,
                    },
                    confirmButton: {
                        text: '知道啦',
                    },
                })
                return Promise.reject()
            }
        }, () => {
            Vue.$message('设置播单视频排序失败 ∑(っ °Д °;)っ，网络错误', '更改视频排序失败', {
                cancelButton: {
                    show: false,
                },
                confirmButton: {
                    text: '知道啦',
                },
            })
            return Promise.reject()
        })
}

/**
 * 删除播单
 *
 * pid (int) 播单ID
 */
export const delPlaylist = ({commit}, pid) => {
    return Vue.http
        .post(`${PLAYLIST_API}/del`, {
            pid,
        }).then(rs => {
            const {code, message} = rs.data
            if (+code === 0) {
                return Promise.resolve()
            } else {
                Vue.$warn(`删除播单失败，${message}`)
                return Promise.reject()
            }
        }, () => {
            Vue.$warn('删除播单失败 ∑(っ °Д °;)っ，网络错误')
            return Promise.reject()
        })
}
/**
 * 删除播单视频
 *
 * pid (int) 播单ID
 * aids (string)  视频ID已逗号隔开 1,2,3
 */
export const delPlaylistVideo = ({commit}, {pid, aids}) => {
    return Vue.http
        .post(`${PLAYLIST_API}/video/del`, {
            pid,
            aids,
        }).then(rs => {
            const {code, message} = rs.data
            if (+code === 0) {
                return Promise.resolve()
            } else {
                Vue.$warn(`删除播单视频失败，${message}`)
                return Promise.reject()
            }
        }, () => {
            Vue.$warn('删除播单视频失败 ∑(っ °Д °;)っ，网络错误')
            return Promise.reject()
        })
}

/**
 * 更新播单
 *
 * pid (int) 播单ID
 * name（string) 播单标题
 * public（int) 播单属性:默认0公开 1私有(一期只用0)
 * cover（string) 播单封面
 * description（string) 播单描述
 */
export const updatePlaylist = ({commit}, params) => {
    return Vue.http
        .post(`${PLAYLIST_API}/update`, params)
        .then(rs => {
            const {code, message} = rs.data
            if (+code === 0) {
                return Promise.resolve()
            } else {
                Vue.$warn(`更新播单失败，${message}`)
                return Promise.reject()
            }
        }, () => {
            Vue.$warn('更新播单失败 ∑(っ °Д °;)っ，网络错误')
            return Promise.reject()
        })
}

/**
 * 新建播单
 *
 * name（string) 播单标题
 * public（int) 播单属性:默认0公开 1私有(一期只用0)
 * cover（string) 播单封面
 * description（string) 播单描述
 */
export const createPlaylist = ({commit}, params) => {
    return Vue.http
        .post(`${PLAYLIST_API}/add`, params)
        .then(rs => {
            const {code, message, data} = rs.data
            if (+code === 0) {
                return Promise.resolve(data.pid)
            } else {
                Vue.$warn(`新建播单失败，${message}`)
                return Promise.reject()
            }
        }, () => {
            Vue.$warn('新建播单失败 ∑(っ °Д °;)っ，网络错误')
            return Promise.reject()
        })
}

/**
 * 修改播单视频描述
 *
 * pid (int) 播单ID
 * aid (int) 视频ID
 * desc (string)  描述
 */
export const updatePlaylistVideoDesc = ({commit}, {pid, aid, desc}) => {
    return Vue.http
        .post(`${PLAYLIST_API}/video/desc/edit`, {
            pid,
            aid,
            desc,
        }).then(rs => {
            const {code, message} = rs.data
            if (+code === 0) {
                return Promise.resolve()
            } else {
                Vue.$warn(`更新视频描述失败，${message}`)
                return Promise.reject()
            }
        }, () => {
            Vue.$warn('更新视频描述失败 ∑(っ °Д °;)っ，网络错误')
            return Promise.reject()
        })
}

/**
 * 通过avid添加视频
 *
 * pid (int) 播单id
 * aids (string) 视频ID，用逗号隔开
 */
export const addVideos = ({commit}, params) => {
    return Vue.http
        .post(`${PLAYLIST_API}/video/add`, params)
        .then(rs => {
            const {code, data, message} = rs.data

            if (+code === 0) {
                return Promise.resolve(data)
            } else {
                Vue.$warn(`添加视频失败，${message}`)
                return Promise.reject(message)
            }
        }, () => {
            Vue.$warn('添加视频失败 ∑(っ °Д °;)っ，网络错误')
            return Promise.reject()
        })
}

/**
 * 通过关键字搜索视频
 *
 * keyword (string) 搜索关键词
 * pn (int) 页码
 * ps (int) 每页个数
 */
export const searchVideos = ({commit}, params) => {
    return Vue.http
        .jsonp(`${PLAYLIST_API}/video/search`, {params})
        .then(rs => {
            const {code, data, message} = rs

            if (+code === 0) {
                return Promise.resolve(data)
            } else {
                Vue.$warn(`搜索视频失败，${message}`)
                return Promise.reject(message)
            }
        }, () => {
            Vue.$warn('搜索视频失败 ∑(っ °Д °;)っ，网络错误')
            return Promise.reject()
        })
}

/**
 * 批量检查aid合法性
 *
 * pid (int) 播单ID
 * aids (string) 视频id，用逗号隔开
 */
export const checkVideos = ({commit}, params) => {
    return Vue.http
        .post(`${PLAYLIST_API}/video/check`, params)
        .then(rs => {
            const {code, data, message} = rs.data

            if (+code === 0) {
                return Promise.resolve(data)
            } else {
                Vue.$warn(`校验视频失败，${message}`)
                return Promise.reject(message)
            }
        }, () => {
            Vue.$warn('校验视频失败 ∑(っ °Д °;)っ，网络错误')
            return Promise.reject()
        })
}

// 获取视频封面
export const uploadCover = ({commit}, cover) => {
    return Vue.http.post('//member.bilibili.com/x/vu/web/cover/up', {
        jsonp: 'jsonp',
        cover,
    }).then(rs => {
        const {code, data, msg} = rs.data
        if (+code === 0) {
            return Promise.resolve(data)
        } else {
            return Promise.reject(msg || '上传失败')
        }
    }, () => {
        return Promise.reject('上传失败，网络错误')
    })
}

/**
 * 播单白名单
 */
export const getPlaylistAuth = ({commit}, {vmid}) => {
    Vue.http
        .jsonp(`${PLAYLIST_API}/whitelist`, {
            params: {vmid},
        }).then(rs => {
        const {code, data, message} = rs
        if (code === 0) {
            if (data.power) {
                commit(types.GETPLAYLISTAUTH, {
                    auth: true,
                })
            } else {
                commit(types.GETPLAYLISTAUTH, {
                    auth: false,
                })
            }
        } else {
            console.warn('播单白名单获取失败，' + message)
            commit(types.GETPLAYLISTAUTH, {
                auth: false,
            })
        }
    }, () => {
        console.warn('播单白名单获取失败，网络错误')
        commit(types.GETPLAYLISTAUTH, {
            auth: false,
        })
    })
}

export const installPlaylistAuth = ({commit}, auth) => {
    commit(types.GETPLAYLISTAUTH, {auth})
}
