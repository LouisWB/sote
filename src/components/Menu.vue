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
  <div class="menu-container w-full flex items-center bg-white">
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>文件</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab
            <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
    <Menubar class="ml-auto">
      <MenubarMenu>
        <MenubarTrigger>
          <Avatar size="sm" class="mr-[8px]">
            <AvatarImage :src="unLoggedAvatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p class="mr-[11px]">未登录</p>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>登录</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>退出</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
    <!-- <el-dropdown trigger="click" popper-class="menu-dropdown">
      <span class="el-dropdown-link">

      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown class="ml-auto" trigger="click" popper-class="menu-dropdown">
      <span class="el-dropdown-link flex items-center select-none">

      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>登录</el-dropdown-item>
          <el-dropdown-item>登出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown> -->
    <!-- <el-menu :close-on-click-outside="true" :popper-offset="0" mode="horizontal" :ellipsis="false" menu-trigger="click" class="w-full" @select="handleSelect" :show-timeout="0" :hide-timeout="0">
      <el-sub-menu index="1">
        <template #title>文件</template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
          <el-menu-item index="1-4-2">item two</el-menu-item>
          <el-menu-item index="1-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">十大</el-menu-item>
    </el-menu> -->
  </div>
</template>

<style lang="postcss" scoped></style>
