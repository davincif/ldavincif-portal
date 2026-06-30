<script setup lang="ts">
import { ref, type InputTypeHTMLAttribute, type PropType } from 'vue';
import CircledXIcon from './icons/circledXIcon.vue';

defineProps({
  type: {
    type: String as PropType<InputTypeHTMLAttribute>,
    required: true,
  },
  id: {
    type: String,
    requeired: true,
  },
  placeholder: {
    type: String,
  },
  autocomplete: {
    type: String,
  },
  required: {
    type: Boolean,
    default: false,
  },
  minlength: {
    type: Number,
  },
  maxlength: {
    type: Number,
  },
  size: {
    type: Number,
  },
  value: {
    type: String,
  },
});

const emits = defineEmits(['update:value']);

const value = ref('');

const cleanValue = () => {
  value.value = '';
  emits('update:value', value.value);
};

const updateValue = ($event: InputEvent) => {
  value.value = ($event.target as HTMLInputElement).value ?? '';
  emits('update:value', value.value);
};
</script>

<template>
  <div
    class="border-over-bg focus-within:border-over-bg-flashy flex items-center
      gap-2 border-b px-2 py-1"
  >
    <slot name="before-input"></slot>
    <input
      class="w-full outline-0"
      type="text"
      id="skill-search"
      name="skill-search"
      placeholder="Search skills..."
      :autocomplete
      :required
      :minlength
      :maxlength
      :size
      :value
      @input="updateValue"
    />
    <button
      v-show="value !== ''"
      class="hover:cursor-pointer"
      @click="cleanValue"
    >
      <circled-x-icon :size="20" />
    </button>
    <span v-show="value === ''" class="w-[calc(21px)]"></span>
    <slot name="after-input"></slot>
  </div>
</template>

<style scoped></style>
