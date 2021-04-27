<template>
 <div data-v-12ea5675="" class="right">
       <div data-v-1771f1cc="" data-v-12ea5675="" class="dialog">
                                    <!--item.talker_id==datauser[items-1].mid-->
            <div data-v-9facbe80="" class="title"  >
              <span data-v-9facbe80="" >{{datauser[sindext].uname}}</span>
          
            </div>

            <div data-v-339477fc="" data-v-9facbe80="" class="message-list">
              <div data-v-339477fc="" class="message-list-content"  v-for="(mess,index) in messages " :key="index">
                
                <div data-v-0f4fd40a="" data-v-339477fc="" class="msg-more">
                  <span data-v-0f4fd40a="" class="no-more" style="display: none;">没有更多消息了～</span>
                  </div>

                  <div data-v-82bd82b8="" data-v-339477fc="" class="msg-time">
                    <span data-v-318cad34="" data-v-82bd82b8="" class="time">2020年3月20日 09:16</span>
                    </div><!---->
                    
             <div data-v-50547f2d="" data-v-339477fc="" :class="['msg-item',session_list[sindext].talker_id==mess.sender_uid?'is-me':'not-me']">
               <!--not-me is-me-->
               <!--v-show="session_list[atindex].talker_id==datauser[itemt-1].mid"  -->
               <!--  v-for="itemt in session_list.length " :key="itemt" v-show="session_list[sindext].talker_id==datauser[itemt-1].mid"-->
               <!--需要判断是否是我/头像-->
               <a data-v-50547f2d="" href="//space.bilibili.com/12076317"  target="_blank" class="avatar" :style="'background-image: url(\''+(datauser[sindext].face)+'\');'"></a>
               <!----><div data-v-50547f2d="" class="message">
                 <div data-v-50547f2d="" data-key="6946821327170836365" :class="['message-content',session_list[sindext].talker_id==mess.sender_uid?'is-me':'','not-img']">
                   <!--is-me-->
                   {{mess.content}}
                  </div></div>
              </div>
              
             </div>
             </div>
        <kuang></kuang>
        </div>
      </div> 
</template>

<script>
import kuang from './messagekuang'
export default {
props:{
    session_list:{
       type:Array,
    defaul:()=>[]
    },
    datauser:{
      type:Array,
     defaul:()=>[]
    },
     messages:{
       type:Array,
    defaul:()=>[]
    },
    sindext:{
      type:Number,
     defaul:()=>[]
    }
  },
  components:{
    kuang,
  }
}

</script>

<style>

</style>