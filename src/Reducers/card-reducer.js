const cardReducer = (state=[], action) => {
  switch (action.type) {
  case 'CREATE_CARDS':
    return action.restaurantArray;
  default:
    return state;
  }
};

export default cardReducer;