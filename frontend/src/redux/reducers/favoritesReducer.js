
const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      let value = false
      let index;
      state.map(el => {
        if (el == action.payload) {
          value = true
          index = state.indexOf(action.payload);

        }
        return el
      })

      if (value) {

        state.splice(index, 1);
        return [...state]

      } else {

        return [
          ...state, action.payload
        ];
      }



    default:
      return state;
  }
};
export default favoriteReducer;
