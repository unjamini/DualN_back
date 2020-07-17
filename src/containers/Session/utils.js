// @flow

import { possibleLetters } from '../../constants';
import type { AnswersAndSequences } from '../../types/redux';

const answersIndexes = (level: number = 1): Array<number> => {
  const arr = [];
  do {
    const num = Math.floor(Math.random() * 20) + level;
    if (arr.indexOf(num) === -1) {
      arr.push(num);
    }
  } while (arr.length < 10);
  return arr;
};

type Answers = {|
  positionsAnswers: Array<number>,
  lettersAnswers: Array<number>,
|};

const generateAnswers = (level: number = 1): Answers => {
  const permutations = answersIndexes(level);
  const semiAns = permutations.slice(0, 2);
  const positionsAns = [...semiAns, ...permutations.slice(2, 6)];
  const lettersAns = [...semiAns, ...permutations.slice(6)];
  return {
    positionsAnswers: positionsAns.sort((a, b) => a - b),
    lettersAnswers: lettersAns.sort((a, b) => a - b),
  };
};

export const generateSequences = (level: number = 1): AnswersAndSequences => {
  const { positionsAnswers, lettersAnswers } = generateAnswers(level);
  // числа от 0 до 8
  const positionsSequence: Array<number> = Array.from(
    { length: level + 20 },
    () => Math.floor(Math.random() * 9),
  );
  for (let i = level; i < positionsSequence.length; ++i) {
    if (positionsAnswers.indexOf(i) !== -1) {
      // должен совпадать с i - level эелементом
      positionsSequence[i] = positionsSequence[i - level];
    } else if (positionsSequence[i] === positionsSequence[i - level]) {
      // иначе совпадать не должны
      positionsSequence[i] = (positionsSequence[i] + 1) % 9;
    }
  }
  // буквы из массива
  const lettersSequence: Array<string> = Array.from(
    { length: level + 20 },
    () => possibleLetters[Math.floor(Math.random() * 9)],
  );
  for (let i = level; i < lettersSequence.length; ++i) {
    if (lettersAnswers.indexOf(i) !== -1) {
      // должен совпадать с i - level эелементом
      lettersSequence[i] = lettersSequence[i - level];
    } else if (lettersSequence[i] === lettersSequence[i - level]) {
      // иначе совпадать не должны
      lettersSequence[i] =
        possibleLetters[(possibleLetters.indexOf(lettersSequence[i]) + 1) % 9];
    }
  }
  return {
    positionsAnswers,
    lettersAnswers,
    positionsSequence,
    lettersSequence,
  };
};

export default { generateSequences };
