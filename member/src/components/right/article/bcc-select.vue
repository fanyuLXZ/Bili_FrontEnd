<template>
  <div class="bcc-select" :style="'width:'+item.width+'px;'">
    <div class="bcc-select-input-wrap">
      <input type="text" readonly="readonly" :placeholder="item.placeholder" class="bcc-select-input-inner">
      <i class="bcc-iconfont bcc-icon-ic_drop-down"></i>
    </div>
    <bcc-select-list-wrap :check="true" />
  </div>
</template>

<script>
import BccSelectListWrap from "@/components/right/article/bcc-select-list-wrap";
export default {
  name: "bcc-select",

  components: {BccSelectListWrap},

  data(){
    return{
      typeBtn:-1,
    }
  },

  props:{
    item:Object,
    index:Number
  },

}
</script>