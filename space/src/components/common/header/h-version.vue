<template>
  <div class="be-dropdown h-version">
    <div class="h-v-btn popup-select" @click.stop="show">
      视角：
      <span class="h-version-state">我自己</span>
      <span class="h-role-icon d-arrow d-arrow-dark"></span>
    </div>
    <transition name="zoom">
      <ul class="be-dropdown-menu menu-align-"  style="left: 6px; top: 40px; transform-origin: center top; " v-show="isShow" ref="be-dropdown-menu">
        <li class="be-dropdown-item">新访客</li>
        <li class="be-dropdown-item">我的粉丝</li>
      </ul>
    </transition>
    <!---->
  </div>
</template>

<script>
import {click_bus} from "@/bus";

export default {
  name: "h-version",
  data(){
    return {
      isShow:false
    }
  },
  methods:{
    show(){
      this.isShow=!this.isShow
      click_bus["version_hide"]=()=>{
        if (this.isShow){
          this.hide()
        }
      }
    },
    hide(){
      this.isShow=false
      delete click_bus["version_hide"]
    }
  }
}
</script>

<style scoped>
  .be-dropdown-menu{
    position: absolute;
  }
</style>