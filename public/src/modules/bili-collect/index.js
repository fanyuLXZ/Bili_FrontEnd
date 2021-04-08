/* eslint-disable */
'use strict'

import Config from './config'
import { adPostJSONLite } from 'g-public/utils/request'
import { extend, getNowTs, isNumber, getBrowser } from 'g-public/utils/index'

if (!window.BiliCm || !window.bilicm) {
  window.BiliCm = window.bilicm = {}
}
window.ad_rp = window.bilicm.base = window.BiliCm.Base = (function (window, document, Config) {
  /**
   * @description 上报数据
   */
  const CmBase = {
    /**
     * @description 存放上报数据队列
     */
    _list: [],
    /**
     * @description 存放上报数据去重队列
     */
    _log: [],
    /**
     * @description 新版存放上报数据去重队列（第三方数据，调用接口去重）
     */
    _cached: [],
    /**
     * @description 页面加载时间戳
     */
    _loadTs: getNowTs(),
    /**
     * @description 获取当前时间戳
     * @returns {number}
     * @private
     */
    _getNowTs: function () {
      return (new Date()).getTime()
    },
    /**
     * @description 上传数据URL域名
     */
    _cmHostname: Config.CM_BILIBILI_HOSTNAME,
    // _getCmHostname: function () {
    //   return Config['CM_BILIBILI_HOSTNAME']
    // },
    /**
     * @description 上传数据完整URL
     * @returns {string}
     * @private
     */
    _getFeesUrl: function () {
      return this._cmHostname + '/cm/api/fees/pc'
    },
    _getShowContentUrl: function () {
      return this._cmHostname + '/cm/api/receive/content/pc'
    },
    _getClickContentUrl: function () {
      return this._cmHostname + '/cm/api/receive/content/pc/clk'
    },
    _getFeesSyncUrl: function () {
      return this._cmHostname + '/cm/api/fees/pc/sync'
    },
    _getFeesSyncUrlv2: function () {
      return this._cmHostname + '/cm/api/fees/pc/sync/v2'
    },
    // _getWebAdLogUrl: function(){
    //   return this._cmHostname + '/v/web/web_cm_event';
    // },
    /**
     * @description 获取cookie
     * @param name
     * @returns {string}
     */
    _getCookie: function (name) {
      if (document.cookie.length > 0) {
        let start = document.cookie.indexOf(name + '=')
        if (start !== -1) {
          start = start + name.length + 1
          let end = document.cookie.indexOf(';', start)
          if (end === -1) {
            end = document.cookie.length
          }
          return window.decodeURIComponent(document.cookie.substring(start, end))
        } else {
          return ''
        }
      }
      return ''
    },
    /**
     * @description 验证是否广告
     * @param data
     * @returns {boolean}
     * @private
     */
    _checkAd: function (data) {
      if (data.is_ad_loc && !!data.ad_cb) {
        return true
      } else {
        return false
      }
    },
    /**
     * @description 多元组去重标识
     * @param item
     * @param options
     * @returns {string}
     * @private
     */
    _genMark: function (item, options) {
      const toString = Object.prototype.toString || null
      const flags = [(item.id || ''), (item.request_id || ''), (item.creative_id || ''), (item.src_id || ''), (item.locid || item.locId || item.resource_id || '')]
      if (options && toString) {
        if (toString.call(options) === '[object Array]') {
          for (let i = 0; i < options.length; i++) {
            flags.push(options[i])
          }
        } else if (toString.call(options) === '[object String]') {
          flags.push(options)
        }
      }
      return flags.join('|')
    },
    /**
     * @description 构建上报数据(简化版)
     * @param data 数据
     * @param event 类型
     * @param version 版本（非必选，目前播放器组使用）
     * @param locId 位置ID（非必选）
     * @private
     */
    _genReqOpsSe: function (data, event, version, locId) {
      const _this = this
      return {
        uploads: [{
          a: data.src_id || '',
          b: (data.server ? data.server : 'bilibili'),
          c: (data.is_ad ? 1 : 0),
          d: (isNumber(data.area) ? data.area : ''),
          e: data.ad_cb || '',
          f: (event || ''),
          g: 1,
          h: (data.pos_num || ''),
          i: (data.mid || ''),
          j: (version || ''),
          k: _this._getNowTs(),
          l: (locId || data.resource_id || ''),
          m: _this._loadTs,
          n: (isNumber(data.server_type) ? data.server_type : ''),
          o: (data.id || '')
        }]
      }
    },
    /**
     * @description 构建上报数据(完整版)
     * @param data 数据
     * @param event 类型
     * @param version 版本（可选，目前播放器组使用）
     * @returns {{uploads: *[]}}
     * @private 查看 https://info.bilibili.co/pages/viewpage.action?pageId=10676172
     */
    _genReqOpsPro: function (data, event, version) {
      const _this = this
      return {
        uploads: [{
          src_id: data.src_id || '',
          ad_server: (data.server ? data.server : 'bilibili'),
          is_ad: (data.is_ad ? 1 : 0),
          area: (isNumber(data.area) ? data.area : ''),
          ad_cb: data.ad_cb || '',
          event: (event || ''),
          is_visible: 1,
          idx: (data.pos_num || ''),
          mid: (data.mid || ''),
          client_version: (version || ''),
          ts: _this._getNowTs(),
          resource_id: (data.resource_id && isNumber(data.resource_id) ? data.resource_id : ''),
          load_ts: _this._loadTs || '',
          server_type: (isNumber(data.server_type) ? data.server_type : ''),
          id: (data.id || '')
        }]
      }
    },
    /**
     * @description 构建GET请求参数
     * @param data 数据
     * @param event 类型
     * @param version 版本（可选，目前播放器组使用）
     * @param locId 位置ID（可选）
     * @returns {string}
     * @private
     */
    _genReqDataParams: function (data, event, version, locId) {
      const _this = this
      const ops = _this._genReqOpsSe(data, event, version, locId)
      const genUploadsData = function (op) {
        const data = []
        for (let i = 0, len = op.uploads.length; i < len; i++) {
          const upload = op.uploads[i]; const cache = []
          for (const key in upload) {
            cache.push(key + '|' + upload[key])
          }
          data.push(cache.join(','))
        }
        return data.join('||')
      }
      return genUploadsData(ops) || ''
    },
    /**
     * @description 构建GET上报数据
     * @param url
     * @param data
     * @param event
     * @param version
     * @returns {{url: *, type: string, data: {msg: (*|string), ts: (*|number)}, dataType: string, xhrFields: {withCredentials: boolean}, success: success, error: error}}
     * @private
     */
    _genReqGetOps: function (url, data, event, version) {
      const _this = this
      return {
        url: url + '?msg=' + encodeURIComponent(_this._genReqDataParams(data, event, version)) + '&ts=' + _this._getNowTs(),
        type: 'GET',
        // data: {
        //   msg: _this._genReqDataParams(data, event, version),
        //   ts: _this._getNowTs()
        // },
        dataType: 'json',
        xhrFields: {
          withCredentials: true
        },
        success: function (msg) {
        },
        error: function (msg) {
        }
      }
    },
    /**
     * @description 构建POST上报数据
     * @param url
     * @param data
     * @param event
     * @param version
     * @param success
     * @param error
     * @returns {{url: *, type: string, data: {message}, headers: {Content-Type: string}, contentType: string, dataType: string, xhrFields: {withCredentials: boolean}, success: success, error: error}}
     * @private
     */
    _genReqPostOps: function (url, data, event, version, success, error) {
      const _this = this
      const opData = JSON.stringify(_this._genReqOpsPro(data, event, version))
      const browser = getBrowser() || {}
      return {
        url: url,
        type: 'POST',
        data: ((browser.msie && parseInt(browser.version, 10) <= 9) ? { message: opData } : opData),
        headers: {
          // 'Accept': 'text/plain',
          'Content-Type': 'application/json'
        },
        contentType: 'application/json',
        dataType: 'json',
        xhrFields: {
          withCredentials: true
        },
        success: function (msg) {
          success && success(msg)
        },
        error: function (msg) {
          error && error(msg)
        }
      }
    },
    /**
     * @description 上报数据到第三方
     * @param data
     * @private
     */
    _sendTposReq: function (data) {
      const _this = this
      const url = (!!data && data.show_url) || ''
      if (!url) return false
      let img = new window.Image(1, 1)
      img.onload = img.onerror = function () {
        img = null
      }
      img.src = _this._repMacroArgs(url, ((!!data && data.request_id) || ''), ((!!data && data.mid) || ''))
    },
    /**
     * @description 广告展示上报
     * @param item
     * @param event
     * @param callback
     * @private
     */
    _showCmReport: function (item, event, callback) {
      const _this = this
      const data = extend({}, item.data, {
        ts: _this._getNowTs(),
        _: parseInt(Math.random() * 1000000, 10)
      })
      // 第三方数据上报
      !!data && _this._sendTposReq(data)
      // POST上报数据
      adPostJSONLite(_this._genReqPostOps(_this._getFeesUrl(), data, event, (item.version || ''), function () {
        callback && callback()
      }))
    },
    /**
     * @description 内容展示上报
     * @param item
     * @param event
     * @param callback
     * @private
     */
    _showContentReport: function (item, event, callback) {
      const _this = this
      const data = extend({}, item.data, {
        ts: _this._getNowTs(),
        _: parseInt(Math.random() * 1000000, 10)
      })
      // POST上报数据
      adPostJSONLite(_this._genReqPostOps(_this._getShowContentUrl(), data, event, (item.version || ''), function () {
        callback && callback()
      }))
    },
    /**
     * @description 上报完成，删除数据
     * @param list
     * @param item
     * @returns {boolean}
     */
    _removeItem: function (list, item) {
      const _this = this
      const itemMark = _this._genMark(item)
      for (let i = 0, len = list.length; i < len; i++) {
        if (_this._genMark(list[i]) === itemMark) {
          list.splice(i, 1)
          return true
        }
      }
      return false
    },

    /**
     * @description 广告点击上报
     * @param item
     * @param event
     * @private
     */
    _hitCmReport: function (item, event) {
      const _this = this
      const data = extend({}, item.data, {
        ts: _this._getNowTs(),
        _: parseInt(Math.random() * 1000000, 10)
      })
      // POST上报数据
      adPostJSONLite(_this._genReqPostOps(_this._getFeesUrl(), data, event, (item.version || '')))
    },
    /**
     * @description 内容点击上报
     * @param item
     * @param event
     * @private
     */
    _hitContentReport: function (item, event) {
      const _this = this
      const data = extend({}, item.data, {
        ts: _this._getNowTs(),
        _: parseInt(Math.random() * 1000000, 10)
      })
      // POST上报数据
      adPostJSONLite(_this._genReqGetOps(_this._getClickContentUrl(), data, event, (item.version || '')))
    },
    /**
     * @description 替换链接中宏参数
     * @param url          必选：需要替换的url
     * @param requestid    必选：api请求的request_id
     * @param mid          可选：用户的mid
     * @param buvid        可选：用户的buvid，即为cookie中的buvid3
     * @returns {*}
     * @private
     */
    _repMacroArgs: function (url, requestid, mid, buvid) {
      const getCookie = this._getCookie || null
      buvid = buvid || (getCookie && getCookie('buvid3')) || ''
      url = ((url) ? (url.replace('__REQUESTID__', requestid).replace('__MID__', (mid || '')).replace('__BUVID__', buvid)) : '')
      return url
    },
    /**
     * @description 返回同步链接
     * @param data
     * @param isShowBvid
     * @returns {string}
     * @private
     */
    _getGeneralUrl (data, isShowBvid) {
      let url = data.url || ''
      if (!url) {
        return 'javascript:void(0);'
      }
      url = url.replace(/^http:\/\//i, '//')
      if (isShowBvid && data.archive && (data.archive.bvid)) {
        return url.replace(/(\/av\d+)$/, '/' + data.archive.bvid + '/')
      }
      return url.replace(/(\/av\d+)$/, '$1/')
    },
    /**
     * @description 构建参数
     * @param data
     * @param locId
     * @param version
     * @param event
     * @returns {string}
     * @private
     */
    _genSyncParams: function (data, locId, version, event) {
      return 'msg=' + encodeURIComponent(this._genReqDataParams(data, event, version, locId)) + '&ts=' + this._getNowTs()
    },
    /**
     * @description 构建同步链接
     * @param data
     * @param locId
     * @param version
     * @param isShowBvid
     * @returns {*}
     * @private
     */
    _getSyncUrl: function (data, locId, version, isShowBvid) {
      const _this = this
      // 广告位出广告时，不上报异步只上报同步； 广告位出内容只上报异步，不上报同步
      if (_this._checkAd(data)) {
        try {
          return _this._getFeesSyncUrlv2() + '?' + _this._genSyncParams(data, locId, version, 'click_sync_3')
        } catch (e) {
          return _this._getGeneralUrl(data, isShowBvid)
        }
      } else {
        return _this._getGeneralUrl(data, isShowBvid)
      }
    },
    /**
     * @description 新版展示数据检测是否已经存在（主要用于第三方数据）
     * @param flag
     * @returns {boolean}
     * @private
     */
    _checkedRepeat: function (flag) {
      const cached = this._cached
      for (let i = 0, len = cached.length; i < len; i++) {
        if (cached[i] === flag) {
          return true
        }
      }
      return false
    },
    /**
     * @description 新版展示数据上报设置标记（主要用于第三方数据）
     * @param flag
     * @returns {boolean}
     * @private
     */
    _insertFlag: function (flag) {
      this._cached.push(flag)
      return true
    },
    /**
     * @description 新版广告位展示数据上报
     * @param data
     * @param locId
     * @param version
     * @param event 展示类型：show 或 strict_show
     * @returns {boolean}
     * @private
     */
    _sendShowData: function (data, locId, version, event) {
      const _this = this
      const item = {
        data: extend({}, data, { resource_id: locId || '' }),
        version: version
      }
      // 获取标记
      const markState = _this._genMark(item.data, [event])
      // 检测标记是否存在，存在则代表已上报过程序退出，反之则继续上报
      if (_this._checkedRepeat(markState)) {
        return false
      }
      // 上报展示数据，广告或内容
      if (data.is_ad_loc) {
        // _this._showCmReport(item, event)
      } else {
        // _this._showContentReport(item, event)
      }
      // 设置标记，用于记录是否已经发送上报请求
      _this._insertFlag(markState)
      return true
    },
    /**
     * @description 新版点击数据上报
     * @param data
     * @param locId
     * @param version
     * @param event
     * @returns {boolean}
     * @private
     */
    _sendClickData: function (data, locId, version, event) {
      const _this = this
      const item = {
        data: extend({}, data, { resource_id: locId || '' }),
        version: version
      }
      // 广告位并且展示广告时，不上报异步，由链接302跳转同步上报，此处上报流程中断即可；
      if (_this._checkAd(data)) {
        return false
      }
      // 广告位并且展示内容时，只上报异步，不会触发302同步上报
      // 上报异步数据，理论上此处只有广告位，非广告位为兜底
      if (data.is_ad_loc) {
        _this._hitCmReport(item, event)
      } else {
        _this._hitContentReport(item, event)
      }
      return true
    },
    /**
     * @description 广告关闭数据上报，本质上与广告点击上报一致，因此url与点击上报一样，事件为close
     * @param data
     * @param locId
     * @param version
     * @param event
     * @returns {boolean}
     * @private
     */
    _sendCloseData: function (data, locId, version, event) {
      const _this = this
      const item = {
        data: extend({}, data, { resource_id: locId || '' }),
        version: version
      }
      // 上报异步数据，理论上此处只有广告位，非广告位为兜底
      if (data.is_ad_loc) {
        _this._hitCmReport(item, event)
      } else {
        _this._hitContentReport(item, event)
      }
      return true
    },
    /**
     * @description 新版展示内容数据上报
     * @param data
     * @param locId
     * @param version
     * @param event
     * @returns {boolean}
     * @private
     */
    _sendContentShowData: function (data, locId, version, event) {
      const _this = this
      const item = {
        data: extend({}, data, { resource_id: locId || '' }),
        version: version
      }
      // 获取标记
      const markState = _this._genMark(item.data, [event])
      // 检测标记是否存在，存在则代表已上报过程序退出，反之则继续上报
      if (_this._checkedRepeat(markState)) {
        return false
      }
      // 上报内容数据
      _this._showContentReport(item, event)
      // 设置标记，用于记录是否已经发送上报请求
      _this._insertFlag(markState)
      return true
    },
    /**
     * @description 新版点击内容数据上报
     * @param data
     * @param locId
     * @param version
     * @param event
     * @returns {boolean}
     * @private
     */
    _sendContentClickData: function (data, locId, version, event) {
      const _this = this
      const item = {
        data: extend({}, data, { resource_id: locId || '' }),
        version: version
      }
      // 上报内容点击数据
      _this._hitContentReport(item, event)
      return true
    },
    /**
     * @description
     * @private
     */
    _reset: function () {
      const _this = this
      _this._list = []
      _this._log = []
      _this._cached = []
      _this._loadTs = getNowTs()
    }
  }
  return {
    /**
     * @description 新版APIDATA数据上报
     * @param data 数据
     * @param locId 位置ID（即：resource_id）
     * @param version 版本号（可选）
     * @returns {*|boolean}
     */
    sendApidataData: function (data, locId, version) {
      // return CmBase._sendApidataData(data, locId, version, 'apidata')
    },
    /**
     * @description 新版广告位展示数据上报（曝光50%上报）
     * @param data 数据
     * @param locId 位置ID（即：resource_id）
     * @param version 版本号（可选）
     * @returns {*}
     */
    sendShowData: function (data, locId, version) {
      return CmBase._sendShowData(data, locId, version, 'show')
    },
    /**
     * @description 新版广告位展示数据上报（曝光50%，并持续1秒上报）
     * @param data 数据
     * @param locId 位置ID（即：resource_id）
     * @param version 版本号（可选）
     * @returns {*}
     */
    sendStrictShowData: function (data, locId, version) {
      return CmBase._sendShowData(data, locId, version, 'strict_show')
    },
    /**
     * @description 新版内容位展示数据上报（曝光50%上报）
     * @param data 数据
     * @param locId 位置ID（即：resource_id）
     * @param version 版本号（可选）
     * @returns {*}
     */
    sendContentShowData: function (data, locId, version) {
      return CmBase._sendContentShowData(data, locId, version, 'show')
    },
    /**
     * @description 新版内容位展示数据上报（曝光50%，并持续1秒上报）
     * @param data 数据
     * @param locId 位置ID（即：resource_id）
     * @param version 版本号（可选）
     * @returns {*}
     */
    sendContentStrictShowData: function (data, locId, version) {
      return CmBase._sendContentShowData(data, locId, version, 'strict_show')
    },
    /**
     * @description 新版广告位点击数据上报
     * @param data 数据
     * @param locId 位置ID（即：resource_id）
     * @param version 版本号（可选）
     * @returns {*}
     */
    sendClickData: function (data, locId, version) {
      return CmBase._sendClickData(data, locId, version, 'click')
    },
    /**
     * @description 广告关闭上报数据
     * @param data 数据
     * @param locId 位置ID（即：resource_id）
     * @param version 版本号（可选）
     * @returns {*}
     */
    sendCloseData: function (data, locId, version) {
      return CmBase._sendCloseData(data, locId, version, 'close')
    },
    /**
     * @description 新版内容位点击数据上报
     * @param data 数据
     * @param locId 位置ID（即：resource_id）
     * @param version 版本号（可选）
     * @returns {*}
     */
    sendContentClickData: function (data, locId, version) {
      return CmBase._sendContentClickData(data, locId, version, 'click')
    },
    /**
     * @description 构建同步链接
     * @param data 数据
     * @param locId 位置ID
     * @param version 可选：版本号
     * @param isShowBvid 可选：链接显示bvid，默认0（0:avid, 1:bvid）
     * @returns {*}
     */
    getSyncUrl: function (data, locId, version, isShowBvid) {
      return CmBase._getSyncUrl(data, locId, version, isShowBvid)
    }
  }
})(window, document, Config)



// WEBPACK FOOTER //
// ./src/module/bili-collect/index.js