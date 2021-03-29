import axios from 'axios'
import { cookie } from 'g-public/js/utils'

import qs from "querystring"

const isClient = process.env.VUE_ENV === 'client'
const domain = isClient ? '//api.bilibili.com' : '//api.bilibili.co'

// 获取运营位数据
export const getLocs = (ids, { cookie={}, headers={}, surl={} } = {} ) => {
  let config = {
    url: `${domain}/x/web-show/res/locs`,
    query: {
      pf: 0,
      ids: ids
    },
    withCredentials: true,
  }
  if (!isClient) {
    config.headers = headers
    delete config.headers['referer']
    config.sUrl = surl['main.web-svr.web-show'] || ''
  }
  return axios(config)
}

// 获取推荐位数据
export const getRecommend = (query = {}, context ={}) => {
  const cookie = isClient ? document.cookie : context && context.cookie
  const config = {
    url: `${domain}/x/web-interface/index/top/rcmd`,
    query,
    withCredentials: true,
  }
  if (!isClient) {
    config.headers = {
      cookie: cookie || '',
      'X-BACKEND-BILI-REAL-IP': context && context.ip || '',
    }
    config.sUrl = context.surl && context.surl['web.interface'] || ''
    config.encode = true
  }
  return axios(config)
}

// 获取在线人数 & 最新投稿数
export const getOnline = () => {
  return axios({
    url: '//api.bilibili.com/x/web-interface/online'
  })
}

// 获取分区楼层视频卡片数据
export const getRegion = (query) => {
  return axios({
    url: '//api.bilibili.com/x/web-interface/dynamic/region',
    query: query
  })
}

// 获取分区楼层视频卡片数据（最新投稿）
export const getRegionLatest = (query) => {
  return axios({
    url: '//api.bilibili.com/x/web-interface/information',
    query: query
  })
}

// 获取分区楼层排行榜数据
export const getRank = (query) => {
  return axios({
    url: '//api.bilibili.com/x/web-interface/ranking/region',
    query: query
  })
}

// 获取番剧和国创timeline
export const getTimeline = (query) => {
  return axios({
    url: '//api.bilibili.com/pgc/web/timeline/v2',
    query: query
  })
}

// 获取番剧和国创rank
export const getPGCRank = (query) => {
  let url = '//api.bilibili.com/pgc/web/rank/list'
  if ([2,3,4,5].indexOf(query.season_type) !== -1) {
    url = '//api.bilibili.com/pgc/season/rank/web/list'
  }
  return axios({
    url,
    query: query
  })
}

// 获取番剧、国创特别推荐
export const getSpecialRecommend = (query) => {
  return axios({
    url: '//api.bilibili.com/pgc/operation/api/slideshow',
    query: query
  })
}

// 获取课堂推荐课程
export const getCheeseRecommend = (query) => {
  return axios({
    url: '//api.bilibili.com/pugv/app/web/floor/switch',
    query: query
  })
}

// 获取推荐漫画
export const getMangaPanel = (url, data) => {
  return axios({
    method: 'post',
    url: '//manga.bilibili.com/twirp/comic.v1.Comic/' + url,
    data,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    }
  })
}

// 获取漫画排行榜
export const getMangaRank = (url, data) => {
  return axios({
    url: '//manga.bilibili.com/twirp/comic.v1.Comic/' + url,
    method: 'post',
    data,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    }
  })
}

// 获取直播楼层数据
export const getLiveRoomRecommend = () => {
  return axios({
    url: '//api.live.bilibili.com/xlive/web-interface/v1/webMain/getList',
    query: {
      platform: 'web'
    }
  })
}

// 获取直播楼层换一换
export const getLiveRoomgetNewDynamic = () => {
  return axios({
    url: '//api.live.bilibili.com/xlive/web-interface/v1/webMain/getMoreRecList',
    query: {
      platform: 'web'
    }
  })
}

// 获取关注的主播
export const getFollowUp = (query) => {
  return axios({
    url: '//api.live.bilibili.com/relation/v1/feed/feed_list',
    query: query,
    withCredentials: true
  })
}

// 获取专栏楼层数据
export const getArticle = (query) => {
  return axios({
    url: '//api.bilibili.com/x/article/recommends',
    query: query
  })
}

// 获取专栏排行榜
export const getArticleRank = (query) => {
  return axios({
    url: '//api.bilibili.com/x/article/rank/list',
    query: query
  })
}

// 获取楼层排序
export const getElevatorSort = () => {
  return axios({
    url: '//api.bilibili.com/x/web-interface/index/sort',
    withCredentials: true
  })
}

// 设置楼层排序
export const setElevatorSort = (data) => {
  return axios({
    url: '//api.bilibili.com/x/web-interface/index/sort/set',
    method: 'post',
    data: qs.stringify(Object.assign(data, { csrf: cookie.get('bili_jct') })),
    withCredentials: true
  })
}

// 特别推荐
export const getSRecommend = () => {
  return axios({
    url: '//www.bilibili.com/index/recommend.json'
  })
}

// gif动图
export const getGif = () => {
  return axios({
    url: '//api.bilibili.com/x/web-interface/index/icon'
  })
}