<template>
  <div class="operate_right">
    <div class="operate-txt" :class="active===index?'active':''" v-for="(item,index) in operate" :key="index" @click="click(index)">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: "operate-txt",
  data(){
    return{
      active:0,
      operate:["最近发布","点赞最多","回复最多"]
    }
  },

  methods:{
    click(index){
      this.active = index
    }
  }
}
</script>
