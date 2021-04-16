<template>
  <div class="be-scrollbar"
    ref="scrollbar"
    @ps-y-reach-end="psYReachEnd"
    @ps-x-reach-end="psXReachEnd"
    @ps-y-reach-start="psYReachStart"
    @ps-x-reach-start="psXReachStart">
    <slot></slot>
  </div>
</template>
<script>
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

export default {
  name: 'be-scrollbar',
  props: {
    source: {
      type: Array,
      required: true,
      default: function() {
        return []
      },
    },
    // perfect-scrollbar 的配置项传进来就行了
    // https://github.com/utatti/perfect-scrollbar#options
    options: {
      type: Object,
      default: function() {
        return { suppressScrollX: true }
      },
    },
  },
  data() {
    return {
      ps: null,
    }
  },
  mounted() {
    this.ps = new PerfectScrollbar(this.$refs.scrollbar, this.options)
  },
  beforeDestroy() {
    this.ps.destroy()
    this.ps = null
  },
  methods: {
    psXReachStart() {
      this.$emit('ps-x-reach-start')
    },
    psYReachStart() {
      this.$emit('ps-y-reach-start')
    },
    psXReachEnd() {
      this.$emit('ps-x-reach-end')
    },
    psYReachEnd() {
      this.$emit('ps-y-reach-end')
    },
  },
  watch: {
    source: {
      deep: true,
      handler() {
        this.$nextTick(this.ps.update)
      },
    },
  },
}
</script>
<style>
.be-scrollbar-wrapper {
  position: relative;
}

</style>
