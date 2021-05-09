<!--  作者：李信志 历史记录 时间范围轴  -->
<template>
  <div ref="listContain" class="label-contain" @scroll="onScroll">
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
                :class-name="time_label_config['class-name']"
    ></time-label>
  </div>
</template>

<script>
import TimeLabel from "./time-label";
import historyConfig from "../../config/history_config";
export default {
  name: "label-contain",
  components: {
    TimeLabel
  },
  props:{'history_list':Array},
  data(){
    return {
      time_label_config_s:[],
      topHeight:0
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
      this.time_label_config_s.forEach((v)=>{
        let distance_top =this.$refs["listContain"].getBoundingClientRect().top + v.top
        if (distance_top < 0){
          v.is_flex_top = true
          v.is_flex_bottom = false
          v.isActive = true
          console.log(v)
        }else if (distance_top + v.flex_bottom + 20 +20 - document.body.clientHeight > 0){
          v.is_flex_top = false
          v.is_flex_bottom = true
          v.isActive = false
        }else {
          v.is_flex_top = false
          v.is_flex_bottom = false
          v.isActive = true
        }
      })
    },

  },
  mounted () {
    this.onScroll()
    //监听滚动事件
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  watch:{
    history_list:{
      handler:function(){
        this.time_label_config_s=[]
        let history_list = this.history_list
        // 初始化time_label_config_s
        historyConfig.forEach(v=>{
          try {
            history_list.forEach((val,i)=>{
              if (v.condition(val.viewAt)){
                this.time_label_config_s.push({
                  text:v.label,
                  isActive:true,
                  is_flex_top:false,
                  is_flex_bottom:false,
                  flex_bottom:this.time_label_config_s.length*50+20,
                  top:i*123+18,
                  isShow:true,
                  'class-name':v.class,
                })
                // 跳出循环节省性能
                throw new Error('end')
              }
            })
          }catch (e) { if(!(e.message==="end")) throw e }
        })
        this.time_label_config_s=this.time_label_config_s.reverse()
      },
      immediate: true
    }
  }
}
</script>

<style>

</style>