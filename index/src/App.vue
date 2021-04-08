<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>

export default {
  name: 'App',
  metaInfo: {
    meta: [
      {name: 'referrer', content: 'no-referrer'}
    ]
  }
}

</script>