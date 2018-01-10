const favoritesReducer = (state=[], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...state, action.cardData];
  case 'ADD_USER_FAVORITES':
    return [...action.array];
  case 'REMOVE_FAVORITE':
    return state.filter(restaurant => restaurant.name !== action.cardData.name);
  case 'LOG_OUT':
    return [];
  default:
    return state;
  }
};

export default favoritesReducer;