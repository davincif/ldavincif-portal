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
    name: 'skills',
    achor: 'skills',
  },
  {
    name: 'experiences',
    achor: 'experiences',
  },
  {
    name: 'my story',
    achor: 'my-story',
    isInConstruction: true,
  },
];

export default MENUS;
