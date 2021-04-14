/**
 * 为接口封装本地存储
 * 只存储在 sessionStorage 中
 */

/**
 * {a: 1, b: 2} => 'a=1&b=2'
 *
 * @param  {Object} obj
 * @return {String}
 */
function _stringifyObject(obj) {
  if (!obj) {
    return ''
  } else {
    const params = []
    for (const o in obj) {
      // 跳过时间戳字段
      // 圈子的请求里跳过 space_callback 字段
      if (o === '_' || o === 'ts' || o === 'space_callback') continue
      params.push(`${o}=${obj[o]}`)
    }
    return params.join('&')
  }
}

/**
 * 拼装本地存储的key
 * mid_api_queryString
 *
 * @param {Number} mid
 * @param {String} api
 * @param {String} queryString
 * @return {String}
 */
function _getCacheKey(mid, api, queryString) {
  return `${mid}_${api}_${queryString}`
}

/**
 * 获取本地存储的接口数据
 *
 * @param {String} api 接口
 * @param {Object} params 接口参数
 * @param {Number} mid 用户mid，不传则默认0
 * @return {Promise}
 */
export const getLocalCache = (api, params, mid = 0) => {
  const queryString = _stringifyObject(params)
  const localCache = sessionStorage.getItem(_getCacheKey(mid, api, queryString))

  if (localCache) {
    return Promise.resolve(JSON.parse(localCache))
  } else {
    return Promise.reject()
  }
}

/**
 * 将接口数据缓存到本地
 *
 * @param {String} api  接口
 * @param {Object} params 接口参数
 * @param {*} data 接口数据
 * @param {Number} mid  用户mid，不传则默认0
 */
export const setLocalCache = (api, params, data, mid = 0) => {
  const queryString = _stringifyObject(params)
  const cacheKey = _getCacheKey(mid, api, queryString)

  sessionStorage.setItem(cacheKey, JSON.stringify(data))
}

/**
 * 更新本地缓存的数据
 *
 * @param {String} api  接口
 * @param {Object} params 接口参数
 * @param {Object} update 变化量
 * @param {Number} mid  用户mid，不传则默认0
 */
export const updateLocalCache = (api, params, update, mid = 0) => {
  const queryString = _stringifyObject(params)
  const cacheKey = _getCacheKey(mid, api, queryString)
  const oldData = sessionStorage.getItem(cacheKey)

  if (oldData) {
    const oldDataFormatted = JSON.parse(oldData)
    const keys = Object.keys(update)
    let i = keys.length
    let key

    while (i--) {
      key = keys[i]
      oldDataFormatted[key] = update[key]
    }
    sessionStorage.setItem(cacheKey, JSON.stringify(oldDataFormatted))
  }
}

/**
 * 删除本地缓存
 *
 * @param {String} api 接口
 * @param {Object} params 接口参数
 * @param {Number} mid  用户mid，不传则默认0
 */
export const removeLocalCache = (api, params, mid = 0) => {
  const queryString = _stringifyObject(params)
  const cacheKey = _getCacheKey(mid, api, queryString)
  sessionStorage.removeItem(cacheKey)
}
