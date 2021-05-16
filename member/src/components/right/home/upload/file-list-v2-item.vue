<template>
  <div class="file-list-v2-item">
    <div class="file-list-v2-item-icon">
      <span>P{{ index }}</span>
    </div>
    <div class="file-list-v2-item-wrp">
      <div class="item-status-wrp">
            <span class="item-title">
              <p class="item-title-text">{{ videoTitle }}</p>
              <!---->
            </span>
        <div class="item-status-op">
          <!---->
          <!---->
          <span class="item-status-click" @click="deleteClick">删除</span>
          <!---->
          <i class="icon-success-v2" v-if="progress===100"></i>
          <span class="item-status-percentage" v-else>{{progress}}%</span>
          <!---->
        </div>
      </div>
      <div class="item-upload-info">
        <span class="upload-status-intro" v-if="progress===100">上传完成</span>
        <span class="upload-status-intro" v-else>上传中</span>
        <!---->
        <!---->
        <!---->
      </div>
      <div class="item-upload-progress">
        <div :class="'item-upload-progress-'+(progress===100?'complete':'loading')" :style="'width: '+progress+'%;'"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {postVideo} from "../../../../apis";
import axios from 'axios'

export default {
  name: "file-list-v2-item",
  props:["video","index"],
  data(){
    return {
      videoTitle:this.video.name,
      progress:0,
      source: null,
    }
  },
  mounted() {
    // 上传视频
    this.source = axios.CancelToken.source();
    postVideo(this.video,this.source.token,
        (progressEvent) => {
          this.progress = Math.floor((progressEvent.loaded / progressEvent.total) * 100 || 0);
    }).then((res)=>{
      if (res?.data?.code===0) {
        this.percent = 100;
        console.log()
        this.$emit("succeedUpload",{data:res.data.data.filePath,index:this.index})
      }
    })
  },
  methods:{
    deleteClick(){
      if (this.progress<100){
        this.cancelUpload()
      }
      this.$emit("cancelUpload",this.index)
    },
    cancelUpload() {
      //取消上传
      this.source.cancel("Operation canceled by the user.");
    },
  }
}
</script>

<style>

</style>