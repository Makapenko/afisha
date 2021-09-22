import { IS_AUTHENTICATED } from '../actionTypes';

const initialState = {
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
