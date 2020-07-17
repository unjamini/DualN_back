// @flow

import type { SessionState, Action } from '../../types/redux';

export const initialState = {
  lettersAnswers: [],
  positionsAnswers: [],
  tappedLettersIndexList: [],
  tappedPositionsIndexList: [],
  lettersSequence: [],
  positionsSequence: [],
};

const sessionReducer = (state: SessionState = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_SEQUENCES':
      return {
        lettersAnswers: action.lettersAnswers,
        positionsAnswers: action.positionsAnswers,
        tappedLettersIndexList: [],
        tappedPositionsIndexList: [],
        lettersSequence: action.lettersSequence,
        positionsSequence: action.positionsSequence,
      };
    case 'ADD_POSITION':
      return {
        ...state,
        tappedPositionsIndexList: [
          ...state.tappedPositionsIndexList,
          action.index,
        ],
      };
    case 'ADD_LETTER':
      return {
        ...state,
        tappedLettersIndexList: [...state.tappedLettersIndexList, action.index],
      };
    default:
      return state;
  }
};

export default sessionReducer;
