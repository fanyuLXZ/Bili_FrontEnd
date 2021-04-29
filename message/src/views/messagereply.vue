<template>
<div data-v-1c9150a9="" data-no-clip="" class="space-right-bottom ps ps--active-y">
  <div data-v-1c9150a9="" class="router-view" style=""><!---->
  <div data-v-1df9d092="" data-v-1c9150a9="" class="reply">
    <div data-v-1df9d092><div>
<div data-v-fb77dc7a data-v-1df9d092 class="card reply-card "   >
   <vue-custom-scrollbar class="scroll-area "  :settings="settings" @ps-scroll-y="scrollHanle">
  <div data-v-8142435e="" data-v-1df9d092="" class="reply-item" data-v-fb77dc7a="" v-for="(item,index) in Reply " :key="index ">
    <div data-v-657577a0="" data-v-8142435e="" class="basic-list-item">
      <div data-v-657577a0="" class="left-box count-1">
        <!--background-image:  url(&quot;https://i0.hdslb.com/bfs/face/090f863403e37162465a6085f9dbc46519211698.jpg@42w_42h_1c.webp&quot;);-->
        <a data-v-657577a0="" href="#" target="_blank" title="" class="avatar" :style="{'background-image': 'url('+item.user.avatar+')',}" ></a></div>
        <div data-v-657577a0="" class="center-box">
          <div data-v-657577a0="" class="line-1">
            <span data-v-657577a0="" class="name-field">
              <a data-v-657577a0="" href="#" target="_blank" title="">{{item.user.nickname}}</a><!----></span>
              <span data-v-657577a0="" class="desc-field">
        回复了我的{{item.item.type=='reply'?'评论':''}}{{item.item.type=='dynamic'?'动态':''}}{{item.item.type=='video'?'视频':''}}
      </span></div>
      <div data-v-657577a0="" class="line-2">
        <div data-v-8142435e="" data-v-657577a0="" class="real-reply">
          <div data-v-cb5c69a8="" data-v-8142435e="" class="content-list" data-v-657577a0="">
            <span data-v-e5050176="" data-v-cb5c69a8="" class="text string">
              <!----><span data-v-e5050176="">{{item.item.source_content}}</span></span><!----></div></div><!----></div>
              
              <div data-v-657577a0="" class="line-3">
                <span data-v-657577a0="" class="time-filed">
                  <span data-v-0bc25b4d="" data-v-657577a0="" class="time time-span">{{item.item.reply_time}}</span></span>


                  <div data-v-657577a0="" class="action-field">
     <button data-v-8142435e="" data-v-657577a0="" :class="['action-button',item.user.follow?'active':'']"   @click="atvie(index)">
       <svg data-v-8142435e="" viewBox="0 0 40 40" :class="['action-icon','css-9slmkq',item.user.follow?'active':'']" data-v-657577a0="">
      <title>{{item.user.follow?'已赞':'点赞'}}</title>
      <path class="fill" d="m 35.140937,15.170116 h -12.92 l 0.28,-2.92 0.42,-5.1400001 a 1.28,1.28 0 0 0 -1,-1.53 1.12,1.12 0 0 0 -1.25,0.42 l -6.36,8.1700001 -0.83,1.11 h -8.34 a 2,2 0 0 0 -0.83,0.28 2.29,2.29 0 0 0 -1.25,2.08 v 14.88 a 2,2 0 0 0 0.42,1.25 2,2 0 0 0 2.08,1.11 h 23.33 a 2.36,2.36 0 0 0 1.39,-0.41 3.6,3.6 0 0 0 2.08,-2.78 l 4.44,-14.59 2.5,0.56 -2.5,-0.56 a 2.4,2.4 0 0 0 -0.14,-1.39 2.91,2.91 0 0 0 -1.52,-0.54 l 0.28,-2.5 z"></path>
      <path class="border" d="M 21.402578,2.9572256 A 3.91,3.91 0 0 0 18.609609,4.1701163 L 11.810781,12.66035 H 5.5607807 a 8.43,8.43 0 0 0 -2.5,0.689454 4.91,4.91 0 0 0 -2.49999999,4.310546 v 14.859375 a 5.66,5.66 0 0 0 0.68945299,2.5 4.52,4.52 0 0 0 4.310547,2.361329 H 28.859609 a 6.37,6.37 0 0 0 6,-4.861329 l 4.451172,-14.71875 A 4.38,4.38 0 0 0 38.750234,14.330272 4.14,4.14 0 0 0 35.420156,12.66035 H 25.000234 l 0.25,-5.5605462 a 3.91,3.91 0 0 0 -1.25,-3.1894531 3.91,3.91 0 0 0 -2.597656,-0.9531251 z m 0.1875,2.5703126 a 1.12,1.12 0 0 1 0.330078,0.052734 1.28,1.28 0 0 1 1,1.5292969 l -0.419922,5.1406259 -0.279297,2.919921 h 12.919922 a 2.91,2.91 0 0 1 1.519531,0.539062 2.4,2.4 0 0 1 0.140625,1.390626 l -4.441406,14.589843 a 3.6,3.6 0 0 1 -2.080078,2.78125 2.36,2.36 0 0 1 -1.388672,0.410157 H 5.5607807 a 2,2 0 0 1 -2.080078,-1.111329 2,2 0 0 1 -0.419922,-1.25 V 17.640819 a 2.29,2.29 0 0 1 1.25,-2.080078 2,2 0 0 1 0.830078,-0.28125 h 5.8398443 v 19.580078 h 2.5 V 15.279491 l 0.830078,-1.109375 6.359375,-8.1699216 a 1.12,1.12 0 0 1 0.919922,-0.4726562 z"></path>
    </svg>
       {{item.user.follow?'已赞':'点赞'}}
      </button>
     </div>
     </div></div>
     
     <div data-v-657577a0="" class="right-box">
               <div data-v-657577a0="" class="line-1" >
                 <!--跳转item.item.uri去此评论或视频的地方-->
                <div data-v-657577a0="" class="right-box"  >
  <div data-v-bdf166be="" data-v-657577a0="" class="right-section">
<div data-v-bdf166be="" data-v-657577a0="" title="" class="text-box" v-if="item.item.type=='reply'||item.item.type=='dynamic'">{{item.item.title}}</div>
<div v-if="item.item.type=='video'" data-v-bdf166be="" data-v-657577a0="" :title="item.item.desc" class="image-box" :style="{'background-image': 'url('+item.item.image+')',}">
<img data-v-bdf166be="" data-v-657577a0="" :src="item.item.image" alt="hidden"></div>
</div>
 </div>
                </div>

      
      </div>
      
      </div>
      <br/>
      
      <div data-v-1df9d092="" data-v-fb77dc7a="" class="divider"></div>
        <div class="link-toast success fixed "  v-if="toptopsMsg" style="left: 664.075px; top: 214px;">
          <span class="toast-text">点赞成功</span></div>
  
</div>
   </vue-custom-scrollbar>
  
  </div>
 </div></div>   </div></div></div>
</template>

<script>
import '@/assets/index.css'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
export default {
  props:{
  Reply:{
    type:Array,
    defaul:()=>[]
    },   
},
data() {
  return {
    settings: {
        suppressScrollY: false,
        suppressScrollX: true,
        wheelPropagation: false
      },
      activeflag:false,
      toptopsMsg:false,
      give:0,
  }
},
methods: {
   scrollHanle(evt) {
      console.log(evt)
    },
    
    atvie(c){
this.Reply[c].user.follow=!this.Reply[c].user.follow;
 if(this.Reply[c].user.follow){

 
      
      this.toptopsMsg =true
      setTimeout(()=>{
        this.toptopsMsg=false
        },1000);
    }else{
          this.toptopsMsg=false
    }
     this.$emit("giveclick",this.Reply[c].user.follow,this.replys[c].id);
    } 
   
},
updated(){

 
  
},
components:{
  vueCustomScrollbar
},
 
  
}
</script>

<style scoped>



.css-9slmkq .fill {
     fill: none; 
}
.css-9slmkq {
    fill: currentcolor;
    width: 1em;
    height: 1em;
}
.scroll-area {
  
  position: relative;
  margin: auto;
  width: 100%;
  height: 600px;

}
.text-box[data-v-bdf166be] {
  margin-top: 10px;
  padding-top: 10px;
    width: 60px;
    height: 60px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    font-size: 14px;
    line-height: 15px;
    max-height: 4.285714285714286em;
}
</style>