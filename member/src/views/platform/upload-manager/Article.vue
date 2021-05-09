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
            <div class="header-operate">
              <bcc-select v-for="(item,index) in btn" :key="index" :item="item" :index="index" />
            </div>
          </div>
          <div class="article-list_wrap">
            <div >
              <div >
                <article-card />
              </div>
            </div>
          </div>
          <div class="bcc-pagination-container">
            <ul class="bcc-pagination"><!---->
              <li class="bcc-pagination-item selected"><a>1</a></li><!---->
              <li class="bcc-pagination-extra">
                <div class="bcc-pagination-total"> 共1页 / 1个，</div>
                <div class="bcc-pagination-elevator"> 跳转至 <input type="text" autocomplete="off" spellcheck="false"> 页
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BccSelect from "@/components/right/article/bcc-select";
import ArticleCard from "@/components/right/article/article-card";
export default {
  name: "article",
  components: {ArticleCard, BccSelect},
  data(){
    return{
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
  }
}
</script>
<style>
@import "../../../assets/css/article/one.css";
@import "../../../assets/css/article/two.css";
</style>