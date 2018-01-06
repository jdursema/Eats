const locationReducer = (state={}, action) => {
  switch (action.type) {
  case 'SET_LOCATION':
    return action.location;
  case 'ADD_LOCATION':
    return action.locationObj;
  default:
    return state;
  }
};

export default locationReducer;