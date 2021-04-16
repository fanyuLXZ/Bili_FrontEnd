<template>
  <div class="fav-share">
    <div class="mask"></div>
    <iframe class='share-iframe' name="fav-share"
      width="610" height="425"
      :src="`//t.bilibili.com/share/card/index?type=4300&rid=${this.favListDetails.info.id}&repost_code=20000`"
      frameborder="0">
    </iframe>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    id: {},
  },
  mounted() {
    window.addEventListener('message', this.handleShare, false)
  },
  destroyed() {
    window.removeEventListener('message', this.handleShare, false)
  },
  computed: {
    ...mapGetters(['favListDetails']),
  },
  methods: {
    ...mapActions(['sharePlayList']),
    handleShare(e) {
      const res = e.data
      if (res === 'dynamic-share-close') {
        // 在这里关闭iframe，成功、失败、取消都会触发
        this.$store.commit('SHOWFAVSHARE_SUCCESS', false)
      } else if (res === 'dynamic-share-succeed') {
        // 成功，但是不必关闭弹出
        this.sharePlayList({
          rid: this.favListDetails.info.id,
          r_type: 11,
          cnt_type: 1,
        })
        this.$store.commit('SHAREPLAYLIST_SUCCESS')
      }
    },
  },
}
</script>

<style lang="less">
.fav-share{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 2001;
  .share-iframe{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    box-sizing: border-box;
    margin-bottom: 50px;
  }
}
</style>