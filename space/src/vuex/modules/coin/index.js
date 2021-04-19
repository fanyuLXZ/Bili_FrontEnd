import Vue from 'vue'
import {getLocalCache, setLocalCache} from '@/store'

const FETCHCOINVIDEOS_API = '//api.bilibili.com/x/space/coin/video'
const config = {
    method: 'get',
    url: FETCHCOINVIDEOS_API,
    withCredentials: true,
}

const actions = {
    /**
     * 获取用户近期投币的视频
     * mid (int) 用户id
     */
    fetchCoinVideos: ({commit}, mid) => {  // eslint-disable-line
        // eslint-disable-next-line no-undef
        return getLocalCache(FETCHCOINVIDEOS_API, {mid}, _bili_space_mid)
            .then(cache => Promise.resolve(cache), () => {
                config.params = {vmid: mid}
                return Vue.http(config)
                    .then(rs => {
                        const {code, data} = rs.data
                        if (+code === 0) {
                            // eslint-disable-next-line no-undef
                            setLocalCache(FETCHCOINVIDEOS_API, {mid}, data, _bili_space_mid)
                            return Promise.resolve(data)
                        } else {
                            return Promise.reject()
                        }
                    }, () => Promise.reject())
            })
    },
}

export default {
    actions,
}
