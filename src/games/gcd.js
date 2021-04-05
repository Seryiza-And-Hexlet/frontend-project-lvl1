import { rangeRandom } from '../random.js';

const MIN_NUMBER = 2;
const MAX_NUMBER = 50;

const calcGCD = (a, b) => {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let remainder = max % min;

  while (remainder !== 0) {
    max = min;
    min = remainder;
    remainder = max % min;
  }
  return min;
};

export const RULES = 'Find the greatest common divisor of given numbers.';

export const game = () => {
  const a = rangeRandom(MIN_NUMBER, MAX_NUMBER);
  const b = rangeRandom(MIN_NUMBER, MAX_NUMBER);
  const gcd = calcGCD(a, b);
  const question = `${a} ${b}`;
  return [question, gcd];
};
