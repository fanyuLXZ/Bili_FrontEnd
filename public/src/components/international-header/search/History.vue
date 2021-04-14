<template>
  <ul class="bilibili-search-history" v-if="list.length > 0">
    <li v-for="(item, index) in list"
        :key="index"
        class="history-item"
        :class="focus === index ? 'focus' : ''">
      <a
        v-text="item.value"
        :href="`//search.bilibili.com/all?keyword=${encodeURIComponent(item.value)}&from_source=${type}_search`"
        target="_blank"
        @click="reportSearch(item.value)"
      ></a>
      <i class="bilifont bili-icon_sousuo_yichu cancel-icon" @click="deleteHistory(item.value)"></i>
    </li>
  </ul>
</template>

<script>
  // import searchHistory from './search_history'
  import { customReport } from '../../../public/js/utils'

  export default {
    props: {
      type: {
        default: 'banner',
      },
      focus: {
        default: -1,
      },
    },
    data() {
      return {
        list: [],
      }
    },
    mounted() {
      this.loadData()
    },
    methods: {
      loadData() {
        // this.list = searchHistory.read()
        this.$emit('updateList')
      },
      deleteHistory() {
        // searchHistory.remove(v)
        this.loadData()
      },
      reportSearch(v) {
        customReport('mininav-search', { word: v, type: 'common' })
      }
    },
  }
</script>

<style lang="less">
.bilibili-search-history {
  position: absolute;
  width: 100%;
  border: 1px solid #e5e9ef;
  margin-top: 1px;
  background: #fff;
  z-index: 99999;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;
  padding: 10px 0;
  font-size: 14px;

  .history-item {
    padding: 6px 10px 6px 16px;
    height: 32px;
    line-height: 32px;
    cursor: pointer;
    word-wrap: break-word;
    word-break: break-all;
    color: #222222;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: .2s ease;
    &:hover, &.focus {
      background-color: #f4f4f4;
    }
    a {
      width: 100%;
      color: #222222;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        color: #222222;
      }
      &.link-wrp {
        display: block;
      }
    }
  }
  
  .cancel-icon {
    color: #999;
    &:hover {
      color: #00a1d6;
    }
  }
}
</style>
