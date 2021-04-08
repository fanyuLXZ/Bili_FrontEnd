<template>
  <international-header :nav-type="1"/>
</template>

<script>
import Vue from 'vue'
import { Image, Danmu, Framepreview, Watchlater, Slide, Lazyload, Backtop, Report } from 'g-public/modules/@bilibili/van'

import InternationalHeader from "./components/international-header";

Vue.use(Image)
Vue.use(Danmu)
Vue.use(Framepreview)
Vue.use(Watchlater)
Vue.use(Slide)
Vue.use(Lazyload, { preload: 100 })
Vue.use(Backtop)
Vue.use(Report)

export default {
  components: {InternationalHeader,}
}
</script>