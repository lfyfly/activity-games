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
* {
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
</style>
