<template>
  <div class="n-tab-links">
    <n-btn v-for="item in items" :key="item.name" :name="item.name" :icon_class="item.icon_class" :is_active="item.is_active" :to="item.to" :num="item.num">
      {{ item.text }}
    </n-btn>
  </div>
</template>

<script>
import NBtn from "@/components/common/nav/n-btn";
export default {
  name: "n-tab-links",
  components: {NBtn},
  props:["items"]
}
</script>

<style>

</style>