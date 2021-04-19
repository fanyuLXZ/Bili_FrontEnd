/**
 * 这个包继承自jsonp这个包，只不过支持了Promise
 */

/**
 * Module dependencies
 */

const debug = require('debug')('jsonp')

/**
 * Module exports.
 */

export default jsonp

/**
 * Callback index.
 */

let count = 0

/**
 * Noop function.
 */

function noop() {
}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts = {}) {
    return new Promise((resolve, reject) => {
        const _param = []
        const params = opts.params || {}
        params.jsonp = 'jsonp'

        const keys = Object.keys(params)
        for (const key of keys) {
            _param.push(`${key}=${params[key]}`)
        }

        opts.param = _param.join('&') + '&callback'
        const prefix = opts.prefix || '__jp'

        // use the callback name that was passed if one was provided.
        // otherwise generate a unique name by incrementing our counter.
        const id = opts.name || (prefix + (count++))

        const param = opts.param || 'callback'
        const timeout = opts.timeout != null ? opts.timeout : 60000  // eslint-disable-line
        const enc = encodeURIComponent
        const target = document.getElementsByTagName('script')[0] || document.head
        let script // eslint-disable-line prefer-const
        let timer

        if (timeout) {
            timer = setTimeout(function () {
                cleanup()
                reject('400')
            }, timeout)
        }

        function cleanup() {
            if (script.parentNode) script.parentNode.removeChild(script)
            window[id] = noop
            if (timer) clearTimeout(timer)
        }

        window[id] = function (data) {
            debug('jsonp got', data)
            cleanup()
            resolve(data)
        }

        // add qs component
        url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id)
        url = url.replace('?&', '?')

        debug('jsonp req "%s"', url)

        // create script
        script = document.createElement('script')
        script.src = url
        script.onerror = function () {
            reject('400')
        }

        target.parentNode.insertBefore(script, target)
    })
}
