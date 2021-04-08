<template>
  <div data-v-100e8317="" data-v-37ef1957=""><div data-v-b89c6730="" data-v-100e8317="" class="container">
    <div data-v-b89c6730="" class="form-group"><div data-v-b89c6730="" class="el-input">
      <!----><input type="text" autocomplete="off" placeholder="请输入邮箱地址" class="el-input__inner" v-model="fromemail">
      <!----><!----><!----></div> 
      <div data-v-b89c6730="" class="form-message"></div></div> 
      <div data-v-b89c6730="" class="form-group">
        <div data-v-b89c6730="" class="clearfix">
          <div data-v-b89c6730="" class="verify-code float-left el-input"><!---->
          <input type="text" autocomplete="off" placeholder="请输入验证码" class="el-input__inner" v-model="yanzm"><!----><!----><!---->
          </div>
           <button data-v-b89c6730="" type="button" class="el-button verify-btn float-left el-button--default" @click="verification">
             <!----><!----><span>获取验证码</span></button></div>  
              <div data-v-21ab2178="" class="form-message">{{tisi}}</div>
                                     </div>
   
                     <div data-v-b89c6730="" class="form-group"><button data-v-b89c6730="" type="button" class="el-button btn-full el-button--primary" @click="clicks();emailid()" ><!----><!---->
                     <span>下一步</span></button></div></div></div>
</template>
<script>
export default{
  name: 'biliemailtwo',
  data() {
    return {
       phcoid:3,
       fromemail:'',
       yanzm:'',
       tisi:''
    }
  },
  methods: {
   clicks(){ 
  if(this.fromemail==""||this.fromemail==null||this.fromemail==undefined){
    this.tisi="邮箱地址不能为空";
  }else if(this.yanzm==""||this.yanzm==null||this.yanzm==undefined){
 this.tisi="验证码不能为空";
  }else{
this.$emit("emailid",this.phcoid);
  }
     },
     verification(){
      this.tisi="验证码已发送"
    }
  }
}
</script>
