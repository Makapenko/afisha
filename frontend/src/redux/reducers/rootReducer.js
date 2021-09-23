import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import favoriteReducer from './favoritesReducer'
import userReducer from './userReducer';
import navigationReducer from './navigationReducer';

const rootReducer = combineReducers({
  eventsReducer, favoriteReducer, userReducer, navigationReducer
})
export default rootReducer;
