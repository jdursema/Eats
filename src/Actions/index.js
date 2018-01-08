/*eslint-disable max-len*/
/*eslint-disable no-unused-vars*/
/*eslint-disable id-blacklist*/
/*eslint-disable no-console*/

import { auth, db } from '../firebase';
import { fetchRestaurantData, fetchCuisineIds } from '../helper/helper';
import { getCuisineRecommendations } from '../helper/helper2';
import { async } from '@firebase/util';

export const fetchLocation = () => async (dispatch) => {
  const fetchLocation = await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDC7CylU8MdPkC3iKrzBb63HkNS2uJQJGM`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json' 
    }
  });
  const fetchResponse = await fetchLocation.json();

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

export const getLocation = (location, favsArray, cuisineArray) => async dispatch => {
  const fetchLocation = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBkrloNv5wMHVMAVChSLu2raGAwY8dKG6U`);

  const fetchResponse = await fetchLocation.json();
  const locationData = fetchResponse.results[0];
  const cleanData = await Object.assign({}, {name: locationData.formatted_address}, locationData.geometry.location
  );

  dispatch(addLocationToStore(cleanData));
  dispatch(fetchRestaurants(cleanData.lat, cleanData.lng));
};


export const checkUser = (email, password) => async (dispatch) => {
  auth.signInWithEmailAndPassword(email, password).then((user)=>{
    dispatch(signIn(user));
    dispatch(retrieveFavorites(user));
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