<template>
  <!-- 国际版 漫画分区  -->
  <SpaceBetween>
    <MangaPanel :info="info" />
    <MangaRank />
  </SpaceBetween>

</template>

<script>
import SpaceBetween from 'g-public/components/international/SpaceBetween'
import MangaRank from './MangaRank'
import MangaPanel from './MangaPanel'

export default {
  components: {
    SpaceBetween,
    MangaPanel,
    MangaRank,
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