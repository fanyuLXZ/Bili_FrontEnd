<template>
  <div class="storey-box b-wrap">
    <div class="proxy-box">
      <Proxy v-for="(item, index) in zoneList" :key="`zone-${item.type}-${index}`" :item="item" />
    </div>
    <Elevator :config="zoneConfig" @on-change="updateZoneSort" />
  </div>
</template>

<script>
// import { ZoneConfig, FloorAdConfig } from '../../config/storeyConfig'

import Proxy from './Proxy'
// 电梯
import Elevator from './Elevator'

export default {
  components: {
    Elevator,
    Proxy
  },
  props: {
    config: {}
  },
  data() {
    return {
      zoneConfig: this.config.ZoneConfig,
      zoneList: []
    }
  },
  methods: {
    updateZoneSort(arr) {
      let newZoneList = []
      // 更新排序列表
      for(let i = 0; i < arr.length; i++) {
        let item = Object.assign({}, this.config.ZoneConfig[arr[i]])
        newZoneList.push(item)
      }

      // // 加入广告位
      // for(let j = 0; j < this.config.FloorAdConfig.length; j++) {
      //   newZoneList[this.config.FloorAdConfig[j]['pos']]['ad'] = this.config.FloorAdConfig[j]['dataLocId']
      // }
      this.zoneList = newZoneList
    }
  }
}
</script>

<style lang="less">
.storey-box {
  .proxy-box {
    min-height: 1000px;
  }
}
</style>



