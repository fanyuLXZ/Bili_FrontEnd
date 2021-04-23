<template>
  
  <div id="v_tag" class="s_tag report-wrap-module report-scroll-module" scrollshow="true">
    <ul class="tag-area clearfix">
      <li class="tag" v-for="(item,index1) in classify.mainpartition " :key="index1">
        <div>
          <a :href="item.froms">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAAAXNSR0IArs4c6QAAAP5JREFUOBGllD0OwjAMhV9yGcTOisRFegwWJJgQS4/RiyCxdkdcJiFuGtX9ceJAJtf5/OQkfjUore5zhHfngB1GtIexLZrdK1dqcpvo3hd43OH9gjMOFlc0+4dUvyhgGHXq3BPwlmVZSOL2JHUuFIX64fiSKOmHvXhF9LFasvB0p6silkj3zlIxzAmv4JpETrhXCImMLEwjhfBA4gp7A7MNyMI0p8bctsXTuMmzLI9bauRvg9QKFPjYca3DFLxBrcOU/OieCocpHUlTIbonvd+CUfHyuDHVX0ISFt3DBDnDY4bMwt5G91Q4TOlIO/xPaxymdOTkvMLAzw5KHwX+Czr/jXvbTvs/AAAAAElFTkSuQmCC" width="32" height="32" class="channel-icon">
        <span class="channel-name">{{item.name}}</span>
        </a><!---->
        </div>
        </li>
        
       <li class="tag" v-for="(items,index) in classify.sortable " :key="index+classify.mainpartition.length">
         <div>
           <a :href="items.from" target="_blank" class="tag-link">
          {{items.names}}</a><!----><!----></div></li>
          <!----><!----><!----></ul>
          </div>
</template>

<script>
export default {
props:{
     classify:{
     type:Object,
    defaul:()=>[]
    }
  }
}
</script>
<style scoped src="@/assets/style/video/stardust-video.css"></style>


<style>

</style>