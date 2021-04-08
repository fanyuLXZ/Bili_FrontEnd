<template>
  <div class="video-card-img" :class="{ 'audio-card': business === 'audio' }">
      <van-image
        v-if="business === 'audio'"
        :src="cover"
        class="square-img"
        :options="{c: 1, q: 100 }"
        width="63" 
        height="63">
      </van-image>

      <van-image 
        v-if="business === 'article' || business === 'article-list'"
        class="article-img"
        :src="cover"
        :options="{c: 1, q: 100, e: 1, h: 61, w: 81}"
        width="81"
        height="61">
      </van-image>

      <van-image 
        class="default-img"
        v-if="business !== 'article' && business !== 'article-list' && business !== 'audio'"
        :src="cover"
        :options="{c: 1, q: 100 }"
        width="112" 
        height="63">
      </van-image>

      <!-- 收藏夹： p数 或 时长 -->
      <div v-if="from === 'FAVORITE'">
        <div v-if="isLater && state < 0" class="state-tag">
          已失效
        </div>
        <div v-if="page > 1"
            class="duration-tag">{{ page }}P</div>
        <div v-if="page === 1 && duration"
            class="duration-tag">{{ formatDuration(duration) }}</div>
      </div>
  </div>
</template>

<script>
import { formatDuration } from 'g-public/js/utils'

export default {
  name: 'NavUserVideoCardImg',
  props: {
    cover: {
      type: String,
      default: null,
    },
    business: {
      type: String,
      default: null,
    },
    page: {
      type: Number,
      default: null,
    },
    duration: {
      type: Number,
      default: null,
    },
    progress: {
      type: Number,
      default: null,
    },
    from: {
      type: String,
      default: null,
    },
    state: {
      type: Number,
      default: null,
    },
    isLater: {
      type: Boolean,
      default: null,
    },
  },
  data() {
    return {
      formatDuration,
    }
  },
}
</script>

<style lang="less" scoped>
.video-card-img {

  .default-img {
    flex-shrink: 0;
    width: 108px;
    height: 61px;
    border-radius: 2px;
  }
  .article-img {
    flex-shrink: 0;
    width: 81px;
    height: 61px;
    border-radius: 2px;
  }
  .square-img {
    flex-shrink: 0;
    width: 61px;
    height: 61px;
    border-radius: 2px;
  }
}

.audio-card {
  width: 61px;
  height: 61px;
  position: relative;
  margin: 0 auto;
}

.duration-tag {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  bottom: 4px;
  right: 4px;
  font-size: 12px;
  border-radius: 1px;
  padding: 0px 2px;
  color: #fff;
}

.state-tag {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  bottom: 4px;
  right: 4px;
  font-size: 12px;
  border-radius: 2px;
  padding: 0px 2px;
  color: #fff;
}

</style>
