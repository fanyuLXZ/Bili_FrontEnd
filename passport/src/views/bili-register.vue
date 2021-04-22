<template>

<div data-v-4ec3110e="" >

<div data-v-4ec3110e="" class="top-banner">
  <img src="//s1.hdslb.com/bfs/static/passport/static/img/rl_top.35edfde.png"></div>
<div data-v-4ec3110e="" class="title-line"><span class="tit" style="font-size: 38px;">注册</span></div>
<div data-v-4ec3110e="" class="register-container">
  <form data-v-4ec3110e="" id="registerForm" method="post" onsubmit="return false;" class="report-wrap-module">
    
    <div data-v-4ec3110e="" class="form-group">
      <div data-v-4ec3110e="" class="el-input">
        <!----><input type="text" autocomplete="off" name="uname" placeholder="昵称" class="el-input__inner" v-model="register.name" @blur="xuanti"><!----><!----><!----><!----></div>
        <p data-v-4ec3110e="" class="error-message">{{tisi}}</p></div>
    
<div data-v-4ec3110e="" class="register-hidden-gruop">
  <div data-v-4ec3110e="" class="safe_window" style="display: block;">
    <p data-v-4ec3110e="">安全系数</p>

     <div data-v-4ec3110e="" class="a_pw">
       <div :class="['safe_line',this.indexs>0?colors[1].safee:colors[0].safee]"></div>
     <div :class="['safe_line',this.indexs>1?colors[2].safee:colors[0].safee]"></div>
     <div :class="['safe_line',this.indexs>2?colors[3].safee:colors[0].safee]"></div>
     <div class="safe_line e7e7e7e"></div>
     <div class="safe_line e7e7e7e"></div>
     <span :style="{color:colors[indexs].color}">{{colors[indexs].name}}</span>
     </div>
<!--
  <div data-v-4ec3110e="" class="a_pw">
    <div class="safe_line bc0001"></div>
    <div class="safe_line ff9537"></div>
    <div class="safe_line ffd800"></div>
    <div class="safe_line e7e7e7e"></div>
    <div class="safe_line e7e7e7e"></div>
    <span style="color:#ffd800">中</span>
    </div>
-->
     </div></div>


    <div data-v-4ec3110e="" class="form-group">
      <div data-v-4ec3110e="" class="el-input"><!---->
      <input type="password" autocomplete="off" name="userpwd" placeholder="密码（6-16个字符组成，区分大小写）" class="el-input__inner" v-model="register.pwd" @blur="xuantis">
      <!----><!----><!----><!----></div> 
      <p data-v-4ec3110e="" class="error-message">{{tisis}}</p></div>
   
    <div data-v-4ec3110e="" class="register-hidden-gruop"></div>

    <div data-v-4ec3110e="" class="form-group">
      <div data-v-4ec3110e="" class="input-with-select el-input el-input-group el-input-group--prepend">
        <div class="el-input-group__prepend">
          <div data-v-4ec3110e="" class="el-select"><!---->
          <div class="el-input el-input--suffix"><!-- is-focus-->
          <input type="text" readonly="readonly" autocomplete="off" placeholder="中国大陆" name="country_code" class="el-input__inner">
          <!----><span class="el-input__suffix">
            <span class="el-input__suffix-inner">
              <i class="el-select__caret el-input__icon el-icon-arrow-up is-reverse">
                <!--el-select__caret el-input__icon el-icon-arrow-up is-reverse-->
                </i><!----><!----><!----><!----><!----></span><!----></span><!----><!----></div>  
</div></div>
       <input type="text" autocomplete="off" name="tel" placeholder="填写常用手机号" class="el-input__inner" v-model="register.phone">
       <!----><!----><!----><!----></div> <!----> <!----> <p data-v-4ec3110e="" class="error-message">{{tishis}}</p></div>
        
        <div data-v-4ec3110e="" class="register-hidden-gruop"></div>

       <div data-v-4ec3110e="" class="form-group yzm yzm_buttom_a back-fff">
         <div data-v-4ec3110e="" class="code-input el-input">
           <!----><input type="text" autocomplete="off" placeholder="请输入短信验证码" name="code" class="el-input__inner" v-model="register.mag">
           
           
           <!----><!----><!----><!----></div> 
           <div data-v-4ec3110e="" id="captchCheck" class="check" style="display: none;"></div>
            <button data-v-4ec3110e="" type="button" class="el-button yzm-buttom el-button--primary" @click="gainclick">
              <!----><!----><span>点击获取</span></button>
              
               <p data-v-4ec3110e="" class="error-message">{{phonetisi}}</p></div>

              <label data-v-4ec3110e="" class="register-agree">
                <label data-v-5641f300="" data-v-4ec3110e="" :class="['check-box','checkbox-bwxr',this.check?'active':'']" @click="checkclick">
                  <!--check-box checkbox-bwxr active-->
                  <input data-v-5641f300="" name="agree" type="checkbox" @click="checkclick">
                  
                  </label>
          我已同意<a data-v-4ec3110e="" target="_blank" href="#">《哔哩哔哩弹幕网用户使用协议》</a>和<a data-v-4ec3110e="" target="_blank" href="#">《哔哩哔哩隐私政策》</a></label>
   
 <div data-v-4ec3110e="" class="form-group">
   <button data-v-4ec3110e="" type="button" :class="['el-button', 'btn-full', 'el-button--primary',!this.check?'is-disabled':'']" :disabled="disabled" @click="submitclick">
     <!--is-disabled--><!----><span>注册</span></button></div>
   
   <div data-v-4ec3110e="" id="register_pc_direct_login" class="register-hidden-gruop text-right">
     <a data-v-4ec3110e="" href="/bili-login">已有账号，直接登录&gt;</a></div>
    </form> <!----> <!----> <!----></div>
</div>
</template>
<script>
import '@/assets/bili-phone.css'
import '@/assets/bili-btn.css'
export default{
      name:'register',
      data() {
        return {
          formser:'中国大陆',
          noclick:false,
          check:false,
          disabled:true,
        colors:[
           {safee:"e7e7e7e",
            color:"#e7e7e7e" ,
              name:''
          },
          {safee:"bc0001",
            color:"#bc0001" ,
            name:'弱'
          },
        
          {safee:"ff9537",
            color:"#ff9537" ,
            name:'中'
          },
          {safee:"ffd800",
            color:"#ffd800" ,
            name:'中'
          },
        ],
            
        
         tisi:'',
         tisis:'',
         tishis:'',
         phonetisi:'',
         indexs:0,
          register:{
          name:'',
          pwd:'',
          phone:'',
          mag:''
          }

        }
      },
      methods: {
         xuanti(){
             if(this.register.name==null||this.register.name==""||this.register.name==null){
                   this.tisi="请告诉我你的昵称吧"
              }else{
              this.tisi=""
          }
            
         },
         xuantis(){
           if(this.register.pwd==null||this.register.pwd==""||this.register.pwd==null||this.register.pwd.length<6){
                   this.tisis="密码不能小于6个字符"
                    this.indexs=1
              }else if(this.register.pwd.length>16){
             this.tisis="密码不能大于16个字符"
              }else{
              this.tisis=""
               this.indexs=2
          }
           var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
          if(reg.test(this.register.pwd)){
            this.indexs=3
          }
          console.log(this.indexs)
         },
         gainclick(){
            if(this.register.phone==null||this.register.phone==""||this.register.phone==null){
                   this.tishis="请输入手机号"
              }else{
              this.tishis=""
          }
         },
         checkclick(){
          this.check=!this.check;
          this.disabled=!this.check;
         },
         submitclick(){
             if(this.register.mag==null||this.register.mag==""||this.register.mag==null){
                   this.phonetisi="请输入验证码"
              }else{
              this.phonetisi=""
          }
          this.xuanti();
          this.xuantis();
           this.gainclick();
         }
         
        },
        beforeUpdate() {
          
        },
}
</script>
<style scoped>
.no{
  display: none;
}
.form-desc[data-v-4ec3110e], .form-group[data-v-4ec3110e] {
    width: 420px;
    margin: 0 auto;
    font-size: 12px;
    position: relative;
}
.register-hidden-gruop[data-v-4ec3110e] {
    width: 420px;
    height: 40px;
    margin: 0 auto;
}
.el-select .el-input .el-select__caret {
    color: #c0c4cc;
    font-size: 14px;
    transition: transform .3s;
    transform: rotate(
180deg
);
    cursor: pointer;
}
[class*=" el-icon-"], [class^=el-icon-] {
    font-family: element-icons!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
