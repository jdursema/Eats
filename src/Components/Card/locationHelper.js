import { googleApiKey } from './.googleapikey.js';


export const geolocationFetch = async () => {
  const fetchLocation = await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${googleApiKey}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json' 
    }
  });
  const fetchResponse = await fetchLocation.json();


  const locationObj = await fetchCityName(fetchResponse.location.lat, fetchResponse.location.lng);

  return await locationObj;
};

const fetchCityName = async (lat, lng) => {
  const fetchCity = await fetch (`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleApiKey}
  `);
  const fetchResponse = await fetchCity.json();

  const responseCity = await fetchResponse.results[4].formatted_address;

  const locationObj = await {name: responseCity, lat: lat, lng: lng};


  return locationObj;
};

