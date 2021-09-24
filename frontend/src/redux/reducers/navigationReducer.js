import { PUSH_BUTOON } from "../actionTypes";

const initialState = {
  navigation: 'filter',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_BUTOON:
      return {
        ...state,
        navigation: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
