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
<<<<<<< HEAD
    // case 'INIT_ALL':

    //   return {
    //     ...state,
    //     events: action.payload.events,
    //     locations: action.payload.locations,
    //   }

      case 'INIT_WIDERELEASE':
        let a = action.payload.events.filter( (el) =>
        el.subcategory === "Рок")
        console.log("+++++++++++");
        return {...state,
        events: a
        }

      case 'CLEAR_FILTER':
        console.log(action.payload);
        let b = action.payload.filter( (el) =>
        el.subcategory !== "Рок")
        console.log(b,"&&&&&&&&&&&&");
        return {...state,
        events: b
        }
        // return {...state, events: state.events.filter(
        //   el => el.id !== action.payload
        // )}
        


    default:
      return state
  }
}

export default eventsReducer
=======
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
>>>>>>> a59dddf7400fec308daba75144d5551a4c860786
