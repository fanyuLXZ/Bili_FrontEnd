<template>
  <header class="rank-header">
    <span class="name">{{$HomeLang['26']}}</span>
    <slot name="center"></slot>
    <a v-if="info.type !== 'ad'"
       class="more"
       :href="link"
       target="_blank">{{$HomeLang['4']}}<i class="bilifont bili-icon_caozuo_qianwang"></i></a>
  </header>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    },
    info: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="less">
.rank-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  height: 36px;
  .name {
    display: inline-block;
    color: #212121;
    vertical-align: bottom;
    font-size: 20px;
    line-height: 28px;
  }
  .more {
    display: flex;
    align-items: center;
    padding: 0 0 0 12px;
    width: 58px;
    height: 22px;
    border: 1px solid #C0C0C0;
    border-radius: 2px;
    color: #505050;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    transition: all .2s;
    .bilifont {
      vertical-align: middle;
    }
    &:hover {
      background-color: #f4f4f4;
    }
  }
}
</style>

