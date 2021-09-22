import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import favoriteReducer from './favoritesReducer'
import userReducer from './userReducer';

const rootReducer = combineReducers({
  eventsReducer, favoriteReducer, userReducer
})
export default rootReducer;
