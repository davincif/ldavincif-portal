<script setup lang="ts">
import HexagonIcon from '@/icons/hexagonIcon.vue';
import MENUS from '@/models/headerMenus.model';
</script>

<template>
  <div
    class="head-height bg-background fixed top-0 flex w-full items-center
      justify-between gap-2 pr-16"
  >
    <HexagonIcon :size="50" label="L" />

    <span class="flex gap-12">
      <a
        v-for="(menu, index) in MENUS"
        class="text-over-bg-flashy r text-lg font-semibold"
        :href="`#${menu.achor}`"
        :class="
          menu.isInConstruction
            ? 'opacity-50 hover:cursor-not-allowed'
            : 'hover:cursor-pointe'
        "
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
