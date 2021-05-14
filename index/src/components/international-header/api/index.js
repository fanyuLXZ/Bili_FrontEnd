/* eslint-disable */
import axios from 'g-public/js/axios/caxios'

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
    url: '//api.bilibili.org/region/online/all',
    withCredentials: true,
  })
}

// 获取运营位数据
export const getLocs = (ids) => {
  return{
    data:{"code":0,"count":2,"data":{"2836":[{"id":685296,"contract_id":"","pos_num":1,"name":"0.6元/天开超Q双会员领限量装扮","pic":"http://i0.hdslb.com/bfs/feed-admin/9c5dc48ca0558b721d8b12fe590772b0e2f0bcba.png","litpic":"","url":"https://www.bilibili.com/blackboard/activity-e2Nd4wK_i.html?from=qqspringfstvdingdao","style":0,"agency":"","label":"","intro":"","creative_type":0,"request_id":"1617077837","src_id":2838,"area":1,"is_ad_loc":false,"ad_cb":"","title":"","server_type":0,"cm_mark":0,"stime":1616572800,"mid":"26119890","activity_type":0,"epid":0,"season":null,"room":null,"sub_title":"QQ联合会员","ad_desc":"","adver_name":"","null_frame":false}],"2837":[{"id":580136,"contract_id":"","pos_num":2,"name":"双会员促销","pic":"http://i0.hdslb.com/bfs/archive/8ef3913c48dde27488a7ec5cb8a88d5ef89e74a0.png","litpic":"","url":"https://www.bilibili.com/blackboard/activity-qqyy.html?sub_id_from=appJD","style":0,"agency":"","label":"","intro":"","creative_type":0,"request_id":"1617077837","src_id":2840,"area":1,"is_ad_loc":false,"ad_cb":"","title":"","server_type":0,"cm_mark":0,"stime":1601263320,"mid":"26119890","activity_type":0,"epid":0,"season":null,"room":null,"sub_title":"","ad_desc":"","adver_name":"","null_frame":false}],"2870":null,"2953":null,"2954":null,"2955":null,"2956":null},"message":"0"}
  }
  // axios({
  //   url: '//api.bilibili.com/x/web-show/res/locs',
  //   query: {
  //     pf: 0,
  //     ids: ids,
  //   },
  //   timeout: 4000,
  //   withCredentials: true
  // })
}

// 获取头像：关注/粉丝/动态
export const getAvatarNav = () => {
  return {
    data:
        {"code":0,"message":"0","ttl":1,"data":{"following":110,"follower":91,"dynamic_count":4}}
  }
  // axios({
  //   url: '//api.bilibili.com/x/web-interface/nav/stat',
  //   withCredentials: true,
  // })
}


// 获取顶导历史记录
export const getNavHistory = (type) => {
  return axios({
    url: '//api.bilibili.org/history/cursor',
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
    url: '//api.bilibili.org/fav/folder',
    withCredentials: true,
  })
}

// 获取收藏夹详情
export const getNavFavDetail = (media_id) => {
  return axios({
    url: '//api.bilibili.org/fav/resource',
    withCredentials: true,
    query: {
      platform: 'web',
      media_id,
    },
  })
}

// 获取稍后再看详情
export const getNavViewLaterDetail = () => {
  return {
    data:{"code":0,"message":"0","ttl":1,"data":{"count":1,"list":[{"aid":886689622,"videos":1,"tid":47,"tname":"短片·手书·配音","copyright":1,"pic":"http://i0.hdslb.com/bfs/archive/bfeab52e820da75656cd857ba11058e5c6416046.jpg","title":"如果DIO是女孩子（日语配音）","pubdate":1613872807,"ctime":1613312851,"desc":"感谢水带的背景带～～～\n你看我DIO吗？","state":0,"duration":319,"rights":{"bp":0,"elec":0,"download":0,"movie":0,"pay":0,"hd5":1,"no_reprint":1,"autoplay":1,"ugc_pay":0,"is_cooperation":0,"ugc_pay_preview":0,"no_background":0},"owner":{"mid":11073,"name":"hanser","face":"http://i2.hdslb.com/bfs/face/0a9546e9733bfb60d3000c108f0db26156d8d430.jpg"},"stat":{"aid":886689622,"view":2898811,"danmaku":11226,"reply":7151,"favorite":99330,"coin":161021,"share":42039,"now_rank":0,"his_rank":5,"like":296939,"dislike":0},"dynamic":"你看我DIO吗？","dimension":{"width":1920,"height":1080,"rotate":0},"pages":[{"cid":297710016,"page":1,"from":"vupload","part":"dio配音 hanser","duration":319,"vid":"","weblink":"","dimension":{"width":1920,"height":1080,"rotate":0}}],"cid":297710016,"progress":-1,"add_at":1617070789,"bvid":"BV16K4y1n7tJ","uri":"https://www.bilibili.com/medialist/play/watchlater/BV16K4y1n7tJ"}]}}
  }
  // axios({
  //   url: '//api.bilibili.com/x/v2/history/toview/web',
  //   withCredentials: true,
  //   dataType: 'jsonp',
  //   query: {
  //     jsonp: 'jsonp',
  //   },
  // })
}


// header 频道更新
export const getChannelUpdate = () => {
  return {
    data:{"code":0,"message":"0","ttl":1,"data":{"cover":"http://i0.hdslb.com/bfs/tag/72e3dc6aad2037ed8ff179e7f90c99eb519836df.jpg","channel_id":9222,"channel_name":"英雄联盟","notify":true,"ctype":2,"subscribed_count":5}}
  }
  // axios({
  //   url: '//api.bilibili.com/x/web-interface/web/channel/red',
  //   withCredentials: true,
  // })
}

export const postLogout = () => {

  const Cookie = require('js-cookie')
  const qs = require('qs')

  return axios({
    method: 'post',
    url: '//api.bilibili.org/safety/logout',
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
