import axios from 'axios'

// 获取登录信息
export const getUserInfo = () => {
  return axios({
    url: '//api.bilibili.com/x/web-interface/nav',
    withCredentials: true,
    timeout: 4000,
  })
}

// 获取导航更新数字
export const getOnline = () => {
  return axios({
    url: '//api.bilibili.com/x/web-interface/online',
  })
}

// 获取运营位数据
export const getLocs = (ids) => {
  return axios({
    url: '//api.bilibili.com/x/web-show/res/locs',
    query: {
      pf: 0,
      ids: ids,
    },
    timeout: 4000,
    withCredentials: true
  })
}

// 获取头像：关注/粉丝/动态
export const getAvatarNav = () => {
  return axios({
    url: '//api.bilibili.com/x/web-interface/nav/stat',
    withCredentials: true,
  })
}


// 获取顶导历史记录
export const getNavHistory = (type) => {
  return axios({
    url: '//api.bilibili.com/x/web-interface/history/cursor',
    query: {
      type,
      ps: 20,
    },
    withCredentials: true,
  })
}


// 获取收藏夹列表
export const getNavFavList = () => {
  return axios({
    url: '//api.bilibili.com/x/v3/fav/folder/list4navigate',
    withCredentials: true,
  })
}

// 获取收藏夹详情
export const getNavFavDetail = (media_id) => {
  return axios({
    url: '//api.bilibili.com/x/v3/fav/resource/list4navigate',
    withCredentials: true,
    query: {
      platform: 'web',
      media_id,
    },
  })
}

// 获取稍后再看详情
export const getNavViewLaterDetail = () => {
  return axios({
    url: '//api.bilibili.com/x/v2/history/toview/web',
    withCredentials: true,
    dataType: 'jsonp',
    query: {
      jsonp: 'jsonp',
    },
  })
}


// header 频道更新
export const getChannelUpdate = () => {
  return axios({
    url: '//api.bilibili.com/x/web-interface/web/channel/red',
    withCredentials: true,
  })
}

export const postLogout = () => {

  const Cookie = require('js-cookie')
  const qs = require('qs')

  return axios({
    method: 'post',
    url: '//passport.bilibili.com/login/exit/v2',
    withCredentials: true,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify({
      biliCSRF: Cookie.get('bili_jct'),
      gourl: window.location.toString(),
    }),
  })
}

// 动态头像入口点击记录
// http://bapi.bilibili.co/project/4474/interface/api/169113
export const postDynamicEntranceClick = data => {
  const Cookie = require('js-cookie')
  const qs = require('qs')
  return axios({
    method: 'post',
    url: '//api.bilibili.com/x/dynamic/feed/web-entrance/click',
    withCredentials: true,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(Object.assign({ csrf: Cookie.get('bili_jct') }, data)),
  })
}
