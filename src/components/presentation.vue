<script setup lang="ts">
import GithubIcon from '@/icons/githubIcon.vue';
import LinkedinIcon from '@/icons/linkedinIcon.vue';
import MainlIcon from '@/icons/mainlIcon.vue';
import Button from './UI/button.vue';

defineProps({
  email: {
    type: String,
    required: true,
  },
});

const mailme = () => {
  document.getElementById('mialme-link')?.click();
};
</script>

<template>
  <section
    id="who"
    class="stage-height anchor-offset flex flex-col justify-between"
  >
    <div class="flex flex-col justify-center gap-8 pt-8">
      <p class="font-ordinary text-cta text-md md:text-xl">
        <slot name="salute"></slot>
      </p>

      <p class="font-flashy text-over-bg-flashy text-5xl font-bold md:text-8xl">
        <slot name="dev-name"></slot>
      </p>

      <p class="font-ordinary text-over-bg text-5xl font-bold md:text-8xl">
        <slot name="phrase"></slot>
      </p>

      <p class="font-ordinary text-over-bg text-xl lg:w-2/3">
        <slot name="pitch"></slot>
      </p>
    </div>

    <!-- SECTION FOOTER -->
    <div class="lg:flex-rows flex flex-col items-center gap-8 pt-4">
      <div>
        <p class="text-cta mb-2 block lg:hidden">{{ email }}</p>
        <Button id="mailme-btn" @click="mailme()">Get in Touch</Button>
      </div>

      <div
        class="text-cta flex w-full items-center justify-center gap-4
          lg:justify-start"
      >
        <p class="hidden lg:block">{{ email }}</p>
        <span class="flex w-fit items-center gap-2">
          <a
            id="linkedin-link"
            href="https://www.linkedin.com/in/davincif/"
            target="_blank"
          >
            <LinkedinIcon />
          </a>
          -
          <a
            id="github-link"
            href="https://github.com/davincif"
            target="_blank"
          >
            <GithubIcon />
          </a>
          -
          <a id="mialme-link" :href="`mailto:${email}`" target="_blank">
            <MainlIcon />
          </a>
        </span>
        <hr class="hidden w-[stretch] border-dashed lg:block" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
