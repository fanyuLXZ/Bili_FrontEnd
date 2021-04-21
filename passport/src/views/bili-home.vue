<template>
<div>
  <img src="//s1.hdslb.com/bfs/static/security/static/img/rl_top.35edfde.png">
 <div data-v-40886203="" class="safe-logo safe"><div data-v-40886203="" class="safe-score">80</div> <div data-v-40886203="" class="safe-score-tips">账号安全评分</div></div>
      <div class="container">
      <ul data-v-40886203="" class="nav-list">
        <li data-v-40886203="">
          <div data-v-40886203="" class="nav-container clearfix">
            <div data-v-40886203="" class="list-title clearfix">
            <div data-v-40886203="" class="list-title-text">
              <span data-v-40886203="" class="safe"></span>
               <p data-v-40886203="">绑定邮箱</p></div></div>
                <div data-v-40886203="" class="list-description">
                  <p data-v-40886203="" class="">已绑定邮箱<!----></p></div> 
                  <div data-v-40886203="" class="list-link"><p data-v-40886203="">
                    <router-link data-v-40886203="" :to="{name:'bili-homes',params:{identify:'setemail'}}" >绑定邮箱</router-link></p></div></div>
                    
          </li>
            <li data-v-40886203="">
              <div data-v-40886203="" class="nav-container clearfix">
                <div data-v-40886203="" class="list-title clearfix">
                  <div data-v-40886203="" class="list-title-text">
                    <span data-v-40886203="" class="safe"></span>
                     <p data-v-40886203="">设置密码</p></div></div>
                      <div data-v-40886203="" class="list-description">
                        <p data-v-40886203="" class="">已设置<!----></p></div> 
                        <div data-v-40886203="" class="list-link">
                          <p data-v-40886203=""><router-link :to="{name:'bili-homes',params:{identify:'setpwd'}}">修改密码</router-link></p>
                          </div></div></li>
            <li data-v-40886203="">
              <div data-v-40886203="" class="nav-container clearfix">
                <div data-v-40886203="" class="list-title clearfix">
                  <div data-v-40886203="" class="list-title-text">
                    <span data-v-40886203="" class="safe"></span> 
                    <p data-v-40886203="">绑定手机</p></div></div> 
                    <div data-v-40886203="" class="list-description">
                      <p data-v-40886203="" class="">
           {{data.account_info.hide_tel}}
            <!----></p></div> <div data-v-40886203="" class="list-link"><p data-v-40886203=""><router-link :to="{name:'bili-btn',params:{pan:'phone',verify:'setphones'}}">更换手机</router-link></p></div></div></li>

            </ul>
       
</div>
</div>
</template>
<script>
import '@/assets/bili-btn.css'
import axios from 'axios'
export default{
  name:'bili-home',
   data() {
     return {
       data:{
       account_info:{
      hide_tel:"155*****020",
       hide_mail:"208****@qq.com",
       bind_tel:false,
       bind_mail:false,
        
       }
      },
        taes:{}
     }
   
   },
   created(){
     axios.post("http://bilibili.org/member/vip/info").then((res)=>{
   console.log(res)
})
   }
   
}
</script>

