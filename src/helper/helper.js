/*eslint-disable max-len*/
/*eslint-disable id-blacklist*/

import { apiKey } from './.apikey.js';

export const fetchCuisineIds = async(lat, lng) => {

  const fetchData = await fetch(`https://developers.zomato.com/api/v2.1/cuisines?lat=${lat}&lon=${lng}
  `, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'user-key':  apiKey
    }

  });
  const fetchResponse = await fetchData.json();
  return fetchResponse.cuisines
}

export const fetchRestaurantData = async(lat, lng) => {
  const fetchData = await fetch(`https://developers.zomato.com/api/v2.1/search?lat=${lat}lon=${lng}
  `, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'user-key':  apiKey
    }
  });
  const fetchResponse = await fetchData.json();
    console.log(fetchResponse)
  const restaurantArray = await fetchResponse.restaurants;
  console.log(restaurantArray)
  const cleanData = await cleanRestaurantData(restaurantArray);

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
