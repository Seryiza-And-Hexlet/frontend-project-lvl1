import { rangeRandom, randomItem } from '../random.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 30;
const OPERATIONS = ['+', '-', '*'];

const calculateResult = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Operation ${operation} not identified.`);
  }
};

export const RULES = 'What is the result of the expression?';

export const game = () => {
  const a = rangeRandom(MIN_NUMBER, MAX_NUMBER);
  const b = rangeRandom(MIN_NUMBER, MAX_NUMBER);
  const operation = randomItem(OPERATIONS);
  const question = `${a} ${operation} ${b}`;
  const result = calculateResult(a, b, operation);
  return [question, result];
};
