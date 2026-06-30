<script setup lang="ts">
import { onUnmounted, watch } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  isShown: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['close']);

watch(
  () => props.isShown,
  (newIsShownState) => {
    if (newIsShownState === true) {
      setTimeout(() => {
        window.addEventListener('click', checkForClickOutside);
      }, 100);
    } else {
      window.removeEventListener('click', checkForClickOutside);
    }
  },
);

onUnmounted(() => {
  window.removeEventListener('click', checkForClickOutside);
});

const checkForClickOutside = (ev: PointerEvent) => {
  if (!props.isShown) {
    return;
  }

  // the clicked was inside the popup
  if (ev.target == document.getElementById(props.id)) {
    return;
  }

  // the clicked was outside the popup
  emits('close');
};
</script>

<template>
  <div
    :id
    v-show="isShown"
    class="bg-background absolute z-10 rounded-sm border border-b-2 border-l-2
      px-4 py-2"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>
