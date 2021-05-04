<template>
    <div data-v-1c9150a9="" data-no-clip="" class="space-right-bottom ps ps--active-y">
      <!--space-right-bottom ps ps--active-y ps--scrolling-y -->
         <div data-v-1c9150a9="" class="router-view" style=""><!---->
             <div data-v-2cde8a84="" data-v-1c9150a9="" class="love">
                <div data-v-2cde8a84="">
                 <div>
                    <div data-v-fb77dc7a="" data-v-27cf29e0="" data-v-2cde8a84="" class="card love-card">
                          <div data-v-27cf29e0="" data-v-fb77dc7a="" class="nothing" v-show="this.total.length<0">
                             <img data-v-27cf29e0="" data-v-fb77dc7a="" src="//s2.hdslb.com/bfs/static/blive/blfe-message-web/static/img/nodata.4d721f9d.png" class="nothing-img">
                          </div> 
              <vue-custom-scrollbar class="scroll-area "  :settings="settings" @ps-scroll-y="scrollHanle">
                      <div data-v-bdf166be="" data-v-2cde8a84=""   class="love-item" data-v-fb77dc7a="" v-for="(item,index) in total " :key="index" >
                          <div data-v-657577a0="" data-v-bdf166be="" class="basic-list-item">
                            <!--第一个或者第二个头像-->
                                  <div data-v-657577a0="" class="left-box count-2" v-if="item.users.length>=2">
                                    <a data-v-657577a0=""  :href="item.users[0].native_uri==''?item.users[0].native_uri:'#'" target="_blank" :title="item.users[0].nickname" class="avatar" :style="{'background-image': 'url('+item.users[0].avatar+')',}"></a>
                                    <a data-v-657577a0="" :href="item.users[1].native_uri==''?item.users[1].native_uri:'#'" target="_blank" :title="item.users[1].nickname" class="avatar" :style="{'background-image': 'url('+item.users[1].avatar+')',}"></a>
                                  </div>
                                  <div data-v-657577a0="" class="left-box count-1" v-if="item.users.length==1">
                                    <a data-v-657577a0="" :href="item.users[0].native_uri==''?item.users[0].native_uri:'#'" target="_blank" :title="item.users[0].nickname" class="avatar" :style="{'background-image': 'url('+item.users[0].avatar+')',}"></a></div>
                             <!--第一个或者第二个姓名-->
                                <div data-v-657577a0="" class="center-box">
                                        <div data-v-657577a0="" class="line-1" >
                                              <span data-v-657577a0="" class="name-field" >
                                                  <a data-v-657577a0="" :href="item.users[0].native_uri==''?item.users[0].native_uri:'#'" target="_blank" title="">{{item.users[0].nickname}}</a>
                                               
                                                  <span data-v-657577a0=""  v-if="item.users.length>=2">、</span>
                                                  <a data-v-657577a0=""  :href="item.users[1].native_uri==''?item.users[1].native_uri:'#'" target="_blank" title="" v-if="item.users.length>=2">{{item.users[1].nickname}}</a><!---->
                                               
                                              </span>
                                              <span data-v-657577a0="" class="desc-field like-item"  @click="userclick()"> 等总计{{item.counts}}人赞了我的{{item.item.type=='video'?'视频':''}}{{item.item.type=='dynamic'?'动态':''}}{{item.item.type=='reply'?'评论':''}}</span>
                                         </div>
               <div data-v-657577a0="" class="line-2"></div>
               <div data-v-657577a0="" class="line-3">
                 <span data-v-657577a0="" class="time-filed"><span data-v-0bc25b4d="" data-v-657577a0="" class="time time-span">{{item.item.ctime}}</span></span>
               </div>
                                </div>

<div data-v-657577a0="" class="right-box" :href="item.item.uri">
  <div data-v-bdf166be="" data-v-657577a0="" class="right-section">
<div data-v-bdf166be="" data-v-657577a0="" title="" class="text-box" v-if="item.item.type=='reply'||item.item.type=='dynamic'">{{item.item.title}}</div>
<div v-if="item.item.type=='video'" data-v-bdf166be="" data-v-657577a0="" :title="item.item.desc" class="image-box" :style="{'background-image': 'url('+item.item.image+')',}">
<img data-v-bdf166be="" data-v-657577a0="" :src="item.item.image" alt="hidden"></div>
</div>
 </div>

        </div>
      </div>
        </vue-custom-scrollbar>                                                     
          </div></div><!----></div></div></div>
  </div>

</template>
<script>

import '@/assets/index.css'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
export default ({


props:{
  total:{
    type:Array,
    defaul:()=>[]
    },
},
  data() {
    return {
      delflag:true,
      styleflag:true,
      settings: {
        suppressScrollY: false,
        suppressScrollX: true,
        wheelPropagation: false
      }
    }
  },
methods: {
 scrollHanle(evt) {
      console.log(evt)
    },
  userclick(){
    console.log(1);
  }
},

components:{
 vueCustomScrollbar
},

})
</script>

<style >
 .dis{
  display: none;
}
.scroll-area {
  margin: 10px;
  position: relative;
  margin: auto;
  width: 100%;
  height: 600px;

}

</style>

