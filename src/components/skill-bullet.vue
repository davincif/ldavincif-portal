<script setup lang="ts">
defineProps({
  skill: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span
    :key="skill"
    class="rounded-md bg-slate-800 px-2.5 py-0.5 font-mono text-[11px] text-slate-300"
  >
    {{ skill }}
  </span>
</template>

<style scoped></style>
