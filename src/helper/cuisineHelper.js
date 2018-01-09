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
  return fetchResponse.cuisines;
};