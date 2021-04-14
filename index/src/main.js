import 'babel-polyfill'
import Vue from 'vue'
import {createApp} from './index'
import {cookie} from 'g-public/js/utils'
import {BiliIntegration, TrackingReport} from 'g-public/modules/@bilibili/sentry-integrations'
import * as Sentry from "http-proxy-middleware/dist/handlers";


if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    // http://cea221f3a4234669b383c1069c6914cc@api.bilibili.com/x/traceback/32
    dsn: `http${process.env.NODE_ENV === 'production' ? 's' : ''}://7e6c586f1c524c16b92c70affa82fc75@api.bilibili.com/x/traceback/32`,
    debug: process.env.NODE_ENV !== 'production',
    release: process.env.COMMIT_ID,
    environment: process.env.PUSH_ENV === 'pre' ? 'pre' : process.env.NODE_ENV,
    sampleRate: 0.1, //采样率改为10%
    integrations: [
      new BiliIntegration({
        ignoreMessageList: ["Can't find variable: $"], // 新首页已经不用jquery
      }),
      new TrackingReport({env: process.env.NODE_ENV}),
      new Sentry.Integrations.Vue({
        Vue,
        attachProps: true,
      })
    ]
  })
}
/* eslint-disable */
if (window.onLoginInfoLoaded) {
  window.onLoginInfoLoaded(info => {
    if (!info.isLogin) {
      return
    }
    try {
      Sentry.configureScope((scope) => {
        scope.setUser(info)
      })
    } catch (e) {}
  })
}

const { app, router, store } = createApp()


// if server-side
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
} else {
  const matchedComponents = router.getMatchedComponents();

  store.state.LNG = cookie.get('LNG') || (window.navigator.language === 'zh-TW' ? 'zh-TW' : 'zh-CN')

  if (!matchedComponents) {
    const err = new Error('404 Not Found')
    err.status = 404
    throw err
  }
  Promise.all(matchedComponents.map(component => {
    return component.asyncData && component.asyncData(store);
  })).then(() => {
    app.$mount('#app')
  }).catch(e => {
    //TODO: finish catch
    console.error(e)
  })
}

router.onReady(() => {
  if (window && window.document.getElementById('app')) {
    app.$mount('#app')
  }
})
