<template>
  <transition name="fade">
    <div class="be-toast"
      v-show="show">{{ text }}</div>
  </transition>
</template>
<script>
const duration = 2000 // 默认2秒自动消失

export default {
  name: 'be-toast',
  data() {
    return {
      text: '',
      show: false,
    }
  },
  methods: {
    destroyElement() {
      this.$destroy()
      document.body.removeChild(this.$el)
    },
  },
  mounted() {
    setTimeout(() => {
      this.show = false
      this.$el.addEventListener('transitionend', this.destroyElement)
    }, duration)
  },
}
</script>
<style lang="less">
.be-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 12000;
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .14);
  background-color: rgba(0, 0, 0, .8);
}

</style>
