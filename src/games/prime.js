import { rangeRandom } from '../random.js';

const MIN_NUMBER = 2;
const MAX_NUMBER = 100;

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const game = () => {
  const number = rangeRandom(MIN_NUMBER, MAX_NUMBER);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};
