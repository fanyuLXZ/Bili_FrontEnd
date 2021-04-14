<template>
  <div :class="{
      'is-checked': value
    }"
    class="be-switch-container">
    <input class="be-switch-input"
      ref="checkbox"
      type="checkbox"
      :value="value"
      :disabled="disabled"
      @change="handleChange" />
    <div class="be-switch">
      <i class="be-switch-cursor"></i>
    </div>
    <div v-if="onLabel && offLabel"
      class="be-switch-label">
      <span>{{ value ? onLabel : offLabel }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'be-switch',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    onLabel: String,
    offLabel: String,
    name: String, // 给当前switch一个名字
  },
  methods: {
    handleChange() {
      this.$emit('input', !this.value)
      this.$emit('change', {
        val: !this.value,
        name: this.name,
      })
    },
  },
}
</script>
<style lang="less">
.be-switch-container {
  position: relative;
  display: inline-block;
  height: 20px;
  cursor: pointer;
  white-space: nowrap;
  &.is-checked {
    .be-switch {
      background-color: #00a1d6;
    }
    .be-switch-cursor {
      left: 17px;
    }
  }
}

.be-switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 16px;
  border-radius: 8px;
  background-color: #ccd0d7;
  vertical-align: middle;
  cursor: pointer;
  transition: background-color .2s ease;
  &-cursor {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    background: #fff;
    transition: left .2s ease;
  }
  &-label {
    display: inline-block;
    line-height: 20px;
    font-size: 14px;
    margin-left: 3px;
    vertical-align: middle;
  }
  &-input {
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
}

</style>
