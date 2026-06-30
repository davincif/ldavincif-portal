<script setup lang="ts">
import BurgerMenu from '@/components/UI/burgerMenu.vue';
import type { SelectOptions } from '@/components/UI/models/selector.models.ts';
import NavItem from '@/components/UI/navItem.vue';
import Selector from '@/components/UI/selector.vue';
import HexagonIcon from '@/icons/hexagonIcon.vue';
import MENUS from '@/models/headerMenus.model';
import { changeTheme, type Themes } from '@/utils/theming';
import { ref } from 'vue';

const themes: SelectOptions[] = [
  { value: 'default', label: 'Default ' },
  { value: 'mylight', label: 'Light' },
  { value: 'terminal', label: 'Terminal' },
  { value: 'retro-light', label: 'Retro Light' },
];

const theme = ref('default');

const updateTheme = (newTheme: string) => {
  theme.value = themes.find((_theme) => _theme.value === newTheme)?.label ?? '';
  changeTheme(newTheme as Themes);
};
</script>

<template>
  <nav
    class="head-height bg-background fixed top-0 -ml-px flex w-full items-center
      justify-between gap-2 pr-16"
  >
    <div class="flex gap-2">
      <HexagonIcon :size="50" label="L" />
      <Selector
        class="w-25"
        :options="themes"
        id="theme-selector"
        :label-msg="theme"
        @update:selected="updateTheme"
      />
    </div>

    <span class="hidden md:flex md:gap-12">
      <NavItem v-for="(menu, index) in MENUS" :menu :position="index" />
    </span>

    <BurgerMenu class="block md:hidden" />
  </nav>
</template>

<style scoped></style>
