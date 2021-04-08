<template>
  <!-- 国际版 漫画列表 -->
  <div class="manga-panel" v-van-lazyload="getMangeListData">

    <StoreyTitle
      :info="{iconfont: 'bili-ic_partition_Comic', title: info.name, link: info.morelink}"
    >
      <div slot="left" class="left-slot">
        <TabSwitch
          class="tab-switch"
          :tabs="tabConfig"
          :selected="selectedTab"
          @on-change="onTabChange"
        />
        <a
          class="app-download-link"
          href="//manga.bilibili.com/app-download?from=manga_homepage"
          target="_blank"
        >
          <!-- 下载APP -->
          {{ $HomeLang['32'] }}APP
          <!-- 领券免费看 -->
          <span>{{ $HomeLang['33'] }}</span>
        </a>
      </div>

      <!-- 换一换 -->
      <Exchange
        slot="right"
        :link="info.morelink"
        @on-change="loadDynamicData"
        :state="exchangeState"
      />
    </StoreyTitle>

    <!-- 漫画卡片列表 -->
    <div class="manga-list-box">
      <a :href="`//manga.bilibili.com/detail/mc${manga.comic_id}?from=${fromType}`" target="_blank" class="manga-card" 
        v-for="(manga, index) in mangaData" :key="index">
        <van-image
          :src="trimHttp(manga.vertical_cover)"
          :options="{c: 1, q: 90}"
          width="206"
          height="275"></van-image>
        <p class="manga-title" :title="manga.title">{{manga.title}}</p>
        <p class="manga-tag" v-if="manga.styles && manga.styles.length">{{ manga.styles.slice(0,2).map(item => item).join(' ') }}</p>
      </a>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
import StoreyTitle from 'g-public/components/international/StoreyTitle';
import Exchange from 'g-public/components/international/Exchange';
import TabSwitch from 'g-public/components/international/TabSwitch';

import { trimHttp, getRandomInt } from 'g-public/js/utils';

import { getMangaPanel } from 'g-public/apis/home';
import { customReport, formatDate } from 'g-public/js/utils'


const LEFT_MAX_COUNT = 12

export default {
  name: 'MangaPanel',
  components: {
    StoreyTitle,
    Exchange,
    TabSwitch,
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
  },

  computed: {
    fromType() {
      return {
        GetRecommendComics: 'bili_main_pop',
        HomeHot: 'bili_main_update'
      }[this.tabValueMap[this.selectedTab]]
    }
  },

  data() {
    return {
      trimHttp,
      list: [],
      selectedTab: 0,
      exchangeState: false,
      tabConfig: [
        // 人气推荐
        { name: this.$HomeLang['30'], value: 0 },
        // 今日更新推荐
        { name: this.$HomeLang['31'], value: 1 }
      ],
      tabValueMap: {
        0: 'GetRecommendComics',
        1: 'HomeHot'
      },
      page: 0,
      totalPage: 1,
      panelState: 'loading',
      // 免费漫画推荐 50个
      totalFreeList: [],
      // 人气推荐 page_num
      recommendComicsPageNum: 1,

      // 页面展示
      mangaData: [],

      recommendComicsData: [],
      freeComicsData: [],
    };
  },
  methods: {
    onTabChange(val) {
      customReport('home_manga_tab_switch', val === 0 ? 'pop' : 'update')

      this.selectedTab = val

      // 第一次请求免费漫画推荐
      if(!this.freeComicsData.length && val === 1) {
        this.getMangeListData(1)
      }

      // 切换数据
      this.mangaData = val === 0 ? this.recommendComicsData : this.freeComicsData
    },
    loadDynamicData() {
      customReport('home_manga_tab_reload')
      // tab-人气推荐
      if(this.selectedTab === 0) {
        customReport('bilibili-manga.mainsite-recommend.index.0.click')
        // 刷新时获取 A 池内容,传值 1
        this.getMangeListData(2)
        return
      }

      // tab-免费漫画推荐
      customReport('bilibili-manga.mainsite-free.index.0.click')
      this.handleFreeExchange(LEFT_MAX_COUNT)
    },
    async getMangeListData(type) {
      this.exchangeState = false
      try {
        const tab = this.tabValueMap[this.selectedTab]
        let param = {}
        if(tab === 'GetRecommendComics') {
          type = type || 1
          param = {
            type: type || 1,
            page_size: 12,
            page_num: this.recommendComicsPageNum
          }
        } else if(tab === 'HomeHot') {
          param = {
            type: 1
          }
        }
        const { data } = await getMangaPanel(tab, JSON.stringify(param))
        if(data.code === 0) {
          this.exchangeState = true
          const res = data.data
          if(tab === 'GetRecommendComics') {
            this.recommendComicsPageNum ++
            this.mangaData = (res.comics || []).slice(0, LEFT_MAX_COUNT)
            this.recommendComicsData = this.mangaData
          } else if(tab === 'HomeHot') {

            this.totalFreeList = res

            this.handleFreeExchange(LEFT_MAX_COUNT)
          }
        }
      } catch (err) {
      }
    },
    //
    handleFreeExchange(n) {
      // 处理字段
      this.mangaData = this.getRandomFromArray(this.totalFreeList, n).map(item => {
        item.styles = item.styles.map(i => {
          return i.name ? i.name : i
        })
        return item
      })
      this.freeComicsData = this.mangaData
    },
    // 随机从list选n个不重复的
    getRandomFromArray(list, n) {
      if(!list || !list.length || !n) return []

      const afterRandomArr = []

      const resSet = new Set()
      for (let index = 0; index < n * 2 + 1; index ++) {
        const randomIndex = getRandomInt(0, list.length)
        if(!resSet.has(randomIndex)) {
          resSet.add(randomIndex)
        }
      }

      for (let item of resSet.keys()) {
        afterRandomArr.push(list[item])
      }

      return afterRandomArr.slice(0, n)
    },
  },
};
</script>

<style lang="less">
.manga-panel {
  .left-slot {
    display: flex;
  }
  .tab-switch {
    display: flex;
    margin-left: 4px;
    margin-top: 1px;
    .tab-switch-item {
      margin-right: 12px;
      height: 30px;
      font-size: 12px;
      line-height: 30px;
      cursor: pointer;
      &.on {
        border-bottom: 1px solid #00a1d6;
        color: #00a1d6;
      }
    }
  }
  .app-download-link {
    position: relative;
    height: 30px;
    color: #505050;
    text-align: center;
    font-size: 12px;
    line-height: 32px;
    cursor: pointer;

    &:hover {
      color: #00a1d6;
    }

    span {
      position: absolute;
      top: -10px;
      right: -54px;
      width: 72px;
      height: 20px;
      border-radius: 10px;
      background: #fa5a57;
      color: #fff;
      font-size: 12px;
      line-height: 19px;
      text-align: center;
    }
  }
  .manga-list-box {
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 1286px;
    height: 682px;
    .manga-card {
      width: 206px;
      margin-bottom: 24px;
      > img {
        display: block;
        width: 206px;
        height: 275px;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 2px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=)
      }

      .manga-title {
        max-width: 206px;
        margin: 10px 0 8px 0;
        color: #212121;
        font-weight: 500;
        font-size: 14px;
        transition: 0.3s;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
      }
      .manga-tag {
        color: #999999;
        font-size: 12px;
        overflow: hidden;
        line-height: 16px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &:hover {
        .manga-title {
          color: #00a1d6;
        }
      }
    }
  }
}
</style>