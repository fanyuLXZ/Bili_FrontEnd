<template>




  <div class="bcc-pagination-container">
    <ul class="bcc-pagination">
      <li class="bcc-pagination-item" :class="page.num===1?'disabled':'prev'"><a>上一页</a></li>
      <li class="bcc-pagination-item" v-if="page.num>1" @click="tab(1)"><a>1</a></li>
      <li class="bcc-pagination-item" v-if="page.num-1>2"><a>...</a></li>

      <li class="bcc-pagination-item" v-if="page.num-3>1&&page.num===page_count" @click="tab(page.num-3)"><a>{{ page.num-3 }}</a></li>
      <li class="bcc-pagination-item" v-if="page.num-2>1" @click="tab(page.num-2)"><a>{{ page.num-2 }}</a></li>
      <li class="bcc-pagination-item" v-if="page.num-1>1" @click="tab(page.num-1)"><a>{{ page.num-1 }}</a></li>
      <li class="bcc-pagination-item selected"><a>{{ page.num }}</a></li>
      <li class="bcc-pagination-item" v-if="page.num+1<page_count" @click="tab(page.num+1)"><a>{{ page.num+1 }}</a></li>
      <li class="bcc-pagination-item" v-if="page.num+2<page_count" @click="tab(page.num+2)"><a>{{ page.num+2 }}</a></li>
      <li class="bcc-pagination-item" v-if="page.num+3<page_count&&page.num===1" @click="tab(page.num+3)"><a>{{ page.num+3 }}</a></li>

      <li class="bcc-pagination-item" v-if="page_count-page.num>2"><a>...</a></li>
      <li class="bcc-pagination-item"  v-if="page.num!==page_count" @click="tab(page_count)"><a>{{ page_count }}</a></li>
      <li class="bcc-pagination-item"  :class="page.num===page_count?'disabled':'prev'"><a>下一页</a></li>

      <li class="bcc-pagination-extra">
        <div class="bcc-pagination-total"> 共{{ page_count }}页 / {{ page.count }}个， </div>
        <div class="bcc-pagination-elevator"> 跳转至
          <input type="text" autocomplete="off" spellcheck="false"> 页
        </div>
      </li>
    </ul>
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