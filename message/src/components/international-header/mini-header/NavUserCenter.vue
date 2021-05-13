<template>
  <div class="nav-user-center">
    <div class="user-con search-icon">
      <a href="//search.bilibili.com/" target="_blank">
        <i class="bilifont bili-icon_dingdao_sousuo"></i>
      </a>
    </div>
    <!-- nav接口异常状态显示 -->
    <div class="user-con" v-if="userInfo.fallback">
      <div class="item fall-mini-avatar" v-van-report:fallbackMininav-click.click="`头像`"><a href="//space.bilibili.com/" target="_blank"><img :src="userInfo.face"></a></div>
      <div class="item" v-van-report:fallbackMininav-click.click="`大会员`"><a href="//account.bilibili.com/account/big/" target="_blank"><span class="name">大会员</span></a></div>
      <div class="item" v-van-report:fallbackMininav-click.click="`消息`"><a href="//message.bilibili.com/" target="_blank"><span class="name">消息</span></a></div>
      <div class="item" v-van-report:fallbackMininav-click.click="`动态`"><a href="//t.bilibili.com/" target="_blank"><span class="name">动态</span></a></div>
      <div class="item" v-van-report:fallbackMininav-click.click="`收藏`"><a href="//space.bilibili.com/" target="_blank"><span class="name">收藏</span></a></div>
      <div class="item" v-van-report:fallbackMininav-click.click="`历史`"><a href="//www.bilibili.com/account/history/" target="_blank"><span class="name">历史</span></a></div>
      <div class="item" v-van-report:fallbackMininav-click.click="`创作中心`"><a href="//member.bilibili.com/platform/home" target="_blank"><span class="name">创作中心</span></a></div>
    </div>
    <!-- pending 状态不展示，避免展示抖动 -->
    <div class="user-con signin" v-else-if="loginStatus === 'LOGIN'">

      <!-- 头像 -->
      <NavUserCenterAvatar v-van-report:mininav-hover.mouseenter="`头像`" class="item" :userInfo="userInfo" :lang="lang" />

      <!-- 大会员 -->
      <NavUserCenterVip v-van-report:mininav-hover.mouseenter="`大会员`" class="item" :locsData="locsData" :userInfo="userInfo" />

      <!-- 消息 -->
      <NavUserCenterMessage v-van-report:mininav-hover.mouseenter="`消息`" class="item" :userInfo="userInfo" />

      <!-- 动态 -->
      <NavUserCenterDynamic v-van-report:mininav-hover.mouseenter="`动态`" class="item" :userInfo="userInfo" />

      <!-- 收藏夹 -->
      <NavUserCenterFavorite v-van-report:mininav-hover.mouseenter="`收藏`" class="item" :mid="userInfo.mid" />

      <!-- 历史记录 -->
      <NavUserCenterHistory v-van-report:mininav-hover.mouseenter="`历史`" class="item" />

      <!-- 创作中心 -->
      <div class="item" v-van-report:mininav-click.click="`创作中心`"><a href="//member.bilibili.com/platform/home" target="_blank"><span class="name">{{$HeadLang['8']}}</span></a></div>
    </div>

    <NavUserCenterUnlogin
      v-else-if="loginStatus === 'LOGOUT'"
      class="user-con"
      :locsData="locsData"
      :userInfo="userInfo"
    />


    <!-- 投稿 -->
    <NavUserCenterUpload />

  </div>
</template>

<script>

import NavUserCenterAvatar from './NavUserCenterAvatar'
import NavUserCenterDynamic from './NavUserCenterDynamic'
import NavUserCenterHistory from './NavUserCenterHistory'
import NavUserCenterUpload from './NavUserCenterUpload'
import NavUserCenterFavorite from './NavUserCenterFavorite'
import NavUserCenterMessage from './NavUserCenterMessage'
import NavUserCenterVip from './NavUserCenterVip'
import NavUserCenterUnlogin from './NavUserCenterUnlogin'

import { allCustomReport } from 'g-public/js/utils'

export default {
  name: 'NavUserCenter',
  components: {
    NavUserCenterAvatar,
    NavUserCenterDynamic,
    NavUserCenterHistory,
    NavUserCenterUpload,
    NavUserCenterFavorite,
    NavUserCenterMessage,
    NavUserCenterVip,
    NavUserCenterUnlogin,
  },
  props: {
    locsData: {
      type: Object,
      default: null,
    },
    lang: {
      type: String,
      default: '',
    },
    userInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
    loginStatus: {
      type: String,
      default: 'PENDING',
    },
  },
  data() {
    return {
      bsource: ''
    }
  },
  beforeMount() {
    this.bsource = window.bsource || ''
    allCustomReport({
        CBlock: 'top_bar',
        DBlock: '0',
        type: 'appear',
      })
  }
}
</script>

<style lang="less">
.nav-user-center {
  display: flex;
  flex-shrink: 0;
  .user-con {
    display: flex;
    align-items: center;
    &.search-icon {
      display: none;
      .bilifont {
        font-size: 20px;
      }
    }
    .item {
      position: relative;
      display: flex;
      margin-left: 12px;
      cursor: pointer;
      // align-items: center;

      .txt {
        color: #fff;
        white-space: nowrap;
        font-size: 14px;
        line-height: 32px;
      }

      .name {
        color: #fff;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
        white-space: nowrap;
      }

      .tips {
        position: absolute;
        top: 38px;
        left: -81px;
        padding: 2px 6px 2px 2px;
        border-radius: 4px;
        background: #00A1D6;
        box-shadow: 0 3px 6px 0 rgba(0,0,0,0.20);
        color: #fff;
        white-space: nowrap;
        z-index: 1;
        &::before{
          position: absolute;
          top: -2px;
          left: 50%;
          margin-left: -4px;
          width: 8px;
          height: 8px;
          background: #00a1d6;
          content: "";
          transform: rotate(45deg);
        }
      }
    }
    .fall-mini-avatar {
      width: 36px;
      height: 36px;
      position: relative;
      margin-right: 10px;
      &.unlogin {
        margin-right: 16px;
      }
      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
      .unlogin-mark {
        position: absolute;
        top: -13px;
        left: -3px;
        display: inline-block;
        width: 80px;
        height: 32px;
        border-radius: 16px;
        line-height: 28px;
        font-size: 20px;
        background: #FB7299;
        color: #FFF;
        text-align: center;
        border: 2px solid #fff;
        transform: scale(0.5);
      }
    }
  }
}

.mini-type .nav-user-center .user-con .item .name {
  color: #212121;
  text-shadow: none;
}
</style>

<style lang="less">
// common class for icon
.nav-user-center .bilifont {
  color: #fff;
  vertical-align: middle;
  font-size: 28px;
  cursor: pointer;
}

</style>
