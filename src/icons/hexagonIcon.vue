<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    default: 200,
  },
  strokeWidth: {
    type: Number,
    default: 12,
  },
  color: {
    type: String,
    default: 'cta',
  },
  label: {
    type: String,
    default: '✟♥',
  },
});

const points = computed(() => {
  // viewBox size
  const s = 200;

  // Create a taller hexagon by adjusting the Y coordinates
  return (
    // top point
    `${s / 2},10 ` +
    // top right
    `${s - 20},${s * 0.25} ` +
    // bottom right
    `${s - 20},${s * 0.75} ` +
    // bottom point
    `${s / 2},${s - 10} ` +
    // bottom left
    `20,${s * 0.75} ` +
    // top left
    `20,${s * 0.25}`
  );
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 200 200"
    :class="`text-${color}`"
  >
    <polygon
      :points="points"
      fill="none"
      stroke="currentColor"
      :stroke-width="strokeWidth"
    />
    <text
      x="100"
      y="110"
      text-anchor="middle"
      dominant-baseline="middle"
      fill="currentColor"
      class="text-7xl font-bold"
    >
      {{ label }}
    </text>
  </svg>
</template>

<style scoped></style>
