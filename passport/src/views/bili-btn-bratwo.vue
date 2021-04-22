<template>
<div>
    <div data-v-1ab5ef3c="" data-v-37ef1957="" class="contanier">
             <div data-v-1ab5ef3c="">
               <div data-v-5c16aaea="" data-v-1ab5ef3c="" class="steps-box">
                 <div data-v-5c16aaea="" class="clearfix steps-list">
                   <a data-v-5c16aaea="" href="#" :class="color(1)">
                   <span data-v-5c16aaea="" class="float-left steps-icon">1</span> 
                   <div data-v-5c16aaea="" class="float-left steps-title">验证身份</div>
                    <i data-v-5c16aaea="" class="steps-line float-left"></i>
                  </a>
                  <a data-v-5c16aaea="" href="#" :class="color(2)">
                  <span data-v-5c16aaea="" class="float-left steps-icon">2</span>
                   <div data-v-5c16aaea="" class="float-left steps-title">{{namess}}</div>
                    <i data-v-5c16aaea="" class="steps-line float-left"></i>
                  </a>
                  <a data-v-5c16aaea="" href="#" :class="color(3)">
                  <span data-v-5c16aaea="" class="float-left steps-icon">3</span> 
                  <div data-v-5c16aaea="" class="float-left steps-title">{{namesss}}</div>
                   <!----></a>
                   </div>
                   </div>
                   </div>
                   </div>

</div>     
</template>
<script>
import '@/assets/bili-btn.css'

export default{
  name:'bili-btn-bratwo',
 props:['namess','namesss','colorid'],
 data() {
   return {

   }
 },
 methods: {
   color(indexs){
  
    if(this.colorid==indexs){
      return'router-link-exact-active router-link-active clearfix float-left active'
    }
     if(this.colorid>indexs){
      return 'clearfix float-left steps-pass'
    }else{
       return 'clearfix float-left'
    }
     
   }
  
 },
}
</script>