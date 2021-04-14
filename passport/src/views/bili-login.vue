<template>
  <div data-v-2c844fd9="">
    <div data-v-2c844fd9="" class="top-banner">
  <img src="//s1.hdslb.com/bfs/static/passport/static/img/rl_top.35edfde.png">
  </div>
   <div data-v-2c844fd9="" class="title-line"><span class="tit" style="font-size: 38px;">登录</span></div>
    <div data-v-2c844fd9="" class="login-box clearfix"><div data-v-2c844fd9="" class="login-left">
     
      <div data-v-2c844fd9="" class="qrcode-login">
     <div  style="width: 480px;height: 155px;"> <!----> <!----><!----></div>
      </div>
      
      </div> <div data-v-2c844fd9="" class="line"></div>
       <div data-v-2c844fd9="" class="login-right">
         <div data-v-2c844fd9="" class="form-login">
         <div id="geetest-wrap" class="input-box">
           <div>

             <div class="type-tab">
          <span :class="{active:!this.login.status}" @click="statusclock">密码登录</span> 
         <span :class="{active:!this.login.note}" @click="noteclock">短信登录</span>
         </div>
<!--密码登录-->

         <div :class="{yx: this.login.status}">
           <div class="item username status-box">
           <input type="text" value="" placeholder="你的手机号/邮箱" id="login-username" maxlength="50" autocomplete="off" class="" v-model="login.userename">
            <span :class="{status:true,error:sjtishi.length>1}"></span>
        <div class="text clearfix" ><p class="tips" >{{sjtishi}}</p></div>
             <!----></div>

           <div class="item password status-box"><input type="password" placeholder="密码" id="login-passwd" class="" v-model="login.userpwd"> 
         <span :class="{status:true,error:tishi.length>1}"></span>
           <div class="text clearfix"><p class="tips">{{tishi}}</p></div></div>

<!----> <div class="item gc clearfix"><!----></div></div> 
           
           
           
           <div :class="{yx: this.login.note}">
             <div class="form-group status-box">
               <div class="input-with-select input-width el-input el-input-group el-input-group--prepend">
                 <div class="el-input-group__prepend">
                   <div class="el-select">

                   <!----><div class="el-input el-input--suffix "><!---->
                   <!-- el-input el-input--suffix is-focus  el-input el-input--suffix-->
                   <input type="text" readonly="readonly" autocomplete="off" placeholder="中国大陆" name="country_code" class="el-input__inner" ><span class="el-input__suffix"><span class="el-input__suffix-inner">
                     <i class="el-select__caret el-input__icon el-icon-arrow-up "></i>
                     <!-- el-select__caret el-input__icon el-icon-arrow-up is-reverse   el-select__caret el-input__icon el-icon-arrow-up-->
                     <!----><!----><!----><!----><!----></span>
                     <!----></span><!----><!----></div>
                    </div></div>
                                 <input type="text" autocomplete="off" name="tel" placeholder="填写常用手机号" maxlength="16" class="el-input__inner" v-model="login.userphone"><!----><!----><!----><!----></div> 
                                 <span class="status"></span></div> 
                                 <div class="text clearfix">
                                   <p class="tips">
                                     {{phonetishi}}
                                     </p>
                                     </div> 
                                 <div class="form-group status-box">
                                   <div class="code-input input-width el-input"><!---->
                                   <input type="text" autocomplete="off" placeholder="请输入短信验证码" maxlength="8" class="el-input__inner" v-model="login.mge">
                                   <!----><!----><!----><!----></div> 
                                   <button type="button" class="el-button captcha-buttom el-button--primary" @click="magclick()"><!----><!----><span>获取验证码</span></button> 
                                   <span class="status"></span></div>
                                    <div class="text clearfix">
                                      <p class="tips">{{mgetishi}}</p></div></div> 
                                   
                                  
               <div class="btn-box"><a class="btn btn-login" @click="btnclick()">登录</a> 
               <router-link to="/bili-register" class="btn btn-reg">注册</router-link>
               
               </div> 
               <!----></div>
               </div> <!----></div></div></div>
                <p data-v-2c844fd9="">登录即代表你同意<a data-v-2c844fd9="" target="_blank" href="https://www.bilibili.com/protocal/licence.html">用户协议</a>和<a data-v-2c844fd9="" target="_blank" href="https://www.bilibili.com/blackboard/privacy-pc.html">隐私政策</a></p></div>
</template>
<script>
import '@/assets/bili-btn.css'
import '@/assets/bili-login.css'
export default{
  
  name:'bili-login',
  data() {
    return {
      login:{
        userename:'',
        userphone:'',
        status:false,
        note:true,
      },
      loginpho:{
       userpwd:'',
        mge:'',
      },
        sjtishi:'',
        tishi:'',
        phonetishi:'',
        mgetishi:''
    }
  },
    methods: {
      statusclock(){
        
       this.login.status=false;
       this.login.note=true;
       this.login.userename=""
       this.login.userpwd=""
       this.sjtishi=""
       this.tishi=""
       console.log(this.login.status+""+this.login.note)
      },
      noteclock(){
        this.login.userphone=""
        this.login.mge=""
        this.phonetishi=""
        this.mgetishi=""
        this.login.status=true;
        this.login.note=false;
      console.log(this.login.status+""+this.login.note)
      },
       btnclick(){
       if(this.login.userename==""||this.login.userename==null||this.login.userename==undefined&&this.login.note){
           this.sjtishi='请输入注册时用的邮箱或者手机号呀'
           console.log(1+"this.login.note"+this.login.note)      
        }else{  
          this.sjtishi=""
        }    
        if(this.login.userpwd==""||this.login.userpwd==null||this.login.userpwd==undefined&&this.login.note){
               this.tishi='喵，你没输入密码么？' 
               console.log(2)   
        }else{
             this.tishi=""
           }
        
        if(this.login.userphone==""||this.login.userphone==null||this.login.userphone==undefined&&this.login.status){
               this.phonetishi='手机号不能为空哦'
               console.log(3+"this.login.status"+this.login.status)  
        }else{
          this.phonetishi=""
        }
       if(this.login.mge==""||this.login.mge==null||this.login.mge==undefined&&this.login.status){
               this.mgetishi='短信验证码不能为空'     
        }else{
             this.mgetishi=""
        }
       
        
       },
       magclick(){
      if(this.login.userphone==""||this.login.userphone==null||this.login.userphone==undefined&&this.login.status){
               this.phonetishi='手机号不能为空哦'
                
        }else{
          this.phonetishi=""
        }
       }
       
    }
    
}
</script>
<style >
 .yx{
 display: none;
}
</style>
