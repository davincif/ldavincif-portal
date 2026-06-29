<script setup lang="ts">
import type { Volunteering } from '@/models/volunteerings.models';
import VOLUNTEERING from '@/models/volunteerings.models';
import { prettifyDate } from '@/utils/date';
import { computed, ref } from 'vue';
import Card from './UI/card.vue';

const volunteeringRange = ref({
  start: 0,
  end: 3,
});

const expanded = ref(new Set<string>());

const volunteerings = computed<Volunteering[]>(() =>
  JSON.parse(
    JSON.stringify(
      VOLUNTEERING.slice(
        volunteeringRange.value.start,
        volunteeringRange.value.end,
      ),
    ),
  ),
);

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
  <section id="volunteering" class="flex flex-col gap-8">
    <p class="text-over-bg-flashy">Volunteer Works</p>

    <Card
      v-for="volunteer of volunteerings"
      class="font-ordinary text-over-bg border-over-bg-flashy"
    >
      <!-- SECTION - Role, Position, Company Date and Sight-->
      <section
        class="flex flex-col items-center justify-between gap-2 lg:flex-row"
      >
        <div class="flex w-full flex-col">
          <p class="text-over-bg-flashy text-lg font-bold">
            {{ volunteer.role }}
          </p>

          <p>
            at
            <span class="text-over-bg-flashy font-bold">
              {{ volunteer.company }}
            </span>
          </p>

          <p class="text-xs">
            @ {{ volunteer.location.address }}, {{ volunteer.location.city }} -
            {{ volunteer.location.country }}
          </p>
        </div>

        <div class="w-full text-left lg:w-fit lg:text-right">
          <p v-if="volunteer.period.to">
            {{ prettifyDate(volunteer.period.to) }}
          </p>
          <p v-else="volunteer.period.to" class="text-cta font-bold">current</p>
          <p>{{ prettifyDate(volunteer.period.from) }}</p>
        </div>
      </section>

      <!-- SECTION - Sumary -->
      <section>
        <p class="text-over-bg-flashy">{{ volunteer.sumary }}</p>
      </section>

      <!-- SECTION - activitie details -->
      <section v-show="isExpanded(volunteer.id)">
        <ul class="ml-4 flex list-[circle] flex-col gap-1">
          <li v-for="activitie in volunteer.activities">
            {{ activitie }}
          </li>
        </ul>
      </section>

      <!-- SECTION - detail button -->
      <section class="flex w-full justify-end">
        <a
          class="text-cta hover:border-cta w-fit rounded-sm border
            border-transparent px-2 py-1 hover:cursor-pointer"
          @click="toggleExpand(volunteer.id)"
        >
          {{ isExpanded(volunteer.id) ? '-' : '+' }} details
        </a>
      </section>
    </Card>
  </section>
</template>

<style scoped></style>
