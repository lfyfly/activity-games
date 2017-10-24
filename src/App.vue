<template lang="pug">
#app
  my-nav
  router-view

</template>

<script>
import myNav from '@/components/nav'
console.log(myNav)
export default {
  name: 'app',
  components: {
    myNav
  }
}
</script>

<style>
html,body,#app{
  height: 100%;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  -moz-tap-highlight-color: transparent
}
li{
  list-style: none;
}
</style>
