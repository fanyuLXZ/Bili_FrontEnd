<template>
  <SpaceBetween>
    <VideoList :info="info" />

    <!-- pgc rank -->
    <PgcRank v-if="info.type === 'teleplay' || info.type === 'movie' || info.type === 'documentary'" 
      :info="info"
      :type="seasonTypeMap[info.type]"
      :count="10" />

    <!-- other rank -->
    <Rank v-else :info="info" />

  </SpaceBetween>
</template>

<script>
import SpaceBetween from '../../../public/components/international/SpaceBetween'
import VideoList from '../../../public/components/international/VideoList'
import Rank from '../../../public/components/international/Rank'
import PgcRank from '../../../public/components/international/PgcRank'

export default {
  components: {
    SpaceBetween,
    VideoList,
    Rank,
    PgcRank
  },
  data() {
    return {
      seasonTypeMap: {
        movie: 2,
        documentary: 3,
        teleplay: 5,
      }
    }
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
