<template>
  <div class="h-action">
    <span class="h-f-btn h-follow" v-if="_bili_space_state==='visitor'"><i class=""></i>关注</span>
    <span class="h-f-btn h-unfollow" v-else-if="_bili_space_state==='fans'" @click="REMOVEATTENTION(_bili_space_info.mid)">
        <i class="h-f-icon"></i>已关注
        <span class="icon icon-arrow"></span>
    </span>
    <!---->
    <!---->
    <a href="//message.bilibili.com/#whisper/mid161775300" target="_blank"
                                         class="h-f-btn h-message" v-if="_bili_space_state==='fans'">发消息</a>
<!--    <div class="be-dropdown h-add-to-black">-->
<!--      <div class="be-dropdown-trigger"><i title="更多操作" class="iconfont icon-ic_more"></i></div>-->
<!--      <ul class="be-dropdown-menu menu-align-"-->
<!--          style="left: 977px; top: 249.4px; transform-origin: center top; display: none;">-->
<!--        <li class="be-dropdown-item">加入黑名单</li>-->
<!--        <li class="be-dropdown-item">转为悄悄关注</li>-->
<!--        <li class="be-dropdown-item">个人信息举报</li>-->
<!--      </ul>&lt;!&ndash;&ndash;&gt;</div>-->
  </div>
</template>

<script>
import {mapGetters,mapMutations} from "vuex";
import * as types from "mutations";
export default {
  name: "h-action",
  computed:{
    ...mapGetters([
      '_bili_space_state',
      '_bili_space_info'
    ])
  },
  methods:{
    ...mapMutations([types.REMOVEATTENTION])
  }
}
</script>

<style scoped>

</style>