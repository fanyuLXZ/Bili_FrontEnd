<template>
  <li v-if="menuName">
    <van-popover
      placement="bottom-start"
      :open-delay=300
      :offset=-100
      :disabled="!itemData"
      @show="showed = true"
      trigger="hover">
      <div class="loc-menu-box" v-if="showed">
        <a :href="trimHttp(item.url)" target="_blank" class="loc-link" @click="onClick('list', index)" v-for="(item, index) in itemData" :key="index">
          <img :src="formatImg(trimHttp(item.pic))">
          <span v-text="item.name"></span>
        </a>
      </div>
      <a slot="reference" v-if="pic" class="link loc-moveclip" :href="menuLink" target="_blank" @click="onClick('entry')" @mouseenter="onMouseover">
        <div class="loc-mc-box">
          <p class="bnj-txt txt-up" v-text="menuName"></p>
          <img :src="pic" alt="menuName" class="bnj-gif">
          <p class="bnj-txt txt-down" v-text="menuName"></p>
        </div>
      </a>
      <a slot="reference" v-else class="link" :href="menuLink" target="_blank" v-text="menuName" @click="onClick('entry')" @mouseenter="onMouseover"></a>
    </van-popover>
  </li>
</template>

<script>
import { formatImg, trimHttp, customReport } from 'g-public/js/utils'

export default {
  data() {
    return {
      trimHttp,
      showed: false
    }
  },
  props: {
    locsData: null,
    locId: null,
    locId2: null,
  },
  computed: {
    nav() {
      return this.locsData && this.locsData[this.locId] && this.locsData[this.locId][0]
    },
    menuLink() {
      return trimHttp(this.nav && this.nav.url)
    },
    menuName() {
      return (this.nav && this.nav.name || '').substring(0,3) 
    },
    itemData() {
      return (this.locsData && this.locsData[this.locId2]) || null
    },
    pic() {
      return trimHttp(this.nav && this.nav.pic) || ''
    }
  },
  methods:{
    formatImg,
    onClick(type, index) {
      if(type === 'entry') {
        customReport('loc-meun-entry-click', {
          locid: this.locId,
        })
      }
      if(type === 'list') {
        customReport('loc-meun-list-click', {
          locid: this.locId2,
          index: index,
        })
      }
    },
    onMouseover() {
      customReport('loc-meun-list-show', {
        locid: this.locId2,
      })
    },
  },
}
</script>

<style lang="less">
  .loc-menu-box {
    background: #fff;
    width: 399px;
    padding: 12px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;
    .loc-link {
      display: block;
      position: relative;
      img {
        width: 375px;
        height: 110px;
        border-radius: 4px;
      }
      span {
        position: absolute;
        color: #fff;
        left: 0;
        bottom: 0;
        width: 375px;
        line-height: 24px;
        padding-left: 10px;
        border-radius: 4px;
        text-align: left;
        box-sizing: border-box;
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
      }
      &:first-child {
        margin-bottom: 12px;
      }
    }
  }
  .loc-moveclip {
    width: 54px;
    height: 36px;
    overflow: hidden;
  }
  .loc-mc-box {
    width: 54px;
    height: 108px;
    overflow: hidden;
    position: relative;
    .bnj-gif {
      position: absolute;
      left: 0;
      top: 36px;
      width: 54px;
      height: 36px;
      transform: translateZ(0);
    }
    .bnj-txt {
      line-height: 36px;
      text-align: center;
      width: 100%;
    }
    .txt-up {
      position: absolute;
      left: 0;
      top: 0;
    }
    .txt-down {
      position: absolute;
      left: 0;
      top: 72px;
    }


    animation: locmoveclipslider 10s infinite ease-out;
    animation-delay: 4.5s;
  }

  @keyframes locmoveclipslider {
    0% {
      transform: translateY(0);
    }
    5% {
      transform: translateY(-36px);
    }
    50% {
      transform: translateY(-36px);
    }
    55% {
      transform: translateY(-72px);
    }
    100% {
      transform: translateY(-72px);
    }
  }

</style>
