// @flow

export type SessionState = {
  // верные ответы
  lettersAnswers: Array<number>,
  positionsAnswers: Array<number>,
  // выбранные пользователем
  tappedLettersIndexList: Array<number>,
  tappedPositionsIndexList: Array<number>,
  // сгенерированные последовательности
  lettersSequence: Array<string>,
  positionsSequence: Array<number>,
};

export type State = {
  sessionReducer: SessionState,
};

export type Action = {
  type: string,
  lettersAnswers?: Array<number>,
  positionsAnswers?: Array<number>,
  lettersSequence?: Array<string>,
  positionsSequence?: Array<number>,
  index?: number,
};

export type AnswersAndSequences = {|
  positionsAnswers: Array<number>,
  lettersAnswers: Array<number>,
  positionsSequence: Array<number>,
  lettersSequence: Array<string>,
|};
