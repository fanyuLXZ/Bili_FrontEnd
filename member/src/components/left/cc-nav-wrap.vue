<template>
  <div id="cc-nav_wrap" class="cc-nav-wrp">
    <div class="cc-nav">
      <div data-simplebar="init">
        <div class="simplebar-wrapper" style="margin: 0px;">
          <div class="simplebar-height-auto-observer-wrapper">
            <div class="simplebar-height-auto-observer"></div>
          </div>
          <div class="simplebar-mask">
            <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
              <div class="simplebar-content-wrapper" style="height: auto; overflow: hidden;">
                <div class="simplebar-content" style="padding: 0px;">
                  <router-link :to="'/platform/upload/video/frame'" tag="div" class="nav-upload-btn newApp">
                    <a id="nav_upload_btn"  @click="contribution">
                      <i class="bcc-iconfont bcc-icon-ic_contribute"></i>
                      投稿
                    </a>
                  </router-link>
                  <ul class="nav-wrp">
                    <div>
                      <div class="bccNavSliderMenu-wrap slider-bar">
                        <router-link :to="item.src" tag="div" class="bcc-nav-slider-sub-menu__wrap bar-item" v-for="(item,index) in nav" :key="index">
                          <div class="bcc-nav-slider-sub-menu " :class="active===index?'is-active':''" @click="click(index)">
                            <span class="router_wrap " :class="active===index?'active':''">
                              <i :class="'menu-icon bcc-iconfont bcc-icon-ic_'+item.ico+'_'"></i>
                              <span class="menu-title">
                                <span>{{ item.title }}</span>
                              </span>
                            </span>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="simplebar-placeholder" style="width: auto; height: 558px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name:"cc-nav-wrap",
    data(){
      return{
        active:0,
        nav:[
          {src:"/platform/home",title:"首页",ico:"home"},
          {src:"/platform/upload-manager/article",title:"稿件管理",ico:"Content"},
          {src:"/platform/data-up/index",title:"数据中心",ico:"data"},
          {src:"/platform/fans/fansview",title:"粉丝管理",ico:"fans"},
          {src:"/platform/comment/article",title:"评论管理",ico:"interactive"}
        ]
      }
    },
    methods:{
      click(index){
        this.active = index
      },
      contribution(){
        this.active = -1
        console.log(this.active)
      }
    },

  }
</script>
