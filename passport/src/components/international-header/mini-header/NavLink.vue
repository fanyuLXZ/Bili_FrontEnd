<template>
  <div class="nav-link">
    <ul class="nav-link-ul" :class="{'mini': navType === 0}">
      <li class="nav-link-item" v-van-report:mininav-click.click="`首页`" @mouseover="popoverChannelShow = true">
        <a class="link" href="//www.bilibili.com" v-if="navType !== 0">
          <i class="bilifont bili-icon_dingdao_zhuzhan"></i>
          {{$HeadLang['38']}}
        </a>
        <van-popover
            popper-class="popover-channe"
            placement="bottom-start"
            :open-delay=300
            trigger="hover"
            transition="slide-fade"
            :visible-arrow="false"
            v-else>
          <ChannelMenu :menuConfig="menuConfig" v-if="popoverChannelShow" />
          <a slot="reference" class="link" href="//www.bilibili.com">
            <svg class="navbar_logo"
                 aria-hidden="true"
                 :viewBox="inlineSvgs.logo.viewBox"
                 v-html="inlineSvgs.logo.children"
            ></svg>
            <!-- <i class="bilifont bili-Navbar_logo" v-if="!navType"></i> -->
            {{$HeadLang['38']}}
            <svg class="navbar_pullup"
                 aria-hidden="true"
                 :viewBox="inlineSvgs.pullup.viewBox"
                 v-html="inlineSvgs.pullup.children"
            ></svg>
            <!-- <i class="bilifont bili-general_pullup_s" v-if="!navType"></i> -->
          </a>
        </van-popover>
      </li>
      <li class="nav-link-item" v-van-report:mininav-click.click="`番剧`">
        <a class="link" href="//www.bilibili.com/anime/" target="_blank">{{$HeadLang['1']}}</a>
      </li>
      <li class="nav-link-item" v-van-report:mininav-hover.mouseenter="`游戏中心`" @mouseover="popoverGameShow = true">
        <van-popover
            popper-class="popover-game"
            placement="bottom-start"
            :open-delay=300
            :offset=-50
            transition="slide-fade"
            trigger="hover">
          <iframe v-if="popoverGameShow" src="https://www.bilibili.com/page-proxy/game-nav.html" frameborder="0" width="100%" height="100%"></iframe>
          <a slot="reference" class="link" href="https://game.bilibili.com/platform/" target="_blank" v-van-report:mininav-click.click="`游戏中心`">{{$HeadLang['3']}}</a>
        </van-popover>
      </li>
      <li class="nav-link-item" v-van-report:mininav-hover.mouseenter="`直播`" @mouseover="popoverLiveShow = true">
        <van-popover
            popper-class="popover-live"
            placement="bottom-start"
            :open-delay=300
            :offset=-50
            transition="slide-fade"
            trigger="hover">
          <iframe v-if="popoverLiveShow" src="https://live.bilibili.com/blackboard/dropdown-menu.html" frameborder="0" width="100%" height="100%"></iframe>
          <a slot="reference" class="link" href="//live.bilibili.com" target="_blank" v-van-report:mininav-click.click="`直播`">{{$HeadLang['39']}}</a>
        </van-popover>
      </li>
      <li class="nav-link-item" v-van-report:mininav-click.click="`会员购`">
        <a class="link" href="//show.bilibili.com/platform/home.html?msource=pc_web" target="_blank">{{$HeadLang['4']}}</a>
      </li>
      <li class="nav-link-item" v-van-report:mininav-hover.mouseenter="`漫画`" @mouseover="popoverMangaShow = true">
        <van-popover
            popper-class="popover-manga"
            placement="bottom-start"
            :open-delay=300
            :offset=-50
            transition="slide-fade"
            trigger="hover">
          <iframe v-if="popoverMangaShow" src="https://manga.bilibili.com/eden/bilibili-nav-panel.html" frameborder="0" width="100%" height="100%"></iframe>
          <a slot="reference" class="link" href="//manga.bilibili.com?from=bill_top_mnav" target="_blank" v-van-report:mininav-click.click="`漫画`">{{$HeadLang['5']}}</a>
        </van-popover>
      </li>
      <li class="nav-link-item" v-van-report:mininav-click.click="`赛事`">
        <a class="link" href="//www.bilibili.com/v/game/match/" target="_blank">{{$HeadLang['69']}}</a>
      </li>
      <LocMenu class="nav-link-item"
               :locsData=locsData
               :locId=2953
               :locId2=2955>
      </LocMenu>
      <LocMenu class="nav-link-item"
               :locsData=locsData
               :locId=2954
               :locId2=2956>
      </LocMenu>
      <li class="nav-link-item" v-van-report:mininav-hover.mouseenter="`下载app`" @mouseover="popoverAppShow = true">
        <van-popover
            popper-class="popover-app-download"
            placement="bottom-start"
            :open-delay=300
            :offset=-100
            transition="slide-fade"
            trigger="hover">
          <p v-if="popoverAppShow" class="txt">{{$HeadLang['7']}}</p>
          <a slot="reference" class="link" href="//app.bilibili.com" target="_blank" v-van-report:mininav-click.click="`下载app`"><i class="bilifont bili-icon_dingdao_xiazaiapp"></i>{{$HeadLang['6']}}</a>
        </van-popover>
      </li>
    </ul>
  </div>
</template>

<script>
import LocMenu from './LocMenu'
import ChannelMenu from './ChannelMenu'

export default {
  components: {
    LocMenu,
    ChannelMenu,
  },
  props: {
    locsData: {},
    menuConfig: {},
    // eslint-disable-next-line vue/require-prop-type-constructor
    navType: 0,
  },
  data() {
    return {
      popoverGameShow: false,
      popoverLiveShow: false,
      popoverMangaShow: false,
      popoverAppShow: false,
      popoverChannelShow: false,
    }
  }
}
</script>


<style lang="less">
.nav-link {
  .bili-icon_dingdao_xiazaiapp {
    margin-right: 2px;
    font-size: 18px;
    vertical-align: middle;
  }
  .nav-link-ul {
    height: 36px;
    display: flex;
    align-items: center;
    &.mini {
      .bili-icon_dingdao_xiazaiapp {
        color: #00a1d6;
      }
    }
    .nav-link-item {
      margin-right: 12px;
      .link {
        font-size: 14px;
        color: #fff;
        text-shadow: 0 1px 1px rgba(0,0,0,0.3);
        // display: inline-block;
        // height: 24px;
        line-height: 32px;
        white-space: nowrap;
        display: flex;
        
        .navbar_logo {
          width: 70px;
          height:32px;
          margin-right:16px;
        }
        .navbar_pullup {
          width: 16px;
          height: 16px;
          align-self: center;
          transform: rotate(180deg);
          transition: transform 0.3s;
        }
      }
    }
  }

  .bili-icon_dingdao_zhuzhan {
    margin-right: 6px;
    font-size: 18px;
    vertical-align: middle;
  }

}

.popover-channe {
  padding: 0;
  width: 670px;
  height: 372px;
  border:none;
  background: transparent;
  box-shadow:none;
}
.popover-game {
  padding: 0;
  width: 680px;
  height: 260px;
  border:none;
  background: transparent;
  box-shadow:none;
}
.popover-live {
  padding: 0;
  width:528px;
  height:266px;
  border:none;
  background: transparent;
  box-shadow:none;
}
.popover-manga {
  padding: 0;
  width:720px;
  height:266px;
  border:none;
  background: transparent;
  box-shadow:none;
}
.popover-app-download {
  padding: 0;
  width:280px;
  height:212px;
  border:none;
  box-shadow:none;
  background: url(//s1.hdslb.com/bfs/static/jinkela/international-home/assets/app-download.png);
  background-size: cover;
  background-position-y: -3px;
  display: flex;
  align-items: flex-end;
  .txt {
    font-size: 14px;
    color: #212121;
    width: 100%;
    text-align: center;
    padding-bottom: 24px;
  }
}

.van-popover.van-popper{
  &.popover-channe, &.popover-game, &.popover-live, &.popover-app-download {
    padding: 0;
    top: 45px !important;
  }
}

</style>
