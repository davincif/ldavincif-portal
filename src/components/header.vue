<script setup lang="ts">
import HexagonIcon from '@/icons/hexagonIcon.vue';
import { ref } from 'vue';

const menus = ref([
  {
    name: 'About',
    achor: '#about',
  },
  {
    name: 'Exprience',
    achor: '#exprience',
  },
  {
    name: 'Work',
    achor: '#work',
  },
  {
    name: 'Contact',
    achor: '#contact',
  },
]);
</script>

<template>
  <div class="head-height flex items-center justify-between gap-2">
    <HexagonIcon :size="50" label="L" />

    <span class="flex gap-12">
      <a
        v-for="(menu, index) in menus"
        class="text-over-bg-flashy text-lg font-semibold hover:cursor-pointer"
      >
        <span class="text-cta font-bold">
          {{ String(index + 1).padStart(2, '0') }}.
        </span>
        {{ menu.name }}
      </a>
    </span>
  </div>
</template>

<style scoped></style>
