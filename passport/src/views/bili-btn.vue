<template>
<div id="bili-ibtn">
  <div class="top-banner">
    <img src="//s1.hdslb.com/bfs/static/security/static/img/rl_top.35edfde.png">
    </div>
  <div class="container">
  <div>
  <bilibranch :names="names"></bilibranch>
         <div>
           <div data-v-37ef1957="" class="container">
                 <bilibratwo :namess="namess" :namesss="namesss" :colorid="colorid"></bilibratwo>


                 <bilibraphone :phone="phone" v-show="this.pan=='phone'&&colorid==1" @sendMsg="getMsg" @getnuminput="getMsg"></bilibraphone>
                 <biliemail v-show="this.pan=='email'&&colorid==1"  @sendMsg="getMsg" @biliemailinput="s"></biliemail>
                 
                 <bilipwd v-if="verifys=='setpwd'&&colorid==2" @phcoid="getMsg" @passd="getpassd"></bilipwd>
                <biliemailtwo v-if="verifys=='setemail'&&colorid==2" @emailid="getMsg" @fromemail="getfromemail"></biliemailtwo>
                <biliphonetwo v-if="verifys=='setphones'&&colorid==2" @phoneid="getMsg" @placeholder="getplaceholder"></biliphonetwo>
                  <!-- <bilipwd v-show="this.pan=='eamil'"></bilipwd> -->
                <!-- <biliphone v-show="!np" v-model="iocnid" v-if="!iocnid" @phcoid= "getpoclid"></biliphone> -->
                  <biliiocn  v-if="colorid==3"></biliiocn>
           </div>
         </div>
  </div>
  </div>
</div>
</template>

<script>

import '@/assets/bili-btn.css'

import bilibranch from '../views/bili-btn-branch.vue'
import bilibratwo from '../views/bili-btn-bratwo.vue'
import bilibraphone from './bili-btn-braphone.vue'
import biliemail from '../views/bili-email.vue'
import bilipwd from '../views/bili-pwd.vue'
import biliemailtwo from '../views/bili-emailtwo.vue'
import biliphonetwo from '../views/bili-phonetwo.vue'
import biliiocn from '../views/bili-btn-iocn.vue'
export default{
  name:'bili-btn',
 
data(){
  return{

    home:{
        phone:'155****112',
        email:'sdad',
        //邮箱和手机号的初验证
           numinput:'',
         biliemailinput:'',
         phonetwo:{
             placeholder: '',
             verification: '',
         },
         emailtwo:{
             fromemail:'',
             yanzm:'',
         },
         pwd:{
            passd:'',
            newpassd:'',
         }

    },
  phone:'155****112',
names:'设置密码',
namess:'设置密码',
namesss:'改密成功',

colorid:1,
pan: '12',
verifys:'1'
  }
},
beforeUpdate() {
  if(this.verifys=='setpwd'){
  this.names='设置密码';
  this.namess='设置密码';
  this.namesss='改密成功';
}else
if(this.verifys=='setemail'){
  this.names='设置邮箱';
  this.namess='绑定邮箱'
  this.namesss='绑定成功';
}else
if(this.verifys=='setphones'){
  this.names='设置手机';
  this.namess='绑定手机';
  this.namesss='绑定成功';
}else{
  this.names='默认';
  this.namess='默认';
  this.namesss='默认';
}
},
mounted () {
  this.pan = this.$route.params.pan;
this.verifys=this.$route.params.verify;

},

methods:{
  getMsg(data){
this.colorid = data;
  },
  getnuminput(data){
this.numinput=data;
  },
  getbiliemailinput(data){
    this.biliemailinput=data;
  },
  getfromemail(a,b){
  
    this.emailtwo.fromemail=a;
       this.emailtwo.yanzm=b;
        
  },
  getplaceholder(a,b){
    this.phonetwo.placeholder=a;
     this.phonetwo.verification=b;
  },
  getpassd(a,b){
    this.pwd.passd=a;
      this.pwd.newpassd=b;
  }
},
 components:{
bilibranch,
bilibratwo,
bilibraphone,
biliemail,
bilipwd,
biliemailtwo,
biliphonetwo,
biliiocn
  },
}
</script>
<style >

</style>

