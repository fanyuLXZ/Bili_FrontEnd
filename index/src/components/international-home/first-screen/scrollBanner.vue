<van-slide v-if="list.length > 0" ref="ggc" :interval="5000" auto class="ggc" @change="change" @mounted="init">
<template v-for="(item, index) in list">
  <!-- 过滤空帧 null_frame为true则代表这一帧是空帧 -->
  <div v-if="!item.null_frame" :key="`gg-c-${item.src_id}`" :style="`z-index:${list.length - index};`" class="item">
    <a v-adReport="{data: item, locId: locId, noExposure: true}" :data-loc-id="locId" target="_blank">
      <!-- <van-image
        :src="item.pic"
        :alt="item.name"
        :options="{c: 1, q: 100}"
        width="1100"
        height="484">
      </van-image> -->

      <!-- 因为要上报第一张图片的加载时间，故if else -->
      <!--            <img :src="`${trimHttp(item.pic)}@880w_388h_1c_95q`" :alt="item.name" onload="reportfs()" v-if="index === 0">-->
      <!--            <img :src="`${trimHttp(item.pic)}@880w_388h_1c_95q`" :alt="item.name" v-else>-->
      <img :alt="item.name" :src="`${trimHttp(item.pic)}@880w_388h_1c_95q`">
      <p class="title">
        <i v-if="item.is_ad" class="bypb-icon"></i>
        {{ item.name }}
      </p>
    </a>
  </div>
</template>
</van-slide>

<script>
export default {
  name: "scrollBanner"
}
</script>

<style scoped>

</style>