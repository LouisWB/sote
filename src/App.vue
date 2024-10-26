<script setup lang="ts">
  import Menu from './components/Menu.vue';
  import ReposSidebar from './components/ReposSidebar.vue';
  import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/ui/resizable';
  import { Toaster } from '@/ui/toast';
</script>

<template>
  <Menu class="mb-[var(--gap)]" />
  <div class="content h-[--content-height] overflow-hidden">
    <div class="content-wrap rounded-md bg-white border h-full flex">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel :collapsible="true" :maxSize="30" :minSize="10" :defaultSize="20">
          <ReposSidebar />
        </ResizablePanel>
        <ResizableHandle with-handle />
        <ResizablePanel :maxSize="30" :minSize="10" :defaultSize="20">Two</ResizablePanel>
        <ResizableHandle with-handle />
        <ResizablePanel>Three</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  </div>
  <Toaster />
</template>

<style lang="postcss" scoped>
  .container {
    div {
      color: red;
    }
  }
</style>
