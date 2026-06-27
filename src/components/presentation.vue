<script setup lang="ts">
import GithubIcon from '@/icons/githubIcon.vue';
import LinkedinIcon from '@/icons/linkedinIcon.vue';
import MainlIcon from '@/icons/mainlIcon.vue';
import Button from './button.vue';

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
    class="stage-height anchor-offset flex flex-col justify-center gap-8"
  >
    <p class="font-ordinary text-cta text-xl">
      <slot name="salute"></slot>
    </p>

    <p class="font-flashy text-over-bg-flashy text-8xl font-bold">
      <slot name="dev-name"></slot>
    </p>

    <p class="font-ordinary text-over-bg text-8xl font-bold">
      <slot name="phrase"></slot>
    </p>

    <p class="font-ordinary text-over-bg w-2/3 text-xl">
      <slot name="pitch"></slot>
    </p>

    <!-- SECTION FOOTER -->
    <div class="mt-4 flex items-center gap-16">
      <Button id="mailme-btn" @click="mailme()">Get in Touch</Button>

      <div class="text-cta flex w-full items-center gap-4">
        <p>{{ email }}</p>
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
        <hr class="w-[stretch] border-dashed" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
