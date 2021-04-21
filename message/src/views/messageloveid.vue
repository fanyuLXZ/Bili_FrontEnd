<template>
  <div data-v-1c9150a9="" data-no-clip="" class="space-right-bottom ps ps--active-y">
    <div data-v-1c9150a9="" class="router-view" style="">
      <!----><div data-v-14a23a55="" data-v-1c9150a9="" class="love-detail">
        <div data-v-14a23a55="">
          <div>
            <div data-v-fb77dc7a="" data-v-14a23a55="" class="card detail">
              <span data-v-e5050176="" data-v-14a23a55="" class="text content active" data-v-fb77dc7a="">
                <!----><span data-v-e5050176="">评论：{{taes.comment}}</span>
                </span><!----></div>
            <vue-custom-scrollbar class="scroll-area "  :settings="settings" @ps-scroll-y="scrollHanle">
                <div data-v-fb77dc7a="" data-v-14a23a55="" class="card like-list" style="" v-for="(items,index) in taes.userperple " :key="items.name">
                  <div data-v-14a23a55="" data-v-fb77dc7a="" class="liked-user">
                    <div data-v-657577a0="" data-v-5a558a68="" data-v-14a23a55="" class="basic-list-item" data-v-fb77dc7a="">
                      <div data-v-657577a0="" class="left-box count-1">
                        <a data-v-657577a0="" href="//space.bilibili.com/439679586" target="_blank" title="" class="avatar" style="background-image:  url(&quot;https://i0.hdslb.com/bfs/face/090f863403e37162465a6085f9dbc46519211698.jpg@42w_42h_1c.webp&quot;);" >
                        </a></div>

                        <div data-v-657577a0="" class="center-box">
    <div data-v-657577a0="" class="line-1">
              <span data-v-657577a0="" class="name-field">
                  <a data-v-657577a0="" href="//space.bilibili.com/439679586" target="_blank" title="">{{items.name}}</a><!----></span>
            <span data-v-657577a0="" class="desc-field">赞了我</span></div>
      
    <div data-v-657577a0="" class="line-2"></div>

    <div data-v-657577a0="" class="line-3">
      <span data-v-657577a0="" class="time-filed">
        <span data-v-0bc25b4d="" data-v-657577a0="" class="time time-span">2020年10月21日 20:17</span></span>
        <div data-v-657577a0="" class="action-field"></div></div>
        
        </div>

        <div data-v-657577a0="" class="right-box">
          <button data-v-5a558a68="" data-v-657577a0="" :class="['follow-btn',btnstyle&&cuerys==index?'inactive':'active']" @click="btnclick(index)">{{btnstyle&&cuerys==index?'已关注':'关注'}}</button>
          <!--inactive active-->
          </div>
          
          </div></div></div>
            </vue-custom-scrollbar>
          </div><!----></div></div></div>
</div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
export default {
  data() {
  return {
    btn:'关注',
    btnstyle:false,
    cuerys:-1,
     settings: {
        suppressScrollY: false,
        suppressScrollX: true,
        wheelPropagation: false
      }
  }
},
   props:{
  taes:{
    type:Object,
    defaul:()=>[]
    },   
},
methods: {
  btnclick(obj){  
    this.cuerys=obj;
    this.btnstyle=!this.btnstyle;
    if(this.btnstyle&&this.cuerys==obj){
      this.btn='已关注'
    }else{
      this.btn='关注'
    }
  },
  scrollHanle(evt) {
      console.log(evt)
    } 
},
components:{
  vueCustomScrollbar
}

}
</script>

<style >
.scroll-area {
  
  position: relative;
  margin: auto;
  width: 100%;
  height: 600px;

}
</style>