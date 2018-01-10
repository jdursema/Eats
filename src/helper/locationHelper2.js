import { googleMapsApiKey } from './.googlemapsapikey.js';

export const searchLocationFetch = async (location) => {
  const fetchLocation = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${googleMapsApiKey}`);

  const fetchResponse = await fetchLocation.json();
  console.log(fetchResponse)
  const locationData = fetchResponse.results[0];
  return await Object.assign({}, 
    {name: locationData.formatted_address}, 
    locationData.geometry.location
  );
};