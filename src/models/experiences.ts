export const Experiences = [
  {
    id: 'cetelem',
    period: '06/04/2026 – Atualmente',
    role: 'Software Developer (Decskill Consultant)',
    company: 'Cetelem',
    highlight: 'Centralized Pricing Micro-frontend PoC',
    stack: ['Vue.js', 'Web Components', 'Micro-frontends'],
    summary:
      'Developed a PoC for a centralized platform unifying all bank pricing management systems into a single large Micro-frontend.',
    bullets: [
      'Standardized user experience, visual design, access management, and authorization.',
      'Maintained legacy Web Components and executed migration to Vue.js for third-party embedding.',
      'Conducted core business requirement analysis directly with the bank pricing domain.',
    ],
    isOpen: true, // Opens by default to catch the eye instantly
  },
  {
    id: 'santander',
    period: '05/08/2024 – 04/2026',
    role: 'Software Developer (Aubay Consultant)',
    company: 'Santander',
    highlight: 'Angular Excellence Team',
    stack: ['Angular', 'Micro-frontends', 'Software Architecture'],
    summary:
      'Ensured structural consistency, code quality, and agile workflow adherence across internal banking micro-frontends.',
    bullets: [
      'Contributed to a massive micro-frontend platform used daily by branch attendants.',
      'Designed and delivered core internal engineering solutions running inside the ecosystem.',
      'Conducted technical work breakdowns and rigorous PR code reviews.',
    ],
    isOpen: false,
  },
  {
    id: 'bmw',
    period: '01/07/2023 – 31/07/2024',
    role: 'Software Developer (Aubay Consultant)',
    company: 'CTW / BMW Group',
    highlight: 'High-Performance Factory Tools',
    stack: ['Angular', 'Software Architecture', 'Mentorship'],
    summary:
      'Built highly specialized web tooling utilized directly by BMW manufacturing engineers during active production processes.',
    bullets: [
      'Operated within one of the organization highest-acknowledged autonomous Scrum squads.',
      'Advocated for modern frontend coding standards while ensuring architectural compliance.',
      'Delivered public tech presentations and mentored junior developers.',
    ],
    isOpen: false,
  },
  {
    id: 'redepos',
    period: '28/07/2021 – 12/06/2023',
    role: 'FullStack Web Developer & Squad Leader',
    company: 'Rede Pos',
    highlight: 'Resilient Web Architecture & Tech Lead',
    stack: ['Angular', 'Micro-frontends', 'Software Architecture'],
    summary:
      'Architected resilient web frontends for high-frequency changing products and acted as Squad Leader for the company highest revenue-generating platform.',
    bullets: [
      'Developed hybrid web/mobile applications utilizing modern webview technologies.',
      'Led a focused team maintaining a web platform responsible for a major share of the core product income.',
      'Established an internal engineering culture of strict Git workflows, code reviews, and structured documentation.',
    ],
    isOpen: false,
  },
  {
    id: 'hikers',
    period: '19/03/2019 – 22/07/2021',
    role: 'FullStack Web Developer & Tech Lead',
    company: 'Hikers',
    highlight: 'Client background Logic & Microservices',
    stack: ['Python', 'Django', 'Docker', 'React', 'Electron'],
    summary:
      'Engineered complex background client-side domain logic ("The Front of the Back") and managed pods building full-stack microservice solutions.',
    bullets: [
      'Built heavy client-side non-graphical processing logic and relational databases utilizing PostgreSQL and Django ORM.',
      'Dockerized microservices communicating via Message Queues (MQ) and gRPC APIs.',
      'Developed experimental native desktop utilities built upon the Electron framework.',
    ],
    isOpen: false,
  },
  {
    id: 'zeropay',
    period: '26/08/2018 – 26/12/2018',
    role: 'Software Developer',
    company: 'Zeropay',
    highlight: 'RESTful APIs & Containerization',
    stack: ['Angular', 'Node.js', 'Express', 'Postgres'],
    summary:
      'Developed consumer-facing web interfaces and built containerized RESTful APIs linked to NoSQL databases.',
    bullets: [
      'Developed highly responsive frontend web layouts.',
      'Engineered RESTful APIs integrated with NoSQL datastores.',
      'Packaged and deployed core backend microservices using Docker.',
    ],
    isOpen: false,
  },
  {
    id: 'nina',
    period: '25/09/2017 – 26/01/2018',
    role: 'FullStack Web Developer',
    company: 'NINA',
    highlight: 'Core Product API Infrastructure',
    stack: ['Angular', 'Python', 'Django ORM', 'Docker'],
    summary:
      'Modeled, built, and containerized the company core API ecosystem and structured its underlying relational databases.',
    bullets: [
      'Engineered the core product APIs from scratch and set up their Docker environments.',
      'Modeled and deployed small, highly optimized relational databases.',
      'Developed user-facing web interface pages utilizing Angular.',
    ],
    isOpen: false,
  },
  {
    id: 'tecnosolve',
    period: '25/06/2017 – 26/07/2018',
    role: 'Software Developer',
    company: 'Tecnosolve',
    highlight: 'Hybrid Mobile & Automated CI/CD',
    stack: ['Ionic', 'Angular', 'Docker', 'CI/CD'],
    summary:
      'Developed hybrid mobile applications and programmed custom server CI/CD tools to automate continuous deployment rollouts.',
    bullets: [
      'Built cross-platform mobile application frontends using web technologies (Ionic/Angular).',
      'Programmed automation scripts directly on servers to streamline staging and production releases.',
      'Modeled relational databases and deployed secure, containerized RESTful APIs.',
    ],
    isOpen: false,
  },
  {
    id: 'pratu',
    period: '24/12/2015 – 25/05/2016',
    role: 'Software Developer (Co-Founder)',
    company: 'PraTu (Social Project)',
    highlight: 'Social Impact Food Marketplace MVP',
    stack: ['Ionic', 'Angular', 'Firebase'],
    summary:
      'Co-founded a high-impact social marketplace connecting informal cooks with low-income city workers to offer affordable meals across Recife.',
    bullets: [
      'Built a hybrid mobile marketplace platform backed by RESTful APIs and NoSQL databases.',
      'Navigated complex cross-cultural stakeholder relationships spanning informal workers, professors, and investors.',
      'Acquired core foundational values in technical perseverance and product discovery under extreme resource constraints.',
    ],
    isOpen: false,
  },
  {
    id: 'volunteering_physics',
    period: '28/02/2013 – Atualmente',
    role: 'Volunteer Physics Teacher',
    company: 'Community Program',
    highlight: 'Translating Hard Science for Social Impact',
    stack: ['Science Communication', 'Teaching', 'Social Impact'],
    summary:
      'Delivered full academic cycles of physics classes to high school students from low-income backgrounds, aiming to improve national university admission rates.',
    bullets: [
      'Prepared underprivileged youth for the rigorous Brazilian National University Entrance Exam (ENEM).',
      'Refined the skill required to deconstruct and translate complex mathematical and mechanical concepts for diverse audiences.',
      'Strengthened interpersonal communication, public speaking, and community empathy.',
    ],
    isOpen: false,
    isVolunteer: true, // Tag para estilização condicional no Vue
  },
];

export default Experiences;
