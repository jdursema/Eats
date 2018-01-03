import { auth, db } from '../firebase';
import { fetchRestaurantData } from '../helper/helper';

export const setLocation = (location) => ({
  type: 'SET_LOCATION',
  location
});

export const checkUser = (email, password) => async (dispatch) => {
  auth.signInWithEmailAndPassword(email, password).then((user)=>{
    dispatch(signIn(user))
  }).catch((error) => {
    console.log(error);
  });
};

export const signIn = (user) => ({
  type: 'LOGIN',
  user
});

export const addUser = (email, username, password) => async (dispatch) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(signIn(user));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchRestaurants = () => async (dispatch) => {
  try {
    const fetchedData = await fetchRestaurantData();
    dispatch(createCards(fetchedData));

  } catch (error){
    console.log(error);
  }
};

export const createCards = (restaurantArray) => ({ 
  type: 'CREATE_CARDS',
  restaurantArray
});

export const addFavoriteToState = (cardData) => ({
  type: 'ADD_FAVORITE',
  cardData
});

export const postAddFavorite = (cardData, user) => (dispatch) => {
  // user.uid
  // const addFavoritePost = await fetch ('https://eats-8733e.firebaseio.com/', { 
  //   method: 'PUSH',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(cardData)
  // });

    addFavoriteToState(cardData)
  
}