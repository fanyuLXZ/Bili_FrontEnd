import 'babel-polyfill'
import { createApp } from './index'
import Vue from 'vue'
import { BiliIntegration, TrackingReport } from '@bilibili/sentry-integrations'


Sentry.init({
  // http://16fc99b7243643c09cc4680b7fe3fcd8@api.bilibili.com/x/traceback/10
  dsn: `http${process.env.NODE_ENV === 'production' ? 's' : ''}://16fc99b7243643c09cc4680b7fe3fcd8@api.bilibili.com/x/traceback/10`,
  debug: process.env.NODE_ENV !== 'production',
  release: process.env.COMMIT_ID,
  environment: process.env.NODE_ENV,
  sampleRate: 0.2,
  integrations: [
    new TrackingReport({ env: process.env.NODE_ENV }),
    new BiliIntegration({}),
    new Sentry.Integrations.Vue({
      Vue,
      attachProps: true,
      logErrors: process.env.NODE_ENV !== 'production',
    }),
  ],
})

// router link change url
// Vue.mixin({
//   beforeRouteUpdate(to, from, next) {
//     const {
//       asyncData
//     } = this.$options
//     if (asyncData) {
//       asyncData({
//         store: this.$store,
//         route: to
//       }).then(next).catch(next)
//     } else {
//       next()
//     }
//   }
// })

const { app, router, store } = createApp()

router.onReady(() => {
  // if server-side
  if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
    const plist = [
      store.dispatch('fetchMyInfo', { mid }),
      store.dispatch('fetchPlaylistAuth', { vmid: mid }),
      store.dispatch('fetchRelation', mid),
    ]
    Promise.all(plist).then(res => {
      if (store.state.init._bili_space_state !== 'owner') {
        const { attribute } = res[2]
        let relation = ''
        // 1表示悄悄关注，2表示关注，6表示双向关注，0表示没有关系
        if (store.state.init._bili_space_mymid === 0) {
          relation = 'visitor'
        } else if ([ 2, 6 ].indexOf(+attribute) > -1) {
          relation = 'fans'
        } else {
          relation = 'visitor'
        }

        store.commit('RELATION_WITH_UPER', +attribute)
        store.commit('UPADTE_USER_STATE', relation)
      }
    })
  } else {
    // const { dispatch } = store
    // const mid = window._bili_space_mid
    //
    // Promise.all([
    //   dispatch('fetchInfo', { mid }), // 当前空间UP主的信息
    //   dispatch('fetchSettings', { mid }), // 当前空间UP主的空间设置
    //   dispatch('fetchMyInfo', { vmid: window._bili_space_mymid, mid }), // 当前登录用户的信息
    //   dispatch('getPlaylistAuth', { vmid: mid }) // 当前空间UP主是否有播单的权限
    // ]).then(() => {
    //   app.$mount('#space-app')
    // })

    const matchedComponents = router.getMatchedComponents()
    if (!matchedComponents || matchedComponents.length === 0) {
      window.location.href = '//www.bilibili.com/404.html'
      // console.error('404')
    }

    const { cookie } = document
    const mid = window._bili_space_mid
    const plist = matchedComponents.filter(component => component.asyncData)
      .map(item => {
        return item.asyncData(store, { cookie, mid })
      }).concat([
        store.dispatch('fetchMyInfo', { mid }),
        store.dispatch('fetchRelation', mid).catch(() => {
          return false
        }),
        store.dispatch('fetchBeRelation', mid).catch(() => {
          return false
        }),
      ])
    Promise.all(plist).then(res => {
      if (store.state.init._bili_space_state !== 'owner' && res[2]) {
        const { attribute } = res[2]
        let relation = ''
        // 1表示悄悄关注，2表示关注，6表示双向关注，0表示没有关系
        if (store.state.init._bili_space_mymid === 0) {
          relation = 'visitor'
        } else if ([ 2, 6 ].indexOf(+attribute) > -1) {
          relation = 'fans'
        } else {
          relation = 'visitor'
        }
        store.commit('RELATION_WITH_UPER', +attribute)
        store.commit('UPADTE_USER_STATE', relation)
        store.commit('GET_ACCRELATION_SUCCESS', res[3])
      }
      app.$mount('#space-app')
    }).catch()
  }

  if (window && window.document.getElementById('app')) {
    app.$mount('#app')
  }
})
