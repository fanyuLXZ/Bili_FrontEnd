<!--  作者：欧阳苏蓉 历史记录 时间范围轴  -->
<template>
  <div class="label-contain" @scroll="onScroll">
    <!--  视频时间范围  -->
    <time-label v-for="(time_label_config,index) in time_label_config_s"
                :top="time_label_config.top"
                :flex_bottom="time_label_config.flex_bottom"
                :is_flex_bottom="time_label_config.is_flex_bottom"
                :is_flex_top="time_label_config.is_flex_top"
                :is-active="time_label_config.isActive"
                :is-show="time_label_config.isShow"
                :text="time_label_config.text"
                :key="index"
    />
  </div>
</template>

<script>
import TimeLabel from "./time-label";
export default {
  name: "label-contain",
  components: {
    TimeLabel
  },

  data(){
    return {
      time_label_config_s:[
        {
          text:"11111111111111",
          isActive:true,
          is_flex_top:false,
          is_flex_bottom:false,
          flex_bottom:0,
          top:18,
          isShow:true,
        },
        {
          text:"222",
          isActive:true,
          is_flex_top:false,
          is_flex_bottom:false,
          flex_bottom:20,
          top:200,
          isShow:true,
        },
        {
          text:"3333",
          isActive:false,
          is_flex_top:false,
          is_flex_bottom:true,
          flex_bottom:20,
          top:700,
          isShow:true,
        }
      ],
      index:0,
    }
  },

  methods:{
    // 获取滚动条当前的位置
    getScrollTop () {
      let scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      return scrollTop
    },

    // 获取当前可视范围的高度
    getClientHeight () {
      let clientHeight = 0;
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
      } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
      }
      return clientHeight
    },

    // 获取文档完整的高度
    getScrollHeight () {
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    },

    // 滚动事件触发下拉加载
    onScroll () {
      if (this.getScrollTop() > this.time_label_config_s[this.index].top) {
        if(!this.time_label_config_s[this.index].is_flex_top){
          this.time_label_config_s[this.index].is_flex_top=true
          // console.log(this.index)
          if (this.time_label_config_s[this.index+1]!==undefined){
            this.index+=1
            // console.log(this.index)
          }
        }
      }else{
        if(this.time_label_config_s[this.index].is_flex_top){
          this.time_label_config_s[this.index].is_flex_top=false
          if (this.index!==0){
            this.index-=1
          }
        }
      }
      if (this.time_label_config_s[this.index+1]!==undefined){
        if(this.getScrollTop()>this.time_label_config_s[this.index+1].is_flex_top-this.getClientHeight ()-30){
          if (this.time_label_config_s[this.index+1].is_flex_bottom){
            this.time_label_config_s[this.index+1].isActive=true
            this.time_label_config_s[this.index+1].is_flex_bottom=false
          }
        }else {
          if (!this.time_label_config_s[this.index+1].is_flex_bottom){
            this.time_label_config_s[this.index+1].isActive=false
            this.time_label_config_s[this.index+1].is_flex_bottom=true
          }
        }
      }
    },

  },

  mounted () {
    //监听滚动事件
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  },
}
</script>

<style>

</style>