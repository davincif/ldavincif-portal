export interface Menu {
  name: string;
  achor: string;
  isInConstruction?: boolean;
}

const MENUS: Menu[] = [
  {
    name: 'who',
    achor: 'who',
  },
  {
    name: 'exprience',
    achor: 'exprience',
  },
  {
    name: 'skills',
    achor: 'skills',
    isInConstruction: true,
  },
  // {
  //   name: 'volunteering',
  //   achor: 'volunteering',
  // },
  {
    name: 'my story',
    achor: 'my-story',
    isInConstruction: true,
  },
  // {
  //   name: 'projects',
  //   achor: 'projects',
  //   isInConstruction: true,
  // },
];

export default MENUS;
