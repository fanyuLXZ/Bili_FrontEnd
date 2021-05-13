<template>
  <div class="bcc-select-list-wrap">
    <ul class="bcc-select-option-list">
      <li class="bcc-option" v-for="(item,index) in type==='one'?dateYear:dateMonth" :key="index" @click="click(index)" :class="selectedNum === index?'selected':''">
        <span>{{ item }}</span>
        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "bcc-select-list-wrap",
  data(){
    return{
      selectedNum:5,
      dateYear:["2017","2018","2019","2020","2021","最近30天"],
      dateMonth:["全年","一月","二月","三月","四月","五月"],
      timeSelectUpdate:this.timeSelect
    }
  },
  props:{
    timeSelect:Boolean,
    type:String
  },
  methods:{
    click(index){
      this.selectedNum = index
      this.timeSelectUpdate = false
      let year = this.dateYear[index]
      let month = this.dateMonth[index]
      this.$emit('get-data',this.timeSelectUpdate,year,month)
    }
  }
}
</script>
