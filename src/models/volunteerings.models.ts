import type {
  CompanySizeRange,
  ExperienceLocation,
  ExperiencePeriod,
} from './experiences.model';

export interface Volunteering {
  id: string;
  period: ExperiencePeriod;
  role: string;
  company: string;
  location: VolunteeringLocation;
  sumary: string;
  activities: string[];
  teamsize: CompanySizeRange;
}

export interface VolunteeringLocation extends ExperienceLocation {
  address: string;
}

const VOLUNTEERING: Volunteering[] = [
  {
    id: 'techer-vestibular',
    period: {
      from: '2013-10-29',
      to: '2015-02-28',
    },
    role: 'High School Physics Teacher',
    company: 'Escola Missionario São Bento',
    sumary:
      "I Taught physics to high school students from low-income backgrounds as part of a community program aiming to improve university admission rates. Delivered two full academic cycles of classes, helping students prepare for the Brazil's national university entrance exam, ENEM. This experience strengthened my communication skills and reinforced my ability to simplify complex topics for diverse audiences.",
    activities: [
      'Planing how to explain high school physics for students from low-income backgrounds, that not always understood math concepts very well',
      'Fostigating a curious invorinmnet for science in order to get the students interted in the subject and schoolar curriculum demanded by the exame',
      'Applying periodical exams',
      'colaborating with the coordination of the school and the other teacher to create the proper inviroment to help those students to build the educational gap they had in order to have a heigher chanced to get into a good Univercity',
    ],
    location: {
      city: 'Recife',
      country: 'Brazil',
      address: 'Rua Capitão Vicente Curado, 350 - COHAB',
    },
    teamsize: {
      lowerRange: 7,
      upperRange: 10,
    },
  },
];

export default VOLUNTEERING;
