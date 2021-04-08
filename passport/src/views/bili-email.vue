<template>
   <div data-v-4e072701="" data-v-37ef1957="">
                      <div data-v-21ab2178="" data-v-4e072701="" class="container">
                        <div data-v-21ab2178="" class="form-group">
                          <div data-v-21ab2178="" class="el-input is-disabled el-input-group el-input-group--prepend">
                            <div class="el-input-group__prepend">绑定邮箱</div>
                            <input type="text" disabled="disabled" autocomplete="off" placeholder="请输入内容" :value="email"  class="el-input__inner">
                            <!----><!----><!----></div>
                         <div data-v-1d9d22da="" class="form-message">
                           <p data-v-1d9d22da="" class="form-desc">
                             
                             <!-- <router-link data-v-1d9d22da="" :to="{name:'bili-homes',params:{names:''}}" class="router-link-active" style="">更换验证方式</router-link>
                            -->
                            <br/>
                              </p></div>
                             </div> 
                             <div data-v-21ab2178="" class="form-group">
                               <div data-v-21ab2178="" class="clearfix">
                                 <div data-v-21ab2178="" class="el-input verify-code float-left">
                                <input type="text" autocomplete="off" placeholder="请输入内容" class="el-input__inner" v-model="biliemailinput"><!----><!----><!---->
                                   </div> 
                                   <button data-v-21ab2178="" type="button" class="el-button verify-btn float-left el-button--default" @click="verification()">
                                     <!----><!----><span>获取验证码</span>
                                     </button>
                                     </div> 
                                     <div data-v-21ab2178="" class="form-message">{{tisi}}</div>
                                     </div> 


                                     <div data-v-21ab2178="" class="form-group" style="display: none;">
                                       <div data-v-21ab2178="" class="clearfix">
                                         <div data-v-21ab2178="" class="photo-code float-left el-input"><!---->
                                         <input type="text" autocomplete="off" placeholder="请输入内容" class="el-input__inner">
                                         <!----><!----><!----></div>
                                          <img data-v-21ab2178="" src="//passport.bilibili.com/web/captcha/img?key=0.35188569170507034" alt="" class="float-left verify-photo"> 
                                          <button data-v-21ab2178="" type="button" class="el-button verify-btn float-left el-button--primary"><!----><!----><span>验证</span>
                                          </button></div> 
                                          <div data-v-21ab2178="" class="form-message"></div>
                                          </div> 


                                          <div data-v-21ab2178="" class="form-group">
                                            <button data-v-21ab2178="" type="button" class="el-button btn-full el-button--primary" @click="clicks();sendMsg()">
                                              <!----><!----><span>下一步</span></button></div></div></div>

</template>
<script>
import '@/assets/bili-btn.css'
export default{
  name: 'bili-email',
  data() {
    return {
      
      email:'sdad',
       tisi:'',
         msg:2,
         biliemailinput:''
    }
  },
  methods: {
    clicks(){
      
          if(this.biliemailinput==null||this.biliemailinput==undefined||this.biliemailinput==""){
            this.tisi= "验证码不能为空";
          }else{
              this.$emit("sendMsg",this.msg);
             this.tisi= "输入";
          }
    },
    verification(){
      this.tisi="验证码已发送"
    }
  },
}
</script>
