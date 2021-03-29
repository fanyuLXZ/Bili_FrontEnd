<template>
  <ul class="bilibili-search-suggest" v-if="list.length > 0">
    <li v-for="(item, index) in list"
        :key="index"
        class="suggest-item"
        :class="focus === index ? 'focus' : ''">
      <a v-html="item.name"
         @click="saveToHistory(item.value)"
         :href="`//search.bilibili.com/all?keyword=${encodeURIComponent(item.value)}&from_source=${type}_suggest`" target="_blank"></a>
    </li>
  </ul>
</template>

<script>

  import {  customReport } from '../../../public/js/utils'
  // import { cookie, customReport } from 'g-public/js/utils'
  // import biliAxios from 'biliAxios'
  // import searchHistory from './search_history'

  export default {
    props: {
      keyword: {
        type: String,
        default: '',
      },
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
    mounted () {
      if(this.keyword) {
        this.loadData()
      }
    },
    watch: {
      keyword(value) {
        if(value) {
          this.loadData()
        }
      },
    },
    methods: {
      saveToHistory(v) {
        // searchHistory.save(v)
        this.insideFocus = null
        customReport('mininav-search', { word: v, type: 'common' })
      },
      loadData() {
        // biliAxios({
        //   url: '//s.search.bilibili.com/main/suggest',
        //   type: 'get',
        //   query: {
        //     func: 'suggest',
        //     suggest_type: 'accurate',
        //     sub_type: 'tag',
        //     main_ver: 'v1',
        //     highlight: '',
        //     userid: cookie.get('DedeUserID') || 0,
        //     bangumi_acc_num: 1,
        //     special_acc_num: 1,
        //     topic_acc_num: 1,
        //     upuser_acc_num: 3,
        //     tag_num: 10,
        //     special_num: 10,
        //     bangumi_num: 10,
        //     upuser_num: 3,
        //     term: this.keyword,
        //     rnd: Math.random(),
        //   },
        // }).then(res => {
        //   const data = res && res.data
        //   if(data && data.code === 0) {
        //     this.list = data.result.tag || []
        //     this.$emit('updateList', this.list)
        //   }
        // })
      },
    },
  }
</script>

<style lang="less">
.bilibili-search-suggest {
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
  
  .suggest-item {
    padding: 0 16px;
    height: 32px;
    line-height: 32px;
    cursor: pointer;
    word-wrap: break-word;
    word-break: break-all;
    display: block;
    color: #222222;
    position: relative;
    transition: ~'.2 ease';
    &:hover, &.focus {
      background-color: #f4f4f4;
    }
    a {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #222222;
      display: block;
      &.link-wrp {
        display: block;
      }
      &:hover {
        color: #222222;
      }
    }
    .suggest_high_light {
      font-style: normal;
      color: #f25d8e;
    }
  }
}
</style>
