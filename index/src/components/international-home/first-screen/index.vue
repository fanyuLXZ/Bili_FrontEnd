<template>
  <div class="first-screen b-wrap">
    <SpaceBetween>
      <Carousel id="reportFirst1" class="report-wrap-module report-scroll-module" :list="locsData[3197] || []" :locId="3197" />
      <Recommend/>
    </SpaceBetween>
    <SpaceBetween id="reportFirst2" class="report-wrap-module report-scroll-module">
      <Extension :list="locsData" />
      <AdWindow :list="locsData[29]" :locId="29" />
    </SpaceBetween>
    <!-- 游戏赛事模块 -->
    <Match id="reportFirst3" class="report-wrap-module report-scroll-module" />
  </div>
</template>

<script>
import SpaceBetween from 'g-public/components/international/SpaceBetween'

import Carousel from './Carousel'
import Recommend from './Recommend'
import Extension from './Extension'
import AdWindow from './AdWindow'
import Match from '../match'

import { mapMutations, mapState } from 'vuex'
// import { getLocs, getRecommend, getOnline } from '../../public/apis/home'
// import { log } from '../../public/js/utils';

export default {
  components: {
    Carousel,
    Recommend,
    Extension,
    AdWindow,
    SpaceBetween,
    Match
  },
  computed: {
    ...mapState(['locsData'])
  },
  methods: {
    ...mapMutations(['SET_LOCS_DATA']),
  }
}
</script>


