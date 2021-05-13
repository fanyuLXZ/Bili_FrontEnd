<template>
  <!-- 大会员 -->
  <div>
    <van-popover
      popper-class="van-popper-vip"
      placement="bottom" 
      trigger="hover"
      width="260"
      transition="slide-fade"
      @show="handleShow"
      :open-delay="300">
      <Vip
        :isLogin="userInfo.isLogin"
        :vipInfo="vipInfo"
        :vipType="userInfo.vipType"
        :vipStatus="userInfo.vipStatus"
        :allowance="userInfo.allowance_count"
      ></Vip>
      <!-- vip -->
      <div slot="reference" class="mini-vip" @mouseenter="saveVipRedTip">
        <i class="red-point" v-if="vipRedTip"></i>
        <span @click="goVip"
          class="name"
          target="_blank"
          v-van-report:mininav-click.click="`大会员`"
          v-van-report:top_bar_click.click="{ module:'大会员'}">
        {{$HeadLang['73']}}</span>
      </div>

    </van-popover>
  </div>
</template>

<script>
import Vip from './Vip'
import { allCustomReport } from 'g-public/js/utils'

export default {
  name: 'NavUserCenterVip',
  components: {
    Vip,
  },
  props: {
    locsData: {
      type: Object,
      default: null,
    },
    userInfo: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      vipInfo: {
        picAndWords: [],
        words: [],
      },
      vipRedTip: false,
    }
  },
  watch: {
    locsData(data) {
      if(typeof window !== 'undefined' && data && this.userInfo.isLogin) {
        this.handleVipLocData(data)
      }
    },
  },
  methods: {
    handleVipLocData(res) {
      let vipNotify = ''
      if (this.userInfo.vipDueDate && this.userInfo.vip_pay_type === 0) {
        let vipRedTipStatus = localStorage.getItem('vipRedTip')
        let dayDiff = this.dayDiff(this.userInfo.vipDueDate)
        if(
          (dayDiff > -8 && dayDiff < 0 && vipRedTipStatus !== '-7') ||
          (dayDiff > 7 && vipRedTipStatus !== '7') ||
          (dayDiff >= 0 && dayDiff < 7 && vipRedTipStatus !== '0')
        ) {
          this.vipRedTip = true
        }
        if(dayDiff > -8 && dayDiff < 0) {
          vipNotify = `${this.$HeadLang['63']}${-dayDiff}${this.$HeadLang['64']}`
        }
        if(dayDiff === 0) {
          vipNotify = `${this.$HeadLang['65']}`
        }
        if(dayDiff > 0 && dayDiff < 8) {
          vipNotify = `${this.$HeadLang['66']}${dayDiff}${this.$HeadLang['67']}`
        }
      }

      if (!res[2837]) {
        res[2837] = []
      }
      if (!res[2836]) {
        res[2836] = []
      }
      if (!res[2870]) {
        res[2870] = []
      }
      let verticalItems = res[2837].slice(0, 3).map(item => ({
        id: item.id,
        linkUrl: item.url,
        imageUrl: item.pic,
        content: item.name,
        resource: 2837,
        originData: item,
      }))
      let horizontalItems = res[2836].slice(0, 1).map(item => ({
        id: item.id,
        linkUrl: item.url,
        imageUrl: item.pic,
        content: item.name,
        resource: 2836,
        originData: item,
      }))
      let vipInfo = {
        picAndWords: [],
        words: [],
      }
      if(verticalItems.length > 1) {
        vipInfo.picAndWords = verticalItems
      } else if(horizontalItems.length > 0) {
        vipInfo.picAndWords = horizontalItems
      } else {
        vipInfo.picAndWords = []
      }
      let textItems = res[2870].map(item => ({
        type: '通知',
        id: item.id,
        linkUrl: item.url,
        content: item.name,
        resource: 2870,
        originData: item,
      }))
      if(vipNotify) {
        textItems.push({
          type: '提醒',
          content: vipNotify,
          report: 'big_tab_recall_click',
        })
      }
      vipInfo.words = textItems
      this.vipInfo = vipInfo
    },
    saveVipRedTip() {
      if(!this.vipRedTip) {
        return
      }
      this.vipRedTip = false
      if (this.userInfo.vipDueDate) {
        let dayDiff = this.dayDiff(this.userInfo.vipDueDate)
        if(dayDiff < 0) {
          localStorage.setItem('vipRedTip', -7)
        }
        if(dayDiff >= 0 && dayDiff < 7) {
          localStorage.setItem('vipRedTip', 0)
        }
        if(dayDiff > 7) {
          localStorage.setItem('vipRedTip', 7)
        }
      }
    },
    dayDiff(time) {
      let now = new Date()
      let year = now.getFullYear()
      let month = now.getMonth()
      let day = now.getDate()
      let today = new Date(year, month, day)
      return parseInt((today - time) / (1000 * 3600 * 24))
    },
    goVip() {
      if (!this.userInfo.isLogin) {
        allCustomReport({
          c:'top_bar',
          d:'vip',
          type:'click'
        })
      }
      window.open('//account.bilibili.com/account/big', '_blank')
    },
    handleShow() {
      if (!this.userInfo.isLogin) {
        allCustomReport({
          c:"top_bar",
          d:"vip_window",
          type:'appear'
        })
      }
    },
  },
}
</script>

<style lang="less" scoped>
// hover panel
.van-popper-favorite {
  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.20);
  border-radius: 2px;
  width: 280px;
}

.vip-icon {
  width: 28px;
  height: 28px;
  vertical-align: middle;
}


.title {
  font-size: 14px;
  color: #212121;
  margin-bottom: 12px;
}

.recommend {
  display: flex;
  justify-content: space-between;
}

.recommend-item {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  img {
    width: 114px;
    height: 153px;
    border-radius: 2px;
  }
  span {
    margin-top: 8px;
    width: 114px;
    font-size: 14px;
    flex-wrap: wrap;
    color: #212121;
  }
}

.vip-btn {
  margin: 0 auto;
  width: 158px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #00A1D6;
  color: #fff;
  margin-top: 20px;
  border-radius: 2px;
  transition: .3s ease;
  &:hover,
  &:focus {
    background-color: #00b5e5;
    color: #fff;
    border-color: #00b5e5;
  }
}
.mini-vip {
  position: relative;
}
</style>

<style lang="less">
.van-popover.van-popper.van-popper-vip {
  padding: 0;
  border: none;
  top: 44px !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px !important;
}
</style>
