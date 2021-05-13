<!--  作者:欧阳苏蓉 个人中心-我的硬币  -->
<template>
  <div class="security-right">
    <div class="security-right-title"><span
        class="security-right-title-icon"></span>
      <span class="security-right-title-text">我的硬币</span> <!----></div>
    <div class="coin-nav">
      <div class="coin-nav-item on">首页</div>
    </div>
    <div class="coin-content">
      <div class="coin-inner">
        <div class="coin-index">
          <!--  硬币余额  -->
          <coinIndexLeft :money="money"></coinIndexLeft>
          <!--  硬币帮助  -->
          <coinIndexRight></coinIndexRight>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coinIndexRight from "@/components/coin/coinIndexRight";
import coinIndexLeft from "@/components/coin/coinIndexLeft";
import { all_info} from "../api/home";
export default {
  name: "coin",

  data(){
    return{
      money:0,
    }
  },

  components:{
    coinIndexRight,
    coinIndexLeft
  },

  mounted() {
    all_info().then(
        (res)=>{
          //获取返回的json对象
          this.money = res.data.data.money
        })
  }
}
</script>

<style>
@import "../assets/personalcenter/coin.css";
</style>
<style type="text/css">.coin-nav[data-v-32dee0cc] {
  height: 50px;
  border-bottom: 1px solid #ddd;
  line-height: 50px
}

.coin-nav-item[data-v-32dee0cc] {
  float: left;
  font-size: 14px;
  text-align: center;
  margin-left: 38px !important;
  min-width: 56px;
  color: #222;
  cursor: pointer
}

.coin-nav .on[data-v-32dee0cc] {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowY2YzZmZkNy05MWYxLWJjNDktYTMzNy0xZWE1ZDlmOTRlNzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjNDQkVEOURCNUVCMTFFNUIyRkNBMTcwQUQzNUMxRTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjNDQkVEOUNCNUVCMTFFNUIyRkNBMTcwQUQzNUMxRTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5NDM5MzQ4LTU3MGYtZDI0NC1hOThiLTlkNjJjYmFkZTJlNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowY2YzZmZkNy05MWYxLWJjNDktYTMzNy0xZWE1ZDlmOTRlNzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6k9jasAAAAMElEQVR42mJkWHiNAQhEgXgREMcB8WsmIMEFxJuB2ANKc4EElwOxOQMEgOjlAAEGAPtdBvsKf21nAAAAAElFTkSuQmCC) bottom no-repeat;
  border-bottom: 1px solid #00a1d6;
  color: #00a1d6
}

.coin-content[data-v-32dee0cc] {
  padding: 24px 20px
}

.coin-inner[data-v-32dee0cc] {
  background-color: #fff;
  overflow: auto;
  min-height: 600px
}</style>
<style type="text/css">.coin-index-left[data-v-1e48d362] {
  float: left;
  width: 370px;
  padding-bottom: 10px
}

.coin-index-right[data-v-1e48d362] {
  float: left;
  margin-left: 40px;
  width: 370px;
  padding: 24px 0 10px
}

.coin-index-title[data-v-1e48d362] {
  width: 370px;
  height: 70px
}

.coin-rest-p[data-v-1e48d362] {
  color: #222;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px
}

.coin-num[data-v-1e48d362] {
  margin-left: 20px;
  color: #00a1d7
}

.coin-rest-info[data-v-1e48d362] {
  color: #222;
  font-weight: 700
}

.coin-rest-info-inco[data-v-1e48d362] {
  color: #aaa;
  font-weight: 400;
  margin-left: 15px
}

.table-wrapper[data-v-1e48d362] {
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 2px;
  margin-top: 10px;
  margin-bottom: 20px;
  overflow: hidden
}

.coin-left-nodata[data-v-1e48d362] {
  width: 368px;
  color: #99a2aa;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  padding-top: 30px;
  padding-bottom: 30px
}

.table-normal[data-v-1e48d362] {
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  table-layout: fixed
}

.table-normal thead tr td[data-v-1e48d362] {
  text-align: center;
  background: #f5f5f5;
  height: 42px;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  font-weight: 700
}

.table-normal thead tr td[data-v-1e48d362]:first-child {
  border-left: none
}

.table_1[data-v-1e48d362] {
  width: 36%
}

.table_2[data-v-1e48d362] {
  width: 21%
}

.table_3[data-v-1e48d362] {
  width: 43%
}

.get-coin-more[data-v-1e48d362] {
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #555;
  display: block;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  text-align: center;
  line-height: 32px
}

.get-coin-more[data-v-1e48d362]:hover {
  background-color: #ccd0d7;
  border-color: #ccd0d7;
  color: inherit;
  cursor: pointer;
  color: #fff
}

.table-normal tbody tr[data-v-1e48d362] {
  border-top: 1px solid #ddd
}

.table-normal tbody tr[data-v-1e48d362]:nth-child(odd) {
  background: #fff
}

.table-normal tbody tr[data-v-1e48d362]:first-child {
  border: none
}

.table-normal tbody tr td[data-v-1e48d362]:first-child {
  border-left: none
}

.table-normal tbody tr td[data-v-1e48d362] {
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-left: 1px solid #ddd
}

.coin-index-right-title[data-v-1e48d362] {
  color: #222;
  font-weight: 700;
  margin: 24px 0 20px
}

.out-link[data-v-1e48d362] {
  float: right;
  font-weight: 400;
  color: #00a1d6
}

.out-link[data-v-1e48d362]:hover {
  color: #f35c8f;
  cursor: pointer
}

.coin-text-p[data-v-1e48d362] {
  color: #6d757a;
  line-height: 24px
}

.coin-text-p .coin-i[data-v-1e48d362] {
  background: #00a1d7;
  border-radius: 6px;
  display: inline-block;
  width: 6px;
  height: 6px;
  margin: -3px 5px 0 0;
  vertical-align: middle
}

.coin-index-active-item[data-v-1e48d362] {
  float: left;
  display: block;
  width: 180px;
  height: 120px;
  margin-bottom: 20px;
  margin-right: 5px
}</style>