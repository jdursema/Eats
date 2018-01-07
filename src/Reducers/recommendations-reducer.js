const recommendationsReducer = (state=[], action) => {
  switch (action.type) {
  case 'ADD_RECOMMENDATIONS':
    return action.recommendationsArray;
  default: 
    return state;
  }
};

export default recommendationsReducer;