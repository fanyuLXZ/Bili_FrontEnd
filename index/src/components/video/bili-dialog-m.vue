<template>
  <div class="bili-dialog-m" v-if="isShow">
    <div class="bili-dialog-bomb">
      <div class="collection-m">
        <div class="title">
          添加到收藏夹<i class="close" @click="$emit('change',false)"></i>
        </div>
        <div class="content">
          <div class="group-list">
            <ul>
              <li v-for="fav in favList" :key="fav.id">
                <label class="">
                  <input v-model="fav.id" type="checkbox" @change="change(this,fav)">
                  <i></i>
                  <span :title="fav.title" class="fav-title">{{ fav.title }}</span>
                  <!---->
                  <span class="count">{{ fav.media_count }}</span>
                </label>
              </li><!---->
            </ul>
            <div class="add-group">
              <div class="add-btn">
                新建收藏夹
              </div><!---->
            </div>
          </div>
        </div>
        <div class="bottom">
          <button disabled="disabled" class="btn submit-move disable">
            确定
          </button>
        </div>
        <iframe frameborder="0" class="layout" __idm_frm__="43"></iframe>
      </div><!----><!----><!----><!----><!----></div>
  </div>
</template>

<script>
import {getNavFavList} from "../../api/fav";
export default {
  name: "bili-dialog-m",
  props:["isShow"],
  model:{
    prop:"isShow",
    event:"change",
  },
  data(){
    return{
      favList:[]
    }
  },
  mounted(){
    getNavFavList().then(res=>{
      if (res?.data?.code===0){
        this.favList=res.data.data[0].mediaListResponse.list
      }
    })
  },
  methods:{
    change(e,fav){
      e.target.checked?fav.media_count+=1:fav.media_count-=1
    }
  }
}
</script>

<style>

</style>