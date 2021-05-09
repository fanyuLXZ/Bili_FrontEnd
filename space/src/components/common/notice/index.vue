<template>
  <div :style="{background: _bili_space_notice.bg_color}"
       class="h-notice">
    <img :src="_bili_space_notice.icon" class="icon-notice"/>
    <a :class="{
        'linkType': _bili_space_notice.url
      }"
       :href='noticLink'
       :style="{color: _bili_space_notice.text_color}"
       :target="_bili_space_notice.url ? '_blank' : ''"
    >
      {{ _bili_space_notice.content }}
    </a>
    <svg v-if="_bili_space_notice.url" height="16px" version="1.1" viewBox="0 0 16 16" width="16px"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>右箭头</title>
      <g id="空间升级" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
        <g id="图标/icon2-一般/icon_into_pink_16-2备份" :fill="_bili_space_notice.text_color" fill-rule="nonzero">
          <g id="icon_into_orange_16">
            <path
                id="icon_enter（#cccccc）"
                d="M8.97808758,10.0391237 L3.82898877,4.92986541 C3.63633403,4.73870131 3.33257673,4.75336217 3.13992199,4.94452627 C2.94726725,5.13569037 2.95657391,5.46099289 3.14922865,5.65215699 L8.66421152,11.1244684 C8.85686626,11.3151546 9.13783545,11.277404 9.33000856,11.0867178 L14.8507713,5.60867124 C15.0434261,5.41750713 15.0527328,5.09220461 14.860078,4.90104051 C14.6679049,4.70987641 14.3634252,4.6949766 14.171252,4.8861407 L8.97808758,10.0391237 Z"
                transform="translate(9.000000, 8.000000) rotate(-90.000000) translate(-9.000000, -8.000000) "></path>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'notice',
  props: ['_bili_space_notice'],
  computed: {
    noticLink() {
      if (!this._bili_space_notice.url) return 'javascript:;'
      return this._bili_space_notice.url
    },
  }
}
</script>
<style lang="less" scoped>
.h-notice {
  height: 42px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: inline-block;
    height: 100%;
    max-width: 1226px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 42px;
    cursor: auto;

    &.linkType {
      cursor: pointer;
    }
  }

  .icon-notice {
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
}
</style>
