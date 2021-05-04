<template>
  <ul class="pages">

    <li class="page-item prev" v-if="page.current!==1">
      <button class="nav-btn iconfont icon-arrowdown2">上一页</button>
    </li>

    <li class="page-item" v-if="page.current>1" @click="tab(1)">
      <button class="pagination-btn num-btn">1</button>
    </li>
    <strong v-if="page.current-1>2">...</strong>

    <li class="page-item" v-if="page.current-3>1&&page.current===page_count" @click="tab(page.current-3)">
      <button class="pagination-btn num-btn">{{ page.current-3 }}</button>
    </li>
    <li class="page-item" v-if="page.current-2>1" @click="tab(page.current-2)">
      <button class="pagination-btn num-btn">{{ page.current-2 }}</button>
    </li>
    <li class="page-item" v-if="page.current-1>1" @click="tab(page.current-1)">
      <button class="pagination-btn num-btn">{{ page.current-1 }}</button>
    </li>
    <li class="page-item active">
      <button class="pagination-btn num-btn">{{ page.current }}</button>
    </li>
    <li class="page-item" v-if="page.current+1<page_count" @click="tab(page.current+1)">
      <button class="pagination-btn num-btn">{{ page.current+1 }}</button>
    </li>
    <li class="page-item" v-if="page.current+2<page_count" @click="tab(page.current+2)">
      <button class="pagination-btn num-btn">{{ page.current+2 }}</button>
    </li>
    <li class="page-item" v-if="page.current+3<page_count&&page.current===1" @click="tab(page.current+3)">
      <button class="pagination-btn num-btn">{{ page.current+3 }}</button>
    </li>

    <strong v-if="page_count-page.current>2">...</strong>

    <li class="page-item" v-if="page.current!==page_count" @click="tab(page_count)">
      <button class="pagination-btn num-btn">{{ page_count }}</button>
    </li>

    <li class="page-item prev" v-if="page.current!==page_count">
      <button class="nav-btn iconfont icon-arrowdown2">下一页</button>
    </li>
  </ul>

</template>

<script>
export default {
  name: "Pagination",
  computed:{
    page_count(){
      return Math.ceil((this.page.count/this.page.size))
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
