<template>
  <div data-v-6969394c="" class="container">
    <div data-v-1c9150a9="" data-v-6969394c="" id="link-message-container" class="">
      <div data-v-1c9150a9="" class="container">
        <div data-v-1c9150a9="" class="space-left">
          <div data-v-7d37e619="" data-v-1c9150a9="" class="side-bar">
            <div data-v-7d37e619="" class="title">
              <div data-v-7d37e619="" class="icon"></div>
              <div data-v-7d37e619="">消息中心</div>
              </div>

              <ul data-v-7d37e619="" class="list">           
                  
                    <li data-v-7d37e619="" class="item active">
                      <a data-v-7d37e619="" href="#/love" class="" title="收到的赞" aria-current="page">收到的赞<!----></a>
                      </li>
                      <li data-v-7d37e619="" class="item">
                        <a data-v-7d37e619="" href="#/system" class="" title="系统通知">系统通知<!----></a>
                        </li>
                        <li data-v-7d37e619="" class="item">
                          <a data-v-7d37e619="" href="#/whisper" class="" title="我的消息">我的消息<!----></a>
                          </li>
                            </ul>

                            <div data-v-7d37e619="" class="divided-line"></div>

                         <!----></div></div>

                              <div data-v-1c9150a9="" class="space-right">

                                <div data-v-1c9150a9="" class="space-right-top">
                                  <div data-v-1c9150a9="" class="title">
                                    <div data-v-1c9150a9=""><!----><!---->
                                    <span data-v-1c9150a9="">收到的赞</span>
                                    </div><!----></div></div>
                                        <love :tae="tae"></love> 
                                  
                               </div> 
                                                            
                                                          </div></div></div>
</template>
<script>
import '@/assets/index.css'
import love from '../views/messagelove.vue'

export default ({
  data() {
    return {
    tae:[
      {
      name:'千羽亦溪',
      comment:'神评论',
      times:'2021年4月11日 17:40'
      },
       {
      name:'太宰志的先生',
      comment:'神评论',
      times:'2021年4月11日 17:40'
      },
        {
      name:'太宰志的sd先生',
      comment:'神评论',
      times:'2021年4月11日 17:40'
      }
      ]
    }
  },
 components:{
  love
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
