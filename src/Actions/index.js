import { auth, db } from '../firebase';
import { fetchRestaurantData } from '../helper/helper';

export const setLocation = (location) => ({
  type: 'SET_LOCATION',
  location
});

export const checkUser = (email, password) => async (dispatch) => {
  auth.signInWithEmailAndPassword(email, password).then((user)=>{
    dispatch(signIn(user))
    dispatch(retrieveFavorites(user))
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

export const postAddFavorite = (cardData, user) => async (dispatch) => {
  const data = await db.ref('users/' + user.uid + 'favorite').push({
    favoriteCards: cardData
  });
  const id= await {cardId: data.path.pieces_[2]}
  const newCardData = {...cardData, ...id}
  dispatch(addFavoriteToState(newCardData)) 
};

export const retrieveFavorites = (user) => async (dispatch) => {


  const favoritesFetch = auth[user.uid];

  const favorites = await db.ref('/users/' + user.uid ).once('value').then(function(snapshot) {
   return snapshot.val() || []
  });

  const arrayOfFavorites = Object.entries(favorites)
  const arrayOfObjects = arrayOfFavorites.map((array)=> {
    return {card: array[0], ...array[1].favorites}
  })
  dispatch(addUserFavorites(arrayOfObjects))

};

export const addUserFavorites = (array)=> ({
  type: 'ADD_USER_FAVORITES',
  array
});


