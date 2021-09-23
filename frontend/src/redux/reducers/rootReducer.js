import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import favoriteReducer from './favoritesReducer'
import userReducer from './userReducer';

import navigationReducer from './navigationReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  eventsReducer, favoriteReducer, userReducer, navigationReducer, filterReducer


})
export default rootReducer;
