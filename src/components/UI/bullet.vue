<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'cta',
  },
  textColor: {
    type: String,
    default: 'background',
  },
});
</script>

<template>
  <div
    class="rounded-sm border px-1 py-0.5"
    :class="` border-${color} text-${color}`"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>
