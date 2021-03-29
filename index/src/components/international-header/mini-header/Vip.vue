<template lang="html">
  <div class="vip-m">
    <div class="bubble-traditional">
      <div class="recommand">
        <div class="title">
          {{$HeadLang['59']}}
        </div>
        <div class="bubble-col" :class="`bubble-col-${col}`" v-if="vipInfo.picAndWords.length > 0">
          <div class="item" v-for="(item, index) in vipInfo.picAndWords" :key="index">
            <a class="pic" target="_blank" :href="item.linkUrl" @click="reportLocs(item, 'click')">
              <img :src="trimHttp(item.imageUrl)" :alt="item.content" :width="size[col].width" :height="size[col].height" />
            </a>
            <a class="recommand-link" target="_blank" :href="item.linkUrl" @click="reportLocs(item, 'click')">{{item.content}}</a>
          </div>
        </div>
        <div class="bubble-col bubble-col-1" v-else>
          <div class="item">
            <a class="pic" target="_blank" href="//account.bilibili.com/account/big">
              <img :src="defaultImg" :width="size[1].width" :height="size[1].height" />
            </a>
            <a class="recommand-link" target="_blank" href="//account.bilibili.com/account/big">{{$HeadLang['60']}}</a>
          </div>
        </div>
        <div class="notify" v-if="vipInfo.words.length > 0">
          <ul class="notify-list">
            <li v-for="(item, index) in vipInfo.words" :key="index">
              <span class="icon">{{item.type}}</span>
              <a target="_blank" :href="item.linkUrl" @click="reportLocs(item, 'click')" v-if="item.linkUrl">{{item.content}}</a>
              <a @click="renew" v-else>{{item.content}}</a>
            </li>
          </ul>
        </div>
        <div class="renew-btn">
          <button @click="renew">
            {{ (vipStatus === undefined || vipStatus === 0) ? $HeadLang['61'] : $HeadLang['62'] }}
          </button>
          <span class="cash" v-if="allowance > 0">{{$HeadLang['68']}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultImg from 'g-public/images/vip-default-banner.png'
import { customReport, getScript, trimHttp, allCustomReport } from 'g-public/js/utils'

export default {
  props: {
    vipInfo: {
      default: {
        picAndWords: [],
        words: [],
      },
    },
    vipType: {},
    vipStatus: {},
    allowance: {
      default: 0,
    },
    isLogin: {},
  },
  data() {
    return {
      defaultImg,
      trimHttp,
      size: {
        1: {width: 230, height: 68},
        2: {width: 107, height: 143},
        3: {width: 72, height: 94},
      },
    }
  },
  computed: {
    col() {
      return this.vipInfo.picAndWords.length
    },
  },
  mounted() {
    customReport('big_tab_show')
    this.vipInfo.picAndWords.forEach(item => {
      this.reportLocs(item, 'show')
    })
    this.vipInfo.words.forEach(item => {
      this.reportLocs(item, 'show')
    })
  },
  methods: {
    reportLocs(item, event) {
      if(item.report) {
        customReport(item.report)
        return
      }
      customReport('header-vip-locs', Object.assign(item.originData, {resouce: item.resource, event: event}))
      if(reportObserver && reportObserver.forceCommit) {
        reportObserver.forceCommit()
      }
    },
    renew() {
      if (!this.isLogin) {
        const spmid =  document.getElementsByTagName('meta').spm_prefix?.content || '0.0'
        allCustomReport({
          c:'top_bar',
          d:'vip_window',
          type:'click'
        },{
          msg:JSON.stringify({
            button: '开通大会员'
            })
        })
        window.open(`https://passport.bilibili.com/login?from_spm_id=${spmid}.top_bar.vip_window`)
        return
      }
      getScript('//s1.hdslb.com/bfs/static/plugin/vip/dist/BiliBiliVipDialog.js', function() {
        new BiliBiliVipDialog({
          type: 1,
          appId: 27,
          returnUrl: window.location.href,
        }, function () {
          location.reload()
        })
      })
    },
  },
}
</script>

<style lang="less">

.mutil-line-ellipsis(@line-count) {
  display: -webkit-box;
  overflow: hidden;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-all;

  -webkit-line-clamp: @line-count;
}
/* stylelint-disable */
.vip-m {
  width: 260px;
  .bubble-traditional {
    padding: 14px;
    .recommand {
      .title {
        color: #212121;
        font-size: 14px;
        margin: 5px 0 12px;
        font-weight: 900;
      }
      .bubble-col {
        .item {
          display: inline-block;
          .pic {
            display: inline-block;
          }
          img {
            border-radius: 2px;
            background: #ccc;
            display: block;
          }
          .recommand-link {
            margin-top: 10px;
            font-size: 14px;
            color: #222222;
            text-align: left;
            .mutil-line-ellipsis(2);
            line-height: 18px;
            overflow: hidden;
            &:hover {
              color: #00a1d6;
            }
          }
          margin-bottom: 7px;
        }
        
        &.bubble-col-1 {
          .item {
            width: 100%;
          }
          img {
            width: 230px;
            height: 68px;
          }
        }
        &.bubble-col-2 {
          display: flex;
          .item {
            width: 50%;
            &:nth-child(2){
              text-align: right;
              .recommand-link {
                margin-left: 8px;
              }
            }
          }
          img {
            width: 107px;
            height: 143px;
          }
        }
        &.bubble-col-3 {
          display: flex;
          .item {
            width: 33%;
            &:nth-child(2){
              text-align: center;
              .recommand-link {
                margin-left: 3px;
              }
            }
            &:nth-child(3){
              text-align: right;
              .recommand-link {
                margin-left: 4px;
              }
            }
          }
          img {
            width: 72px;
            height: 94px;
          }
        }
      }
    }
    .notify {
      border-top: 1px solid #f0f0f0;
      padding: 11px 0 4px 0;
      .notify-list {
        font-size: 14px;
        li {
          margin-top: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:first-child {
            margin-top: 0;
          }
          a {
            color: #222;
            &:hover {
              color: #00a1d6;
            }
          }
          .icon {
            color: #fb7299;
            border: 1px solid #fb7299;
            width: 32px;
            height: 16px;
            line-height: 16px;
            border-radius: 3px;
            text-align: center;
            display: inline-block;
            box-sizing: border-box;
            margin-right: 6px;
          }
        }
      }
    }
    .renew-btn {
      margin-top: 20px;
      text-align: center;
      position: relative;
      button {
        width: 160px;
        height: 32px;
        background: #00a1d6;
        color: #fff;
        border: none;
        border-radius: 2px;
        cursor: pointer;
        font-size: 14px;
        &:hover {
          background: #00b5e5;
        }
      }
      .cash {
        position: absolute;
        right: 25px;
        top: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 20px;
        font-size: 12px;
        background: #f25d8e;
        color: #fff;
        border: 2px solid #fff;
        border-radius: 10px;
      }
    }
  }
}
/* stylelint-enable */
</style>
