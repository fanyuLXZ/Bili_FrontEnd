<!--  作者：欧阳苏蓉 动态详情--确认删除  -->
<template>
  <div>
    <div class="bp-popup-ctnr">
      <div role="alertdialog" class="bp-popup-ctnr dp-table w-100 h-100 p-fixed p-zero f-family">
        <div class="body-merge w-100 h-100 p-absolute p-zero"></div>
        <div class="dp-table-cell bp-v-middle">
          <div class="bp-popup-panel p-relative a-move-in-top a-forwards" style="width: 500px;">
            <div class="title-ctnr p-relative">
              <h2 class="popup-title">删除动态</h2>
            </div>
            <div class="popup-content-ctnr">
              <div id="popup-29890ec2ecfa42" class="popup-content-ctnr" style="font-size: 13px;">
                确定要删除此条动态吗？
              </div>
              <div class="popup-btn-ctnr t-center">
                <a href="/dynamic">
                  <button class="bl-button panel-btn bl-button--primary bl-button--size" @click="Delete()">
                    <span class="txt"> 删除 </span>
                  </button>
                </a>
                <button class="bl-button panel-btn bl-button--ghost bl-button--size" @click="Hidden()">
                  <span class="txt">我点错了</span>
                </button>
              </div>
            </div>
            <div role="button" title="关闭面板" class="close-btn p-absolute bg-center bg-no-repeat pointer t-center" @click="Hidden()">
              <i class="bp-icon-font icon-close"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "delete",

  data(){
    return{
      DeleteSuccess:false,
    }
  },

  props: {
    deleteSu: Boolean
  },

  methods:{
    //删除弹出框的显示隐藏事件
    Hidden(){
      //通过$emit引用组件传过来的hidden()事件
      this.$emit('hidden')
    },

    //删除事件
    Delete(){
      this.deleteSu=true
      console.log(this.deleteSu)
      this.$emit("deleteSu","true")
      this.Hidden()
    }
  }

}
</script>