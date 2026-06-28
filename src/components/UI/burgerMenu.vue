<script setup lang="ts">
import MENUS from '@/models/headerMenus.model.ts';
import { ref } from 'vue';
import BurgerMenuIcon from './icons/burgerMenuIcon.vue';
import NavItem from './navItem.vue';
import PopUp from './popUp.vue';

const isPopupShown = ref(false);

// const popupRef = useTemplateRef('burger-popup');

const togglePopup = () => {
  isPopupShown.value = !isPopupShown.value;
};

const closePopup = () => {
  isPopupShown.value = false;
};
</script>

<template>
  <div>
    <button>
      <BurgerMenuIcon @click="togglePopup()" />
    </button>

    <PopUp
      id="buger-menu-popup"
      class="top-10 right-25"
      :isShown="isPopupShown"
      @close="closePopup"
    >
      <ul class="flex flex-col gap-1">
        <NavItem v-for="(menu, index) in MENUS" :menu :position="index" />
      </ul>
    </PopUp>
  </div>
</template>

<style scoped></style>
