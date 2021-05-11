import axios from "g-public/js/axios/caxios";

export const getVideoInfo = (bvid) => {
    return axios({
        url: '/api/video/info',
        withCredentials: true,
        query: {
            bvid: bvid,
        },
    })
}