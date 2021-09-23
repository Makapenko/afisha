import { SUBCAT_ON_OFF } from "../actionTypes";

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
    case SUBCAT_ON_OFF:
      const data = action.payload;
      
      for (const [key, value] of Object.entries(state.subcategories)) {
        if (key === data) {
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
