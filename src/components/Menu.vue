<script setup lang="ts">
  import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/ui/menubar';
  import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';
  import defaultAvatar from '@/assets/images/unlogged-avatar.png';
  import { ref } from 'vue';
  import { loginGithub, logoutGithub } from '@/apis/github';
  import { useGithubStore } from '@/stores/github';
  import { storeToRefs } from 'pinia';

  const githubStore = useGithubStore();
  const { userInfo } = storeToRefs(githubStore);
  const unLoggedAvatar = ref(defaultAvatar);
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
        <MenubarTrigger type="plain" class="ml-auto">
          <Avatar class="w-[20px] h-[20px] mr-2">
            <AvatarImage :src="userInfo.avatar_url || unLoggedAvatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {{ userInfo.login }}
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem @click="loginGithub">登录</MenubarItem>
          <MenubarSeparator />
          <MenubarItem @click="logoutGithub">退出</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
</template>

<style lang="postcss" scoped></style>
