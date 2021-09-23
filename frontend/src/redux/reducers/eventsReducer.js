const initialState = {
  locations: [],
  events: [],
};
const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    //Первого кейса у нас фактически нет, убрать
    case "INIT_ALL":
      return {
        ...state,
        events: action.payload.events,
        locations: action.payload.locations,
      };
    case "WIDERELEASE":

      let a = action.payload.all.events.filter(
        (el) => el.subcategory === action.payload.c
      );
      let arr = []
      
      state.locations.map(el => { if (arr.indexOf(el.id) < 0) arr.push(el.id) })
      a.map(el => { if (arr.indexOf(el.LocationId) < 0) arr.push(el.LocationId) })
      let arr1 = []
      action.payload.all.locations.map(el => { if (arr.indexOf(el.id) >= 0) arr1.push(el) })

      return { ...state, events: [...state.events, ...a], locations: [...arr1] };
    case "DEL_WIDERELEASE":
      let b = state.events.filter(
        (el) => el.subcategory !== `${action.payload}`
      );
      let arr2 = []
      b.map(el => { if (arr2.indexOf(el.LocationId) < 0) arr2.push(el.LocationId) })
      let arrNew = []
      state.locations.map(el => {
        if (arr2.indexOf(el.id) >= 0)
          arrNew.push(el)
      }
      )

      return {
        ...state,
        events: b,
        locations: arrNew
      };

    case "IS_FREE_EVENT":

      let all 
      all = action.payload.filter(function (el) {
        return hasNumbers(el.price) !== true
      })
      function hasNumbers(t) {
        var regex = /\d/g;
        return regex.test(t);
      }

      return {
        ...state,
        events:all
      }
    case "ALL_EVENT":
      return {
       ...state,
       events:action.payload.events
      }
    default:
      return state;
  }
};
export default eventsReducer;
