export const rangeRandom = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
export const randomItem = (array) => array[rangeRandom(0, array.length - 1)];
