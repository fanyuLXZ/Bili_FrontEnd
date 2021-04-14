/* eslint-disable */
// http://info.bilibili.co/pages/viewpage.action?pageId=3677945 用户关系接口文档
// http://info.bilibili.co/pages/viewpage.action?pageId=4533828 用户标签接口文档
import { removeLocalCache } from '@/store'

/**
 * 用户关系
 *
 * 0 无关系，1 悄悄关注，2 关注，6 好友，128及以上拉黑
 */
import * as types from 'mutations'
import Vue from 'vue'

const relationApi = '//api.bilibili.com/x/relation'

/**
 * 获取粉丝/关注/黑名单等数据
 *
 * @param  {Number}  mid              被获取的用户mid
 */
export const fetchRelationNumbers = ({ commit }, mid) => {
  return Vue.http.get(`${relationApi}/stat`, {
    params: {
      vmid: mid,
    },
  }).then(rs => {
    const { data, code, message } = rs.data
    if (code === 0) {
      commit(types.FETCH_NUMBERS_SUCCESS, data)
      return Promise.resolve(data)
    } else {
      console.log(`用户关系数据获取失败，${message}`)
      commit(types.FETCH_NUMBERS_SUCCESS, {
        following: 0,
        whisper: 0,
        black: 0,
        follower: 0,
      })
      return Promise.resolve({
        following: 0,
        whisper: 0,
        black: 0,
        follower: 0,
      })
    }
  }, () => {
    Vue.$warn('获取用户关系数据失败，网络错误')
    return Promise.reject()
  })
}


/**
 * 获取关系列表数据
 * mid (int) 用户id
 *
 * @param {Object} relationParams 参数
 *        - {Number} pn 页码，默认为1
 *        - {Number} ps 每页数量，默认100
 *        - {String} order 排序
 *                   - 降序 desc (默认)
 *                   - 升序 asc
 * @param {String} type
 *        - followers 粉丝
 *        - followings 关注的人
 */
export const fetchRelationsList = ({ commit }, { params, type }) => {
  commit(types.GETRELATIONLIST_START)
  return Vue.http.jsonp(`${relationApi}/${type}`, {
    params,
  }).then(rs => {
    const { code, data, message } = rs
    if (code === 0) {
      const list = data.list
      commit(types.GETRELATIONLIST_SUCCESS, !!list && list.length > 0 ? list : [])
      return Promise.resolve(data)
    } else {
      // 没有数据
      commit(types.GETRELATIONLIST_SUCCESS, [])
      console.log(`获取粉丝列表失败，${message}`)
      return Promise.reject()
    }
  }, () => {
    console.log('获取粉丝列表失败，网络错误')
    commit(types.GETRELATIONLIST_SUCCESS, [])
    return Promise.reject()
  })
}

/**
 * 批量获取用户信息
 *
 * mid (string) 请求的用户组的mid，用 , 连接
 */
export const fetchManyInfos = ({ commit }, mid) => {
  // TODO: API迁移
  return Vue.http
    .post('/ajax/member/GetInfos', { mid })
    .then(rs => {
      const { status, data } = rs.data
      if (status) {
        return Promise.resolve(data.cards)
      } else {
        console.log(`批量获取用户信息失败，${data}`)
        return Promise.reject()
      }
    }, () => Promise.reject())
}

/**
 * 单条查询用户关系
 */
export const fetchRelation = ({ commit }, fid) => {
  return Vue.http
    .jsonp(relationApi, {
      params: {
        fid,
      },
    }).then(rs => {
      const { code, data, message } = rs
      if (code === 0) {
        return Promise.resolve(data)
      } else {
        console.log(`单条获取用户关系失败，${message}`)
        return Promise.reject()
      }
    }, () => Promise.reject())
}
/**
 * 当前已登录用户与当前up关系
 */
export const fetchBeRelation = ({ commit }, mid) => {
  return Vue.http
    .jsonp('//api.bilibili.com/x/space/acc/relation', {
      params: {
        mid,
      },
    }).then(rs => {
      const { code, data, message } = rs
      if (code === 0) {
        return Promise.resolve(data)
      } else {
        console.log(`单条获取用户被关注关系失败，${message}`)
        return Promise.reject()
      }
    })
}
/**
 * 批量查询用户关系（deprecated）
 */
export const fetchManyRelations = ({ commit }, fids) => {
  return Vue.http
    .jsonp(`${relationApi}/relations`, {
      params: {
        fids,
      },
    }).then(rs => {
      const { code, data, message } = rs
      if (code === 0) {
        return Promise.resolve(data)
      } else {
        console.log(`批量获取用户关系失败，${message}`)
        return Promise.reject()
      }
    }, () => Promise.reject())
}

/**
 * 批量获取粉丝的会员信息
 *
 * mids 粉丝mid列表，用','连接
 */
export const fetchFansVipInfo = ({ commit }, mids) => {
  // TODO: API迁移
  return Vue.http
    .get('/ajax/member/getMultiVipInfo', { params: { idList: mids } })
    .then(rs => {
      const { status, data } = rs.data
      if (status) {
        return Promise.resolve(data)
      } else {
        console.log(`批量获取粉丝的会员信息失败，${data}`)
        return Promise.reject()
      }
    }, () => Promise.reject())
}

/**
 * 修改用户关系
 *
 * @param {Nummber} mid 对方的mid
 * @param {Number} act 操作的代号
 *                     - 1 添加关注 | 2 取消关注
 *                     - 3 悄悄关注 | 4 取消悄悄关注
 *                     - 5 拉黑 | 6 取消拉黑
 *                     - 7 删除粉丝
 * @param {Boolean} needFetchNumber 是否需要重新重新请求数字，默认true
 *                                  在别人的空间，关注/取关非当前UP主的用户不需要重新请求数据
 */
export const modifyRelations = ({ commit }, { mid, act, needFetchNumber = true }) => {
  return Vue.http
    .post(`${relationApi}/modify`, {
      fid: mid,
      act,
      re_src: 11,
    }).then(rs => {
      const { code, message } = rs.data
      removeLocalCache('//api.bilibili.com/x/space/acc/info', { mid }, _bili_space_mid)

      // 22004 是已经关注不能在关注了
      // 22005 是未关注不能取消
      if ([ 0, 22004, 22005 ].indexOf(code) > -1) {
        // 手动延迟800ms去请求数据，以免有缓存
        // 只有一种情况不用去重新请求数据：
        // 在别人的空间，关注/取关非当前UP主的用户
        if (needFetchNumber) {
          setTimeout(function() {
            fetchRelationNumbers({ commit }, _bili_space_mid)
          }, 800)
        }

        // 如果是修改的与当前UP主的关系
        // 则需要重新请求relation
        if (mid === _bili_space_mid) {  // eslint-disable-line
          setTimeout(function() {
            fetchRelation({ commit }, mid)
              .then(({ attribute }) => {
                // 1表示悄悄关注，2表示关注，6表示双向关注，0表示没有关系
                commit(types.RELATION_WITH_UPER, +attribute)
                commit(
                    types.UPADTE_USER_STATE, [ 2, 6 ].indexOf(+attribute) > -1 ? 'fans' : 'visitor'
                )
              })
            fetchBeRelation({ commit }, mid)
              .then(rs => {
                commit(types.GET_ACCRELATION_SUCCESS, rs)
              })
          }, 800)
        }
        switch (act) {
          case 1:
            commit(types.ADDATTENTION, mid)
            break
          case 2:
            commit(types.REMOVEATTENTION, mid)
            break
          case 6:
            commit(types.MOVEFROMBAN_SUCCESS, mid)
            break
        }
        return Promise.resolve()
      } else if (code === 22006) {
        $.getScript('//static.hdslb.com/plugins/attentionLimitPopup/attentionLimitPopup.js', function() {
          // eslint-disable-next-line
          new window.attentionLimitPopup()
        })
        return Promise.reject()
      } else {
        Vue.$warn(message)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('网络错误，请稍后重试')
      return Promise.reject()
    })
}

/**
 * 获取悄悄关注列表
 *
 * mid (int) 用户ID-mid
 */
export const fetchQuietlyFollowing = ({ commit }, { pn, ps = 20 }) => {
  commit(types.GETRELATIONLIST_START)
  Vue.http
    .jsonp(`${relationApi}/whispers`, {
      params: {
        pn,
        ps,
      },
    }).then(rs => {
      const { data, code, message } = rs
      if (+code === 0) {
        commit(types.GETRELATIONLIST_SUCCESS, data.list)
      } else {
        Vue.$warn(`获取悄悄关注列表失败，${message}`)
        commit(types.GETRELATIONLIST_FAILURE)
      }
    }, () => {
      Vue.$warn('获取悄悄关注列表失败，网络错误')
      commit(types.GETRELATIONLIST_FAILURE)
    })
}

/**
 * 获取指定标签下用户列表及用户信息
 *
 * tagid (string) 标签唯一ID（一次仅一个）
 * pn (int) 页码
 * ps (int) 每页数量
 */
export const fetchUserTag = ({ commit }, params) => {
  commit(types.GETRELATIONLIST_START)
  Vue.http
    .jsonp(`${relationApi}/tag`, { params })
    .then(rs => {
      const { code, data, message } = rs
      if (code === 0) {
        data.forEach(item => {
          item.attribute = 2
        })
        commit(types.GETRELATIONLIST_SUCCESS, !!data && data.length > 0 ? data : [])
      } else {
        Vue.$warn(`获取用户信息失败，${message}`)
        commit(types.GETRELATIONLIST_FAILURE)
      }
    }, () => {
      Vue.$warn('获取用户信息失败，网络错误')
      commit(types.GETRELATIONLIST_FAILURE)
    })
}

/**
 * 获取用户分组列表
 */
export const getUserTagList = ({ commit }) => {
  commit(types.GETUSERTAGS_START)
  return Vue.http
    .jsonp(`${relationApi}/tags`)
    .then(rs => {
      const { data, code, message } = rs
      if (+code === 0) {
        commit(types.GETUSERTAGS_SUCCESS, data)
        return Promise.resolve()
      } else {
        Vue.$warn(`获取用户分组列表失败，${message}`)
        commit(types.GETUSERTAGS_FAILURE)
        return Promise.reject()
      }
    }, rs => {
      console.log(rs)
      Vue.$warn('获取用户分组列表失败，网络错误')
      commit(types.GETUSERTAGS_FAILURE)
      return Promise.reject()
    })
}

/**
 * 创建标签
 *
 * tag (string) 标签名字
 */
export const addUserTag = ({ commit }, tag) => {
  return Vue.http
    .post(`${relationApi}/tag/create`, { tag })
    .then(rs => {
      const { code, message, data } = rs.data
      if (code === 0) {
        return Promise.resolve(data.tagid)
      } else {
        Vue.$warn(`创建标签失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('创建标签失败，网络错误')
      return Promise.reject()
    })
}

/**
 * 更新指定标签名称
 *
 * old（string）旧标签名字
 * new (string) 新标签名字
 */

export const updateUserTag = ({ commit }, { tagid, name }) => {
  return Vue.http
    .post(`${relationApi}/tag/update`, { tagid, name })
    .then(rs => {
      const { code, message } = rs.data
      if (code === 0) {
        return Promise.resolve('更改名称成功')
      } else {
        Vue.$warn(`更改名称失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('更改名称失败，网络错误')
      return Promise.reject()
    })
}

/**
 * 删除指定标签
 *
 * tag（string）要删除的标签名称
 */
export const delUserTag = ({ commit }, tagid) => {
  return Vue.http
    .post(`${relationApi}/tag/del`, { tagid })
    .then(rs => {
      const { code, message } = rs.data
      if (code === 0) {
        return Promise.resolve('删除成功')
      } else {
        Vue.$warn(`删除频道失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('删除频道失败，网络错误')
      return Promise.reject()
    })
}

/**
 * 批量移动用户到标签中
 *
 * beforeTagids（string）要移除的标签ID，英文逗号分隔
 * afterTagids（string）目标标签ID，英文逗号分隔
 * fids（string）用户mid字符串，英文逗号分隔
 */
export const moveUser = ({ commit }, { beforeTagids, afterTagids, fids }) => {
  return Vue.http
    .post(`${relationApi}/tags/moveUsers`, { beforeTagids, afterTagids, fids })
    .then(rs => {
      const { code, message } = rs.data
      if (code === 0) {
        return Promise.resolve('移动用户成功')
      } else {
        Vue.$warn(`加入分组失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('加入分组失败，网络错误')
      return Promise.reject()
    })
}

/**
 * 批量复制用户标签中
 *
 * fids（string）用户mid字符串，英文逗号分隔
 * tagids（string）标签字符串，英文逗号分隔
 */
export const copyUser = ({ commit }, { fids, tagids }) => {
  return Vue.http
    .post(`${relationApi}/tags/copyUsers`, { fids, tagids })
    .then(rs => {
      const { code, message } = rs.data
      if (code === 0) {
        return Promise.resolve('复制用户成功')
      } else {
        Vue.$warn(`复制用户失败，${message}`)
        return Promise.reject()
      }
    }, () => {
      Vue.$warn('复制用户失败，网络错误')
      return Promise.reject()
    })
}

/**
 * 更新关系，此方法用在粉丝/关注列表list
 */
export const updateRelationList = ({ commit }, params) => {
  commit(types.UPDATE_RELATION, params)
}

/**
 * 更新用户列表
 */
export const modifyRelationList = ({ commit }, list) => {
  commit(types.GETRELATIONLIST_SUCCESS, list)
}

/**
 * 当前UP主的骑士团列表
 *
 * @param {Number} pn 页码
 * @param {Number} ps 每页的个数
 */
export const getKnight = ({ commit }, { pn, ps = 20 }) => {
  commit(types.GETKNIGHT_START)
  return Vue.http.jsonp('//api.bilibili.com/x/space/rider/list', {
    params: {
      pn,
      ps,
    },
  }).then(rs => {
    const { data, code, message } = rs
    if (code === 0) {
      const { list, page } = data
      // 如果没有数据
      if (list === null) {
        commit(types.GETKNIGHT_SUCCESS, {
          list: [],
          count: 0,
        })
        return Promise.resolve([])
      }

      commit(types.GETKNIGHT_SUCCESS, {
        list,
        count: page.count,
      })
      list.forEach(item => {
        item.attribute = 2
      })
      return Promise.resolve(list)
    } else {
      Vue.$warn(`请求骑士团数据失败，${message}`)
      return Promise.reject()
    }
  }, () => {
    Vue.$warn('请求骑士团数据失败，网络错误')
    return Promise.reject()
  })
}

/**
 * 退出某UP主的骑士团
 *
 * @param {Number} mid 骑士团的UP主mid
 */
export const exitKnight = ({ commit }, { mid }) => {
  return Vue.http.post('//api.bilibili.com/x/space/rider/exit', {
    up_mid: mid,
  }).then(rs => {
    const { code, message } = rs.data
    if (code === 0) {
      return Promise.resolve()
    } else {
      Vue.$warn(`退出骑士团失败，${message}`)
      return Promise.reject()
    }
  }, () => {
    Vue.$warn('退出骑士团失败，网络错误')
    return Promise.reject()
  })
}
