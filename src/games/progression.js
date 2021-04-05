import { rangeRandom, randomItem } from '../random.js';

const MIN_START = 1;
const MAX_START = 40;
const MIN_DELTA = 1;
const MAX_DELTA = 10;
const MIN_LENGTH = 5;
const MAX_LENGTH = 15;
const ITEMS_SEPARATOR = ' ';

const getHidedQuestion = (progression, hidedItem) => progression
  .map((item) => (item !== hidedItem ? item : '..'))
  .join(ITEMS_SEPARATOR);

export const RULES = 'What number is missing in the progression?';

export const game = () => {
  const start = rangeRandom(MIN_START, MAX_START);
  const length = rangeRandom(MIN_LENGTH, MAX_LENGTH);
  const delta = rangeRandom(MIN_DELTA, MAX_DELTA);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * delta);
  }

  const hidedItem = randomItem(progression);
  const question = getHidedQuestion(progression, hidedItem);
  return [question, hidedItem];
};
