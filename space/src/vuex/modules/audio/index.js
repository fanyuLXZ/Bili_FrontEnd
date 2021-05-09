import Vue from 'vue'

const actions = {
    fetchAudio: ({commit}, params) => {  // eslint-disable-line
        return Vue.http
            .get('//api.bilibili.com/audio/music-service/web/song/upper', {params})
            .then(rs => {
                const {code, msg, data} = rs.data
                if (code === 0) {
                    return Promise.resolve(data === null ? {data: [], curPage: 0, pageCount: 0} : data)
                } else {
                    Vue.$warn(`获取用户音频列表失败，${msg}`)
                    return Promise.reject()
                }
            }, () => {
                Vue.$warn('获取用户音频列表失败，网络错误')
                return Promise.reject()
            })
    },
}

export default {
    actions,
}
