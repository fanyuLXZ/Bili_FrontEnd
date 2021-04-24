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
  return {
    data:{"code":0,"message":"0","ttl":1,"data":{"region_count":{"1":1853,"11":0,"119":45,"129":588,"13":116,"138":2533,"155":1851,"160":23213,"165":0,"167":212,"17":4418,"177":94,"181":6403,"188":924,"202":285,"211":1127,"217":1622,"23":0,"3":3563,"36":5943,"4":19237,"5":4054,"75":446,"76":474}}}
  }
  // axios({
  //   url: '//api.bilibili.com/x/web-interface/online',
  // })
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
  return {
    data:{"code":0,"message":"0","ttl":1,"data":{"cursor":{"max":887372724,"view_at":1616929176,"business":"archive","ps":20},"tab":[{"type":"archive","name":"视频"},{"type":"live","name":"直播"},{"type":"article","name":"专栏"}],"list":[{"title":"【中文翻译】Gorilla Attack -月 (Official Lyric Video)","long_title":"","cover":"http://i2.hdslb.com/bfs/archive/ce878884105a8bf19cb656ea51e0624e1441a1df.png","covers":null,"uri":"","history":{"oid":839488942,"epid":0,"bvid":"BV1D54y127gN","page":1,"cid":294280971,"part":"y2mate.com - Gorilla Attack 月 Official Lyric Video_1080p","business":"archive","dt":2},"videos":1,"author_name":"たなか_非公式搬运点","author_face":"http://i2.hdslb.com/bfs/face/3015b102226a0f7af695ed9f1da417780b2e9028.jpg","author_mid":31716707,"view_at":1617044815,"progress":1,"badge":"","show_title":"","duration":189,"current":"","total":0,"new_desc":"","is_finish":0,"is_fav":0,"kid":839488942,"tag_name":"MV","live_status":0},{"title":"【电鸟】月-Gorilla Attack","long_title":"","cover":"http://i1.hdslb.com/bfs/archive/8108924fa2c953e194461d4383e9c7b368ecb2d7.jpg","covers":null,"uri":"","history":{"oid":887365778,"epid":0,"bvid":"BV1aK4y1N7cy","page":1,"cid":316994895,"part":"月","business":"archive","dt":2},"videos":1,"author_name":"电鸟个灯泡","author_face":"http://i0.hdslb.com/bfs/face/7ea5d2394c9b619f2fe7d012b51c321c0be94001.jpg","author_mid":3301695,"view_at":1617044775,"progress":-1,"badge":"","show_title":"","duration":82,"current":"","total":0,"new_desc":"","is_finish":0,"is_fav":0,"kid":887365778,"tag_name":"翻唱","live_status":0},{"title":"赛马娘 第二季","long_title":"梦想奔驰","cover":"http://i0.hdslb.com/bfs/archive/2bd5e34e416318587e213a92faa1885b13c221a5.jpg","covers":null,"uri":"https://www.bilibili.com/bangumi/play/ss36579","history":{"oid":289761294,"epid":375012,"bvid":"","page":0,"cid":316796526,"part":"","business":"pgc","dt":2},"videos":0,"author_name":"","author_face":"","author_mid":0,"view_at":1617044692,"progress":1369,"badge":"番剧","show_title":"第13话 梦想奔驰","duration":1436,"current":"","total":13,"new_desc":"全13话","is_finish":1,"is_fav":0,"kid":36579,"tag_name":"","live_status":0},{"title":"友 尽","long_title":"","cover":"http://i0.hdslb.com/bfs/live/new_room_cover/031e980678339547c862062d31f33818e8b8d5d2.jpg","covers":null,"uri":"https://live.bilibili.com/17961","history":{"oid":17961,"epid":0,"bvid":"","page":0,"cid":0,"part":"","business":"live","dt":2},"videos":0,"author_name":"赫萝老师","author_face":"http://i2.hdslb.com/bfs/face/f3776594fc0ff076bdfcc8fc4921327239a7150e.jpg","author_mid":1351379,"view_at":1617040761,"progress":0,"badge":"未开播","show_title":"","duration":0,"current":"","total":0,"new_desc":"","is_finish":0,"is_fav":0,"kid":17961,"tag_name":"其他单机","live_status":0},{"title":"日常：聊聊天呗！","long_title":"","cover":"http://i0.hdslb.com/bfs/live/new_room_cover/aac3e640ce34a09a9e3350f4963bf7d675090d9c.jpg","covers":null,"uri":"https://live.bilibili.com/620373","history":{"oid":620373,"epid":0,"bvid":"","page":0,"cid":0,"part":"","business":"live","dt":2},"videos":0,"author_name":"差评TV","author_face":"http://i0.hdslb.com/bfs/face/80dbbf294ead75b70da582078c9dbb6c1953bdfb.jpg","author_mid":31880257,"view_at":1617033727,"progress":0,"badge":"未开播","show_title":"","duration":0,"current":"","total":0,"new_desc":"","is_finish":0,"is_fav":0,"kid":620373,"tag_name":"视频聊天","live_status":0},{"title":"焦土，休闲，吃甲龙","long_title":"","cover":"http://i0.hdslb.com/bfs/live/86bcc6ba40651de8d733be32a1423c39e3a3a769.jpg","covers":null,"uri":"https://live.bilibili.com/1758717","history":{"oid":1758717,"epid":0,"bvid":"","page":0,"cid":0,"part":"","business":"live","dt":2},"videos":0,"author_name":"萝王2号","author_face":"http://i0.hdslb.com/bfs/face/cda5231323bc0e641553bc175c36417938b02d06.jpg","author_mid":11264229,"view_at":1617033710,"progress":0,"badge":"未开播","show_title":"","duration":0,"current":"","total":0,"new_desc":"","is_finish":0,"is_fav":0,"kid":1758717,"tag_name":"方舟","live_status":0},{"title":"【Zc】进来唠嗑~回家啦不卡啦","long_title":"","cover":"http://i0.hdslb.com/bfs/live/new_room_cover/cf7d4d3b2f336c6dba299644c3af952c5db82612.jpg","covers":null,"uri":"https://live.bilibili.com/3044248","history":{"oid":3044248,"epid":0,"bvid":"","page":0,"cid":0,"part":"","business":"live","dt":2},"videos":0,"author_name":"魔法Zc目录","author_face":"http://i0.hdslb.com/bfs/face/a84fa10f90f7060d0336384954ee1cde7a8e9bc6.jpg","author_mid":13164144,"view_at":1617022119,"progress":0,"badge":"未开播","show_title":"","duration":0,"current":"","total":0,"new_desc":"","is_finish":0,"is_fav":0,"kid":3044248,"tag_name":"明日方舟","live_status":0},{"title":"周一读书电台","long_title":"","cover":"http://i0.hdslb.com/bfs/live/new_room_cover/4b8b739f98a86feca353c6567d007284087e7897.jpg","covers":null,"uri":"https://live.bilibili.com/42062","history":{"oid":42062,"epid":0,"bvid":"","page":0,"cid":0,"part":"","business":"live","dt":2},"videos":0,"author_name":"瓶子君152","author_face":"http://i1.hdslb.com/bfs/face/98e257964e64dd8cf27b0a52779724aed9a614e9.jpg","author_mid":730732,"view_at":1617022115,"progress":0,"badge":"未开播","show_title":"","duration":0,"current":"","total":0,"new_desc":"","is_finish":0,"is_fav":0,"kid":42062,"tag_name":"聊天电台","live_status":0},{"title":"《阴阳师》源博雅新皮肤情报（CV：铃木达央）| 疾羽破空，响遏行云","long_title":"","cover":"http://i2.hdslb.com/bfs/archive/a2d6dc2414acc327d788d90214b3593905f17c7e.jpg","covers":null,"uri":"","history":{"oid":887269460,"epid":0,"bvid":"BV1kK4y1T7P3","page":1,"cid":316914753,"part":"《阴阳师》源博雅新皮肤情报（CV：铃木达央）疾羽破空，响遏行云","business":"archive","dt":2},"videos":1,"author_name":"网易阴阳师手游","author_face":"http://i2.hdslb.com/bfs/face/d65f7f562caed17ee728437b6676740e5bdca268.jpg","author_mid":30973654,"view_at":1617021910,"progress":-1,"badge":"","show_title":"","duration":32,"current":"","total":0,"new_desc":"","is_finish":0,"is_fav":0,"kid":887269460,"tag_name":"手机游戏","live_status":0},{"title":"【高中生必看】新·高考志愿填报小心这些坑！","long_title":"","cover":"http://i2.hdslb.com/bfs/archive/e396fbefbe3ca9ac9646233ed99b62067a82d852.jpg","covers":null,"uri":"","history":{"oid":374873249,"epid":0,"bvid":"BV1QZ4y1F7wh","page":1,"cid":315547922,"part":"0327第二期_20210326_182331","business":"archive","dt":2},"videos":1,"author_name":"今年我高考","author_face":"http://i2.hdslb.com/bfs/face/181485b7f3f66a706a233ec6705a0603a7527ced.jpg","author_mid":652105250,"view_at":1616995429,"progress":927,"badge":"","show_title":"","duration":2696,"current":"","total":0,"new_desc":"","is_finish":0,"is_fav":0,"kid":374873249,"tag_name":"校园学习","live_status":0},{"title":"悠哉日常大王 第三季","long_title":"樱花又开了","cover":"http://i0.hdslb.com/bfs/archive/932153196715b8a60f65991d0e6b00d62df4c1f8.jpg","covers":null,"uri":"https://www.bilibili.com/bangumi/play/ss36204","history":{"oid":289815269,"epid":374728,"bvid":"","page":0,"cid":316570136,"part":"","business":"pgc","dt":2},"videos":0,"author_name":"","author_face":"","author_mid":0,"view_at":1616994949,"progress":-1,"badge":"番剧","show_title":"第12话 樱花又开了","duration":1435,"current":"","total":12,"new_desc":"全12话","is_finish":1,"is_fav":0,"kid":36204,"tag_name":"","live_status":0},{"title":"怪物事变","long_title":"「怪物事变」","cover":"http://i0.hdslb.com/bfs/archive/2511104208ed0337258c3c847ebba2c23d659966.jpg","covers":null,"uri":"https://www.bilibili.com/bangumi/play/ss36241","history":{"oid":587363179,"epid":373999,"bvid":"","page":0,"cid":316329172,"part":"","business":"pgc","dt":2},"videos":0,"author_name":"","author_face":"","author_mid":0,"view_at":1616952777,"progress":2,"badge":"番剧","show_title":"第12话 「怪物事变」","duration":1421,"current":"","total":12,"new_desc":"全12话","is_finish":1,"is_fav":0,"kid":36241,"tag_name":"","live_status":0},{"title":"史上最牛的Linux视频教程—兄弟连","long_title":"","cover":"http://i2.hdslb.com/bfs/archive/41cc83aa246f1912596657375890eaf1c836728f.png","covers":null,"uri":"","history":{"oid":18156598,"epid":0,"bvid":"BV1mW411i7Qf","page":8,"cid":29643117,"part":"2.3 Linux系统安装-Linux系统安装","business":"archive","dt":2},"videos":106,"author_name":"吾方羡_","author_face":"http://i0.hdslb.com/bfs/face/fc2d47957cca5bdf95b06b93128580c22c2fd11c.jpg","author_mid":19994548,"view_at":1616948949,"progress":0,"badge":"","show_title":"2.3 Linux系统安装-Linux系统安装","duration":2563,"current":"","total":0,"new_desc":"共106P","is_finish":0,"is_fav":0,"kid":18156598,"tag_name":"校园学习","live_status":0},{"title":"【完整版】Redis教程，入门到实战（付源码、笔记）","long_title":"","cover":"http://i1.hdslb.com/bfs/archive/ecc430e01465c397d00b12fc4244bc0220caebb3.jpg","covers":null,"uri":"","history":{"oid":412748185,"epid":0,"bvid":"BV1XV411o7xP","page":57,"cid":177088846,"part":"058-持久化-RDB三种启动方式对比与优缺点分析","business":"archive","dt":2},"videos":111,"author_name":"B站学编程","author_face":"http://i2.hdslb.com/bfs/face/b5e8b27edd1f721cf84756bbfb94892c04251522.jpg","author_mid":44033930,"view_at":1616945519,"progress":10,"badge":"","show_title":"058-持久化-RDB三种启动方式对比与优缺点分析","duration":234,"current":"","total":0,"new_desc":"共111P","is_finish":0,"is_fav":0,"kid":412748185,"tag_name":"野生技术协会","live_status":0},{"title":"【2021最新首发】SpringCloud微服务架构精讲教程全套完整版从入门到精通_SpringCloud框架开发_SpringCloud实战案例（附配套资料）","long_title":"","cover":"http://i0.hdslb.com/bfs/archive/00ac416f0d11bf6bebf530e7e5484e03a7626d93.png","covers":null,"uri":"","history":{"oid":416818918,"epid":0,"bvid":"BV11V411e74D","page":128,"cid":301975018,"part":"128-高可用网关环境搭建","business":"archive","dt":2},"videos":243,"author_name":"不会取名字的程序猿","author_face":"http://i2.hdslb.com/bfs/face/a7cfdfacb27e9f1d900bcc75723cc8e684e05ab6.jpg","author_mid":1884437525,"view_at":1616945517,"progress":5,"badge":"","show_title":"128-高可用网关环境搭建","duration":405,"current":"","total":0,"new_desc":"共243P","is_finish":0,"is_fav":0,"kid":416818918,"tag_name":"野生技术协会","live_status":0},{"title":"【白嫖视频】大数据redis全套实战视频教程-零基础快速入门","long_title":"","cover":"http://i1.hdslb.com/bfs/archive/d06e89b6c03a01d621f0294a6e88d8286cfceee1.jpg","covers":null,"uri":"","history":{"oid":886938026,"epid":0,"bvid":"BV1xK4y1J72A","page":18,"cid":305907514,"part":"18、尚学堂redis_Twemproxy","business":"archive","dt":2},"videos":21,"author_name":"尚学堂人工智能学院","author_face":"http://i0.hdslb.com/bfs/face/213f0ba0b87dc50087f5bf6d08de1c72532ad77a.jpg","author_mid":629357607,"view_at":1616945514,"progress":2,"badge":"","show_title":"18、尚学堂redis_Twemproxy","duration":530,"current":"","total":0,"new_desc":"共21P","is_finish":0,"is_fav":0,"kid":886938026,"tag_name":"野生技术协会","live_status":0},{"title":"忧国的莫里亚蒂 后半","long_title":"大英帝国的丑闻 第一幕","cover":"http://i0.hdslb.com/bfs/archive/d94a2507dc64a9e433e1ca854328d6d4753859f6.jpg","covers":null,"uri":"https://www.bilibili.com/bangumi/play/ss38254","history":{"oid":972305446,"epid":395958,"bvid":"","page":0,"cid":315897600,"part":"","business":"pgc","dt":2},"videos":0,"author_name":"","author_face":"","author_mid":0,"view_at":1616940456,"progress":1347,"badge":"番剧","show_title":"第12话 大英帝国的丑闻 第一幕","duration":0,"current":"","total":-1,"new_desc":"即将开播","is_finish":0,"is_fav":0,"kid":38254,"tag_name":"","live_status":0},{"title":"【杂谈】听说今天有个歌会","long_title":"","cover":"http://i0.hdslb.com/bfs/live/new_room_cover/1c3f59567465253a9141b2837c01ec73f9e3560d.jpg","covers":null,"uri":"https://live.bilibili.com/872551","history":{"oid":872551,"epid":0,"bvid":"","page":0,"cid":0,"part":"","business":"live","dt":2},"videos":0,"author_name":"电鸟个灯泡","author_face":"http://i0.hdslb.com/bfs/face/7ea5d2394c9b619f2fe7d012b51c321c0be94001.jpg","author_mid":3301695,"view_at":1616935366,"progress":0,"badge":"未开播","show_title":"","duration":0,"current":"","total":0,"new_desc":"","is_finish":0,"is_fav":0,"kid":872551,"tag_name":"虚拟主播","live_status":0},{"title":"【预告】4月1日季后赛","long_title":"","cover":"http://i0.hdslb.com/bfs/vc/d83ab8e03c1af59e0ad87b6e09c2d2664f17c280.png","covers":null,"uri":"https://live.bilibili.com/7734200","history":{"oid":7734200,"epid":0,"bvid":"","page":0,"cid":0,"part":"","business":"live","dt":2},"videos":0,"author_name":"哔哩哔哩英雄联盟赛事","author_face":"http://i0.hdslb.com/bfs/face/cb620bbb9071974f37843134875d472b47532a97.jpg","author_mid":50329118,"view_at":1616929649,"progress":0,"badge":"直播中","show_title":"","duration":0,"current":"","total":0,"new_desc":"","is_finish":0,"is_fav":0,"kid":7734200,"tag_name":"英雄联盟","live_status":1},{"title":"【漫画屋】高能展开！急转直下！主角团遭遇史上最大危机！夏日重现#11","long_title":"","cover":"http://i2.hdslb.com/bfs/archive/eca2fe460d63421ffe2c6dd5d290c057e19ef381.jpg","covers":null,"uri":"","history":{"oid":887372724,"epid":0,"bvid":"BV1aK4y1N7Qo","page":1,"cid":316095520,"part":"漫画屋49夏日重现11","business":"archive","dt":2},"videos":1,"author_name":"尕丶天堂","author_face":"http://i0.hdslb.com/bfs/face/5f98f8a3947d41ecd8f612267d40d65ca7ee7a1c.jpg","author_mid":216025,"view_at":1616929176,"progress":-1,"badge":"","show_title":"","duration":801,"current":"","total":0,"new_desc":"","is_finish":0,"is_fav":0,"kid":887372724,"tag_name":"综合","live_status":0}]}}
  }
  // axios({
  //   url: '//api.bilibili.com/x/web-interface/history/cursor',
  //   query: {
  //     type,
  //     ps: 20,
  //   },
  //   withCredentials: true,
  // })
}


// 获取收藏夹列表
export const getNavFavList = () => {
  return axios({
    url: '/api/fav/folder',
    withCredentials: true,
  })
  // {
  //   data:{"code":0,"message":"0","ttl":1,"data":[{"id":1,"name":"我创建的收藏夹","mediaListResponse":{"count":1,"list":[{"id":84144890,"fid":841448,"mid":26119890,"attr":1,"title":"默认收藏夹","cover":"http://i0.hdslb.com/bfs/archive/3dcb4539ad14b7a433b82c3e08c84977acb99e7c.jpg","upper":{"mid":26119890,"name":"","face":""},"cover_type":2,"intro":"","ctime":1458354728,"mtime":1591072611,"state":0,"fav_state":0,"media_count":1,"view_count":0,"type":0,"link":""}],"has_more":false}},{"id":2,"name":"稍后再看","mediaListResponse":{"count":1,"list":null,"has_more":false}}]}
  // }
}

// 获取收藏夹详情
export const getNavFavDetail = (media_id) => {
  return axios({
    url: '/api/fav/resource',
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
