<script setup lang="ts">
import Presentation from '@/components/presentation.vue';
import WorkHistory from '@/components/workHistory.vue';
</script>

<template>
  <dev class="flex flex-col gap-16">
    <Presentation email="LDaVinciF.pt@gmail.com">
      <template v-slot:salute>Hi, my name is</template>
      <template v-slot:dev-name>Leonardo Da Vinci</template>
      <template v-slot:phrase>I'm a software solutions maker.</template>
      <template v-slot:pitch>
        For me, programming is all about diving into the "whys", it's more about
        people than it is about computers, understanding what’s actually needed,
        gives you a solid base to building something clean and reliable.
        <br />
        Professionally, I’ve worked mostly as a full-stack developer with
        Angular, Python (Django), and Node/TypeScript (Express). Outside of
        work, I love messing around with tools like C, Lua, Arduino, and
        Raspberry Pi just for fun. To me, the tech matters a bunch; but it’s
        always a means to an end, nothing more.
      </template>
    </Presentation>

    <WorkHistory />
  </dev>
</template>

<style scoped></style>
