<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 40,
  },
  strokeWidth: {
    type: Number,
    default: 24,
  },
});
</script>

<template>
  <svg class="text-over-bg" :width="size" :height="size" viewBox="0 0 490 490">
    <path
      fill="none"
      stroke="currentColor"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      d="M280 278a153 153 0 1 0-2 2l170 170m-91-117 110 110-26 26-110-110"
    />
  </svg>
</template>

<style scoped></style>
