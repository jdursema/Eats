import { auth } from '../firebase';
// import { apiKey } from '../helper/.apikey.js';
import { fetchRestaurantData } from '../helper/helper';

export const setLocation = (location) => ({
  type: 'SET_LOCATION',
  location
});



export const checkUser = (email, password) => async (dispatch) => {
  auth.signInWithEmailAndPassword(email, password).then((user)=>{
    dispatch(signIn(user))
  }).catch((error) => {
    console.log(error)
  })
}

export const signIn = (user) => ({
  type: 'LOGIN',
  user
})

export const addUser = (email, username, password) => async (dispatch) => {
  auth.createUserWithEmailAndPassword(email, password)
  .then((user)=>{
    dispatch(signIn(user))
  })
  .catch((error) => {
    console.log
  })
}


export const fetchRestaurants = () => async (dispatch) => {
  try{
    const fetchedData= await fetchRestaurantData()
    console.log(fetchedData)

    
  } catch (error){
    console.log(error)
  }
}




