<template>
  <div class="article-list" v-van-lazyload="getArticleData">
    <StoreyTitle :info="{iconfont: info.type ? `bili-${info.type}` : null, title: info.name, link: info.morelink}">
      <Exchange slot="right" :link="info.morelink" :type="`article`" @on-change="getArticleData" :state="state" />
    </StoreyTitle>
    <div class="zone-list-box">
      <ArticleCard v-for="(item, index) in list" :key="`ac-${index}`" :info="item" />
    </div>
  </div>
</template>

<script>
import StoreyTitle from '../../../../public/components/international/StoreyTitle'
import Exchange from '../../../../public/components/international/Exchange'
import ArticleCard from './ArticleCard'

import { getArticle } from '../../../../public/apis/home'

export default {
  components: {
    StoreyTitle,
    Exchange,
    ArticleCard
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      list: [],
      state: false
    }
  },
  methods: {
    async getArticleData() {
      this.state = false
      try {
        const { data } = await getArticle({ps: 8})
        if(data.code === 0) {
          this.list = data.data
          this.state = true
        }
        /* eslint-disable */
      } catch(err) {}
    }
  },
  mounted() {
    //this.getArticleData()
  }
}
</script>

