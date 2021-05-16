<template>
  <div class="paging-box" v-if="page.count>10">

    <span class="result">共{{ page_count }}页</span>

    <span :class="page.num===1?'disabled':'prev'" @click="tab(page.num-1)">上一页</span>

    <a class="tcd-number" v-if="page.num>1" @click="tab(1)">1</a>

    <span class="dian" v-if="page.num-1>2">...</span>

    <span class="tcd-number" v-if="page.num-3>1&&page.num===page_count" @click="tab(page.num-3)">{{ page.num-3 }}</span>
    <span class="tcd-number" v-if="page.num-2>1" @click="tab(page.num-2)">{{ page.num-2 }}</span>
    <span class="tcd-number" v-if="page.num-1>1" @click="tab(page.num-1)">{{ page.num-1 }}</span>
    <span class="current">{{ page.num }}</span>
    <span class="tcd-number" v-if="page.num+1<page_count" @click="tab(page.num+1)">{{ page.num+1 }}</span>
    <span class="tcd-number" v-if="page.num+2<page_count" @click="tab(page.num+2)">{{ page.num+2 }}</span>
    <span class="tcd-number" v-if="page.num+3<page_count&&page.num===1" @click="tab(page.num+3)">{{ page.num+3 }}</span>

    <span class="dian" v-if="page_count-page.num>2">...</span>

    <a href="javascript:;" class="tcd-number" v-if="page.num!==page_count" @click="tab(page_count)">{{ page_count }}</a>

    <a :class="page.num===page_count?'disabled':'next'" @click="tab(page.num+1)" >下一页</a>
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