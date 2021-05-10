const colors = [
  '#1de9b6',
  '#ffc400',
  '#d500f9',
  '#ff1744',
  '#00e676',
  '#651fff',
  '#ff9100',
  '#00b0ff',
  '#76ff03',
];

let currentId = 0;

export const getNextColor = (): string => {
  if (currentId >= colors.length) currentId = 0;
  return colors[currentId++];
};

export const getMyColor = (id: number): string => {
  return colors[id % colors.length];
};
