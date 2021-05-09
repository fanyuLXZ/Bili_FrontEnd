<template>
 <div class="col-full clearfix">
<div class="contribution-sidenav">
  </div>
<div class="main-content">
 <page-head  @iocns="iocns"/>
 <video-type/> 
<submit-video v-if="1==iocnsid"/>
<cube-list  v-if="2==iocnsid"/>
<pagin-ation :current='3' :total='20' v-if="1==iocnsid"/>
</div>
 </div>
</template>

<script>
import VideoType from './video/videotype'
import PageHead from './video/pagehead'
import SubmitVideo from './video/submitvideo'
import PaginAtion from '../../../beat/pagination/index'
import CubeList from './video/cubelist'

export default {
components:{
  CubeList,
  PageHead,
  SubmitVideo,
   VideoType,
   PaginAtion

},
data() {
  return {
    iocnsid:1
  }
},
methods: {
  iocns(a){
    this.iocnsid=a;
  }
},
}
</script>

<style>
.contribution-sidenav{position:relative;float:left;width:180px;margin-right:-1px;font-size:14px;color:#222;border-right:1px solid #eee;box-sizing:border-box}.contribution-sidenav~.main-content{float:left;width:1283px;padding:20px;box-sizing:border-box;border-left:1px solid #eee}.contribution-sidenav .contribution-list-container{position:relative;max-height:420px;margin:10px 0 20px;overflow:hidden}.contribution-sidenav .contribution-item{position:relative;padding-left:30px;transition:background-color .3s ease;white-space:nowrap;font-size:0;overflow:hidden}.contribution-sidenav .contribution-item:hover{background-color:#f4f5f7}.contribution-sidenav .contribution-item.cur{background-color:#00a1d6}.contribution-sidenav .contribution-item.cur .num,.contribution-sidenav .contribution-item.cur .text{color:#fff}.contribution-sidenav .text{display:inline-block;line-height:44px;width:100px;margin-right:5px;font-size:14px;vertical-align:middle;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.contribution-sidenav .num{display:inline-block;width:32px;font-size:12px;color:#99a2aa;vertical-align:middle;text-align:center;font-family:Arial}@media (min-width:1420px){.contribution-sidenav{width:210px}.contribution-sidenav~.main-content{width:1283px}.contribution-sidenav .contribution-item .text{width:130px}}
#page-video .col-full{padding:0}#page-video .section-title{font-size:20px;line-height:28px;padding-bottom:0}#page-video .play-all-btn,#page-video .video-title{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}#page-video .play-all-btn{margin-left:15px;cursor:pointer;font-size:12px;color:#212121}#page-video .play-all-btn>img{width:18px;height:18px;margin-right:6px}#page-video #submit-video .content{max-height:none}#page-video #submit-video.empty{width:100%}#page-video .be-tab{float:left}#page-video #submit-video-type-filter{background:#edf2f9;border-radius:4px;line-height:36px;margin:18px 0 10px;padding:0 20px}#page-video #submit-video-type-filter a{display:inline-block;margin-right:30px;cursor:pointer}#page-video #submit-video-type-filter a.active{color:#00a1d6}#page-video #submit-video-type-filter a .count{color:#aaa;margin-left:8px}#page-video #submit-video-type-filter.loading{text-indent:-9999px}#page-video #submit-video-list{margin-left:-10px}#page-video .search-empty-hint{background-image:url(//s1.hdslb.com/bfs/static/jinkela/space/assets/nodata02.png);background-position:center 50px;background-repeat:no-repeat;border-radius:4px;color:#6d757a;font-size:14px;overflow:hidden;text-align:center;padding:270px 0 80px}#page-video .search-empty-hint .btn-container{margin-top:25px}#page-video .search-empty-hint .normal{color:#99a2aa}#page-video .search-empty-hint .normal:hover{color:#00a1d6}#page-video .list-item{margin:0 10px}#page-video .list-item:nth-last-child(2){border-bottom:none}#page-video .list-item .cover img{width:160px;height:100px}#page-video .list-item .c{margin-right:10px}#page-video .list-item .desc{height:40px;margin-bottom:17px}#page-video .list-item .meta>span{float:left;width:100px}#page-video .list-item .meta>span.time{width:170px}#page-video .cube-list{width:900px;margin-top:20px}.v-search-result{color:#6d757a;margin:9px 0 -6px}.v-search-count{color:#f25d8e;font-weight:700}.v-search-kw{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width:1420px){#page-video .cube-list{width:1283px}#page-video .small-item{width:190px}#page-video .list-item .cover img,#page-video .small-item .cover,#page-video .small-item img{width:190px;height:119px}#page-video .list-item .c{margin-left:210px}#page-video .list-item .desc{height:60px}}.isPay{position:absolute;top:4px;right:4px;width:36px;height:20px;text-align:center;line-height:20px;background:#ffa726;border-radius:2px;font-size:10px;color:#fff}

/*# sourceMappingURL=space.11.852c55406531316045116468cbcfa6cb0bbba453.css.map*/
</style>