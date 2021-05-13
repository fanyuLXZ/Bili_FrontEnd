<template>
  <div>
    <span @mouseenter="mouseOver" @mouseleave="mouseLeave">
      <a href="//space.bilibili.com" target="_blank" class="avatar el-popover__reference" aria-describedby="el-popover-7498" tabindex="0">
        <img src="//i1.hdslb.com/bfs/face/31f967d648f65c5754981fe6b4b6a21def194dc2.jpg">
      </a>
    </span>
    <el-popover :style="active" />
  </div>
</template>

<script>
import ElPopover from "@/components/header/right-block/el-popover";
export default {
  name: "avatar",
  data(){
    return{
      active: "display: none;",
    }
  },
  components: {
    ElPopover,
  },
  methods: {
    // 移入
    mouseOver() {
      this.active = "";
    },
    // 移出
    mouseLeave() {
      this.active = "display: none;";
    }
  }
}

</script>