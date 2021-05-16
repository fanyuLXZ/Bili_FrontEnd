<template>
  <div id="v_tag" class="s_tag report-wrap-module report-scroll-module" scrollshow="true">
    <ul class="tag-area clearfix">
      <!--      <li class="tag" v-for="(item,index) in mainpartition " :key="index">-->
      <!--        <a href="//www.bilibili.com/v/channel/4610466?tab=featured" target="_blank" class="tag-link">-->
      <!--        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAAAXNSR0IArs4c6QAAAP5JREFUOBGllD0OwjAMhV9yGcTOisRFegwWJJgQS4/RiyCxdkdcJiFuGtX9ceJAJtf5/OQkfjUore5zhHfngB1GtIexLZrdK1dqcpvo3hd43OH9gjMOFlc0+4dUvyhgGHXq3BPwlmVZSOL2JHUuFIX64fiSKOmHvXhF9LFasvB0p6silkj3zlIxzAmv4JpETrhXCImMLEwjhfBA4gp7A7MNyMI0p8bctsXTuMmzLI9bauRvg9QKFPjYca3DFLxBrcOU/OieCocpHUlTIbonvd+CUfHyuDHVX0ISFt3DBDnDY4bMwt5G91Q4TOlIO/xPaxymdOTkvMLAzw5KHwX+Czr/jXvbTvs/AAAAAElFTkSuQmCC" width="32" height="32" class="channel-icon">-->
      <!--        <span class="channel-name">{{item}}</span></a></li>-->

      <li class="tag"><a target="_blank"
                         class="tag-link"><span>{{ mainpartition.name }} </span></a></li>
      <li class="tag"><a target="_blank"
                         class="tag-link"><span>{{ deputydivision.name }} </span></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props:["deputydivision","mainpartition"]
}
</script>

<style>
.v-wrap .s_tag {
  position: relative;
  clear: both;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e9ef;
}

.v-wrap .s_tag, .v-wrap .video-desc {
  margin-top: 16px;
}

.s_tag .tag-area > li {
  float: left;
  margin: 0 10px 8px 0;
  background: #f4f4f4;
  border-radius: 100px;
  padding: 0 12px;
  position: relative;
  height: 22px;
  line-height: 22px;
  transition: all .3s;
  font-size: 12px;
  border: 1px solid #f4f4f4;
}

img {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-style: normal;
  aspect-ratio: auto 32 / 32;
}

.s_tag .tag-area .channel-name {
  color: #00a1d6;
}

.s_tag .tag-area .channel-icon {
  width: 11px;
  height: 10px;
  margin-right: 5px;
  vertical-align: baseline;
}

li {
  font-style: normal;
  list-style: none outside none;
}
</style>