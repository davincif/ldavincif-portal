<script setup lang="ts">
import Presentation from '@/components/sections/presentation.vue';
import Skills from '@/components/sections/skills.vue';
import WorkHistory from '@/components/sections/workHistory.vue';
</script>

<template>
  <dev class="flex flex-col gap-16 pb-24">
    <Presentation email="LDaVinciF.pt@gmail.com">
      <template v-slot:salute>Hi, my name is</template>
      <template v-slot:dev-name>Leonardo Da Vinci</template>
      <template v-slot:phrase>I'm a software solutions maker.</template>
      <template v-slot:pitch>
        For me, programming is all about diving into the "whys", it's more about
        people than it is about computers, understanding what’s actually needed,
        gives you a solid base to building something clean and reliable.
        <br />
        Professionally, I’ve worked mostly as a
        <section class="text-cta inline-block">full stack</section>
        developer with
        <section class="text-cta inline-block">
          Angular, Python (Django)
        </section>
        and
        <section class="text-cta inline-block">
          Node/TypeScript (Express)
        </section>
        . Outside of work, I love messing around with tools like
        <section class="text-over-bg-flashy inline-block">C, Lua</section>
        and
        <section class="text-over-bg-flashy inline-block">Raspberry Pi</section>
        just for fun. To me, the tech matters a bunch; but it’s always a means
        to an end, nothing more.
      </template>
    </Presentation>

    <WorkHistory />

    <Skills />
  </dev>
</template>

<style scoped></style>
