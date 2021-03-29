import {checkInView, debounce, trimHttp, log} from '../utils'
import Bus from '../bus'

function _getAdUrl (data, id) {
  if (window.BiliCm && window.BiliCm.Base && typeof window.BiliCm.Base.getSyncUrl === 'function') {
    return window.BiliCm.Base.getSyncUrl(data, id, null, window.__BILI_CONFIG__ && window.__BILI_CONFIG__.show_bv)
  } else {
    log('ad', 'getSyncUrl not found')
    return ''
  }
}

function _onAdClick (data, id) {
  if (window.BiliCm && window.BiliCm.Base && typeof window.BiliCm.Base.sendClickData === 'function') {
    window.BiliCm.Base.sendClickData(data, id)
  } else {
    log('ad', 'sendClickData not found')
  }
}

function _onAdShow (data, id) {
  if (window.BiliCm && window.BiliCm.Base && typeof window.BiliCm.Base.sendShowData === 'function') {
    window.BiliCm.Base.sendShowData(data, id)
  } else {
    log('ad', 'sendShowData not found')
  }
}

function _onAdStrictShow (data, id) {
  if (window.BiliCm && window.BiliCm.Base && typeof window.BiliCm.Base.sendStrictShowData === 'function') {
    window.BiliCm.Base.sendStrictShowData(data, id)
  } else {
    log('ad', 'sendStrictShowData not found')
  }
}

function _updateAdDom (el, d) {
  el.setAttribute('href', trimHttp(_getAdUrl(d.data, d.id) || ''))
  el.setAttribute('data-target-url', d.data.url)
}

const Events = ['scroll', 'resize', 'load']

/**
 * 用法
 * v-adReport="{data: item, locId: locId, noExposure: false}"
 * data       数据
 * locId      广告位id
 * noExposure 是否走曝光上报 来区别轮播类型上报
 */
const adReport = {
  install(Vue, config) {
    let ads = {}
    let slideAds = {}
    let allLocs = {}

    Vue.directive('adReport', {
      bind (el, binding) {
        const d = binding.value
        if(d.data && d.locId && !d.noReport) {
          const id = d.data.id || d.data.src_id

          el.addEventListener('click', function() {
            _onAdClick(allLocs[id].data, d.id)
          })
        }

        handler(el, binding)
      },
      update(el, binding) {
        handler(el, binding)
      },
    })

    function handler(el, binding) {
      const d = binding.value

      // noReport = true 主动申明不上报
      if(d.data && d.locId && !d.noReport) {
        const id = d.data.id || d.data.src_id
        const item = {
          el: el,
          data: d.data,
          locId: d.locId,
          showNow: false
        }
        // 区分曝光类型
        if(!d.noExposure) {
          ads[id] = item
        }else {
          slideAds[id] = item
        }

        allLocs[id] = item

        // 如果是广告位 广告sdk处理a连接
        if(d.data.is_ad_loc) {
          _updateAdDom(el, d)
        } else {
          el.setAttribute('href', trimHttp(d.data.url))
        }
      }
    }

    // 曝光上报
    function exposure(_ads, _id) {
      const keys = Object.keys(_ads)
      for(let i = 0; i < keys.length; i++) {
        const item = _ads[keys[i]]
        const el = item['el']
        const height = el.offsetHeight
        const id = item.data.id || item.data.src_id
        
        const isCheck = _id ? _id === id : true 
        if (checkInView(el, height / 2  * -1) && isCheck) {
          // 立即曝光
          if(!item.showNow) {
            item.showNow = true
            // console.log(item.locId, item.data.title, '_onAdShow.....')
            _onAdShow(item.data, item.locId)
          }
          
          // 延时曝光
          if(!item.timer) {
            item.timer = setTimeout(() => {
              clearTimeout(item.timer)
              if (checkInView(el, height / 2  * -1)) {
                // console.log(item.locId, item.data.title, '_onAdStrictShow.....')
                _onAdStrictShow(item.data, item.locId)
                delete _ads[keys[i]]
              }
              delete item.timer
            }, 1000)
          }
        }
      }
    }

    // 普通曝光触发事件
    for (let j = 0; j < Events.length; j++) {
      window.addEventListener(Events[j], debounce(() => { exposure(ads) }, 200))
    }

    // 轮播曝光上报
    Bus.$on('slide-show', d => {
      if(d.data && d.locId && d.el) {
        const id = d.data.id || d.data.src_id
        exposure(slideAds, id)
      }
    })
    
  }
}

export default adReport