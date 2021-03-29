<template>
  <!-- 消息 -->
  <div>
    <nav-im-new :uid="userInfo.mid">
      <a href="//message.bilibili.com/new"
         target="_blank"
         v-van-report:mininav-click.click="`消息`"
         v-van-report:top_bar_click.click="{ module:'消息'}">
        <span class="name">{{$HeadLang['71']}}</span>
      </a>
    </nav-im-new>
  </div>
</template>

<script>
  import NavImNew from '@bplus-common/component.im-nav-v6'

  export default {
    name: 'NavUserCenterMessage',
    props: {
      userInfo: {
        type: Object,
        default: null,
      },
    },
    components: {
      NavImNew,
    },
  }
</script>

<style lang="less"
       scoped>
</style>

<style lang="less">
</style>
