
const initialState = {
  places:[],
  events:[], 
}

const eventsReducer = (state = initialState, action) => {
console.log('state', state)
  switch (action.type) {
    case 'INIT_EVENTS':

      return {
        ...state,
        events: action.payload
      }


    default:
      return state
  }
}

export default eventsReducer
