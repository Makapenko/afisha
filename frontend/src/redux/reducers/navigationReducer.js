import { PUSH_BUTOON } from "../actionTypes";

const initialState = {
  navigation: 'filter',
  renderNav: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_BUTOON:
      return {
        ...state,
        navigation: action.payload,
      };
      case 'DEL_NAV':
        return {
          ...state,
          renderNav: false,
        };
        case 'ADD_NAV':
        return {
          ...state,
          renderNav: true,
        };
    default:
      return state;
  }
};

export default userReducer;
