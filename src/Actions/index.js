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
  const data = await db.ref('users/' + user.uid).push({
    cardData
  });
  const id= await {cardId: data.path.pieces_[2]};
  const newCardData = {...cardData, ...id};
  console.log(id)
  const replaceData = await db.ref('users/' + user.uid + '/' + data.path.pieces_[2] ).update({cardData: newCardData});
  dispatch(addFavoriteToState(newCardData)); 
};

export const retrieveFavorites = (user) => async (dispatch) => {


  const favoritesFetch = auth[user.uid];

  
  const favorites = await db.ref('/users/' + user.uid ).once('value').then(function(snapshot) {
   return snapshot.val() || [];
  });
  
  const arrayKeys = Object.keys(favorites);
  const arrayOfObjects = arrayKeys.map((keys)=> {
    return Object.assign({}, {name: favorites[keys].cardData.name}, {data: favorites[keys].cardData.data}, {cardId: favorites[keys].cardData.cardId})
  });
  console.log(arrayOfObjects);
  dispatch(addUserFavorites(arrayOfObjects));

};

export const addUserFavorites = (array)=> ({
  type: 'ADD_USER_FAVORITES',
  array
});

export const postDeleteFavorite = (cardData, user) => async (dispatch) => {
  console.log(cardData)
  const data = await db.ref('users/' + user.uid + '/' + cardData.cardId).remove();

  dispatch(removeFavoriteFromStore(cardData))
};

export const removeFavoriteFromStore = (cardData)=> ({
  type: 'REMOVE_FAVORITE',
  cardData
});