import axios from "g-public/js/axios/caxios";
import qs from "querystring";

export const getVideoInfo = (bvid) => {
    return axios({
        url: '//api.bilibili.org/video/info',
        withCredentials: true,
        query: {
            bvid: bvid,
        },
    })
}

// 视频评论
export const getVideoReply = (next,mode,aid,) => {
    return axios({
        url: '//api.bilibili.org/video/reply/main',
        withCredentials: true,
        query: {
            aid,
            next,
            mode,
        },
    })
}

// 发表视频评论
export const getVideoReplyAdd = (oid,message) => {
    return axios({
        url: '//api.bilibili.org/video/reply/add',
        withCredentials: true,
        method: 'post',
        data: qs.stringify({
            oid,
            message,
        })
    })
}

// 发表子评论
export const getReplyAdd = (cidrely,cText) => {
    return axios({
        url: '//api.bilibili.org/comment/insetcid',
        withCredentials: true,
        method: 'post',
        data: qs.stringify({
            cidrely,
            cText,
        })
    })
}

// 子评论
export const getReply = (rpid,pn,ps) => {
    return axios({
        url: '//api.bilibili.org/comment/reply',
        withCredentials: true,
        method: 'get',
        query: {rpid,pn,ps},
    })
}

// 视频点赞
export const getPostLike = (aid) => {
    return axios({
        url: '//api.bilibili.org/video/updateinsetuid',
        withCredentials: true,
        method: 'post',
        data: qs.stringify({
            aid,
        })
    })
}
