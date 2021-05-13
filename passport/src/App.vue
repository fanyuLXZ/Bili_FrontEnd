<template>
  <div id="app">
    <international-header :nav-type="0"/>
    <top-banner/>
    <router-view/>
  </div>
</template>

<script>
  import InternationalHeader from './components/international-header'
  import TopBanner from "./components/top-banner";
  export default {
    components: {TopBanner,InternationalHeader},
  }
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>