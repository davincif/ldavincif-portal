<script setup lang="ts">
import HexagonIcon from '@/icons/hexagonIcon.vue';
import MENUS from '@/models/headerMenus.model';
import BurgerMenu from './UI/burgerMenu.vue';
import NavItem from './UI/navItem.vue';
</script>

<template>
  <nav
    class="head-height bg-background fixed top-0 -ml-px flex w-full items-center
      justify-between gap-2 pr-16"
  >
    <HexagonIcon :size="50" label="L" />

    <span class="hidden md:flex md:gap-12">
      <NavItem v-for="(menu, index) in MENUS" :menu :position="index" />
    </span>

    <BurgerMenu class="block md:hidden" />
  </nav>
</template>

<style scoped></style>
