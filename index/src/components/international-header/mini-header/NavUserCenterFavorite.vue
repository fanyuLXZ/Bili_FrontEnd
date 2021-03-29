<template>
  <!-- 收藏夹 -->
  <div>
    <van-popover
      popper-class="van-popper-favorite"
      placement="bottom"
      trigger="hover"
      @show="popoverShow"
      width="520"
      transition="slide-fade"
      :open-delay="150">

      <div class="vp-container">
        <div class="tabs-panel">
          <div @click="toggleTab(index, tab.id)"
               class="tab-item"
               :class="{ 'tab-item--normal': !tab.active, 'tab-item--active': tab.active }"
               v-for="(tab, index) in tabs"
               :key="index">
            <span class="title" :title="tab.title">{{ tab.title }}</span>
            <span class="num">{{ tab.count }}</span>
          </div>
          <a class="tab-item__all" v-if="favListCount > 20" :href="`//space.bilibili.com/${mid}/favlist`" target="_blank">
            {{ $HeadLang[51] }}
          </a>
        </div>
        <div v-if="currentTab" class="favorite-video-panel">

          <div class="favorite-video-list empty-list" v-if="!currentTab || currentTab.count === 0">
            {{ $HeadLang[54] }}
          </div>

          <!-- loaded -->
          <div v-else class="favorite-video-list">
            <!-- 视频卡片 -->
            <div v-for="(card, index) in favDataMap[currentTab.id || 'LATER_VIEW']" :key="index">

              <!-- 合集卡 -->
              <div class="ugc-season-card" v-if="card.business && card.business === 'ugcSeason'">
                <van-image 
                  class="season-img"
                  :src="card.cover"
                  :options="{c: 1, q: 100 }"
                  width="112" 
                  height="63">
                </van-image>
                <span class="season-icon">
                  <img src="../../assets/images/icon_ugc_season.svg" alt="">
                </span>
                <div class="season-info">
                  <p class="season-info__title">{{card.title}}</p>
                  <p class="season-info__up">创建者：{{card.name}}</p>
                </div>
              </div>

              <!-- 其他 -->
              <NavUserVideoCard v-else :card="card" :from="'FAVORITE'" />
            </div>
          </div>

          <!-- 底部按钮 -->
          <div class="play-view-all">
            <!-- 稍後再看 -->
            <a v-if="currentTab.count !== 0 && currentTab.key === 'LATER_VIEW'"
                class="play-all view"
                href="//www.bilibili.com/watchlater/#/list"
                target="_blank">{{ $HeadLang[51] }}</a>
            <!-- 单个收藏夹 -->
            <a v-if="currentTab.key !== 'LATER_VIEW' && favDataMap[currentTab.id] && currentTab.count > 20"
                class="play-all view"
                :href="`//space.bilibili.com/${mid}/favlist?fid=${currentTab.id}&ftype=create`"
                target="_blank">{{ $HeadLang[51] }}</a>
            <!-- 播单页 -->
            <a v-if="currentTab.count !== 0 && currentTab.key !== 'LATER_VIEW'"
              class="play-all"
              :href="`//www.bilibili.com/medialist/play/ml${currentTab.id}`"
              target="_blank">
              <i class="bilifont bili-icon_dingdao_bofang"></i>
              {{ $HeadLang[52] }}
            </a>
            <!-- 稍后再看播放页 -->
            <a v-if="currentTab.count !== 0 && currentTab.key === 'LATER_VIEW'"
              class="play-all"
              href="//www.bilibili.com/medialist/play/watchlater"
              target="_blank">
              <i class="bilifont bili-icon_dingdao_bofang"></i>
              {{ $HeadLang[52] }}
            </a>
          </div>

        </div>
      </div>

      <div slot="reference" class="mini-favorite">
        <span @click="goFav" v-van-report:mininav-click.click="`收藏`" v-van-report:top_bar_click.click="{ module:'收藏'}">
          <!-- <i class="bilifont bili-icon_dingdao_shoucangjia"></i> -->
          <span class="name">{{$HeadLang['70']}}</span>
        </span>
      </div>

    </van-popover>
  </div>
</template>

<script>
import NavUserVideoCard from './NavUserVideoCard'
import { getNavFavList, getNavViewLaterDetail, getNavFavDetail } from '../../api'

export default {
  name: 'NavUserCenterFavorite',

  components: {
    NavUserVideoCard,
  },

  props: {
    mid: {
      type: Number,
      default: null,
    },
  },

  mounted() {
    localStorage.removeItem('loadFavListTime')
  },

  data() {
    return {
      LATER_VIEW_INDEX: 1,
      tabs: [],
      cardList: [],
      currentTab: null,
      favListCount: null,
      favDataMap: {},
      lastTrigglerTime: 0,
      businessTypeMap: {
        2: 'archive',
        12: 'audio',
        21: 'ugcSeason'
      }
    }
  },

  methods: {
    popoverShow() {
      const currentTime = new Date().getTime()
      const offset = currentTime - this.lastTrigglerTime

      // 10s
      if(offset > 10000) {
        const index = this.tabs.findIndex(item => item.id === this.currentTab.id)
        this.loadNavFavList(index === -1 ? 0 : index)
      }
    },
    async loadNavFavList(index = 0) {

      const { data } = await getNavFavList()

      if (!data || !data.data) return

      this.lastTrigglerTime = new Date().getTime()

      const viewLaterCount = data.data[1].mediaListResponse.count
      this.favListCount = data.data[0].mediaListResponse.count

      const navList = data.data[0].mediaListResponse.list.map((item, index) => {
        return {
          title: item.title,
          count: item.media_count,
          id: item.id,
          key: 'FAV',
          active: index === 0,
        }
      })
      // 稍後再看 拼接到第二位
      navList.splice(1, 0, {
        title: this.$HeadLang['49'],
        key: 'LATER_VIEW',
        count: viewLaterCount,
        active: false,
      })
      this.tabs = navList
      this.toggleTab(index, this.tabs[index].id)
    },
    async toggleTab(index = 0, id) {
      this.currentTab = this.tabs[index]
      this.tabs.forEach(item => {
        item.active = false
      })
      this.tabs[index].active = true

      // 加载稍后再看
      if(this.currentTab.key === 'LATER_VIEW') {
        this.loadLaterView()
        return
      }

      // 根据收藏夹id加载
      this.loadFavDetail(id)

    },
    // 稍後再看详情
    async loadLaterView () {
      const { data } = await getNavViewLaterDetail()

      if(!data.data || !data.data.count) return

      const cardList = data.data.list.map(item => {
        return {
          title: item.title,
          cover: item.pic,
          name: item.owner.name,
          business: 'archive',
          duration: item.duration,
          page: item.page && item.page.length,
          id: item.aid,
          bvid: item.bvid,
          state: item.state,
          isLater: true,
        }
      })

      this.tabs[this.LATER_VIEW_INDEX].count = data.data.count
      this.$set(this.favDataMap, 'LATER_VIEW', cardList)
    },
    // 收藏夹详情
    async loadFavDetail(id) {
      const { data } = await getNavFavDetail(id)

      if(data && data.data) {
        const cardList = data.data.map(item => {
          return {
            title: item.title,
            cover: item.cover,
            name: item.upper.name,
            duration: item.duration,
            page: item.page,
            business: this.businessTypeMap[item.type],
            id: item.id,
            bvid: item.bvid,
          }
        })
        this.$set(this.favDataMap, id, cardList)
        return
      }
      this.$set(this.favDataMap, id, [])
    },
    goFav() {
      window.open(`//space.bilibili.com/${this.mid}/favlist`, '_blank')
    },
  },
}

</script>

<style lang="less" scoped>
// hover panel
.van-popper-favorite {
  width: 520px;
  border-radius: 2px;
  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.20);

  .vp-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 518px;
  }

  .tabs-panel {
    overflow-y: auto;
    flex-shrink: 0;
    padding: 12px 0;
    width: 149px;
    height: 100%;
    border-right: 1px solid #E7E7E7;

    overscroll-behavior: none;
  }

  .tab-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 46px;
    cursor: pointer;
    transition: .3s ease;
    .title {
      overflow: hidden;
      width: 85px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .num {
      word-break: normal;
      color: #999;
    }
  }

  .tab-item__all {
    display: block;
    padding: 12px 0;
    width: 100%;
    color: #505050;
    text-align: center;
    font-size: 12px;
    transition: .3 ease;
    &:hover {
      color: #00A1D6;
    }
  }

  .tab-item--normal {
    color: #212121;
    &:hover {
      background-color: #F4F4F4;
    }
  }

  .tab-item--active {
    background-color: #00A1D6;
    color: #FFFFFF;
    .num {
      color: #FFFFFF;
    }
  }

  .favorite-video-panel {
    padding-top: 12px;
    height: 100%;
  }

  .favorite-video-list {
    overflow-y: auto;
    width: 370px;
    height: calc(100% - 46px);

    overscroll-behavior: none;
  }

  .empty-list {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 370px;
    height: calc(100% - 46px);
    color: #999999;
    font-size: 14px;
  }

  .play-view-all {
    display: flex;
  }

  .view-all {
    display: block;
    width: 100%;
    background: #fff;
    color: #212121;
    text-align: center;
    font-size: 14px;
    line-height: 46px;
    cursor: pointer;
    transition: .3s ease;
    &:hover {
      background-color: #F4F4F4;
    }
  }

  .play-all {
    bottom: 0;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-top: 1px solid #E7E7E7;
    background-color: #fff;
    color: #00A1D6;
    line-height: 45px;
    cursor: pointer;
    transition: .3s ease;
    &:hover {
      background-color: #F4F4F4;
    }
    .bilifont {
      margin-right: 10px;
      color: #00A1D6 !important;
      font-size: 14px !important;
    }
    &.view {
      color: #212121;
    }
  }
}

.favorite-icon {
  z-index: 9999;
  width: 20px;
  height: 20px;
  color: #00A1D6;
  vertical-align: middle;
  font-size: 12px;
  cursor: pointer;
}

// 特殊添加的ugc合集卡
.ugc-season-card {
  display: flex;
  flex-shrink: 0;
  padding: 8px 5px 8px 20px;
  height: 77px;
  cursor: not-allowed;
  transition: .3s ease;
  position: relative;
  .season-img {
    width: 108px;
    height: 61px;
  }
  .season-icon {
    background: rgba(0,0,0,0.50);
    border-radius: 2px;
    position: absolute;
    width: 16px;
    height: 16px;
    left: 108px;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    & > img {
      width: 12px;
      height: 12px;
    }
  }
  .season-info {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: space-between;
    margin-left: 12px;
    &__title {
      max-width: 210px;
      height: 37px;
      color: #212121;
      font-weight: 500;
      font-size: 14px;

      display: -webkit-box;
      overflow: hidden;
      /*! autoprefixer: ignore next */
      -webkit-box-orient: vertical;
      text-overflow: -o-ellipsis-lastline;
      text-overflow: ellipsis;
      word-break: break-all;

      -webkit-line-clamp: 2;
    }
    &__up {
      overflow: hidden;
      margin-right: 15px;
      max-width: 210px;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>

<style lang="less">
.van-popover {
  position: absolute;
  left: 300px;
}

.van-popover.van-popper.van-popper-favorite {
  top: 44px !important;
  padding: 0;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px !important;
}
</style>