const errorReducer = (state='', action) => {
  switch (action.type) {
  case 'ADD_ERROR':
    return action.message;
  case 'CLEAR_ERROR':
    return '';
  default:
    return state;
  }
};

export default errorReducer;