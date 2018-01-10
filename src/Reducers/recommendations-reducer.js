const recommendationsReducer = (state=[], action) => {
  switch (action.type) {
  case 'ADD_RECOMMENDATIONS':
    return action.recommendationsArray;
  case 'LOG_OUT':
    return [];
  default: 
    return state;
  }
};

export default recommendationsReducer;