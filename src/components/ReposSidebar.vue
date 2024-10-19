<script setup lang="ts">
  import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/ui/navigation-menu';
  import { ref } from 'vue';
  const activeNavigationMenu = ref('');
  function handleNavigationMenuChange(value: string) {
    activeNavigationMenu.value = value;
    console.log(activeNavigationMenu.value);
  }

  const list = [{ index: '1' }, { index: '2' }];
</script>

<template>
  <NavigationMenu class="p-2">
    <NavigationMenuList class="flex flex-col">
      <NavigationMenuItem v-for="item in list" :key="item.index">
        <NavigationMenuLink href="#" :data-active="activeNavigationMenu === item.index" @click="handleNavigationMenuChange(item.index)" :class="navigationMenuTriggerStyle()">
          Documentation1
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
