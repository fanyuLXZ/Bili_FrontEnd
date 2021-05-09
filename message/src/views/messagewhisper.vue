<template>
<div data-v-1c9150a9="" data-no-clip="no-clip" class="space-right-bottom ps">
<div data-v-1c9150a9="" class="router-view" style="">
<div data-v-247edaf8="" data-v-1c9150a9="" class="d">
<div data-v-12ea5675="" data-v-247edaf8="" class="bili-im">

<whisperleft :session_list="session_list" :datauser="datauser" @sindex="sindex" @userid="userid"></whisperleft>
<whisperright :session_list="session_list" :datauser="datauser" :messages="messages" :sindext="sindext"></whisperright>

     
</div>
</div>
</div>
</div>
</template>

<script>
import '@/assets/home.css'

import whisperleft from './messagewhisperleft'
import whisperright from './messagewhisperight'
import axios from 'axios'
import qs from 'qs'
export default {
  data() {
    return {
    session_list:[
      {
        talker_id:1,//对话id 值只能是最后发送数据的发送者id
        ack_seqno:1,//此对话id的长度
        last_msg:{
          sender_uid:1213,//最后一条数据的发送者id
          receiver_id:1235,//最后一条数据的接受这者
          content:'asadssssssssssssssssssssssas' // 传最后一条数据
        }
      },
      {
        talker_id:2,//对话id 值只能是最后发送数据的发送者id
        ack_seqno:1,//此对话id的长度
        last_msg:{
          sender_uid:1213,//最后一条数据的发送者id
          receiver_id:1235,//最后一条数据的接受这者
          content:'asadssssssssssssssssssssssas' // 传最后一条数据
        }
      }
    ],
    datauser:[    
       {
       mid:1,
       uname:'他十大达2',
       face:'http://i2.hdslb.com/bfs/face/6de37a72ea5aeab569c8892be527c70df570a5bf.jpg',
       },
        {
       mid:2,
       uname:'他十大达2',
       face:'http://i2.hdslb.com/bfs/face/6de37a72ea5aeab569c8892be527c70df570a5bf.jpg',
       }
    ],
    messages:[
       {
        sender_uid: 0,
        receiver_id: 0,
        content:'',
        timestamp:'-21-23'
      }
    ],
   sindext:0,
   usermuber:0
    } 
  },
 

methods: {
   sindex(a){
  this.sindext=a
   },
   userid(a){
this.usermuber=a
  axios({
            method:'get',
            url:"api/message/fetch_session_msgs",
            params:{fid:this.usermuber}
          }).then((res)=>{
          this.messages=res.data.data.messages
          })
   }
},
 created(){
     
     axios.get("api/message/get_sessions").then((res)=>{
    //  console.log(res.data.data)
this.session_list=res.data.data.session_list
 let uids = []
      this.session_list.forEach(v => {
        uids.push(v.talker_id)
      });
      axios.get("api/member/user/infos",{
        params: {uids},
        paramsSerializer: params => {return qs.stringify(params, { indices: false })}
      }).then((refs)=>{
      
      this.datauser=refs.data
     // console.log(refs.data)
         })
})
     
   
 },
components:{
  
  whisperleft,
  whisperright,
  
},

}
</script>

<style>


</style>