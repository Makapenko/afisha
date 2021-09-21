const initialState = {
  locations:[],
  events:[],
  myEvents: [] ,
  counter:0
}

const eventsReducer = (state = initialState, action) => {
  console.log('act',action.payload);
  switch (action.type) {
    case 'INIT_ALL':

      return {
        ...state,
        events: action.payload.events,
        locations: action.payload.locations,
      }
      case 'ADD_EVENT':
        return{
          couner: state.counter + 1
        }
        case 'DELETE_EVENT':
        return{
          couner: state.counter -1
        }

    // case 'ADD_EVENT':
    //   return {
    //     ...state.events, 
    //     myEvents:  

    //   }  

    default:
      return state
  }
}

export default eventsReducer


// Рабочая версия
// const eventsReducer = (state = initialState, action) => {
//   switch (action.type) {
// case "WIDERELEASE":
//   let a = action.payload.events.filter((el) => el.subcategory === "Рок");
//   return { ...state, events: a };

// case "DEL_WIDERELEASE":
//   console.log(state);
//   let b = state.events.filter((el) => el.subcategory !== "Рок")
//     return {
//       ...state, events:b
//     }
// default:
//   return state;

// }}

// export default eventsReducer;
