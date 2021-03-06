/* // Task
const theMeaning: unknown = 42;
const only42 = (number: 42) => {
  return `${number} the meaning of life, the universe and everything`;
};
only42(theMeaning);
*/

const theMeaning: 42 = 42;

const only42 = (number: 42): string => {
  return `${number} the meaning of life, the universe and everything`;
};

only42(theMeaning);