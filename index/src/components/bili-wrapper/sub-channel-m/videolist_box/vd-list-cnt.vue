<template>
  <div class="vd-list-cnt">
    <ul class="vd-list" :class="'mod-'+mod">
      <vd-list-li v-for="item in archives" :key="item.aid" :item="item" />
    </ul>
    <div style="clear:both"></div>
    <div class="pager pagination">

      <!--  分页  -->
      <pagination :page="page" @tab-page="tab"></pagination>
      <div class="jump-pager">
        <div class="page-total">
          <span class="pagination-btn count">共 {{ page_count }} 页/ {{ this.page.count }} 个 ，</span>
        </div>
        <span>跳至</span>
        <input type="text" min="1" class="jump-pager-input no-spin">
        <span>页</span>
      </div>
    </div>
  </div>
</template>

<script>
import VdListLi from "./vd-list-li";
import Pagination from "../../Pagination";
import modBtn from "./modBtn";
export default {
  name: "vd-list-cnt",

  components: {Pagination, VdListLi},

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
          aid:460089905,   //视频id
          bvid:"BV135411c7d4",    //视频id
          ctime:1618025514,   //视频发布时间
          desc:"-",   //视频文章
          duration:84,   //视频时长
          owner:{
            face:"",    //作者头像
            mid:1335100303,    //作者id
            name:"娱乐中相遇",    //作者名称
          },
          pic:"//i0.hdslb.com/bfs/archive/cbf5f9709b070cde982d41a227da8d07184b94a7.jpg@160w_100h.webp",    //预览图
          stat:{
            aid:802866045,    //视频id
            coin:0,    //投币数
            dislike:0,    //点踩数
            favorite:0,    //收藏数
            his_rank:0,   //排行
            like:0,   //点赞数
            reply:0,    //评论数
            share:0,    //转发数
            view:0,    //观看数
          },
          title:"鼬先生，你在临死前是否也看清了自己呢？",   //标题
          tname:"MAD·AMV",    //视频分区
        },
      ]
    }
  },

  methods:{
    tab(index){
      this.$emit("tab-page",index)
    }
  },

  /**
   * 同级组件传值
   */
  mounted() {
    modBtn.$on("type", (type) => {
      this.mod = type;
    })
  }
}
</script>