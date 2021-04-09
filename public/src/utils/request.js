/* eslint-disable */
import { getBrowser } from './index'

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

const $ = {}

const document = window.document
let key
let name
const scriptTypeRE = /^(?:text|application)\/javascript/i
const xmlTypeRE = /^(?:text|application)\/xml/i
const jsonType = 'application/json'
const htmlType = 'text/html'
const blankRE = /^\s*$/
const originAnchor = document.createElement('a')
const class2type = {}
const toString = class2type.toString

const isArray = Array.isArray || function (object) {
  return object instanceof Array
}

function isFunction (value) {
  return type(value) === 'function'
}

function isWindow (obj) {
  return obj != null && obj === obj.window
}

function isObject (obj) {
  return type(obj) === 'object'
}

function type (obj) {
  return obj === null
    ? String(obj)
    : class2type[toString.call(obj)] || 'object'
}

function isPlainObject (obj) {
  return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) === Object.prototype
}

function likeArray (obj) {
  const length = !!obj && 'length' in obj && obj.length
  const type = $.type(obj)

  return type !== 'function' && !isWindow(obj) && (
    type === 'array' || length === 0 ||
    (typeof length === 'number' && length > 0 && (length - 1) in obj)
  )
}

$.isArray = isArray
$.isFunction = isFunction
$.type = type
$.isPlainObject = isPlainObject

originAnchor.href = window.location.href

function ajaxSuccess (data, xhr, settings, deferred) {
  const context = settings.context
  const status = 'success'
  settings.success.call(context, data, status, xhr)
  if (deferred) deferred.resolveWith(context, [data, status, xhr])
}

// type: "timeout", "error", "abort", "parsererror"
function ajaxError (error, type, xhr, settings, deferred) {
  const context = settings.context
  settings.error.call(context, xhr, type, error)
  if (deferred) deferred.rejectWith(context, [xhr, type, error])
}

function ajaxDataFilter (data, type, settings) {
  if (settings.dataFilter === empty) return data
  const context = settings.context
  return settings.dataFilter.call(context, data, type)
}

// Empty function, used as default callback
function empty () {
}

$.ajaxSettings = {
  // Default type of request
  type: 'GET',
  // Callback that is executed before request
  beforeSend: empty,
  // Callback that is executed if the request succeeds
  success: empty,
  // Callback that is executed the the server drops error
  error: empty,
  // Callback that is executed on request complete (both: error and success)
  complete: empty,
  // The context for the callbacks
  context: null,
  // Whether to trigger "global" Ajax events
  global: true,
  // Transport
  xhr: function () {
    return new window.XMLHttpRequest()
  },
  // MIME types mapping
  // IIS returns Javascript as "application/x-javascript"
  accepts: {
    script: 'text/javascript, application/javascript, application/x-javascript',
    json: jsonType,
    xml: 'application/xml, text/xml',
    html: htmlType,
    text: 'text/plain'
  },
  // Whether the request is to another domain
  crossDomain: false,
  // Default timeout
  timeout: 0,
  // Whether data should be serialized to string
  processData: true,
  // Whether the browser should be allowed to cache GET responses
  cache: true,
  // Used to handle the raw response data of XMLHttpRequest.
  // This is a pre-filtering function to sanitize the response.
  // The sanitized response should be returned
  dataFilter: empty
}

function mimeToDataType (mime) {
  if (mime) mime = mime.split(';', 2)[0]
  return (mime && (mime === htmlType
    ? 'html'
    : mime === jsonType
      ? 'json'
      : scriptTypeRE.test(mime)
        ? 'script'
        : xmlTypeRE.test(mime) && 'xml')) || 'text'
}

function appendQuery (url, query) {
  if (query === '') return url
  return (url + '&' + query).replace(/[&?]{1,2}/, '?')
}

// serialize payload and append it to the URL for GET requests
function serializeData (options) {
  if (options.processData && options.data && $.type(options.data) !== 'string') {
    options.data = $.param(options.data, options.traditional)
  }
  if (options.data && (!options.type || options.type.toUpperCase() === 'GET' || options.dataType === 'jsonp')) {
    options.url = appendQuery(options.url, options.data)
    options.data = undefined
  }
}

$.ajax = function (options) {
  const settings = $.extend({}, options || {})
  const deferred = $.Deferred && $.Deferred()
  let urlAnchor
  let hashIndex
  for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

  if (!settings.crossDomain) {
    urlAnchor = document.createElement('a')
    urlAnchor.href = settings.url
    // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049
    settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
  }

  if (!settings.url) settings.url = window.location.toString()
  if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex)
  serializeData(settings)

  let dataType = settings.dataType
  const hasPlaceholder = /\?.+=\?/.test(settings.url)
  if (hasPlaceholder) dataType = 'jsonp'

  if (settings.cache === false || (
    (!options || options.cache !== true) &&
    (dataType === 'script' || dataType === 'jsonp')
  )) { settings.url = appendQuery(settings.url, '_=' + Date.now()) }

  let mime = settings.accepts[dataType]
  const headers = {}
  const setHeader = function (name, value) {
    headers[name.toLowerCase()] = [name, value]
  }
  const protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol
  const xhr = settings.xhr()
  const nativeSetHeader = xhr.setRequestHeader
  let abortTimeout

  if (deferred) deferred.promise(xhr)

  if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
  setHeader('Accept', mime || '*/*')
  mime = settings.mimeType || mime
  if (mime) {
    if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
    xhr.overrideMimeType && xhr.overrideMimeType(mime)
  }
  if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() !== 'GET')) {
    setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')
  }

  if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
  xhr.setRequestHeader = setHeader

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      xhr.onreadystatechange = empty
      clearTimeout(abortTimeout)
      let result
      let error = false
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || (xhr.status === 0 && protocol === 'file:')) {
        dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))

        if (xhr.responseType === 'arraybuffer' || xhr.responseType === 'blob') { result = xhr.response } else {
          result = xhr.responseText

          try {
            // http://perfectionkills.com/global-eval-what-are-the-options/
            // sanitize response accordingly if data filter callback provided
            result = ajaxDataFilter(result, dataType, settings)
            // eslint-disable-next-line no-eval
            if (dataType === 'script') (1, eval)(result)
            else if (dataType === 'xml') result = xhr.responseXML
            else if (dataType === 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
          } catch (e) {
            error = e
          }

          if (error) return ajaxError(error, 'parsererror', xhr, settings, deferred)
        }

        ajaxSuccess(result, xhr, settings, deferred)
      } else {
        ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
      }
    }
  }

  const async = 'async' in settings ? settings.async : true
  xhr.open(settings.type, settings.url, async, settings.username, settings.password)

  if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]

  for (name in headers) nativeSetHeader.apply(xhr, headers[name])

  if (settings.timeout > 0) {
    abortTimeout = setTimeout(function () {
      xhr.onreadystatechange = empty
      xhr.abort()
      ajaxError(null, 'timeout', xhr, settings, deferred)
    }, settings.timeout)
  }

  // avoid sending empty string (#319)
  xhr.send(settings.data ? settings.data : null)
  return xhr
}

// handle optional data/success arguments
function parseArguments (url, data, success, dataType) {
  if ($.isFunction(data)) {
    dataType = success
    success = data
    data = undefined
  }
  if (!$.isFunction(success)) {
    dataType = success
    success = undefined
  }
  return {
    url: url,
    data: data,
    success: success,
    dataType: dataType
  }
}

$.get = function (/* url, data, success, dataType */) {
  return $.ajax(parseArguments.apply(null, arguments))
}

$.post = function (/* url, data, success, dataType */) {
  const options = parseArguments.apply(null, arguments)
  options.type = 'POST'
  return $.ajax(options)
}

$.getJSON = function (/* url, data, success */) {
  const options = parseArguments.apply(null, arguments)
  options.dataType = 'json'
  return $.ajax(options)
}

const escape = encodeURIComponent

function serialize (params, obj, traditional, scope) {
  let type
  const array = $.isArray(obj)
  const hash = $.isPlainObject(obj)
  $.each(obj, function (key, value) {
    type = $.type(value)
    if (scope) {
      key = traditional
        ? scope
        : scope + '[' + (hash || type === 'object' || type === 'array' ? key : '') + ']'
    }
    // handle data in serializeArray() format
    if (!scope && array) params.add(value.name, value.value)
    // recurse into nested objects
    else if (type === 'array' || (!traditional && type === 'object')) { serialize(params, value, traditional, key) } else params.add(key, value)
  })
}

$.param = function (obj, traditional) {
  const params = []
  params.add = function (key, value) {
    if ($.isFunction(value)) value = value()
    if (value === null) value = ''
    this.push(escape(key) + '=' + escape(value))
  }
  serialize(params, obj, traditional)
  return params.join('&').replace(/%20/g, '+')
}

$.each = function (elements, callback) {
  let i, key
  if (likeArray(elements)) {
    for (i = 0; i < elements.length; i++) { if (callback.call(elements[i], i, elements[i]) === false) return elements }
  } else {
    for (key in elements) { if (callback.call(elements[key], key, elements[key]) === false) return elements }
  }

  return elements
}

function extend (target, source, deep) {
  for (key in source) {
    if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
      if (isPlainObject(source[key]) && !isPlainObject(target[key])) { target[key] = {} }
      if (isArray(source[key]) && !isArray(target[key])) { target[key] = [] }
      extend(target[key], source[key], deep)
    } else if (source[key] !== undefined) target[key] = source[key]
  }
}

// Copy all but undefined properties from one or more
// objects to the `target` object.
$.extend = function (target) {
  let deep
  const args = [].slice.call(arguments, 1)
  if (typeof target === 'boolean') {
    deep = target
    target = args.shift()
  }
  args.forEach(function (arg) {
    extend(target, arg, deep)
  })
  return target
}

$.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (i, name) {
  class2type['[object ' + name + ']'] = name.toLowerCase()
})

/**
 * @description 发送ajax请求，兼容IE9及以下版本，IE9及一下版本用form模拟（代码来源于主站base.core.dev.js）
 * @param handleOption
 * @param option
 * @private
 */
export function adPostJSONLite (handleOption) {
  const browser = getBrowser()
  if (browser.msie && parseInt(browser.version) <= 9) {
    adPostJSON(handleOption)
  } else {
    $.ajax(handleOption)
  }
}

/**
 * @description IE9及以下浏览器，使用form POST数据（代码来源于主站base.core.dev.js）
 * @param options
 * @private
 */
function adPostJSON (options) {
  const locHref = window.location.href || ''
  const setDocMain = function (interfacedomain, ndomain) {
    // window.location.href;
    window.Bilibili && (window.Bilibili.interface_domain = interfacedomain)
    document.domain = ndomain
  }
  if (locHref.match(/\.bilibili\.tv/)) {
    setDocMain('interface.bilibili.tv', 'bilibili.tv')
  } else if (locHref.match(/\.bilibili\.com/)) {
    setDocMain('interface.bilibili.com', 'bilibili.com')
  } else {
    setDocMain('interface.bilibili.cn', 'bilibili.cn')
  }

  const callback = options.callback || '_jsonpCallback_' + (new Date().getTime())

  const objIFrame = document.createElement('iframe')
  objIFrame.name = 'frm' + callback
  objIFrame.id = 'frm' + callback
  objIFrame.style = 'visibility:hidden; width:1px; height:1px'
  document.body.appendChild(objIFrame)

  const objForm = document.createElement('form')

  objForm.action = options.url
  objForm.enctype = 'application/x-www-form-urlencoded'
  objForm.method = 'POST'
  objForm.target = 'frm' + callback
  document.body.appendChild(objForm)

  if (typeof (options.data) === 'undefined') options.data = {}
  if (typeof (options.data) === 'string') {
    try {
      options.data = JSON.parse(options.data)
    } catch (e) {
    }
  }

  options.data[options.jsonpCallback || 'callback'] = callback
  for (const i in options.data) {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = i
    input.value = options.data[i]
    objForm.appendChild(input)
  }
  window[callback] = function (data) {
    if (typeof options.success === 'function') {
      options.success(data)
    }
    if (typeof options.complete === 'function') {
      options.complete(data)
    }
    objIFrame.remove()
    objForm.remove()
  }
  objForm.submit()
}

export default {
  $,
  adPostJSONLite,
  adPostJSON
}



// WEBPACK FOOTER //
// ./src/utils/request.js