export interface MySkill {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export const MAX_SKILL_LEVEL = 5;

const SKILLS: MySkill[] = [
  {
    id: 'summary',
    name: 'summary',
    skills: [
      { name: 'front-end for web', level: 5 },
      { name: 'full-stack for web', level: 3 },
      { name: 'back-end for web', level: 3 },
      { name: 'linux', level: 2 },
      { name: 'games', level: 1 },
      { name: 'hardware', level: 1 },
    ],
  },
  {
    id: 'languages',
    name: 'languages',
    skills: [
      { name: 'Portuguese (native)', level: 5 },
      { name: 'English', level: 5 },
      { name: 'Spanish', level: 4 },
      { name: 'Russian', level: 1 },
    ],
  },

  {
    id: 'soft-skills',
    name: 'soft skills for software',
    skills: [
      { name: 'microfrontend', level: 5 },
      { name: 'microservices', level: 3 },
      { name: 'webcomponents', level: 4 },
      { name: 'monolith', level: 5 },
      { name: 'REST APIs', level: 5 },
      { name: 'tech lead', level: 3 },
      { name: 'requirements gathering', level: 4 },
      { name: 'software architecture', level: 5 },
      { name: 'mentorship', level: 3 },
      { name: 'scrum', level: 5 },
    ],
  },
  {
    id: 'passion-projects',
    name: 'passion projects',
    skills: [
      { name: 'C', level: 3 },
      { name: 'C++', level: 1 },
      { name: 'GNU Make', level: 2 },
      { name: 'Lua', level: 4 },
      { name: 'C#', level: 3 },
      { name: 'Unity', level: 2 },
      { name: 'Godot', level: 2 },
      { name: 'GDScript', level: 4 },
      { name: 'Raspberry', level: 2 },
      { name: 'Kubernetes', level: 1 },
      { name: 'bash script', level: 2 },
    ],
  },
  {
    id: 'professionals',
    name: 'Professionals',
    skills: [
      { name: 'javascript', level: 5 },
      { name: 'typescript', level: 5 },
      { name: 'HTML', level: 5 },
      { name: 'css / scss', level: 5 },
      { name: 'tailwind', level: 5 },
      { name: 'angular', level: 5 },
      { name: 'vue', level: 4 },
      { name: 'react', level: 3 },
      { name: 'stencil.js', level: 2 },
      { name: 'python', level: 3 },
      { name: 'django', level: 3 },
      { name: 'falcon', level: 2 },
      { name: 'node', level: 4 },
      { name: 'express', level: 3 },
      { name: 'docker', level: 2 },
      { name: 'jest.js', level: 2 },
      { name: 'electron', level: 2 },
      { name: 'ionic', level: 2 },
      { name: 'quasar', level: 3 },
      { name: 'postgres', level: 2 },
      { name: 'mongoDB', level: 2 },
      { name: 'rabbitMQ', level: 2 },
      { name: 'graphQL', level: 1 },
      { name: 'cypress', level: 1 },
    ],
  },
];

export default SKILLS;
