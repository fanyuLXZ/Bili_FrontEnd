<template>
  <div class="channel-menu-mini">
    <div class="box l-box">
      <a v-for="(item, index) in navList" :key="index" :href="channelLink(item)" target="_blank">
        <span class="name">
          <svg class="svg-icon" aria-hidden="true">
            <use :xlink:href="`#bili-${item.route}`"></use>
          </svg>
          {{item.name}}
        </span>
        <span class="count" v-text="item.count"></span>
      </a>
    </div>
    <div class="box r-box">
      <a v-for="(item, index) in sideList" :key="index" :href="item.url" target="_blank">
        <span class="name">
          <svg class="svg-icon" aria-hidden="true">
            <use :xlink:href="`#bili-${item.icon}`"></use>
          </svg>
          {{item.name}}
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import { getOnline } from '../api'

export default {
  props: {
    menuConfig: {},
  },
  data() {
    return {
      menuList: this.menuConfig.MenuConfig,
      sideList: this.menuConfig.SideMenuConfig,
    }
  },
  computed: {
    navList() {
      let newArr = []
      let cinema = {
        name: '放映厅',
        tid: 23,
        url: '//www.bilibili.com/cinema/',
        route: 'cinema',
        count: '',
        sub: [],
      }

      this.menuList.forEach(item => {
        // tid为空 如首页
        if(!item.tid) {
          return
        }
        
        // 纪录片、电影和电视剧组合为放映厅
        if(![177, 23, 11].includes(item.tid)) {
          newArr.push(item)
        }else {
          cinema.sub.push({
            name: item.name,
            url: item.url,
          })
        }
      })

      newArr.push(cinema)

      return newArr
    },
  },
  methods: {
    channelLink(nav){
      const tid = nav.tid
      if(tid === 13 || tid === 167 || tid === 23){
        //番剧 国创 影视
        return nav.url
      }else {
        return '//www.bilibili.com/v/' + nav.route + '/'
      }
    },
    async updateCount() {
      try {
        const { data } = await getOnline()
        if(data.code === 0) {
          const counts = data.data && data.data.region_count
          let i, len, tid
          if (counts) {
            for (i = 0, len = this.navList.length; i < len; ++i) {
              tid = this.navList[i].tid
              if (tid) {
                this.navList[i].count = counts[tid]
              }
              //放映厅 = 电影 + 电视剧 + 纪录片
              if(this.navList[i].name === '放映厅'){
                this.navList[i].count = (counts[23] || 0) + (counts[11] || 0) + (counts[177] || 0)
              }
            }
          }
        }
      } catch(err) {
        console.log(err)
      }
    },
  },
  mounted() {
    this.updateCount()
  },
}
</script>

<style lang="less">
  .channel-menu-mini {
    padding: 10px 5px;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, .15);
    width: 670px;
    height: 420px;
    display: flex;
    text-align: left;
    .box {
      display: flex;
      flex-direction: column;
      flex-wrap:wrap;
      a {
        display: flex;
        width: 172px;
        height: 24px;
        line-height: 24px;
        padding: 10px 20px !important;
        color: #212121;
        border-radius: 4px;
        transition: all .3s;
        font-size: 14px;
        &:hover {
          color: #212121;
          background: #f4f4f4;
        }
        justify-content: space-between;
        box-sizing: content-box;
      }
      .name {
        svg {
          margin-right: 10px;
        }
      }
      .count{
        color: #999;
      }
    }
    .l-box {
      flex: 2;
    }
    .r-box {
      flex: 1;
      padding-left: 5px;
      border-left: 1px solid #e7e7e7;
    }
    .svg-icon {
      width: 1.8em; 
      height: 1.8em;
      vertical-align: bottom;
      fill: currentColor;
      overflow: hidden;
    }
  }
</style>

