<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.nav {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  white-space: nowrap;
  &>li {
    display: inline-block;
    margin: 5px;
  }
  .tag {
    $raduis: 14px;
    display: inline-block;
    padding: 0 20px;

    border: 1px solid;
    white-space: nowrap;
    color: #a9a9a9;
    border-radius: $raduis;
    font-size: $raduis;
    line-height: $raduis * 2;
    &:hover {
      border-color: orange;
    }
    &.router-link-active {
      color: orange;
    }
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.nav
  li.nav-tag(v-for="tag in tags"): router-link.tag(:to="tag.to") {{tag.tag}}

</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>


export default {
  name: 'nav',
  data() {
    return {
      msg: 'this is from nav.vue',
      tags: [
        { tag: '转盘抽奖', to: '/rotary-table' },
        { tag: '一些测试', to: '/test' }
      ]
    }
  },
  methods: {

  }
}
</script>
