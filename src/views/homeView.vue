<script setup lang="ts">
import Presentation from '@/components/presentation.vue';
import WorkHistory from '@/components/workHistory.vue';
</script>

<template>
  <Presentation email="LDaVinciF.pt@gmail.com">
    <template v-slot:salute>Hi, my name is</template>
    <template v-slot:dev-name>Leonardo Da Vinci</template>
    <template v-slot:phrase>I build things for the web.</template>
    <template v-slot:pitch>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
      massa at justo maximus fringilla. Nunc tincidunt iaculis lectus, a aliquam
      dolor ultricies ac. Suspendisse nec cursus leo. Vestibulum ut mollis
      libero, in placerat mauris. Interdum et malesuada fames ac ante ipsum
      primis in faucibus. Sed gravida lacus in justo efficitur placerat.
    </template>
  </Presentation>

  <WorkHistory />
</template>

<style scoped></style>
