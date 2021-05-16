<template>
  <div class="mini-header">
    <div class="mini-header__content"
      :class="{
        'mini-header--login': loginStatus === 'LOGIN'
      }"
    >
      <NavLink :locsData="locsData" :menuConfig="menuConfig" :navType="navType" />
<!--      <NavSearch v-if="loginStatus !== 'PENDING'" />-->
      <NavUserCenter
        :locsData="locsData"
        :lang="lang"
        :userInfo="userInfo"
        :loginStatus="loginStatus"
      />
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink'

const NavUserCenter = ()=>import(/* webpackMode: "lazy" */ './NavUserCenter.vue')
// const NavSearch = ()=>import(/* webpackMode: "lazy" */ '../search/NavSearch.vue')

export default {
  components: {
    NavLink,
    // NavSearch,
    NavUserCenter,
  },
  props: {
    locsData: {},
    // eslint-disable-next-line vue/require-prop-type-constructor
    navType: 0,
    menuConfig: {},
    lang: {
      type: String,
      default: '',
    },
    userInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      loginStatus: 'PENDING',
    }
  },
  beforeMount() {
    window.onLoginInfoLoaded(({ isLogin }) => {
      this.loginStatus = isLogin ? 'LOGIN' : 'LOGOUT'
    }, true)
  },
  watch: {
    'userInfo.isLogin' (val) {
      this.loginStatus = val ? 'LOGIN' : 'LOGOUT'
    },
  },
}

</script>

<style lang="less">
.mini-header {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 56px;
  &__content {
    box-sizing: border-box;
    padding: 10px 24px;
    line-height: 30px;
    position: relative;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
}
@media screen and (max-width: 1122px) {
  .mini-header__content {
    padding: 10px 12px;
  }
}
</style>
