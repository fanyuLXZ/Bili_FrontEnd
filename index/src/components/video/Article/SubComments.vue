<!--  作者：欧阳苏蓉 子评论组件-->
<template>
  <div>
    <div class="reply-box" >
      {{item.replies}}
      <secondFloor :SubCommentsList="item.replies"></secondFloor>
      <div class="view-more" v-if="item.count>3&&!isPage">共
        <b>{{ item.count }}</b>条回复,
        <a class="btn-more" :data-pid="item.mid" @click="isPage = true">点击查看</a>
      </div>
    </div>
    <!--  分页  -->
    <pagination :page="item.page?item.page:{}" v-if="isPage" @tab-page="$emit('tab-page',$event)"></pagination>
  </div>
</template>

<script>
import secondFloor from "./SecondFloor"
import pagination from "./Pagination"
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

  watch:{
    isPage(){
      this.$emit("showC")
    }
  }
}
</script>

<style>

</style>