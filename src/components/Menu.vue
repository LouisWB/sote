<script setup lang="ts">
  import { octokit } from '@/hooks/listGithub.ts';
  import { ArrowDown } from '@element-plus/icons-vue';
  console.log(octokit);
</script>

<template>
  <div class="menu-container w-full flex items-center justify-between h-[24px] bg-white">
    <el-dropdown trigger="click" popper-class="menu-dropdown">
      <span class="el-dropdown-link">
        <el-button type="" text>
          文件
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
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
  </div>
</template>

<style lang="postcss" scoped></style>
