// @flow

import type { AnswersAndSequences, Action } from '../../types/redux';

export const addLetter = (index: number): Action => ({
  type: 'ADD_LETTER',
  index,
});

export const addPosition = (index: number): Action => ({
  type: 'ADD_POSITION',
  index,
});

export const setSequencesAndAnswers = ({
  positionsAnswers,
  lettersAnswers,
  positionsSequence,
  lettersSequence,
}: AnswersAndSequences): Action => ({
  type: 'SET_SEQUENCES',
  positionsAnswers,
  lettersAnswers,
  positionsSequence,
  lettersSequence,
});
