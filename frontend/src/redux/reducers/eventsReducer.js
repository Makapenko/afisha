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
//     // case 'INIT_ALL':

//     //   return {
//     //     ...state,
//     //     events: action.payload.events,
//     //     locations: action.payload.locations,
//     //   }

//       case 'INIT_WIDERELEASE':
//         let a = action.payload.events.filter( (el) =>
//         el.subcategory === "Рок")
//         console.log("+++++++++++");
//         return {...state,
//         events: a
//         }

//       case 'CLEAR_FILTER':
//         console.log(action.payload);
//         let b = action.payload.filter( (el) =>
//         el.subcategory !== "Рок")
//         console.log(b,"&&&&&&&&&&&&");
//         return {...state,
//         events: b
//         }
//         // return {...state, events: state.events.filter(
//         //   el => el.id !== action.payload
//         // )}
        


//     default:
//       return state
//   }
// }

// export default eventsReducer
case 'INIT_ALL':

        return {
          ...state,
          events: action.payload.events,
          locations: action.payload.locations,
        }
case "WIDERELEASE":
  // console.log(action.payload);
  let a = action.payload.all.events.filter((el) => el.subcategory ==action.payload.c);
  // console.log(state);
  return { ...state, events: [...state.events, ...a ]};

case "DEL_WIDERELEASE":
  // let b = action.payload.filter((el) => el.subcategory !== "Рок");
  // console.log(b);
  // return { ...state, events: b };
  // console.log(`${action.payload}`);
  let b = state.events.filter((el) => el.subcategory !== `${action.payload}`)
    return {
      ...state, events:b
    }
default:
  return state;

}}

export default eventsReducer;
