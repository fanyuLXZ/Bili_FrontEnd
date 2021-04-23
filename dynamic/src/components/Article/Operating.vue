<template>
  <div id="delete" >
    <div class="button-area c-pointer" @click="show">
      <div class="more-button bp-icon-font icon-more-1" ></div>
    </div>

    <div class="more-panel fs-14 ls-0" v-if="showBox">
      <p class="child-button c-pointer" @click="DeleteBtn()">删除</p>
    </div>

<!--    <div class="more-panel fs-14 ls-0" v-if="showBox">-->
<!--      <p class="child-button c-pointer">取消关注</p>-->
<!--      <p class="child-button c-pointer">举报</p>-->
<!--    </div>-->

    <div class="panel-area" style="display: none;"></div>
    <!--  确认删除弹框  -->
    <delete-btn @hidden="hiddenShow" v-if="deleteBtn" :deleteSu="false" v-on:deleteSu="showDeleteSu"></delete-btn>
    <!--  删除成功  -->
    <delete-su v-if="deleteSu"></delete-su>
  </div>
</template>

<script>
import deleteBtn from "@/components/Article/Delete"
import deleteSu from "@/components/DeleteSuccess"
export default {
  name: "Operating",

  components:{
    deleteBtn,
    deleteSu
  },

  data() {
    return {
      showBox: false,  //v-show标识隐藏显示
      deleteBtn:false,
      deleteSu:false
    }
  },

  methods:{
    //操作时显示删除按钮
    show() {
      // 点击的时候显示模态框
      this.showBox =! this.showBox
    },

    //删除弹出框显示（组件引用的弹出框）
    DeleteBtn(){
      this.deleteBtn = true
    },
    //删除弹出框隐藏（传给组件一个点击事件）
    hiddenShow(){
      let that = this;
      that.deleteBtn = false
    },

    //删除成功
    showDeleteSu(data){
      this.deleteSu=data
    },

    // 在这里在定义个方法用来监听页面的click事件
    hideBox() {
      document.addEventListener("click", (e) => {
        // 如果当前点击的这个对象是这个模态框的话
        if((e.target).closest(".delete")) {
          //  那么这个模态框还是显示的
          this.showBox = true
        } else if(!(e.target).closest(".c-pointer")) {
          // 如果当前点击的这个对象是这个show按钮以外的对象，那么这个模态框就隐藏
          this.showBox = false
        }
      })
    }
  },

  mounted() {

    // 页面加载的时候调用监听
    this.hideBox()

    this.timer = setInterval(() => {
      this.showDeleteSu()
    }, 5000);

  }
}
</script>
<style>
a {
  color: white;
  text-decoration: none;
}
</style>