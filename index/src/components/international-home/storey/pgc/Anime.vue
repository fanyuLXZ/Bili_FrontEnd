<template>
  <div class="anime">
    <SpaceBetween>
      <Timeline :info="info" :type="1" />
      <PgcRank :info="info" :type="1" :count="10"/>
    </SpaceBetween>
    <SpaceBetween>
      <VideoList :info="newInfo" :showUp="false" />
      <!-- pgc rank -->
      <PgcRank v-if="info.type === 'teleplay' || info.type === 'movie' || info.type === 'documentary'"
               :info="info"
               :type="seasonTypeMap[info.type]"
               :count="10" />

      <!-- other rank -->
      <Rank v-else :info="info" />
    </SpaceBetween>
  </div>
</template>

<script>
import SpaceBetween from '../../../../public/components/international/SpaceBetween'
import VideoList from '../../../../public/components/international/VideoList'
import Timeline from './Timeline'
import PgcRank from '../../../../public/components/international/PgcRank'
import Rank from '../../../../public/components/international/Rank'

// import SpecialRecommend from './SpecialRecommend'

export default {
  components: {
    SpaceBetween,
    Timeline,
    PgcRank,
    VideoList,
    Rank
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
        name: this.$HomeLang['13']
      })
    }
  },
  data() {
    return {
      seasonTypeMap: {
        movie: 2,
        documentary: 3,
        teleplay: 5,
      }
    }
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
