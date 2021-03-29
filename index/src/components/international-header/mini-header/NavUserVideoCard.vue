<template>

  <!-- 用于顶导 收藏夹/历史 卡片 -->
  <!-- business: live/pgc/archive/article/audio -->

  <a class="header-video-card"
     :href="linkMap()"
     v-van-report:nav-videocard.click="`${card.business}-${card.id}`"
     target="_blank">
    <div :class="['video-preview', {'multiple-preview': from === 'FAVORITE'}]">
      <!-- 直播 角标 -->
      <div v-if="card.business === 'live'"
           class="badge"
          :class="{ 'badge-red': card.live_status === 1, 'badge-gray': card.live_status === 0 }">
          {{ card.live_status === 1 ? $HeadLang['56'] : $HeadLang['57'] }}</div>
      <!-- 专栏 角标 -->
      <div v-if="card.business === 'article' && from === 'FAVORITE'" class="badge badge-red">{{$HeadLang['15']}}</div>

      <!-- 预览图 -->
      <NavUserVideoCardImg
        :business="card.business"
        :cover="card.cover"
        :state="card.state"
        :page="card.page"
        :duration="card.duration"
        :from="from"
        :isLater="card.isLater"
        :progress="card.progress" />

      <!-- 历史：观看进度 -->
      <div v-if="from === 'HISTORY' && (card.business === 'archive' || card.business === 'pgc')" >
        <div class="bar"></div>
        <div v-if="card.progress === -1" class="progress" style="width: 100%"></div>
        <div v-else class="progress" :style="{ width: `${(card.progress/card.duration) * 100}%` }"></div>
      </div>

    </div>

    <div class="video-info">
      <!-- 标题 -->
      <div v-if="from === 'HISTORY'" :title="card.title"
          :class="{ 'line-2': card.business !== 'pgc', 'line-1': card.business === 'pgc' }">
           {{ card.title }}</div>
      <div v-else class="line-2" :title="card.title">{{ card.title }}</div>
      <!-- pgc卡 描述文字：例如 “第一话：穿越时空复活的男人” -->
      <div v-if="card.business === 'pgc'" class="desc" :title="card.show_title">
        {{ card.show_title }}
      </div>

      <div class="info">
        <!-- 历史：观看时间 -->
        <div v-if="from === 'HISTORY' && card.view_at" class="info--history">
          <i class="history-device bilifont" :class="historyDevice"></i>
          <span class="date" v-if="dateText !== $HeadLang['58']">{{ dateText }} {{ format(card.view_at * 1000, 'HH:mm') }}</span>
          <span class="date" v-else>{{ format(card.view_at * 1000, 'MM-DD HH:mm') }}</span>
        </div>
        <!-- up 姓名 -->
        <span v-if="card.name" class="up">{{ card.name }}</span>
      </div>
    </div>
  
  </a>
</template>

<script>
import { format } from 'date-fns'
import NavUserVideoCardImg from './NavUserVideoCardImg'

export default {
  name: 'NavUserVideoCard',
  components: {
    NavUserVideoCardImg,
  },
  props: {
    dateText: {
      type: String,
      default: null,
    },
    from: {
      type: String,
      default: null,
    },
    card: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      format,
    }
  },
  computed: {
    historyDevice() {
      if(this.from === 'HISTORY') {
        const device = this.card.device
        const deviceMap = {
          2: 'bili-PC',
          1: 'bili-Mobile',
          3: 'bili-Mobile',
          5: 'bili-Mobile',
          7: 'bili-Mobile',
          4: 'bili-iPad',
          6: 'bili-iPad',
          33: 'bili-TV'
        }
        return deviceMap[device] || ''
      }
    }
  },
  methods: {
    linkMap() {
      const { business: type, id, bvid, pgcUri, progress, page, cid } = this.card
      // progress -> 观看到第 xx 秒
      // page -> 第几p
      switch (type) {
        case 'live':
          return `//live.bilibili.com/${id}`
          break;
        case 'pgc':
          return `${pgcUri}${progress > 0 ? `?t=${progress}` : ''}`
          break;
        case 'cheese':
          return `${pgcUri}${progress > 0 ? `?t=${progress}` : ''}`
          break;
        case 'archive':
          const query = {
            t: progress > 1 ? progress : '',
            p: page > 1 ? page : '',
          }
          const queryString = this.objToQuerystring(query)
          return `//www.bilibili.com/video/${bvid}${this.from === 'FAVORITE' ? '' : queryString}`
          break;
        case 'article':
          return `//www.bilibili.com/read/cv${id}`
          break;
        case 'article-list':
          return `//www.bilibili.com/read/cv${cid}`
          break;
        case 'audio':
          return `//www.bilibili.com/audio/au${id}`
          break;
        default:
          break;
      }
    },
    objToQuerystring(obj) {
      let query = ''
      for(let key in obj) {
        if(obj[key]) {
          query += `&${key}=${obj[key]}`
        }
      }
      return query.replace('&', '?')
    },
  },
}
</script>

<style lang="less" scoped>
.mutil-ellipsis (@line-count) {
  display: -webkit-box;
  overflow: hidden;
  /*! autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-all;

  -webkit-line-clamp: @line-count;
}

.header-video-card {
  display: flex;
  flex-shrink: 0;
  padding: 8px 5px 8px 20px;
  height: 77px;
  cursor: pointer;
  transition: .3s ease;

  &:hover {
    background-color: #F4F4F4;
  }

  .video-preview {
    position: relative;
    text-align: center;
  }

  .multiple-preview {
    width: 108px;
    height: 61px;
  }

  .badge {
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 0 3px;
    height: 16px;
    line-height: 16px;
    border-radius: 1px;
    color: #ffffff;
    text-align: center;
    font-size: 12px;
  }

  .badge-red {
    background: #FB7299;
  }

  .badge-gray {
    background: rgba(0, 0, 0, 0.5)
  }

  .bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 0 0 2px 2px;
    background: #757575;
  }

  .progress {
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 100%;
    height: 3px;
    border-radius: 0 0 2px 2px;
    background: #FB7299;
  }

  .video-info {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: space-between;
    margin-left: 12px;

    .line-2 {
      max-width: 210px;
      height: 37px;
      color: #212121;
      font-weight: 500;
      font-size: 14px;

      .mutil-ellipsis(2);
    }


    .bilifont {
      color: #999;
      vertical-align: middle;
    }

    .line-1 {
      overflow: hidden;
      margin-right: 15px;
      max-width: 210px;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 500;
      color: #212121;
    }

    .desc {
      overflow: hidden;
      max-width: 210px;
      color: #505050;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
    }

    .info {
      display: flex;
      color: #999999;
      font-size: 12px;

      .history-device {
        margin-right: 2px;
      }

      &--history {
        margin-right: 16px;
      }
    }

    .up {
      overflow: hidden;
      margin-right: 15px;
      max-width: 110px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

</style>
