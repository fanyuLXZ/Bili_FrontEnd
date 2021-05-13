<template>
  <div data-v-06834de7="" class="container"><div data-v-06834de7="" class="form-group">
    <div data-v-06834de7="" class="el-input el-input-group el-input-group--prepend" >
      <div class="el-input-group__prepend">新的密码</div>
      <input type="password" autocomplete="off" placeholder="请输入内容" class="el-input__inner" v-model="passd">
      <!----><!----><!----></div> <div data-v-06834de7="" class="form-message"></div></div>
       <div data-v-06834de7="" class="form-group">
         <div data-v-06834de7="" class="el-input el-input-group el-input-group--prepend"  >
           <div class="el-input-group__prepend">确认密码</div>
           <input type="password" autocomplete="off" placeholder="请输入内容" class="el-input__inner" v-model="newpassd">
           <!----><!----><!----></div>
           <div data-v-21ab2178="" class="form-message">{{tisi}}</div>


           </div>
            <div data-v-06834de7="" class="form-group"><button data-v-06834de7="" type="button" class="el-button el-button--primary" style="width: 100%; height: 40px;" @click="clicks();phcoid()" ><!----><!----><span>下一步</span></button></div></div>
</template>
<script>
import '@/assets/bili-btn.css'
export default{
   name:'bili-pwd',
   
   data() {
     return {
       phcoid:3,
        passd:'',
        newpassd:'',
        tisi:''
     }
   },
    methods: {
   clicks(){ 
     if(this.passd==""||this.passd==null||this.passd==undefined){
              this.tisi="新密码不能为空"
     }else if(this.newpassd==""||this.newpassd==null||this.newpassd==undefined){
        this.tisi="确认密码不能为空"
     }else if(this.passd!=this.newpassd){
        this.tisi="密码不一致"
     }else{
         this.$emit("phcoid",this.phcoid);
           this.$emit("passd",[this.passd,this.newpassd]);

     }
                  
     }
  }
}
</script>
