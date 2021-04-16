<template>
  <div class="pgc-rank-wrap">
    <span class="number" :class="{'on': index < 3}">{{ index + 1 }}</span>
    <a class="link" :href="info.url" target="_blank">
      <p class="txt">
        <span class="title" :title="info.title">{{ info.title }}</span>
        <span class="update" :class="{ 'movie-update': pgcType === 'movie' }">
          {{ info.new_ep && info.new_ep.index_show }}
        </span>
      </p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    index: {
      type: Number,
      default: 0
    },
    pgcType: {
      type: String,
      default: ''
    }
  }
}
</script>


<style lang="less">
.pgc-rank-wrap {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  &:last-child {
    margin-bottom: 0;
  }
  .number {
    font-size: 14px;
    color: #999;
    width: 18px;
    height: 18px;
    text-align: center;
    line-height: 18px;
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    &.on {
      color: #fff;
      background: #00a1d6;
    }
  }
  .link {
    display: inline-block;
  }
  .txt {
    width: 290px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    
    .title {
      width: 198px;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 500;
    }
    .update{
      font-size: 12px;
      color: #999;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: right;
      min-width: 90px;
    }
    .movie-update {
      min-width: 100px;
    }
  }
}
</style>