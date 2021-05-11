<template>
 
    <div class="nav-container fav-container">
      <div class="favlist-title" @click="tclick"><p>我的创建</p>
      <!--icon icon-arrow-->
      <i :class="['icon','icon-arrow',txtflag?'arrow-transform':'']"></i></div>
      <div :style="{display:txtflag?'block':'none'}">
        <div class="be-scrollbar fav-list-container ps" id="fav-createdList-container">

          <div class="nav-title nav-add">
            <span title="创建收藏夹" class="icon icon-add"></span>
            <span class="text">新建收藏夹</span>
          </div>
          
          <div fid="55317984" class="fav-item cur">
            <span class="iconfont icon-bodan"></span>
            <a href="/77023684/favlist?fid=55317984" class="text router-link-exact-active router-link-active" title="默认收藏夹">默认收藏夹</a>
            <span class="num">23</span>
        <!--编辑信息-->
          </div>

          <ul class="fav-list">
            <li fid="1230392384" class="fav-item" draggable="false">
              <span title="拖动排序" class="icon icon-cursor"></span>
              <span class="iconfont icon-bodan"></span>
              <a href="/77023684/favlist?fid=1230392384&amp;ftype=create" class="text" title="11" draggable="false">11</a>
              <span class="num">0</span>
                <!--删除/编辑信息-->
           </li>
           </ul>
           </div></div></div>
</template>

<script>

export default {
  data() {
    return {
      txtflag:true
    }
  },

methods: {
  tclick(){
this.txtflag=!this.txtflag
  }
},
}
</script>

<style>

</style>