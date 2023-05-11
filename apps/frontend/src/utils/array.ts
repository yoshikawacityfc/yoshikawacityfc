export const isMaxIndex = (array: unknown[], index: number): boolean => {
  return index === array.length - 1;
};

export const isNotMaxIndex = (array: unknown[], index: number): boolean => {
  return !isMaxIndex(array, index);
};
