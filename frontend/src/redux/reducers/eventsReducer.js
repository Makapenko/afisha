const initialState = {
  locations: [],
  events: [],
  myEvents: []
};
const eventsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    //Первого кейса у нас фактически нет, убрать
    case "INIT_ALL":
      return {
        ...state,
        events: action.payload.events,
        locations: action.payload.locations,
      };
    case "ADD_EVENT":
      let filterSub = state.events.filter(el => el.subcategory === action.payload)
      return {
        ...state,
        myEvents: [...state.myEvents, ...filterSub]
      }
    case "DELETE_EVENT":
      const delFilter = state.myEvents.filter(el => el.subcategory !== action.payload)
      return {
        ...state,
        myEvents: delFilter
      }
    default:
      return state;
  }
};
export default eventsReducer;
