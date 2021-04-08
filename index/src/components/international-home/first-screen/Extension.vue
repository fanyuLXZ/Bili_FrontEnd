<template>
  <div class="extension">
    <StoreyTitle :info="{iconfont: 'bili-tuiguang', title: $HomeLang['5']}">
      <div class="text-info" slot="left" v-if="fireData && fireData.length">
        <a class="text-info-link" :href="item.link" target="_blank" v-for="(item ,index) in fireData" :key="index">
          <i class="bilifont bili-icon_xinxi_huo"></i>
          {{ item.text }}
        </a>
      </div>
    </StoreyTitle>
    <div class="ext-box">
      <ExVideoCard v-for="(item, index) in listSource" :key="`ext-${index}`" :index="index" :info="item.archive" :adData="item" :locId="34" />
    </div>
  </div>
</template>

<script>
import ExVideoCard from './ExVideoCard'
import StoreyTitle from 'g-public/components/international/StoreyTitle'

const MAX_SOURCE_COUNT = 6

export default {
  components: {
    ExVideoCard,
    StoreyTitle
  },
  props: {
    list: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    listSource() {
      let arr = this.list && this.list[34]
      if (!arr) return
      for(let i = 0, len = arr.length; i < len; i++) {
        const item = arr[i]
        if(!item.archive) item.archive = {}
        // 把广告的字段替换到archive的对应字段
        if(item.name) item.archive.title = item.name
        if(item.pic) item.archive.pic = item.pic
        // 增加一个广告的标示字段
        if(item.is_ad) item.archive.is_ad = item.is_ad
        if(item.adver_name) item.archive.adver_name = item.adver_name
      }
      return arr.slice(0, MAX_SOURCE_COUNT) || []
    },
    fireData() {
      const extData = this.list && this.list[1550]
      if(!extData || !extData.length) return

      return extData.map(item => ({
          link: item['url'] || '',
          text: item['name'] || item['title'] || ''
        })).splice(0, 3)
    }
  }
}
</script>

<style lang="less">
.extension {
  width: 1286px;
  .text-info-link {
    margin-right: 10px;
  }
  .ext-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>

