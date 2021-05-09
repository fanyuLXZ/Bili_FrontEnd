<template>
  <div class="channel-menu-itnl">
    <van-popover
      popper-class="van-popper-channel"
      :placement="placement(index)" 
      trigger="hover"
      transition="slide-fade"
      v-for="(item, index) in sortedMenu" 
      :key="`channel${index}`" 
      :width="popWidth(item)"
      :open-delay="150"
      :offset="offset(index)"
      :disabled="item.hidePopover">
      <div class="sub-container">
        <div class="sub-item">
          <a class="name" :href="subChannelLink(item, subItem)" v-for="(subItem, subIndex) in item.sub" :key="`subchannel-${subIndex}`">{{subItem.name}}</a>
        </div>
      </div>
      <div class="item" slot="reference">
        <a :href="channelLink(item)" class="name" :class="{'on' : setCurrentState(item)}">
          <span>{{item.name}}<em v-show="!item.hideCount">{{getCount(item.count)}}</em></span>
          <i v-if="item.name === '更多'" class="bilifont bili-icon_caozuo_xiangyou-copy"></i>
        </a>
      </div>
    </van-popover>
  </div>
</template>

<script>
import { getOnline } from 'g-public/api'

export default {
  props: {
    menuConfig: {},
    tid: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      menuList: this.menuConfig.MenuConfig,
      isWide: true,
      countData: {}, //用于存储online 接口返回的count
    }
  },
  computed: {
    sortedMenu() {
      // wide [动画，音乐，舞蹈，科技，生活，时尚，娱乐，放映厅，动物圈，单机游戏]
      // wide [番剧，国创，游戏，数码，鬼畜，广告，影视，搞笑，美食圈，VLOG]

      // small [动画，音乐，舞蹈，科技，生活，时尚，娱乐，放映厅]
      // small [番剧，国创，游戏，数码，鬼畜，广告，影视, 更多]

      // [isForceNarrow] 兼容逻辑 如果有这个标示 菜单导航保持窄屏模式
      const isForceNarrow = (typeof window !== 'undefined') ? window.isForceNarrow : false
      const extraList = this.isWide && !isForceNarrow ? 
        this.menuConfig.ChannelMenuConfig
      : [ {
          name: '更多',
          subMenuSize: 162,
          hideCount: true,
          sub: this.menuConfig.ChannelMenuConfig,
      } ]
      return [ ...this.navList, ...extraList].map(item => {
        if (item.name === '放映厅') {
          return {
            ...item,
            count: (this.countData[23] || 0) + (this.countData[11] || 0) + (this.countData[177] || 0)
          }
        } else {
          return {
            ...item,
            count: this.countData[item.tid],
          }
        }
      })
    },
    navList() {
      const sortedArr = this.swapArrayItemByTid(3, 167)
      const newArr = sortedArr.filter(item=>item.tid && ![177, 23, 11].includes(item.tid))

      const sub = sortedArr.filter(item=>[177, 23, 11].includes(item.tid)).map(item=>{return { ...item, combination: true }})
      const cinema = {
        name: '放映厅',
        tid: 23,
        url: '//www.bilibili.com/cinema/',
        count: '',
        subMenuSize: 68,
        combination: true,
        sub,
      }

      this.$set(cinema, 'selected', false)

      return newArr.concat([cinema]).filter(item => !item.isHide)
    },
  },
  methods: {
    popWidth(item) {
      return item.subMenuSize || 0
    },
    placement(index) {
      return index % 2 ? 'bottom-start' : 'top-start'
    },
    offset(index) {
      return index % 2 ? -10 : 10
    },
    channelLink(nav){
      // const tid = nav.tid
      if(nav.name === '更多') {
        return 'javascript:;'
      }
      if(nav.combination){
        //组合的item 直接返回url
        return nav.url
      }else {
        return '//www.bilibili.com/v/' + nav.route + '/'
      }
    },
    subChannelLink(nav,sub){
      return sub.combination || !sub.tid ? sub.url : `//www.bilibili.com/v/${nav.route}/${sub.route}/`
    },
    async updateCount() {
      const { data } = await getOnline()
      if(data.code === 0 && data.data) {
        this.countData = data.data.region_count
      }
    },
    getCount(num) {
      return (num > 999 ? '999+' : num) || '--'
    },
    onSize() {
      this.isWide = (document.body.clientWidth || window.screen.width || window.innerWidth) > 1438
    },
    swapArrayItemByTid(fromTid, toTid) {
      const newArr = [...this.menuList]
      const [ guochuang, yinyue ] = [newArr.find(i=>i.tid===fromTid), newArr.find(i=>i.tid===toTid)]
      newArr[newArr.findIndex(i=>i.tid===fromTid)] = yinyue
      newArr[newArr.findIndex(i=>i.tid===toTid)] = guochuang
      return newArr
    },
    setCurrentState(item) {
      let _tid = this.tid
      //纪录片、电影、电视剧聚合到放映厅
      if(_tid === 177 || _tid === 11){
        _tid = 23
      }
      return item.tid === _tid
    }
  },
  mounted() {
    this.updateCount()

    this.onSize()
    window.addEventListener('resize', ()=>this.onSize())
  },
}

</script>

<style lang="less">
.van-popper-channel {
  padding: 5px 10px;
  border-radius: 3px;
  min-width: 0;
  .sub-container {
    display: flex;
  }
  .sub-item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    max-height: 148px;
    .name {
      display: block;
      font-size: 12px;
      padding: 10px 13px;
      height: 37px;
    }
  }
  .popper__arrow {
    margin-left: -45px;
  }
}

.channel-menu-itnl {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 5rem;
  height: 68px;
  flex: 1;
  .item {
    cursor: pointer;
    display: flex;
    //width: 28px;
    height: 34px;
    .name {
      font-size: 14px;
      display: flex;
      align-items: center;
      white-space: nowrap;
      em {
        font-style: normal;
        font-size: 12px;
        display: inline-block;
        background: #73C9E5;
        border-radius: 2px;
        color: #fff;
        margin-left: 1px;
        transform: scale(.85);
        // padding: 1px 2px 0 2px;
        width: 32px;
        // height: 15px;
        text-align: center;
      }
      &.on {
        color: #00a1d6;
      }
    }
    &.hide {
      // width: 35px;
    }
    
    .bili-icon_caozuo_xiangyou-copy {
      margin-left: 5px;
      transition: all .3s;
    }

    &.selected {
      .name {
        color: #00a1d6;
      }
      .bili-icon_caozuo_xiangyou-copy {
        transform: rotate(180deg);
      }
    }
    
  }
}

</style>
