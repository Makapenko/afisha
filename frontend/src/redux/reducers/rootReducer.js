import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  eventsReducer,
  userReducer,
});

export default rootReducer;
