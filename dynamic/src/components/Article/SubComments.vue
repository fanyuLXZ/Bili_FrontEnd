<!--  作者：欧阳苏蓉 子评论组件-->
<template>
  <div>
    <div class="reply-box">
      <secondFloor :SubCommentsList="item.SubCommentsList"></secondFloor>
      <div class="view-more" v-if="item.page.count>3&&!isPage">共
        <b>{{ item.page.count }}</b>条回复,
        <a class="btn-more" :data-pid="item.mid" @click="isPage = true">点击查看</a>
      </div>
    </div>
    <!--  分页  -->
    <pagination :page="item.page" v-show="isPage" @tab-page="tab"></pagination>
  </div>
</template>

<script>
import secondFloor from "../Article/SecondFloor"
import pagination from "../Article/Pagination"
export default {
  name: "SubComments",

  components:{
    secondFloor,
    pagination
  },

  data() {
    return {
      isPage: false,  //是否显示分页
    }
  },

  props:{
    item:Object,
    index:Number
  },

  methods: {

    tab(id){
      console.log(id)
    },

  },
}
</script>

<style>

</style>