import firebase, { auth } from '../firebase';

export const setLocation = (location) => ({
  type: 'SET_LOCATION',
  location
});

export const checkUser = (email, password) => async (dispatch) => {
  console.log(4)
  auth.signInWithEmailAndPassword(email, password).then((user)=>{
    dispatch(signIn(user))
  }).catch((error) => {
    return 'error'
  })
}

export const signIn = (user) => ({
  type: 'LOGIN',
  user
})


