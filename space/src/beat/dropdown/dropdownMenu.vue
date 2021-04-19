<template>
  <transition name="zoom">
    <ul v-show="open"
        :class="[`menu-align-${align}`]"
        :style="{
        left: left + 'px',
        top: top + 'px',
        transformOrigin: transformOrigin
      }"
        class="be-dropdown-menu">
      <slot></slot>
    </ul>
  </transition>
</template>
<script>
export default {
  name: 'be-dropdown-menu',
  data() {
    return {
      left: 0,
      top: 0,
      transformOrigin: 'top',
    }
  },
  mounted() {
    this.$el.ownerDocument.defaultView.addEventListener('scroll', this.getPosition)
  },
  computed: {
    dropdown() {
      let dropdown = this.$parent
      while (!dropdown.isDropdown) {
        dropdown = dropdown.$parent
      }
      return dropdown
    },
    open() {
      return this.dropdown.open
    },
    align() {
      return this.dropdown.align
    },
  },
  methods: {
    getPosition() {
      if (!this.open) return
      const $trigger = this.dropdown.$el
      const trigger = $trigger.getBoundingClientRect()
      const menuWidth = this.$el.clientWidth
      const menuHeight = this.$el.clientHeight
      const triggerWidth = $trigger.clientWidth
      const triggerHeight = $trigger.clientHeight

      let left = trigger.left
      let top = trigger.top + triggerHeight + 10
      this.transformOrigin = 'top'

      switch (this.align) {
        case 'right':
        default:
          left += triggerWidth - menuWidth
          break
        case 'left':
          break
        case 'middle':
          left += (triggerWidth - menuWidth) / 2
          break
      }

      // 针对当前上下滚动的情况做一个处理，让dropdown能够完整展现在视窗里
      // 左右的先不考虑，日后再说
      if (top + menuHeight > document.body.clientHeight) {
        top = trigger.top - menuHeight - 10
        this.transformOrigin = 'bottom'
      }

      this.left = left
      this.top = top
    },
  },
  watch: {
    open(val) {
      if (val) {
        this.$nextTick(this.getPosition)
      }
    },
  },
}
</script>
<style lang="less">
.be-dropdown-menu {
  position: fixed;
  top: 40px;
  z-index: 10;
  padding: 6px 0;
  background-color: #fff;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .14);
}
</style>
