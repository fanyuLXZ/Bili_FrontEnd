<template>
    <div data-v-1c9150a9="" data-no-clip="" class="space-right-bottom ps">
                                      <div data-v-1c9150a9="" class="router-view" style=""><!---->

                                      <div data-v-2cde8a84="" data-v-1c9150a9="" class="love">
                                        <div data-v-2cde8a84="">
                                          <div>
                                            <div data-v-fb77dc7a="" data-v-27cf29e0="" data-v-2cde8a84="" class="card love-card">

                                              <!-- <div data-v-27cf29e0="" data-v-fb77dc7a="" class="nothing">
                                                <img data-v-27cf29e0="" data-v-fb77dc7a="" src="//s2.hdslb.com/bfs/static/blive/blfe-message-web/static/img/nodata.4d721f9d.png" class="nothing-img">
                                              </div> -->
                                           
                          <div data-v-bdf166be="" data-v-2cde8a84="" class="love-item" data-v-fb77dc7a="">
                                              <div data-v-657577a0="" data-v-bdf166be="" class="basic-list-item">

                                                <div data-v-657577a0="" class="left-box count-2">
                                                  <a data-v-657577a0="" href="//space.bilibili.com/169576964" target="_blank" title="千羽亦溪" class="avatar" style="background-image: url(&quot;//i0.hdslb.com/bfs/face/5049933045270635f40ec6bbc5facc39561f4b00.jpg@46w_46h_1c.webp&quot;);"></a>
                                                  <a data-v-657577a0="" href="//space.bilibili.com/383685968" target="_blank" title="太宰先生的先生" class="avatar" style="background-image: url(&quot;//i1.hdslb.com/bfs/face/c4e2b465eeb552b35c3bc2a08e7fff3f62934e13.jpg@46w_46h_1c.webp&quot;);"></a>
                                                  </div>

                                                  <div data-v-657577a0="" class="center-box">

                                                    <div data-v-657577a0="" class="line-1">
                                                      <span data-v-657577a0="" class="name-field">
                                                        <a data-v-657577a0="" href="" target="_blank" title="">{{tae.name[0]}}</a>
                                                        <span data-v-657577a0="">、</span>
                                                        <a data-v-657577a0="" href="" target="_blank" title="">太宰先生的先生</a><!---->
                                                      </span>
                                                      <span data-v-657577a0="" class="desc-field like-item">等总计 10 人赞了我的评论</span>
                                                    </div>

               <div data-v-657577a0="" class="line-2"></div>
               <div data-v-657577a0="" class="line-3">
                 <span data-v-657577a0="" class="time-filed">
                   <span data-v-0bc25b4d="" data-v-657577a0="" class="time time-span">2021年4月11日 17:40</span>
                   </span>
                   <div data-v-657577a0="" class="action-field">

                     <button data-v-bdf166be="" data-v-657577a0="" class="action-button" @click="delclick">删除该通知 </button>

                    
    
      </div></div></div>
      <div data-v-657577a0="" class="right-box"><div data-v-bdf166be="" data-v-657577a0="" class="right-section"><!----><!----><div data-v-bdf166be="" data-v-657577a0="" title="" class="text-box">插个眼 我也想知道
        </div></div></div>
        </div>

        <div data-v-0e0f8639="" data-v-bdf166be="">
          <div data-v-23da1dea="" data-v-0e0f8639="" :class="{'im-popup':true,'confirm-popup':true,dis:this.delflag}" >
            <div data-v-3c863400="" data-v-23da1dea="" class="bp-popup-panel p-relative a-move-in-top a-forwards im-popup-shell" style="width: 500px" :class="{dis:this.delflag}">
              <div data-v-3c863400="" class="title-ctnr p-relative"><h2 data-v-3c863400="" class="popup-title">删除</h2></div>
              <div data-v-3c863400="" class="popup-content-ctnr">

                <div data-v-23da1dea="" class="content">
                  <div data-v-0e0f8639="" class="content-text">该条通知删除后,当有新点赞时会重新出现在列表，是否继续？</div></div>

                  <div data-v-3c863400="" class="popup-btn-ctnr t-center">
                    <button data-v-65bda702="" data-v-3c863400="" class="bl-button panel-btn bl-button--primary bl-button--size" @click=" updateclick">
                      <span data-v-65bda702="" class="txt">确定</span></button>
                      
                      <button data-v-65bda702="" data-v-3c863400="" :class="['bl-button','panel-btn', 'bl-button--size',this.styleflag?'bl-button--ghost':'bl-button--primary']" @blur="bulrclick" @click="delclick">
                        <span data-v-65bda702="" class="txt">取消</span></button>
                        </div>
                        
                        </div>
                       
                          
                          </div><!----></div>              
                          </div></div>

                                            </div></div><!----></div></div></div>

                                                <div data-v-fb77dc7a="" data-v-17952cf4="" data-v-1c9150a9="" class="card" style="display: none;">
                                                  <div data-v-17952cf4="" data-v-fb77dc7a="" class="loading">
                                                    <div data-v-42e02e95="" data-v-17952cf4="" role="progress" class="link-progress-tv" data-v-fb77dc7a="" style="background-color: rgb(255, 255, 255); animation-duration: 0.2s; color: rgb(51, 51, 51);">
                                                      <div data-v-42e02e95="" class="text"></div></div></div></div>

                                                      <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                                                        <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div>

                                                        <div class="ps__rail-y" style="top: 0px; right: 0px; height: 647px;">
                                                          <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div>
                                                          </div>

</template>
<script>

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
    }
  },
methods: {
  delclick(){
    this.delflag=!this.delflag
    

  },
  bulrclick(){
    this.styleflag=!this.styleflag
  },
  updateclick(){
      this.delflag=true;
  }
},
})
</script>

<style scoped>
 .dis{
  display: none;
}
</style>
