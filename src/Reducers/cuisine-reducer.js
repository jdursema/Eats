const cardReducer = (state=[], action) => {
  switch (action.type) {
  case 'ADD_CUISINES':
    return [...action.CuisinesArray];
  default:
    return state;
  }
};

export default cardReducer;