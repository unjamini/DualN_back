// @flow

import type { AnswersAndSequences } from '../../types/redux';

export const addLetter = (index: number) => ({
  type: 'ADD_LETTER',
  index,
});

export const addPosition = (index: number) => ({
  type: 'ADD_POSITION',
  index,
});

export const setSequencesAndAnswers = ({
  positionsAnswers,
  lettersAnswers,
  positionsSequence,
  lettersSequence,
}: AnswersAndSequences) => ({
  type: 'SET_SEQUENCES',
  positionsAnswers,
  lettersAnswers,
  positionsSequence,
  lettersSequence,
});
