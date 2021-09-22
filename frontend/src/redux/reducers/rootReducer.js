import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import favoriteReducer from './favoritesReducer'
const rootReducer = combineReducers({
  eventsReducer, favoriteReducer
})

export default rootReducer
