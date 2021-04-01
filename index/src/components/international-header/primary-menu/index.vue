<template>
  <div class="b-wrap">
    <div class="primary-menu-itnl">
      <PageTab class="report-wrap-module" id="primaryPageTab" />
      <span class="tab-line-itnl"></span>
      <ChannelMenu :menuConfig="menuConfig" :tid="tid" class="report-wrap-module" id="primaryChannelMenu"/>
      <span class="tab-line-itnl none"></span>
      <FriendshipLink :menuConfig="menuConfig" class="report-wrap-module" id="primaryFriendshipLink"/>
    </div>
  </div>
</template>

<script>
import PageTab from './PageTab'
import ChannelMenu from './ChannelMenu'
import FriendshipLink from './FriendshipLink'

export default {
  components: {
    PageTab,
    ChannelMenu,
    FriendshipLink,
  },
  props: {
    menuConfig: {},
    tid: {
      type: Number,
      default: null,
    }
  },
}
</script>

<style lang="less">
.primary-menu-itnl {
  display: flex;
  justify-content: space-between;
  align-items: center;
  //margin: 16px auto 20px auto;
  padding: 20px 0;
  width: 100%;
}
.tab-line-itnl {
  display: inline-block;
  height: 46px;
  border-left: 1px solid #E7E7E7;
  margin: 0 20px;
  &.none {
    margin: 0 24px 0 0px;
  }
}

</style>
