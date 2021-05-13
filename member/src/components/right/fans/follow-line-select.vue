<template>
  <div class="follow-line-select bcc-select" style="width: 120px;" id="qaq">
    <div class="bcc-select-input-wrap" @click="time">
      <input type="text" readonly="readonly" placeholder="请选择内容" class="bcc-select-input-inner" :value="value">
      <i class="bcc-iconfont bcc-icon-ic_drop-down"></i>
    </div>
    <bcc-select-list-wrap :type="type" v-show="timeSelect" @get-data="getData" :timeSelect="timeSelect" />
  </div>
</template>

<script>
import BccSelectListWrap from "@/components/right/fans/bcc-select-list-wrap";
export default {
  name: "follow-line-select",
  data(){
    return{
      timeSelect:false,
      month:null,
      value:null,
      type:'one',
    }
  },
  components: {BccSelectListWrap},
  methods:{
    time(){
      this.timeSelect =! this.timeSelect
      console.log(this.timeSelect)
    },
    getData(data,year,month){
      console.log(data,month)
      this.month = month
      this.value = year
      this.timeSelect = data
    }
  },
  mounted() {
    document.addEventListener("click",(e)=>{
      let list = document.getElementById("qaq");
      if (list.contains(e.target)) {
        console.log("在内");
      } else {
        this.timeSelect = false;
      }
    })
  }
}
</script>