import events from '../../models/example'

const initialState = {
  cardList:[],
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
