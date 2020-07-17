// @flow

import { combineReducers } from 'redux';
import sessionReducer, {
  initialState as initialSessionReducer,
} from './containers/Session/reducers';

const appReducer = combineReducers({
  sessionReducer,
});

export const initialState = {
  sessionReducer: initialSessionReducer,
};

export default appReducer;
