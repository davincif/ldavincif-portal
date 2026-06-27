<script setup lang="ts">
import EXPERIENCES, { ExperienceRegime } from '@/models/experiences.model';
import { computed, ref } from 'vue';
import Bullet from './UI/bullet.vue';
import Card from './UI/card.vue';

/** from (start, end( — exclusive — index range */
const experienceRange = ref({
  start: 0,
  end: 4,
});

const expanded = ref(new Set<string>());

const experiences = computed(() =>
  EXPERIENCES.slice(experienceRange.value.start, experienceRange.value.end),
);

const prettifyDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

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
</script>

<template>
  <section
    id="exprience"
    class="stage-height anchor-offset flex flex-col gap-8 pt-16"
  >
    <p class="text-cta">My Expenriences</p>

    <Card v-for="experience of experiences" class="font-ordinary text-over-bg">
      <!-- SECTION - Role, Position, Company Date and Sight-->
      <section class="flex items-center justify-between">
        <div class="flex flex-col">
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

        <div class="text-right">
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
        <div v-if="experience.techStack.length > 0" class="flex gap-2">
          <Bullet v-for="tech in experience.techStack">{{ tech }}</Bullet>
        </div>

        <div v-if="experience.highlights.length > 0" class="flex gap-2">
          <Bullet
            v-for="highlight in experience.highlights"
            color="over-bg-flashy"
          >
            {{ highlight }}
          </Bullet>
        </div>
      </section>

      <!-- SECTION - activitie details -->
      <section v-show="isExpanded(experience.id)" class="">
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
    <hr class="text-cta mt-4 w-[stretch] border-dashed" />
  </section>
</template>

<style scoped></style>
