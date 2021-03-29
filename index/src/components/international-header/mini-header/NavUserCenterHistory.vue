<template>
  <!-- 历史记录 -->
  <div>

    <van-popover
      popper-class="van-popper-history"
      placement="bottom" 
      trigger="hover"
      transition="slide-fade"
      @show="popoverVisible = true"
      @hide="popoverVisible = false"
      width="370"
      :open-delay="150">
      <div class="vp-container">
        <div class="tab-header">
          <div class="tab-item"
               @click="toggleTab(tab.type)"
               :class="{ 'tab-item--active': tab.type === currentTab }"
               v-for="(tab, index) in tabConfigs"
               :key="index">{{ tab.title }}{{ tab.type === currentTab ? $HeadLang['45'] : '' }}</div>
        </div>
        <div class="panel">
          <div v-for="(item, key) in cacheDataMap[currentTab]" :key="key">
            <p class="date-title" v-if="item && item.length">{{ key }}</p>
            <NavUserVideoCard
              v-for="(card, index) in item"
              :key="index"
              :card="card"
              :dateText="key"
              :from="'HISTORY'" />
          </div>
          <a v-if="cacheDataMap[currentTab] && fullData[currentTab]"
             class="view-all"
             href="//www.bilibili.com/account/history" 
             target="_blank">{{$HeadLang[51]}}</a>

          <div v-if="emptyData[currentTab]" class="empty-panel">
            <!-- 好像最近沒有看過 专栏/稿件 呢 -->
            {{$HeadLang['48']}}{{ tabConfigs[currentTabIndex].title }}呢
          </div>
        </div>
      </div>

      <div slot="reference" class="mini-history">
        <span @click="goHistory" v-van-report:mininav-click.click="`历史`"
        v-van-report:top_bar_click.click="{ module:'历史'}">
          <!-- <i class="bilifont bili-icon_dingdao_lishijilu"></i> -->
          <span class="name">{{$HeadLang['45']}}</span>
        </span>
      </div>

    </van-popover>
  </div>
</template>

<script>
import NavUserVideoCard from './NavUserVideoCard'
import { getNavHistory } from '../../api'
import { format, isToday, isYesterday } from 'date-fns'
import { customReport } from 'g-public/js/utils'

export default {
  name: 'NavUserCenterHistory',
  components: {
    NavUserVideoCard,
  },
  data() {
    return {
      popoverVisible: false,
      show: true,
      tabConfigs: [
        {
          title: this.$HeadLang['13'],
          type: 'archive',
        },
        {
          title: this.$HeadLang['39'],
          type: 'live',
        },
        {
          title: this.$HeadLang['15'],
          type: 'article',
        }
      ],
      currentTab: 'archive',
      cacheDataMap: {
        'all': null,
        'archive': null,
        'live': null,
        'article': null,
      },
      emptyData: {
        archive: false,
        live: false,
        article: false
      },
      fullData: {
        archive: false,
        live: false,
        article: false
      },
      initedData: false,
    }
  },
  computed: {
    currentTabIndex() {
      for(let i = 0; i < this.tabConfigs.length; i++) {
        if(this.tabConfigs[i].type === this.currentTab) {
          return i
        }
      }
    }
  },
  methods: {
    async loadHistory (type) {
      try {
        const { data } = await getNavHistory(type)
        if (!data || !data.data || !data.data.list || !data.data.list.length) {
          this.emptyData[type] = true
          return
        }
        const dateMap = {
          '今天': [],
          '昨天': [],
          '更早': [],
        }
        if(data.data.list.length >= 20) {
          this.fullData[type] = true
        }
        data.data.list.map(item => {
          const date = format(item.view_at * 1000, 'YYYY-MM-DD HH:mm:ss')
          const card = {
            title: item.title,
            cover: item.cover || (item.covers && item.covers.length && item.covers[0]),
            name: item.author_name || item.name,
            id: item.history.oid,
            cid: item.history.cid,
            bvid: item.history.bvid,
            page: item.history.page || 0,
            view_at: item.view_at,
            live_status: item.live_status,
            progress: item.progress,
            duration: item.duration,
            business: item.history.business,
            show_title: item.show_title,
            device: item.history && item.history.dt,
            pgcUri: (item.history.business === 'pgc' || item.history.business === 'cheese') && item.uri,
          }
          if (isToday(date)) {
            dateMap['今天'].push(card)
          } else if (isYesterday(date)) {
            dateMap['昨天'].push(card)
          } else {
            dateMap['更早'].push(card)
          }
        })
        this.cacheDataMap[type] = dateMap
      } catch (error) {
        console.error(error)
      }
    },
    toggleTab(type) {
      customReport(`history-${type}-click`)
      this.currentTab = type
      if(!this.cacheDataMap[type]) {
        this.loadHistory(type)
      }
    },
    goHistory() {
      window.open('//www.bilibili.com/account/history', '_blank')
    },
  },
  watch: {
    popoverVisible(nv) {
      if (nv && !this.initedData) {
        this.toggleTab('archive')
        this.initedData = true
      }
    },
  },
}
</script>

<style lang="less" scoped>
// hover panel
.van-popper-history {
  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.20);
  border-radius: 2px;
  width: 370px;

  .vp-container {
    width: 100%;
    height: 518px;
  }

  .tab-header {
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F4F4F4;
  }

  .tab-item {
    cursor: pointer;
    font-size: 12px;
    margin: 0 7px;
    transition: .3s ease;
    &:first-Child {
      margin-left: 20px;
    }
    &:hover {
      color: #00A1D6;
    }
  }

  .tab-item--active {
    background-color: #00A1D6;
    color: #FFFFFF;
    border-radius: 12px;
    padding: 4px 10px;

    &:hover {
      color: #ffffff;
    }
  }

  .panel {
    height: 468px;
    overflow-y: auto;
    overscroll-behavior: none;
  }

  .empty-panel {
    height: 468px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999999;
    font-size: 14px;
  }

  .date-title {
    font-size: 12px;
    color: #999999;
    padding: 15px 0px 4px 20px;
  }

  .view-all {
    display: block;
    cursor: pointer;
    width: 330px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background: #F4F4F4;
    font-size: 14px;
    color: #212121;
    margin: 16px auto;
    transition: .3s ease;
    &:hover {
      color: #212121;
      background: #E7E7E7;
    }
  }
}

</style>

<style lang="less">
.van-popover.van-popper.van-popper-history {
  padding: 0;
  border: none;
  top: 44px !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px !important;
}
</style>
