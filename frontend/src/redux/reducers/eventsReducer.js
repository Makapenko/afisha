const initialState = {
  locations: [],
  events: [],
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WIDERELEASE":
      let a = action.payload.events.filter((el) => el.subcategory === "Рок");
      return { ...state, events: a };

    case "DEL_WIDERELEASE":
      let b = action.payload.filter((el) => el.subcategory !== "Рок");
      return { ...state, events: b };

    default:
      return state;
  }
};

export default eventsReducer;

// Рабочая версия
// case "WIDERELEASE":
//   let a = action.payload.events.filter((el) => el.subcategory === "Рок");
//   return { ...state, events: a };

// case "DEL_WIDERELEASE":
//   let b = action.payload.filter((el) => el.subcategory !== "Рок");
//   console.log(b);
//   return { ...state, events: b };

// default:
//   return state;
// }
