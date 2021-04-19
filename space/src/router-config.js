import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    fallback: false,
    mode: 'history',
    routes: [{
        path: '/:v(v)?/:mid(\\d+)',
        alias: '/index',
        name: 'index',
        component: resolve => require(['./components/index/index.vue'], resolve),
    }, {
        path: '/:v(v)?/:mid(\\d+)/bangumi',
        name: 'bangumi',
        component: resolve => require(['./components/bangumi'], resolve),
    }, {
        path: '/:v(v)?/:mid(\\d+)/cinema',
        name: 'cinema',
        component: resolve => require(['./components/pgc'], resolve),
    }, {
        path: '/:v(v)?/:mid(\\d+)/subs',
        name: 'subscribe',
        component: resolve => require(['./components/tag'], resolve),
    }, {
        path: '/:v(v)?/:mid(\\d+)/video',
        name: 'video',
        component: resolve => require(['./components/video'], resolve),
    }, {
        path: '/:v(v)?/:mid(\\d+)/audio',
        name: 'audio',
        component: resolve => require(['./components/audio'], resolve),
    }, {
        path: '/:v(v)?/:mid(\\d+)/article',
        name: 'article',
        component: resolve => require(['./components/article'], resolve),
    }, {
        path: '/:v(v)?/:mid(\\d+)/dynamic',
        name: 'dynamic',
        component: resolve => require(['./components/dynamic'], resolve),
    }, {
        path: '/:v(v)?/:mid(\\d+)/favlist',
        name: 'fav',
        component: resolve => require(['./components/fav'], resolve),
    }, {
        path: '/:v(v)?/:mid(\\d+)/setting',
        name: 'setting',
        component: resolve => require(['./components/setting'], resolve),
    }, {
        path: '/:v(v)?/:mid(\\d+)/playlist',
        component: resolve => require(['./components/playlist/'], resolve),
        children: [{
            path: 'index',
            name: 'playlistList',
            component: resolve => require(['./components/playlist/list'], resolve),
        }, {
            path: 'edit',
            component: resolve => require(['./components/playlist/edit'], resolve),
            children: [{
                path: 'info',
                name: 'playlistEditInfo',
                component: resolve => require(['./components/playlist/edit/info'], resolve),
            }, {
                path: 'video',
                name: 'playlistEditVideo',
                component: resolve => require(['./components/playlist/edit/video'], resolve),
            }],
        }, {
            path: 'create',
            name: 'playlistCreate',
            component: resolve => require(['./components/playlist/create'], resolve),
        }],
    }, {
        path: '/:v(v)?/:mid(\\d+)/channel',
        component: resolve => require(['./components/channel/'], resolve),
        children: [{
            path: 'index',
            name: 'channelList',
            component: resolve => require(['./components/channel/list/'], resolve),
        }, {
            path: 'detail',
            name: 'channelDetail',
            component: resolve => require(['./components/channel/detail/'], resolve),
        }],
    }, {
        path: '/:v(v)?/:mid(\\d+)/fans',
        component: resolve => require(['./components/fanslist/'], resolve),
        children: [{
            path: 'fans',
            name: 'fans',
            component: resolve => require(['./components/fanslist/fanslist.vue'], resolve),
        }, {
            path: 'follow',
            name: 'follow',
            component: resolve => require(['./components/fanslist/fanslist.vue'], resolve),
        }],
    }, {
        path: '/:v(v)?/:mid(\\d+)/album',
        name: 'album',
        component: resolve => require(['./components/album'], resolve),
    }, {
        path: '/:v(v)?/:mid(\\d+)/pugv',
        name: 'pugv',
        component: resolve => require(['./components/pugv'], resolve),
    }],
})

router.afterEach((to, from) => {
    if (!Vue.prototype.$isServer) {
        if (from.name !== null) {
            window.reportObserver.sendPV()
        }
        if (from.name !== to.name) {
            window.scrollTo(0, 0)
        }
    }
})

export default router
