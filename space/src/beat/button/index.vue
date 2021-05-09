<template>
  <a :class="btnClass"
     :style="styleList"
     class="btn">
    <i v-if="icon"
       :class="iconClass"
       class="btn-icon"></i>
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
<style lang="less" scoped>
.btn {
  display: inline-block;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  padding: 0 10px;
  margin-right: 20px;
  line-height: 30px;
  min-width: 70px;
  transition: all .2s ease;
  font-size: 0;
  color: #666;
  text-align: center;
  vertical-align: middle;
  outline: none;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box
}

.btn:last-of-type {
  margin-right: 0
}

.btn .btn-loading,.btn i {
  margin-right: 8px
}

.btn.default {
  color: #666;
  background-color: #fff;
  border-color: #d9d9d9
}

.btn.primary {
  color: #fff;
  background-color: #00a1d6;
  border-color: #00a1d6
}

.btn.primary:focus,.btn.primary:hover {
  background-color: #00b5e5;
  color: #fff;
  border-color: #00b5e5
}

.btn.ghost,.btn.ghost:focus,.btn.ghost:hover {
  color: #666;
  background-color: #f7f7f7;
  border-color: #d9d9d9
}

.btn.warning {
  color: #fff;
  background-color: #fa0;
  border-color: #fa0
}

.btn.warning:focus,.btn.warning:hover {
  color: #fff;
  background-color: rgba(255,170,0,.7);
  border-color: #fa0
}

.btn.danger {
  color: #fff;
  background-color: #f50;
  border-color: #f50
}

.btn.danger:focus,.btn.danger:hover {
  color: #fff;
  border-color: #f50;
  background-color: rgba(255,85,0,.7)
}

.btn.success {
  background-color: #87d068;
  border-color: #87d068;
  color: #fff
}

.btn.success:focus,.btn.success:hover {
  color: #fff;
  border-color: #87d068;
  background-color: rgba(135,208,104,.7)
}

.btn.info {
  color: #fff;
  border-color: #2db7f5;
  background-color: #2db7f5
}

.btn.info:focus,.btn.info:hover {
  color: #fff;
  border-color: #2db7f5;
  background-color: rgba(45,183,245,.7)
}

.btn:focus,.btn:hover {
  color: #00a1d6;
  background-color: #fff;
  border-color: #00a1d6
}

.btn.btn-small {
  padding: .2rem .3rem;
  line-height: 1rem;
  min-width: 0
}

.btn.btn-large {
  width: 140px;
  height: 40px;
  line-height: 40px
}

.btn.btn-large .btn-content {
  font-size: 14px
}

@keyframes loading-data-v-7b0ffc38 {
  0% {
    transform-origin: 50% 50%;
    transform: rotate(0deg)
  }

  to {
    transform-origin: 50% 50%;
    transform: rotate(1turn)
  }
}

.btn-loading {
  display: inline-block;
  animation: loading-data-v-7b0ffc38 1s linear infinite
}

.btn-content {
  font-size: 12px;
  vertical-align: top
}

.btn-content:hover {
  color: inherit;
  background-color: inherit
}

.btn.btn-disabled {
  cursor: default
}

.btn.btn-disabled,.btn.btn-disabled:hover {
  color: #ccd0d7;
  background: #f4f5f7;
  border-color: #e5e9ef
}

.btn-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle
}
</style>
