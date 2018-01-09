/*eslint-disable max-len*/
/*eslint-disable id-blacklist*/

import { apiKey } from './.apikey.js';

export const getCuisineRecommendations = async (favsArray, locationObj, cuisineIdArray) => {
  const favsObj = favsArray.reduce(( acc, favRest )=> {
    let cuisinesArray = (favRest.data.Cuisines).split(', ');

    cuisinesArray.forEach((cuisine)=> {
      if (!acc[cuisine]){
        acc[cuisine]=0;
      }
      acc[cuisine]++;  
    });
    return acc;
  }, {});

  let keys = Object.keys(favsObj);
  const sortedFavsArray= keys.sort((keyA, keyB)=> {
    return favsObj[keyB]- favsObj[keyA];  
  });

  const ids = sortedFavsArray.map((cuisineName)=> {
    return fetchCuisineIds(cuisineName, cuisineIdArray);
  });

  const resturantArray = await fetchRecommendedRestaurants(ids, locationObj);
  

  return resturantArray;
};

export const fetchCuisineIds = (cuisineName, cuisineIdArray) => {
  const idsArray = cuisineIdArray.find((cuisine) => {
    return cuisine.cuisine.cuisine_name === cuisineName;
  });
  return idsArray.cuisine.cuisine_id;
};

export const fetchRecommendedRestaurants = async(idsArray, locationObj) => {

  const fetchData = await fetch(`https://developers.zomato.com/api/v2.1/search?lat=${locationObj.lat}&lon=${locationObj.lng}&cuisines=${idsArray[0]}%2C%20${idsArray[1]}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'user-key': apiKey
    }
  });

  const fetchResponse = await fetchData.json();
  const cleanData = cleanRestaurantData(fetchResponse.restaurants);
  return cleanData;
};

const cleanRestaurantData =(restaurantArray) => {
  return restaurantArray.map((restaurant)=>{
    return {
      name: restaurant.restaurant.name,
      data: {
        Cuisines: restaurant.restaurant.cuisines,
        Address: restaurant.restaurant.location.address,
        averagePrice: restaurant.restaurant.price_range,
        costForTwo: restaurant.restaurant.average_cost_for_two,
        Rating: restaurant.restaurant.user_rating.aggregate_rating
      }
    };
    
  });
};
