const initialState = {
  cardList:[],
}

const cardReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INIT_CARD_LIST':

      return state


    default:
      return state
  }
}

export default cardReducer
