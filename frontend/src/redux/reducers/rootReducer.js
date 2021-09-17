import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
const rootReducer = combineReducers({
  eventsReducer,
})

export default rootReducer
