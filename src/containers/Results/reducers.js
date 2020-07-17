export const initialState = {
  level: 0,
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_LEVEL':
      return {
        level: state.level + 1,
      };
    case 'DECREASE_LEVEL':
      return {
        level: state.level > 1 ? state.level - 1 : state.level,
      };
    default:
      return state;
  }
};

export default resultsReducer;
