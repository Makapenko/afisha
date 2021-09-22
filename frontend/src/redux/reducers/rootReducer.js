import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import favoriteReducer from './favoritesReducer'
import userReducer from './userReducer';
const rootReducer = combineReducers({
  eventsReducer, favoriteReduce, userReducer
})
export default rootReducer;