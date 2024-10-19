<script setup lang="ts">
  import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/ui/menubar';
  import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';
  import defaultAvatar from '@/assets/images/unlogged-avatar.png';
  import { ref } from 'vue';

  const unLoggedAvatar = ref(defaultAvatar);

  // const handleSelect = (key: string, keyPath: string[]) => {
  //   console.log(key, keyPath);
  // };
</script>

<template>
  <div class="menu-container w-full flex items-center bg-[--nav-background-color] h-[--nav-height]">
    <Menubar class="w-full">
      <MenubarMenu>
        <MenubarTrigger>文件</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab
            <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarItem>Share</MenubarItem>
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger type="plain">
          <Avatar class="w-[20px] h-[20px]">
            <AvatarImage :src="unLoggedAvatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>登录</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>退出</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
</template>

<style lang="postcss" scoped></style>
