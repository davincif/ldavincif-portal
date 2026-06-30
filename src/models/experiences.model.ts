export interface Experience {
  id: string;
  period: ExperiencePeriod;
  role: string;
  company: string;
  market: string[];
  consultingCompany?: string;
  techStack: string[];
  highlights: string[];
  sumary: string;
  activities: string[];
  location: ExperienceLocation;
  regime: ExperienceRegime;
  teamsize: CompanySizeRange;
  companySize: CompanySizeRange;
  removeFromYearOfExperience?: boolean;
}

export interface ExperiencePeriod {
  from: string;
  to?: string;
}

export interface ExperienceLocation {
  city: string;
  country: string;
}

export enum ExperienceRegime {
  REMOTE = 1,
  HYBRID,
  ON_SITE,
}

export interface CompanySizeRange {
  lowerRange?: number;
  upperRange?: number;
}

const EXPERIENCES: Experience[] = [
  {
    id: 'cetelem-decskills',
    period: {
      from: '2026-04-06',
    },
    role: 'Senior Software Dev',
    company: 'Cetelem',
    market: ['banking', 'financial'],
    consultingCompany: 'Decskills',
    techStack: ['vue', 'javascript'],
    highlights: [
      'webcomponents',
      'microfrontend',
      'requirements gathering',
      'software architecture',
    ],
    sumary:
      'Developed a PoC for a centralized platform unifying all bank pricing management systems into a single large Micro-frontend.',
    activities: [
      "Developed a Proof of Concept (PoC) for a centralized platform aimed at unifying all of the bank's pricing management systems into a single, cohesive micro-frontend built with Web Components and Vue.",
      "Maintained existing Web Components and executed the migration of legacy modules to Vue, optimizing them for seamless integration and embedding by the bank's external partners and third parties.",
      "Conducted comprehensive business requirements gathering and functional analysis specifically focused on the bank's pricing domain logic.",
    ],
    location: {
      city: 'Lisbon',
      country: 'Portugal',
    },
    regime: ExperienceRegime.HYBRID,
    teamsize: {
      lowerRange: 5,
      upperRange: 10,
    },
    companySize: {
      lowerRange: 10000,
    },
  },
  {
    id: 'santander-aubay',
    period: {
      from: '2024-08-05',
      to: '2026-03-31',
    },
    role: 'Senior Software Dev',
    company: 'Santander',
    market: ['banking', 'financial'],
    consultingCompany: 'Aubay',
    techStack: ['angular', 'stencil.js', 'javascript', 'typescript'],
    highlights: [
      'microfrontend',
      'tech lead',
      'requirements gathering',
      'software architecture',
      'mentorship',
    ],
    sumary:
      'Ensured structural consistency, code quality, and agile workflow adherence across internal banking micro-frontends.',
    activities: [
      'Angular development with strong focus on architecture alignment and maintainable code.',
      'Production of microfonts to populate the unified morder CRM style solution for the bank, its maintenance and modernization, as well as guidance to other teams that also developed solutions for it.',
      'Code review and quality assurance via PR analysis.',
      'Participating in requirement gathering with stakeholders and translating business needs into technical deliverables.',
      'Serving as the bridge between technical team, product owners, and upper management, ensuring clear communication and alignment regarding project status and priorities.',
    ],
    location: {
      city: 'Lisbon',
      country: 'Portugal',
    },
    regime: ExperienceRegime.REMOTE,
    teamsize: {
      lowerRange: 4,
      upperRange: 10,
    },
    companySize: {
      lowerRange: 10000,
    },
  },
  {
    id: 'ctw-aubay',
    period: {
      from: '2023-07-01',
      to: '2024-07-01',
    },
    role: 'Senior Software Dev',
    company: 'Critical Techworks',
    market: ['automobile', 'manufacturing'],
    consultingCompany: 'Aubay',
    techStack: ['angular', 'typescript', 'jenkins'],
    highlights: [
      'monolith',
      'tech lead',
      'software architecture',
      'mentorship',
    ],
    sumary:
      'Built highly specialized web tooling utilized directly by BMW manufacturing engineers during active production processes.',
    activities: [
      "Join one of the most efficient teams within the organization, as acknowledged by CTW's Internal Journal. This team was instrumental in the development of a highly specialized and extensive web tool utilized by BMW engineers during production processes. The project was intricately tied to BMW's business operations, with numerous team working concurrently on its development.",
      'Making use of my expertise as a senior developer, particularly in frontend development, I played a key role in advocating for and implementing best coding practices while ensuring alignment with existing architectural frameworks.',
      'Additionally, I provided mentorship and guidance to junior developers through knowledge-sharing sessions, with the aim of facilitating their professional growth.',
    ],
    location: {
      city: 'Lisbon',
      country: 'Portugal',
    },
    regime: ExperienceRegime.HYBRID,
    teamsize: {
      lowerRange: 10,
      upperRange: 14,
    },
    companySize: {
      lowerRange: 1000,
      upperRange: 5000,
    },
  },
  {
    id: 'aubay',
    period: {
      from: '2023-07-01',
      to: '2026-03-31',
    },
    role: 'Consultant',
    company: 'Aubay',
    market: ['software factory', 'consulting'],
    techStack: [],
    highlights: ['tech validation', 'webinares presenter', 'mentorship'],
    sumary:
      'At Aubay I mainly consulted for other companies while contributed with about to spread knowledge and training inside the company.',
    activities: [
      'Conducting training session and mentoring for colleagues in hard and soft skills.',
      'Holding webinars open for the public to share knowledge.',
      'Techinical evaluation from senior developers in Angular and Typescript/Javascript',
      'Serving as an Aubay consultant for Critical Techworks and Santander.',
    ],
    location: {
      city: 'Lisbon',
      country: 'Portugal',
    },
    regime: ExperienceRegime.REMOTE,
    teamsize: {
      lowerRange: 1,
      upperRange: 3,
    },
    companySize: {
      lowerRange: 1000,
      upperRange: 5000,
    },
  },
  {
    id: 'redepos',
    period: {
      from: '2021-07-28',
      to: '2023-06-12',
    },
    role: 'Senior Software Dev',
    company: 'RedePos',
    market: ['entertainment', 'software factory'],
    techStack: ['angular', 'vue', 'typescript'],
    highlights: ['software architecture', 'tech lead', 'microfrontend'],
    sumary:
      'Where I could lead a team in the development of a playfull web platform of significant finalcial impact at the company and at charity organizations, using hybrid web technologies; as well as working in the production of a large internal microfrontend CRM solution.',
    activities: [
      'Developing web/mobile hybrid solution using webview technologies.',
      "Architecting, alongside my team, a front-end for web that can be resilient and easy to modify in a context of a rapid changin produc in terms of features and requirements during all it's life time due to the nature of the enterprise's business.",
      "Implementing new front-end solutions to overcome some very specific problems to their business; like using mobile specific feature in a website when it's working inside an app without significatally changing the codebase.",
      'Helpint to develop a big microfrontend, a CRM like application, in order for the company to be able to manage her entire business, audit, and surveillance her entire operation countrywise.',
      "Being the Squad Leader of a small team; where we created and maintained a particular website that responded for a significant portion of the income of the most sold company's product.",
      'Helping the enterprise to create a culture of documentations, code patterns, cleaner structures, code review, git workflows, so on so forth; all in order to improve the code quality and production pipeline inside the teams.',
    ],
    location: {
      city: 'Recife',
      country: 'Brazil',
    },
    regime: ExperienceRegime.HYBRID,
    teamsize: {
      lowerRange: 4,
      upperRange: 7,
    },
    companySize: {
      upperRange: 50,
    },
  },
  {
    id: 'hikers',
    period: {
      from: '2019-03-19',
      to: '2021-07-22',
    },
    role: 'Software Developer',
    company: 'Hikers',
    market: ['software factory'],
    techStack: [
      'python',
      'django',
      'docker',
      'postgres',
      'graphQL',
      'rabbitMQ',
      'react',
      'angular',
      'electron',
      'typescript',
    ],
    highlights: ['fullstack', 'tech lead', 'software architecture'],
    sumary: '',
    activities: [
      'Developing desktop application using web stack technologies.',
      'Front-end and what we called of "The Front of the Back", which relates to a fairly big amount of work made at the client side that are not directly related to what is graphically seen by the user.',
      'Project, diagram and Implement a Data-Base using SQL with the Django ORM, but also NoSQL with MongoDB.',
      'Project and Implement Back-end micro-services in Django with python.',
      '"Dockerizing" the back-end micro-services and the website in order to make life easier for the deploy team.',
      "To Manage a small to create and maintain a solution that envolved: API's in microservices using RabbitMQ and GRPC to serve, a mobile app as well as a dashboard web site.",
      'We also had a failed project (due to business related reasons) that used the web stack to craete a desktop applicaiton using Electron.',
    ],
    location: {
      city: 'Recife',
      country: 'Brazil',
    },
    regime: ExperienceRegime.REMOTE,
    teamsize: {
      lowerRange: 3,
      upperRange: 7,
    },
    companySize: {
      upperRange: 15,
    },
  },
  {
    id: 'zeropay',
    period: {
      from: '2018-08-26',
      to: '2018-12-26',
    },
    role: 'Software Developer',
    company: 'ZeroPay',
    market: ['insurance', 'financial'],
    techStack: [
      'node',
      'angular',
      'express',
      'postgress',
      'mongoDB',
      'rabbitMQ',
      'typescript',
      'docker',
      'IBM Chatbot',
    ],
    highlights: ['fullstack'],
    sumary:
      'I was to help the creating of their insurance streamlined ecosystem. But ufortunantely if was my one and only not very good working experience in life. If you wanna know me, reach out to me! =D',
    activities: [
      'Helping to develop REST APIs with noSQL databases',
      'Helping to develop fronts for their selling insurance product',
      'Creating Docker images for their microservices',
      'Creating a small chatbot for the client attendment service',
    ],
    location: {
      city: 'Recife',
      country: 'Brazil',
    },
    regime: ExperienceRegime.ON_SITE,
    teamsize: {
      upperRange: 3,
    },
    companySize: {
      upperRange: 6,
    },
  },
  {
    id: 'nina!',
    period: {
      from: '2017-09-25',
      to: '2018-01-26',
    },
    role: 'Software Developer',
    company: 'Nina!',
    market: ['public safety', 'social'],
    techStack: [
      'python',
      'django',
      'postgress',
      'docker',
      'rabbitMQ',
      'angular',
      'typescript',
    ],
    highlights: ['fullstack', 'freelancer', 'software architecture'],
    sumary:
      "Nina! was a beautiful project in which I worked for, with the intent to give harassment victims a way to denounce it to the city's authority of Fortaleza, Brazil.",
    activities: [
      'Developing a dashboard aplication.',
      'Modeling and implementing microservices.',
      "Developing the Nina's APIs and dockerizing them as it was the main product of the enterprise.",
      'Modeling and implementing databases',
    ],
    location: {
      city: 'Recife',
      country: 'Brazil',
    },
    regime: ExperienceRegime.REMOTE,
    teamsize: {
      upperRange: 3,
    },
    companySize: {
      upperRange: 5,
    },
  },
  {
    id: 'tecnosolve',
    period: {
      from: '2017-06-25',
      to: '2018-07-26',
    },
    role: 'Junior Software Dev',
    company: 'Tecnosolve',
    market: ['software factory', 'retail'],
    techStack: [
      'python',
      'django',
      'postgres',
      'docker',
      'angular',
      'ionic',
      'jenkins',
    ],
    highlights: ['fullstack', 'software architecture'],
    sumary:
      "My first payed job! Where I worked for a PoC for the Sam's Club Wallmark line in Brazil. Working in small teams having to take care of the hole development cycle was such a great opportunity!",
    activities: [
      'Developing hybrid mobile/web apps using web technologies.',
      'Modeling and implementing microservices.',
      'Developing REST APIs and dockerizing them.',
      'Modeling and implementing small databases.',
      'Programing CI/CD tool at servers to automate some deploying work',
    ],
    location: {
      city: 'Recife',
      country: 'Brazil',
    },
    regime: ExperienceRegime.ON_SITE,
    teamsize: {
      upperRange: 8,
    },
    companySize: {
      upperRange: 12,
    },
  },
  {
    id: 'pratu',
    period: {
      from: '2015-12-24',
      to: '2016-05-25',
    },
    role: 'Entrepreneur Software Dev',
    company: 'PraTu',
    market: ['retail', 'social'],
    techStack: ['angular', 'ionic', 'firebase', 'javascript'],
    highlights: ['fullstack', 'entrepreneurship', 'software architecture'],
    sumary:
      'I Participated in the creating of the startup to build an app with a marketplace to sell food for the avarage income city workers at Recife',
    activities: [
      'We used web mobile technologies with noSQL databases and restful APIs.',
      'The PraTu project has a special place in my life. Along with a couple of friends, we started a business with a social ideia: to create a marketplace app to allows informal cookers and restaurants to sell affordable meals for mid to low-income workers in Recife, a large city in Brasil. The idea was to increase quality meal and decrease their cost for workers in the city. We failed comercially, but the values I learned from this experience were priceless: dealing with stakeholders, and a somewhat large amount of people with different background, culture, social classes, investors, professors, etc. This experience stayed with me to this day.',
    ],
    location: {
      city: 'Recife',
      country: 'Brazil',
    },
    regime: ExperienceRegime.HYBRID,
    teamsize: {
      upperRange: 14,
    },
    companySize: {
      upperRange: 14,
    },
    removeFromYearOfExperience: true,
  },
];

export default EXPERIENCES;
