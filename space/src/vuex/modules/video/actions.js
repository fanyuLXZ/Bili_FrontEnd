import * as types from 'mutations'
import Vue from 'vue'

/**
 * @description 投稿视频数据模型规划
 * @author      刘成
 * @date        2016/11/28
 */

/**
 * 获取用户投稿的视频
 *
 * type (string) 是用来展示还是用来供选择 zhanshi | xuanze
 * mid (int) 用户id
 * tid (int) 分类id
 * order (string) 排序字段，senddate：发布时间，click：点击时间
 * keyword (string) 关键字
 * page (int) 页码
 * pagesize (int) 每页显示的数量
 */
export const fetchZhanshiVideos = ({commit}, videoParams) => {
    // 选择类视频在加载更多的时候不需要触发start事件
    commit(types.FETCHSUBMITVIDEOS_START)
    return Vue.http.get('//api.bilibili.com/x/space/arc/search', {params: videoParams, withCredentials: true})
        .then(rs => {
            const {data, code} = rs.data
            if (+code === 0) {
                commit(types.GETSUBMITVIDEOS_SUCCESS, data)
                return Promise.resolve()
            } else {
                commit(types.GETSUBMITVIDEOS_FAILURE)
                return Promise.reject()
            }
        }, () => {
            commit(types.GETSUBMITVIDEOS_FAILURE)
            return Promise.reject()
        })
}

export const fetchXuanzeVideos = ({commit}, videoParams) => {
    return Vue.http.get('//api.bilibili.com/x/space/arc/search', {params: videoParams, withCredentials: true})
        .then(rs => {
            const {data: {list, page}, code} = rs.data
            if (+code === 0) {
                const _page = videoParams.pn
                const totalPage = Math.ceil(page.count / page.ps)
                if (videoParams.check_id) {
                    if (list.vlist.length > 1) {
                        return Promise.resolve({vlist: list.vlist, pages: totalPage, count: page.count, pn: page.pn})
                    } else {
                        // 如果不是最后一页，就继续往前请求
                        if (_page < totalPage) {
                            videoParams.pn++
                            return fetchXuanzeVideos({commit}, videoParams)
                        } else {
                            return Promise.resolve({
                                vlist: list.vlist,
                                pages: totalPage,
                                count: page.count,
                                pn: page.pn
                            })
                        }
                    }
                } else {
                    return Promise.resolve({vlist: list.vlist, pages: totalPage, count: page.count, pn: page.pn})
                }
            } else {
                Vue.$warn('获取用户投稿视频失败')
                return Promise.reject()
            }
        }, () => {
            Vue.$warn('获取用户投稿视频失败')
            return Promise.reject()
        })
}

export const clearSelectVideos = ({commit}) => {
    commit(types.CLEARSELECTVIDEOS)
}
