const userReducer = (state='', action) => {
  switch (action.type) {
  case 'LOGIN':
    console.log(action)
    return action.user;
  default: 
    return state;
  }
};

export default userReducer;