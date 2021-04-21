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
                      <a data-v-7d37e619="" href="#/love" class="" title="收到的赞" aria-current="page"  @click="messloveclick">收到的赞<!----></a>
                      </li>
                          
                  <li data-v-7d37e619="" :class="['item',this.active==2?'active':'']">
                          <a data-v-7d37e619="" href="#/whisper" class="" title="回复我的" @click="messloveclicks">回复我的<!----></a>
                          </li>
                        <li data-v-7d37e619="" :class="['item',this.active==3?'active':'']">
                          <a data-v-7d37e619="" href="#/whisper" class="" title="我的消息" @click="messloveclickss">我的消息<!----></a>
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
                                    
                                        <love :tae="tae" @getmessage="getmess" v-if="this.plid<=0&&active==1"></love> 
                                        <loveid v-if="this.plid!=0&&active==1" :taes="this.tae[plid-1]"></loveid> 
                                      <reply v-if="active==2" :replys="replys" @giveclick="giveclick"></reply>
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
    tae:[
      { 
      comment:'神评论',
      userperple:[
            {name:'千羽亦溪',times:'2021年4月11日 17:40',imageiocn:''},
             {name:'千羽亦溪2',times:'2021年4月21日 17:40',imageiocn:''},
             {name:'千羽亦溪3',times:'2021年2月21日 17:40',imageiocn:''},
      ]
      },
     ],

    whistle:[
      {
        id:1,
        imageiocn:'',
        meiocn:'',
        name:'一个乌龟将',
        mess:[
          {
           times:'2021年4月11日 17:40',
           dtal:'凹凸大赛发来警报！！亲爱的天使，《凹凸世界》手游安卓版不删档感恩首发上线！戳',
           dialogue:'112132'
          },
          {
          times:'2021年4月11日 17:40',
           dtal:'凹凸大赛发来警报！！亲爱的天使，《凹凸世界》手游安卓版不删档感恩首发上线！戳',
           dialogue:''
          },
          {
          times:'2021年4月11日 17:40',
           dtal:'凹凸大赛发来警报！！亲爱的天使，《凹凸世界》手游安卓版不删档感恩首发上线！戳',
           dialogue:''
          }
        ]

      },
     {
        id:1,
        imageiocn:'',
        meiocn:'',
        name:'一个乌龟da将',
        mess:[
         {
           times:'2021年4月11日 17:40',
           dtal:'凹凸大赛发来警报！！亲爱的天使，《凹凸世界》手游安卓版不删档感恩首发上线！戳',
           dialogue:'112132'
          },
          {
          times:'2021年4月11日 17:40',
           dtal:'凹凸大赛发来警报！！亲爱的天使，《凹凸世界》手游安卓版不删档感恩首发上线！戳',
           dialogue:'112132'
          }
        ]

      },
        {
        id:1,
        imageiocn:'',
        meiocn:'',
        name:'一个乌ad龟将',
        mess:[
         {
           times:'2021年4月11日 17:40',
           dtal:'凹凸大赛发来警报！！亲爱的天使，《凹凸世界》手游安卓版不删档感恩首发上线！戳',
           dialogue:'112132'
          },
          {
          times:'2021年4月11日 17:40',
           dtal:'凹凸大赛发来警报！！亲爱的天使，《凹凸世界》手游安卓版不删档感恩首发上线！戳',
           dialogue:''
          }
        ]

      },
    ],
  replys:[
    {
      id:'1',
      comment:'我很喜欢艾伦的一句话：呐 莱拉 妈莱拉 妈妈莱拉 妈妈莱拉 妈妈莱拉 妈妈妈为什么会被吃',
      dzan:true,
     perple:{name:'千羽亦溪',times:'2021年4月11日 17:40',imageiocn:'',leng:'你头像和id有点东西[热词系列_知识增加]'},

    },
     {
      id:'2',
      dzan:false,
      comment:'我很喜欢艾伦的一句话：呐 莱拉 妈莱拉 妈妈莱拉 妈妈莱拉 妈妈莱拉 妈妈妈为什么会被吃',
     perple:{name:'千羽亦溪',times:'2021年4月11日 17:40',imageiocn:'',leng:'你头像和id有点东西[热词系列_知识增加]'},

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

    messloveclick(){
   this.plid=0;
   this.active=1;
   
 },
   messloveclicks(){
   this.active=2;
   
 },
 messloveclickss(){
   this.active=3;
   
 },
 giveclick(a,b){
  this.gives.givet=a;
   console.log(a,b);
  console.log(this.replys[0].id);
  
}
 },

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
