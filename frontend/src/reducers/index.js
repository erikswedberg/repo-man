import { combineReducers } from 'redux';

import repoReducer from './repo';

const rootReducer = combineReducers({
  repo: repoReducer,
});

export default rootReducer;
