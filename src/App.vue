<script setup lang="ts">
import Header from './components/header.vue';
</script>

<template>
  <Header />

  <main class="pt-(--header-size)">
    <RouterView />
  </main>
</template>

<style scoped></style>
