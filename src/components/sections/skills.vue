<script setup lang="ts">
import ProgressBar from '@/components/UI/progressBar.vue';
import SKILLS, { MAX_SKILL_LEVEL, type MySkill } from '@/models/skills.model';
import { capitalize } from '@/utils/string';
import { computed } from 'vue';

const volunteerings = computed<MySkill[]>(() => {
  const volunteers: MySkill[] = JSON.parse(JSON.stringify(SKILLS));

  // capitalize names
  for (const volunteer of volunteers) {
    volunteer.name = capitalize(volunteer.name);

    // capitalize skills
    for (const skill of volunteer.skills) {
      skill.name = capitalize(skill.name);
    }

    volunteer.skills.sort((a, b) => b.level - a.level);
  }

  return volunteers;
});
</script>

<template>
  <section id="skills" class="stage-height anchor-offset flex flex-col gap-8">
    <p class="text-cta">My Skills</p>

    <div class="flex flex-row flex-wrap gap-8 lg:gap-16">
      <div
        :id="volunteer.id"
        v-for="volunteer in volunteerings"
        class="flex w-fit flex-col gap-4"
      >
        <p class="text-over-bg-flashy">{{ volunteer.name }}</p>

        <div
          v-for="skill in volunteer.skills"
          class="flex w-75 items-center justify-between gap-2 lg:w-120"
        >
          <p class="w-max max-w-30 lg:min-w-fit">{{ skill.name }}</p>
          <ProgressBar
            :max="MAX_SKILL_LEVEL"
            :value="skill.level"
            class="w-35 lg:w-60"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
