<template>
  <div data-v-6969394c="" class="container">
    <div data-v-1c9150a9="" data-v-6969394c="" id="link-message-container" class="">
      <div data-v-1c9150a9="" class="container">
        <div data-v-1c9150a9="" class="space-left">
          <div data-v-7d37e619="" data-v-1c9150a9="" class="side-bar">
            <div data-v-7d37e619="" class="title">
              <div data-v-7d37e619="" class="icon"></div>
              <div data-v-7d37e619="" >消息中心</div>
              </div>

              <ul data-v-7d37e619="" class="list" >           
             
                    <li data-v-7d37e619="" :class="['item',this.active==1?'active':'']">
                      <a data-v-7d37e619="" href="#/love" class="" title="收到的赞" aria-current="page"  @click="messloveclick(1)">收到的赞<!----></a>
                      </li>
                          
                  <li data-v-7d37e619="" :class="['item',this.active==2?'active':'']">
                          <a data-v-7d37e619="" href="#/whisper" class="" title="回复我的" @click="messloveclick(2)">回复我的<!----></a>
                          </li>
                        <li data-v-7d37e619="" :class="['item',this.active==3?'active':'']">
                          <a data-v-7d37e619="" href="#/whisper" class="" title="我的消息" @click="messloveclick(3)">我的消息<!----></a>
                          </li>
                            </ul>

                            <div data-v-7d37e619="" class="divided-line"></div>

                         <!----></div></div>

                              <div data-v-1c9150a9="" class="space-right" >

                                <div data-v-1c9150a9="" class="space-right-top">
                                  <div data-v-1c9150a9="" class="title">
                                    <div data-v-1c9150a9=""><!----><!---->
                                    <span data-v-1c9150a9="" >{{titles[active-1]}}</span>
                                    <span data-v-1c9150a9="" v-if="this.plid!=0">&nbsp;>&nbsp;&nbsp;</span>
                                     <span data-v-1c9150a9="" v-if="this.plid!=0">点赞详情</span>
                                    </div><!----></div>
                                    </div>
                                    
                                        <love :total="total.itmes"  v-if="this.plid<=0&&active==1"></love> 
                                        <loveid v-if="this.plid!=0&&active==1" :taes="this.tae[plid-1]"></loveid> 
                                      <reply v-if="active==2" :Reply="Reply" @giveclick="giveclick"></reply>
                                      <whisper v-if="active==3" :whistle="whistle"></whisper>
                               </div> 
                                                            
                                                          </div></div></div>
</template>
<script>
import '@/assets/index.css'
import love from '../views/messagelove.vue'
import loveid from '../views/messageloveid.vue'
import whisper from '../views/messagewhisper.vue'
import reply from '../views/messagereply.vue'

export default ({
  data() {
    return {
    total:{
     itmes:[
      { 
        id:'10666474526',
        users:[
          {
            mid:'85494529',
            nickname:'DIO枭2',
            avatar:'http://i1.hdslb.com/bfs/face/4a38c63e896283ba99657500e8e860e8ffa3e41e.jpg',
            follow:true, //是否关注
            native_uri:'//space.bilibili.com/35803982',
          },
          {
            mid:'85494529',
            nickname:'DIO枭3',
            avatar:'http://i2.hdslb.com/bfs/face/6de37a72ea5aeab569c8892be527c70df570a5bf.jpg',
            follow:true ,//是否关注
            native_uri:'//space.bilibili.com/35803982',
          }
        ],
        item:{
          item_id:'4420969741',
          type:'reply',//video代表视频，dynamic代表动态 reply代表文字
          title:'qe赵霖是个废物wwwwwwwww',//传文字
          desc:'dsbsa',//视频描述
          image:'https://i0.hdslb.com/bfs/game/ee43a0c2c3e52b8279dd8925ac32d83f7ffe02ac.png@60w_60h_1c.webp',//视频封面图
          uri:'https://www.bilibili.com/video/BV1Hp4y1t7kz',
          ctime:'2020-2-2 12: 21:12',//点赞时间
        },
        counts:224//此评论的总人数
      },
      { 
        id:'10666474526',
        users:[
          {
            mid:'85494529',
            nickname:'DIO枭6',
            avatar:'http://i2.hdslb.com/bfs/face/55ed7639eca1155dcfaf319c9611726ae80454df.jpg',
            follow:true, //是否关注
            native_uri:'//space.bilibili.com/35803982',//暂时可不用
          }
        ],
        item:{
          item_id:'4420969741',
          type:'video',//video代表视频，dynamic代表动态 reply代表文字
          title:'视频',//传文字
          desc:'sada',//视频描述
          image:'https://i0.hdslb.com/bfs/game/ee43a0c2c3e52b8279dd8925ac32d83f7ffe02ac.png@60w_60h_1c.webp',//视频封面图
          uri:'https://www.bilibili.com/video/BV1Hp4y1t7kz',//视频评论地址
          ctime:'2020-2-2 12: 21:12',//点赞时间
        },
        counts:243//此评论的总人数
      }
     ]
    },
    Reply:[
      {
        id:2209836311,
        user:{
          mid:402923390,//评论人id
          nickname:'冰丿繁羽 ',//名字
          avatar:'http://i2.hdslb.com/bfs/face/55ed7639eca1155dcfaf319c9611726ae80454df.jpg',//头像
          follow:true //是否关注
        },
        item:{
          source_content:'其实这不是问“我妈妈为什么会被吃掉”，而是问“为什么非得这样才能拯救莱德岛',//评论了我的评论
          type:'reply',//video代表视频，dynamic代表动态 reply代表文字
          title:'被回复的评论或视频',//传文字
          reply_time:'2020-12-13 12:23:45',//评论的时间
          uri:'https://www.bilibili.com/video/BV1Hp4y1t7kz',
          image:'https://i0.hdslb.com/bfs/game/ee43a0c2c3e52b8279dd8925ac32d83f7ffe02ac.png@60w_60h_1c.webp',//视频封面图
          native_uri:'个人中心地址'//可写可不写
        }
      },
      {
           id:22098361311,
        user:{
          mid:402923390,//评论人id
          nickname:'冰12丿繁羽 ',//名字
          avatar:'http://i2.hdslb.com/bfs/face/55ed7639eca1155dcfaf319c9611726ae80454df.jpg',//头像
          follow:true //是否点赞
        },
        item:{
          source_content:'其实这不是问“我妈妈为什么会被吃掉”，而是问“为什么非得这样才能拯救莱德岛',//评论了我的评论
          type:'video',//video代表视频，dynamic代表动态 reply代表文字
          title:'被回复的评论或视频',//传文字
          reply_time:'2020-12-13 12:23:45',//评论的时间
          uri:'https://www.bilibili.com/video/BV1Hp4y1t7kz',
          image:'https://i0.hdslb.com/bfs/game/ee43a0c2c3e52b8279dd8925ac32d83f7ffe02ac.png@60w_60h_1c.webp',//视频封面图
          native_uri:'个人中心地址'//可写可不写
        }
      }
    ],
    session_list:[
      {
        talker_id:1213,//对话id 值只能是最后发送数据的发送者id
        ack_seqno:1,//此对话id的长度
        last_msg:{
          sender_uid:1213,//最后一条数据的发送者id
          receiver_id:1235,//最后一条数据的接受这者
          content:'asas' // 传最后一条数据
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
      }
    ],
    datauser:[
     {
       mid:1213,
       uname:'sda',
       face:'http://i2.hdslb.com/bfs/face/55ed7639eca1155dcfaf319c9611726ae80454df.jpg'
     },
     {
       mid:1235,
       uname:'sda',
       face:'http://i2.hdslb.com/bfs/face/55ed7639eca1155dcfaf319c9611726ae80454df.jpg'
     }
    ],
    messages:[
      {
        sender_uid: 123,
        receiver_id: 123,
        content:'1212',
        timestamp:'2020-21-23'
      }
    ],

  gives:[
   {
     givet:'',
     replysid:''
   }
  ],
    active:1,
     plid:0,
     titles:['收到的赞','系统通知','点赞详情'],
    
    }
  },
 components:{
  love,
  loveid,
  whisper,
  reply
 },
 methods: {
   getmess(a){
      this.plid=a;
    
   },

    messloveclick(index){
   this.plid=0;
   this.active=index;
   
 },
 giveclick(a,b){
  // this.gives.givet=a;
  //  console.log(a,b);
this.gives.givet=a;
this.gives.replysid=b;
  console.log(this.gives.givet,this.gives.replysid);
  
}
 },
 
  created(){
//      axios.post("api/member/vip/info").then((res)=>{
//    console.log(res)
// })
}
})
</script>

   
<style scoped>
.international-header {
    min-width: 999px;
    min-height: 56px;
}
.international-header, .van-popover {
    -webkit-font-smoothing: antialiased;
    font: 14px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
    position: relative;
    z-index: 1000;
    margin: 0;
    padding: 0;
}
</style>
