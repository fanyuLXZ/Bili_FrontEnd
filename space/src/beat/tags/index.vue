<template>
  <div v-if="tagList.length" class="be-tags-container">
    <div v-for="(item, index) in tagList"
         :key="index"
         :class="[ 'tag', `${item.class}`]"
    >{{ item.name }}
    </div>
  </div>
</template>
<script>
/**
 * 视频角标
 * 优先逻辑： 付费(isPay) 合作(isCoop) 互动(isInter) new(isNew)
 * 最大数量： 2
 */
export default {
  name: 'be-tags',
  props: {
    isPay: {
      type: Boolean,
      default: false,
    },
    isCoop: {
      type: Boolean,
      default: false,
    },
    isNew: {
      type: Boolean,
      default: false,
    },
    isInter: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tagList() {
      const {isPay, isCoop, isInter, isNew} = this
      const list = [
        {'key': isPay, 'class': 'pay-tag', 'name': '付费'},
        {'key': isCoop, 'class': 'coop-tag', 'name': '合作'},
        {'key': isInter, 'class': 'inter-tag', 'name': '互动'},
        {'key': isNew, 'class': 'new-tag', 'name': 'NEW'},
      ].filter(item => Object.values(item)[0]).slice(0, 2)
      return list
    },
  },
}
</script>
<style lang="less">
.be-tags-container {
  position: absolute;
  top: 4px;
  right: 4px;

  .tag {
    display: inline-block;
    padding: 0 4px;
    font-size: 10px;
    color: #fff;
    text-align: center;
    line-height: 14px;
    border-radius: 2px;
    margin-left: 4px;

    &.pay-tag {
      background-color: #FAAB4B;
    }

    &.coop-tag,
    &.inter-tag {
      background-color: #FB7299;
    }

    &.new-tag {
      background-color: #42a0c4;
    }
  }
}
</style>
