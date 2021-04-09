<template>
  <div class="pagelist" style="">
    <div class="flip-left">
      <span class="prev-page" style="display: none;">上一页</span>
      <span :to="{name:'actListBody',params:{pageNum:1}}" class="first-page  active">1</span>
      <span :to="{name:'actListBody',params:{pageNum:2}}" class="">2</span>
      <span :to="{name:'actListBody',params:{pageNum:3}}" class="">3</span>
      <span :to="{name:'actListBody',params:{pageNum:4}}" class="">4</span>
      <strong class="ellipsis">...</strong>
      <span :to="{name:'actListBody',params:{pageNum:50}}" class="">50</span>
      <span class="next-page" style="">下一页</span>
    </div>
    <div class="flip-right"><span>共 50 页，跳至</span><input id="in_blur" type="text"><span>页</span></div>
  </div>
</template>

<script>
export default {
  name: "PageBar_simp"
}
</script>

<style scoped src="../../assets/style/PageBar/pageBar(Simple).css"></style>
<style scoped>

</style>