/* eslint-disable */
export const cookie = {
  get: function(cookieName) {
    const theCookie = '' + document.cookie
    const ind = theCookie.indexOf(cookieName + '=')
    if (ind === -1 || cookieName === '') {
      return ''
    }
    let ind1 = theCookie.indexOf(';', ind)
    if (ind1 === -1) {
      ind1 = theCookie.length
    }
    return unescape(theCookie.substring(ind + cookieName.length + 1, ind1))
  },
  set: function(name, value, days) {
    days = days !== undefined ? days : 365
    const exp = new Date()
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString() + '; path=/; domain=.bilibili.com'
  },
  delete: function(name) {
    this.set(name, '', -1)
  },
}

export const localStorage = {
  // eslint-disable-next-line
  _support: process.env.VUE_ENV === 'client' && window && window.localStorage && typeof window.localStorage === 'object' ? true : false,
  getItem: function(key) {
    try {
      if (this._support) {
        return window.localStorage.getItem(key)
      } else {
        return null
      }
    } catch (e) {
      return null
    }
  },
  setItem: function(key, value) {
    try {
      if (this._support) {
        window.localStorage.setItem(key, value)
      }
    } catch (e) {
      return null
    }
  },
  removeItem: function(key) {
    try {
      if (this.getItem(key)) {
        window.localStorage.removeItem(key)
      }
    } catch (e) {}
  },
}

export function readFromLocal(key) {
  try {
    if (localStorage._support) {
      return localStorage.getItem(key)
    } else {
      return cookie.get(key)
    }
  } catch (e) {
    return null
  }
}

export function saveToLocal(key, val, days) {
  try {
    if (localStorage._support) {
      return localStorage.setItem(key, val)
    } else {
      return cookie.set(key, val, days)
    }
  } catch (e) {
    return undefined
  }
}

export function checkInView(el, padding) {
  if (!el) return
  const rect = el.getBoundingClientRect()
  const p = padding || 0
  // 只判断了纵向
  return rect.top < window.innerHeight + p && rect.bottom >= 0
}

export function throttle(fn, delay, mustRunDelay) {
  let timer = null
  let t_start
  return function() {
    const context = this
    const args = arguments
    const t_curr = +new Date()
    clearTimeout(timer)
    if (!t_start) {
      t_start = t_curr
    }
    if (t_curr - t_start >= mustRunDelay) {
      fn.apply(context, args)
      t_start = t_curr
    } else {
      timer = setTimeout(function() {
        fn.apply(context, args)
      }, delay)
    }
  }
}

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export function debounce(func, wait, immediate) {
  let timeout
  return function() {
    const context = this
    const args = arguments
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }
}

export const formatNum = (n, tw) =>{
  if (parseInt(n) < 0 || n == null || n == undefined) {  // eslint-disable-line
    return '--'
  }
  if (String(n).indexOf('.') !== -1 || String(n).indexOf('-') !== -1) {
    return n
  }
  if (parseInt(n) === 0) {
    return 0
  }
  const wan = tw ? '萬' : '万'
  const yi = tw ? '億' : '亿'
  n = parseInt(n)
  if (n >= 10000 && n < 100000000) {
    return (n / 10000).toFixed(1) + wan
  } else if (n >= 100000000) {
    return (n / 100000000).toFixed(1) + yi
  } else {
    return n
  }
}

function fromatNum(n) {
  return n < 10 ? '0'+n : n
}

export const formatDate = t => {
  if (!t) return
  const date = new Date(t)
  const Y = date.getFullYear() + '-'
  const M = fromatNum(date.getMonth()+1) + '-'
  const D = fromatNum(date.getDate())
  return Y+M+D
}

export const formatDateTime = t =>{
  if (!t) return
  const date = new Date(t)
  const Y = date.getFullYear() + '-'
  const M = fromatNum(date.getMonth()+1) + '-'
  const D = fromatNum(date.getDate())
  const h = fromatNum(date.getHours()) + ':'
  const m = fromatNum(date.getMinutes()) + ':'
  const s = fromatNum(date.getSeconds())
  return Y+M+D+' '+h+m+s
}

// 数字转换为时间格式
export const formatDuration = n =>{
  if (String(n).indexOf(':') !== -1) {
    return n
  }
  let hour
  let min
  let sec
  let secStr
  let minStr
  if (n < 60) {
    secStr = n < 10 ? `0${n}` : n
    return `00:${secStr}`
  } else if (n < 3600) {
    sec = n % 60
    min = parseInt(n / 60)
    secStr = sec < 10 ? `0${sec}` : sec
    minStr = min < 10 ? `0${min}` : min
    return `${minStr}:${secStr}`
  } else {
    sec = n % 60
    min = parseInt((n % 3600) / 60)
    hour = parseInt(n / 3600)
    secStr = sec < 10 ? `0${sec}` : sec
    minStr = min < 10 ? `0${min}` : min
    return `${hour}:${minStr}:${secStr}`
  }
}

export const trimHttp = url =>{
  return url ? url.replace(/^http:/, '') : ''
}

export const webp = function() {
  if (typeof window === 'undefined') {
    return false
  }
  try {
    return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0)
  } catch (err) {
    return false
  }
}()

export const formatImg = (url, w, h) => {
  if (!url) {
    return url
  }
  const suffix = url.match(/(.*\.(jpg|jpeg|gif|png|bmp))(\?.*)?/)
  // 路径是否包含/bfs/
  const isBfs = url.indexOf('/bfs/') !== -1 ? true : false
  // 是否是GIF图片
  if (!suffix || suffix[2] === 'gif' || suffix[2] === 'bmp' || !isBfs) {
    return url
  }
  // 裁剪规则
  const cut = (w && h) ? '@' + w + 'w_' + h + 'h' : '@'
  // 图片后参数 比如视频动态图
  const args = suffix[3] ? suffix[3] : ''
  if (webp) {
    return suffix[1] + cut + '.webp' + args
  } else {
    return suffix[1] + cut + '.' + suffix[2] + args
  }
}

export const isBeta = items =>{
  let isOpen = false
  const mantissa = cookie.get('DedeUserID').slice(-1)

  if (mantissa && $.isArray(items)) {
    isOpen = $.inArray(+mantissa, items) > -1
  }
  return isOpen
}

export const Cantor = {
  create: function(n) {
    let i
    const factorial = []
    factorial[0] = 1
    for (i = 1; i < n; i++) {
      factorial[i] = factorial[i - 1] * i
    }
    return factorial
  },
  encode: function(list, n) {
    let i
    let j
    const len = list.length
    const factorial = this.create(n)
    const count = []
    for (i = 0; i < len; i++) { // 获得当前未出现的比他小的数，即它右边有几个比他小的数
      count[i] = 0
      for (j = 0; j < i; j++) {
        if (list[j] > list[i]) {
          count[j]++
        }
      }
    }
    let hash = 0
    for (i = 0; i < len; i++) {
      hash += count[i] * factorial[len - i - 1]
    }
    return hash.toString(32)
  },
  decode: function(hash, len) {
    hash = parseInt(hash, 32)
    let i
    let j
    const xs = []
    const js = []
    const list = []
    const factorial = this.create(len)
    for (i = len - 1, j = 0; i >= 0; i--, j++) { // 辗转相除
      xs[j] = hash / factorial[i]
      if (hash !== 0) {
        hash = hash % factorial[i]
      }
      js[i] = 1
    }
    for (i = 0; i < len; i++) { // 找剩下子集中的第xs[i]大元素
      let t = 0
      for (j = 0; j < len; j++) {
        t += js[j]
        if (t > xs[i]) {
          list[i] = j
          js[j] = 0
          break
        }
      }
    }
    return list
  },
}

export const isEmptyObject = o =>{
  return JSON.stringify(o) === '{}' ? true : false
}

function getDevicePixelRatio() {
  let ratio = 1
  if (typeof window === 'undefined') return ratio
  // To account for zoom, change to use deviceXDPI instead of systemXDPI
  // eslint-disable-next-line
  if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
    // Only allow for values > 1
    ratio = window.screen.systemXDPI / window.screen.logicalXDPI
  } else if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio
  }
  return ratio
}

export const DPR = getDevicePixelRatio

export const uuid = function() {
  let d = new Date().getTime()
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16)
  })
}

export const log = (function() {
  if (typeof window !== 'undefined' && window.console && typeof window.console.log === 'function') {
    return function(module, msg) {
      window.console.log('[' + module + '] ' + msg)
    }
  } else {
    return function() {
    }
  }
})()

// 自定义数据上报
export const customReport = function(name, ops) {
  if (window.spmReportData) {
    const obj = ops ? ops : name
    window.spmReportData[name] = obj
  }
}

/**
 * 完全自定义上报 可自定义上报通道和公共参数
 * @param {*} options
 *  spm_id : spmid 非必传 取meta中spmid
 *  CBlock : C段  非必传 默认 0
 *  DBlock : D段 非必传  默认 0
 *  type : pv, click, appear 上报类型通道
 * @param {*} info 
 */
export const allCustomReport = function(options = {}, info = {}) {
  const spm_idAB = options.spm_id ||  document.getElementsByTagName('meta').spm_prefix?.content || '0.0'
  const spmidC = options.c || options.CBlock || '0'
  const spmidD = options.d || options.DBlock || '0'
  const spm_id = `${spm_idAB}.${spmidC}.${spmidD}`
  if (!options.type) {
    throw new Error('report need type')
  }
  info.spm_id = spm_id
  if (window.reportObserver && window.reportObserver.reportCustomData) {
    window.reportObserver.reportCustomData(options.type, info)
  }
}


// 获取csrf
export const csrf = function() {
  try {
    return cookie.get('bili_jct') || ''
  } catch (err) {
    return ''
  }
}()

// 首屏加载完成时间标准 (firstscreenfinish)
export const fsfReport = function(img) {
  const path = img && img.src || ''
  if (path && window.performance) {
    const arr = window.performance.getEntriesByType('resource') || []
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i]['name'] === path) {
        window.performance.timing.firstscreenfinish = window.performance.timeOrigin + arr[i]['responseEnd']
        return
      }
    }
  }
}

export const query = function(name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) {  // eslint-disable-line
    return unescape(r[2])
  }
  return null
}

// 快速判断是否登录 不严谨 要求不高的情况下可以用
export const isLogin = function() {
  return cookie.get('DedeUserID') ? true : false
}

// 处理av+数字
export const avLink = function(str) {
  return str.replace(/av([0-9]+)/g, '<a target="_blank" href="//www.bilibili.com/video/av$1">av$1</a>')
}

// 处理sm+数字
export const smLink = function(str) {
  return str.replace(/sm([0-9]+)/g, '<a target="_blank" href="http://acg.tv/sm$1">sm$1</a>')
}

// 处理video
export const videoLink = function(str) {
  return str
  .replace(/(bv1[a-zA-Z0-9]{9})/ig, '<a target="_blank" href="//www.bilibili.com/video/$1">$1</a>')
  .replace(/(?!<a[^>]*>)av([0-9]+)(?![^<]*<\/a>)/ig, '<a href="//www.bilibili.com/video/av$1/" target="_blank">av$1</a>')
  .replace(/(?!<a[^>]*>)sm([0-9]+)(?![^<]*<\/a>)/ig, '<a href="//acg.tv/sm$1" target="_blank">sm$1</a>')
}

// 处理bvid
export const bvLink = function(str) {
  return str.replace(/(bv1[a-zA-Z0-9]{9})/ig, '<a target="_blank" href="//www.bilibili.com/video/$1">$1</a>')
}

// 是否宽屏
export const wideScreen = function() {
  return window.innerWidth >= 1400 ? true : false
}

export const unhtml = function(str, reg) {
  return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g, function(a, b) {
    if (b) {
      return a
    } else {
      return {
        '<': '&lt;',
        '&': '&amp;',
        '"': '&quot;',
        '>': '&gt;',
        '\'': '&#39;',
      }[a]
    }
  }) : ''
}

export const html = function(str) {
  return str ? str.replace(/&((g|l|quo)t|amp|#39|nbsp);/g, function(m) {
    return {
      '&lt;': '<',
      '&amp;': '&',
      '&quot;': '"',
      '&gt;': '>',
      '&#39;': '\'',
      '&nbsp;': ' ',
    }[m]
  }) : ''
}

export const getScript = function(url, callback) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  if (typeof(callback) !== 'undefined') {
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          script.onreadystatechange = null
          callback()
        }
      }
    } else {
      script.onload=function() {
        callback()
      }
    }
  }
  script.src = url
  document.body.appendChild(script)
}

export const isTrfix = function(str) {
  if (!str) return false
  const characters = [ '【', '「', '《' ]
  for (let i=0; i<characters.length; i++) {
    if (str.substring(0, 1) === characters[i]) {
      return true
    }
  }
  return false
}

/* istanbul ignore next */
export function addClass(el, cls) {
  if (!el) return
  let curClass = el.className
  const classes = (cls || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
};

/* istanbul ignore next */
export function removeClass(el, cls) {
  if (!el || !cls) return
  const classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
};

export const scrollTop = (number = 0, time) => {
  if (!time) {
    document.body.scrollTop = document.documentElement.scrollTop = number
    return number
  }
  const spacingTime = 20 // 设置循环的间隔时间  值越小消耗性能越高
  let spacingInex = time / spacingTime // 计算循环的次数
  let nowTop = document.body.scrollTop + document.documentElement.scrollTop // 获取当前滚动条位置
  const everTop = (number - nowTop) / spacingInex // 计算每次滑动的距离
  const scrollTimer = setInterval(() => {
    if (spacingInex > 0) {
      spacingInex--
      scrollTop(nowTop += everTop)
    } else {
      clearInterval(scrollTimer) // 清除计时器
    }
  }, spacingTime)
}

//
export const isChildOf = (child, parent) => {
  let parentNode
  if (child && parent) {
    parentNode = child.parentNode
    while (parentNode) {
      if (parent === parentNode) {
        return true
      }
      parentNode = parentNode.parentNode
    }
  }
  return false
}

export const isObject = obj => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

// 判断是否是触摸屏设备
export const checkTouchDevice = () => {
  return (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
  navigator.userAgent.match((/(Tesla)|(TESLA_FW_VERSION)|(iPad)/))
}

// 强制https
export const replaceHTTP = url => {
  if (!url) return ''
  const newUrl = url.replace(/^(http:\/\/|:\/\/|\/\/|\/)/, 'https://')
  if (newUrl.match(/^https:\/\//)) {
    return newUrl
  } else {
    return 'https://' + newUrl
  }
}

export const reportMsg = (msg, ...value) => {
  if (!window) {
    return
  }
  if (!window.reportMsgObj) {
    window.reportMsgObj = {}
  }
  const data = typeof value[0] === 'object' ? { ...value[0] } : {
    value: value.join(','),
  }
  data.re_src = window.__REPORT_SRC__
  if (!data.value) {
    delete data.value
  }
  window.reportMsgObj[msg] = data
  window.reportObserver && window.reportObserver.forceCommit && window.reportObserver.forceCommit()
}

/**
 * @desc 在固定范围内取随机整数，[min, max)
 * @param min 最小值
 * @param max 最大值
 */
export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * @desc 通过abtest平台来 灰度
 * @param name 需要灰度的试验的项目名称
 */
export const abtest = name => {
  const info = JSON.parse(localStorage.getItem('ABTEST_INFO'))
  const vars = (info && info.vars) || []
  for (let i = 0; i < vars.length; i++) {
    const item = vars[i]
    if (item.name === name && item.value === 1) {
      return true
    }
  }
  return false
}

export const checkInViewV2 = (dom, preload = 0) => {
  if (!dom) {
    return false
  }
  const rect = dom.getBoundingClientRect()
  return (
    rect.top < window.innerHeight + preload &&
    rect.bottom + preload > 0 &&
    rect.left < window.innerWidth + preload &&
    rect.right + preload > 0
  )
}

export const getScrollParent = dom => {
  let el = dom
  if (!el) {
    return null
  }
  while (el && el.tagName !== 'HTML' && el.tagName !== 'BOYD' && el.nodeType === 1) {
    const overflowY = window.getComputedStyle(el).overflowY
    if (overflowY === 'scroll' || overflowY === 'auto') {
      if (el.tagName === 'HTML' || el.tagName === 'BODY') {
        return document
      }
      return el
    }
    el = el.parentNode
  }
  return document
}

// 英文0.5字符，中文1字符
export const getLimitString = (str, initLimt) => {
  let limit = initLimt
  if(str !== null && str !== undefined){
    let count = 0
    for(let i = 0; i < str.length; i++){
      const c = str.charAt(i)
      const flag = /^[\u0020-\uooff]$/.test(c)
      if(flag) {
        // 英文
        count += 0.5
        limit += 0.5
      } else {
        // 中文
        count += 1
      }
    }
    if(count > limit) {
      return str.substring(0, limit) + '...'
    } 
    return str
  }
};

export const convertToChinaNum = (num)=> {
  var arr1 = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  var arr2 = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千','万', '十', '百', '千','亿'];//可继续追加更高位转换值
  if(!num || isNaN(num)){
    return "零";
  }
  var english = num.toString().split("")
  var result = "";
  for (var i = 0; i < english.length; i++) {
    var des_i = english.length - 1 - i;//倒序排列设值
    result = arr2[i] + result;
    var arr1_index = english[des_i];
    result = arr1[arr1_index] + result;
  }
  //将【零千、零百】换成【零】 【十零】换成【十】
  result = result.replace(/零(千|百|十)/g, '零').replace(/十零/g, '十');
  //合并中间多个零为一个零
  result = result.replace(/零+/g, '零');
  //将【零亿】换成【亿】【零万】换成【万】
  result = result.replace(/零亿/g, '亿').replace(/零万/g, '万');
  //将【亿万】换成【亿】
  result = result.replace(/亿万/g, '亿');
  //移除末尾的零
  result = result.replace(/零+$/, '')
  //将【零一十】换成【零十】
  //result = result.replace(/零一十/g, '零十');//貌似正规读法是零一十
  //将【一十】换成【十】
  result = result.replace(/^一十/g, '十');
  return result;
}