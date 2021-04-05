import readlineSync from 'readline-sync';

const GAMES_COUNT_TO_WIN = 3;

export default (rules, runGame) => {
  console.log('Welcome to the Brain Games!');

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(rules);

  for (let currentGame = 0; currentGame < GAMES_COUNT_TO_WIN; currentGame += 1) {
    const [question, correctAnswer] = runGame();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log("Let's try again, Bill!");
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};
