<template>
  <!-- 动态 -->
  <div>
    <nav-dynamic :uid="userInfo.mid"
                 @update="onDynamicUpdate">
      <a href="//t.bilibili.com"
         target="_blank"
         v-van-report:mininav-click.click="`动态`"
         v-van-report:top_bar_click.click="{ module:'动态'}">
        <span class="name">{{$HeadLang['30']}}</span>
      </a>
    </nav-dynamic>
  </div>

</template>

<script>
  import NavDynamic from '@bplus-common/component.nav-dynamic-v3'
  import Bus from 'g-public/js/bus'

  export default {
    name: 'NavUserCenterDynamic',
    props: {
      userInfo: {
        type: Object,
        default: null,
      },
    },
    components: {
      NavDynamic,
    },
    methods: {
      onDynamicUpdate (data) {
        Bus.$emit('on-dynamic-update', data)
      },
    },
  }
</script>

<style lang="less"
       scoped>
</style>

<style lang="less">
</style>
