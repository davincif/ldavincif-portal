<script setup lang="ts">
import type { Menu } from '@/models/headerMenus.model';
import type { PropType } from 'vue';

defineProps({
  menu: {
    type: Object as PropType<Menu>,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <a
    class="text-over-bg-flashy r text-lg font-semibold"
    :href="`#${menu.achor}`"
    :class="
      menu.isInConstruction
        ? 'opacity-50 hover:cursor-not-allowed'
        : 'hover:cursor-pointe'
    "
  >
    <span class="text-cta font-bold">
      {{ String(position + 1).padStart(2, '0') }}.
    </span>
    {{ menu.name }}
  </a>
</template>

<style scoped></style>
