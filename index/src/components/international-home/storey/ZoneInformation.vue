<template>
  <SpaceBetween>
    <VideoList :info="info" />
    <div class="ifmt">
      <h3>{{title}}</h3>
      <a v-if="pic" :href="link" target="_blank">
        <van-image 
          :src="pic"
          :options="{c: 1}"
          width="320" 
          height="330">
        </van-image>
      </a>
    </div>
  </SpaceBetween>
</template>

<script>
import SpaceBetween from 'g-public/components/international/SpaceBetween'
import VideoList from 'g-public/components/international/VideoList'
import { getLocs } from 'g-public/apis/home'

export default {
  components: {
    SpaceBetween,
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
  data() {
    return {
      title: '',
      pic: '',
      link: ''
    }
  },
  methods: {
    async getLocsData() {
      const locid1 = 4082
      const locid2 = 4084
      try {
        const { data } = await getLocs(`${locid1},${locid2}`)
        if(data.code === 0) {
          const d = data.data
          this.title = (d[`${locid1}`][0] && d[`${locid1}`][0].name) || ''
          this.pic = (d[`${locid2}`][0] && d[`${locid2}`][0].pic) || ''
          this.link = (d[`${locid2}`][0] && d[`${locid2}`][0].url) || ''
        }
        /* eslint-disable */
      } catch(err) {}
    }
  },
  mounted() {
    this.getLocsData()
  }
}
</script>

<style lang="less">
.ifmt {
  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    height: 36px;
    color: #212121;
    font-size: 20px;
    font-weight: normal;
  }
}
</style>
