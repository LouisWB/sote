<script setup lang="ts">
  import { NavigationMenuLink, type NavigationMenuLinkEmits, type NavigationMenuLinkProps, useForwardPropsEmits } from 'radix-vue';

  const props = defineProps<NavigationMenuLinkProps>();
  const emits = defineEmits<NavigationMenuLinkEmits>();

  const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <NavigationMenuLink class="data-[active=true]:bg-accent-foreground data-[active=true]:text-white transition" v-bind="forwarded">
    <slot />
  </NavigationMenuLink>
</template>
