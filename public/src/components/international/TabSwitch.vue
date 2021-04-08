<template>
  <div class="tab-switch">
    <div class="tab-switch-item" v-for="(item, index) in tabs"
      :key="`ts-${index}`"
      :class="{'on': selected === index}"
      @mouseover="tabOver(item.value)"
      @click="tabClick(item.value)"
      v-text="getName(item)">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => {
        return []
      }
    },
    selected: {
      type: Number,
      default: 0
    },
    mouseEvent: {
      type: String,
      default: 'click'
    }
  },
  methods: {
    getName(item){
      return item.value === this.selected && item.selectName ? item.selectName : item.name
    },
    tabClick(val) {
      if (this.mouseEvent === 'click') {
        this.onChange(val)
      }
    },
    tabOver(val) {
      if (this.mouseEvent === 'mouseover') {
        this.onChange(val)
      }
    },
    onChange(val) {
      this.$emit('on-change', val)
    }
  }
}
</script>

