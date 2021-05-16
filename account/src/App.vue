<template>
  <div class="security_content">
    <international-header :nav-type="1"/>
    <!--  侧边栏一  -->
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import InternationalHeader from "./components/international-header"
import sidebar from "./components/home/securityUl"  //侧边栏s
export default {
  name:"App",
  components: {
    sidebar,
    InternationalHeader
  },
}
</script>
