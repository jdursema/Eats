const cuisineReducer = (state=[], action) => {
  switch (action.type) {
  case 'ADD_CUISINES':
    return [...action.cuisinesArray];
  default:
    return state;
  }
};

export default cuisineReducer;