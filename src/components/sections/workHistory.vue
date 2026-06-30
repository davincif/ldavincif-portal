<script setup lang="ts">
import Bullet from '@/components/UI/bullet.vue';
import Card from '@/components/UI/card.vue';
import Vonlunteering from '@/components/vonlunteering.vue';
import EXPERIENCES, {
  ExperienceRegime,
  type Experience,
} from '@/models/experiences.model';
import { prettifyDate } from '@/utils/date.ts';
import { capitalize } from '@/utils/string.ts';
import { computed, ref } from 'vue';

const loadingStep = 3;

/** from (start, end( — exclusive — index range */
const experienceRange = ref({
  start: 0,
  end: 3,
});

const expanded = ref(new Set<string>());

const experiences = computed<Experience[]>(() => {
  const exps = JSON.parse(
    JSON.stringify(
      EXPERIENCES.slice(experienceRange.value.start, experienceRange.value.end),
    ),
  );

  // capitalize bullets
  for (const experience of exps) {
    experience.highlights = experience.highlights
      .map((highlight: string) => capitalize(highlight))
      .sort();
    experience.techStack = experience.techStack
      .map((tech: string) => capitalize(tech))
      .sort();
  }

  return exps;
});

const yearsOfExperience = computed(() => {
  const today = new Date().getFullYear();
  let firstExperience = Math.min(
    ...EXPERIENCES.map((experience) =>
      experience.removeFromYearOfExperience
        ? Infinity
        : Number(experience.period.from.split('-')[0]),
    ),
  );

  return today - firstExperience;
});

const translateRegime = (regime: ExperienceRegime) => {
  switch (regime) {
    case ExperienceRegime.HYBRID:
      return 'Hybrid';
    case ExperienceRegime.REMOTE:
      return 'Remote';
    case ExperienceRegime.ON_SITE:
      return 'On-Sight';
  }
};

const toggleExpand = (id: string) => {
  if (expanded.value.has(id)) {
    expanded.value.delete(id);
  } else {
    expanded.value.add(id);
  }
};

const isExpanded = (id: string) => expanded.value.has(id);

const retractExperiences = () => {
  if (experienceRange.value.end - loadingStep <= 0) {
    return;
  }

  const newEnd = experienceRange.value.end - loadingStep;

  // closig possible expanded experiences
  for (let idx = experienceRange.value.end; idx > newEnd; idx--) {
    const experiencesID = EXPERIENCES[idx]?.id;
    if (experiencesID === undefined) {
      continue;
    }

    expanded.value.delete(experiencesID);
  }

  experienceRange.value.end = newEnd;
};

const loadExperiences = () => {
  if (experienceRange.value.end + loadingStep >= EXPERIENCES.length) {
    experienceRange.value.end = EXPERIENCES.length;
  } else {
    experienceRange.value.end += loadingStep;
  }
};
</script>

<template>
  <section
    id="exprience"
    class="stage-height anchor-offset flex flex-col gap-8"
  >
    <p class="text-cta">My {{ yearsOfExperience }} years Expenriences</p>

    <Card v-for="experience of experiences" class="font-ordinary text-over-bg">
      <!-- SECTION - Role, Position, Company Date and Sight-->
      <section
        class="flex flex-col items-center justify-between gap-2 lg:flex-row"
      >
        <div class="flex w-full flex-col">
          <p class="text-over-bg-flashy text-lg font-bold">
            {{ experience.role }}
          </p>

          <p>
            at
            <span class="text-over-bg-flashy font-bold">
              {{ experience.company }}
            </span>
            <span v-if="experience.consultingCompany">
              as
              <span class="text-over-bg-flashy font-bold">
                {{ experience.consultingCompany }}
              </span>
              consultant
            </span>
          </p>

          <p class="text-xs">
            @ {{ experience.location.city }},
            {{ experience.location.country }} •
            {{ translateRegime(experience.regime) }}
          </p>
        </div>

        <div class="w-full text-left lg:w-fit lg:text-right">
          <p v-if="experience.period.to">
            {{ prettifyDate(experience.period.to) }}
          </p>
          <p v-else="experience.period.to" class="text-cta font-bold">
            current
          </p>

          <p>{{ prettifyDate(experience.period.from) }}</p>
        </div>
      </section>

      <!-- SECTION - Sumary -->
      <section>
        <p class="text-over-bg-flashy">{{ experience.sumary }}</p>
      </section>

      <!-- SECTION - Skills -->
      <section class="flex flex-col gap-2">
        <div
          v-if="experience.techStack.length > 0"
          class="flex flex-wrap gap-2"
        >
          <Bullet v-for="tech in experience.techStack">{{ tech }}</Bullet>
        </div>

        <div
          v-if="experience.highlights.length > 0"
          class="flex flex-wrap gap-2"
        >
          <Bullet
            v-for="highlight in experience.highlights"
            color="over-bg-flashy"
          >
            {{ highlight }}
          </Bullet>
        </div>
      </section>

      <!-- SECTION - activitie details -->
      <section v-show="isExpanded(experience.id)">
        <ul class="ml-4 flex list-[circle] flex-col gap-1">
          <li v-for="activitie in experience.activities">
            {{ activitie }}
          </li>
        </ul>
      </section>

      <!-- SECTION - detail button -->
      <section class="flex w-full justify-end">
        <a
          class="text-cta hover:border-cta w-fit rounded-sm border
            border-transparent px-2 py-1 hover:cursor-pointer"
          @click="toggleExpand(experience.id)"
        >
          {{ isExpanded(experience.id) ? '-' : '+' }} details
        </a>
      </section>
    </Card>

    <!-- SECTION FOOTER -->
    <section>
      <button
        class="flex w-full items-center gap-4 hover:cursor-pointer"
        @click="retractExperiences()"
        v-show="experienceRange.end - loadingStep > 0"
      >
        <div
          class="text-cta bg-cta h-1 w-full rounded-tl-xs rounded-bl-xs border"
        />
        <p class="min-w-fit text-2xl">⥣</p>
        <div
          class="text-cta bg-cta h-1 w-full rounded-tr-xs rounded-br-xs border"
        />
      </button>

      <button
        class="flex w-full items-center gap-4 hover:cursor-pointer"
        @click="loadExperiences()"
        v-show="experienceRange.end < EXPERIENCES.length"
      >
        <div
          class="text-cta bg-cta h-1 w-full rounded-tl-xs rounded-bl-xs border"
        />
        <p class="min-w-fit text-2xl">⥥</p>
        <div
          class="text-cta bg-cta h-1 w-full rounded-tr-xs rounded-br-xs border"
        />
      </button>
    </section>

    <Vonlunteering />
  </section>
</template>

<style scoped></style>
