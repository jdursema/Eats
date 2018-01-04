const favoritesReducer = (state=[], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...state, action.cardData];
  case 'ADD_USER_FAVORITES':
    return [...state, ...action.array]
  default:
    return state;
  }
};

export default favoritesReducer;