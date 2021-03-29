<template>
  <div class="bili-banner" :style="animatedBannerShow ? '' : `background-image: url(${bannerImg})`">
    <AnimatedBanner
        v-if="animatedBannerEnabled"
        :config="animatedBannerConfig"
        @change="v => animatedBannerShow = v"
    />
    <!-- 渐变层 -->
    <div class="taper-line"></div>

    <div class="b-logo b-wrap" style="margin: 0">
      <!-- bilibili logo -->
      <a href="//www.bilibili.com"
         class="head-logo"
         v-van-report:headBannerLogo.click>
        <img class="logo-img" :src="logoImg">
      </a>
      <!-- banner 运营位hover展现文字 -->
      <a v-if="bannerTitle"
         :href="bannerLink"
         v-van-report:headBanner.click
         target="_blank"
         class="head-title"
         v-text="bannerTitle"></a>
    </div>
    <!-- banner 运营位跳转链接 -->
    <a v-if="bannerLink"
       :href="bannerLink"
       v-van-report:headBanner.click
       target="_blank"
       class="banner-link"></a>

  </div>
</template>

<script>
import {trimHttp} from '../../public/js/utils'
import AnimatedBanner from "./animated-banner/index.vue"

export default {
  components: {AnimatedBanner},
  props: {
    bid: {
      type: Number,
      default: 142,
    },
    userInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
    bannerData: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      mid: null,
      animatedBannerShow: false,
      animatedBannerEnabled: false,
      locsData: null,
      animatedBannerConfig: null,
    }
  },
  watch: {
    'userInfo': {
      deep: true,
      handler(val) {
        this.mid = val.mid
      }
    },
  },
  computed: {
    locs() {
      return this.locsData || this.bannerData[0] && this.mapBannerData(this.bannerData[0]) || {}
    },
    bannerImg() {
      return trimHttp(this.locs && this.locs.litpic)
    },
    logoImg() {
      return trimHttp(this.locs && this.locs.logo)
    },
    bannerTitle() {
      return this.locs && this.locs.title
    },
    bannerLink() {
      // 通栏连接
      let blink = trimHttp(this.locs && this.locs.jump_url) || null

      // 游戏类型的连接 做特殊的处理 用于上报
      if (blink && blink.indexOf('__MID__') !== -1 && blink.indexOf('__REQUESTID__') !== -1 && this.mid) {
        return blink.replace('__MID__', this.mid || '__MID__').replace('__REQUESTID__', this.locs.request_id || '__REQUESTID__')
      }

      return blink
    },
  },
  beforeMount() {
    // 用于管理后台预览时不从接口获取配置
    if (/\.bilibili\.co$/.test(window.location.host)) {
      this.bannerDataFetched = Promise.resolve(true)
      return
    }
    let a = {
      "code": 0, "message": "0", "ttl": 1, "data": {
        "id": 1,
        "title": "",
        "pos": 0,
        "logo": "https://i0.hdslb.com/bfs/vc/c1e19150b5d1e413958d45e0e62f012e3ee200af.png",
        "litpic": "https://i0.hdslb.com/bfs/vc/ab61ab76a225646e3bcb162b0f8fb2aa47f1f66c.png",
        "jump_url": "",
        "state": 0,
        "is_split_layer": 1,
        "split_layer": "{\"version\":\"1\",\"layers\":[{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/c12c6ceaa5f78de17cd94bb0ad325339b2386ee8.png\",\"id\":0}],\"scale\":{\"initial\":0.5},\"rotate\":{},\"translate\":{\"initial\":[0,-30],\"offset\":[-200,0]},\"blur\":{},\"opacity\":{},\"id\":16,\"name\":\"15_天空\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/4d5ddb371f6d710cf0222a5d0cef46ea3ed5901c.png\",\"id\":0}],\"scale\":{\"initial\":0.5},\"rotate\":{},\"translate\":{\"initial\":[2200,0],\"offset\":[-200,0]},\"blur\":{},\"opacity\":{},\"id\":15,\"name\":\"14_远景亭子\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/c7a1dbf9bbc09c1f867b14a141c4e2f07c4b228d.png\",\"id\":0}],\"scale\":{\"initial\":0.45},\"rotate\":{},\"translate\":{\"initial\":[1500,0],\"offset\":[-300,0]},\"blur\":{},\"opacity\":{},\"id\":17,\"name\":\"13_右侧船坞\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/d605a7076d5fe89d0d7e3d6219bffe4000033a09.png\",\"id\":0}],\"scale\":{\"initial\":0.49},\"rotate\":{},\"translate\":{\"initial\":[-1300,0],\"offset\":[-900,0]},\"blur\":{},\"opacity\":{},\"id\":14,\"name\":\"12_远景桥\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/8d947f22c6a67b8a5d2fbe1424ca2a946802e729.png\",\"id\":0}],\"scale\":{\"initial\":0.45},\"rotate\":{},\"translate\":{\"initial\":[1350,100],\"offset\":[-250,0]},\"blur\":{},\"opacity\":{},\"id\":23,\"name\":\"11_近船\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/65a860abda015ed247d48b1bcc5cbb9ce725d050.png\",\"id\":0}],\"scale\":{\"initial\":0.28},\"rotate\":{},\"translate\":{\"initial\":[900,130],\"offset\":[-200,0]},\"blur\":{},\"opacity\":{\"initial\":0,\"offset\":2,\"offsetCurve\":[0.4065,0.5925,1,1]},\"id\":18,\"name\":\"10_2233坐船\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/963685e7d82d27ba5e8187680814a2d548b5adbe.png\",\"id\":0}],\"scale\":{\"initial\":0.7},\"rotate\":{},\"translate\":{\"initial\":[160,20],\"offset\":[-1000,0]},\"blur\":{},\"opacity\":{},\"id\":24,\"name\":\"09_右侧远处草坪\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/6a6e6e52a18a7731645aa1d93b1d74f2f628f77a.png\",\"id\":0}],\"scale\":{\"initial\":0.7},\"rotate\":{},\"translate\":{\"initial\":[-500,70],\"offset\":[-1200,0]},\"blur\":{},\"opacity\":{},\"id\":13,\"name\":\"08_远草坪\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/3969636231e7668ec91985bb147c89a6b69021c7.png\",\"id\":0}],\"scale\":{\"initial\":0.4},\"rotate\":{},\"translate\":{\"initial\":[-600,40],\"offset\":[-1000,0]},\"blur\":{},\"opacity\":{\"initial\":0,\"offset\":-2},\"id\":20,\"name\":\"07_22放风筝\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/9af4cdc3c81e01522fc4df82a5b7cfa8b03b6b5b.png\",\"id\":0}],\"scale\":{\"initial\":0.4},\"rotate\":{},\"translate\":{\"initial\":[-850,80],\"offset\":[-1450,0]},\"blur\":{},\"opacity\":{\"initial\":0,\"offset\":-2},\"id\":21,\"name\":\"06_33放风筝\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/4d8514308bd6673b215cdb1aadbf12891d784672.png\",\"id\":0}],\"scale\":{\"initial\":0.45},\"rotate\":{},\"translate\":{\"initial\":[-200,30],\"offset\":[-2500,0]},\"blur\":{},\"opacity\":{},\"id\":10,\"name\":\"05_樱花远景\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/9b4f18f9f18c8dca17ba6c0b46a1dcedb649c82b.png\",\"id\":0}],\"scale\":{\"initial\":0.5},\"rotate\":{},\"translate\":{\"initial\":[200,0],\"offset\":[-3000,0]},\"blur\":{},\"opacity\":{},\"id\":11,\"name\":\"04_樱花草坪\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/b24c872ae1ef34ebe794d1631a50b57fbdb0a482.png\",\"id\":0}],\"scale\":{\"initial\":0.45},\"rotate\":{},\"translate\":{\"initial\":[480,30],\"offset\":[-3300,0]},\"blur\":{},\"opacity\":{\"offset\":1.2,\"wrap\":\"alternate\",\"offsetCurve\":[0.09300000000000001,-0.2709999999999999,1,1]},\"id\":7,\"name\":\"03_2233野餐\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/45031fa60ea6084886e80ca9e906803f9a3221b1.png\",\"id\":0}],\"scale\":{\"initial\":0.6},\"rotate\":{},\"translate\":{\"initial\":[3500,0],\"offset\":[-3500,0]},\"blur\":{\"initial\":2},\"opacity\":{},\"id\":19,\"name\":\"02_柳树近景\"},{\"resources\":[{\"src\":\"https://i0.hdslb.com/bfs/vc/17a00335345ecb9f5439069ee2d069772a9cede3.png\",\"id\":0}],\"scale\":{\"initial\":0.5},\"rotate\":{},\"translate\":{\"initial\":[-2000,0],\"offset\":[-6000,0]},\"blur\":{\"initial\":1},\"opacity\":{},\"id\":12,\"name\":\"01_樱花近景\"}],\"extensions\":{\"petals\":{}}}",
        "style": 0,
        "stime": 0,
        "etime": 0,
        "resource_id": 0
      }
    }
    this.bannerDataFetched = a
    this.locsData = a.data
  },
  mounted() {
    this.animatedBanner()
  },
  methods: {
    async animatedBanner() {
      // 先等待获取banner配置
      await this.bannerDataFetched
      // 优先加载展示静态banner
      const staticBannerImg = document.createElement('img')
      staticBannerImg.src = trimHttp(this.locs && this.locs.litpic)
      await new Promise(r => staticBannerImg.onload = r)

      // 获取动画配置
      if (this.locs.is_split_layer === 1) {
        try {
          this.animatedBannerConfig = JSON.parse(this.locs.split_layer)
          this.animatedBannerEnabled = true
        } catch (e) {
          console.error('animated_banner_config parse error')
          this.animatedBannerEnabled = false
        }
      }
    },
    mapBannerData(v) {
      // 将服务端渲染时返回的资源位格式数据映射为新的版头配置接口格式
      return {
        logo: v.litpic,
        litpic: v.pic,
        title: v.name,
        jump_url: v.jump_url,
        request_id: v.request_id,
        is_split_layer: v.is_split_layer,
        split_layer: v.split_layer,
      }
    },
  }
}
</script>

<style lang="less" scoped>
.bili-banner {
  margin: 0 auto;
  position: relative;
  z-index: 0;
  // max-width: 2560px;
  // max-height: 240px;
  min-height: 155px;
  // todo 兼容性？
  height: 9.375vw;
  min-width: 999px;
  //min-height: 155px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;

  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;

  .taper-line {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(rgba(0, 0, 0, .4), transparent);
  }

  .head-title {
    position: absolute;
    bottom: 25px;
    left: 280px;
    line-height: 20px;
    padding: 6px 10px;
    background-color: rgba(0, 0, 0, 0.68);
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    max-width: 350px;
    opacity: 0;
    transition: all 0.2s;
  }

  &:hover {
    .head-title {
      opacity: 1;
    }
  }

  .b-logo {
    position: relative;

    .head-logo {
      position: absolute;
      width: 220px;
      height: 50%;
      min-height: 60px;
      bottom: 10px;
      z-index: 1;
    }

    .logo-img {
      height: 100%;
    }
  }


  .banner-link {
    z-index: 0;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
}

</style>
