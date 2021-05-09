<template>
  <div class="paging-box" v-if="page.count>10">

    <span class="result">共{{ page_count }}页</span>

    <span :class="page.current===1?'disabled':'prev'">上一页</span>

    <a class="tcd-number" v-if="page.current>1" @click="tab(1)">1</a>

    <span class="dian" v-if="page.current-1>2">...</span>

    <span class="tcd-number" v-if="page.current-3>1&&page.current===page_count" @click="tab(page.current-3)">{{ page.current-3 }}</span>
    <span class="tcd-number" v-if="page.current-2>1" @click="tab(page.current-2)">{{ page.current-2 }}</span>
    <span class="tcd-number" v-if="page.current-1>1" @click="tab(page.current-1)">{{ page.current-1 }}</span>
    <span class="current">{{ page.current }}</span>
    <span class="tcd-number" v-if="page.current+1<page_count" @click="tab(page.current+1)">{{ page.current+1 }}</span>
    <span class="tcd-number" v-if="page.current+2<page_count" @click="tab(page.current+2)">{{ page.current+2 }}</span>
    <span class="tcd-number" v-if="page.current+3<page_count&&page.current===1" @click="tab(page.current+3)">{{ page.current+3 }}</span>

    <span class="dian" v-if="page_count-page.current>2">...</span>

    <a href="javascript:;" class="tcd-number" v-if="page.current!==page_count" @click="tab(page_count)">{{ page_count }}</a>

    <a :class="page.current===page_count?'disabled':'next'" >下一页</a>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  computed:{
    page_count(){
      return Math.ceil((this.page.count/10))
    }
  },
  props:{
    page:Object,
  },
  methods:{
    tab(index){
      this.$emit("tab-page",index)
    }
  }
}
</script>

<style>

</style>