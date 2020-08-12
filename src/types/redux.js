// @flow

export type SessionState = {|
  // right answers
  lettersAnswers: Array<number>,
  positionsAnswers: Array<number>,
  // users answers
  tappedLettersIndexList: Array<number>,
  tappedPositionsIndexList: Array<number>,
  // generated sequences of letters and positions
  lettersSequence: Array<string>,
  positionsSequence: Array<number>,
|};

export type State = {|
  sessionReducer: SessionState,
|};

export type Action = {|
  type: string,
  lettersAnswers?: Array<number>,
  positionsAnswers?: Array<number>,
  lettersSequence?: Array<string>,
  positionsSequence?: Array<number>,
  index?: number,
|};

export type AnswersAndSequences = {|
  positionsAnswers: Array<number>,
  lettersAnswers: Array<number>,
  positionsSequence: Array<number>,
  lettersSequence: Array<string>,
|};
