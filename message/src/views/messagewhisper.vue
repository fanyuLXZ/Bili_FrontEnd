<template>
<div data-v-1c9150a9="" data-no-clip="no-clip" class="space-right-bottom ps">

<div data-v-1c9150a9="" class="router-view" style="">
  <!----><div data-v-247edaf8="" data-v-1c9150a9="" class="d">
    <div data-v-12ea5675="" data-v-247edaf8="" class="bili-im">

 <div data-v-12ea5675="" class="left">
   <div data-v-12ea5675="" title="如果您的消息展示异常，请按住 alt 按键，然后单击这里进行修复" class="title">
     <span data-v-12ea5675="">近期消息</span><!----></div>
     
     <div data-v-12ea5675="" class="list-container ps" >
       <!----><div data-v-12ea5675="" class="list" >
         <div data-v-18829612="" data-v-12ea5675="" class="list-item " v-for="(item,index) in whistle " :key="index" @click="indexclick(index)">
           <!--active-->
           <div data-v-18829612="" class="avatar" style="background-image: url(&quot;https://i0.hdslb.com/bfs/face/090f863403e37162465a6085f9dbc46519211698.jpg@42w_42h_1c.webp&quot;);" title=""></div>
           <div data-v-18829612="" class="verify-box">
             <div data-v-18829612="" class="single"></div>
             <!----><!----></div>
             <div data-v-18829612="" class="name-box">
               <div data-v-18829612="" class="name" title="">{{item.name}}</div>
               <div data-v-18829612="" title="" class="last-word">
                 {{item.mess[item.mess.length-1].messagex}}</div>
                 </div>
                 <div data-v-18829612="" class="close">
                   <svg data-v-18829612="" viewBox="0 0 40 40" class="css-1dtzbno">
                     <path d="M22.83,20,38.42,4.41a2,2,0,1,0-2.83-2.83h0L20,17.17,4.41,1.58A2,2,0,0,0,1.58,4.41L17.17,20,1.58,35.59a2,2,0,0,0,2.83,2.83L20,22.83,35.59,38.42a2,2,0,1,0,2.83-2.83Z"></path>
                     </svg>
                     </div>
                     <!----></div> 
                     
                     </div>
                     
</div>

</div>

<div data-v-12ea5675="" class="right"><!---->
<div data-v-1771f1cc="" data-v-12ea5675="" class="dialog">

  <div data-v-1771f1cc="" class="title" >
    <span data-v-1771f1cc="">{{this.whistle[atindex].name}}</span>
    <div data-v-d43989d2="" data-v-1771f1cc="" class="action-menu" style="top: 3px; right: 0px;">
     <a data-v-d43989d2="" class="btn bp-icon-font icon-more-1"></a>
     </div></div>
<div data-v-339477fc="" data-v-1771f1cc="" class="message-list"  >
      <vue-custom-scrollbar class="scroll-area " >
     
       <div data-v-339477fc="" class="message-list-content"  :settings="settings" @ps-scroll-y="scrollHanle" v-for="lengin in whistle[atindex].mess " :key="lengin.id">
    <div data-v-82bd82b8="" data-v-339477fc="" class="msg-time">
      <span data-v-318cad34="" data-v-82bd82b8="" class="time">{{lengin.times}}</span>
      </div><!---->

      <div data-v-50547f2d="" data-v-339477fc="" class="msg-item not-me">
        <a data-v-50547f2d="" href="//space.bilibili.com/84674730" title="" target="_blank" class="avatar" style="background-image: url(&quot;https://i0.hdslb.com/bfs/face/090f863403e37162465a6085f9dbc46519211698.jpg@30w_30h_1c.webp&quot;);"></a><!---->
        <div data-v-50547f2d="" class="message">
          <div data-v-50547f2d="" data-key="6950677255500603324" class="message-content not-img">
            {{lengin.dtal}}
                <a class="emotion-items active " title="tv_doge">
                  <div style="background-image: url(http://i0.hdslb.com/bfs/emote/302d6c88c63ed162c81a49cafe7ed2709e6fb955.gif);height: 20px;width: 20px;animation-duration: 0ms;
                animation-timing-function: steps(0, end);;" class="img-emoji"></div>
                </a>
              </div><!----><!----><!----><!----></div></div>
              
      <div data-v-50547f2d="" data-v-339477fc="" class="msg-item is-me" v-if="lengin.dialogue!=''">
        <a data-v-50547f2d="" href="//space.bilibili.com/77023684" title="出轨的狼" target="_blank" class="avatar" style="background-image: url(&quot;https://i1.hdslb.com/bfs/face/2f1cf940762df67fd2a3ddbfe181b14b0cb86748.jpg@30w_30h_1c.webp&quot;);"></a>
        <div data-v-50547f2d="" class="message">
          <div data-v-50547f2d="" data-key="6952197925667614184" class="message-content is-me not-img">{{lengin.dialogue}}</div>
         </div></div>               
          </div>
             
             <!--v-for="lengind in lengin.dialogue " :key="lengind.id"--> 
           
              
      </vue-custom-scrollbar></div>
             

                <div data-v-7762b962="" data-v-1771f1cc="" class="send-box"><div data-v-7762b962="" class="row">
                 
                  <div data-v-7762b962="" class="emoji-container">
                    <button data-v-7762b962="" title="表情" class="emotion-btn-box"></button>
                    <!----></div></div>
                    <div data-v-b2e4822a="" data-v-7762b962="" placeholder="回复一下吧～" class="input-box">
                      <div data-v-b2e4822a="" id="editor" class="core-style" contenteditable="true" style="height: 60px;">‍
</div><div data-v-b2e4822a="" class="indicator" style="bottom: -30px; right: 100px;">
  <span data-v-b2e4822a="" class="">0</span>/<span data-v-b2e4822a="">500</span></div></div>
  <div data-v-7762b962="" class="row right">
    <button data-v-6cbfef24="" data-v-7762b962="" class="btn-box send-btn" title="enter 发送
shift + enter 换行">发送</button></div></div>

<!----></div>

</div>

</div></div></div>
  
</div>
</template>

<script>
import '@/assets/index.css'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
export default {
  props:{
    whistle:{
       type:Array,
    defaul:()=>[]
    },

  },
  data() {
    return {
      atindex:0,
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
    } ,
    indexclick(obj){
      this.atindex=obj;
    }
},
components:{
  vueCustomScrollbar
}
}
</script>

<style>
.scroll-area {
  
  position: relative;
  margin: auto;
  width: 100%;
  height: 240px;

}
.message-list {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #f4f5f7;
}
</style>