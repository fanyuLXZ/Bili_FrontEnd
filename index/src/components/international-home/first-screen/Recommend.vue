<template>
  <div class="rcmd-box-wrap">
    <div class="rcmd-box">
      <VdieoCardRecommend
        v-for="(item, index) in recList"
        :key="`${index}_${item.id}`"
        :info="item"
        :spm-id="getSpmId(index)"
        @click="clickReport(index)"
      />
    </div>
    <template v-if="this.abtest === 'a'">
      <div class="btn prev" @click="prev"><i class="bilifont bili-icon_caozuo_xiangzuo"></i></div>
      <div class="btn next" @click="next"><i class="bilifont bili-icon_caozuo_xiangyou"></i></div>
    </template>
    <div class="change-btn" v-if="this.abtest === 'b'" @click="change">
      <i class="bilifont bili-icon_caozuo_huanyihuan" :class="{'active': rotating}"></i>
      <span>换一换</span>
    </div>
    <div class="error-toast" v-if="errorToastVisible">
      暂时没有新内容了，请等下再试哦
    </div>
    <div class="new-guide" v-if="guideVisible">
      支持切换更多推荐视频啦！
      <i class="bilifont bili-icon_sousuo_yichu" @click="guideVisible = false"></i>
    </div>
  </div>
</template>

<script>
import VdieoCardRecommend from 'g-public/components/international/VideoCardRecommend'
import { mapState, mapActions } from 'vuex'

/**
 * > 1870px 展示10个
 * 1870px ~ 1655px 展示8个
 * < 1655px 展示6个
 */

export default {
  components: {
    VdieoCardRecommend
  },
  data() {
    return {
      page: 0,
      errorToastVisible: false,
      guideVisible: false,
      rotating: false,
    }
  },
  computed: {
    ...mapState(['recommendData']),
    abtest() {
      return this.recommendData?.abtest?.group || 'a'
    },
    recList() {
      return this.abtest === 'a'
        ? this.recommendData?.item?.slice(this.page * 10, (this.page + 1) * 10) || []
        : this.recommendData?.item?.slice(0, 10) || []
    }
  },
  mounted() {
    if (this.abtest === 'b') {
      if (!window.localStorage?.getItem('home_recommend_guide')) {
        this.guideVisible = true
        window.localStorage?.setItem('home_recommend_guide', '1')
      }
    }
    if (this.recList) {
      this.exposeReport(0)
    }
  },
  methods: {
    ...mapActions(['fetchRecommendData']),
    exposeReport(freshType) {
      const showCount = (() => {
        if (window.innerWidth > 1870) {
          return 10
        } else if (window.innerWidth > 1655) {
          return 8
        } else {
          return 6
        }
      })()
      window.reportObserver?.reportCustomData?.('appear', {
        spm_id: `333.851.b_${'recommend'.split('').map(v => v.charCodeAt(0).toString(16)).join('')}.0`,
        msg: JSON.stringify({
          fresh_type: freshType,
          is_rec: Number(this.abtest === 'b'),
          card_num: showCount,
          showlist: this.recList.slice(0, showCount).map((v, i) => ({
            id: v.id,
            pos: i + 1,
          })),
        }),
      })
    },
    getSpmId(i) {
      return `333.851.b_${
        'recommend'.split('').map(v => v.charCodeAt(0).toString(16)).join('')
      }.${i + 1}`
    },
    clickReport(i) {
      const spmId = this.getSpmId(i)
      window.reportObserver?.reportCustomData?.('click', {
        spm_id: spmId,
        target_url: encodeURIComponent(`//www.bilibili.com/video/${this.recList[i]?.bvid}?spm_id_from=${spmId}`),
        msg: JSON.stringify({
          is_rec: Number(this.abtest === 'b'),
        }),
      })
    },
    prev() {
      // pageCount = 3
      this.page = (this.page - 1 + 3) % 3
      this.exposeReport(1)
    },
    next() {
      this.page = (this.page + 1) % 3
      this.exposeReport(2)
    },
    change() {
      if (this.rotating) {
        return
      }
      this.rotating = true
      Promise.all([
        this.fetchRecommendData({query: {fresh_type: 3}}).then(res => {
          if (res.code !== 0) {
            throw res
          }
          this.exposeReport(3)
        }).catch(e => {
          this.errorToastVisible = true
          setTimeout(() => {
            this.errorToastVisible = false
          }, 2500)
          console.error(e.message || e)
        }),
        new Promise(r => setTimeout(() => r(), 500)),
      ]).then(() => {
        this.rotating = false
      })

    },
  },
}
</script>

<style lang="less">
@keyframes rcmdRotateloading {
  from { transform: rotate(0); }
  to   { transform: rotate(-360deg); }
}
@keyframes rcmdGuideFloating {
  from { transform: translateY(0px); }
  50% { transform: translateY(5px); }
  to   { transform: translateY(0px); }
}
.rcmd-box-wrap {
  position: relative;
  .rcmd-box {
    display: flex;
    width: 1070px;
    height: 242px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
  }
  .video-card-reco {
    margin-bottom: 10px;
  }
  &:hover {
    .btn {
      opacity: 1;
    }
  }
  .btn {
    opacity: 0;
    position: absolute;
    z-index: 3;
    top: 50%;
    margin-top: -35px;
    width: 32px;
    height: 70px;
    background: rgba(0,0,0,.6);
    color: #fff;
    text-align: center;
    line-height: 70px;
    transition: opacity .2s;
    cursor: pointer;
    .bilifont {
      font-size: 30px;
    }
    &.prev {
      border-radius: 0 2px 2px 0;
      left: 0;
    }
    &.next {
      border-radius: 2px 0 0 2px;
      right: 0;
    }
  }
  .change-btn {
    position: absolute;
    top: 0px;
    right: -36px;
    width: 28px;
    height: 77px;
    border: 1px solid #C0C0C0;
    border-radius: 2px;
    color: #505050;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7px;
    line-height: 14px;
    cursor: pointer;
    i {
      margin-bottom: 4px;
      transition: all .5s;
      &.active {
        animation: 0.5s linear infinite running rcmdRotateloading;
      }
    }
    &:hover {
      background-color: #f4f4f4;
      i {
        transform: rotate(-360deg);
      }
    }
    span {
      display: inline-block;
      font-size: 12px;
      line-height: 14px;
      width: 12px;
    }
  }
  .error-toast {
    position: absolute;
    right: -36px;
    top: -46px;
    width: 204px;
    height: 36px;
    background: rgba(0,0,0,0.70);
    border-radius: 4px;
    color: #fff;
    padding: 10px 12px;
    z-index: 1001;
    font-size: 12px;
    line-height: 17px;
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 78px;
      height: 24px;
      right: 0px;
      top: -22px;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  .new-guide {
    position: absolute;
    right: -53px;
    top: -46px;
    height: 34px;
    width: 200px;
    background: #fb7299;
    border-radius: 4px;
    color: #fff;
    padding: 10px 12px 10px 20px;
    font-size: 13px;
    line-height: 14px;
    z-index: 1001;
    animation: 1s linear infinite running rcmdGuideFloating;
    &::before {
      content: "";
      display: block;
      position: absolute;
      bottom: -4px;
      right: 27px;
      background: #fb7299;
      width: 8px;
      height: 8px;
      transform: rotate(45deg);
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: -17px;
      top: -7px;
      width: 37px;
      height: 43px;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .bili-icon_sousuo_yichu {
      font-size: 18px;
      position: absolute;
      right: 6px;
      top: 10px;
      cursor: pointer;
    }
  }
}
</style>

