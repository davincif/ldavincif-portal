<script setup lang="ts">
const verion = __APP_VERSION__;
</script>

<template>
  <section
    id="skills"
    class="text-over-bg-flashy bg-footer-bg anchor-offset -mx-8 flex flex-col
      gap-8 p-4 pb-4"
  >
    <div class="flex flex-col gap-2 opacity-50">
      <p>
        Hosted in my personal
        <a
          class="footer-link"
          href="https://www.raspberrypi.com/products/raspberry-pi-5/"
          >Raspberry PI 5</a
        >
        using

        <a class="footer-link" href="https://www.cloudflare.com/"
          >cloudflare.com</a
        >.
      </p>

      <p>
        Made purely with
        <a class="footer-link" href="https://vuejs.org/">Vue</a>
        and
        <a class="footer-link" href="https://tailwindcss.com/">Tailwind</a>.
      </p>

      <p>No vibe coding!</p>

      <section class="flex justify-between gap-8">
        <section>
          version
          <section class="text-cta inline">{{ verion }}</section>
        </section>

        <section>
          by
          <section class="text-cta inline">ldavincif</section>
        </section>
      </section>
    </div>
  </section>
</template>

<style scoped>
@import 'tailwindcss';

.footer-link {
  @apply underline hover:cursor-pointer;
}
</style>
