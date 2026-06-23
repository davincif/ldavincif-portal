<script setup lang="ts">
import { computed, ref } from 'vue';
import SkillBullet from './components/skill-bullet.vue';
import Experiences from './models/experiences.ts';
import SkillGroups from './models/skillGroups.ts';

const experiences = ref(Experiences);

const skillGroups = SkillGroups;

const visibleCount = ref(4);

const displayedExperiences = computed(() =>
  experiences.value.slice(0, visibleCount.value),
);

const allExperiencesShown = computed(
  () => visibleCount.value >= experiences.value.length,
);

const toggleExp = (id: string) => {
  const target = experiences.value.find((e) => e.id === id);
  if (target) target.isOpen = !target.isOpen;
};

const handleMoreExperiences = () => {
  if (allExperiencesShown.value) {
    visibleCount.value = 4;
  } else {
    visibleCount.value = Math.min(
      experiences.value.length,
      visibleCount.value + 4,
    );
  }
};
</script>

<template>
  <div
    class="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950"
  >
    <!-- NAVBAR -->
    <header
      class="fixed top-0 right-0 left-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md"
    >
      <div
        class="mx-auto flex h-20 max-w-6xl items-center justify-between px-6"
      >
        <span
          class="font-mono text-xl font-bold tracking-tighter text-emerald-400"
        >
          davincif<span class="text-slate-600">.dev</span>
        </span>

        <nav
          class="hidden items-center gap-8 font-mono text-sm text-slate-400 md:flex"
        >
          <a
            href="#architecture"
            class="transition-colors hover:text-emerald-400"
          >
            // pillars
          </a>
          <a href="#commits" class="transition-colors hover:text-emerald-400">
            // history
          </a>
          <a href="#matrix" class="transition-colors hover:text-emerald-400">
            // skills
          </a>
        </nav>

        <div class="flex gap-4">
          <a
            href="https://www.linkedin.com/in/davincif/"
            target="_blank"
            class="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 font-mono text-xs transition-all hover:border-emerald-500"
          >
            LinkedIn
          </a>
          <a
            href="mailto:LDaVinciF.pt@gmail.com"
            class="rounded-lg bg-emerald-500 px-4 py-2 font-mono text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/10 transition-all hover:bg-emerald-400"
          >
            Email me
          </a>
        </div>
      </div>
    </header>

    <!-- HERO SECTION -->
    <section class="mx-auto max-w-6xl px-6 pt-36 pb-20">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div class="space-y-6 lg:col-span-8">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-xs tracking-widest text-emerald-400 uppercase"
          >
            <span
              class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"
            ></span>
            Senior Frontend Architect
          </div>

          <h1
            class="text-5xl font-bold tracking-tight text-slate-50 sm:text-6xl md:text-7xl"
          >
            Leonardo
            <span
              class="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent"
            >
              Da Vinci
            </span>
          </h1>

          <p
            class="max-w-2xl text-xl leading-relaxed font-light text-slate-300 md:text-2xl"
          >
            Translating complex enterprise business logic into lightning-fast,
            highly scalable
            <span
              class="border-b border-emerald-400/40 font-medium text-emerald-400"
            >
              Micro-frontend
            </span>
            ecosystems.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#commits"
              class="rounded-xl bg-emerald-500 px-6 py-3 font-mono text-sm font-bold text-slate-950 shadow-xl shadow-emerald-500/15 transition-all hover:bg-emerald-400"
            >
              Explore Timeline ↓
            </a>
            <a
              href="#"
              class="rounded-xl border border-slate-800 bg-slate-900 px-6 py-3 font-mono text-sm text-slate-300 transition-all hover:bg-slate-800"
            >
              Download CV [.pdf]
            </a>
          </div>
        </div>

        <!-- MOCK TERMINAL / BADGES -->
        <div class="flex flex-col gap-4 lg:col-span-4">
          <div
            class="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 font-mono text-xs"
          >
            <div class="text-slate-500">// CURRENT FOCUS</div>
            <div class="text-sm font-bold text-emerald-400">
              Cetelem Bank (BNP Paribas Group)
            </div>
            <div class="text-slate-300">
              Unifying pricing platforms via Vue3 & Web Components.
            </div>
          </div>

          <div
            class="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 font-mono text-xs"
          >
            <div class="text-slate-500">// ARCHITECTURE MILESTONE</div>
            <div class="text-sm font-bold text-slate-100">
              Santander Excellence Team
            </div>
            <div class="text-slate-400">
              Micro-frontend governance for branch teller platforms.
            </div>
          </div>

          <div
            class="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 font-mono text-xs"
          >
            <div class="text-slate-500">// THE HUMAN FACTOR</div>
            <div class="text-sm font-bold text-purple-400">
              Volunteer Physics Teacher
            </div>
            <div class="text-slate-400">
              Simplifying thermodynamics for low-income students since 2013.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EASTER EGG BANNER / SEPARATOR  -->
    <!-- <EasterEggBanner /> -->
    <section class="flex w-full justify-center">
      <hr class="w-[70%] text-center text-emerald-400" />
    </section>

    <!-- TIMELINE (INTERACTIVE COMMITS) -->
    <section id="commits" class="mx-auto max-w-6xl px-6 py-20">
      <div class="mb-16 space-y-2">
        <h2
          class="font-mono text-sm tracking-widest text-emerald-400 uppercase"
        >
          // 01. Professional History
        </h2>
        <p class="text-3xl font-bold tracking-tight text-slate-100">
          Architectural Commits
        </p>
      </div>

      <div class="relative ml-4 space-y-12 border-l border-slate-800 md:ml-32">
        <div
          v-for="exp in displayedExperiences"
          :key="exp.id"
          class="group relative"
        >
          <!-- Timeline Node Dot -->
          <div
            class="absolute top-1.5 -left-[17px] flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-950 transition-colors group-hover:border-emerald-500"
          >
            <div
              class="h-2.5 w-2.5 rounded-full bg-slate-600 transition-colors group-hover:bg-emerald-400"
              :class="{
                'bg-emerald-500 shadow-lg shadow-emerald-500/50': exp.isOpen,
              }"
            ></div>
          </div>

          <!-- Timestamp (Desktop Left side) -->
          <div
            class="absolute top-2 -left-32 hidden w-24 text-right font-mono text-xs font-medium text-slate-400 md:block"
          >
            {{ exp.period.split(' – ')[0] }}
          </div>

          <!-- Commit Card -->
          <div class="ml-8 md:ml-12">
            <div
              @click="toggleExp(exp.id)"
              class="cursor-pointer space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 transition-all hover:border-slate-700"
              :class="{
                'border-emerald-500/40 bg-slate-900/80 shadow-2xl shadow-emerald-950/20':
                  exp.isOpen,
              }"
            >
              <div
                class="flex flex-col justify-between gap-2 sm:flex-row sm:items-center"
              >
                <div>
                  <span class="font-mono text-xs text-emerald-400">{{
                    exp.company
                  }}</span>
                  <h3 class="text-lg font-bold text-slate-100">
                    {{ exp.highlight }}
                  </h3>
                  <p class="text-xs text-slate-400">
                    {{ exp.role }}
                    <span class="md:hidden">({{ exp.period }})</span>
                  </p>
                </div>

                <div class="flex items-center gap-2 self-start sm:self-center">
                  <SkillBullet
                    v-for="tech in exp.stack.slice(0, 2)"
                    :skill="tech"
                  />
                  <span class="ml-2 font-mono text-xs text-slate-500">
                    {{ exp.isOpen ? '[-]' : '[+]' }}
                  </span>
                </div>
              </div>

              <!-- Collapsible Body -->
              <div
                v-if="exp.isOpen"
                class="space-y-4 border-t border-slate-800/80 pt-4 text-sm text-slate-300"
              >
                <p class="leading-relaxed font-light text-slate-200">
                  {{ exp.summary }}
                </p>

                <ul class="space-y-2 font-light">
                  <li
                    v-for="(bullet, i) in exp.bullets"
                    :key="i"
                    class="flex items-start gap-2 text-xs leading-relaxed text-slate-400"
                  >
                    <span class="mt-0.5 font-mono text-emerald-500">↳</span>
                    {{ bullet }}
                  </li>
                </ul>

                <!-- Highlights -->
                <div>
                  <p class="leading-relaxed font-light text-slate-200">
                    Highlights
                  </p>
                  <div class="mt-2 flex gap-2">
                    <SkillBullet v-for="tech in exp.stack" :skill="tech" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 flex justify-center">
        <button
          v-if="experiences.length > 4"
          @click="handleMoreExperiences"
          class="rounded-xl border border-slate-800 bg-slate-900 px-6 py-3 font-mono text-sm text-slate-300 transition-all hover:bg-slate-800"
        >
          {{ allExperiencesShown ? 'Show More' : 'Show Less' }}
        </button>
      </div>
    </section>

    <!-- SKILLS MATRIX -->
    <section id="matrix" class="mx-auto max-w-6xl px-6 py-20">
      <div class="mb-16 space-y-2">
        <h2
          class="font-mono text-sm tracking-widest text-emerald-400 uppercase"
        >
          // 02. The Stack
        </h2>
        <p class="text-3xl font-bold tracking-tight text-slate-100">
          Competency Matrix
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div
          v-for="group in skillGroups"
          :key="group.category"
          class="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6"
        >
          <div class="space-y-4">
            <div class="font-mono text-xs text-slate-400">
              // {{ group.category.toUpperCase() }}
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in group.items"
                :key="skill"
                class="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 font-mono text-xs text-slate-200 transition-colors hover:border-emerald-500/50 hover:text-emerald-300"
              >
                {{ skill }}
              </span>
            </div>
          </div>
          <div class="mt-6 border-t border-slate-900 pt-6 text-right">
            <span
              class="inline-block h-2 w-2 rounded-full bg-emerald-500/40"
            ></span>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer
      class="border-t border-slate-900 bg-slate-950 py-12 font-mono text-xs text-slate-500"
    >
      <div
        class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row"
      >
        <div>
          <span>Leonardo Da Vinci © 2026</span>
          <span class="mx-2">|</span>
          <span class="text-slate-400">Low-Noise Engineering</span>
        </div>
        <div class="flex gap-6 text-slate-400">
          <a
            href="https://www.linkedin.com/in/davincif/"
            class="transition-colors hover:text-emerald-400"
          >
            LinkedIn
          </a>
          <a
            href="https://t.me/ldavincif"
            class="transition-colors hover:text-emerald-400"
          >
            Telegram
          </a>
          <a
            href="https://wa.me/351929350074"
            class="transition-colors hover:text-emerald-400"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
