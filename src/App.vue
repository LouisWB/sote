<script setup lang="ts">
  import Menu from './components/Menu.vue';
  import ReposSidebar from './components/ReposSidebar.vue';
</script>

<template>
  <Menu class="mb-[var(--gap)]" />
  <div class="content h-[--content-height] overflow-hidden">
    <div class="content-wrap rounded-md bg-white border h-full flex">
      <div class="repos-wrap min-w-[--repos-min-width]">
        <ReposSidebar />
      </div>
      <div class="files-wrap min-w-[--files-min-width]">11</div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .container {
    div {
      color: red;
    }
  }
</style>
