<template>
<div data-v-1c9150a9="" data-no-clip="no-clip" class="space-right-bottom ps">
<div data-v-1c9150a9="" class="router-view" style="">
<div data-v-247edaf8="" data-v-1c9150a9="" class="d">
<div data-v-12ea5675="" data-v-247edaf8="" class="bili-im">

<whisperleft :session_list="session_list" :datauser="datauser" @sindex="sindex"></whisperleft>
<whisperright :session_list="session_list" :datauser="datauser" :messages="messages" :sindext="sindext"></whisperright>

     
</div>
</div>
</div>
</div>
</template>

<script>
import '@/assets/index.css'

import whisperleft from './messagewhisperleft'
import whisperright from './messagewhisperight'

export default {
  data() {
    return {
    session_list:[
      {
        talker_id:1213,//对话id 值只能是最后发送数据的发送者id
        ack_seqno:1,//此对话id的长度
        last_msg:{
          sender_uid:1213,//最后一条数据的发送者id
          receiver_id:1235,//最后一条数据的接受这者
          content:'asadssssssssssssssssssssssas' // 传最后一条数据
        }
      },
       {
        talker_id:1235,
        ack_seqno:1,
        last_msg:{
          sender_uid:1213,
          receiver_id:1235,
          content:'asaasaas'
        }
      },
       {
        talker_id:1234121,//对话id 值只能是最后发送数据的发送者id
        ack_seqno:1,//此对话id的长度
        last_msg:{
          sender_uid:1213,//最后一条数据的发送者id
          receiver_id:1235,//最后一条数据的接受这者
          content:'asas' // 传最后一条数据
        }
      },
        {
        talker_id:12134,//对话id 值只能是最后发送数据的发送者id
        ack_seqno:1,//此对话id的长度
        last_msg:{
          sender_uid:1213,//最后一条数据的发送者id
          receiver_id:1235,//最后一条数据的接受这者
          content:'asas' // 传最后一条数据
        }
      },
       {
        talker_id:1223134,//对话id 值只能是最后发送数据的发送者id
        ack_seqno:1,//此对话id的长度
        last_msg:{
          sender_uid:1213,//最后一条数据的发送者id
          receiver_id:1235,//最后一条数据的接受这者
          content:'asas' // 传最后一条数据
        }
      }
    ],
    datauser:[
       {
       mid:1235,
       uname:'他十大达2',
       face:'http://i2.hdslb.com/bfs/face/6de37a72ea5aeab569c8892be527c70df570a5bf.jpg',
     
     },
       {
       mid:1223134,
       uname:'他十大达2',
       face:'http://i2.hdslb.com/bfs/face/6de37a72ea5aeab569c8892be527c70df570a5bf.jpg',
     
     }, 
     {
       mid:1213,
       uname:'他十大',
       face:'https://i0.hdslb.com/bfs/face/e3ce33bb63cb0c900237e1659ed693aad3880084.jpg@42w_42h_1c.webp'
     },
      {
       mid:1234121,
       uname:'他十大3',
       face:'https://i0.hdslb.com/bfs/face/6c662803d8315615d1c1c114139f8e6a5ba35327.jpg@42w_42h_1c.webp'
     },
      {
       mid:12134,
       uname:'他十4大',
       face:'http://i2.hdslb.com/bfs/face/6de37a72ea5aeab569c8892be527c70df570a5bf.jpg'
     }
    
    ],
    messages:[
      {
        sender_uid: 1213,
        receiver_id: 123,
        content:'1212',
        timestamp:'2020-21-23'
      },
       {
        sender_uid: 123,
        receiver_id: 123,
        content:'1212',
        timestamp:'2020-21-23'
      },
       {
        sender_uid: 123,
        receiver_id: 123,
        content:'1212',
        timestamp:'2020-21-23'
      }
    ],
   sindext:0
    } 
  },
 

methods: {
   sindex(a){
  this.sindext=a
   }
},
components:{
  
  whisperleft,
  whisperright,
  
},

}
</script>

<style>


</style>