<template>
  <div class="upload-manage cc-content-body">
    <div class="new-link-top-wrap">
      <div id="tab-container" class="new-link-top-container">
      </div>
    </div>
    <div class="article-v2-wrap content">
      <div class="bcc-search-input-wrapper article-header_search">
        <input type="text" placeholder="搜索稿件" spellcheck="false" class="bcc-search-input">
        <i class="search-input bcc-iconfont bcc-icon-ic_search_"></i>
      </div> <!---->
      <div class=" is-article cc-article-wrp">
        <div >
          <div class="article-header">
            <div class="text-split_wrap"></div>
            <bcc-select />
          </div>
          <div class="article-list_wrap">
            <div >
              <div >
                <article-card />
              </div>
            </div>
          </div>

          <Pagination :page="page" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from "@/components/right/article/article-card";
import BccSelect from "@/components/right/article/bcc-select";
import Pagination from "@/components/right/article/Pagination";
export default {
  name: "article",
  components: {Pagination, BccSelect, ArticleCard},
  data(){
    return{
      btnNum:-1,
      btnShow:false,
      page:{
        count:80,    // 总评论数
        num:7,    //当前页码
        size:10,    // 每页评论数(固定值)
      },
      btn:[
        {
          placeholder:"全部分区",
          width:112
        },
        {
          placeholder:"投稿时间排序",
          width:154
        }
      ]
    }
  },
  methods:{
    click(index){
      this.btnNum = index
      this.btnShow = !this.btnShow
      console.log(this.btnShow)
    }
  }
}
</script>
<style>
@import "../../../assets/css/article/one.css";
@import "../../../assets/css/article/two.css";
</style>