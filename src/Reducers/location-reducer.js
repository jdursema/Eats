const locationReducer = (state='Denver, CO', action) => {
  switch (action.type) {
  case 'SET_LOCATION':
    return action.location;
  default:
    return state;
  }
};

export default locationReducer