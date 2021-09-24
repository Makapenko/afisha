const initialState = {
  subcategories: {
    lections: false,
    masterClass: false,
    educationOthers: false,
    dances: false,
    concerts: false,
    adults: false,
    barCinema: false,
    barLections: false,
    degustations: false,
    painting: false,
    expositionOther: false
  }
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SUBCAT":
      const b = action.payload;

      console.log(b);
      
      for (const [key, value] of Object.entries(state.subcategories)) {

        if (key === b) {
          // console.log(key, value, b);
          state.subcategories[key] = !value;
        }
      }
      return {
        ...state,
        subcategories: {
          ...state.subcategories,
        }
      };

    default:
      return state;
  }
};
export default filterReducer;
