<script setup lang="ts"></script>

<template>
  <!-- EASTER EGG BANNER (THE HOOK FOR TECH RECRUITERS) -->
  <section class="mx-auto max-w-6xl px-6 py-4">
    <div
      class="flex flex-col items-start justify-between gap-4 rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 p-4 sm:flex-row sm:items-center"
    >
      <div class="flex items-center gap-3">
        <div
          class="rounded-lg bg-emerald-500/10 p-2 font-mono text-sm font-bold text-emerald-400"
        >
          &lt;/&gt;
        </div>
        <div>
          <div class="font-mono text-xs font-bold text-emerald-400">
            &lt;davinci-timeline :source="cv.json" /&gt;
          </div>
          <div class="text-xs text-slate-400">
            Inspect the DOM: This timeline was conceptualized as a native
            isolated Web Component.
          </div>
        </div>
      </div>
      <span
        class="rounded border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] tracking-wider text-emerald-300 uppercase"
      >
        Web Component Native
      </span>
    </div>
  </section>
</template>

<style scoped></style>
