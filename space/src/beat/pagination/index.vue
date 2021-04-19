<template>
  <ul v-show="total > 1"
      :class="wrapClasses">
    <li :class="prevClasses"
        title="上一页"
        @click="prev">
      <a>上一页</a>
    </li>
    <li :class="firstPageClasses"
        title="第一页"
        @click="changePage(1)">
      <a>1</a>
    </li>
    <li v-if="current - 3 > 1"
        :class="[prefixCls + '-item-jump-prev']"></li>
    <li v-if="current - 2 > 1"
        :class="[prefixCls + '-item']"
        :title="current - 2"
        @click="changePage(current - 2)">
      <a>{{ current - 2 }}</a>
    </li>
    <li v-if="current - 1 > 1"
        :class="[prefixCls + '-item']"
        :title="current - 1"
        @click="changePage(current - 1)">
      <a>{{ current - 1 }}</a>
    </li>
    <li v-if="current !== 1 && current !== allPages"
        :class="[prefixCls + '-item',prefixCls + '-item-active']"
        :title="current">
      <a>{{ current }}</a>
    </li>
    <li v-if="current + 1 < allPages"
        :class="[prefixCls + '-item']"
        :title="current + 1"
        @click="changePage(current + 1)">
      <a>{{ current + 1 }}</a>
    </li>
    <li v-if="current + 2 < allPages"
        :class="[prefixCls + '-item']"
        :title="current + 2"
        @click="changePage(current + 2)">
      <a>{{ current + 2 }}</a>
    </li>
    <li v-if="current + 3 < allPages"
        :class="[prefixCls + '-item-jump-next']"></li>
    <li v-if="allPages > 1"
        :class="lastPageClasses"
        :title="'最后一页:' + allPages"
        @click="changePage(allPages)">
      <a>{{ allPages }}</a>
    </li>
    <li :class="nextClasses"
        title="下一页"
        @click="next">
      <a>下一页</a>
    </li>
    <span :class="[prefixCls + '-total']">
      <slot>共 {{ total }} 页，</slot>
    </span>
    <span :class="ElevatorClasses">
      跳至
      <input class="space_input" type="text"
             @keyup.enter="changePageInput"> 页
    </span>
  </ul>
</template>
<script>
const prefixCls = 'be-pager'

function isValueNumber(value) {
  return (/^[1-9][0-9]*$/).test(value + '')
}

export default {
  name: 'be-pagination',
  props: {
    current: {
      type: Number,
      default: 1,
      required: true,
    },
    total: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  data() {
    return {
      prefixCls: prefixCls,
    }
  },
  computed: {
    allPages() {
      const allPage = Math.ceil(this.total)
      return (allPage === 0) ? 1 : allPage
    },
    simpleWrapClasses() {
      return [
        `${prefixCls}`,
        `${prefixCls}-simple`,
      ]
    },
    ElevatorClasses() {
      return [
        `${prefixCls}-options-elevator`,
      ]
    },
    simplePagerClasses() {
      return `${prefixCls}-simple-pager`
    },
    wrapClasses() {
      return [
        `${prefixCls}`, {
          'mini': !!this.size,
        },
      ]
    },
    prevClasses() {
      return [
        `${prefixCls}-prev`, {
          [`${prefixCls}-disabled`]: this.current === 1,
        },
      ]
    },
    nextClasses() {
      return [
        `${prefixCls}-next`, {
          [`${prefixCls}-disabled`]: this.current === this.allPages,
        },
      ]
    },
    firstPageClasses() {
      return [
        `${prefixCls}-item`, {
          [`${prefixCls}-item-active`]: this.current === 1,
        },
      ]
    },
    lastPageClasses() {
      return [
        `${prefixCls}-item`, {
          [`${prefixCls}-item-active`]: this.current === this.allPages,
        },
      ]
    },
  },
  methods: {
    changePageInput(e) {
      let val = e.target.value.trim()
      let page = 0
      if (isValueNumber(val)) {
        val = Number(val)
        if (val !== this.current) {
          const allPages = this.allPages
          if (val > allPages) {
            page = allPages
          } else {
            page = val
          }
        }
      }
      if (page) {
        this.changePage(page)
        e.target.value = ''
      }
    },
    changePage(page) {
      if (this.current !== page) {
        this.$emit('turn-page', page)
      }
    },
    prev() {
      const current = this.current
      if (current <= 1) {
        return false
      }
      this.changePage(current - 1)
    },
    next() {
      const current = this.current
      if (current >= this.allPages) {
        return false
      }
      this.changePage(current + 1)
    },
    fastPrev() {
      const page = this.current - 5
      if (page > 0) {
        this.changePage(page)
      } else {
        this.changePage(1)
      }
    },
    fastNext() {
      const page = this.current + 5
      if (page > this.allPages) {
        this.changePage(this.allPages)
      } else {
        this.changePage(page)
      }
    },
  },
  watch: {
    current() {
      window.scrollTo(0, 0)
    },
  },
}
</script>
<style lang="less"
       src="./pagination.less"></style>
