<template>
  <div class="header-operate">
    <div class="bcc-select" style="width: 112px;">
      <div class="bcc-select-input-wrap" @click="btn('partition')" >
        <input type="text" readonly="readonly" placeholder="全部分区" class="bcc-select-input-inner">
        <i class="bcc-iconfont bcc-icon-ic_drop-down"></i>
      </div>
      <bcc-select-list-wrap ref="selectListOne" />
    </div>
    <div class="bcc-select" style="width: 154px;">
      <div class="bcc-select-input-wrap" @click="btn('sort')" >
        <input type="text" readonly="readonly" placeholder="请选择内容" class="bcc-select-input-inner">
        <i class="bcc-iconfont bcc-icon-ic_drop-down"></i>
      </div>
      <bcc-select-list-wrap ref="selectListTwo" />
    </div>
  </div>
</template>

<script>

import BccSelectListWrap from "@/components/right/article/bcc-select-list-wrap";
export default {
  name: "bcc-select",
  components: {BccSelectListWrap},
  data(){
    return{
      showContent:"on",
      isShow:false
    }
  },
  methods:{
    btn(data){
      if (data==='partition'){
        if (this.isShow){
          this.$refs.selectListOne.sendItem("one",false)
          this.isShow=false
        }else {
          this.$refs.selectListOne.sendItem("one",true)
          this.isShow=true
        }
      }else if(data==='sort'){
        if (this.isShow){
          this.$refs.selectListTwo.sendItem("two",false)
          this.isShow=false
        }else {
          this.$refs.selectListTwo.sendItem("two",true)
          this.isShow=true
        }
      }else {
        this.$refs.selectList.sendItem("on",false)
      }

    }
  }
}
</script>