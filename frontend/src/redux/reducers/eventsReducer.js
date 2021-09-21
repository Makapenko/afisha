
const initialState = {
  locations:[],
  events:[], 
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
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
