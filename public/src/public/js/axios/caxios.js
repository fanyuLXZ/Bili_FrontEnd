import axios from 'axios'
import jsonp from 'jsonp'
import querystring from 'querystring'

export default function(config) {
  if (config.jsonp) {
    return getjsonp(config).catch(() =>{
      if (config.fallbackUrl) {
        config.url = config.fallbackUrl
        return getjsonp(config)
      }
    })
  }
  return getaxios(config).catch(() =>{
    if (config.fallbackUrl) {
      config.url = config.fallbackUrl
      return getaxios(config)
    }
  })
}

function getjsonp(config) {
  config.query.jsonp = 'jsonp'
  config.param = config.params || config.param || config.data
  return new Promise(function(resolve, reject) {
    config.url = config.query ? config.url + '?' + querystring.stringify(config.query) : ''
    if (config.url.indexOf('http') < 0) {
      config.url = window.location.protocol + config.url
    }
    const opt = {
      timeout: config.timeout,
      prefix: config.jsonCallback,
    }
    jsonp(config.url, opt, (err, data) => {
      if (err) return reject(err)
      const temp = {
        code: data.code,
        data: data,
      }
      resolve(temp)
      return
    })
  })
}

function getaxios(config) {
  if (config.contentType) {
    config.headers = config.headers || {}
    config.headers['Content-Type'] = config.contentType
  }
  config.url = config.query ? config.url + '?' + querystring.stringify(config.query) : config.url

  return axios(config)
}