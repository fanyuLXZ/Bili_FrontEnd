<template>
  <transition name="fade">
    <div v-show="show"
         class="modal-container">
      <div v-if="mask"
           class="modal-mask"></div>
      <div :style="styles"
           class="modal-wrapper">
        <div class="modal">
          <div class="modal-header">
            <i class="modal-header-close iconfont icon-ic_close"
               @click="cancel"></i>
            <div class="modal-title">
              <slot v-if="$slots.title"
                    name="title"></slot>
              <p v-else>{{ title }}</p>
            </div>
          </div>
          <div class="modal-body">
            <slot v-if="$slots.body"
                  name="body"></slot>
            <p v-else>{{ body }}</p>
          </div>
          <be-button-group class="modal-footer">
            <be-button v-if="confirmButton.show"
                       :type="confirmButton.type"
                       @click.native="confirm">{{ confirmButton.text }}
            </be-button>
            <be-button v-if="cancelButton.show"
                       :type="cancelButton.type"
                       @click.native="cancel">{{ cancelButton.text }}
            </be-button>
          </be-button-group>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'modal',
  data() {
    return {
      visible: false,
    }
  },
  props: {
    // 可能存在多个场景公用一个弹窗的情况，这时候我们给每个场景一个名字，在触发事件的时候传递回去以供辨别
    name: {
      type: String,
      default: '',
    },
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '提示',
    },
    body: {
      type: String,
      default: '这是一段内容',
    },
    mask: {
      type: Boolean,
      default: true,
    },
    cancelButton: {
      type: Object,
      default: () => {
        return {
          show: true,
          type: 'default',
          text: '取消',
        }
      },
    },
    confirmButton: {
      type: Object,
      default: () => {
        return {
          show: true,
          type: 'primary',
          text: '确定',
        }
      },
    },
  },
  mounted() {
    if (!this.$slots.body && !this.body) {
      console.log('Modal至少需要输入一个内容！')
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel', {
        name: this.name,
      })
    },
    confirm() {
      this.$emit('confirm', {
        name: this.name,
      })
    },
  },
  computed: {
    styles() {
      const style = {}

      style['width'] = this.pWidth + 'px'
      return style
    },
  },
}
</script>
<style lang="less"
       src="./modal.less"></style>
