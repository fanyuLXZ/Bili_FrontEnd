<template>
  <a class="h-level m-level" :href="$url_config.help" :lvl="level_info.current_level"
     target="_blank"></a>
</template>

<script>
export default {
  name: "h-level",
  props:["level_info"]
}
</script>

<style scoped>

</style>