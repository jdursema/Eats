import { googleApiKey } from './.googleapikey.js'
export const geolocationFetch = async () => {
  const fetchLocation = await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${googleApiKey}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json' 
    }
  });
  return await fetchLocation.json();
};