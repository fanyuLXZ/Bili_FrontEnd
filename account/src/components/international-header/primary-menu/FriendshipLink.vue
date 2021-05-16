<template>
  <div class="friendship-link">
    <van-popover
      popper-class="van-popper-channel"
      trigger="hover"
      transition="slide-fade"
      v-for="(item, index) in menuConfig.SideMenuConfig" 
      :key="`channel-loc-${index}`" 
      :open-delay="150"
      :width="150"
      :disabled="!item.sub">
      <div style="display: flex">
        <div class="sub-item">
          <a class="name" :href="subItem.url" target="_blank" v-for="(subItem, subIndex) in item.sub" :key="`subchannel-loc-${subIndex}`">{{(subItem.name || '').substring(0,2)}}</a>
        </div>
      </div>
      <div class="item" slot="reference">
        <a :href="item.url" target="_blank" class="name" v-van-report:FriendShipLink.click="item.name">
          <svg class="svg-icon" aria-hidden="true">
            <use :xlink:href="`#bili-${item.icon}`"></use>
          </svg>
          <span>{{item.name}}</span>
        </a>
      </div>
    </van-popover>
  </div>
</template>

<script>
export default {
  props: {
    menuConfig: {},
  },
}
</script>

<style lang="less">
.friendship-link {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 68px;
  width: 289px;
  .item {
    height: 34px;
    // width: 64px;
    display: flex;
    // margin: 0 0 0 25px;
    .name {
      font-size: 14px;
      display: flex;
      align-items: center;
      white-space: nowrap;
      span {
        margin-left: 4px;
      }
    }
  }

  .svg-icon {
    width: 1.8em;
    height: 1.8em;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
