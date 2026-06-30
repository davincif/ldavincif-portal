<script setup lang="ts">
import Footer from '@/components/sections/footer.vue';
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
        Programming is about diving into the "whys." It is more about people
        than computers—understanding what is truly needed provides a solid
        foundation for building clean and reliable solutions.
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
        . Outside of work, I enjoy tinkering with tools like
        <section class="text-over-bg-flashy inline-block">C, Lua</section>
        and
        <section class="text-over-bg-flashy inline-block">Raspberry Pi</section>
        for fun. While technology is highly important, to me, it is always a
        means to an end.
      </template>
    </Presentation>

    <WorkHistory />
    <hr class="text-cta mt-4 w-[stretch] border-dashed" />

    <Skills />
  </dev>

  <Footer />
</template>

<style scoped></style>
