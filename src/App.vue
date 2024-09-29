<script setup lang="ts">
  import Menu from './components/Menu.vue';
</script>

<template>
  <Menu />
  <router-view></router-view>
</template>

<style lang="postcss" scoped>
  .container {
    div {
      color: red;
    }
  }
</style>
