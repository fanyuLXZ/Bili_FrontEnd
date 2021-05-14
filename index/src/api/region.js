import axios from "g-public/js/axios/caxios";

// 获取子分区最新动态
export const getSmallDynamicRegionVideo = (rid,ps) => {
    return axios({
        url: '//api.bilibili.org/region/dynamic/child',
        withCredentials: true,
        query: {
            rid: rid,
            ps: ps,
        },
    })
}

// 获取子分区排行
export const getSmallRankingRegionVideo = (rid) => {
    return axios({
        url: '//api.bilibili.org/region/ranking/child',
        withCredentials: true,
        query: {
            rid: rid,
        },
    })
}

// 热度排序
export const getHotRankingRegionVideo = (rid,pn,ps) => {
    return axios({
        url: '//api.bilibili.org/region/cate/search',
        withCredentials: true,
        query: {
            rid,
            pn,
            ps,
        },
    })
}

// 时间排序
export const getTimeRankingRegionVideo = (rid,pn,ps) => {
    return axios({
        url: '//api.bilibili.org/region/newlist',
        withCredentials: true,
        query: {
            rid,
            pn,
            ps,
        },
    })
}