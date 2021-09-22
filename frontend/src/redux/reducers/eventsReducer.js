const initialState = {
  locations: [],
  events: [],
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
    case "WIDERELEASE":
      let a = action.payload.all.events.filter(
        (el) => el.subcategory === action.payload.c
      );
      return { ...state, events: [...state.events, ...a] };
    case "DEL_WIDERELEASE":
      let b = state.events.filter(
        (el) => el.subcategory !== `${action.payload}`
      );
      return {
        ...state,
        events: b,
      };
    default:
      return state;
  }
};
export default eventsReducer;
