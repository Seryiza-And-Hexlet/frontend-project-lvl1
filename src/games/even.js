import { rangeRandom } from '../random.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 30;

const isEven = (n) => n % 2 === 0;

export const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

export const game = () => {
  const guessedNumber = rangeRandom(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isEven(guessedNumber) ? 'yes' : 'no';
  return [guessedNumber, correctAnswer];
};
