<template>
  <a v-adReport="{data: info, locId: locId}" :data-loc-id="locId" class="banner-card b-wrap" target="_blank">
    <img :src="trimHttp(info.pic)" :alt="info.name" v-if="info.url">
    <i class="gg-icon" v-if="info.is_ad && info.url"></i>
  </a>
</template>

<script>
import { trimHttp } from '../../../public/js/utils'

export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    },
    locId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      trimHttp: trimHttp
    }
  },
}
</script>

<style lang="less">
.banner-card {
  position: relative;
  display: block;
  max-height: 134px;
  margin-bottom: 46px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
  .gg-icon {
    position: absolute;
    left: 5px;
    bottom: 5px;
    width: 38px;
    height: 22px;
    margin-right: 3px;
    z-index: 1;
    vertical-align: middle;
    background-size: cover;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAsCAMAAAD4va5DAAAAolBMVEX///8AAAAAAAAAAAAAAAACAgIAAAAAAAAGBgb5+fns7OwAAACBgYHq6ur9/f17e3tgYGD09PSoqKiLi4sAAAANDQ3V1dW6urqPj48DAwMAAAD////u7u7j4+MbGxv////b29vBwcH19fXt7e3GxsaLi4ukpKRTU1P4+Pjl5eXh4eHX19fLy8vb29v4+PisrKwvLy86Ojr7+/vy8vK4uLhVVVX0WqNFAAAANnRSTlOZAgULFR0IACCBYxIvW4sxJmk0HxoXU0grJQ6TZl0cj1RFcmtENTUmfGFYTUlGcT4rI4dyMhsJ24tXAAABiElEQVRIx+3XyW6DMBCA4WnAzrCUJUDYCpQAIWuTdHn/V6sNqZqFAwSfqv4HJHP4ZECIAabT6ZOQGARnazKqhuBYI1EqjYjSxpsCt6gUaZr8cJoWSZRr0FiObcCIDNvhWoNJTgYjyxypxWhkw+jsiHJsQjVjPGZodMIxSQMBaVKLySIw+R/jxX5lXK2LFYDqK4/tLCeby+UadwA7XAzECj/Py7KcuXVZ5rnv+zHfmEXYzvbuUOwVyU+IGIYhxxLipp4ne15K2Dm/P0Y2ylV8tyQNWF+yEwS6ac4HYC9w0wLT5vr28tvgy7zD3msbhGHqRm369LZqW/Y4FiJxWR7LdQnBMFR6Ylss4KYkSZ4vYkujJ7bDhbjX6YAruGu9nLGW7THvj1Vo3GNzcrIsq64tFtH7YyeELuz3qaT9MQUrcZiKW3HYISw6MSvQddM0dT0gvbH4eIy7MLS41Who9r9nc+hoXX3Auazy/84HZSAmdjwQOriIHKmEDnuCx1ChA7LI0V3sT4XQ351vRIIkxg4KQCAAAAAASUVORK5CYII=);
  }
}
</style>


