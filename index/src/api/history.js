import axios from "g-public/js/axios/caxios";

export const getHistoryCursor = (max,view_at,business) => {
    return axios({
        url: '//api.bilibili.org/history/cursor',
        withCredentials: true,
        query: {
            max: max,
            view_at: view_at,
            business: business
        },
    })
}