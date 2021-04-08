<template>
  <div class="nav-search-box">
    <div class="nav-search">
      <form id="nav_searchform" @submit="onSubmit($event)">
        <input class="nav-search-keyword"
               type="text"
               autocomplete="off"
               accesskey="s"
               x-webkit-speech=""
               x-webkit-grammar="builtin:translate"
               :value="keyword"
               @input="handleChange"
               ref="input"
               :placeholder="defaultWord.show"
               @focus="isFocus = true"
               @blur="isFocus = false"
               @keydown.up.prevent="focusPrev()"
               @keydown.down.prevent="focusNext()">
        <div class="nav-search-btn" @click="onSubmit($event)">
          <button class="bilifont bili-icon_dingdao_sousuo nav-search-submit" type="button"></button>
        </div>
      </form>
      <Suggest v-if="showSuggest"
               :keyword="suggestKeyword"
               class="suggest"
               type="nav"
               @updateList="updateSuggestList"
               :focus="suggestFocus"></Suggest>

      <History v-if="showHistory"
               class="history"
               type="nav"
               @updateList="updateHistoryList"
               :focus="historyFocus"></History>
    </div>
  </div>
</template>

<script>
  // import domain from 'g-public/js/domain'
  // import biliAxios from '../../../public/js/axios/caxios'
  import Suggest from './Suggest'
  import History from './History'
  // import searchHistory from './search_history'
  import { isChildOf, customReport } from '../../../public/js/utils'

  export default {
    components: {
      Suggest,
      History,
    },
    data() {
      return {
        keyword: '',
        suggestKeyword: '',
        defaultWord: {
          show: '',
          word: '',
          seid: '',
          url: '',
        },
        isFocus: false,
        showHistory: false,
        showSuggest: false,
        suggestFocus: -1,
        historyFocus: -1,
        suggestList: [],
        suggestMax: 0,
        historyMax: 0,
      }
    },
    watch: {
      isFocus(value) {
        if(!value) return

        if(this.keyword) {
          this.openPanel('suggest')
          this.$nextTick(() => {
            this.suggestKeyword = this.keyword
          })
        } else {
          this.openPanel('history')
        }
      },
      selectedWord(value) {
        if(!value) return
        this.keyword = value
      },
    },
    computed: {
      from_source() {
        /**
         * 输入了关键词
         * nav_search_new：没有符合建议
         * nav_suggest_new：从搜索建议中选择
         */
        if(this.showSuggest && this.keyword) {
          return this.suggestMax === 0 ? 'nav_search_new' : 'nav_suggest_new'
        }
        /**
         * 从搜素历史中选择
         */
        return 'nav_recommend_new'
      },
      selectedWord() {
        // if(this.showSuggest && this.suggestFocus > -1) {
        //   return this.suggestList[this.suggestFocus]['value']
        // }
        // if(this.showHistory && this.historyFocus > -1) {
        //   return searchHistory.read()[this.historyFocus].value
        // }
        return ''
      },
    },
    mounted() {
      this.fetchPlaceHolder()
      // this.historyMax = searchHistory.read().length
      this.historyMax = 0

      document.addEventListener('click', (e) => {
        const state = isChildOf(e.target, document.querySelector('.nav-search-box'))
        if(!state){
          this.openPanel('both')
          this.suggestFocus = -1
          this.historyFocus = -1
        }
      })
    },
    methods: {
      handleChange(e) {
        if(!e.target.value) {
          this.keyword = ''
          this.suggestKeyword = ''
          this.openPanel('history')
          this.suggestFocus = -1
          this.historyFocus = -1
          return
        }

        this.keyword = e.target.value

        this.openPanel('suggest')
        this.$nextTick(() => {
          this.suggestKeyword = e.target.value
        })
      },
      fetchPlaceHolder() {
        // biliAxios({
        //   url: `${domain.API}/x/web-interface/search/default`,
        //   type: 'get',
        //   withCredentials: true,
        // }).then(res => {
        //   const d = res.data
        //   if(d.code === 0) {
        //     this.defaultWord.show = d.data.show_name || ''
        //     this.defaultWord.word = d.data.name || ''
        //     this.defaultWord.seid = d.data.seid || ''
        //     this.defaultWord.url = d.data.url || ''
        //     customReport('mininav-search-default-show', { show: this.defaultWord.show, url: this.defaultWord.url })
        //   }
        // })
      },
      focusPrev() {
        if(this.showSuggest) {
          this.suggestFocus = Math.max(this.suggestFocus - 1, 0)
          return
        }
        if(this.showHistory) {
          this.historyFocus = Math.max(this.historyFocus - 1, 0)
        }
      },
      focusNext() {
        if(this.showSuggest) {
          this.suggestFocus = Math.min(this.suggestFocus + 1, this.suggestMax - 1)
          return
        }
        if(this.showHistory) {
          this.historyFocus = Math.min(this.historyFocus + 1, this.historyMax - 1)
        }
      },
      updateSuggestList(list) {
        this.suggestMax = list.length
        this.suggestList = list
        this.suggestFocus = -1
      },
      updateHistoryList() {
        // this.historyMax = searchHistory.read().length
      },
      onSubmit(e) {
        e.preventDefault()
        let param = {}, isDefault = false
        if(this.selectedWord) {
          param.keyword = this.selectedWord
        } else {
          if(this.keyword) {
            param.keyword = this.keyword
          } else {
            isDefault = true
            if(this.defaultWord.url) {
              customReport('mininav-search', { word: this.defaultWord.show, type: 'default' })
              window.open(encodeURI(this.defaultWord.url))
              return;
            }
            param.keyword = this.defaultWord.word
          }
        }
        param.from_source = this.from_source
        // searchHistory.save(this.keyword)
        const p = Object.keys(param).map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(param[k])).join('&')
        window.open(`//search.bilibili.com/all?${p}`)
        customReport('mininav-search', { word: param.keyword, type: isDefault ? 'default' : 'common' })
      },
      openPanel(key) {
        switch (key) {
          case 'suggest':
            this.showSuggest = true
            this.showHistory = false
            break;
          case 'history':
            this.showSuggest = false
            this.showHistory = true
            break;
          default:
            this.showSuggest = false
            this.showHistory = false
            break;
        }
      },
    },
  }
</script>

<style lang="less">
.bili-header-m, .international-header {
  .nav-search-box {
    // flex-grow: 1;
    margin: 0 10px;
    width: 500px;
    transition: .3s width;
  }
  .nav-search {
    position: relative;
    #nav_searchform {
      display: block;
      padding: 0 38px 0 16px;
      border: 1px solid rgba(255, 255, 255, 0);
      border-radius: 2px;
      background-color: #fff;
    }
    .nav-search-keyword {
      overflow: hidden;
      width: 100%;
      height: 34px;
      border: none;
      background-color: transparent;
      box-shadow: none;
      color: #999;
      font-size: 14px;
      line-height: 34px;
      transition: all .2s;
      &::-ms-clear {
        display: none;
      }
      &:focus {
        color: #222222;
      }
    }
    .nav-search-submit {
      position: absolute;
      top: 8px;
      right: 16px;
      margin: 0;
      padding: 0;
      border: none;
      background: none;
      color: #505050;
      font-size: 16px;
      line-height: 20px;
      cursor: pointer;
      transition: all .2s;
    }
    .nav-search-btn {
      position: absolute;
      top: 0;
      right: 0;
      margin: 0;
      padding: 0;
      width: 48px;
      height: 36px;
      border: none;
      border-radius: 2px;
      background: #E7E7E7;
      line-height: 26px;
      cursor: pointer;
      &:hover .nav-search-submit{
        color: #00a1d6;
      }
    }
  }
  .bilibili-suggest {
    position: relative;
    z-index: 10000;
    margin-top: 2px;
    padding-bottom: 5px;
    border: 1px solid #e5e9ef;
    border-radius: 4px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0 2px 4px;
    font-size: 12px;
  }
  
}
</style>
