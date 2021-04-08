<template>
  <div class="lang-change">
    <div class="lang-item">
      <div class="lang-title">
        <i class="lang-icon bilifont bili-icon_dingdao_yuyanshezhi"></i>
        {{$HeadLang['50']}}：{{langs[selectedLang].name}}
      </div>
      <i class="lang-icon-more bilifont bili-icon_caozuo_qianwang"></i>
    </div>
    <div class="lang-intro">
      <ul>
        <li class="lang-intro-item" :class="{'on': selectedLang === index}" @click="setLang(item, index)" v-for="(item, index) in langs" :key="item.lang">
          {{item.name}} <i class="bilifont bili-icon_caozuo_xuanzhong"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { cookie } from 'g-public/js/utils'

export default {
  props: {
    lang: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      langs: [
        {name: '简体中文', lang: 'zh-CN'},
        {name: '繁体中文', lang: 'zh-TW'},
      ],
      selectedLang: 0,
    }
  },
  beforeMount() {
    let lang = this.lang
    if (!lang) {
      lang = cookie.get('LNG')
    }
    this.selectedLang = Math.max(this.langs.findIndex(item => item.lang === lang), 0)
  },
  methods: {
    setLang(item, index) {
      this.selectedLang = index
      cookie.set('LNG', item.lang)
      window.location.reload()
    },
  },
}
</script>

<style lang="less">
.lang-change {
  width: 100%;
  border-bottom: 1px solid #F4F4F4;
  padding: 7px 0;
  position: relative;
  font-size: 14px;
  .lang-intro {
    padding: 8px 0;
    top: 0px;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    // padding: 15px;
    left: 279px;
    background: #fff;
    width: 240px;
    font-size: 12px;
    color: #212121;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.20);
    transition: .3s ease;
    border-radius: 2px;
  }
  .lang-intro-item {
    font-size: 14px;
    padding: 8px 15px;
    line-height: 22px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    transition: all .3s;
    .bilifont {
      font-size: 22px;
      display: none;
    }
    &:hover {
      background: #F4F4F4;
    }
    &.on {
      color: #00A1D6;
      .bilifont {
        display: block;
      }
    }
  }
  &:hover {
    .lang-intro {
      visibility: visible;
      opacity: 1;
    }
  }

  .lang-item {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .3s ease;
    padding: 8px 23px;

    &:hover {
      background: #F4F4F4;
    }
  }

  .lang-title {
    font-size: 14px;
    color: #212121;
    display: flex;
    align-items: center;
  }

  .lang-icon {
    font-size: 24px;
    vertical-align: middle;
    color: #979797;
    margin-right: 5px;
  }
  .lang-icon-more {
    font-size: 16px;
    vertical-align: middle;
    color: #979797;
  }
}


</style>

