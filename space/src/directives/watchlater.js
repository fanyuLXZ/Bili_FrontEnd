/**
 * 稍后再看指令
 *
 * 分为添加视频到稍后再看，添加整个频道到稍后再看
 * - 修饰符：
 *   1. channel 添加频道
 *   2. video 添加视频（默认）
 *   3. tip hover之后是否展示提示（默认不展示展示）
 */

import bus from 'bus'

// 建立一个全局的数组来存储已经添加稍后再看的视频aid
const aidStack = []
export default function(Vue) {
  // 添加到稍后再看
  Vue.directive('watchlater', {
    bind(el, binding) {
      const val = binding.value
      const {
        tip: isTip,
        channel: isChannel,
        video: isVideo,
      } = binding.modifiers
      const { cid, count } = val
      if (isChannel) {
        // 添加频道到稍后再看
        el.addEventListener('click', function(e) {
          e.preventDefault()
          e.stopPropagation()

          // 判断是否登录
          // eslint-disable-next-line no-undef
          if (UserStatus.userInfo.isLogin) {
            Vue.http.jsonp('//api.bilibili.com/x/v2/history/toview/remaining')
              .then(_ => {
                const remain = _.data.count
                if (remain === 0) {
                  Vue.$warn('你的稍后再看列表库存满啦')
                  return
                }
                const message = remain >= count ?
                  `你即将添加本频道的 ${count} 个视频到稍后再看，点击确认进行批量添加哦` :
                  '稍后再看列表的库存不足啦，继续添加只能收录该频道前面的部分'

                Vue.$confirm(message).then(() => {
                  // TODO: API 迁移
                  Vue.http.post('/ajax/channel/addAllToView', {
                    cid,
                    mid: _bili_space_mid,
                  }).then(rs => {
                    const { status, data } = rs.data
                    if (status) {
                      Vue.$toast('添加稍后再看成功^_^')
                    } else {
                      Vue.$warn(`添加稍后再看失败，${data}`)
                    }
                  }, () => {
                    Vue.$warn('添加稍后再看失败，网络错误')
                  })
                })
              }, () => {
                Vue.$warn('添加稍后再看失败，网络错误')
              })
          } else {
            window.UserStatus && window.UserStatus.quickLogin(function() {
              window.location.reload()
            })
          }
        })
      }
      if (isVideo) {
        // 添加视频到稍后再看
        el.addEventListener('click', function(e) {
          e.preventDefault()
          e.stopPropagation()
          const aid = val.aid
          const index = aidStack.indexOf(aid)
          const hasSelect = index > -1

          // 判断是否登录
          if (window.UserStatus.userInfo.isLogin) {
            if (hasSelect) {
              rec('add_watchlater', {
                source: 'space',
                action: 'del',
              })
              Vue.http.post('//api.bilibili.com/x/v2/history/toview/del', {
                aid,
                viewed: false,
              }).then(rs => {
                let { code, message } = rs.data
                if (code === 0) {
                  aidStack.splice(index, 1)
                  bus.$emit('watchlater', JSON.parse(JSON.stringify(aidStack)))
                  Vue.$tooltip('已从稍后再看列表中移除', el)
                } else {
                  if (!message) {
                    message = '移除失败，请稍后重试'
                  }
                  Vue.$tooltip(message, el)
                }
              }, () => {
                Vue.$tooltip('移除失败，请稍后重试', el)
              })
            } else {
              rec('add_watchlater', {
                source: 'space',
              })
              Vue.http.post('//api.bilibili.com/x/v2/history/toview/add', {
                aid,
              }).then(rs => {
                let { code, message } = rs.data
                if (code === 0) {
                  aidStack.push(aid)
                  bus.$emit('watchlater', JSON.parse(JSON.stringify(aidStack)))
                  Vue.$tooltip('已加稍后再看', el)
                } else {
                  if (!message) {
                    message = '添加失败，请稍后重试'
                  }
                  Vue.$tooltip(message, el)
                }
              }, () => {
                Vue.$tooltip('添加失败，请稍后重试', el)
              })
            }
          } else {
            window.UserStatus && window.UserStatus.quickLogin(function() {
              window.location.reload()
            })
          }
        }, false)
      }
      if (isTip) {
        el.addEventListener('mouseenter', () => {
          Vue.$tooltip(el.className.split(' ').indexOf('has-select') > -1 ? '移除稍后再看' : '稍后再看', el)
        })
      }
    },
  })
}
