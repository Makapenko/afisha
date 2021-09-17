import events from '../../models/example'
import places from '../../models/example'
const initialState = {
  places,
  events, 
}

const eventsReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INIT_EVENTS':

      return state


    default:
      return state
  }
}

export default eventsReducer
