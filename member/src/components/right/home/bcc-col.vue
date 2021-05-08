<template>
  <div class="bcc-col" :class="type==='six'?'bcc-col-6':'bcc-col-8'" style="padding-left: 8px; padding-right: 8px;">
    <div class="section-item" :class="type==='six'?'actived pointer':'link'">
      <div class="data-name">
        {{ title }}
        <i class="bcc-iconfont bcc-icon-ic_enter"></i>
      </div>
      <div class="text-content"> <span>{{ number }}</span> </div>
      <div class="diff-wrp">
        <span class="improve">昨日</span>
        <span class="diff-text arrow">--</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bcc-col",

  props:{
    title:String,
    number:Number,
    type:String
  }
}
</script>