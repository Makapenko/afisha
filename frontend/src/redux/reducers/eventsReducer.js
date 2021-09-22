const initialState = {
  locations: [],
  events: [],
};
const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_ADD_TO_STATE":
      let a = action.payload.all.events.filter(
        (el) => el.subcategory === action.payload.c
      );
      return { ...state, events: [...state.events, ...a] };
    case "DELETE_FILTER":
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
