<template>
  <div class="be-tab">
    <ul class="be-tab-inner clearfix">
      <li v-for="(tab, index) in tabs"
        :key="index"
        :ref="tab.name"
        :class="{'is-active': tab.name === value}"
        class="be-tab-item">
        <input class="be-tab-input"
          type="radio"
          :name="`be-tab-${uid}`"
          @change="handleChange"
          :value="tab.name" />
        <span>{{tab.alias}}</span>
      </li>
    </ul>
    <div class="be-tab-cursor"
      :style="{
        transform: `translateX(${left}px)`,
        width: `${width}px`
      }"></div>
  </div>
</template>
<script>
let uid = 0

export default {
  name: 'be-tab',
  data() {
    return {
      uid: uid++,
      currentValue: '',
      left: 0,
      width: 0,
    }
  },
  props: {
    tabs: {
      type: Array,
      default: () => {
        return [{
          link: '',
          active: false,
          text: '',
        }]
      },
    },
    value: {
      type: [ String, Number ],
      default: '',
    },
  },
  mounted() {
    const tab = this.$refs[this.activeTab.name][0]
    this.width = tab.clientWidth
    this.left = tab.offsetLeft
  },
  methods: {
    handleChange(e) {
      this.currentValue = e.target.value
      this.$emit('input', this.currentValue)
    },
  },
  computed: {
    activeTab() {
      return this.tabs.find(item => item.name === this.value)
    },
  },
  watch: {
    currentValue(val) {
      const tab = this.$refs[val][0]
      this.width = tab.clientWidth
      this.left = tab.offsetLeft
    },
  },
}
</script>
<style lang="less">
// 普通tab
.be-tab {
  position: relative;
  &-item {
    position: relative;
    float: left;
    font-size: 14px;
    margin-right: 20px;
    line-height: 28px;
    vertical-align: top;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &.is-active {
      color: #00a1d6;
    }
  }
  &-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    background: #ff3c3c;
    opacity: 0;
    cursor: pointer;
  }
  &-cursor {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    width: 0;
    border-bottom: 1px #00a1d6 solid;
    transform: translateX(0);
    transition: width ease .2s, transform ease .2s;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      margin-left: -3px;
      border: 3px solid #00a1d6;
      border-top: 0;
      border-left-color: transparent;
      border-right-color: transparent;
    }
  }
}

</style>
