<script setup lang="ts">
  import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from '@/ui/navigation-menu';
  import { ref } from 'vue';

  const activeNavigationMenu = ref('');
  const list = [{ index: '1' }, { index: '2' }];
</script>

<template>
  <NavigationMenu class="p-2">
    <NavigationMenuList class="flex flex-col">
      <NavigationMenuLink
        v-for="item in list"
        :key="item.index"
        href="#"
        :data-active="activeNavigationMenu === item.index"
        @click="activeNavigationMenu = item.index"
        class="px-2 py-1 rounded-sm text-sm font-medium text-gray-500 hover:bg-gray-100 [&:not(:last-child)]:mb-1"
      >
        Documentation{{ item.index }}
      </NavigationMenuLink>
    </NavigationMenuList>
  </NavigationMenu>
</template>
