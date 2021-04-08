<template>
  <div class="anime">
    <SpaceBetween>
      <VideoList :info="newInfo" :showUp="false" type="cheese" fetchName="getCheeseData" />
      <SpecialRecommend :width="320" :height="330" type="cheese" class="report-wrap-module" id="cheese_detail_banner" />
    </SpaceBetween>
  </div>
</template>

<script>
import SpaceBetween from 'g-public/components/international/SpaceBetween'
import VideoList from './CheeseVideoList'

import SpecialRecommend from './CheeseSpecialRecommend'

export default {
  components: {
    SpaceBetween,
    VideoList,
    SpecialRecommend
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
      return Object.assign({},this.info)
    }
  },
  mounted() {
  }
}
</script>

<style lang="less">
.anime {
  .special-recommend {
    height: 314px;
  }
  .zone-list-box {
    height: 376px;
  }
}

</style>
