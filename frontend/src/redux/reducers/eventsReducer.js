
const initialState = {
  locations:[],
  events:[], 
}

const eventsReducer = (state = initialState, action) => {
console.log('state', state)
  switch (action.type) {
    case 'INIT_ALL':

      return {
        ...state,
        events: action.payload,
        locations: action.payload,
      }


    default:
      return state
  }
}

export default eventsReducer
