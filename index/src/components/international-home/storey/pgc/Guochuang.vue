<template>
  <div class="guochuang">
    <SpaceBetween>
      <Timeline :info="info" :type="4" />
      <div class="r-con">
        <PgcRank :info="info" :type="4"/>
      </div>
    </SpaceBetween>
    <SpaceBetween>
      <VideoList :info="newInfo" />
      <Rank :info="info" />
    </SpaceBetween>
  </div>
</template>

<script>
import SpaceBetween from 'g-public/components/international/SpaceBetween'
import VideoList from 'g-public/components/international/VideoList'
import Timeline from './Timeline'

import PgcRank from 'g-public/components/international/PgcRank'
import Rank from 'g-public/components/international/Rank'

export default {
  components: {
    SpaceBetween,
    Timeline,
    PgcRank,
    Rank,
    VideoList
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    newInfo() {
      return Object.assign(Object.assign({},this.info) ,{
        type: null,
        name: this.$HomeLang['14']
      })
    }
  }
}
</script>

<style lang="less">
.guochuang {
  .r-con {
    width: 320px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
  .special-recommend {
    height: 110px;
    margin-top: 20px;
  }
  // .zone-list-box {
  //   height: 372px;
  // }
}
</style>
