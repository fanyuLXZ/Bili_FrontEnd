<template>
  <SpaceBetween>
    <ArticleList :info="info" />
    <Rank />
  </SpaceBetween>
</template>

<script>
import SpaceBetween from 'g-public/components/international/SpaceBetween'
import ArticleList from './ArticleList'
import Rank from './Rank'

export default {
  components: {
    SpaceBetween,
    ArticleList,
    Rank
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
