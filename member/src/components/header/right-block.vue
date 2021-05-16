<template>
  <div class="right-block">
    <!--    头像    -->
    <avatar :head_img="head_img" :is_login="is_login"/>
    <!--    注册时间    -->
<!--    <tips-calendar-wrap />-->
<!--    <div class="line-divid"></div>-->
    <!--    信息    -->
<!--    <message />-->
    <!--    下载    -->
<!--    <el-popover />-->
  </div>
</template>

<script>
import Avatar from "@/components/header/right-block/avatar";
import {getHistoryCursor} from "../../apis";
// import TipsCalendarWrap from "@/components/header/right-block/tips-calendar-wrap";
// import Message from "@/components/header/right-block/message";
// import ElPopover from "@/components/header/right-block/el-popover";
export default {
  name:"right-block",
  components: { Avatar},
  data(){
    return{
      head_img:"//i0.hdslb.org/bfs/face/member/noface.jpg",
      is_login:false
    }
  },
  mounted() {
    getHistoryCursor().then((res)=>{
      if (res?.data?.code===0){
        this.is_login=res.data.data.isLogin
        this.head_img=res.data.data.face?res.data.data.face:this.head_img
      }
    })
  }
}
</script>