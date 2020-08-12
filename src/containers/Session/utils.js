// @flow

import { possibleLetters } from '../../constants';
import type { AnswersAndSequences } from '../../types/redux';

const answersIndexes = (level: number = 1): Array<number> => {
  const arr = [];
  while (arr.length < 10) {
    const num = Math.floor(Math.random() * 20) + level;
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
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
  // numbers from 0 to 8
  const positionsSequence: Array<number> = Array.from(
    { length: level + 20 },
    () => Math.floor(Math.random() * 9),
  );
  for (let i = level; i < positionsSequence.length; i += 1) {
    if (positionsAnswers.includes(i)) {
      // should be the same as the element at (i - level) position
      positionsSequence[i] = positionsSequence[i - level];
    } else if (positionsSequence[i] === positionsSequence[i - level]) {
      // otherwise they should be different
      positionsSequence[i] = (positionsSequence[i] + 1) % 9;
    }
  }
  const lettersSequence: Array<string> = Array.from(
    { length: level + 20 },
    () => possibleLetters[Math.floor(Math.random() * 9)],
  );
  for (let i = level; i < lettersSequence.length; i += 1) {
    if (lettersAnswers.includes(i)) {
      // should be the same as the element at (i - level) position
      lettersSequence[i] = lettersSequence[i - level];
    } else if (lettersSequence[i] === lettersSequence[i - level]) {
      // otherwise they should be different
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
