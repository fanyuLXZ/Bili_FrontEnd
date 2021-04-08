<template>

     <div data-v-4e072701="" data-v-37ef1957="">
                      <div data-v-21ab2178="" data-v-4e072701="" class="container">

                          <div data-v-21ab2178="" class="form-group">
                          <div data-v-21ab2178="" class="el-input is-disabled el-input-group el-input-group--prepend">
                            <div class="el-input-group__prepend">原手机号</div>
                            <input type="text" disabled="disabled" autocomplete="off" placeholder="请输入内容" :value="phone"  class="el-input__inner">
                            <!----><!----><!----></div>
                         <div data-v-1d9d22da="" class="form-message">
                           <p data-v-1d9d22da="" class="form-desc"><br/></p></div>
                         </div> 
                            
                             <div data-v-21ab2178="" class="form-group">
                               <div data-v-21ab2178="" class="clearfix">
                                 <div data-v-21ab2178="" class="el-input verify-code float-left">
                                <input type="text" autocomplete="off" placeholder="请输入内容" class="el-input__inner" v-model="numinput"><!----><!----><!---->
                                   </div> 
                                   <button data-v-21ab2178="" type="button" class="el-button verify-btn float-left el-button--default" @click="verification">
                                     <!----><!----><span>获取验证码</span>
                                     </button>
                                     </div> 
                                     <div data-v-21ab2178="" class="form-message">{{tisi}}</div>
                                     </div> 
 


                                          <div data-v-21ab2178="" class="form-group">
                                            <button data-v-21ab2178="" type="button" class="el-button btn-full el-button--primary" @click="clicks();sendMsg()">
                                              <!----><!----><span>下一步</span></button></div></div></div>
                                             
</template>
<script>


export default{
  name:'bili-btn-braphone',
  props:['phone'],
  data() {
    return {
      numinput:'',
      tisi:'',
      msg:2
    }
  },
  methods: {
    clicks(){
      
          if(this.numinput==null||this.numinput==undefined||this.numinput==""){
            this.tisi= "验证码不能为空";
          }else{
            
             this.tisi= "输入";
              this.$emit("sendMsg",this.msg);
          }
       

    },
  
    verification(){
      this.tisi="验证码已发送"
    }
  },
}
</script>