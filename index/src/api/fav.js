import axios from "g-public/js/axios/caxios";

export const getNavFavList = () => {
    return axios({
        url: '//api.bilibili.org/fav/folder',
        withCredentials: true,
    })
}