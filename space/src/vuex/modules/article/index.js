import Vue from 'vue'

const actions = {
    fetchArticle: ({commit}, params) => {  // eslint-disable-line
        return Vue.http
            .jsonp('//api.bilibili.com/x/space/article', {params})
            .then(rs => {
                const {code, message, data} = rs
                if (code === 0) {
                    return Promise.resolve(data)
                } else {
                    Vue.$warn(`获取用户专栏列表失败，${message}`)
                    return Promise.reject()
                }
            }, () => {
                Vue.$warn('获取用户专栏列表失败，网络错误')
                return Promise.reject()
            })
    },
    fetchArticleLists: ({commit}, param) => {  // eslint-disable-line
        return Vue.http
            .jsonp('//api.bilibili.com/x/article/up/lists', {params: param})
            .then(rs => {
                const {code, message, data} = rs
                if (code === 0) {
                    return Promise.resolve(data)
                } else {
                    Vue.$warn(`获取用户专栏文集失败, ${message}`)
                    return Promise.reject()
                }
            }, () => {
                Vue.$warn(`获取用户专栏文集失败，网络错误`)
                return Promise.reject()
            })
    },
}

export default {
    actions,
}
