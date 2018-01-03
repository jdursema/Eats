const favoritesReducer = (state=[], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...state, action.cardData];
  default:
    return state;
  }
};

export default favoritesReducer;