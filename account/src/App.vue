<template>
  <div class="security_content">
    <!--  侧边栏一  -->
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>

import sidebar from "./components/home/securityUl"  //侧边栏s
export default {
  name:"App",
  components: {
    sidebar,
  },
}
</script>
