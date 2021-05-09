<template>
  <transition name="fade">
    <div v-show="show"
         class="modal-container">
      <div class="modal-mask"></div>
      <div class="modal-wrapper"
           style="width: 400px;">
        <div class="modal">
          <div class="modal-header">
            <i class="modal-header-close iconfont icon-ic_close"
               @click="cancel"></i>
            <div class="modal-title">
              <p>{{ title }}</p>
            </div>
          </div>
          <div class="modal-body"
               v-html="body">
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
      show: false,
      title: '提示',
      body: '',
      cancelButton: {
        show: true,
        type: 'default',
        text: '取消',
      },
      confirmButton: {
        show: true,
        type: 'primary',
        text: '确定',
      },
    }
  },
  mounted() {
    if (!this.body) {
      this.body = '操作失败'
      console.warn('请至少提供一个body参数')
    }
  },
  methods: {
    cancel() {
      this.show = false
      this.$el.addEventListener('transitionend', this.destroyMessage)
      this.$emit('cancel')
    },
    confirm() {
      this.show = false
      this.$emit('confirm')
    },
    destroyMessage() {
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    },
  },
}
</script>
<style lang="less"
       src="../modal/modal.less"></style>
