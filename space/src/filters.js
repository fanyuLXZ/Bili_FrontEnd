/* eslint-disable no-extend-native */
import Vue from 'vue'
import formatter from 'format-publish-date'
import { activeVideoStates } from './constants'

/**
 * 通过特定的键，将数组转化成该键对应的值作为唯一标识符的对象
 * 本方法没有做太多的验证
 * 请确保传入的键所对应的值是非空（null, undefined），非数组，非对象
 * 也即该值能作为键
 *
 * @param  {Array} arr
 * @param  {String} key
 * @param {String} value
 * @return {Object}
 */
if (!Array.prototype.toObject) {
  Array.prototype.toObject = function(key, value) {
    const obj = {}
    this.forEach(item => {
      const temp = item[key]
      if (value === undefined) {
        obj[temp] = item
      } else {
        obj[temp] = item[value]
      }
    })
    return obj
  }
}

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime()
  }
}

// startWith
if (!String.prototype.startWith) {
  String.prototype.startWith = function(string) {
    return this.indexOf(string) === 0
  }
}

// 从array中去掉指定元素
if (!Array.prototype.remove) {
  Array.prototype.remove = function(ele) {
    const len = this.length
    for (let i = 0; i < len; i++) {
      if (this[i] === ele) {
        return this.splice(i, 1)
      }
    }
  }
}
// 普通的把时间戳转换成年月日
Number.prototype.format_date = function() {
  const date = new Date(this * 1000)
  return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
}

// 过万缩写
Number.prototype.toWan = function() {
  return toWan(this)
}

// 封装一次slice，超长的加...
String.prototype.max = function(len) {
  if (!len) return this
  const text = String(this)
  if (text.length > len) {
    return text.slice(0, len) + '...'
  } else {
    return this
  }
}

// 包含
String.prototype.contains = function(string) {
  return this.indexOf(string) > -1
}

// 转成webp
String.prototype.toWebP = function(params) {
  if (this === undefined) return ''
  const string = String(this).replace(/https?:/, '')
  let testString = string
  if (!string.startWith('/')) {
    testString = '/' + string
  }
  if (window.supportWebP && testString.contains('/bfs/') && !testString.contains('.gif')) {
    return string + '@' + (params || '100Q') + '.webp'
  } else {
    return this
  }
}

// 给数字增加千分位标识
String.prototype.separate = function() {
  return this.replace(/\d{1,3}(?=(\d{3})+$)/g, function(s) {
    return s + ','
  })
}

if (!String.prototype.decodeHTML) {
  String.prototype.decodeHTML = function() {
    return decodeHTML(this)
  }
}
/* eslint-disable */
String.prototype.coversize = coversize

function coversize(size) {
  if (this === undefined) return ''
  let url = this.replace(/https?:/, '')
  let testUrl = url
  if (!testUrl.startWith('/')) {
    testUrl = '/' + testUrl
  }

  if (
    testUrl.indexOf('noface') > -1 || // 没有头像不要处理
    testUrl.indexOf('transparent') > -1 || // 透明的那个图片不要处理
    testUrl.indexOf('//activity.hdslb.com/') > -1 || // 活动图片不要处理
    testUrl.indexOf('.webp') > -1 || // 图片自身是webp的不处理
    /\.gif$/.test(testUrl) // gif不要处理
  ) {
    return url
  }
  size = size || '380x240'
  // 先判断图片格式
  let ext = '.jpg'
  if (url.indexOf('.jpg') > -1) ext = '.jpg'
  // else if (url.indexOf('.gif') > -1) ext = '.gif'
  else if (url.indexOf('.png') > -1) ext = '.png'
  // 是否已迁到bfs
  let hasSize = false
  if (testUrl.indexOf('/group1/') > -1 || testUrl.indexOf('/bfs/') > -1) {
    // 检查是否已经携带了尺寸
    hasSize = /_\d+x\d+\.(jpg|jpeg|png)/.exec(url)
    if (hasSize) {
      url = url.replace(hasSize[0], '')
    }
    // 检查web兹词
    const width = size.split('x')[0]
    const height = size.split('x')[1]
    if (window.supportWebP && testUrl.indexOf('/bfs/') > -1 && ext !== '.gif') {
      url += '@' + width + 'w_' + height + 'h_100Q_1c.webp'
    } else {
      url += '@' + width + 'w_' + height + 'h' + ext
    }
    return url
  } else {
    // 老图
    size = size.replace('x', '_')
    hasSize = /\.com\/(\d+_\d+)\//.exec(url)
    if (hasSize) {
      return url.replace(hasSize[1], size)
    } else {
      return url.replace('.com', '.com/' + size)
    }
  }
}
/* eslint-enable */
function toWan(num) {
  if (num <= 0) return 0
  if (num === '--') return '--'
  const number = Number(num)
  if (number > 99999999) {
    return (Math.round(number / 10000000) / 10) + '亿'
  } else if (number > 9999) {
    return (Math.round(number / 1000) / 10) + '万'
  } else {
    return number
  }
}

// html 反转义
function decodeHTML(val) {
  if (!val || val === 'undefined') return ''
  if (typeof val === 'number') return val
  return val
    .replace(/&amp;|&#38;/g, '&')
    .replace(/&lt;|&#60;/g, '<')
    .replace(/&gt;|&#62;/g, '>')
    .replace(/&quot;|&#34;/g, '"')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&hellip;/g, '…')
    .replace(/&mdash;/g, '—')
    .replace(/&#039;/g, '\'')
    .replace(/&#39;/g, '\'')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&lsquo;/g, '‘')
    .replace(/&rsquo;/g, '’')
}

function decodeTitle(val) {
  if (!val || val === 'undefined') return ''
  if (typeof val === 'number') return val
  return val.replace(/</g, '&lt;')
}

function trimSpaceReturn(val) {
  if (!val || val === 'undefined') return ''
  if (typeof val === 'number') return val
  return val.replace(/\s/g, '')
}

// 给一位数字前面加个0变成两位数
function prefixer(param) {
  if (String(param).length === 1) {
    return '0' + param
  } else {
    return param
  }
}

// webp支持
// function webSupportCheck() {
//   let img = new Image()
//   img.onload = function() {
//     window.supportWebP = (img.width > 0) && (img.height > 0)
//   }
//   img.onerror = function() {
//     window.supportWebP = false
//   }
//   img.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA'
// }
// webSupportCheck()

Vue.filter('format_date', function(_date) {
  const date = new Date(_date * 1000)
  return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
})

// 转化成webp
Vue.filter('toWebP', function(url, params) {
  if (url === undefined) return ''
  url = url.replace(/https?:/, '')
  const string = String(url)
  let testString = string

  if (!string.startWith('/')) {
    testString = '/' + string
  }
  if (window.supportWebP && testString.contains('/bfs/') && !testString.contains('.gif')) {
    return string + '@' + (params || '100Q') + '.webp'
  } else {
    return url
  }
})

// 给数字添加千分位标识符
Vue.filter('separate', function(number) {
  return String(number).replace(/\d{1,3}(?=(\d{3})+$)/g, function(s) {
    return s + ','
  })
})

// 过万缩写
Vue.filter('toWan', toWan)

// https/http泛解析
Vue.filter('tohttps', function(url) {
  if (url === undefined) return ''
  return url.replace(/https?:/, '')
})

// 给缩略图加尺寸限制
Vue.filter('coversize', function(url, size) {
  if (url === undefined) return ''
  return url.coversize(size)
})

// 点击量过万后缩写
Vue.filter('viewCountShorten', function(count) {
  if (count === '--' || count === -1) return '--'
  count = Number(count)
  if (isNaN(count)) return 0
  return toWan(count)
})

/**
 * 展示事件
 * 1分钟以内 —— 刚刚
 * [1分钟,1小时） —— n分钟前（例:8分钟前
 * [1小时,24小时） —— n小时前（例: 8小时前
 * [24小时，自然日昨天0点） —— 昨天
 * [自然日昨天0点，自然日1月1日0点） —— 月-日（例: 8-5
 * 大于自然日1月1日0点 —— 年-月-日（例: 2016-8-5
 */
Vue.filter('format_pubdate', function(_date, action) {
  if (!_date) return '0000-00-00'
  let pubdate

  // 先尝试根据yyyy-mm-dd的格式来解析_date
  const m = /(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2})(?::(\d{2}))?/.exec(_date)
  if (m) {
    pubdate = new Date(m[1], parseInt(m[2]) - 1, m[3], m[4], m[5], m[6])
  } else {
    // 不成功的话就直接把_date塞进去看看能不能解析成时间
    pubdate = new Date(_date * 1000)
    // 如果解析失败，直接返回本体
    if (pubdate.toString() === 'Invalid Date') {
      return String(_date)
    }
  }
  action = typeof action === 'string' ? action + '于' : ''

  return action + formatter(pubdate)
})

// 处理皮肤过期时间
Vue.filter('format_expiretime', function(_date) {
  const end = new Date(_date * 1000)
  const now = Date.now()
  const expire = Math.floor((end - now) / 86400000)
  return expire > 1 ? expire + '天' : '不足一天'
})

// 高亮搜索关键词
Vue.filter('highlightSearchKeyword', function(text) {
  if (window._search_keyword === undefined) return text
  text = text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  if (window._search_keyword !== '') {
    text = text.replace(
        new RegExp('(' + window._search_keyword + ')', 'gi'),
        '<span class="search-keyword-highlight">$1</span>'
    )
  }
  return text
})

// 判断视频是否「已失效」
Vue.filter('videoStatus', function(state) {
  if (state >= 0 || state === -6) {
    return ''
  } else {
    return 'disabled'
  }
})

// 将秒为单位的时间改成mm:ss格式
Vue.filter('videoDuration', function(time) {
  const hour = prefixer(parseInt(time / 3600))
  const minute = prefixer(parseInt((time % 3600) / 60))
  const second = prefixer(parseInt((time % 3600) % 60))

  if (isNaN(minute) || isNaN(second)) {
    return '00:00'
  } else if (time < 3600) {
    return minute + ':' + second
  } else {
    return hour + ':' + minute + ':' + second
  }
})

Vue.filter('decodeHTML', function(val) {
  return decodeHTML(val)
})

Vue.filter('decodeTitle', function(val) {
  return decodeTitle(val)
})

Vue.filter('trimSpaceReturn', function(val) {
  return trimSpaceReturn(val)
})

Vue.filter('videoValidLink', function(id, bvid, state) {
  return activeVideoStates.indexOf(state) === -1 ?
    'javascript:;' : `//www.bilibili.com/video/${bvid}`
})

/**
 * 处理收藏稿件跳转地址
 * @param aid 稿件id
 * @param favType 收藏夹是否为默认收藏夹
 * @param state 稿件是否失效
 * @param type 稿件类型(音频、视频)
 * @param favid 收藏夹id
 * @param pn 当前分页索引
 */
Vue.filter('favVideoValidLink', function(id, bvid, state, type) {
  const link = type && type === 12 ?
    '//www.bilibili.com/audio/au' + id : `//www.bilibili.com/video/${bvid}`
  return state === 1 ?
    'javascript:;' : link
})
