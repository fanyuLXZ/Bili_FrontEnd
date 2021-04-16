<template>
  <div class="be-dropdown"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
    @click="handleClick"
    v-clickoutside="hide">
    <!-- 如果用户没有提供这个触发的模块，默认就给三个点 -->
    <slot v-if="$slots.trigger"
      name="trigger"></slot>
    <div v-else
      class="be-dropdown-trigger">
      <i class="iconfont icon-ic_more"
        title="更多操作"></i>
    </div>
    <slot name="menu"></slot>
    <!-- 如果没有 trigger slot，也没有 menu slot，就把 default slot设置成 menu slot -->
    <slot v-if="!$slots.trigger && !$slots.menu"
      name="default"></slot>
  </div>
</template>
<script>
import { debounce } from 'throttle-debounce'
export default {
  name: 'be-dropdown',
  data() {
    return {
      isDropdown: true,
      open: false,
      timer: null,
    }
  },
  props: {
    trigger: {
      type: String,
      default: 'click',
      validator(val) {
        return [ '', 'click', 'hover' ].indexOf(val) > -1
      },
    },
    align: {
      type: String,
      default: '',
      validator(val) {
        return [ '', 'right', 'left', 'middle' ].indexOf(val) > -1
      },
    },
    append: {
      type: Boolean,
      default: true,
    },
  },
  provide() {
    return { dropdown: this }
  },
  methods: {
    /* eslint-disable */
    handleMouseenter: debounce(300, true, function() {
      if (this.trigger === 'hover') {
        clearTimeout(this.timer)
        this.timer = null
        this.open = true
      }
    }),
    /* eslint-enable */
    handleMouseleave() {
      if (this.trigger === 'hover') {
        this.timer = setTimeout(this.hide, 300)
      }
    },
    handleClick() {
      if (this.trigger === 'click') {
        this.open = !this.open
        this.$emit('dropClick', this.open)
      }
    },
    hide() {
      this.open = false
    },
  },
}
</script>
<style lang="less">
.be-dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
  &-trigger {
    width: 24px;
    height: 24px;
    margin: auto;
    text-align: center;
    .icon-ic_more {
      display: block;
      line-height: 24px;
      color: #222;
      font-size: 24px;
      color: #999;
    }
  }
}

</style>
