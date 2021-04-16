<template>
  <a class="btn"
    :class="btnClass"
    :style="styleList">
    <i class="btn-icon"
      :class="iconClass"
      v-if="icon"></i>
    <span class="btn-content">
      <slot></slot>
    </span>
  </a>
</template>
<script>
export default {
  name: 'be-button',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'default',
    },
    fontColor: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconClass() {
      const list = []
      if (!this.icon) return list
      list.push(this.icon)
      return list
    },
    btnClass() {
      const list = []
      switch (this.type) {
        case 'primary':
          list.push('primary')
          break
        case 'default':
          list.push('default')
          break
        case 'ghost':
          list.push('ghost')
          break
        case 'success':
          list.push('success')
          break
        case 'info':
          list.push('info')
          break
        case 'warning':
          list.push('warning')
          break
        case 'danger':
          list.push('danger')
          break
      }
      switch (this.size) {
        case 'small':
          list.push('btn-small')
          break
        case 'large':
          list.push('btn-large')
          break
      }
      if (this.disabled) {
        list.push('btn-disabled')
      }
      return list
    },
    styleList() {
      const list = {}
      if (this.color) {
        list['background'] = this.color
      }
      if (this.fontColor) {
        list['color'] = this.fontColor
      }
      return list
    },
  },
}
</script>
<style lang="less"
  src="./button.less"
  scoped></style>
