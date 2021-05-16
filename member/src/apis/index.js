import axios from "g-public/js/axios/caxios";

export const getHistoryCursor = () => {
    return axios({
        url: '//api.bilibili.org/member/all-info',
        withCredentials: true,
    })
}

// 上传视频
export const postVideo = (video,cancelToken,cd) => {
    let form  = new FormData()
    form.set('video',video)
    return axios({
        url: '//video.s.bilibili.org/upload',
        method: "post",
        headers:{'Content-Type':'multipart/form-data'},
        data:form,
        onUploadProgress: function(progressEvent) {
            if (progressEvent.lengthComputable) {
                cd(progressEvent);
            }
        },
        cancelToken: cancelToken,
    })
}

// 提交视频信息
export const subVideoInfo = (videoInfo) => {
    let form  = new FormData()
    for (let i in videoInfo){
        form.set(i,videoInfo[i])
    }
    return axios({
        url: '//api.bilibili.org/video/upload',
        method: "post",
        headers:{'Content-Type':'multipart/form-data'},
        data:form,
    })
}