<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 40,
  },
  color: {
    type: String,
    default: 'cta',
  },
});
</script>

<template>
  <svg
    :class="`text-${color}`"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M5 8h8.75M5 12h14m-8.75 4H19"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped></style>
