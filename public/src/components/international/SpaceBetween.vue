<template>
  <div class="space-between">
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  name: "SpaceBetween"
}
</script>

<style>
.space-between {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 40px
}
</style>