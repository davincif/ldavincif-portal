<script setup lang="ts">
import type { PropType } from 'vue';
import type { SelectOptions } from './models/selector.models';
import PopUp from './popUp.vue';

const props = defineProps({
  id: {
    type: String,
    requeired: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Object as PropType<SelectOptions[]>,
  },
  labelMsg: {
    type: String,
    default: '',
  },
});

const isOpen = defineModel<boolean>('isOpen', { default: false });
const selected = defineModel<string>('selected', { default: '' });

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const closePopup = () => {
  isOpen.value = false;
};

const udpateSelected = (newSelection: string) => {
  if (newSelection === selected.value) {
    return;
  }

  selected.value = newSelection;
};
</script>

<template>
  <div class="flex items-center" @click="toggleOpen()">
    <input
      class="w-[-webkit-fill-available] p-1 text-center outline-0"
      type="text"
      :id
      :name="id"
      :value="labelMsg"
      readonly
    />
    <div v-if="isOpen">˄</div>
    <div v-else>˅</div>

    <PopUp
      id="buger-menu-popup"
      class="top-14 left-16"
      :isShown="isOpen"
      @close="closePopup"
    >
      <div class="flex flex-col gap-1">
        <div
          class="hover:border-b-cta border-b border-transparent
            hover:cursor-pointer hover:border-b"
          v-for="{ value, label } in options"
          :value
          @click="udpateSelected(value)"
        >
          {{ label }}
        </div>
      </div>
    </PopUp>
  </div>
</template>

<style scoped></style>
