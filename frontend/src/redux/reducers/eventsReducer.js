const initialState = {
  locations:[],
  events:[],
  myEvents: [] 
}

// const eventsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INIT_ALL':

//       return {
//         ...state,
//         events: action.payload.events,
//         locations: action.payload.locations,
//       }

//     // case 'ADD_EVENT':
//     //   return {
//     //     ...state.events, 
//     //     myEvents:  

//     //   }  

//     default:
//       return state
//   }
// }

// export default eventsReducer


// Рабочая версия
const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
case "WIDERELEASE":
  let a = action.payload.events.filter((el) => el.subcategory === "Рок");
  return { ...state, events: a };

case "DEL_WIDERELEASE":
  // let b = action.payload.filter((el) => el.subcategory !== "Рок");
  // console.log(b);
  // return { ...state, events: b };
  console.log(state);
  let b = state.events.filter((el) => el.subcategory !== "Рок")
    return {
      ...state, events:b
    }
default:
  return state;

}}

export default eventsReducer;
