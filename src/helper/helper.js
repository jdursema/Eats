import { apiKey } from './.apikey.js';

export const fetchRestaurantData = async(lat, lng) => {
    const fetchData = await fetch('https://developers.zomato.com/api/v2.1/geocode?lat=39.754103199999996&lon=-105.0002242', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'user-key':  apiKey
        }
      });
    const fetchResponse = await fetchData.json();
    
    const restaurantArray = await fetchResponse.nearby_restaurants;
    const cleanData = await cleanRestaurantData(restaurantArray)

    console.log(cleanData);
    return cleanData;
   
};

const cleanRestaurantData =(restaurantArray) => {
  return restaurantArray.map((restaurant)=>{
    return {
      name: restaurant.restaurant.name,
      data: {
        Cuisines: restaurant.restaurant.cuisines,
        Address: restaurant.restaurant.location.address,
        Average_Price: restaurant.restaurant.price_range,
        CostForTwo: restaurant.restaurant.average_cost_for_two,
        Rating: restaurant.restaurant.user_rating.aggregate_rating
      }
    };
    
  });
};
