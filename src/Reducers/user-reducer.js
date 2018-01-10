const userReducer = (state={}, action) => {
  switch (action.type) {
  case 'LOGIN':
    return action.user;
  case 'LOG_OUT':
    return {};
  default: 
    return state;
  }
};

export default userReducer;