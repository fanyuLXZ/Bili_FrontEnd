<template>
  <!-- international-manga-rank-item  -->
  <div class="manga-rank-item">
    <span class="rank-number" :class="{'on': index < 3}">{{ index + 1 }}</span>

    <!-- rank 1 -->
    <div class="preview" v-if="index === 0">
      <a
        class="preview-link"
        :href="`//manga.bilibili.com/detail/mc${ info.comic_id }?from=bili_main_rank`"
        target="_blank">
        <van-image
          :src="trimHttp(info.vertical_cover)"
          :options="{c: 1, q: 100}"
          width="112"
          height="149"
        ></van-image>
        <div class="preview-desc">
          <p class="title" :title="info.title">{{ info.title }}</p>
          <p class="style" v-if="info.styles && info.styles.length">
            {{ info.styles.slice(0, 2).map(item => item.name).join(' ') }}
          </p>
          <p class="update" v-if="info.is_finish === -1">
            未开刊
          </p>
          <p v-else class="update" :title="computeUpdate(info.last_short_title)">{{ computeUpdate(info.last_short_title) }}</p>
        </div>
      </a>
    </div>

    <!-- rank other -->
    <a
      v-else
      class="other-link"
      :href="`//manga.bilibili.com/detail/mc${ info.comic_id }?from=bili_main_rank`"
      target="_blank">
      <p class="title" :title="info.title">{{ info.title }}</p>
      <p class="update" v-if="info.is_finish === -1">
        未开刊
      </p>
      <p v-else class="update" :title="computeUpdate(info.last_short_title)">{{ computeUpdate(info.last_short_title) }}</p>
    </a>
  </div>
</template>

<script>
import { formatNum, trimHttp } from "../../../../public/js/utils";

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
    }
  },
  data() {
    return {
      formatNum,
      trimHttp
    };
  },
  methods: {
    computeUpdate(title) {
      if(title == Number(title)) {
        return `更新至${Number(title)}话`
      } else {
        return `更新至${title}`
      }
    }
  },
};
</script>

<style lang="less">
.manga-rank-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 9px 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  .rank-number {
    display: inline-block;
    flex-shrink: 0;
    margin-right: 12px;
    width: 18px;
    height: 18px;
    border-radius: 2px;
    background: #fff;
    color: #999;
    text-align: center;
    font-size: 14px;
    line-height: 18px;
    cursor: default;
    &.on {
      background: #00a1d6;
      color: #fff;
    }
  }

  // rank 1
  .preview {
    position: relative;
    width: 290px;
    .preview-link {
      display: flex;
      img {
        flex-shrink: 0;
        width: 112px;
        height: 149px;
        border-radius: 2px;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 2px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=)
      }
    }

    .preview-desc {
      margin-left: 12px;

      .title {
        font-weight: 500;
        display: -webkit-box;
        overflow: hidden;
        /*! autoprefixer: ignore next */
        -webkit-box-orient: vertical;
        margin-bottom: 10px;
        text-overflow: ellipsis;
        font-size: 14px;
        line-height: 20px;
        -webkit-line-clamp: 2;
      }

      .style {
        color: #999;
        line-height: 18px;
      }

      .update {
        color: #999;
        line-height: 18px;
      }
    }
  }

  // rank other
  .other-link {
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    line-height: 18px;

    .title {
      overflow: hidden;
      width: 198px;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }

    .update {
      overflow: hidden;
      min-width: 80px;
      height: 18px;
      color: #999;
      text-align: right;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
    }
  }


}
</style>
