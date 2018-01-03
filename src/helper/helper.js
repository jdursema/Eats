import { apiKey } from './.apikey.js';

export const fetchRestaurantData = async() => {
  if(localStorage.cards.data){
    const storedData = localStorage.getItem('cards')
    const parsedStoredData=JSON.parse(storedData)
    return parsedStoredData
  } else{
    const fetchData = await fetch(`https://developers.zomato.com/api/v2.1/establishments?city_id=31&lat=39.73&lon=104.99
    `, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'user-key':  apiKey
        }
      });
    const fetchResponse = await fetchData.json();
    // console.log(fetchResponse);
  
    const restaurantArray = await fetchResponse.establishments;
  
    // console.log(restaurantArray)
    const fetchIndividualData = await fetchIndividualRestaurantData(restaurantArray)
    console.log(fetchIndividualData)
    const stringifiedData = await JSON.stringify(fetchIndividualData);
    localStorage.setItem('cards', stringifiedData)
    return fetchIndividualData;
  } 
};


const fetchIndividualRestaurantData = (restaurantArray) => {
  const restaurantId = restaurantArray.map( async(restaurantObj)=> {
    const fetchData = await fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${ restaurantObj.establishment.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'user-key':  apiKey
      }
    });
    const fetchResponse = await fetchData.json();
    if (fetchResponse.name){
      return {
        name: fetchResponse.name,
        data: {
          priceRange: fetchResponse.price_range,
          avgCost: fetchResponse.average_cost_for_two,
          cusisines: fetchResponse.cuisines,
          reservations: fetchResponse.has_table_booking,
          delivery: fetchResponse.has_online_delivery,
          rating: fetchResponse.user_rating.aggregate_rating,
          address: fetchResponse.location.address
        }
      };
    }   
  });
  return Promise.all(restaurantId);
};