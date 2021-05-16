<template>
  <div class="vd-list-cnt">
    <ul class="vd-list" :class="'mod-'+mod">
      <vd-list-li v-for="item in archives" :key="item.aid" :item="item" />
    </ul>
    <div style="clear:both"></div>
<!--    <div class="pager pagination">-->

<!--      &lt;!&ndash;  分页  &ndash;&gt;-->
<!--      <pagination :page="page" @tab-page="tab"></pagination>-->
<!--      <div class="jump-pager">-->
<!--        <div class="page-total">-->
<!--          <span class="pagination-btn count">共 {{ page_count }} 页/ {{ this.page.count }} 个 ，</span>-->
<!--        </div>-->
<!--        <span>跳至</span>-->
<!--        <input type="text" min="1" class="jump-pager-input no-spin">-->
<!--        <span>页</span>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import VdListLi from "./vd-list-li";
// import Pagination from "../../Pagination";
import modBtn from "./modBtn";
import {getHotRankingRegionVideo,getTimeRankingRegionVideo} from "../../../../api/region";
export default {
  name: "vd-list-cnt",

  components: { VdListLi},

  computed:{
    page_count(){
      return Math.ceil((this.page.count/10))
    }
  },

  data(){
    return{
      mod:2,
      page: {
        count:726352,    //总评论数
        current:1,    //页码
        size: 20,    //每页数据
      },
      archives:[
        {
          aid:1,   //视频id
          bvid:"",    //视频id
          ctime:1,   //视频发布时间
          desc:"-",   //视频文章
          duration:1,   //视频时长
          owner:{
            face:"",    //作者头像
            mid:1,    //作者id
            name:"1",    //作者名称
          },
          pic:"",    //预览图
          stat:{
            aid:1,    //视频id
            coin:0,    //投币数
            dislike:0,    //点踩数
            favorite:0,    //收藏数
            his_rank:0,   //排行
            like:0,   //点赞数
            reply:0,    //评论数
            share:0,    //转发数
            view:0,    //观看数
          },
          title:"",   //标题
          tname:"",    //视频分区
        },
      ]
    }
  },

  methods:{
    tab(index){
      this.$emit("tab-page",index)
    },
    updateData(){
      if (this.mod===0){
        getTimeRankingRegionVideo(this.tid,1,20).then((res)=>{
          if (res?.data?.code===0){
            this.archives=res.data.data.archives
            this.page=res.data.data.page
          }
        })
      }else {
        getHotRankingRegionVideo(this.tid,1,20).then((res)=>{
          if (res?.data?.code===0){
            this.archives=res.data.data.archives
            this.page=res.data.data.page
          }
        })
      }
    }
  },

  /**
   * 同级组件传值
   */
  mounted() {
    this.updateData()
    modBtn.$on("type", (type) => {
      this.mod = type;
      this.updateData()
    })
  },
  props:["tid"],
  watch:{
      tid(){
        this.updateData()
      }
  }
}
</script>