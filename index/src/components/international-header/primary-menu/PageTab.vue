<template>
  <div class="page-tab">
    <ul class="con">
      <li>
        <a href="/" v-van-report:headPageTab.click="`首页`">
          <div class="round"><i class="bilifont bili-icon_fenqudaohang_shouye"></i></div>
          <span>{{$HeadLang['46']}}</span>
        </a>
      </li>
      <li>
        <a href="//t.bilibili.com"
           target="_blank"
           @click="handleDynamicTabClick"
           v-van-report:headPageTab.click="'动态'">
          <div class="round yel">
            <i class="bilifont bili-icon_dingdao_dongtai"></i>
            <div class="dynamic-update">
              <van-image 
                v-if="['live', 'up', 'dyn'].some(v => v === info.type)"
                :src="info.icon"
                :options="{c: 1, q: 100}"
                width="36" 
                height="36">
              </van-image>
              <i v-if="info.type && info.type !== 'none'"></i>
            </div>
          </div>
          {{$HeadLang['30']}}
        </a>
      </li>

      <!-- 入口灰度中 排行榜 or 热门 -->
      <li>
        <a href="//www.bilibili.com/v/popular/all" target="_blank" v-van-report:headPageTab.click="`热门`">
          <div class="round orange"><i class="bilifont bili-remen"></i></div>
          {{$HeadLang['81']}}
        </a>
      </li>
      <!-- <li v-else>
        <a href="//www.bilibili.com/v/popular/rank" target="_blank" v-van-report:headPageTab.click="`排行榜`">
          <div class="round blue"><i class="bilifont bili-icon_fenqudaohang_paihangbang"></i></div>
          {{$HeadLang['47']}}
        </a>
      </li> -->

      <li>
        <a :href="channelLink" target="_blank" v-van-report:headPageTab.click="`频道`">
          <div class="round channel">
            <i class="bilifont bili-pindao"></i>
            <div class="dynamic-update">
              <van-image 
                v-if="channelInfo.subscribed_count === 1 && channelInfo.cover"
                :src="channelInfo.cover"
                :options="{c: 1, q: 100}"
                width="36" 
                height="36">
              </van-image>
              <i v-if="channelInfo.notify"></i>
            </div>
          </div>
          <span class="channel-name">{{$HeadLang['80']}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Bus from '../../../public/js/bus'
import { getChannelUpdate, postDynamicEntranceClick } from '../../../api'
import { customReport } from '../../../public/js/utils'

export default {
  data() {
    return {
      info: {},
      channelInfo: {
        cover: null,
        channel_id: null,
        notify: false,
        subscribed_count: null,
      },
      channelLink: '//www.bilibili.com/v/channel',
      dynamicShowReport: false
    }
  },
  mounted() {
    this.loadChannelUpdate()

    Bus.$on('on-dynamic-update', data => {
      /**
       * { icon?: string, mid?: number, type?: string }
       * type枚举类型如下:
       * none-无红点;
       * live-直播维度的更新提醒 展示 头像+红点;
       * up-up主维度的更新提醒 展示 头像+红点;
       * dyn-动态维度的图标提醒 展示 头像+红点;
       * dot-动态维度的红点提醒 展示 红点
       */
      this.info = data

      // 仅上报一次 'headPage_dynamic_show'
      if(!this.dynamicShowReport) {
        this.reportDetailDynamic('headPage_dynamic_show')
        this.dynamicShowReport = true
      }
    })

    // 未登录情况下 'on-dynamic-update' 不触发，无法上报 'headPage_dynamic_show'
    window.onLoginInfoLoaded(({ isLogin }) => {
      if(!isLogin) {
        this.reportDetailDynamic('headPage_dynamic_show')
      }
    }, true)
  },
  methods: {
    async loadChannelUpdate() {
      try {
        const { data } = await getChannelUpdate()
        if(!data.data) return
        this.channelInfo.cover = data.data.cover
        this.channelInfo.channel_id = data.data.channel_id
        this.channelInfo.notify = data.data.notify
        this.channelInfo.subscribed_count = data.data.subscribed_count
        if(this.channelInfo.channel_id) {
          this.channelLink = `//www.bilibili.com/v/channel/${this.channelInfo.channel_id}`
        }
      } catch (_) {
        console.log(_)
      }
    },
    reportDetailDynamic(key) {
      const type = this.info.type || 'none'
      const cover = this.info.icon || ''
      customReport(key, {
        icon_type: ['live', 'up', 'dyn'].some(v => type === v) ? 'avatar' : 'logo',
        mark_type: type,
        cover
      })
    },
    handleDynamicTabClick() {
      const typeMap = { 'none': 0, 'live': 1, 'up': 2, 'dyn': 3, 'dot': 4 }
      postDynamicEntranceClick({
        icon_type: typeMap[this.info.type || 'none'],
        show_uid: this.info.mid,
      })
      this.reportDetailDynamic('headPage_dynamic_click')
    }
  },
}
</script>

<style lang="less">
.mutil-line-ellipsis(@line-count) {
  overflow: hidden;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-all;

  -webkit-line-clamp: @line-count;
}

.page-tab {
  display: flex;
  align-items: center;
  .con {
    display: flex;
    li {
      cursor: pointer;
      width: 66px;
      height: 68px;
      text-align: center;
      font-size: 14px;
      white-space: nowrap;
      border: 1px solid #fff;
      border-radius: 16px;
      transition: all .3s;
      // margin-right: 5px;
      &:hover {
        a {
          color: #00A1D6;
        }
      }
      &.on {
        border-color: #9DD9ED;
        background: #F1FCFF;
        a {
          color: #00A1D6;
        }
      }
      .round {
        position: relative;
        width: 36px;
        height: 36px;
        background: #FF5C7C;
        border-radius: 36px;
        line-height: 36px;
        text-align: center;
        margin: 0 auto 4px auto;
        &.yel {
          background: #fcba2a;
        }
        &.blue {
          background: #00a1d6;
        }
        &.orange {
          background: #FF716D;
        }
        .dynamic-update {
          position: absolute;
          width: 36px;
          height: 36px;
          left: 0;
          top: 0;
          img {
            position: absolute;
            left: 0;
            top: 0;
            width: 36px;
            height: 36px;
            border-radius: 50%;
          }
          i {
            position: absolute;
            right: -2px;
            top: -2px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #fa5a57;
            border: 2px solid #FFFFFF;
          }
        }
        &.channel {
          background: #6DC781;
        }
      }
      .bilifont {
        color: #fff;
        font-size: 28px;
      }
    }

      .channel-name {
        width: 64px;
        height: 20px;
        display: block;
        .mutil-line-ellipsis(1);
      }
  }
}
</style>
