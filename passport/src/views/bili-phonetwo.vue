<template>
  <div data-v-a7c9d180="" data-v-070d31d0="" class="container">
    <div data-v-a7c9d180="" class="form-group">
      <div data-v-a7c9d180="" class="select-input">
        <div data-v-a7c9d180="" class="el-select select-component" slot="prepend">
          <!----><div class="el-input el-input--suffix"><!---->
          <input type="text" readonly="readonly" autocomplete="off" placeholder="中国大陆" class="el-input__inner">
          <!----><span class="el-input__suffix">
            <span class="el-input__suffix-inner">
              <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
              <!----></span><!---->
              </span><!---->
              </div>
              </div>
               <div data-v-a7c9d180="" class="input-component el-input">
                 <!----><input type="text" autocomplete="off" placeholder="请输入内容" class="el-input__inner" v-model="placeholder">
                 <!----><!----><!----></div></div> 
                 <div data-v-a7c9d180="" class="form-message">
                   </div></div>
                    <div data-v-a7c9d180="" class="form-group">
                      <div data-v-a7c9d180="" class="clearfix">
                        <div data-v-a7c9d180="" class="verify-code float-left el-input">
                          <!----><input type="text" autocomplete="off" placeholder="请输入内容" class="el-input__inner" v-model="verification">
                          <!----><!----><!----></div>
                           <button data-v-a7c9d180="" type="button" class="el-button verify-btn float-left el-button--default" @click="yzmclick">
                             <!----><!----><span>获取验证码</span>
                             </button>
                             </div> 
                                <div data-v-21ab2178="" class="form-message">{{tisi}}</div>
                             </div>
                             
                                         <div data-v-a7c9d180="" class="form-group">
                                            <button data-v-a7c9d180="" type="button" class="el-button btn-full el-button--primary" @click="clicks();phoneid()" ><!-- -->
                                             <!----><!----><span>下一步</span></button></div></div>
</template>
<script>
import '@/assets/bili-btn.css'
export default{
 name:'bili-phone',
 data() {
   return {
     placeholder: '',
     verification: '',
   phcoid:3,
   tisi:''
   }
 },
 methods: {
    clicks(){ 
if(this.placeholder==""||this.placeholder==null||this.placeholder==undefined){
 this.tisi="不能为空"
}else if(this.verification==""||this.verification==null||this.verification==undefined){
  this.tisi="验证码不能为空"
}else{
  this.$emit("phoneid",this.phcoid);
}
                  
     },
      yzmclick(){
      this.tisi="验证码已发送"
    }
   }
 
}

</script>
