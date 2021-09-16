import { combineReducers } from 'redux';

import repoReducer from './repository';
import ownerReducer from './owner';
import commitReducer from './commit';

const rootReducer = combineReducers({
  repository: repoReducer,
  owner: ownerReducer,
  commit: commitReducer,
});

export default rootReducer;
