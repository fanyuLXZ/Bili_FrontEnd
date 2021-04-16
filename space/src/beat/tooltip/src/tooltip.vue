<template>
  <transition name="fade">
    <div class="be-tooltip"
      :style="{
        left: left + 'px',
        top: top + 'px'
      }"
      v-show="show">{{ text }}</div>
  </transition>
</template>
<script>
export default {
  name: 'be-tooltip',
  data() {
    return {
      left: 0,
      top: 0,
      show: false,
      text: '呦吼~',
      target: null,
    }
  },
  mounted() {
    const el = this.$el
    const target = this.target

    el.ownerDocument.defaultView.addEventListener('scroll', this.getPosition)
    target.addEventListener('mouseenter', this.startTooltip)
    target.addEventListener('mouseleave', this.destroyElement)
  },
  methods: {
    getPosition() {
      if (!this.show || this.target === null) return
      const target = this.target
      const position = target.getBoundingClientRect()

      this.left = position.left + (target.clientWidth - this.$el.clientWidth) / 2
      this.top = position.top - target.clientHeight - 10
    },
    destroyElement() {
      const el = this.$el
      const target = this.target

      this.show = false
      el.addEventListener('transitionend', () => {
        target.removeEventListener('mouseenter', this.startTooltip)
        target.removeEventListener('mouseleave', this.destroyElement)

        el.parentNode.removeChild(el)
        this.$destroy()
      })
    },
    startTooltip() {
      this.show = true
      this.$nextTick(this.getPosition)
    },
  },
  watch: {
    show(val) {
      if (val) {
        this.startTooltip()
      }
    },
  },
}
</script>
<style lang="less">
.be-tooltip {
  position: fixed;
  z-index: 120;
  height: 26px;
  line-height: 26px;
  padding: 0 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
  background-color: rgba(0, 0, 0, 0.8)
}

</style>
