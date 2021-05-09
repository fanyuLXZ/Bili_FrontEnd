import BiliUser from 'g-public/modules/@bilibili/bili-user'
export default class {
  constructor() {
    this.userInfo = null
    this.callbacks = []
    this.once = []
    this.MiniLogin = null
    BiliUser.watch(data => {
      const old = window.UserStatus?.userInfo
      if (data.code === 0) {
        this.updateInfo(data.data, old && old.isLogin !== data.data.isLogin)
      } else if (data.code === -101) {
        this.updateInfo({ isLogin: false })
      } else {
        this.updateInfo({ isLogin: false, fallback: true })
      }
    })
  }

  /**
   * 获取用户信息
   */
  async getUserState(callback, old, params){
    let info = null
    try {
      const data = await BiliUser.get()
      console.log(data)
      if(data.code === 0) {
        this.updateInfo(data.data, old && old.isLogin !== data.data.isLogin, params)
      }else if(data.code === -101) {
        this.updateInfo({ isLogin: false })
      } else {
        this.updateInfo({ isLogin: false, fallback: true })
      }
    } catch(err) {
      this.updateInfo({ isLogin: false, fallback: true })
    }
    this.emit('LoginInfoLoaded', info)

    callback && typeof callback === 'function' && callback(info)
  }

  /**
   * 更新用户信息状态 并触发回调
   * @param {Object} info
   */
  updateInfo(info, changed, params) {
    this.userInfo = info
    for(let i = 0, len = this.callbacks.length; i < len; i++) {
      this.callbacks[i](info, changed, params)
    }
    for(let j = 0, len = this.once.length; j < len; j++) {
      this.once[j](info, changed, params)
    }
    this.once = []
  }

  /**
   * 添加回调到列表
   * @param {Function} cb
   * @param {Boolean} isOnce
   */
  addCallback(cb, isOnce) {
    isOnce ? this.once.push(cb) : this.callbacks.push(cb)
  }

  /**
   * 移除指定回调,或移除所有回调
   * @param {Function} [cb] - 指定的回调
   */
  removeCallback(cb) {
    if (!cb) {
      this.callbacks = []
      return
    }
    for (let i = 0, len = this.callbacks.length; i < len; i++) {
      if (this.callbacks[i] === cb) {
        this.callbacks.splice(i, 1)
        break
      }
    }
  }

  onLoginOnce(fn) {
    this.addCallback(fn, true)
  }

  onLoginUpdate(fn) {
    this.addCallback(fn)
  }

  /**
   * 自定义事件
   * @param {String} eventType
   * @param {Object} data
   */
  emit(eventType,data) {
    if(document && document.dispatchEvent) {
      let evt = document.createEvent('HTMLEvents')
      evt.initEvent('on' + eventType, true, true)
      evt.data = data
      return !document.dispatchEvent(evt)
    } else {
      let evt = document.createEventObject()
      evt.data = data
      return document.fireEvent('on' + eventType, evt)
    }
  }

  /**
   * 快速登录
   * @param {Function} callback
   */
  biliQuickLogin(callback, oldStatus, params) {
    BiliUser.quickLogin((data) => {
      if (data.code === 0) {
        this.getUserState(callback, oldStatus, params)
      }
    })
  }
  quickLogin(callback, params) {
    let oldStatus = window.UserStatus.userInfo
    BiliUser.quickLogin((data) => {
      if (data.code === 0) {
        this.getUserState(callback, oldStatus, params)
      }
    })
  }
  logout(...agru) {
    BiliUser.logout(...agru, window.location.toString())
  }
}
