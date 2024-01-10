import { combineReducers } from 'redux';
import listReducer from './list/slices';

const rootReducer = combineReducers({
  list: listReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
