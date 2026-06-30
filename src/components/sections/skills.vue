<script setup lang="ts">
import Input from '@/components/UI/input.vue';
import ProgressBar from '@/components/UI/progressBar.vue';
import LupeIcon from '@/icons/lupeIcon.vue';
import SKILLS, {
  MAX_SKILL_LEVEL,
  type MySkill,
  type Skill,
} from '@/models/skills.model';
import { capitalize } from '@/utils/string';
import { computed, ref } from 'vue';

const skillSearch = ref('');

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
    volunteer.skills = _divideInLevels(volunteer.skills)
      .map((skills) => skills.sort((a, b) => a.name.localeCompare(b.name)))
      .flat();

    if (skillSearch) {
      const skillLevel = parseInt(skillSearch.value);
      const saerchTerm = skillSearch.value.toLocaleLowerCase();

      volunteer.skills = volunteer.skills.filter(
        (skill) =>
          skill.name.toLocaleLowerCase().includes(saerchTerm) ||
          (!isNaN(skillLevel) && skill.level >= skillLevel),
      );
    }
  }

  return volunteers;
});

const _divideInLevels = (skills: Skill[]): Skill[][] => {
  if (!skills?.length) {
    return [];
  }

  const skillByLevels: Skill[][] = [];

  let level = -999;
  for (const skill of skills) {
    if (skill.level !== level) {
      skillByLevels.push([]);
      level = skill.level;
    }

    skillByLevels[skillByLevels.length - 1]?.push(skill);
  }

  return skillByLevels;
};
</script>

<template>
  <section id="skills" class="stage-height anchor-offset flex flex-col gap-8">
    <section class="flex flex-row items-center gap-4">
      <p class="text-cta">My Skills</p>
      <Input
        class="w-fit"
        type="text"
        id="skill-search"
        name="skill-search"
        placeholder="Search skills..."
        autocomplete="off"
        v-model:value="skillSearch"
      >
        <template v-slot:after-input>
          <LupeIcon />
        </template>
      </Input>
    </section>

    <div class="flex flex-row flex-wrap gap-8 lg:gap-16">
      <div
        :id="volunteer.id"
        v-for="volunteer in volunteerings"
        class="flex w-fit flex-col gap-4"
        v-show="volunteer.skills.length > 0"
      >
        <p class="text-over-bg-flashy">
          {{ volunteer.name }}
        </p>

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
