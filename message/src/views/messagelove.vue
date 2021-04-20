<template>
    <div data-v-1c9150a9="" data-no-clip="" class="space-right-bottom ps ps--active-y">
      <!--space-right-bottom ps ps--active-y ps--scrolling-y -->
                                      <div data-v-1c9150a9="" class="router-view" style=""><!---->

                                      <div data-v-2cde8a84="" data-v-1c9150a9="" class="love">
                                        <div data-v-2cde8a84="">
                                          <div>
                                            <div data-v-fb77dc7a="" data-v-27cf29e0="" data-v-2cde8a84="" class="card love-card">

                                               <div data-v-27cf29e0="" data-v-fb77dc7a="" class="nothing" v-show="this.tt==undefined">
                                                <img data-v-27cf29e0="" data-v-fb77dc7a="" src="//s2.hdslb.com/bfs/static/blive/blfe-message-web/static/img/nodata.4d721f9d.png" class="nothing-img">
                                              </div> 
                            <vue-custom-scrollbar class="scroll-area "  :settings="settings" @ps-scroll-y="scrollHanle">
    
           
                          <div data-v-bdf166be="" data-v-2cde8a84=""   class="love-item" data-v-fb77dc7a="" v-for="(item,index) in tae " :key="index" >
                            
                                              <div data-v-657577a0="" data-v-bdf166be="" class="basic-list-item">
<div data-v-657577a0="" class="left-box count-2">
  <!-- <a data-v-657577a0="" href="//space.bilibili.com/35803982" target="_blank" title="耀世小武" class="avatar" style="background-image: url(&quot;//i2.hdslb.com/bfs/face/b0e0db604c4aee7de4427bf37969ce2c0b97bfee.jpg@46w_46h_1c.webp&quot;);"></a>
  <a data-v-657577a0="" href="//space.bilibili.com/177797949" target="_blank" title="小琳家的最毒" class="avatar" style="background-image: url(&quot;//i0.hdslb.com/bfs/face/43437014fe244e19636dbf8f219628bdfc95e1ad.jpg@46w_46h_1c.webp&quot;);"></a>
  --> </div>
                                       <div data-v-657577a0="" class="center-box">
                                        <div data-v-657577a0="" class="line-1" >
                                                      <span data-v-657577a0="" class="name-field" >
                                                        <a data-v-657577a0="" href="" target="_blank" title="">{{item.userperple[0].name}}</a>
                                                        <span data-v-657577a0="">、</span>
                                                        <a data-v-657577a0="" href="" target="_blank" title="">{{item.userperple[1].name}}</a><!---->
                                                      </span>
                                                      <span data-v-657577a0="" class="desc-field like-item" @click="setMag(index)">等总计{{item.userperple.length}}人赞了我的评论</span>
                                                    </div>

               <div data-v-657577a0="" class="line-2"></div>

               <div data-v-657577a0="" class="line-3">
                 <span data-v-657577a0="" class="time-filed">
                   <span data-v-0bc25b4d="" data-v-657577a0="" class="time time-span">{{item.userperple[item.userperple.length-1].times}}</span>
                   </span>
                   <div data-v-657577a0="" class="action-field">
                     <button data-v-bdf166be="" data-v-657577a0="" class="action-button" @click="delclick">删除该通知 </button>
                </div></div>
      
      </div>

<div data-v-657577a0="" class="right-box"><div data-v-bdf166be="" data-v-657577a0="" class="right-section"><!----><!----><div data-v-bdf166be="" data-v-657577a0="" title="" class="text-box">{{item.comment}}
        </div></div></div>
        </div>
        <div data-v-0e0f8639="" data-v-bdf166be="">
          <div data-v-23da1dea="" data-v-0e0f8639="" :class="{'im-popup':true,'confirm-popup':true,dis:delflag}" >
            <div data-v-3c863400="" data-v-23da1dea="" :class="['bp-popup-panel', 'p-relative', 'a-move-in-top','a-forwards','im-popup-shell', delflag?'dis':'']" style="width: 500px" >
              <div data-v-3c863400="" class="title-ctnr p-relative"><h2 data-v-3c863400="" class="popup-title">删除</h2></div>
              <div data-v-3c863400="" class="popup-content-ctnr">

                <div data-v-23da1dea="" class="content">
                  <div data-v-0e0f8639="" class="content-text">该条通知删除后,当有新点赞时会重新出现在列表，是否继续？</div></div>

                  <div data-v-3c863400="" class="popup-btn-ctnr t-center">
                    <button data-v-65bda702="" data-v-3c863400="" class="bl-button panel-btn bl-button--primary bl-button--size" @click="updateclick(index)">
                      <span data-v-65bda702="" class="txt">确定</span></button>
                      
                      <button data-v-65bda702="" data-v-3c863400="" :class="['bl-button','panel-btn', 'bl-button--size',styleflag?'bl-button--ghost':'bl-button--primary']" @blur="bulrclick" @click="delclick">
                        <span data-v-65bda702="" class="txt">取消</span></button>
                        </div></div></div><!----></div>              </div> </div>

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
  tae:{
    type:Array,
    defaul:()=>[]
    },
},
  data() {
    return {
      delflag:true,
      styleflag:true,
      tt:this.tae,
      settings: {
        suppressScrollY: false,
        suppressScrollX: true,
        wheelPropagation: false
      }
    }
  },
methods: {
  delclick(){
    this.delflag=!this.delflag
    

  },
  bulrclick(){
    this.styleflag=!this.styleflag
  },
  //删除信息
  updateclick(index){
      this.delflag=true;
      this.tae.splice(index,1)
  },
    scrollHanle(evt) {
      console.log(evt)
    },
    setMag(id){
      this.$emit('getmessage',id+1)
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
  
  position: relative;
  margin: auto;
  width: 100%;
  height: 600px;

}

</style>

