/*eslint-disable max-len*/
/*eslint-disable no-unused-vars*/
/*eslint-disable id-blacklist*/
/*eslint-disable no-console*/

import { auth, db } from '../firebase';
import { fetchRestaurantData } from '../helper/restaurantHelper';
import { fetchCuisineIds } from '../helper/cuisineHelper';
import { getCuisineRecommendations } from '../helper/recommendationsHelper';
import { async } from '@firebase/util';
import { geolocationFetch } from '../helper/locationHelper';
import { searchLocationFetch } from '../helper/locationHelper2';

export const initialLocationFetch = () => async (dispatch) => {
  const fetchResponse = await geolocationFetch();

  dispatch(addLocationToStore(fetchResponse.location));
  dispatch(fetchRestaurants(fetchResponse.location.lat, fetchResponse.location.lng));
  dispatch(fetchCuisines(fetchResponse.location.lat, fetchResponse.location.lng));
};

export const addLocationToStore = (locationObj) => ({
  type: 'ADD_LOCATION',
  locationObj
});

export const fetchRestaurants = (lat, lng) => async (dispatch) => {
  try {
    const fetchedData = await fetchRestaurantData(lat, lng);
    dispatch(addCardsToStore(fetchedData));
  } catch (error){
    console.log(error);
  }
};

export const addCardsToStore = (restaurantArray) => ({ 
  type: 'CREATE_CARDS',
  restaurantArray
});

export const fetchCuisines = (lat, lng) => async (dispatch) => {
  try {
    const fetchedData = await fetchCuisineIds(lat, lng);
    dispatch(addCusineIdsToStore(fetchedData));
  } catch (error){
    console.log(error);
  }
};

export const addCusineIdsToStore = (CuisinesArray) => ({
  type: 'ADD_CUISINES',
  CuisinesArray
});


export const fetchRecommendations = (favsArray, locationObj, cuisineIdArray) => async (dispatch) => {
  const recommendationsArray = await getCuisineRecommendations(favsArray, locationObj, cuisineIdArray);
  dispatch(addRecommendationsToStore(recommendationsArray));
};


export const addRecommendationsToStore = (recommendationsArray) => ({
  type: 'ADD_RECOMMENDATIONS',
  recommendationsArray
});

export const getLocationOnSearch = (location, favsArray, cuisineArray) => async dispatch => {
  const fetchLocation = await searchLocationFetch(location);

  dispatch(addLocationToStore(fetchLocation));
  dispatch(fetchRestaurants(fetchLocation.lat, fetchLocation.lng));
};


export const checkUser = (email, password) => (dispatch) => {
  auth.signInWithEmailAndPassword(email, password).then((user)=>{
    dispatch(signIn(user));
    dispatch(retrieveFavorites(user)
    );
    dispatch(clearError());
  }).catch((error) => {
    dispatch(createErrorMessage(error.message));
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
      dispatch(clearError())
    })
    .catch((error) => {
      dispatch(createErrorMessage(error.message));
    });
};

export const createErrorMessage = (message) => ({
  type: 'ADD_ERROR',
  message
})

export const clearError = () => ({
  type: 'CLEAR_ERROR'
});




export const addFavoriteToState = (cardData) => ({
  type: 'ADD_FAVORITE',
  cardData
});

export const postAddFavorite = (cardData, user) => async (dispatch) => {
  const favoritesData = await db.ref('users/' + user.uid).push({
    cardData
  });
  const id= await {cardId: favoritesData.path.pieces_[2]};
  const newCardData = {...cardData, ...id};
  const replaceData = await db.ref('users/' + user.uid + '/' + favoritesData.path.pieces_[2] )
    .update({cardData: newCardData});
  dispatch(addFavoriteToState(newCardData)); 
};

export const retrieveFavorites = (user) => async (dispatch) => {
  const favorites = await db.ref('/users/' + user.uid )
    .once('value').then(function(snapshot) {
      return snapshot.val() || [];
    });
  
  const arrayKeys = Object.keys(favorites);
  const arrayOfObjects = arrayKeys.map((keys)=> {
    return Object.assign({}, 
      {name: favorites[keys].cardData.name}, 
      {data: favorites[keys].cardData.data}, 
      {cardId: favorites[keys].cardData.cardId});
  });
  dispatch(addUserFavorites(arrayOfObjects));

};

export const addUserFavorites = (array)=> ({
  type: 'ADD_USER_FAVORITES',
  array
});

export const postDeleteFavorite = (cardData, user) => async (dispatch) => {
  const removeFavoritesData = await db.ref('users/' + user.uid + '/' + cardData.cardId)
    .remove();

  dispatch(removeFavoriteFromStore(cardData));
};

export const removeFavoriteFromStore = (cardData)=> ({
  type: 'REMOVE_FAVORITE',
  cardData
});