<template>
  <div class="bypb-window">
    <div class="online">
      <a href="//www.bilibili.com/video/online.html" target="_blank">{{$HomeLang['29']}}</a>
    </div>
    <OperateCard :info="adData" v-if="adData" :locId="locId" />
  </div>
</template>

<script>
import { trimHttp } from 'g-public/js/utils'
import OperateCard from '../ad/OperateCard'

export default {
  components: {
    OperateCard
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    locId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      trimHttp: trimHttp
    }
  },
  computed: {
    adData() {
      return this.list && this.list[0] || null
    }
  }
}
</script>

<style lang="less">
.bypb-window {
  width: 320px;
  .online {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3px;
    margin-bottom: 19px;
    height: 30px;
    border: 1px solid #E7E7E7;
    border-radius: 2px;
    background: #F4F4F4;
    color: #505050;
    line-height: 30px;
    a {
      flex: 1;
      text-align: center;
    }
    em{
      display: inline-block;
      height: 20px;
      border-left: 1px solid #E7E7E7;
    }
  }
}
</style>

