<script setup lang="ts">
import { computed, watchEffect } from 'vue';

const props = defineProps({
  max: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    default: 0,
  },
});

// Validação em tempo de execução
watchEffect(() => {
  if (props.value > props.max) {
    console.warn(
      `[ProgressBar] 'value' (${props.value}) cannot be bigger than 'max' (${props.max})`,
    );
  }
});

const progressPercentage = computed(() => {
  return (props.value / props.max) * 100;
});
</script>

<template>
  <div class="border-over-bg-flashy max-h-fit rounded-sm border">
    <div
      :class="
        progressPercentage > 80
          ? 'bg-cta'
          : progressPercentage > 50
            ? 'bg-over-bg-flashy'
            : 'bg-over-bg'
      "
      :style="`height: 24px; width: ${progressPercentage}%`"
    ></div>
  </div>
</template>

<style scoped></style>
